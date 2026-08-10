import type { APIRoute } from 'astro'
import { abs, canonical } from '../lib/site'
import { products, categories, categoryHero } from '../lib/catalog'

/**
 * Image sitemap.
 *
 * @astrojs/sitemap only emits url/lastmod/changefreq/priority/links — it drops
 * any `img` passed through serialize() — so the image entries live here in
 * their own file, advertised as a second Sitemap line in robots.txt.
 *
 * The largest rendition is listed for each frame, since that is the one Google
 * should index. Titles match the visible product name, not a keyword string.
 */
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[c] as string
  )

interface Entry {
  loc: string
  images: { url: string; title: string }[]
}

export const GET: APIRoute = () => {
  const entries: Entry[] = []

  for (const p of products) {
    if (!p.images?.length) continue
    entries.push({
      loc: canonical(`/${p.slug}`),
      images: p.images.map((im) => ({ url: abs(`${im.base}-1400.webp`), title: p.name })),
    })
  }

  for (const c of categories) {
    const hero = categoryHero(c.slug)
    const im = hero?.images?.[0]
    if (!im) continue
    entries.push({
      loc: canonical(`/${c.slug}`),
      images: [{ url: abs(`${im.base}-1400.webp`), title: c.name }],
    })
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map((e) =>
      [
        '  <url>',
        `    <loc>${esc(e.loc)}</loc>`,
        ...e.images.flatMap((i) => [
          '    <image:image>',
          `      <image:loc>${esc(i.url)}</image:loc>`,
          `      <image:title>${esc(i.title)}</image:title>`,
          '    </image:image>',
        ]),
        '  </url>',
      ].join('\n')
    ),
    '</urlset>',
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}

export const prerender = true
