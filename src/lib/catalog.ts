import raw from '../data/catalog.json'
import imagesRaw from '../data/images.json'
import { classify, FORM_FACTORS, industriesFor, type FormFactor, type Industry } from './taxonomy'

export interface RawProduct {
  name: string
  slug: string
  url: string
  category: string
  categorySlug: string
  categoryUrl: string
  sourceDir: string | null
  sourceFolder: string | null
  imageFiles: string[]
  imageCount: number
}

export interface ProductImage {
  index: number
  base: string
  width: number
  height: number
  ratio: number
  original: string
}

export interface Product extends RawProduct {
  form: FormFactor
  images: ProductImage[]
  industries: Industry[]
}

export interface Category {
  name: string
  slug: string
  url: string
  products: string[]
}

const imageMap = imagesRaw as unknown as Record<string, ProductImage[]>

export const brand = raw.brand

export const categories: Category[] = (raw.categories as Category[]).slice()

export const products: Product[] = (raw.products as RawProduct[]).map((p) => ({
  ...p,
  form: FORM_FACTORS[classify(p.name)],
  images: imageMap[p.slug] ?? [],
  industries: industriesFor(p.categorySlug),
}))

export const bySlug = new Map(products.map((p) => [p.slug, p]))
export const categoryBySlug = new Map(categories.map((c) => [c.slug, c]))

export function productsIn(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug)
}

export function categoryOf(p: Product): Category | undefined {
  return categoryBySlug.get(p.categorySlug)
}

/** Deterministic pseudo-random in [0,1) from a string — keeps builds stable. */
export function hash(seed: string): number {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return ((h >>> 0) % 100000) / 100000
}

/** Pick `n` items from `list`, varied per seed but stable across builds. */
export function pickN<T>(list: T[], n: number, seed: string): T[] {
  if (list.length <= n) return list.slice()
  const start = Math.floor(hash(seed) * list.length)
  const out: T[] = []
  for (let i = 0; i < n; i++) out.push(list[(start + i * 7 + 1) % list.length])
  return Array.from(new Set(out)).slice(0, n)
}

/** Choose one variant from a list, stable per seed. */
export function pick<T>(list: T[], seed: string): T {
  return list[Math.floor(hash(seed) * list.length) % list.length]
}

/**
 * Related products: same category first (closest by shared words), then the
 * same form factor from other categories so the row is never padded with
 * unrelated items.
 */
export function relatedProducts(p: Product, n = 6): Product[] {
  const words = (s: string) => new Set(s.toLowerCase().split(/\W+/).filter((w) => w.length > 3))
  const mine = words(p.name)
  const score = (o: Product) => {
    const shared = [...words(o.name)].filter((w) => mine.has(w)).length
    return shared * 10 + (o.categorySlug === p.categorySlug ? 5 : 0) + (o.form.id === p.form.id ? 3 : 0)
  }
  return products
    .filter((o) => o.slug !== p.slug)
    .map((o) => ({ o, s: score(o) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || a.o.name.localeCompare(b.o.name))
    .slice(0, n)
    .map((x) => x.o)
}

/** Categories that share industries with the given one. */
export function relatedCategories(slug: string, n = 4): Category[] {
  const mine = new Set(industriesFor(slug).map((i) => i.id))
  return categories
    .filter((c) => c.slug !== slug)
    .map((c) => ({ c, s: industriesFor(c.slug).filter((i) => mine.has(i.id)).length }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s || b.c.products.length - a.c.products.length)
    .slice(0, n)
    .map((x) => x.c)
}

/** The image used for hero/OG. Falls back to a documented placeholder. */
export function heroImage(p: Product): { src: string; srcset: string; w: number; h: number } | null {
  const img = p.images[0]
  if (!img) return null
  return {
    src: `${img.base}-800.webp`,
    srcset: `${img.base}-400.webp 400w, ${img.base}-800.webp 800w, ${img.base}-1400.webp 1400w`,
    w: img.width,
    h: img.height,
  }
}

export const totals = {
  categories: categories.length,
  products: products.length,
  images: products.reduce((n, p) => n + p.images.length, 0),
}
