import type { APIRoute } from 'astro'
import { products, categories } from '../lib/catalog'
import { getCollection } from 'astro:content'

/** Compact static index — no server, no database, ~1 request. */
export const GET: APIRoute = async () => {
  const blog = await getCollection('blog')
  const resources = await getCollection('resources')

  const docs = [
    ...categories.map((c) => ({ t: c.name, u: c.url, k: 'Category' })),
    ...products.map((p) => ({ t: p.name, u: p.url, k: p.category })),
    ...blog.map((b) => ({ t: b.data.title, u: `/blog/${b.id}/`, k: 'Article' })),
    ...resources.map((r) => ({ t: r.data.title, u: `/resources/${r.id}/`, k: 'Guide' })),
  ]

  return new Response(JSON.stringify(docs), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600, must-revalidate',
    },
  })
}
