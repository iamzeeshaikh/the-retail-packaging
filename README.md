# The Retail Packaging

Production website for **theretailpackaging.com** — a custom retail packaging manufacturer serving the United States.

Astro 7, fully static, TypeScript strict. One serverless function handles quote submissions; everything else is prerendered HTML.

---

## Quick start

```bash
npm install
cp .env.example .env.local     # fill in SMTP values to enable the quote form
npm run dev
```

Production verification (type check → build → QA):

```bash
npm run verify
```

---

## Architecture

| Concern | Approach |
|---|---|
| Rendering | Fully static (`output: 'static'`), 489 prerendered pages |
| Adapter | None — deliberately removed, so the site is host-agnostic |
| Forms | Single Vercel Node function at `api/quote.js` |
| Images | Pre-optimised to WebP by `scripts/process-images.mjs`, served from `public/` |
| JS shipped | ~8 KB total across the site; ~6 KB of that only on the packaging tool |
| Fonts | System stack only — zero webfont requests, no render-blocking, no CLS |
| Search | Static JSON index at `/search-index.json`, fetched on demand |

### Why no Astro adapter

The site has exactly one dynamic requirement: the quote form. A plain Vercel function at `/api` covers it without pulling the adapter in, which keeps the build fully static and removed the only `npm audit` finding in the project (a transitive `path-to-regexp` advisory inside `@astrojs/vercel`). Current audit status: **0 vulnerabilities**.

### Directory map

```
api/quote.js               Quote endpoint — validation, uploads, rate limit, email
scripts/
  build-catalog.py         Spreadsheet → src/data/catalog.json (+ validation report)
  process-images.mjs       Source PNGs → responsive WebP + src/data/images.json
  qa.mjs                   Post-build QA, writes reports/qa.{json,md}
src/
  components/              Header, Footer, QuoteForm, Gallery, BoxScene, Faqs, cards
  content/blog/            10 markdown articles
  content/resources/       15 markdown guides
  data/
    catalog.json           Generated — do not edit by hand
    images.json            Generated — do not edit by hand
    locations.ts           20 states + 20 cities, hand-written regional facts
    pages.ts               Informational page copy and FAQs
    legal.ts               Privacy, terms, cookies, accessibility
  layouts/Base.astro       Head, meta, schema, header/footer, reveal observer
  lib/
    catalog.ts             Typed catalogue access, related products, image helpers
    taxonomy.ts            Form-factor classification and attribute tables
    copy.ts                Attribute-driven page copy, FAQs, metadata
    schema.ts              JSON-LD builders
    site.ts                Central site constants and canonical URL helper
  pages/
    [slug]/index.astro     Categories + products (single root-level route)
    [info].astro           Informational pages
    [legal].astro          Legal pages
    locations/[place]/     40 location pages
    blog/, resources/      Content collection routes
  templates/               CategoryPage, ProductPage, ArticleLayout
```

---

## Content pipeline

The spreadsheet is the source of truth for the catalogue. Regenerate after any change:

```bash
npm run catalog      # reads categories-products-final.xlsx, reconciles with folders
npm run images       # converts any new source images (skips existing)
npm run build
```

`build-catalog.py` fails loudly rather than guessing: it reports products missing on disk, extra folders, image-count mismatches, and anything from the **Removed** worksheet that leaked into the live set. Current status: **0 discrepancies** across 26 categories, 371 products, 1,947 images.

### Source images

Source PNGs live outside the repo at `~/Documents/the-retail-packaging/` (1.7 GB) and are never committed. Only optimised WebP renditions ship, at 400/800/1400 px widths (145 MB, 5,841 files). Update `ASSETS` in `scripts/build-catalog.py` if that folder moves.

### How product copy is generated

371 product pages cannot be hand-written, but they must not be keyword-swapped templates either. Each product is classified into one of 19 **form factors** (`src/lib/taxonomy.ts`), each carrying real attributes — construction method, substrates, size bands, print routes, finishes, add-ons, minimums, artwork notes. Page copy, specification tables and FAQs are composed from those facts, and sentence frames vary by a stable hash of the slug, so two products read alike only when they genuinely are alike.

Category positioning (`CATEGORY_NOTES` in `src/lib/copy.ts`) is hand-written per category — the angle, what decides the specification, and the mistake buyers most often make.

---

## Environment variables

Set in `.env.local` for development and in the Vercel dashboard for production. See `.env.example` for the full list with placeholders.

| Variable | Required | Purpose |
|---|---|---|
| `SMTP_HOST` | Yes | Mail server hostname |
| `SMTP_PORT` | Yes | Usually 587 |
| `SMTP_SECURE` | No | `true` for port 465 |
| `SMTP_USER` | Yes | SMTP username |
| `SMTP_PASS` | Yes | SMTP password |
| `QUOTE_TO_EMAIL` | Yes | Where quote requests are delivered |
| `QUOTE_FROM_EMAIL` | No | Visible sender; falls back to `SMTP_USER` |
| `PUBLIC_GA4_ID` | No | GA4 measurement ID. No script loads if blank |
| `PUBLIC_GTM_ID` | No | GTM container ID, used only if GA4 is unset |
| `PUBLIC_GSC_VERIFICATION` | No | Search Console meta verification token |

**Without SMTP configured the form returns a clear 503 and tells the visitor to email instead.** It never fails silently.

---

## Deployment

Vercel, framework preset **Astro**, build `npm run build`, output `dist`.

`vercel.json` sets `trailingSlash: true`, immutable caching for `/images`, `/_astro` and static assets, legacy redirects, and security headers: CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy`.

The CSP allows Google Tag Manager and Analytics hosts so analytics works when an ID is set. Remove those entries if analytics will never be enabled.

### Deployment checklist

1. `npm run verify` passes locally (check → build → QA, 0 critical)
2. SMTP variables set in the Vercel project
3. `QUOTE_TO_EMAIL` points at a monitored inbox
4. Submit a test quote on the deployed URL and confirm delivery, attachment and reply-to
5. Confirm `https://theretailpackaging.com/` resolves without `www` and with a trailing slash
6. Submit `/sitemap-index.xml` in Search Console
7. Set `PUBLIC_GSC_VERIFICATION` if verifying by meta tag
8. Spot-check a category, a product, a location page and the packaging tool on a phone

---

## Testing the quote form

Locally, Astro's dev server does not run `/api`. Use `vercel dev` to exercise the endpoint:

```bash
npx vercel dev
```

What to verify:

- Client validation blocks empty name, invalid email, short phone, short message
- Entered data survives a failed submission — the form is never cleared on error
- Files over 10 MB and disallowed extensions are rejected and flagged in the file list
- Honeypot (`company_url`) and sub-1.5-second submissions return `200` without sending
- Seventh submission from one IP inside 10 minutes returns `429`
- Success redirects to `/thank-you/` and shows the `TRP-…` reference
- With SMTP unset, a clear 503 message appears rather than a silent failure

---

## Quality control

`npm run qa` parses every built HTML file and checks: duplicate titles and descriptions, missing or multiple H1s, canonical correctness (host, case, trailing slash, self-reference), JSON-LD presence and validity, broken internal links, non-trailing-slash internal links, generic anchor text, orphan pages, missing image `alt`, missing image dimensions, FAQ counts below 10 on pages that require them, missing category and product routes, removed-worksheet leakage, and oversized HTML.

It exits non-zero on any critical finding and writes both `reports/qa.json` and `reports/qa.md`.

The checks are self-verified: injecting a broken link and a removed `<h1>` into the build makes it fail with exactly those two criticals.

---

## Content updates

**New product** — add the row to the spreadsheet, drop images into a matching folder, then `npm run catalog && npm run images && npm run build`. The page, schema, FAQs and internal links generate themselves.

**New article** — add a markdown file to `src/content/blog/` with the frontmatter fields in `src/content.config.ts`. `heroProduct` takes a product slug and pulls that product's first image as the hero.

**New location** — append to `states` or `cities` in `src/data/locations.ts`. Every field is used; regional facts must be real, and the template deliberately states that no local office exists.

**Informational page** — append to `infoPages` in `src/data/pages.ts`.

---

## Deliberate constraints

Things the build does **not** do, on purpose:

- **No ratings or reviews in schema.** `RATINGS_ENABLED` in `src/lib/schema.ts` is `false`. The `aggregateRating` and `review` plumbing exists but emits nothing until real, visible review data is supplied. Flip the flag and pass a `rating` object once it is.
- **No instant price calculator.** The packaging tool builds a specification and sends it; it does not invent a price, because no verified pricing formula was supplied.
- **No claimed local offices.** Location pages state plainly that there is no facility in that city.
- **No invented statistics, certifications or client logos.**
- **No webfonts.** A system stack keeps LCP fast and eliminates font-swap CLS. Swap `--font-display` / `--font-body` in `src/styles/global.css` if brand fonts are licensed later.
