/**
 * The published volume floor, in USD per piece. Single source of truth: the
 * visible price line below and the `price` on the Product Offer in the JSON-LD
 * both read this, so structured data can never quote a figure the page itself
 * does not show.
 */
export const UNIT_PRICE_FROM = '0.30'

export const SITE = {
  name: 'The Retail Packaging',
  legalName: 'The Retail Packaging',
  origin: 'https://theretailpackaging.com',
  locale: 'en_US',
  lang: 'en-US',
  description:
    'Custom retail packaging manufactured to order for brands in the US, UK, Canada and Australia. Boxes, bags, pouches, labels and displays built to your dimensions and printed with your artwork.',
  email: 'info@theretailpackaging.com',
  /* Two lines. The US number is the primary; the UK line also covers callers
     in Canada and Australia, where the time difference makes it the easier
     one to reach. Both ring the same team. */
  phone: '+1 503-461-4788',
  phoneHref: 'tel:+15034614788',
  phoneUk: '+44 7458 651107',
  phoneUkHref: 'tel:+447458651107',
  // Same number as the phone line above. It sat on the old company number for
  // a few hours on 2026-09-02, because +1 503-461-4788 had no WhatsApp
  // registered against it and the button told every customer so. It was
  // registered as a WhatsApp sender that afternoon, so the two agree again.
  whatsapp: '15034614788',
  whatsappDisplay: '+1 503-461-4788',
  // Same opening line as the rest of the portfolio: greeting, brand, site URL.
  whatsappMessage:
    'Hi The Retail Packaging! I need more info about The Retail Packaging https://theretailpackaging.com/',
  country: 'US',
  /** Markets served, in the order they are listed publicly. */
  markets: ['United States', 'United Kingdom', 'Canada', 'Australia'] as const,
  marketCodes: ['US', 'GB', 'CA', 'AU'] as const,
  social: [] as string[], // no invented profiles
  priceLine: `Order online at $30.00 for 100 units on our standard build, with free shipping to the US, UK, Canada and Australia. Special sizes, materials, finishes and large runs are priced by quote.`,
} as const

export function abs(path: string): string {
  if (path.startsWith('http')) return path
  return SITE.origin + (path.startsWith('/') ? path : `/${path}`)
}

/** Enforce the one canonical URL shape: lowercase, trailing slash. */
export function canonical(path: string): string {
  let p = path.toLowerCase()
  if (!p.startsWith('/')) p = `/${p}`
  if (!p.endsWith('/')) p = `${p}/`
  return SITE.origin + p
}

export const whatsappUrl = (msg = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`
