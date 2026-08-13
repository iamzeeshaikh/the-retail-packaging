/**
 * Page copy generation.
 *
 * Copy is composed from a product's real attributes — construction method,
 * substrate, size band, printing route, industry — rather than swapping a
 * keyword into a fixed sentence. Two products read differently because their
 * underlying facts differ; sentence frames vary by a stable hash so identical
 * form factors do not produce identical paragraphs either.
 */
import { pick, pickN, hash, type Product } from './catalog'
import type { Category } from './catalog'
import { INDUSTRIES, industriesFor } from './taxonomy'
import { factsFor } from '../data/products'
import { traitsOf } from './product-traits'
import { benefitLabels } from './product-headings'

export const PRICE_LINE =
  'Prices start from $0.30 per piece for large-volume orders. Final pricing depends on size, material, printing, finishes, and quantity.'

/** Strip a leading "Custom " so sentences do not read "custom Custom Bags". */
function bare(name: string): string {
  return name.replace(/^Custom\s+/i, '')
}

function lower(name: string): string {
  const b = bare(name)
  // Keep genuine acronyms and size codes upper-cased.
  return /^[0-9]|^(CBD|PR|CD|UV)\b/.test(b) ? b : b.charAt(0).toLowerCase() + b.slice(1)
}

/* ------------------------------------------------------------------ */
/* Product intro                                                       */
/* ------------------------------------------------------------------ */

export function productIntro(p: Product): string[] {
  const f = p.form
  const n = p.name
  const l = lower(n)
  const ind = p.industries[0]
  const material = pick(f.materials, p.slug + 'm')
  const seed = p.slug

  const opener = pick(
    [
      `${n} are ${f.construction}. We produce them to your dimensions, in your material, printed with your artwork.`,
      `Every run of ${l} we produce is ${f.construction}. Nothing is pulled from a stock catalogue.`,
      `${n} are made to order. The format is ${f.construction}, and the specification is yours to set.`,
      `We manufacture ${l} to order rather than holding stock, so the size, board and print all match what you are packing.`,
    ],
    seed + 'a'
  )

  const middle = pick(
    [
      `${material} is the substrate most buyers land on for this format, though the right choice depends on the weight of the product and how it travels.`,
      `Most orders run on ${material.toLowerCase()}, and we will tell you when a heavier or lighter stock would serve you better.`,
      `We usually quote ${material.toLowerCase()} first for this format and adjust once we know the product weight and shipping route.`,
      `The default substrate here is ${material.toLowerCase()}. If your product is heavier than typical, we will recommend a step up before you commit to a run.`,
    ],
    seed + 'b'
  )

  const closer = pick(
    [
      `${ind ? ind.name : 'Retail'} buyers make up most of the volume on this line, where ${ind ? ind.blurb.charAt(0).toLowerCase() + ind.blurb.slice(1) : 'shelf presentation drives the specification.'}`,
      `This format sees the most demand from ${ind ? ind.name.toLowerCase() : 'retail'} brands. ${ind ? ind.blurb : ''}`,
      `${f.moq} ${f.shipping}`,
      `${f.sizing} ${f.moq}`,
    ],
    seed + 'c'
  )

  return [opener, middle, closer]
}

/** Short summary used on cards and meta descriptions. */
export function productSummary(p: Product): string {
  const f = p.form
  const material = f.materials[0]
  return pick(
    [
      `Made-to-order ${lower(p.name)} in ${material.toLowerCase()}, printed to your artwork and cut to your dimensions.`,
      `Custom ${lower(p.name)} produced to your size and substrate, with printing and finishing handled in one run.`,
      `${p.name} built to your specification — your dimensions, your board, your print.`,
      `Bespoke ${lower(p.name)} manufactured to order, with material and finish chosen around how the product ships.`,
    ],
    p.slug + 's'
  )
}

/** Why this product, expressed as concrete benefits tied to the format. */
/**
 * Four short tiles. Where per-product facts exist these summarise what is
 * specific to the product; the generic fallback repeated whatever the
 * materials, printing and finishes sections had already said on the same page.
 */
export function productBenefits(p: Product): { title: string; text: string }[] {
  const f = p.form
  const k = factsFor(p.slug)
  if (k) {
    const [lSize, lFail, lWhere, lDetail] = benefitLabels(p, traitsOf(p))
    return [
      { title: lSize, text: k.sizeNote },
      { title: lFail, text: k.failure },
      { title: lWhere, text: `Specified for ${k.context}.` },
      { title: lDetail, text: k.detail },
    ]
  }
  return [
    {
      title: 'Built to your dimensions',
      text: 'We cut a fresh dieline for your product rather than forcing it into a stock size, so the fit is yours rather than an approximation.',
    },
    {
      title: 'Substrate matched to the job',
      text: `Stock is chosen from the weight of the product and how far it travels, not from a default. ${f.materials.length} options are available for this format.`,
    },
    {
      title: 'One production run',
      text: 'Print and finishing happen in the same run, so stock is not shipped between vendors and handled twice.',
    },
    {
      title: 'A written specification',
      text: 'Every quote states the board grade, the structure, the print method, the finishing and the lead time — not just a number.',
    },
  ]
}

/* ------------------------------------------------------------------ */
/* Category copy                                                       */
/* ------------------------------------------------------------------ */

/**
 * Hand-written positioning for each category. These are the facts that make a
 * category page worth reading rather than a product list with a paragraph on top.
 */
export const CATEGORY_NOTES: Record<
  string,
  { angle: string; decides: string; watchOut: string; keyword: string }
> = {
  'custom-bags': {
    angle: 'Paper and fabric carriers that leave the store with the customer, which makes them a second storefront.',
    decides: 'Handle type and paper weight decide whether the bag survives the walk home. A 100gsm bag with twisted handles is fine for a bakery; a boutique packing candles needs 170gsm and rope handles.',
    watchOut: 'Bags are quoted width × gusset × height. Getting the gusset wrong is the single most common reason a first order does not fit the product.',
    keyword: 'custom bags',
  },
  'custom-beverage-packaging': {
    angle: 'Bottle, can and carton packaging that has to hold weight without failing at the base.',
    decides: 'Weight per unit drives everything. Glass bottles need corrugated dividers and a base that will not blow out; cans and cartons can run lighter board.',
    watchOut: 'If the pack is going into a chiller, condensation will soften uncoated board. Ask for a moisture-resistant coating before you commit.',
    keyword: 'custom beverage packaging',
  },
  'custom-candle-packaging': {
    angle: 'Packaging for a fragile, heavy product that is usually bought as a gift.',
    decides: 'Jar diameter and vessel weight set the structure. Anything above about 10oz wants a rigid box or a carton with a fitted insert.',
    watchOut: 'Fragrance oils can migrate into uncoated board over months in a warehouse. A coated or laminated inner face avoids a faint stain on the pack.',
    keyword: 'custom candle packaging',
  },
  'custom-home-fragrance-packaging': {
    angle: 'Diffusers, essential oils and fragrance sets, where the pack has to hold glass and prevent leaks.',
    decides: 'Reed diffusers ship with liquid, so the insert has to keep the bottle upright and the closure has to survive handling.',
    watchOut: 'Solvent-based fragrances attack some adhesives. Tell us the base oil so we can specify a compatible glue.',
    keyword: 'custom home fragrance packaging',
  },
  'custom-cbd-packaging': {
    angle: 'Compliance-first packaging where the regulated panel matters as much as the brand mark.',
    decides: 'Panel space comes first. You need room for cannabinoid content, batch number, net weight and state warnings before you place a logo.',
    watchOut: 'Requirements vary by state, so confirm the panel copy with your compliance advisor before we go to plate. Reprinting a run for a missed warning is expensive.',
    keyword: 'custom CBD packaging',
  },
  'custom-cosmetic-packaging': {
    angle: 'Small, high-margin retail packaging where finish quality is visible at arm’s length.',
    decides: 'Most cosmetic cartons are small and light, so board choice is about rigidity and print quality rather than strength.',
    watchOut: 'Ingredient panels are legally required and eat more space than brands expect. Lay out the back panel before you finalise the carton size.',
    keyword: 'custom cosmetic packaging',
  },
  'custom-printed-cups': {
    angle: 'Branded drinkware that leaves the counter and gets carried through a city.',
    decides: 'Capacity and wall construction. Single-wall plus a sleeve is cheaper than double-wall; double-wall feels better in the hand.',
    watchOut: 'Lids are sized to the cup family. Changing cup supplier mid-year can strand your existing lid stock.',
    keyword: 'custom printed cups',
  },
  'custom-containers': {
    angle: 'Rigid food-side containers and carriers that hold shape under warm or wet contents.',
    decides: 'Grease and moisture resistance come before print. An uncoated board container will darken within minutes of hot food.',
    watchOut: 'Check the container fits your existing carrier trays and delivery bags before ordering a full run.',
    keyword: 'custom containers',
  },
  'custom-food-trays': {
    angle: 'Open-top service trays built for speed at a busy counter.',
    decides: 'How fast staff can form the tray matters as much as the print. Locking corners that snap up in one motion save real time at peak.',
    watchOut: 'Trays that stack badly cost you counter space. Ask for a stacking shoulder if storage is tight.',
    keyword: 'custom food trays',
  },
  'custom-display-boxes': {
    angle: 'Packaging that becomes the shelf unit, so it has to survive shipping and then look retail-ready.',
    decides: 'The header card does the selling from three feet away. Structure keeps it upright once the front tears off.',
    watchOut: 'Retailers often have planogram limits on footprint and height. Confirm those before the structural die is cut.',
    keyword: 'custom display boxes',
  },
  'custom-mailers': {
    angle: 'Shipping packaging that is handled by carriers and opened by customers, so it has two jobs.',
    decides: 'Dimensional weight usually costs more than the box itself. Sizing tightly around the product is the cheapest saving available.',
    watchOut: 'Interior print is only worth paying for if the product does not fill the box. If it does, spend the budget on the outside.',
    keyword: 'custom mailers',
  },
  'custom-food-packaging': {
    angle: 'Direct food-contact packaging where barrier performance and compliance come before design.',
    decides: 'Contact time and temperature. A cold sandwich box and a hot wings box need different barriers even at the same size.',
    watchOut: 'Not every printed board is food-contact approved. Confirm the grade if the product touches the surface directly.',
    keyword: 'custom food packaging',
  },
  'custom-gift-boxes': {
    angle: 'Presentation packaging bought for an occasion, where the opening moment is the product.',
    decides: 'Perceived weight and the resistance of the lid do more for the experience than any printed detail.',
    watchOut: 'Seasonal gift runs have hard deadlines. Rigid boxes are hand-assembled, so book production earlier than you think you need to.',
    keyword: 'custom gift boxes',
  },
  'promotional-packaging': {
    angle: 'Short-run packaging for launches, press sends and campaigns, where speed matters more than unit cost.',
    decides: 'Run length. Under 500 units, digital printing removes the plate cost and shortens the schedule considerably.',
    watchOut: 'Press sends often go out in one wave. Build a few spare units into the order for damaged or returned parcels.',
    keyword: 'promotional packaging',
  },
  'custom-packaging-inserts': {
    angle: 'The internal structure that stops products moving, which is where most damage claims start.',
    decides: 'Product weight and fragility. Board handles most goods; foam is for anything that cannot take a knock.',
    watchOut: 'Inserts are cut to the inside of the outer pack, so we need both sets of dimensions, not just the product.',
    keyword: 'custom packaging inserts',
  },
  'custom-jewellery-boxes': {
    angle: 'Small rigid presentation packaging where material feel carries the price signal.',
    decides: 'The wrap paper and the insert do the work. A well-fitted pad matters more than the box print.',
    watchOut: 'Metal tarnishes against untreated board. Ask for a tarnish-resistant lining if you pack silver.',
    keyword: 'custom jewellery boxes',
  },
  'custom-apparel-packaging': {
    angle: 'Low-cost protection for soft goods with room for brand storytelling.',
    decides: 'Soft goods rarely need structural strength, so budget shifts from board grade to print and finish.',
    watchOut: 'Folded garments expand. Measure the folded stack under light compression, not laid flat.',
    keyword: 'custom apparel packaging',
  },
  'custom-labels': {
    angle: 'Pressure-sensitive labels that carry branding, compliance copy and batch data on one facestock.',
    decides: 'The surface you are applying to. Curved glass, squeeze tubes and frozen packs each need a different adhesive.',
    watchOut: 'Roll labels need a specified core size and wind direction or they will not run on your applicator.',
    keyword: 'custom labels',
  },
  'custom-stickers': {
    angle: 'Short-run printed vinyl and paper for seals, merchandise and campaign work.',
    decides: 'Where the sticker lives. Anything outdoors or in a dishwasher needs UV-resistant vinyl with a laminate.',
    watchOut: 'Very fine detail under 2 mm tends to lift at the cut. Simplify thin elements before production.',
    keyword: 'custom stickers',
  },
  'pharmaceutical-packaging': {
    angle: 'Regulated packaging where panel accuracy and traceability come before design.',
    decides: 'Regulatory copy, batch coding space and tamper evidence set the layout before branding gets a say.',
    watchOut: 'Artwork changes to regulated panels need a documented approval trail. Build that time into your schedule.',
    keyword: 'pharmaceutical packaging',
  },
  'wellness-packaging': {
    angle: 'Supplement and wellness packaging that has to carry a dense facts panel and still look considered.',
    decides: 'Panel area. Supplement facts, serving size and warnings take more room than most brands allow for.',
    watchOut: 'Claims wording is regulated. Have the panel checked before we produce the plates.',
    keyword: 'wellness packaging',
  },
  'custom-pouches': {
    angle: 'Flexible barrier packaging that protects contents while taking almost no freight volume.',
    decides: 'Shelf life target. That sets the barrier structure, and the barrier structure sets the price.',
    watchOut: 'Recyclable mono-material films behave differently on filling lines. Run a trial before switching a live SKU.',
    keyword: 'custom pouches',
  },
  'custom-sleeves': {
    angle: 'A low-cost printed band that turns a plain container into a branded pack.',
    decides: 'Circumference of the filled product. Measuring the empty container is the usual mistake.',
    watchOut: 'Sleeves on hot items need a grease-resistant coating or the print will mark.',
    keyword: 'custom sleeves',
  },
  'custom-bands': {
    angle: 'Printed bands that hold a set together and carry the branding without a full outer box.',
    decides: 'Band width relative to pack height. Too narrow looks like an afterthought; too wide hides the product.',
    watchOut: 'Bands need a snug fit. A few millimetres of slack and the set slides apart in transit.',
    keyword: 'custom bands',
  },
  'electronics-packaging': {
    angle: 'Packaging for goods where the cavity fit and accessory layout matter as much as the outer box.',
    decides: 'Component count. Every cable, adapter and manual needs a home or the pack looks disorganised on opening.',
    watchOut: 'Sensitive components may need anti-static materials. Tell us if that applies before we specify the insert.',
    keyword: 'electronics packaging',
  },
  'sustainable-packaging': {
    angle: 'Recycled, recyclable and compostable formats for brands with a stated environmental position.',
    decides: 'Which claim you can actually support. Recycled content, kerbside recyclability and certified compostability are three different things.',
    watchOut: 'Compostable does not mean it breaks down in a home bin. Be specific in your on-pack wording or you invite a complaint.',
    keyword: 'sustainable packaging',
  },
}

export function categoryIntro(c: Category, productCount: number): string[] {
  const note = CATEGORY_NOTES[c.slug]
  const inds = industriesFor(c.slug)
  if (!note) {
    return [
      `We produce ${productCount} ${c.name.toLowerCase()} formats to order for brands selling in the US, UK, Canada and Australia.`,
    ]
  }
  return [
    `${note.angle} We currently produce ${productCount} ${productCount === 1 ? 'format' : 'formats'} in this range, each one made to your dimensions rather than pulled from stock.`,
    note.decides,
    `Most of the volume here comes from ${inds.map((i) => i.name.toLowerCase()).join(', ')} brands. ${note.watchOut}`,
  ]
}

/* ------------------------------------------------------------------ */
/* FAQs                                                                */
/* ------------------------------------------------------------------ */

export interface Faq {
  q: string
  a: string
}

/**
 * Ten FAQs per product, built from that product's own attributes. The question
 * set rotates by form factor and the answers quote the product's real material,
 * size band, printing route and minimums.
 */
export function productFaqs(p: Product): Faq[] {
  const f = p.form
  const n = p.name
  const l = lower(n)
  const s = p.slug
  const mat = f.materials.slice(0, 3).join(', ')
  const fin = f.finishes.slice(0, 4).join(', ')

  const core: Faq[] = [
    {
      q: `What is the minimum order quantity for ${l}?`,
      a: `${f.moq} If you are testing a design before a full run, tell us the quantity you have in mind and we will quote the smallest batch that still makes sense for your budget.`,
    },
    {
      q: `Can I order ${l} in a custom size?`,
      a: `Yes. ${f.sizing} Send us the dimensions of the product itself and we will build the dieline around it rather than asking you to fit a stock size.`,
    },
    {
      q: `What materials can ${l} be made from?`,
      a: `We stock ${mat.toLowerCase()} for this format, along with several other grades. The right one depends on the weight of your product and how far it has to travel, and we will recommend a specific stock once we know both.`,
    },
    {
      q: `How is the printing done on ${l}?`,
      a: `${f.printing.join(', ')} are the routes available for this format. ${f.printing[0]} suits most runs. For shorter quantities we usually move to digital, which removes the plate cost.`,
    },
    {
      q: `What finishes can be applied to ${l}?`,
      a: `${fin} are all available, applied in the same production run. Finishes change both the look and the cost, so we will show you what each one adds before you commit.`,
    },
    {
      q: `How should I supply artwork for ${l}?`,
      a: `${f.artwork} We send you a dieline template once the size is confirmed, and our team checks every file before it goes to press.`,
    },
    {
      q: `How much do ${l} cost?`,
      a: `${PRICE_LINE} Because this format is made to order, we quote each project rather than publishing a fixed rate.`,
    },
    {
      q: `How are ${l} delivered?`,
      a: `${f.shipping} We ship to the United States, the United Kingdom, Canada and Australia, allowing 3 to 5 business days of production and 2 to 7 in transit, and we confirm the date when your order is approved for production.`,
    },
    {
      q: `Can I see a sample before placing a full order?`,
      a: `Yes. We can produce a plain unprinted sample so you can check the fit and structure, or a printed prototype so you can see the finish. Sample costs are usually credited against a production order.`,
    },
    {
      q: `What are ${l} typically used for?`,
      a: `${f.applications.join(', ')} are the most common uses we see. If your application is different, describe it in your quote request and we will tell you whether this format is the right one.`,
    },
  ]

  // Two extra format-specific questions swapped in so pages differ further.
  const extras: Record<string, Faq[]> = {
    default: [],
  }
  const addonQ: Faq = {
    q: `What add-ons are available for ${l}?`,
    a: `${f.addons.join(', ')} can all be specified. Add-ons are quoted separately because each one adds a step in production.`,
  }
  const structureQ: Faq = {
    q: `How are ${l} constructed?`,
    a: `They are ${f.construction}. ${Object.entries(f.specNotes).map(([k, v]) => `${k}: ${v}`).join('. ')}.`,
  }

  // Rotate which two of the pool get swapped in, keyed on the slug.
  const swap = Math.floor(hash(s + 'faq') * 3)
  const out = core.slice()
  if (swap === 0) out.splice(4, 0, addonQ)
  else if (swap === 1) out.splice(2, 0, structureQ)
  else {
    out.splice(3, 0, addonQ)
    out.splice(7, 0, structureQ)
  }
  return out.slice(0, Math.max(10, out.length))
}

export function categoryFaqs(c: Category, count: number): Faq[] {
  const note = CATEGORY_NOTES[c.slug]
  const inds = industriesFor(c.slug)
  const name = c.name.toLowerCase()
  const k = note?.keyword ?? name
  return [
    {
      q: `What does The Retail Packaging produce in the ${name} range?`,
      a: `${count} made-to-order ${count === 1 ? 'format' : 'formats'}, all manufactured to your dimensions and printed with your artwork. ${note?.angle ?? ''}`,
    },
    {
      q: `What is the minimum order for ${k}?`,
      a: `A flat 100 units on any format in this range. Print method changes the unit price rather than the minimum, so tell us your quantity and we will quote the most efficient route.`,
    },
    {
      q: `How do I choose the right specification for ${k}?`,
      a: `${note?.decides ?? 'Start with the product weight and how it ships, then choose the material.'} Send us the product dimensions and weight and we will recommend a specification rather than asking you to guess.`,
    },
    {
      q: `Can I get ${k} in a size that is not listed?`,
      a: `Yes. Every item in this range is cut to order, so the listed formats are starting points rather than fixed sizes. We build a fresh dieline around your product.`,
    },
    {
      q: `What is the most common mistake buyers make with ${k}?`,
      a: `${note?.watchOut ?? 'Ordering before checking the product actually fits, which usually means measuring the wrong dimension.'}`,
    },
    {
      q: `Which industries order ${k} most often?`,
      a: `${inds.map((i) => i.name).join(', ')}. ${inds[0]?.blurb ?? ''}`,
    },
    {
      q: `How long does production take for ${k}?`,
      a: `Most orders in this range move through production in 3 to 5 business days after artwork approval, with shipping on top. Hand-assembled and specialty-finished items sit at the longer end. We confirm a firm date with your quote.`,
    },
    {
      q: `Can I order samples of ${k} before a full run?`,
      a: `Yes. We can send a plain structural sample so you can test the fit, or produce a printed prototype so you can check colour and finish. Sample costs are normally credited against the production order.`,
    },
    {
      q: `Do you offer recycled or recyclable options in this range?`,
      a: `Most formats here can be produced on recycled board or with recyclable materials, and several can be made compostable. Tell us which environmental claim you need to support and we will specify a material that genuinely backs it.`,
    },
    {
      q: `How is pricing calculated for ${k}?`,
      a: `${PRICE_LINE} We quote each project individually because the same format can vary widely in cost once size, board grade and finishing are set.`,
    },
    {
      q: `What artwork format should I send?`,
      a: `Print-ready PDF or vector AI files work best, with fonts outlined and images at 300 dpi. We supply a dieline template for your chosen size, and our prepress team checks every file before production.`,
    },
    {
      q: `Where do you ship ${k}?`,
      a: `To the United States, the United Kingdom, Canada and Australia. Reckon on 3 to 5 business days in production once artwork is approved and 2 to 7 in transit, wherever the consignment is going, and we confirm the date on the quote.`,
    },
  ]
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

/** Trim to a word boundary near `max` — never mid-word. */
export function clampText(text: string, max: number): string {
  if (text.length <= max) return text
  const cut = text.slice(0, max)
  const at = cut.lastIndexOf(' ')
  return (at > max * 0.6 ? cut.slice(0, at) : cut).replace(/[,;:.\s]+$/, '')
}

export function productMeta(p: Product): { title: string; description: string } {
  const f = p.form
  const titleOptions = [
    `${p.name} | Custom Printed to Order`,
    `Custom ${bare(p.name)} | Made to Your Size`,
    `${p.name} | Wholesale Custom Printing`,
    `${p.name} | Custom Sizes and Printing`,
  ]
  const title = clampText(pick(titleOptions, p.slug + 't'), 60)

  const descOptions = [
    `Custom ${lower(p.name)} made to your dimensions in ${f.materials[0].toLowerCase()}. Printing, finishing and delivery from one supplier.`,
    `Order ${lower(p.name)} built to your size and artwork. ${f.printing[0]} printing, ${f.finishes[0].toLowerCase()} finishing, US and export shipping.`,
    `${p.name} manufactured to order. Choose your board, print and finish, then request a quote for your quantity.`,
    `Made-to-order ${lower(p.name)} with your artwork. Custom dimensions, ${f.materials[0].toLowerCase()} and fast delivery.`,
  ]
  const description = clampText(pick(descOptions, p.slug + 'd'), 132)
  return { title, description }
}

export function categoryMeta(c: Category, count: number): { title: string; description: string } {
  const note = CATEGORY_NOTES[c.slug]
  const title = clampText(`${c.name} | ${count} Made-to-Order Formats`, 60)
  const description = clampText(
    `${note?.angle ?? `${c.name} produced to order.`} ${count} formats, custom sizes, US delivery.`,
    132
  )
  return { title, description }
}
