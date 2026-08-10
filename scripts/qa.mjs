#!/usr/bin/env node
/**
 * Post-build QA.
 *
 * Parses every generated HTML file and checks the things that silently break
 * an SEO build: duplicate metadata, missing H1s, broken internal links, orphan
 * pages, missing schema, thin FAQ coverage and image alt gaps.
 *
 * Writes reports/qa.json (machine readable) and reports/qa.md (human readable),
 * and exits non-zero if any CRITICAL check fails.
 */
import { readFile, writeFile, mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const DIST = path.join(ROOT, 'dist')
const ORIGIN = 'https://theretailpackaging.com'

const catalog = JSON.parse(await readFile(path.join(ROOT, 'src/data/catalog.json'), 'utf8'))
const removedNames = new Set(
  (catalog.products ?? []).length ? [] : []
) // placeholder; real removed list read below

// Products from the Removed worksheet must never appear as a route.
let removedSlugs = []
try {
  const rep = JSON.parse(await readFile(path.join(ROOT, 'reports/image-validation.json'), 'utf8'))
  removedSlugs = rep.issues?.removedLeak ?? []
} catch { /* report optional */ }

/* ------------------------------------------------------------------ */
async function walk(dir) {
  const out = []
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...(await walk(p)))
    else if (e.name.endsWith('.html')) out.push(p)
  }
  return out
}

const files = await walk(DIST)
const pages = new Map()

const pick = (html, re) => (html.match(re) ?? [])[1] ?? null
const all = (html, re) => [...html.matchAll(re)]

for (const file of files) {
  const html = await readFile(file, 'utf8')
  const route =
    '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/')
  const norm = route === '/' ? '/' : route.endsWith('/') ? route : route + '/'

  const canonical = pick(html, /<link rel="canonical" href="([^"]+)"/)
  const title = pick(html, /<title>([\s\S]*?)<\/title>/)
  const desc = pick(html, /<meta name="description" content="([^"]*)"/)
  const robots = pick(html, /<meta name="robots" content="([^"]*)"/) ?? ''
  const h1s = all(html, /<h1[^>]*>([\s\S]*?)<\/h1>/g).map((m) => m[1].replace(/<[^>]+>/g, '').trim())
  const ld = all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g).map((m) => m[1])
  const imgs = all(html, /<img\b[^>]*>/g).map((m) => m[0])
  const links = all(html, /<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g).map((m) => ({
    href: m[1],
    text: m[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
  }))
  const faqCount = (html.match(/class="faq-item"/g) ?? []).length

  pages.set(norm, {
    route: norm, file, title, desc, canonical, robots,
    h1s, ld, imgs, links, faqCount,
    noindex: robots.includes('noindex'),
    bytes: Buffer.byteLength(html),
  })
}

/* ------------------------------------------------------------------ */
const issues = { critical: [], high: [], medium: [], info: [] }
const add = (sev, type, detail) => issues[sev].push({ type, ...detail })

const indexable = [...pages.values()].filter((p) => !p.noindex)

// --- metadata ---
const byTitle = new Map()
const byDesc = new Map()
for (const p of indexable) {
  if (!p.title) add('critical', 'missing-title', { route: p.route })
  if (!p.desc) add('critical', 'missing-description', { route: p.route })
  if (!p.canonical) add('critical', 'missing-canonical', { route: p.route })
  else {
    if (!p.canonical.startsWith(ORIGIN)) add('critical', 'canonical-wrong-host', { route: p.route, canonical: p.canonical })
    if (!p.canonical.endsWith('/')) add('critical', 'canonical-no-trailing-slash', { route: p.route, canonical: p.canonical })
    if (p.canonical !== ORIGIN + p.route) add('high', 'canonical-mismatch', { route: p.route, canonical: p.canonical })
    if (/[A-Z]/.test(new URL(p.canonical).pathname)) add('critical', 'canonical-uppercase', { route: p.route })
  }
  if (p.h1s.length === 0) add('critical', 'missing-h1', { route: p.route })
  if (p.h1s.length > 1) add('critical', 'multiple-h1', { route: p.route, count: p.h1s.length })
  if (p.title) {
    if (p.title.length > 65) add('medium', 'title-too-long', { route: p.route, len: p.title.length })
    if (p.title.length < 25) add('medium', 'title-too-short', { route: p.route, len: p.title.length })
    byTitle.set(p.title, [...(byTitle.get(p.title) ?? []), p.route])
  }
  if (p.desc) {
    if (p.desc.length > 165) add('medium', 'description-too-long', { route: p.route, len: p.desc.length })
    if (p.desc.length < 70) add('medium', 'description-too-short', { route: p.route, len: p.desc.length })
    byDesc.set(p.desc, [...(byDesc.get(p.desc) ?? []), p.route])
  }
  if (p.ld.length === 0) add('high', 'missing-schema', { route: p.route })
  for (const raw of p.ld) {
    try { JSON.parse(raw) } catch { add('critical', 'invalid-json-ld', { route: p.route }) }
  }
}
for (const [t, routes] of byTitle) if (routes.length > 1) add('critical', 'duplicate-title', { title: t, routes })
for (const [d, routes] of byDesc) if (routes.length > 1) add('critical', 'duplicate-description', { description: d.slice(0, 60), routes })

// --- URLs ---
for (const p of pages.values()) {
  if (/[A-Z]/.test(p.route)) add('critical', 'uppercase-route', { route: p.route })
  if (p.route !== '/' && !p.route.endsWith('/')) add('critical', 'route-no-trailing-slash', { route: p.route })
}
for (const slug of removedSlugs) add('critical', 'removed-product-published', { slug })

// --- internal links ---
const known = new Set(pages.keys())
const inbound = new Map([...known].map((k) => [k, 0]))
const BAD_ANCHORS = new Set(['click here', 'read more', 'learn more', 'view', 'explore', 'here',
  'see more', 'this page', 'check this out', 'discover', 'more', 'link'])

for (const p of pages.values()) {
  const seenTargets = new Map()
  for (const l of p.links) {
    const href = l.href
    if (!href.startsWith('/') || href.startsWith('//')) continue
    const clean = href.split('#')[0].split('?')[0]
    if (!clean) continue
    // static assets are fine
    if (/\.(xml|txt|json|png|jpg|jpeg|webp|svg|ico|webmanifest|pdf)$/.test(clean)) continue
    const target = clean.endsWith('/') ? clean : clean + '/'
    if (!known.has(target)) {
      add('critical', 'broken-internal-link', { from: p.route, href, anchor: l.text.slice(0, 60) })
      continue
    }
    if (!clean.endsWith('/')) add('high', 'link-missing-trailing-slash', { from: p.route, href })
    inbound.set(target, (inbound.get(target) ?? 0) + 1)
    seenTargets.set(target, (seenTargets.get(target) ?? 0) + 1)
    const a = l.text.toLowerCase().replace(/[.,!?]/g, '').trim()
    if (a && BAD_ANCHORS.has(a)) add('high', 'generic-anchor', { from: p.route, anchor: l.text, href })
  }
  if (p.links.length > 320) add('medium', 'excessive-links', { route: p.route, count: p.links.length })
}

// Orphans: indexable pages with no inbound internal link.
for (const p of indexable) {
  if (p.route === '/') continue
  if ((inbound.get(p.route) ?? 0) === 0) add('high', 'orphan-page', { route: p.route })
}

// --- images ---
for (const p of pages.values()) {
  for (const tag of p.imgs) {
    if (!/\balt=/.test(tag)) add('critical', 'image-missing-alt', { route: p.route, tag: tag.slice(0, 90) })
    if (!/\bwidth=/.test(tag) || !/\bheight=/.test(tag)) {
      add('high', 'image-missing-dimensions', { route: p.route, tag: tag.slice(0, 90) })
    }
  }
}

// --- FAQ coverage ---
const needsFaqs = (r) =>
  r === '/' ||
  /^\/(locations)\/[^/]+\/$/.test(r) ||
  (r.split('/').filter(Boolean).length === 1 &&
    !['search', 'thank-you', '404', 'sitemap', 'blog', 'resources', 'locations',
      'privacy-policy', 'terms-and-conditions', 'cookie-policy', 'accessibility-statement'].includes(
      r.replaceAll('/', '')
    ))
for (const p of indexable) {
  if (needsFaqs(p.route) && p.faqCount < 10) {
    add('high', 'insufficient-faqs', { route: p.route, count: p.faqCount })
  }
}

// --- catalogue coverage ---
for (const c of catalog.categories) {
  if (!known.has(`/${c.slug}/`)) add('critical', 'missing-category-route', { slug: c.slug })
}
for (const pr of catalog.products) {
  if (!known.has(`/${pr.slug}/`)) add('critical', 'missing-product-route', { slug: pr.slug })
}

// --- page weight ---
for (const p of pages.values()) {
  if (p.bytes > 400_000) add('medium', 'large-html', { route: p.route, kb: Math.round(p.bytes / 1024) })
}

/* ------------------------------------------------------------------ */
const summary = {
  pages: pages.size,
  indexable: indexable.length,
  noindex: pages.size - indexable.length,
  categories: catalog.categories.length,
  products: catalog.products.length,
  critical: issues.critical.length,
  high: issues.high.length,
  medium: issues.medium.length,
  info: issues.info.length,
}

const group = (arr) => {
  const m = {}
  for (const i of arr) (m[i.type] ??= []).push(i)
  return Object.entries(m).sort((a, b) => b[1].length - a[1].length)
}

await mkdir(path.join(ROOT, 'reports'), { recursive: true })
await writeFile(path.join(ROOT, 'reports/qa.json'), JSON.stringify({ summary, issues }, null, 1))

let md = `# QA report\n\n`
md += `| Metric | Value |\n|---|---|\n`
for (const [k, v] of Object.entries(summary)) md += `| ${k} | ${v} |\n`
for (const sev of ['critical', 'high', 'medium', 'info']) {
  const g = group(issues[sev])
  md += `\n## ${sev.toUpperCase()} — ${issues[sev].length}\n\n`
  if (!g.length) { md += `None.\n`; continue }
  for (const [type, list] of g) {
    md += `### ${type} (${list.length})\n`
    for (const i of list.slice(0, 15)) {
      const { type: _t, ...rest } = i
      md += `- ${JSON.stringify(rest)}\n`
    }
    if (list.length > 15) md += `- …and ${list.length - 15} more\n`
    md += `\n`
  }
}
await writeFile(path.join(ROOT, 'reports/qa.md'), md)

console.log(`pages ${summary.pages} | indexable ${summary.indexable}`)
console.log(`CRITICAL ${summary.critical} | HIGH ${summary.high} | MEDIUM ${summary.medium}`)
for (const sev of ['critical', 'high']) {
  for (const [type, list] of group(issues[sev])) console.log(`  [${sev}] ${type}: ${list.length}`)
}
console.log('reports/qa.json, reports/qa.md')
process.exit(summary.critical > 0 ? 1 : 0)
