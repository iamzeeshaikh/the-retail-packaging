#!/usr/bin/env python3
"""
Site-wide content-uniqueness and layout audit.

Reads the built HTML in dist/ and reports where pages repeat each other:
duplicate paragraphs, headings, FAQs, metadata, section sequences and
internal-link sets, plus the structural faults (multiple footers, duplicated
FAQ blocks, thin bodies) that make a template look mass-produced.

Writes reports/content-audit.json and reports/content-audit.md.
Exit code is always 0 — this reports, it does not gate the build.
"""
from __future__ import annotations

import html
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
REPORTS = ROOT / "reports"

# ---------------------------------------------------------------- parsing

TAG = re.compile(r"<[^>]+>")
WS = re.compile(r"\s+")


def text_of(fragment: str) -> str:
    return WS.sub(" ", html.unescape(TAG.sub(" ", fragment))).strip()


def strip_chrome(doc: str) -> str:
    """Body copy only — header, footer and nav repeat by design."""
    body = doc
    for tag in ("header", "footer", "nav"):
        body = re.sub(rf"<{tag}\b.*?</{tag}>", " ", body, flags=re.S)
    body = re.sub(r"<script\b.*?</script>", " ", body, flags=re.S)
    body = re.sub(r"<style\b.*?</style>", " ", body, flags=re.S)
    return body


def route_of(path: Path) -> str:
    rel = path.relative_to(DIST).as_posix()
    if rel == "404.html":
        return "/404"
    return "/" + rel[: -len("index.html")]


LEGAL = {"/privacy-policy/", "/terms-and-conditions/", "/cookie-policy/",
         "/accessibility-statement/"}
UTILITY = {"/sitemap/", "/search/", "/thank-you/", "/404"}


def page_type(route: str) -> str:
    if route in LEGAL:
        return "legal"
    if route in UTILITY:
        return "utility"
    if route == "/":
        return "home"
    if route.startswith("/locations/"):
        depth = len([s for s in route.split("/") if s])
        return "location-hub" if depth == 1 else "location"
    if route.startswith("/blog/"):
        return "blog-index" if route == "/blog/" else "blog"
    if route.startswith("/resources/"):
        return "resource-index" if route == "/resources/" else "resource"
    return "other"


# ---------------------------------------------------------------- model


class Page:
    __slots__ = (
        "route", "type", "title", "desc", "canonical", "robots", "h1s",
        "headings", "paras", "faqs", "links", "anchors", "words",
        "footers", "faq_blocks", "schema_types", "og_title", "og_desc",
        "faq_schema_blocks",
    )

    def __init__(self, path: Path):
        doc = path.read_text(encoding="utf8", errors="replace")
        self.route = route_of(path)

        m = re.search(r"<title>(.*?)</title>", doc, re.S)
        self.title = text_of(m.group(1)) if m else ""
        m = re.search(r'<meta name="description" content="([^"]*)"', doc)
        self.desc = html.unescape(m.group(1)) if m else ""
        m = re.search(r'<meta property="og:title" content="([^"]*)"', doc)
        self.og_title = html.unescape(m.group(1)) if m else ""
        m = re.search(r'<meta property="og:description" content="([^"]*)"', doc)
        self.og_desc = html.unescape(m.group(1)) if m else ""
        m = re.search(r'<link rel="canonical" href="([^"]*)"', doc)
        self.canonical = m.group(1) if m else ""
        m = re.search(r'<meta name="robots" content="([^"]*)"', doc)
        self.robots = m.group(1) if m else ""

        self.footers = len(re.findall(r"<footer\b", doc))

        # schema
        self.schema_types: list[str] = []
        self.faq_schema_blocks = 0
        for blob in re.findall(
            r'<script type="application/ld\+json">(.*?)</script>', doc, re.S
        ):
            try:
                data = json.loads(blob)
            except Exception:
                continue
            nodes = data.get("@graph", [data]) if isinstance(data, dict) else []
            for n in nodes:
                t = n.get("@type")
                if isinstance(t, str):
                    self.schema_types.append(t)
                    if t == "FAQPage":
                        self.faq_schema_blocks += 1

        body = strip_chrome(doc)

        self.h1s = [text_of(x) for x in re.findall(r"<h1\b[^>]*>(.*?)</h1>", body, re.S)]
        self.headings = [
            text_of(x)
            for x in re.findall(r"<h[23]\b[^>]*>(.*?)</h[23]>", body, re.S)
            if text_of(x)
        ]

        self.paras = [
            t
            for t in (text_of(x) for x in re.findall(r"<p\b[^>]*>(.*?)</p>", body, re.S))
            if len(t.split()) >= 12
        ]

        # FAQ pairs come from the rendered accordion markup
        self.faqs = []
        for q, a in re.findall(
            r"<summary\b[^>]*>(.*?)</summary>(.*?)</details>", body, re.S
        ):
            qq, aa = text_of(q), text_of(a)
            if qq:
                self.faqs.append((qq, aa))
        self.faq_blocks = len(re.findall(r'data-faq-block', doc)) or len(
            re.findall(r"<h2[^>]*>[^<]*(?:FAQ|Questions)[^<]*</h2>", body)
        )

        self.links = sorted(
            {
                h.split("#")[0]
                for h in re.findall(r'<a\b[^>]*href="(/[^"]*)"', body)
                if not h.startswith("/#")
            }
        )
        self.anchors = [
            text_of(a).lower()
            for a in re.findall(r'<a\b[^>]*href="/[^"]*"[^>]*>(.*?)</a>', body, re.S)
            if text_of(a)
        ]
        self.words = len(text_of(body).split())
        self.type = page_type(self.route)


# ---------------------------------------------------------------- similarity

STOP = set(
    "a an and are as at be by for from has have in is it its of on or that the to "
    "we you your with will can our not this these those they their".split()
)


def shingles(text: str, n: int = 5) -> set[str]:
    toks = [t for t in re.findall(r"[a-z0-9]+", text.lower()) if t not in STOP]
    if len(toks) < n:
        return {" ".join(toks)} if toks else set()
    return {" ".join(toks[i : i + n]) for i in range(len(toks) - n + 1)}


def jaccard(a: set, b: set) -> float:
    if not a or not b:
        return 0.0
    inter = len(a & b)
    return inter / (len(a) + len(b) - inter)


def near_dupe_pairs(items: dict[str, set], threshold: float) -> list[tuple]:
    """Inverted index over shingles so we only score plausible pairs."""
    index: dict[str, list[str]] = defaultdict(list)
    for key, sh in items.items():
        for s in list(sh)[:400]:
            index[s].append(key)
    cand: set[tuple[str, str]] = set()
    for keys in index.values():
        if len(keys) < 2 or len(keys) > 60:
            continue
        for i in range(len(keys)):
            for j in range(i + 1, len(keys)):
                cand.add((keys[i], keys[j]) if keys[i] < keys[j] else (keys[j], keys[i]))
    out = []
    for a, b in cand:
        s = jaccard(items[a], items[b])
        if s >= threshold:
            out.append((a, b, round(s, 3)))
    return sorted(out, key=lambda x: -x[2])


# ---------------------------------------------------------------- audit

def main() -> None:
    pages = [Page(p) for p in sorted(DIST.rglob("*.html"))]
    by_route = {p.route: p for p in pages}
    indexable = [p for p in pages if "noindex" not in p.robots and p.route != "/404"]

    R: dict = {"totals": {"pages": len(pages), "indexable": len(indexable)}}
    by_type = Counter(p.type for p in pages)
    R["totals"]["by_type"] = dict(by_type)

    # ---- metadata duplication
    def dupes(attr):
        c = defaultdict(list)
        for p in indexable:
            v = getattr(p, attr).strip()
            if v:
                c[v].append(p.route)
        return {k: v for k, v in c.items() if len(v) > 1}

    R["duplicate_titles"] = dupes("title")
    R["duplicate_descriptions"] = dupes("desc")
    R["duplicate_og_titles"] = dupes("og_title")
    R["duplicate_og_descriptions"] = dupes("og_desc")
    c = defaultdict(list)
    for p in indexable:
        for h in p.h1s:
            c[h].append(p.route)
    R["duplicate_h1"] = {k: v for k, v in c.items() if len(v) > 1}

    # ---- structural faults
    R["multiple_h1"] = [p.route for p in pages if len(p.h1s) > 1]
    R["missing_h1"] = [p.route for p in indexable if not p.h1s]
    R["multiple_footers"] = [p.route for p in pages if p.footers > 1]
    R["missing_footer"] = [p.route for p in pages if p.footers == 0]
    R["duplicate_faq_schema"] = [p.route for p in pages if p.faq_schema_blocks > 1]
    R["duplicate_faq_blocks"] = [p.route for p in pages if p.faq_blocks > 1]
    R["missing_canonical"] = [p.route for p in indexable if not p.canonical]
    R["missing_schema"] = [p.route for p in indexable if not p.schema_types]

    # ---- FAQ coverage
    needs_faqs = [p for p in indexable if p.type in ("home", "location", "other")]
    R["pages_under_10_faqs"] = sorted(
        [
            {"route": p.route, "faqs": len(p.faqs), "type": p.type}
            for p in needs_faqs
            if len(p.faqs) < 10
        ],
        key=lambda x: x["faqs"],
    )

    # ---- thin content
    R["thin_pages"] = sorted(
        [
            {"route": p.route, "words": p.words, "type": p.type}
            for p in indexable
            if p.words < 600
        ],
        key=lambda x: x["words"],
    )

    # ---- duplicate paragraphs
    para_map = defaultdict(list)
    for p in indexable:
        for para in p.paras:
            para_map[para].append(p.route)
    exact = {k: v for k, v in para_map.items() if len(v) > 1}
    R["exact_duplicate_paragraphs"] = {
        "count_distinct": len(exact),
        "total_instances": sum(len(v) for v in exact.values()),
        "worst": sorted(
            ({"text": k[:150], "pages": len(v), "sample": v[:3]} for k, v in exact.items()),
            key=lambda x: -x["pages"],
        )[:25],
    }

    # ---- duplicate headings
    head_map = defaultdict(list)
    for p in indexable:
        for h in p.headings:
            head_map[h].append(p.route)
    dup_head = {k: v for k, v in head_map.items() if len(v) > 1}
    R["duplicate_headings"] = {
        "count_distinct": len(dup_head),
        "worst": sorted(
            ({"heading": k, "pages": len(v)} for k, v in dup_head.items()),
            key=lambda x: -x["pages"],
        )[:25],
    }

    # ---- duplicate FAQs
    q_map = defaultdict(list)
    a_map = defaultdict(list)
    for p in indexable:
        for q, a in p.faqs:
            q_map[q].append(p.route)
            if len(a.split()) >= 8:
                a_map[a].append(p.route)
    R["duplicate_faq_questions"] = {
        "count_distinct": len([1 for v in q_map.values() if len(v) > 1]),
        "worst": sorted(
            ({"q": k, "pages": len(v)} for k, v in q_map.items() if len(v) > 1),
            key=lambda x: -x["pages"],
        )[:20],
    }
    R["duplicate_faq_answers"] = {
        "count_distinct": len([1 for v in a_map.values() if len(v) > 1]),
        "worst": sorted(
            ({"a": k[:120], "pages": len(v)} for k, v in a_map.items() if len(v) > 1),
            key=lambda x: -x["pages"],
        )[:20],
    }

    # ---- identical FAQ sets
    faqset = defaultdict(list)
    for p in indexable:
        if p.faqs:
            faqset[tuple(sorted(q for q, _ in p.faqs))].append(p.route)
    R["identical_faq_sets"] = sorted(
        ({"pages": len(v), "sample": v[:4]} for v in faqset.values() if len(v) > 1),
        key=lambda x: -x["pages"],
    )[:15]

    # ---- repeated heading sequences (section order)
    seq = defaultdict(list)
    for p in indexable:
        if p.headings:
            seq[tuple(p.headings)].append(p.route)
    R["identical_heading_sequences"] = sorted(
        ({"pages": len(v), "headings": list(k)[:6], "sample": v[:4]}
         for k, v in seq.items() if len(v) > 1),
        key=lambda x: -x["pages"],
    )[:15]

    # generalised: same *shape* of section order per type
    shape = defaultdict(list)
    for p in indexable:
        shape[(p.type, len(p.headings))].append(p.route)
    R["section_count_uniformity"] = {
        f"{t}:{n}": len(v) for (t, n), v in sorted(shape.items(), key=lambda x: -len(x[1]))[:12]
    }

    # ---- internal link sets
    linkset = defaultdict(list)
    for p in indexable:
        if p.links:
            linkset[tuple(p.links)].append(p.route)
    R["identical_internal_link_sets"] = sorted(
        ({"pages": len(v), "links": len(k), "sample": v[:4]}
         for k, v in linkset.items() if len(v) > 1),
        key=lambda x: -x["pages"],
    )[:15]

    anchor_counter = Counter()
    for p in indexable:
        anchor_counter.update(set(p.anchors))
    R["most_repeated_anchors"] = anchor_counter.most_common(20)

    # ---- orphans and broken links
    all_routes = {p.route for p in pages}
    inbound = Counter()
    broken = defaultdict(list)
    for p in pages:
        for l in p.links:
            if l in all_routes:
                inbound[l] += 1
            elif not re.search(r"\.(xml|txt|json|webp|png|svg|ico|pdf)$", l):
                broken[l].append(p.route)
    R["orphan_pages"] = sorted(
        r for r in all_routes
        if inbound[r] == 0 and r not in ("/", "/404")
    )
    R["broken_links"] = {k: v[:3] for k, v in list(broken.items())[:30]}

    # ---- body-copy similarity within page type
    sims = {}
    for t in ("location", "other", "blog", "resource"):
        group = {p.route: shingles(" ".join(p.paras)) for p in indexable if p.type == t}
        if len(group) < 2:
            continue
        pairs = near_dupe_pairs(group, 0.20)
        sims[t] = {
            "pages": len(group),
            "pairs_over_20pct": len(pairs),
            "worst": [{"a": a, "b": b, "similarity": s} for a, b, s in pairs[:12]],
        }
    R["body_similarity"] = sims

    # ---- heading overlap within type
    hov = {}
    for t in ("location", "other", "blog", "resource"):
        group = {p.route: set(h.lower() for h in p.headings) for p in indexable if p.type == t}
        group = {k: v for k, v in group.items() if v}
        flagged = []
        keys = list(group)
        for i in range(len(keys)):
            for j in range(i + 1, len(keys)):
                a, b = keys[i], keys[j]
                inter = len(group[a] & group[b])
                denom = min(len(group[a]), len(group[b])) or 1
                pct = inter / denom
                if pct > 0.40:
                    flagged.append((a, b, round(pct, 2)))
        hov[t] = {
            "pages": len(group),
            "pairs_over_40pct": len(flagged),
            "worst": [{"a": a, "b": b, "overlap": p} for a, b, p in sorted(flagged, key=lambda x: -x[2])[:10]],
        }
    R["heading_overlap"] = hov

    REPORTS.mkdir(exist_ok=True)
    (REPORTS / "content-audit.json").write_text(json.dumps(R, indent=1), encoding="utf8")

    # ------------------------------------------------------------ markdown
    L = []
    A = L.append
    A("# Content uniqueness audit\n")
    A(f"`{R['totals']['pages']}` pages built, `{R['totals']['indexable']}` indexable.\n")
    A("| type | pages |")
    A("|---|---|")
    for t, n in sorted(by_type.items(), key=lambda x: -x[1]):
        A(f"| {t} | {n} |")
    A("")

    A("## Headline numbers\n")
    A("| check | result |")
    A("|---|---|")
    A(f"| Duplicate title tags | {len(R['duplicate_titles'])} groups |")
    A(f"| Duplicate meta descriptions | {len(R['duplicate_descriptions'])} groups |")
    A(f"| Duplicate OG titles | {len(R['duplicate_og_titles'])} groups |")
    A(f"| Duplicate H1s | {len(R['duplicate_h1'])} groups |")
    A(f"| Pages with >1 H1 | {len(R['multiple_h1'])} |")
    A(f"| Pages with >1 footer | {len(R['multiple_footers'])} |")
    A(f"| Pages with >1 FAQ block | {len(R['duplicate_faq_blocks'])} |")
    A(f"| Pages with >1 FAQPage schema | {len(R['duplicate_faq_schema'])} |")
    A(f"| Missing canonical | {len(R['missing_canonical'])} |")
    A(f"| Missing schema | {len(R['missing_schema'])} |")
    A(f"| Pages under 10 FAQs | {len(R['pages_under_10_faqs'])} |")
    A(f"| Thin pages (<600 words) | {len(R['thin_pages'])} |")
    A(f"| Distinct duplicated paragraphs | {R['exact_duplicate_paragraphs']['count_distinct']} |")
    A(f"| Duplicated paragraph instances | {R['exact_duplicate_paragraphs']['total_instances']} |")
    A(f"| Distinct duplicated headings | {R['duplicate_headings']['count_distinct']} |")
    A(f"| Duplicated FAQ questions | {R['duplicate_faq_questions']['count_distinct']} |")
    A(f"| Duplicated FAQ answers | {R['duplicate_faq_answers']['count_distinct']} |")
    A(f"| Identical FAQ sets | {len(R['identical_faq_sets'])} groups |")
    A(f"| Identical heading sequences | {len(R['identical_heading_sequences'])} groups |")
    A(f"| Identical internal-link sets | {len(R['identical_internal_link_sets'])} groups |")
    A(f"| Orphan pages | {len(R['orphan_pages'])} |")
    A(f"| Broken internal links | {len(R['broken_links'])} |")
    A("")

    A("## Most-repeated paragraphs\n")
    A("| pages | paragraph |")
    A("|---|---|")
    for w in R["exact_duplicate_paragraphs"]["worst"][:15]:
        A(f"| {w['pages']} | {w['text'][:110]}… |")
    A("")

    A("## Most-repeated headings\n")
    A("| pages | heading |")
    A("|---|---|")
    for w in R["duplicate_headings"]["worst"][:15]:
        A(f"| {w['pages']} | {w['heading'][:90]} |")
    A("")

    A("## Most-repeated FAQ questions\n")
    A("| pages | question |")
    A("|---|---|")
    for w in R["duplicate_faq_questions"]["worst"][:12]:
        A(f"| {w['pages']} | {w['q'][:100]} |")
    A("")

    A("## Body-copy similarity within page type\n")
    A("| type | pages | pairs >20% similar | worst pair |")
    A("|---|---|---|---|")
    for t, d in sims.items():
        worst = d["worst"][0] if d["worst"] else None
        s = f"{worst['a']} ↔ {worst['b']} ({worst['similarity']})" if worst else "—"
        A(f"| {t} | {d['pages']} | {d['pairs_over_20pct']} | {s} |")
    A("")

    A("## Heading overlap within page type\n")
    A("| type | pages | pairs >40% overlap |")
    A("|---|---|---|")
    for t, d in hov.items():
        A(f"| {t} | {d['pages']} | {d['pairs_over_40pct']} |")
    A("")

    A("## Pages under 10 FAQs\n")
    if R["pages_under_10_faqs"]:
        A("| route | faqs |")
        A("|---|---|")
        for x in R["pages_under_10_faqs"][:30]:
            A(f"| {x['route']} | {x['faqs']} |")
    else:
        A("None.")
    A("")

    A("## Thinnest pages\n")
    A("| route | words |")
    A("|---|---|")
    for x in R["thin_pages"][:25]:
        A(f"| {x['route']} | {x['words']} |")
    A("")

    (REPORTS / "content-audit.md").write_text("\n".join(L), encoding="utf8")

    print(f"pages {R['totals']['pages']} | indexable {R['totals']['indexable']}")
    print(f"dup titles {len(R['duplicate_titles'])} | dup descs {len(R['duplicate_descriptions'])}"
          f" | dup H1 {len(R['duplicate_h1'])}")
    print(f"dup paragraphs {R['exact_duplicate_paragraphs']['count_distinct']} distinct /"
          f" {R['exact_duplicate_paragraphs']['total_instances']} instances")
    print(f"dup headings {R['duplicate_headings']['count_distinct']} | dup FAQ Qs "
          f"{R['duplicate_faq_questions']['count_distinct']} | identical FAQ sets {len(R['identical_faq_sets'])}")
    print(f"identical heading sequences {len(R['identical_heading_sequences'])} |"
          f" identical link sets {len(R['identical_internal_link_sets'])}")
    print(f"<10 FAQs {len(R['pages_under_10_faqs'])} | thin {len(R['thin_pages'])} |"
          f" orphans {len(R['orphan_pages'])} | broken {len(R['broken_links'])}")
    print(f"multi-footer {len(R['multiple_footers'])} | multi-FAQ-block {len(R['duplicate_faq_blocks'])} |"
          f" multi-H1 {len(R['multiple_h1'])}")
    for t, d in sims.items():
        print(f"  body similarity [{t}]: {d['pairs_over_20pct']} pairs >20% of {d['pages']} pages")
    print("→ reports/content-audit.md")


if __name__ == "__main__":
    main()
