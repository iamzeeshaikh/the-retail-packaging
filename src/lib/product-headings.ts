import type { Product } from './catalog'
import { pick } from './catalog'
import type { LayoutId, Trait } from './product-traits'

/**
 * Headings for the fixed bands on a product page.
 *
 * The composed body sections already choose their own headings inside
 * `product-sections.ts`. The bands around them — quote form, benefits,
 * related formats, FAQ, closing CTA — did not, so four headings appeared
 * verbatim on all 371 product pages and dominated the duplicate-heading count.
 *
 * These are labels, not business facts, so deriving them from the product is
 * legitimate differentiation rather than spinning. The rule followed here is
 * the same one the fact records use: a heading is only offered to a product
 * when it is *true* of that product. A regulated carton is asked about its
 * compliance panel because it has one; a shipping format is asked about its
 * transit route because that is what decides its quote. Where no trait
 * applies, the product falls back to a small neutral set rather than being
 * given a claim that does not fit.
 *
 * Selection is `pick(..., slug + salt)`, so it is stable across builds and a
 * product keeps the same heading between deploys.
 */

interface HeadCtx {
  p: Product
  t: Set<Trait>
  layout: LayoutId
}

const has = (t: Set<Trait>, ...traits: Trait[]) => traits.some((x) => t.has(x))

/* ---------- quote band ---------- */

/** Heading above the quote form in the product hero. */
export function quoteHeading({ p, t }: HeadCtx): string {
  const opts: string[] = []
  if (has(t, 'regulated', 'tamper'))
    opts.push('Quote this specification', 'Price it with the panel allowed for')
  if (has(t, 'protective', 'shipping'))
    opts.push('Price this against your route', 'Quote it for the journey it makes')
  if (has(t, 'luxury', 'gifting', 'cosmetic'))
    opts.push('Price this finish', 'Quote the finished pack')
  if (has(t, 'foodContact'))
    opts.push('Price it for service volumes', 'Quote this by the case')
  if (has(t, 'eco'))
    opts.push('Price the material choice', 'Quote it on your stock')
  if (has(t, 'small', 'large'))
    opts.push('Send your dimensions')
  // Always available, so the pool is never empty and never one-deep.
  opts.push('Get a price', 'Ask for a quote', 'Price this format', 'Start a quote')
  return pick(opts, p.slug + 'qh')
}

/** Supporting line under the quote heading. Kept factual — the process is the
 *  process on every product, so only the framing moves, never the promise. */
export function quoteIntro({ p, t }: HeadCtx): string {
  const what = has(t, 'regulated', 'tamper')
    ? 'what you are packing and which disclosures apply'
    : has(t, 'protective', 'shipping')
      ? 'what you are packing and how it ships'
      : has(t, 'luxury', 'gifting', 'cosmetic')
        ? 'what you are packing and the finish you have in mind'
        : has(t, 'foodContact')
          ? 'what you are packing and the volumes you run'
          : 'what you are packing'
  return `Name, email, phone and ${what}. Attach artwork if you have it. We reply with a specification and a written price, usually within one business day.`
}

/* ---------- benefits band ---------- */

export function benefitsHeading({ p, t, layout }: HeadCtx): string {
  const opts: string[] = []
  if (layout === 'specification-first' || has(t, 'regulated', 'tamper'))
    opts.push('What the specification gives you', 'Why this spec holds up')
  if (layout === 'protection-first' || has(t, 'protective'))
    opts.push('What this build protects against', 'Where the construction earns its cost')
  if (layout === 'sustainability-first' || has(t, 'eco'))
    opts.push('What the material choice buys you', 'Where the environmental gain is real')
  if (layout === 'branding-first' || has(t, 'luxury', 'cosmetic', 'gifting'))
    opts.push('What this format does for the brand', 'Where the finish does the work')
  if (layout === 'structure-first')
    opts.push('What the structure is doing', 'Why it is built this way')
  if (has(t, 'foodContact'))
    opts.push('What matters in service', 'Where this holds up on a line')
  if (has(t, 'shipping', 'subscription'))
    opts.push('What survives the journey', 'Why it arrives intact')
  opts.push('Why buyers specify this format', 'What you get with this format')
  return pick(opts, p.slug + 'bh')
}

export function benefitsEyebrow({ p, t }: HeadCtx): string {
  const opts = has(t, 'regulated', 'tamper')
    ? ['Specification', 'What you get']
    : has(t, 'protective', 'shipping')
      ? ['In transit', 'What you get']
      : has(t, 'eco')
        ? ['Materials', 'What you get']
        : ['What you get', 'In practice']
  return pick(opts, p.slug + 'be')
}

/**
 * Labels for the four fact-driven benefit tiles.
 *
 * The tile *text* is already unique — it comes straight from the product's
 * fact record. Only the label above it was fixed, which put four identical
 * headings on all 371 product pages once fact coverage reached 100%. Each
 * label still has to describe the same field, so the variants below are
 * synonyms for the field's job rather than claims about the product.
 */
export function benefitLabels(p: Product, t: Set<Trait>): [string, string, string, string] {
  const size = has(t, 'small')
    ? ['Sized to the contents', 'Fitted to what goes in it', 'Getting the dimensions right']
    : has(t, 'large', 'shipping')
      ? ['Sized to the contents', 'Dimensions and clearance', 'Cut to the load']
      : ['Sized to the contents', 'Fitted to what goes in it', 'The dimensions that matter']
  const fail = has(t, 'protective', 'shipping')
    ? ['The failure we design out', 'What goes wrong in transit', 'The damage this prevents']
    : has(t, 'foodContact')
      ? ['The failure we design out', 'What goes wrong in service', 'The failure worth avoiding']
      : ['The failure we design out', 'What tends to go wrong', 'The failure worth avoiding']
  const where = has(t, 'display', 'cosmetic')
    ? ['Where it has to work', 'Where it is used', 'The setting it is built for']
    : ['Where it has to work', 'Where it is used', 'What it is specified for']
  const detail = has(t, 'regulated', 'tamper')
    ? ['The detail that decides it', 'The detail that matters', 'What the specification turns on']
    : ['The detail that decides it', 'The detail that matters', 'What decides the job']
  return [
    pick(size, p.slug + 'l1'),
    pick(fail, p.slug + 'l2'),
    pick(where, p.slug + 'l3'),
    pick(detail, p.slug + 'l4'),
  ]
}

/* ---------- related band ---------- */

export function relatedHeading({ p, t }: HeadCtx): string {
  const opts: string[] = []
  if (has(t, 'gifting', 'luxury'))
    opts.push('Ordered as part of the same set', 'Specified together for a range')
  if (has(t, 'foodContact'))
    opts.push('Ordered alongside on the same service line', 'What usually goes on the same order')
  if (has(t, 'cosmetic', 'regulated'))
    opts.push('Specified together across a range', 'What buyers order with it')
  if (has(t, 'shipping', 'subscription'))
    opts.push('Packed together in the same shipment', 'What ships with it')
  if (has(t, 'eco'))
    opts.push('Other formats on the same stock')
  opts.push('Often specified alongside this', 'Related formats buyers compare', 'Close alternatives to consider')
  return pick(opts, p.slug + 'rh')
}

/* ---------- FAQ band ---------- */

export function faqHeading({ p, t }: HeadCtx): string {
  const opts: string[] = []
  if (has(t, 'regulated', 'tamper'))
    opts.push(`${p.name}: compliance and specification`, `What buyers check on ${p.name.toLowerCase()}`)
  if (has(t, 'protective', 'shipping'))
    opts.push(`${p.name}: protection and transit`, `${p.name} in transit: what buyers ask`)
  if (has(t, 'foodContact'))
    opts.push(`${p.name}: service and food safety`, `Running ${p.name.toLowerCase()}: common questions`)
  if (has(t, 'luxury', 'gifting', 'cosmetic'))
    opts.push(`${p.name}: finish and presentation`, `Specifying ${p.name.toLowerCase()}: what buyers ask`)
  if (has(t, 'eco'))
    opts.push(`${p.name}: materials and claims`)
  opts.push(`${p.name}: questions buyers ask`, `Ordering ${p.name.toLowerCase()}: the usual questions`)
  return pick(opts, p.slug + 'fh')
}

/* ---------- closing CTA ---------- */

export function ctaHeading({ p, t }: HeadCtx): string {
  const n = p.name
  const opts: string[] = []
  if (has(t, 'regulated', 'tamper')) opts.push(`Specify ${n} properly`, `Get ${n} quoted to spec`)
  if (has(t, 'protective', 'shipping')) opts.push(`Get ${n} priced for your route`)
  if (has(t, 'luxury', 'gifting', 'cosmetic')) opts.push(`Get ${n} quoted with the finish`)
  if (has(t, 'foodContact')) opts.push(`Price ${n} by the case`)
  opts.push(`Get a price for ${n}`, `Quote ${n}`, `Start on ${n}`)
  return pick(opts, p.slug + 'ch')
}

/** Closing CTA body. The quote process is identical on every product and is
 *  deliberately not reworded — only the first clause, which names what we
 *  actually need for this format, varies. */
export function ctaText({ p, t }: HeadCtx): string {
  const ask = has(t, 'regulated', 'tamper')
    ? 'Send the dimensions, the quantity and the disclosures that have to appear'
    : has(t, 'protective', 'shipping')
      ? 'Send the dimensions, the quantity and how it ships'
      : has(t, 'foodContact')
        ? 'Send the fill size and the volumes you run'
        : has(t, 'luxury', 'gifting', 'cosmetic')
          ? 'Send the dimensions, the quantity and the finish you want'
          : 'Send the dimensions and quantity you need'
  return `${ask}. We reply with a full specification and a written price, usually within one business day.`
}
