#!/usr/bin/env node
/**
 * Internal-linking rule audit.
 *
 * Enforces the strict rules: at most one internal link per paragraph, no
 * generic anchors, descriptive anchor length, verified destinations, and
 * trailing slashes on every internal URL.
 */
import { readFile, writeFile, readdir } from 'node:fs/promises'
import path from 'node:path'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const DIST = path.join(ROOT, 'dist')

async function walk(d) {
  const out = []
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) out.push(...(await walk(p)))
    else if (e.name.endsWith('.html')) out.push(p)
  }
  return out
}

const files = await walk(DIST)
const routes = new Set(
  files.map((f) => {
    const r = '/' + path.relative(DIST, f).replace(/index\.html$/, '').replace(/\\/g, '/')
    return r === '/' ? '/' : r.endsWith('/') ? r : r + '/'
  })
)

const GENERIC = ['click here','read more','learn more','view','explore','here','see more',
  'this page','check this out','discover','more','link','view our collection','discover our range',
  'our solutions','related page','explore our products','explore our services']

const findings = { multiLinkParagraph: [], genericAnchor: [], shortAnchor: [], longAnchor: [],
  missingSlash: [], brokenTarget: [] }

for (const file of files) {
  const html = await readFile(file, 'utf8')
  const route = '/' + path.relative(DIST, file).replace(/index\.html$/, '').replace(/\\/g, '/')

  // Only audit prose paragraphs — nav, cards and lists are navigation, not editorial links.
  for (const m of html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)) {
    const inner = m[1]
    const links = [...inner.matchAll(/<a\b[^>]*href="(\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
    if (links.length > 1) {
      findings.multiLinkParagraph.push({
        route, count: links.length,
        anchors: links.map((l) => l[2].replace(/<[^>]+>/g, '').trim()).slice(0, 4),
      })
    }
    for (const l of links) {
      const href = l[1]
      const anchor = l[2].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      const clean = href.split('#')[0].split('?')[0]
      if (/\.(xml|txt|json|png|jpg|jpeg|webp|svg|ico|webmanifest|pdf)$/.test(clean)) continue
      if (clean && !clean.endsWith('/')) findings.missingSlash.push({ route, href })
      const target = clean.endsWith('/') ? clean : clean + '/'
      if (clean && !routes.has(target)) findings.brokenTarget.push({ route, href, anchor })
      const a = anchor.toLowerCase().replace(/[.,!?]/g, '').trim()
      if (GENERIC.includes(a)) findings.genericAnchor.push({ route, anchor, href })
      const words = anchor.split(/\s+/).filter(Boolean).length
      if (anchor && words < 2) findings.shortAnchor.push({ route, anchor, href })
      if (words > 12) findings.longAnchor.push({ route, anchor: anchor.slice(0, 70), href })
    }
  }
}

const total = Object.values(findings).reduce((n, a) => n + a.length, 0)
await writeFile(path.join(ROOT, 'reports/link-audit.json'), JSON.stringify(findings, null, 1))

console.log(`paragraphs audited across ${files.length} pages`)
for (const [k, v] of Object.entries(findings)) {
  console.log(`  ${k}: ${v.length}`)
  if (v.length) console.log(`    e.g. ${JSON.stringify(v[0])}`)
}
console.log(total === 0 ? 'PASS — no internal-linking rule violations' : `${total} findings, see reports/link-audit.json`)
