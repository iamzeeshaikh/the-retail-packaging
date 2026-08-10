export const SITE = {
  name: 'The Retail Packaging',
  legalName: 'The Retail Packaging',
  origin: 'https://theretailpackaging.com',
  locale: 'en_US',
  lang: 'en-US',
  description:
    'Custom retail packaging manufactured to order for US brands. Boxes, bags, pouches, labels and displays built to your dimensions and printed with your artwork.',
  email: 'info@theretailpackaging.com',
  phone: '+1 503-358-0443',
  phoneHref: 'tel:+15033580443',
  whatsapp: '15033580443',
  whatsappDisplay: '+1 503-358-0443',
  whatsappMessage:
    'Hi, I would like a quote for custom retail packaging. Here is what I need:',
  country: 'US',
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
