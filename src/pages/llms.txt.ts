import type { APIRoute } from 'astro'
import { categories, productsIn, totals } from '../lib/catalog'
import { SITE } from '../lib/site'

export const GET: APIRoute = () => {
  const cats = categories
    .map((c) => `- [${c.name}](${SITE.origin}${c.url}) — ${productsIn(c.slug).length} made-to-order formats`)
    .join('\n')

  const body = `# The Retail Packaging

> Custom retail packaging manufactured to order for brands selling in the United States, the United Kingdom, Canada and Australia.
> ${totals.products} formats across ${totals.categories} categories, all cut to the buyer's dimensions.

Pricing starts from $0.30 per piece at large volume. Final pricing depends on size, material,
printing, finishes and quantity, so every project is quoted individually.

We do not operate local offices in the cities we ship to. Every quote states the board grade,
the structure, the print method, the finishing and the lead time rather than a price alone.

## Packaging categories
${cats}

## Key pages
- [Request a quote](${SITE.origin}/request-a-quote/)
- [Packaging design tool](${SITE.origin}/custom-packaging-tool/)
- [Resource hub](${SITE.origin}/resources/)
- [Packaging blog](${SITE.origin}/blog/)
- [US locations](${SITE.origin}/locations/)
- [Materials](${SITE.origin}/materials/)
- [Printing options](${SITE.origin}/printing-options/)
- [Sitemap](${SITE.origin}/sitemap/)

## Contact
Phone (US): ${SITE.phone}
Phone (UK): ${SITE.phoneUk}
Email: ${SITE.email}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
