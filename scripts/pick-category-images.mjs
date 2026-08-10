#!/usr/bin/env node
/**
 * Choose one representative image per category.
 *
 * Category tiles were using each category's alphabetically-first product, which
 * produced a patchwork — a magenta mailer next to a red-and-yellow burger box
 * next to a mint bath-bomb carton. The catalogue photography is inconsistent,
 * so the fix is curation, not styling.
 *
 * Every image in a category is scored on how calm it reads at tile size:
 *  - low mean chroma (a garish backdrop is penalised heavily)
 *  - mid-to-light mean luminance (very dark or blown-out shots score badly)
 *  - low colour variance across the frame (busy multi-colour scenes penalised)
 *
 * The winner is written to src/data/category-images.json.
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const catalog = JSON.parse(await readFile(path.join(ROOT, 'src/data/catalog.json'), 'utf8'))
const images = JSON.parse(await readFile(path.join(ROOT, 'src/data/images.json'), 'utf8'))

sharp.cache(false)

/** Score a candidate: higher is calmer and more usable as a category tile. */
async function score(file) {
  const buf = await sharp(file).resize(64, 64, { fit: 'cover' }).removeAlpha().raw().toBuffer()
  let sumChroma = 0
  let sumLum = 0
  const n = buf.length / 3
  const chromas = []

  for (let i = 0; i < buf.length; i += 3) {
    const r = buf[i], g = buf[i + 1], b = buf[i + 2]
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const chroma = max - min          // 0 = grey, 255 = fully saturated
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    sumChroma += chroma
    sumLum += lum
    chromas.push(chroma)
  }

  const meanChroma = sumChroma / n
  const meanLum = sumLum / n
  const varChroma =
    chromas.reduce((acc, c) => acc + (c - meanChroma) ** 2, 0) / n

  // Ideal luminance sits light-mid; punish the distance from it.
  const lumPenalty = Math.abs(meanLum - 178) / 178

  return (
    100 -
    meanChroma * 0.85 -            // garish backdrop
    Math.sqrt(varChroma) * 0.35 -  // busy, multi-colour frame
    lumPenalty * 45                // too dark or blown out
  )
}

const out = {}
const report = []

for (const cat of catalog.categories) {
  const products = catalog.products.filter((p) => p.categorySlug === cat.slug)
  const candidates = []

  for (const p of products) {
    const meta = images[p.slug]?.[0]
    if (!meta) continue
    const file = path.join(ROOT, 'public', `${meta.base}-400.webp`.replace(/^\//, ''))
    try {
      candidates.push({ slug: p.slug, name: p.name, s: await score(file) })
    } catch {
      /* unreadable file — skip rather than fail the whole run */
    }
  }

  if (!candidates.length) continue
  candidates.sort((a, b) => b.s - a.s)
  const win = candidates[0]
  out[cat.slug] = win.slug
  report.push({
    category: cat.name,
    chosen: win.name,
    score: +win.s.toFixed(1),
    was: products[0]?.name,
    changed: products[0]?.slug !== win.slug,
  })
}

await writeFile(path.join(ROOT, 'src/data/category-images.json'), JSON.stringify(out, null, 1))
await writeFile(path.join(ROOT, 'reports/category-images.json'), JSON.stringify(report, null, 1))

const changed = report.filter((r) => r.changed).length
console.log(`${report.length} categories scored, ${changed} images changed`)
for (const r of report) {
  console.log(`  ${r.category.padEnd(34)} ${r.chosen}`)
}
