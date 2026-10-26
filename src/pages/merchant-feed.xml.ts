// Google Merchant feed, built from the same catalog and the same src/lib/order.mjs
// constants as the product pages, their JSON-LD, the checkout and api/order.js:
// one item per product, 100 units for $30.00, free shipping to US/GB/CA/AU.
import type { APIRoute } from 'astro'
import { products, categoryBySlug } from '../lib/catalog'
import { productSummary } from '../lib/copy'
import { SITE } from '../lib/site'
import { PACK_QTY, PACK_PRICE_TEXT, SHIP_COUNTRIES, HANDLING_DAYS, TRANSIT_DAYS } from '../lib/order.mjs'

const x = (s: unknown) => String(s ?? '').replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!)

export const GET: APIRoute = () => {
  const items = products
    .filter((p) => p.images.length)
    .map((p) => {
      const imgs = p.images.slice(0, 6).map((i) => `${SITE.origin}${i.base}-1400.webp`)
      const cat = categoryBySlug.get(p.categorySlug)
      return `  <item>
    <g:id>TRP-${x(p.slug)}</g:id>
    <title>${x(`${p.name} - ${PACK_QTY} Custom Printed Units`)}</title>
    <description>${x(`${productSummary(p)} Sold in runs of ${PACK_QTY} units on our standard build, printed with your artwork after a free digital proof.`)}</description>
    <link>${SITE.origin}${p.url}</link>
    <g:image_link>${x(imgs[0])}</g:image_link>${imgs.slice(1).map((u) => `\n    <g:additional_image_link>${x(u)}</g:additional_image_link>`).join('')}
    <g:availability>in_stock</g:availability>
    <g:condition>new</g:condition>
    <g:price>${PACK_PRICE_TEXT} USD</g:price>
    <g:multipack>${PACK_QTY}</g:multipack>
    <g:brand>${x(SITE.name)}</g:brand>
    <g:identifier_exists>no</g:identifier_exists>
    <g:mpn>${x(`TRP-${p.slug.toUpperCase()}`)}</g:mpn>
    <g:product_type>${x(cat?.name ?? p.category)}</g:product_type>
${SHIP_COUNTRIES.map((c) => `    <g:shipping><g:country>${c.code}</g:country><g:service>Free shipping</g:service><g:price>0.00 USD</g:price><g:min_transit_time>${TRANSIT_DAYS[0]}</g:min_transit_time><g:max_transit_time>${TRANSIT_DAYS[1]}</g:max_transit_time></g:shipping>`).join('\n')}
    <g:min_handling_time>${HANDLING_DAYS[0]}</g:min_handling_time>
    <g:max_handling_time>${HANDLING_DAYS[1]}</g:max_handling_time>
  </item>`
    })
    .join('\n')
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
<channel>
  <title>${x(SITE.name)}</title>
  <link>${SITE.origin}/</link>
  <description>Custom retail packaging, printed to order.</description>
${items}
</channel>
</rss>
`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
