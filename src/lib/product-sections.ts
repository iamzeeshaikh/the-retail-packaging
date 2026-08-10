import type { Product } from './catalog'
import { hash } from './catalog'
import type { PSection, Trait } from './product-traits'
import { factsFor } from '../data/products'

/**
 * Section copy for a product page.
 *
 * Every block is written from the product's real attributes — form factor,
 * traits, category, image count — rather than from one shared paragraph with
 * the name swapped. Where several phrasings are genuinely applicable, one is
 * chosen deterministically from the slug so a page is stable across builds
 * but neighbouring products do not read alike.
 */

export interface Block {
  h: string
  body: string[]
  list?: { title?: string; items: string[] }
  table?: { head: string[]; rows: string[][] }
}

/** Deterministic pick from a list of applicable options. */
const pick = <T,>(opts: T[], seed: string): T => opts[Math.floor(hash(seed) * opts.length) % opts.length]

interface Ctx {
  p: Product
  t: Set<Trait>
  f: Product['form']
  cat: string
  /** Per-product facts, where they have been written. */
  k?: ReturnType<typeof factsFor>
}

const has = (c: Ctx, ...traits: Trait[]) => traits.some((x) => c.t.has(x))

/* ------------------------------------------------------------------ overview */

function overview(c: Ctx): Block {
  const { p, f, k } = c
  if (k) {
    return {
      h: `What ${p.name.toLowerCase()} have to cope with`,
      body: [
        `${p.name} hold ${k.holds}. That is the starting point for the specification, because ${k.detail.charAt(0).toLowerCase()}${k.detail.slice(1)}`,
        `In service they are used for ${k.context}.`,
      ],
    }
  }
  const heads = [
    `What ${p.name} are, and where they work`,
    `How ${p.name} are built`,
    `${p.name} in practice`,
    `The short version on ${p.name}`,
  ]
  const opens: string[] = []

  if (has(c, 'foodContact'))
    opens.push(`${p.name} are made to order as ${f.noun}, and the specification is driven by what goes inside them rather than by how they look on a screen. Contents that are hot, greasy or wet change the board before anything else does.`)
  if (has(c, 'shipping'))
    opens.push(`${p.name} exist to get something through a carrier network intact. That makes two numbers matter more than any other: the outside dimensions, which are billed on every parcel, and the damage rate, which is what the packaging is for.`)
  if (has(c, 'luxury', 'gifting'))
    opens.push(`${p.name} are bought because the pack is part of what the customer paid for. The construction is ${f.construction}, and at this end of the market the finish and the fit carry as much weight as the structure.`)
  if (has(c, 'regulated'))
    opens.push(`${p.name} carry information as much as they carry product. The structure has to leave room for the copy your category requires, and that is a dieline decision rather than a design one.`)
  if (has(c, 'display'))
    opens.push(`${p.name} have to survive a distribution chain as a case and then look deliberate as a display. Those two jobs pull in opposite directions, which is what makes the format harder than it looks.`)
  if (has(c, 'protective'))
    opens.push(`${p.name} are specified around what they protect. Most transit damage comes from contents moving inside an otherwise intact box, so the fit matters more than the board grade.`)
  if (!opens.length)
    opens.push(`${p.name} are ${f.noun}, ${f.construction}. We make them to your dimensions, in your material, printed with your artwork.`)

  const second: string[] = []
  if (has(c, 'window'))
    second.push('A window changes the structure as well as the look: the aperture removes panel strength, so the surrounding board usually needs to be a grade heavier than the same carton without one.')
  if (has(c, 'seasonal'))
    second.push('Seasonal work is bought once and used once, so the useful advice is to order a modest overage inside the original run. Reopening a finished run later costs far more than the spare units would have.')
  if (has(c, 'handle'))
    second.push('Handle type is the decision most people underestimate. Twisted paper is fine for light contents; anything heavy needs a reinforced top edge as well as a stronger handle, because the failure is usually the bag tearing, not the handle breaking.')
  if (has(c, 'eco'))
    second.push('Recycled content, kerbside recyclability and certified compostability are three separate claims with three separate evidence requirements. Tell us which one you intend to print and we will specify a material that supports it.')
  if (has(c, 'cold'))
    second.push('Cold and condensation are different problems. Cold makes standard adhesive brittle; condensation softens uncoated board from the outside. If your product meets both, the specification has to address both.')
  if (has(c, 'small'))
    second.push('At this size the tolerances tighten. A millimetre of slack that would be invisible on a large carton is obvious on a small one, so we usually recommend a structural sample before print.')
  if (!second.length)
    second.push(pick([
      `Minimum order is 100 units on any format, and unit cost falls sharply as quantity rises. Nothing here is a stock item — every run is cut to the dimensions you give us.`,
      `Nothing in this range is stock. The dimensions, the board, the print method and the finish are all decided per order, which is why we quote rather than publish a price list.`,
      `The specification is yours to set. Where a cheaper route exists that still does the job, we say so at quoting rather than after the invoice.`,
    ], p.slug + 'ov2'))

  return { h: pick(heads, p.slug + 'ov'), body: [pick(opens, p.slug), pick(second, p.slug + '2')] }
}

/* ----------------------------------------------------------------- use cases */

function useCases(c: Ctx): Block {
  const { p, f, k } = c
  if (k) {
    const items = [k.context.charAt(0).toUpperCase() + k.context.slice(1), ...f.applications.slice(0, 3)]
    return {
      h: `Where ${p.name.toLowerCase()} are actually used`,
      body: [`${p.name} are specified for ${k.context}. ${k.detail}`],
      list: { items },
    }
  }
  const items = f.applications.slice()
  if (has(c, 'foodContact')) items.unshift('Counter service and takeaway')
  if (has(c, 'shipping')) items.unshift('Direct-to-consumer despatch')
  if (has(c, 'gifting')) items.unshift('Gifting and seasonal editions')
  if (has(c, 'display')) items.unshift('Point-of-purchase display')

  const body = has(c, 'foodContact')
    ? [`Most ${p.name.toLowerCase()} we quote go into food service, where the constraint is rarely appearance. Grease resistance, behaviour under a hot load and how the pack stacks in a courier bag decide whether it works.`]
    : has(c, 'shipping')
      ? [`${p.name} are usually bought by operations shipping at volume, where a small change compounds. Sizing tightly to the product is almost always the largest saving available, and it is larger than anything achievable on board price.`]
      : [`${p.name} are specified across several contexts, and the right build differs between them. Tell us which of these is yours and we will size and grade the pack for it rather than for an average.`]

  return {
    h: has(c, 'foodContact') ? `Where ${p.name.toLowerCase()} actually get used` : `Who buys ${p.name.toLowerCase()}`,
    body,
    list: { items: [...new Set(items)].slice(0, 6) },
  }
}

/* ----------------------------------------------------------------- structure */

function structure(c: Ctx): Block {
  const { p, f, k } = c
  if (k) {
    return {
      h: `The build detail that decides ${p.name.toLowerCase()}`,
      body: [k.detail, `${p.name} are ${f.construction}.`],
    }
  }
  const body = [`${p.name} are ${f.construction}.`]
  if (has(c, 'luxury'))
    body.push('Rigid construction is hand-assembled rather than machine-glued, which is why it costs more and takes longer than a folding carton. It also means the wrap, the corner finish and the interior lining are all separate decisions with separate costs.')
  else if (has(c, 'display'))
    body.push('The structural question is where the case opens. A perforation in the wrong place either fails in transit or refuses to tear cleanly in the store, and both are decided at dieline stage rather than in print.')
  else if (has(c, 'protective'))
    body.push('The outer and the insert are one system. A fitted cavity that holds the contents still usually allows a lighter outer, so specifying them together costs less than specifying either alone.')
  else
    body.push('The structure is cut from a die made for your dimensions. Once that die exists, repeat runs reference it directly, so the tooling cost is a one-off rather than a per-order charge.')
  return { h: `How ${p.name.toLowerCase()} are constructed`, body }
}

/* ----------------------------------------------------------------- materials */

function materials(c: Ctx): Block {
  const { p, f, k } = c
  if (k?.spec) {
    return {
      h: `The substrate for ${p.name.toLowerCase()}`,
      body: [k.spec, `The options we would consider for this format are below; ${k.detail.charAt(0).toLowerCase()}${k.detail.slice(1)}`],
      list: { items: f.materials },
    }
  }
  const lead = has(c, 'foodContact')
    ? `${f.materials.slice(0, 3).join(', ')} cover most food-service orders in this format. Where the pack touches food directly we specify a food-contact compliant board and ink set, which narrows the options but not by much.`
    : has(c, 'eco')
      ? `${f.materials.slice(0, 3).join(', ')} are the usual starting points, and recycled grades are available across all of them. Recycled fibre is slightly less stiff at the same caliper, so we sometimes step up a grade to hold the same performance.`
      : has(c, 'protective')
        ? `${f.materials.slice(0, 3).join(', ')} are specified by what they have to carry rather than how they print. Weight of contents and stack height decide the grade; print quality is a secondary consideration on a protective outer.`
        : `${f.materials.slice(0, 3).join(', ')} cover most orders for this format. Heavier stocks add rigidity and cost; lighter stocks reduce both.`

  const second = has(c, 'barrier')
    ? 'Barrier performance is a separate axis from board weight. A heavier stock does not block oxygen or moisture — that needs a coating or a laminate layer, and which one you can use depends on the recyclability claim you intend to make.'
    : has(c, 'cold')
      ? 'For anything stored or shipped cold, the liner matters more than the outer face. Condensation forms on the inside of a cold pack and an uncoated liner separates from the flute over repeated cycles.'
      : pick([
        'Our comparison of packaging board grades sets out how each one behaves in transit.',
        'If you are unsure which grade you need, send the contents weight and we will specify against it rather than against a category average.',
        'Stepping up a caliper is usually cheaper than discovering the wrong one across a full run, but we will say when it is genuinely unnecessary.',
      ], p.slug + 'mt')

  return { h: 'Materials that suit this format', body: [lead, second], list: { items: f.materials } }
}

function materialTable(c: Ctx): Block {
  const rows: string[][] = has(c, 'barrier')
    ? [
        ['Uncoated kraft', 'None', 'Dry goods, short shelf life'],
        ['Aqueous coated', 'Light moisture', 'Keeps paper recyclable'],
        ['Foil laminate', 'Oxygen and moisture', 'Longest shelf life, not kerbside recyclable'],
        ['Mono-material film', 'Good, shorter life', 'Store drop-off recycling'],
      ]
    : has(c, 'eco')
      ? [
          ['Recycled CCNB', '0–5% higher', 'Kerbside, widely accepted'],
          ['Virgin SBS', 'Baseline', 'Kerbside, best print surface'],
          ['Kraft board', 'Baseline', 'Kerbside, natural finish'],
          ['Certified compostable', '20–40% higher', 'Industrial facilities only'],
        ]
      : [
          ['12pt board', 'Lightest', 'Small, light contents'],
          ['14–16pt board', 'Mid', 'Most retail cartons'],
          ['18pt and up', 'Heaviest', 'Larger or heavier contents'],
          ['E-flute corrugated', 'Bulkier', 'Anything needing crush resistance'],
        ]
  return {
    h: 'Comparing the substrate options',
    body: ['The honest trade-offs between the stocks we would consider for this format.'],
    table: {
      head: has(c, 'barrier')
        ? ['Material', 'Barrier', 'Recovery route']
        : has(c, 'eco')
          ? ['Material', 'Cost vs conventional', 'Recovery route']
          : ['Material', 'Relative weight', 'Best for'],
      rows,
    },
  }
}

/* ------------------------------------------------------------------ printing */

function printing(c: Ctx): Block {
  const { p, f, k } = c
  if (k?.press) {
    return {
      h: `Printing ${p.name.toLowerCase()}`,
      body: [k.press, `${f.printing.join(', ')} are all available for this format. Run length usually decides which is cheapest: digital removes the plate cost on short quantities, offset and flexo overtake it at volume.`],
    }
  }
  const lead = has(c, 'branded', 'cosmetic', 'luxury')
    ? `${f.printing.join(', ')} are all available, and on a presentation-led product the choice affects appearance as well as cost. Offset holds a spot colour tightly across a run; digital has a wider tolerance but removes the plate cost entirely.`
    : `${f.printing.join(', ')} are all available. Run length is usually the deciding factor: digital removes the plate cost on short quantities, while offset and flexographic printing become cheaper per unit once volumes climb.`
  const second = has(c, 'seasonal')
    ? 'For a seasonal edition that will not repeat, digital almost always wins. There is no second run for the plate cost to amortise across.'
    : has(c, 'foodContact')
      ? 'Where the print sits against food, the ink set is constrained as well as the board. Tell us whether contact is direct or through a liner.'
      : 'If you expect several artwork variants, say so at quoting. Each variant carries its own setup on offset, which often shifts the economics toward digital regardless of total quantity.'
  return { h: 'Printing this format', body: [lead, second] }
}

/* ------------------------------------------------------------------ finishes */

function finishes(c: Ctx): Block {
  const { p, f, k } = c
  if (k?.press) {
    return {
      h: `Finishing ${p.name.toLowerCase()}`,
      body: [k.press, 'Each finish below is a separate pass on the press or the finishing line, which is why they are quoted individually rather than bundled.'],
      list: { items: f.finishes },
    }
  }
  const lead = has(c, 'luxury')
    ? 'Each applied finish is a separate production pass, which is why a short high-finish run can take longer than a long plain one. We quote them line by line so you can see what each is costing.'
    : pick([
        'Finishing is applied in the same production run, so stock is not shipped between vendors. Each option adds a step and is priced separately.',
        'Every finish below is a separate pass on the press or the finishing line, which is why they are quoted individually rather than bundled.',
        'Finishes change how a pack reads more than they change how it performs. Pick the one or two that carry the product and leave the rest.',
      ], p.slug + 'fn')
  return { h: 'Finishes worth considering', body: [lead], list: { items: f.finishes } }
}

/* ------------------------------------------------------------------- inserts */

function inserts(c: Ctx): Block {
  const { p, f } = c
  return {
    h: 'Holding the contents in place',
    body: [
      has(c, 'electronics')
        ? 'Device packaging is an insert problem before it is a box problem. The cavity is cut to the geometry of the item, and once the contents cannot move, the outer rarely needs to be heavier than a standard grade.'
        : 'Where a product needs to be held still, a fitted insert cut to its profile does more for damage rates than a heavier outer board. It usually costs less too, because you can drop a grade on the outer.',
    ],
    list: { items: f.addons },
  }
}

/* -------------------------------------------------------------------- sizing */

function sizing(c: Ctx): Block {
  const { p, f, k } = c
  if (k) {
    return {
      h: `Sizing ${p.name.toLowerCase()}`,
      body: [
        k.sizeNote,
        `Send the contents rather than a box size. ${k.buyerNote}`,
      ],
    }
  }
  const body = [f.sizing]
  body.push(
    has(c, 'shipping')
      ? 'Size to the product, not to the box you are using now. Most packs in service were inherited rather than chosen, and dropping a dimensional weight band saves on every parcel for as long as the product sells.'
      : has(c, 'display')
        ? 'Confirm your retailer’s planogram dimension before we cut the die. A few millimetres on the primary pack can force a full redesign of the case around it.'
        : pick([
            'If your product sits outside the usual range, send the measurements and we will tell you whether this format still works or whether a different structure would serve you better.',
            'Send the product measurements rather than a box size. A pack sized to an inherited box carries whatever compromise produced it.',
            'Dimensions have a cost dimension too: a few millimetres can change how many pieces nest on a press sheet, so tell us if yours have any flexibility.',
          ], p.slug + 'sz')
  )
  return { h: 'Getting the size right', body }
}

/* ---------------------------------------------------------------- protection */

function protection(c: Ctx): Block {
  const { p, k } = c
  if (k) {
    return {
      h: `How ${p.name.toLowerCase()} fail, and what prevents it`,
      body: [k.failure, k.detail],
    }
  }
  return {
    h: 'What actually causes damage',
    body: [
      'Two failures look similar on an inspection report and need opposite fixes. A crushed box means the board grade is too light for the stack above it. An intact box with damaged contents means the product moved inside, and a heavier board will not help.',
      'The second case is far more common, and a fitted insert solves it at lower cost than upgrading the outer. Tell us which one you are seeing and we will specify against it rather than guessing.',
    ],
  }
}

/* --------------------------------------------------------------------- shelf */

function shelf(c: Ctx): Block {
  const { p } = c
  return {
    h: has(c, 'window') ? 'What a window does for and against you' : 'Presentation on the shelf',
    body: has(c, 'window')
      ? [
          'A window sells the product by showing it, which is why the format exists. It also removes panel area, weakens the face it sits in, and adds a film component that affects the recyclability of the whole pack.',
          'None of that is a reason to avoid it — it is a reason to decide the aperture size deliberately rather than making it as large as the design allows.',
        ]
      : [
          `Shelf presence is decided at arm's length, not close up. Contrast, the front panel hierarchy and how the pack sits next to competitors matter more than a finish that only reads in the hand.`,
          `If ${p.name.toLowerCase()} will be faced on a shelf, tell us the facing orientation so the strongest panel is the one the customer sees.`,
        ],
  }
}

/* ------------------------------------------------------------------ shipping */

function shipping(c: Ctx): Block {
  const { f } = c
  return {
    h: 'Getting them to you, and onward',
    body: [
      f.shipping,
      'Delivery windows are confirmed in writing when your order moves into production, and we flag any risk to the date before you approve rather than after.',
    ],
  }
}

/* ------------------------------------------------------------------- storage */

function storage(c: Ctx): Block {
  const { p, k } = c
  if (k) {
    return {
      h: `Holding ${p.name.toLowerCase()} before service`,
      body: [
        k.failure,
        'Paperboard also absorbs moisture from the air until it equalises with its surroundings. If stock sits more than about six weeks in unconditioned space, a moisture-resistant coating is worth its small premium.',
      ],
    }
  }
  return {
    h: 'Storing stock before you use it',
    body: [
      has(c, 'cold')
        ? 'Cold storage brings two effects: standard carton adhesive becomes brittle, and condensation forms whenever packs move between temperatures. Both are cheap to design around if we know about them at quoting.'
        : 'Paperboard absorbs moisture from the air until it equalises with its surroundings, losing stiffness as it does. In a conditioned stockroom that is irrelevant; in an unconditioned warehouse over several months it is not.',
      'If stock will sit for more than about six weeks in unconditioned space, a moisture-resistant coating is usually worth its small premium.',
    ],
  }
}

/* ------------------------------------------------------------- sustainability */

function sustainability(c: Ctx): Block {
  return {
    h: 'The environmental claim you can defend',
    body: [
      'Recycled content, kerbside recyclability and certified compostability are three different claims requiring three different kinds of evidence. Brands get into trouble by treating them as one.',
      'Tell us which claim you intend to print on the pack and we will specify a material that supports it, or say plainly that it does not exist at your price point.',
    ],
  }
}

/* ----------------------------------------------------------------- compliance */

function compliance(c: Ctx): Block {
  return {
    h: 'Regulatory copy and panel space',
    body: [
      'Regulated products carry information that is not optional, and it competes for the same panel area as the brand design. The panel is almost always the binding constraint, not the structure.',
      'Tell us which disclosures apply before we cut the die and we will block the area on the dieline. Retrofitting a warning panel into a finished layout usually means redrawing it.',
    ],
  }
}

/* -------------------------------------------------------------------- artwork */

function artwork(c: Ctx): Block {
  const { f } = c
  return {
    h: 'Preparing artwork',
    body: [
      f.artwork,
      'Supply a print-ready PDF or vector file with fonts outlined and images at 300 dpi. Our prepress team checks every file before a proof is issued.',
    ],
  }
}

/* ------------------------------------------------------------------- sampling */

function sampling(c: Ctx): Block {
  const { p } = c
  return {
    h: 'Checking it before you commit',
    body: [
      has(c, 'luxury', 'cosmetic')
        ? 'Foil, soft-touch and deboss all read differently in person than on a screen, so we recommend a printed prototype rather than a digital proof alone for anything finish-led.'
        : pick([
            `We can produce a plain unprinted sample so you can check the fit and structure of ${p.name.toLowerCase()} before committing.`,
            `A plain structural sample is the cheapest way to find a fit problem — far cheaper than finding it across a full run.`,
            `Ask for an unprinted sample if the question is fit, or a printed prototype if the question is colour. They answer different things.`,
          ], p.slug + 'sm'),
      'Sample costs are normally credited against the production order.',
    ],
  }
}

/* ------------------------------------------------------------------- ordering */

function ordering(c: Ctx): Block {
  const { p, f } = c
  const heads = [
    `Ordering ${p.name.toLowerCase()}`,
    `How an order runs`,
    `From enquiry to delivery`,
    `What we need from you`,
  ]
  const first = [
    `Send the product dimensions, the quantity and your deadline. What comes back is a board grade, a structure, a print method, a lead time and a written price — not a number on its own.`,
    `The useful starting point is the product, not the pack. Give us its measurements and the quantity, and we work the ${f.singular} outward from there.`,
    `Tell us what goes inside, how many you need and when. Those three answers are enough for us to specify and price the job properly.`,
    `Start with dimensions and quantity. If you already run something similar, a physical sample tells us more in a minute than a specification does in a page.`,
  ]
  const second = has(c, 'regulated')
    ? [`We issue a dieline template, prepress checks your artwork against it, and a dated proof comes back for sign-off. Where your quality system needs it, that approval is recorded against a revision number.`]
    : has(c, 'shipping')
      ? [`We send a dieline sized to your product, check your artwork and issue a proof. For shipping formats we will also flag it if the pack looks a size larger than it needs to be.`]
      : has(c, 'luxury', 'gifting')
        ? [`A dieline template follows, then a proof. For finish-led work we usually recommend a physical prototype at this point, because foil and soft-touch do not read accurately on screen.`]
        : [
            `A dieline template follows, sized to your product. Prepress checks your artwork against it and issues a proof; nothing runs until you sign that off.`,
            `You approve the quote, we send the dieline, prepress proofs it, and production follows. The proof stage is where changes are still free.`,
          ]
  return { h: pick(heads, p.slug + 'or'), body: [pick(first, p.slug + 'o1'), pick(second, p.slug + 'o2')] }
}

/* ----------------------------------------------------------------------- cost */

function cost(c: Ctx): Block {
  return {
    h: 'What moves the price',
    body: [
      'Four things drive a quote more than anything else: the quantity, the print route, the board grade and the number of finishing passes. Dimensions matter too, but usually through how efficiently the shape nests on the press sheet.',
      'Prices start from $0.30 per piece for large-volume orders. If a cheaper route exists we say so at quoting rather than after the invoice.',
    ],
  }
}

/* ------------------------------------------------------------------- mistakes */

function mistakes(c: Ctx): Block {
  const items = has(c, 'foodContact')
    ? [
        'Specifying board weight without saying how hot or greasy the contents are.',
        'Forgetting that a pack carried at an angle in a courier bag behaves differently to one on a counter.',
        'Choosing a vented lid for a dish that needs to stay hot, or a sealed one for a dish that needs to stay crisp.',
        'Ordering a year of stock that then sits through a humid summer.',
      ]
    : has(c, 'regulated')
      ? [
          'Designing the artwork before confirming which disclosures apply.',
          'Placing a barcode across a crease, where scanners fail.',
          'Assuming a previous run can be repeated without checking the artwork revision.',
          'Leaving no panel headroom for a claim added later.',
        ]
      : has(c, 'shipping')
        ? [
            'Quoting a replacement for the current box instead of measuring the product.',
            'Using void fill to compensate for a box that is simply a size too large.',
            'Dropping a board grade when the damage is actually caused by movement inside.',
            'Running more box sizes than the product range genuinely needs.',
          ]
        : [
            'Sizing to the box currently in use rather than to the product.',
            'Committing to tooling before the range has settled.',
            'Paying for a finish that only reads in the hand on a product seen from a metre away.',
            'Ordering a single large run before demand is proven.',
          ]
  const { p, k } = c
  return {
    h: k ? `What buyers get wrong with ${p.name.toLowerCase()}` : 'Mistakes worth avoiding',
    body: k
      ? [k.buyerNote, 'The rest of these come up often enough across the format to be worth stating plainly.']
      : ['These come up often enough to be worth stating plainly.'],
    list: { items },
  }
}

/* ------------------------------------------------------------------ dispatch */

const BUILDERS: Record<PSection, ((c: Ctx) => Block) | null> = {
  overview, useCases, structure, materials, materialTable, printing, finishes,
  inserts, sizing, protection, shelf, shipping, storage, sustainability,
  artwork, sampling, ordering, cost, mistakes, compliance,
  specTable: null, // rendered from real spec data by the template
  related: null,   // rendered from the catalogue by the template
}

export function buildSection(key: PSection, p: Product, t: Set<Trait>): Block | null {
  const fn = BUILDERS[key]
  if (!fn) return null
  return fn({ p, t, f: p.form, cat: p.categorySlug, k: factsFor(p.slug) })
}
