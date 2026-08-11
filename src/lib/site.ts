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
  phone: '+1 503-358-0443',
  phoneHref: 'tel:+15033580443',
  phoneUk: '+44 7458 651107',
  phoneUkHref: 'tel:+447458651107',
  whatsapp: '15033580443',
  whatsappDisplay: '+1 503-358-0443',
  // Same opening line as the rest of the portfolio: greeting, brand, site URL.
  whatsappMessage:
    'Hi The Retail Packaging! I need more info about The Retail Packaging https://theretailpackaging.com/',
  country: 'US',
  /** Markets served, in the order they are listed publicly. */
  markets: ['United States', 'United Kingdom', 'Canada', 'Australia'] as const,
  marketCodes: ['US', 'GB', 'CA', 'AU'] as const,
  social: [] as string[], // no invented profiles
  priceLine:
    'Prices start from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, finishes, and quantity.',
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
