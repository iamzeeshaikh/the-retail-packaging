/**
 * JSON-LD builders.
 *
 * Every builder emits only fields backed by content that is actually visible on
 * the page. `aggregateRating` and `review` are supported but deliberately
 * withheld until verified review data exists — see `RATINGS_ENABLED`.
 */
import { SITE, abs, canonical } from './site'

/**
 * Flip to true only when genuine, visible review data is wired in. Until then
 * Product schema ships without rating fields rather than inventing them.
 */
export const RATINGS_ENABLED = false

type Json = Record<string, unknown>

export function organization(): Json {
  const org: Json = {
    '@type': 'Organization',
    '@id': `${SITE.origin}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: `${SITE.origin}/`,
    description: SITE.description,
    logo: {
      '@type': 'ImageObject',
      '@id': `${SITE.origin}/#logo`,
      url: abs('/brand/logo.svg'),
      width: 512,
      height: 512,
      caption: SITE.name,
    },
    image: { '@id': `${SITE.origin}/#logo` },
    email: SITE.email,
    telephone: SITE.phone,
    areaServed: { '@type': 'Country', name: 'United States' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: SITE.phone,
        email: SITE.email,
        areaServed: 'US',
        availableLanguage: ['English'],
      },
    ],
  }
  if (SITE.social.length) org.sameAs = SITE.social
  return org
}

export function website(): Json {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.origin}/#website`,
    url: `${SITE.origin}/`,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': `${SITE.origin}/#organization` },
    inLanguage: SITE.lang,
    // Site search is a real, working page, so SearchAction is honest here.
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.origin}/search/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webPage(opts: {
  path: string
  title: string
  description: string
  image?: string
  datePublished?: string
  dateModified?: string
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage' | 'ContactPage' | 'FAQPage' | 'ItemPage'
}): Json {
  const url = canonical(opts.path)
  const page: Json = {
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.title,
    description: opts.description,
    isPartOf: { '@id': `${SITE.origin}/#website` },
    about: { '@id': `${SITE.origin}/#organization` },
    inLanguage: SITE.lang,
    breadcrumb: { '@id': `${url}#breadcrumb` },
  }
  if (opts.image) page.primaryImageOfPage = { '@type': 'ImageObject', url: abs(opts.image) }
  if (opts.datePublished) page.datePublished = opts.datePublished
  if (opts.dateModified) page.dateModified = opts.dateModified
  return page
}

export function breadcrumbs(path: string, trail: { name: string; url: string }[]): Json {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonical(path)}#breadcrumb`,
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: canonical(t.url),
    })),
  }
}

export function faqPage(path: string, faqs: { q: string; a: string }[]): Json | null {
  if (!faqs.length) return null
  return {
    '@type': 'FAQPage',
    '@id': `${canonical(path)}#faq`,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function itemList(path: string, items: { name: string; url: string }[]): Json {
  return {
    '@type': 'ItemList',
    '@id': `${canonical(path)}#itemlist`,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      url: canonical(it.url),
    })),
  }
}

export interface ProductSchemaInput {
  path: string
  name: string
  description: string
  images: string[]
  category: string
  material?: string
  /** Only passed when genuine, visible review data exists. */
  rating?: { value: number; count: number }
}

export function product(input: ProductSchemaInput): Json {
  const url = canonical(input.path)
  const node: Json = {
    '@type': 'Product',
    '@id': `${url}#product`,
    name: input.name,
    description: input.description,
    url,
    category: input.category,
    brand: { '@type': 'Brand', name: SITE.name },
    manufacturer: { '@id': `${SITE.origin}/#organization` },
    image: input.images.map((i) => abs(i)),
    offers: {
      '@type': 'AggregateOffer',
      '@id': `${url}#offer`,
      url,
      priceCurrency: 'USD',
      lowPrice: '0.30',
      priceValidUntil: `${new Date().getFullYear() + 1}-12-31`,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      offerCount: 1,
      seller: { '@id': `${SITE.origin}/#organization` },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'US' },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: { '@type': 'QuantitativeValue', minValue: 8, maxValue: 15, unitCode: 'DAY' },
          transitTime: { '@type': 'QuantitativeValue', minValue: 2, maxValue: 7, unitCode: 'DAY' },
        },
      },
      hasMerchantReturnPolicy: {
        '@type': 'MerchantReturnPolicy',
        applicableCountry: 'US',
        returnPolicyCategory: 'https://schema.org/MerchantReturnNotPermitted',
        merchantReturnLink: canonical('/shipping-information'),
      },
    },
  }
  if (input.material) node.material = input.material

  // Ratings are structurally supported but never emitted without real data.
  if (RATINGS_ENABLED && input.rating && input.rating.count > 0) {
    node.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: input.rating.value,
      reviewCount: input.rating.count,
      bestRating: 5,
      worstRating: 1,
    }
  }
  return node
}

export function article(opts: {
  path: string
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  authorName: string
  wordCount?: number
}): Json {
  const url = canonical(opts.path)
  return {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    image: abs(opts.image),
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@type': 'Person', name: opts.authorName, url: canonical('/about-us') },
    publisher: { '@id': `${SITE.origin}/#organization` },
    mainEntityOfPage: { '@id': `${url}#webpage` },
    inLanguage: SITE.lang,
    ...(opts.wordCount ? { wordCount: opts.wordCount } : {}),
  }
}

export function service(opts: { path: string; name: string; description: string; areaName: string }): Json {
  return {
    '@type': 'Service',
    '@id': `${canonical(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    serviceType: 'Custom packaging manufacturing',
    provider: { '@id': `${SITE.origin}/#organization` },
    areaServed: { '@type': 'AdministrativeArea', name: opts.areaName },
    audience: { '@type': 'BusinessAudience', name: 'Retail and e-commerce brands' },
  }
}

export function howTo(opts: {
  path: string
  name: string
  description: string
  steps: { name: string; text: string }[]
}): Json {
  return {
    '@type': 'HowTo',
    '@id': `${canonical(opts.path)}#howto`,
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

/** Wrap nodes into one @graph document. */
export function graph(nodes: (Json | null | undefined)[]): string {
  return JSON.stringify(
    { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) },
    null,
    0
  )
}
