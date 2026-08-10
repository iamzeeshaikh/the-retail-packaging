import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import { SITE } from '../lib/site'

const esc = (s: string) =>
  s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!)

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).sort(
    (a, b) => +new Date(b.data.publishDate) - +new Date(a.data.publishDate)
  )
  const items = posts
    .map((p) => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${SITE.origin}/blog/${p.id}/</link>
      <guid isPermaLink="true">${SITE.origin}/blog/${p.id}/</guid>
      <description>${esc(p.data.description)}</description>
      <pubDate>${new Date(p.data.publishDate).toUTCString()}</pubDate>
    </item>`)
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(SITE.name)} — packaging blog</title>
    <link>${SITE.origin}/blog/</link>
    <description>Practical writing on choosing, specifying and ordering custom retail packaging.</description>
    <language>en-us</language>
    <atom:link href="${SITE.origin}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
