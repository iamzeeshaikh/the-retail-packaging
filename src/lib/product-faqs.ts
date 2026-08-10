import type { Product } from './catalog'
import { hash } from './catalog'
import type { Trait } from './product-traits'
import { minQty, fmtQty } from './commerce'
import { factsFor } from '../data/products'

/**
 * Product FAQs, composed from what the product actually is.
 *
 * Previously every product page asked the same questions with the name
 * swapped in — one question appeared on all 371 pages. Here the candidate
 * pool is assembled from the product's traits, its form factor and its
 * category, then ordered most-specific-first. Two products only share a
 * question when they genuinely share the concern behind it, and even the
 * universal questions carry answers built from that product's attributes.
 */
export interface Faq { q: string; a: string }

const TRAIT_FAQS: Partial<Record<Trait, (p: Product) => Faq[]>> = {
  window: (p) => [
    { q: 'How large can the window be?', a: `As large as the panel can afford to lose. Every square inch of aperture removes stiffness from that face, so on ${p.name.toLowerCase()} we usually step the board up a grade once the window passes roughly a third of the panel. We will tell you where that line falls for your dimensions.` },
    { q: 'Does the window film affect recyclability?', a: 'Yes. A PET film window means the pack is no longer straight paper, and most kerbside systems want the film separated first. If a clean recyclability claim matters more than visibility, a die-cut aperture with no film is an option worth discussing.' },
  ],
  handle: (p) => [
    { q: 'Which handle type should I choose?', a: 'It depends on the load, not the look. Twisted paper handles suit light contents; flat paper is stronger for the same cost; cotton rope carries the most and reads as the most premium. Above a few kilos the failure point is usually the bag tearing at the handle, so a reinforced top edge matters as much as the handle itself.' },
    { q: 'How much weight will they carry?', a: `That is set by the paper weight and the top-edge reinforcement together rather than by the handle alone. Tell us the heaviest thing you will put in ${p.name.toLowerCase()} and we will specify to it rather than to an average.` },
  ],
  seasonal: (p) => [
    { q: 'Should I order spare units?', a: `Yes, and it is the one piece of advice we give unprompted on seasonal work. ${p.name} are bought for a single season with no second run behind them, and producing overage inside the original run costs a fraction of a separate short run later.` },
    { q: 'What is the latest I can order for a season?', a: 'Work backwards from the date you need stock in hand: 3 to 5 business days production after artwork approval, plus freight, plus proofing time. We would rather you gave us the date than asked for a lead time.' },
  ],
  luxury: () => [
    { q: 'Why do rigid boxes cost more than folding cartons?', a: 'Because they are hand-assembled rather than machine-glued, and because the wrap, corner finish and interior lining are each separate operations. They also ship assembled rather than flat, which raises freight. The trade is a structure that feels substantially different in the hand.' },
    { q: 'Which finishes are worth the money at low quantity?', a: 'Ones that read from arm’s length. Soft-touch lamination and deboss change how the whole pack reads; a small foil detail often does not survive the distance between shelf and eye. We quote each pass separately so you can judge.' },
  ],
  eco: () => [
    { q: 'Is recycled board weaker than virgin board?', a: 'Slightly, at the same caliper — recycled fibres are shorter, so the board is a little less stiff and takes on moisture a little faster. Stepping up one caliper generally restores the performance while keeping the recycled claim intact.' },
    { q: 'Can you certify the recycled content?', a: 'We can state the recycled content of the board and supply the mill documentation behind it. We do not issue certifications ourselves, and we would rather give you the underlying evidence than a claim you cannot substantiate.' },
  ],
  poly: () => [
    { q: 'Are poly formats recyclable?', a: 'Through store drop-off in many areas rather than kerbside collection. Mono-material polyethylene is the more recyclable option; mixed-material films generally are not. If recyclability is a stated claim, tell us and we will keep to a mono-material construction.' },
  ],
  protective: (p) => [
    { q: 'Will a heavier board reduce my damage rate?', a: 'Only if boxes are arriving crushed. If they arrive intact with damaged contents, the product is moving inside and a heavier outer changes nothing. A fitted insert solves that case, usually at lower cost.' },
    { q: 'Do you supply inserts with the outer?', a: `Yes, and for ${p.name.toLowerCase()} we prefer to specify both together. A cavity that holds the contents still often lets us drop a grade on the outer, so the pair can cost less than an over-specified box alone.` },
  ],
  foodContact: (p) => [
    { q: 'Are these food-contact compliant?', a: `We specify food-contact compliant boards and inks where the pack touches food directly. Tell us whether contact is direct or through a liner for ${p.name.toLowerCase()}, because it changes which stocks are available to you.` },
    { q: 'How do you stop grease showing through?', a: 'A grease-resistant coating or a greaseproof liner. Untreated board will always strike through eventually with hot, oily food — that is a property of the material rather than a quality fault, and it is inexpensive to design out.' },
  ],
  cold: () => [
    { q: 'Will these survive cold storage?', a: 'With the right adhesive, yes. Standard carton glue becomes brittle in sustained cold and a seam that is sound at room temperature can crack when handled cold. A cold-tolerant adhesive costs very little and prevents it.' },
  ],
  display: () => [
    { q: 'How does a shelf-ready case open?', a: 'Along a designed perforation, which is the hardest part of the structure to get right. Too weak and it fails in transit; too strong and store staff tear it badly. It is decided at dieline stage, and we recommend a sample before committing.' },
    { q: 'Do I need to match a retailer specification?', a: 'If you are supplying a grocery chain, almost certainly. Case dimensions, pallet pattern and barcode placement are usually published and non-negotiable. Send the requirement and we will design inward from it.' },
  ],
  shipping: (p) => [
    { q: 'How do I reduce dimensional weight?', a: `Measure the product rather than the box currently in use. Most operations we quote are running at least one size too large with void fill compensating, and dropping a band saves on every parcel ${p.name.toLowerCase()} carry.` },
    { q: 'Should the outside be printed?', a: 'That is a brand decision, not a cost or protection one. For direct-to-consumer parcels where the customer opens it, print can be worth it. For business deliveries it usually is not.' },
  ],
  cosmetic: (p) => [
    { q: 'How do I measure a bottle for its carton?', a: `At the widest point, which is frequently not the base, and including the cap or pump. Send us the actual container if you can — a measurement from a drawing misses flex and applied label thickness, and both decide whether ${p.name.toLowerCase()} close cleanly.` },
    { q: 'How much panel space do ingredient lists need?', a: 'More than most brands allow for. Ingredient copy and any warnings compete directly with the design, and adding them late usually forces a reflow. We block the area on the dieline before you commit design time.' },
  ],
  regulated: () => [
    { q: 'Can you supply versioned proofs with sign-off records?', a: 'Yes. Where your quality system requires it we issue dated proofs against a revision number and retain the approval record. Ask at quoting so the documentation is built alongside the job rather than reconstructed later.' },
    { q: 'Can you produce child-resistant closures?', a: 'We can produce child-resistant structures with certified closures. Compliance is verified against the regulations in force when your order runs, so send the specific requirement your licence operates under rather than a general description.' },
  ],
  tamper: () => [
    { q: 'What tamper-evident options are available?', a: 'Tear strips, tuck locks with a frangible tab, and applied security seals each give a different level of evidence. Tell us what standard you are working to, since "tamper-evident" is used loosely and the structures differ considerably.' },
  ],
  small: (p) => [
    { q: 'Is there a minimum size you can produce?', a: `Small formats are limited by what the die and the gluing line can hold rather than by any policy. ${p.name} sit comfortably within that, but tolerances tighten as size drops, so we recommend a structural sample before print.` },
  ],
  large: () => [
    { q: 'Do large formats need a different board?', a: 'Usually, yes. Panel span is what makes a large pack feel flimsy, not the contents, so the grade often steps up purely to keep the faces rigid. Above a certain size we move from folding carton stock to corrugated for the same reason.' },
  ],
  apparel: () => [
    { q: 'Could soft goods ship in something flatter?', a: 'Very often. Apparel moves in cartons out of habit rather than need, and a flat mailer removes both volume and weight. For non-fragile soft goods the protection is usually sufficient and the freight saving is immediate.' },
  ],
  electronics: () => [
    { q: 'Can you supply packaging for sensitive components?', a: 'We can specify boards and liners appropriate for electronics handling and cut inserts to component geometry. Tell us the exact requirement your process operates under, since it varies considerably between component types.' },
  ],
  barrier: () => [
    { q: 'What barrier do I actually need?', a: 'It depends on shelf life and what degrades the product — oxygen, moisture or light. A higher barrier costs more and is usually harder to recycle, so the right answer is the lowest barrier that holds your product for as long as it needs to.' },
    { q: 'Can I have a full barrier and full recyclability?', a: 'Not currently, and we would rather say so. Multi-layer laminates block best precisely because they combine materials, which is what makes them hard to recycle. Mono-material films are recyclable through store drop-off but give a shorter shelf life.' },
  ],
  gifting: () => [
    { q: 'Will this work as a shipper as well as a gift box?', a: 'Rarely without compromise. A box built to present is not built to survive a carrier network alone. A presentation box inside a plain protective outer usually costs less overall than one box trying to do both.' },
  ],
  stackable: () => [
    { q: 'How high can these be stacked?', a: 'That depends on board grade, contents weight and how long the stack stands. Send us the stack height and the weight above the bottom unit and we will specify to it rather than guessing at a grade.' },
  ],
  subscription: () => [
    { q: 'Can you produce a small press or seeding run?', a: 'Yes. Minimum is 100 units on any format, which suits a seeding wave well. Give us the send date rather than asking for a lead time and we will work backwards to the latest artwork approval that still lands.' },
  ],
  branded: () => [
    { q: 'How exactly can you match our brand colour?', a: 'On offset and flexo we hold the ink formulation, which gives a tight match run to run. Digital has a wider tolerance. If exact consistency across repeat runs matters more than short-run economics, we will quote the litho route.' },
  ],
}

const FORM_FAQS: Record<string, (p: Product) => Faq[]> = {
  'folding-carton': (p) => [
    { q: `Do ${p.name.toLowerCase()} arrive flat or assembled?`, a: 'Flat and glued along one seam, so they pop open on your packing line. That keeps freight cost down considerably compared with a pre-assembled structure.' },
  ],
  'rigid-box': () => [
    { q: 'Do rigid boxes ship assembled?', a: 'Yes, which is part of why their freight cost is higher than a folding carton. Collapsible rigid constructions exist and ship flatter, at some cost to the feel of the finished box.' },
  ],
  pouch: () => [
    { q: 'Can you add a resealable zip or a valve?', a: 'Both are standard options. A zip suits anything the customer opens repeatedly; a one-way valve is for products that off-gas, such as freshly roasted coffee, where a sealed bag would otherwise inflate.' },
  ],
  'paper-cup': () => [
    { q: 'Are these suitable for hot and cold drinks?', a: 'The wall construction and the lining differ between the two. A cup specified for hot service will sweat with a cold drink, and a cold cup will not insulate. Tell us which service you need, or both if you want a single stock item.' },
  ],
  label: () => [
    { q: 'What surface will the labels be applied to?', a: 'It matters more than most buyers expect. Adhesive keys differently to glass, coated card, matte plastic and cold or damp surfaces. Tell us the substrate and the application temperature and we will match the adhesive.' },
  ],
  sticker: () => [
    { q: 'Will these survive outdoors?', a: 'Only with a suitable face stock and laminate. Standard paper stickers fade and lift within weeks outside. Vinyl with a UV laminate lasts considerably longer, and we will specify it if you tell us where they are going.' },
  ],
  tray: () => [
    { q: 'Will these hold up under a hot, wet load?', a: 'With the right board and coating. Moisture from hot food softens an under-specified tray faster than grease does, so we usually recommend both a heavier caliper and a grease-resistant coating for hot service.' },
  ],
  display: () => [
    { q: 'Can the display hold its shape when full?', a: 'That is a structural calculation rather than a hope. Send the weight of a full facing and we will grade the board and add reinforcement where the load actually sits, which is usually the base and the front lip.' },
  ],
  insert: () => [
    { q: 'Which insert material should I choose?', a: 'Board is cheapest and suits light or regular shapes. Foam holds irregular and fragile items better and absorbs shock. Moulded pulp sits between them and is the more recyclable of the cushioning options. Send the item and we will recommend.' },
  ],
}

/** Questions every page needs, but with answers built from this product. */
function universal(p: Product): Faq[] {
  const q = fmtQty(minQty(p))
  return [
    { q: `What is the minimum order for ${p.name.toLowerCase()}?`, a: `A flat 100 units on any format. Most ${p.form.noun} in this range are quoted from ${q} units upward because unit cost falls sharply above that, but the minimum exists so you can validate a structure first.` },
    { q: `How long do ${p.name.toLowerCase()} take to produce?`, a: `3 to 5 business days after artwork approval, plus freight. ${p.form.singular.charAt(0).toUpperCase() + p.form.singular.slice(1)} runs with applied finishes can take longer because each finish is a separate pass, and we confirm a firm date in writing with the quote.` },
    { q: `What do ${p.name.toLowerCase()} cost?`, a: `Prices start from $0.30 per piece for large-volume orders. For this format the biggest levers are quantity, print route, board grade and how many finishing passes are involved. We quote each element separately so you can see where the money is going.` },
    { q: 'Can I see a sample first?', a: `Yes. We can send a plain unprinted sample so you can check the fit and structure, or a printed prototype for colour and finish. Sample costs are normally credited against the production order.` },
    { q: 'Can you match packaging we already use?', a: `Send the current specification or a physical sample and we will quote to match it rather than proposing an alternative you would then have to re-approve internally.` },
    { q: 'Do you deliver nationwide?', a: 'Yes, to all 50 states. We hold no premises and no warehousing anywhere, so everything is manufactured to order and shipped directly to your address. Freight is quoted separately and depends on consignment size.' },
    { q: `Can I order ${p.name.toLowerCase()} in a custom size?`, a: `Every run is cut to your dimensions — there are no stock sizes here. Send the product measurements rather than a box size and we will build the ${p.form.singular} around them, then send a dieline template you can design onto.` },
    { q: 'What happens after I approve the quote?', a: `We issue a dieline template sized to your product, prepress checks your artwork against it, and a proof comes back for sign-off. Nothing runs until you approve that proof, and ${p.form.noun} then take 3 to 5 business days.` },
    { q: 'Can you hold the specification for repeat orders?', a: `Yes. Once a first run is approved we hold the board, structure, dimensions, print method and finishes against your account, so a reorder references the same specification exactly rather than being re-derived.` },
    { q: 'Do you offer recycled or recyclable options?', a: `Recycled grades are available across most of the substrates we run for ${p.form.noun}. Recycled content, kerbside recyclability and certified compostability are three different claims though, so tell us which one you intend to print.` },
    { q: 'What file format should I send artwork in?', a: 'A print-ready PDF or a vector file, with fonts outlined and any raster images at 300 dpi at final size. We supply the dieline to design onto, and prepress checks bleed, safe area and crease clearance before issuing a proof.' },
  ]
}

export function productFaqsFor(p: Product, traits: Set<Trait>): Faq[] {
  const out: Faq[] = []
  const seen = new Set<string>()
  const push = (f: Faq) => {
    const k = f.q.toLowerCase()
    if (!seen.has(k)) { seen.add(k); out.push(f) }
  }

  // The product's own question leads, where one has been written for it.
  const own = factsFor(p.slug)
  if (own?.ask) push(own.ask)

  // Then trait questions, ordered deterministically per product
  // so two products sharing traits still present them in a different sequence.
  const traitList = [...traits].sort(
    (a, b) => hash(p.slug + a) - hash(p.slug + b)
  )
  for (const t of traitList) for (const f of TRAIT_FAQS[t]?.(p) ?? []) push(f)

  for (const f of FORM_FAQS[p.form.id]?.(p) ?? []) push(f)

  // Universal questions fill to at least ten, rotated so the tail differs.
  const uni = universal(p)
  const start = Math.floor(hash(p.slug + 'u') * uni.length)
  for (let i = 0; i < uni.length; i++) push(uni[(start + i) % uni.length])

  return out.slice(0, 12)
}
