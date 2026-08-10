#!/usr/bin/env python3
"""Repair the token cascade after the palette change, and introduce the accent.

Two problems fixed here:

1. Renaming the palette left --forest*, --champagne*, --ivory* and .section-forest
   / .btn-gold referenced across a dozen components with nothing behind them.
   Undefined custom properties resolve to nothing, which is why the CTA band
   rendered white text on a light ground and several sections looked washed out.

2. The result was entirely achromatic. A single warm accent is introduced —
   picked to sit alongside the client's zeepack.co CTA colour rather than
   repeat the plum of lipboxes.com or the forest/champagne pair already rejected.
"""
import pathlib
import re

ROOT = pathlib.Path(".")
SRC = ROOT / "src"

# old token -> new token
VAR_MAP = {
    "--forest-bright": "--accent",
    "--forest-deep": "--accent-deep",
    "--forest-tint": "--accent-tint",
    "--forest": "--accent",
    "--champagne-soft": "--accent-soft",
    "--champagne-tint": "--accent-tint",
    "--champagne": "--accent",
    "--ivory-deep": "--bone-deep",
    "--ivory": "--bone",
    "--border-strong": "--rule-strong",
    "--stone-100": "--rule",
    "--stone-200": "--rule-strong",
    "--stone-300": "--ink-4",
    "--stone-400": "--ink-3",
    "--stone-500": "--ink-2",
    "--stone-600": "--ink-2",
    "--ink-soft": "--ink-2",
    "--ink-line": "--rule",
}

CLASS_MAP = {
    "section-forest": "section-ink",
    "btn-gold": "btn-accent",
    "section-ivory": "section-bone",
    "badge-neutral": "badge",
    "badge-gold": "badge-accent",
    "card-meta": "card-spec",
}

changed = []
for f in sorted(SRC.rglob("*.astro")):
    s = orig = f.read_text()
    # longest names first so --forest-deep isn't clipped by --forest
    for old in sorted(VAR_MAP, key=len, reverse=True):
        s = s.replace(f"var({old})", f"var({VAR_MAP[old]})")
    for old, new in CLASS_MAP.items():
        s = re.sub(rf'(?<=[\s"\']){re.escape(old)}(?=[\s"\'])', new, s)
        s = s.replace(f".{old} ", f".{new} ")
        s = s.replace(f".{old}{{", f".{new}{{")
        s = s.replace(f".{old} {{", f".{new} {{")
    if s != orig:
        f.write_text(s)
        changed.append(str(f.relative_to(ROOT)))

print(f"rewrote {len(changed)} files")
for c in changed:
    print(f"  {c}")

# ---------------------------------------------------------------- accent
css = SRC / "styles/global.css"
s = css.read_text()

s = s.replace(
    """  /* accent — deliberately achromatic. Ink is the accent; photography is the
     only colour on the page. --ox is kept as a token name so nothing else
     needs rewriting, but it now resolves to graphite. */
  --ox:          #111113;
  --ox-deep:     #08080a;
  --ox-bright:   #2a2a30;
  --ox-tint:     #ececee;""",
    """  /* accent — one warm tone against the cool neutral ground. Sits beside the
     zeepack.co CTA the client pointed to, and stays clear of the lipboxes
     plum and the rejected forest/champagne pair. Used for CTAs, links,
     numerals and small marks only; never for large fields. */
  --accent:      #b8532b;   /* burnt sienna */
  --accent-deep: #93401f;
  --accent-soft: #e0a184;
  --accent-tint: #fbf0ea;

  /* legacy alias — several components still name the accent --ox */
  --ox:          var(--accent);
  --ox-deep:     var(--accent-deep);
  --ox-bright:   var(--accent);
  --ox-tint:     var(--accent-tint);""",
)

# buttons: primary returns to the accent, plus a dedicated accent button
s = s.replace(
    ".btn-primary { background: var(--ink); color: #ffffff; }\n.btn-primary:hover { background: var(--ink-deep); color: #ffffff; }",
    ".btn-primary { background: var(--accent); color: #fff; }\n.btn-primary:hover { background: var(--accent-deep); color: #fff; }\n\n.btn-accent { background: var(--accent); color: #fff; }\n.btn-accent:hover { background: var(--accent-deep); color: #fff; }",
)
if ".btn-accent {" not in s:
    s = s.replace(
        ".btn-ink { background: var(--ink); color: var(--bone); }",
        ".btn-accent { background: var(--accent); color: #fff; }\n.btn-accent:hover { background: var(--accent-deep); color: #fff; }\n\n.btn-ink { background: var(--ink); color: var(--bone); }",
    )

# badge variant used by the resource hub
if ".badge-accent" not in s:
    s = s.replace(
        ".badge-solid {",
        ".badge-accent { color: var(--accent); border-color: color-mix(in srgb, var(--accent) 32%, transparent); background: var(--accent-tint); }\n.badge-solid {",
    )

# eyebrows and links pick the accent back up
s = s.replace("  color: var(--ox);\n  margin-bottom: var(--s-4);", "  color: var(--accent);\n  margin-bottom: var(--s-4);")
s = s.replace(".section-ink .eyebrow { color: #a1a1aa; }", ".section-ink .eyebrow { color: var(--accent-soft); }")
s = s.replace(".section-ink a { color: #ffffff; }", ".section-ink a { color: var(--accent-soft); }")
s = s.replace(".section-ink .step::before { color: #a1a1aa; }", ".section-ink .step::before { color: var(--accent-soft); }")
s = s.replace(
    ".section-ink .tick-list li::before { border-color: #ffffff; }",
    ".section-ink .tick-list li::before { border-color: var(--accent-soft); }",
)

css.write_text(s)
print("\naccent introduced: #b8532b burnt sienna")
