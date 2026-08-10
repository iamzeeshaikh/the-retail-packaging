#!/usr/bin/env node
/**
 * Convert every source product image to responsive WebP.
 *
 * Sources stay untouched. Output lands in public/images/products/<slug>/ with
 * clean SEO filenames, and src/data/images.json records intrinsic dimensions so
 * every <img> can carry width/height and avoid layout shift.
 */
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..')
const catalog = JSON.parse(await readFile(path.join(ROOT, 'src/data/catalog.json'), 'utf8'))
const OUT_DIR = path.join(ROOT, 'public/images/products')
const WIDTHS = [400, 800, 1400]
const QUALITY = 76
const CONCURRENCY = Math.max(2, Math.min(8, os.cpus().length - 2))
const FORCE = process.argv.includes('--force')

sharp.cache(false)
sharp.concurrency(1)

/** Natural sort so "-2" comes before "-10". */
function naturalCompare(a, b) {
  return a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' })
}

const jobs = []
for (const product of catalog.products) {
  if (!product.sourceDir) continue
  const files = [...product.imageFiles].sort(naturalCompare)
  files.forEach((file, i) => {
    jobs.push({
      slug: product.slug,
      name: product.name,
      index: i + 1,
      src: path.join(product.sourceDir, file),
      originalName: file,
    })
  })
}

console.log(`${jobs.length} source images -> ${WIDTHS.length} widths each`)

const manifest = {}
let done = 0
let failed = 0
const errors = []

async function processOne(job) {
  const dir = path.join(OUT_DIR, job.slug)
  const base = `${job.slug}-${job.index}`
  const primary = path.join(dir, `${base}-800.webp`)

  try {
    if (!FORCE && existsSync(primary)) {
      // already built — just recover the metadata we need
      const meta = await sharp(job.src).metadata()
      record(job, meta)
      done++
      return
    }
    await mkdir(dir, { recursive: true })
    const input = sharp(job.src, { failOn: 'none' })
    const meta = await input.metadata()

    for (const w of WIDTHS) {
      // never upscale past the source
      const target = Math.min(w, meta.width || w)
      await sharp(job.src, { failOn: 'none' })
        .resize({ width: target, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 4 })
        .toFile(path.join(dir, `${base}-${w}.webp`))
    }
    record(job, meta)
    done++
  } catch (err) {
    failed++
    errors.push({ src: job.src, error: String(err.message || err) })
  }
  if ((done + failed) % 100 === 0) {
    process.stdout.write(`  ${done + failed}/${jobs.length}\n`)
  }
}

function record(job, meta) {
  const w = meta.width || 1200
  const h = meta.height || 1200
  ;(manifest[job.slug] ||= []).push({
    index: job.index,
    base: `/images/products/${job.slug}/${job.slug}-${job.index}`,
    width: w,
    height: h,
    ratio: +(w / h).toFixed(4),
    original: job.originalName,
  })
}

// simple worker pool
let cursor = 0
async function worker() {
  while (cursor < jobs.length) {
    const job = jobs[cursor++]
    await processOne(job)
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker))

for (const slug of Object.keys(manifest)) {
  manifest[slug].sort((a, b) => a.index - b.index)
}

await mkdir(path.join(ROOT, 'src/data'), { recursive: true })
await writeFile(path.join(ROOT, 'src/data/images.json'), JSON.stringify(manifest, null, 1))
await mkdir(path.join(ROOT, 'reports'), { recursive: true })
await writeFile(
  path.join(ROOT, 'reports/image-processing.json'),
  JSON.stringify({ total: jobs.length, done, failed, widths: WIDTHS, errors }, null, 1)
)

console.log(`done ${done} | failed ${failed} | products ${Object.keys(manifest).length}`)
if (errors.length) console.log(errors.slice(0, 10))
