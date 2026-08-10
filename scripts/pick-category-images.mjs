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

  const sd = Math.sqrt(varChroma)

  return {
    // Calm: for small tiles in a grid, where consistency matters most.
    calm: 100 - meanChroma * 0.85 - sd * 0.35 - lumPenalty * 45,
    // Vivid: for large hero tiles, where flat grey reads as dull. Rewards
    // colour in the product while still punishing a busy, multi-colour frame
    // and a blown-out or murky exposure.
    vivid: 100 + meanChroma * 0.55 - sd * 0.85 - lumPenalty * 40,
  }
}

/**
 * Editorial veto, applied before scoring.
 *
 * The scorer only sees pixels, so it happily crowned a Halloween star print as
 * the face of Custom Mailers and a cannabis-leaf sticker as the face of Custom
 * Stickers. Both are real products and keep their own pages; neither should
 * represent a whole range on the homepage. A theme is still allowed to
 * represent the category that is actually about it — CBD products may front
 * the CBD range.
 */
const VETO = [
  // Seasonal: dates a page that is meant to sell all year.
  'halloween', 'christmas', 'xmas', 'santa', 'easter', 'valentine',
  'thanksgiving', 'new-year', 'ramadan', 'eid', 'diwali',
  // Regulated or off-brand for a mainstream US retail buyer.
  'pot-leaf', 'weed', 'cannabis', 'marijuana', 'thc',
  'vape', 'e-juice', 'e-liquid', 'e-cig', 'tobacco', 'cigarette', 'cigar',
  'nicotine', 'kratom',
]

/** A product may front a category unless a veto term applies to it but not to the category. */
function canRepresent(productSlug, categorySlug) {
  return !VETO.some((term) => productSlug.includes(term) && !categorySlug.includes(term))
}

const out = {}
const report = []

for (const cat of catalog.categories) {
  const inCat = catalog.products.filter((p) => p.categorySlug === cat.slug)
  const allowed = inCat.filter((p) => canRepresent(p.slug, cat.slug))
  // A range made entirely of vetoed formats still needs a face.
  const products = allowed.length ? allowed : inCat
  const candidates = []

  for (const p of products) {
    const meta = images[p.slug]?.[0]
    if (!meta) continue
    const file = path.join(ROOT, 'public', `${meta.base}-400.webp`.replace(/^\//, ''))
    try {
      const sc = await score(file)
      candidates.push({ slug: p.slug, name: p.name, calm: sc.calm, vivid: sc.vivid })
    } catch {
      /* unreadable file — skip rather than fail the whole run */
    }
  }

  if (!candidates.length) continue
  const calm = [...candidates].sort((a, b) => b.calm - a.calm)[0]
  const vivid = [...candidates].sort((a, b) => b.vivid - a.vivid)[0]
  out[cat.slug] = { calm: calm.slug, vivid: vivid.slug }
  report.push({ category: cat.name, calm: calm.name, vivid: vivid.name })
}

await writeFile(path.join(ROOT, 'src/data/category-images.json'), JSON.stringify(out, null, 1))
await writeFile(path.join(ROOT, 'reports/category-images.json'), JSON.stringify(report, null, 1))

console.log(`${report.length} categories scored`)
for (const r of report) {
  console.log(`  ${r.category.padEnd(32)} calm: ${r.calm.padEnd(30)} vivid: ${r.vivid}`)
}
