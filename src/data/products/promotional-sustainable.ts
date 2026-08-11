import type { ProductFactsMap } from './types'

/**
 * Promotional, Sustainable, Container and Band formats.
 *
 * The promotional range is bought against a moment rather than a shelf life,
 * so short-run economics and how the pack opens matter more than durability.
 * The sustainable range is where the most expensive mistakes get made, because
 * an environmental claim is a claim about the whole pack: one laminate or one
 * metal component can make a carefully specified carton unrecyclable, and the
 * buyer usually finds out after the run. Containers and bands are here because
 * both are formats where a single dimension — grease resistance in one case,
 * overlap in the other — decides whether the job works at all.
 */
export const promoSustainableFacts: ProductFactsMap = {
  /* ---------- Promotional Packaging ---------- */

  'event-tickets': {
    holds: 'nothing — this is a printed security item, where the job is controlled numbering rather than containment',
    sizeNote: 'Commonly 8 × 3 in with a perforated stub around a third of the length, printed in books or on a continuous run.',
    failure: 'Two tickets carry the same number, so the door has no way to tell a duplicate from an original and the count stops meaning anything.',
    buyerNote: 'Numbering is treated as a print detail to confirm later, when it is the whole point of the item and has to be specified before the run.',
    context: 'venue doors and gate control, where staff have seconds to decide whether a ticket is genuine',
    detail: 'Sequential numbering has to be specified with its start value, its range and whether the stub repeats the number. A stub without the matching number is no use for reconciliation.',
    spec: '300 gsm board or a security stock. Perforation strength matters — it must tear cleanly by hand but survive a pocket.',
    press: 'If forgery is a genuine concern, a foil block or a UV-visible mark is far harder to reproduce than any printed design.',
    pairs: ['promotional-boxes', 'presentation-boxes'],
    ask: {
      q: 'Can you print sequential numbering on tickets?',
      a: 'Yes, including matching numbers on the stub and the body so they reconcile at the door. Tell us the start number, the quantity and whether you want the sequence broken across books, and we will set it before the run rather than after.',
    },
  },
  'influencer-boxes': {
    holds: 'a seeded product plus tissue, a card and whatever else is meant to come out on camera in sequence',
    sizeNote: 'Generous rather than tight, commonly 10 × 8 × 4 in, because the reveal needs room and a tightly packed box films badly.',
    failure: 'The recipient has to fight the tape open on camera, and the first ten seconds of the video — the part that gets watched — is someone struggling with a box.',
    buyerNote: 'It is specified like a shipping carton, when the entire commercial purpose is how it looks and behaves while being opened on video.',
    context: 'seeding campaigns filmed by the recipient, where the unboxing is the deliverable and there is no second take',
    detail: 'A magnetic or ribbon-pull closure that opens in one movement, with no tape anywhere on the visible pack. Ship it inside a plain outer if it needs transit protection.',
    spec: 'Rigid board with a magnetic closure. This is one of the few categories where the presentation genuinely justifies the cost.',
    press: 'The inside of the lid is on screen for longer than the outside. Print it.',
    pairs: ['pr-boxes', 'presentation-boxes', 'promotional-boxes'],
    ask: {
      q: 'Should the mailing label go on the presentation box itself?',
      a: 'No. Ship it inside a plain outer carton and keep the presentation box clean. A courier label, tape and handling scuffs on the box that is about to be filmed undoes the reason for buying it.',
    },
  },
  'pr-boxes': {
    holds: 'a product together with printed press material — a release, a fact sheet, sometimes a USB or a print file',
    sizeNote: 'Sized around the largest flat document rather than the product, so US Letter at 8.5 × 11 in usually sets the footprint.',
    failure: 'The press release is folded to fit, which is exactly the impression a press kit is meant to avoid.',
    buyerNote: 'The box is designed around the product and the documents are added afterwards, at which point the only way they fit is folded.',
    context: 'editorial and trade press mailings, where the recipient is deciding in about thirty seconds whether the story is worth covering',
    detail: 'A document slot in the lid, separate from the product well. It keeps the paperwork flat and it means the story is the first thing seen rather than something found underneath.',
    spec: 'Rigid board sized to take unfolded Letter, with a die-cut fitment for the product.',
    press: 'Keep the outside restrained. A press kit that shouts reads as advertising, and advertising is the thing an editor is filtering out.',
    pairs: ['influencer-boxes', 'presentation-boxes', 'promotional-boxes'],
    ask: {
      q: 'How big does a press box need to be?',
      a: 'Large enough to take a Letter sheet unfolded — 8.5 × 11 in — which usually means the paperwork sets the footprint rather than the product. A folded release in a premium box is the most common thing we are asked to fix in this category.',
    },
  },
  'presentation-boxes': {
    holds: 'a sample set, an award, or a high-value single item that is handed over rather than shipped to a shelf',
    sizeNote: 'Cut to the contents with deliberate clearance — a presentation piece needs visible space around it, unlike a retail carton where clearance reads as waste.',
    failure: 'The base bows under a heavy item because a rigid box looks strong and a wrapped chipboard base is not, on its own, structural.',
    buyerNote: 'Rigid construction is assumed to mean strong construction. Rigid is about finish; load still has to be carried by the fitment and the base board.',
    context: 'client handovers, awards and sales sample sets, where the box is opened in front of the person it was made for',
    detail: 'For anything heavy, the fitment has to transfer load into the walls rather than let it sit on the base. That is a structural decision, not a cosmetic one.',
    spec: 'Rigid board with a wrapped litho sheet and a foam or board fitment sized to the contents.',
    press: 'Blind emboss or foil on a matt wrap. Under the lighting these are usually opened in, texture reads and gloss glares.',
    pairs: ['pr-boxes', 'influencer-boxes', 'home-fragrance-boxes'],
    ask: {
      q: 'How heavy can a rigid presentation box go?',
      a: 'Rigid handles real weight, but the fitment has to carry it into the walls rather than resting it on the base — that is what stops the bottom bowing. Tell us the weight at quoting and we will specify the base board and the fitment together.',
    },
  },
  'promotional-boxes': {
    holds: 'a giveaway or campaign item, usually in a run far shorter than a retail order',
    sizeNote: 'Whatever the item needs, but the run length is the live variable — these are commonly ordered in tens and hundreds rather than thousands.',
    failure: 'The unit price comes back far higher than expected, because a litho setup was quoted against a run too short to absorb it.',
    buyerNote: 'A retail specification is brought to a 200-unit campaign, and the tooling and plate costs land entirely on those 200 units.',
    context: 'events, campaigns and internal launches, where the deadline is fixed and the quantity is small',
    detail: 'Below roughly 500 units, digital print changes the economics completely — no plates, no make-ready, and artwork can change between runs at no cost.',
    spec: 'Digitally printed folding carton for short runs. We will say when the quantity has grown enough for litho to be the cheaper route.',
    press: 'Short runs make variable data cheap. Names, regions or event dates per unit cost almost nothing on a digital press.',
    pairs: ['influencer-boxes', 'event-tickets', 'presentation-boxes'],
    ask: {
      q: 'What is the minimum quantity for a promotional run?',
      a: 'Our MOQ is 100 units on every format. Below about 500 we would normally quote digital rather than litho — no plate cost, and the price per unit at those quantities is usually a fraction of the litho equivalent.',
    },
  },

  /* ---------- Sustainable Packaging ---------- */

  'eco-friendly-cosmetic-packaging': {
    holds: 'a cosmetic container inside a carton that has to survive a recyclability claim as well as a shelf',
    sizeNote: 'Same dimensional problem as any cosmetic carton — the difference is entirely in the material and finish decisions, not the size.',
    failure: 'The carton is rejected at kerbside because a plastic laminate was applied for the soft-touch finish, and a laminated carton is not accepted as paper in most US municipal streams.',
    buyerNote: 'Recycled content is specified carefully and then a plastic lamination is added for the finish, which undoes the claim entirely.',
    context: 'beauty brands making a public environmental commitment, where the claim is checked by customers more closely than in most categories',
    detail: 'Lamination is the decision that decides recyclability. A soft-touch varnish or an uncoated stock gets a similar hand feel and stays in the paper stream.',
    spec: 'Uncoated or recycled board with an aqueous or soft-touch varnish rather than a film laminate.',
    press: 'Uncoated stock absorbs ink, so colours go flatter and darker than the proof. Approve a printed sample on the actual board, not a digital proof.',
    pairs: ['eco-friendly-soap-packaging-boxes', 'kraft-packaging', 'minimal-packaging'],
    ask: {
      q: 'Can I have a soft-touch finish and still call the carton recyclable?',
      a: 'Not with a plastic laminate — that takes it out of the paper stream in most US municipalities. A soft-touch aqueous varnish gets you close on feel and keeps the carton kerbside recyclable. We will send both so you can judge the difference by hand.',
    },
  },
  'eco-friendly-paper-tube': {
    holds: 'a candle, a supplement bottle or a rolled textile, in a cylinder rather than a folded carton',
    sizeNote: 'Specified by internal diameter and height, commonly 2.5 to 4 in across, since the wall thickness reduces the usable space noticeably.',
    failure: 'The tube cannot be recycled as paper because it has metal ends crimped on, and there is no way for a consumer to separate them.',
    buyerNote: 'The body is chosen as paperboard for the environmental claim while the standard metal base is left in the specification unchallenged.',
    context: 'candle and supplement brands moving away from rigid boxes, where the tube itself is the sustainability statement',
    detail: 'An all-paper base and lid keeps the whole item in one material stream. Metal ends are the standard default and they are what quietly breaks the claim.',
    spec: 'Kraft or white-lined spiral-wound board with paperboard ends specified explicitly.',
    press: 'Tubes are label-wrapped or direct-printed. A wrap seam always shows somewhere, so place it deliberately rather than letting it fall through the logo.',
    pairs: ['eco-friendly-tube-packaging', 'kraft-packaging', 'home-fragrance-boxes'],
    ask: {
      q: 'Are paper tubes actually recyclable?',
      a: 'Only if the ends are paper too. A spiral-wound board tube with metal ends crimped on cannot be separated by a consumer and generally is not accepted. Specify paperboard ends explicitly — the metal version is the default in most catalogues.',
    },
  },
  'eco-friendly-soap-packaging-boxes': {
    holds: 'a bar of soap, one of the few products in this range that needs no moisture or oxygen barrier at all',
    sizeNote: 'Closely fitted to the bar, commonly 3.5 × 2.5 × 1.25 in, with a little clearance for a hand-cut bar that varies between batches.',
    failure: 'The essential oils in the bar migrate into uncoated board and leave a translucent stain across the front panel within weeks of packing.',
    buyerNote: 'Uncoated kraft is chosen for the environmental look, and it is the stock most vulnerable to the oils in a handmade bar.',
    context: 'handmade and natural soap brands, where the packaging is a large part of how the product is judged',
    detail: 'Wrap the bar in greaseproof paper inside the carton, or specify a board with a barrier on the inner face only. Either keeps the outer stock fully recyclable.',
    spec: 'Recycled kraft board with an uncoated outer, plus an inner wrap doing the barrier work.',
    press: 'Soy or vegetable-based inks on uncoated kraft, which suits the category and prints honestly on a brown stock.',
    pairs: ['eco-friendly-cosmetic-packaging', 'kraft-packaging', 'minimal-packaging'],
    ask: {
      q: 'Why is there an oily mark on my soap boxes?',
      a: 'Essential oils migrating out of the bar into uncoated board — it usually appears two to six weeks after packing. An inner greaseproof wrap solves it and keeps the carton itself recyclable. A barrier coating on the outside would fix the stain and cost you the claim.',
    },
  },
  'eco-friendly-tube-packaging': {
    holds: 'a squeeze tube or a stick product inside a secondary carton or sleeve',
    sizeNote: 'Set by the tube laid flat with its cap on, so typically 1.75 × 1.25 × 6 in, and the shoulder is wider than the body.',
    failure: 'The pack is presented as sustainable when the tube itself is a multi-layer plastic laminate, which is the component that actually cannot be recycled.',
    buyerNote: 'Work goes into the carton while the tube — the part with the real environmental problem — is left exactly as it was.',
    context: 'skincare and personal care brands under pressure to justify a sustainability position on the whole pack',
    detail: 'Be specific about which component the claim covers. "Recyclable carton" is defensible and true; "recyclable packaging" around a multi-layer tube is not.',
    spec: 'Recycled board carton, with a mono-material tube specified where the format allows one.',
    press: 'Keep the environmental copy narrow and factual. A precise claim about the carton survives scrutiny that a broad one does not.',
    pairs: ['eco-friendly-paper-tube', 'eco-friendly-cosmetic-packaging', 'minimal-packaging'],
    ask: {
      q: 'Can I call the whole pack recyclable?',
      a: 'Only if every component is. Most squeeze tubes are multi-layer laminates and are not widely recyclable, so a claim covering the whole pack would be wrong even with a perfect carton. Claim the carton specifically — it is accurate and it holds up.',
    },
  },
  'kraft-packaging': {
    holds: 'anything where the unbleached board itself is the intended look rather than a cost decision',
    sizeNote: 'No fixed range — kraft is a material choice applied across formats, so dimensions follow whichever format you are specifying.',
    failure: 'Printed colours come out muddy and dark, because they are sitting on a brown substrate rather than on white, and nobody saw a sample first.',
    buyerNote: 'Artwork is approved on a white screen and a white proof, then printed on brown board where every colour shifts.',
    context: 'brands using an unbleached look deliberately, across food, cosmetics, e-commerce and gifting',
    detail: 'Kraft subtracts from every colour laid on it. Either design for that — one or two colours, high contrast — or specify a white underprint, which costs an extra pass.',
    spec: 'Recycled kraft board, with a white-lined variant available where colour fidelity matters more than the exposed brown look.',
    press: 'Fine detail and pale tints disappear on kraft. Solid marks and heavy line weights are what hold up.',
    pairs: ['eco-friendly-soap-packaging-boxes', 'minimal-packaging', 'eco-friendly-cosmetic-packaging'],
    ask: {
      q: 'Why do my colours look wrong on kraft?',
      a: 'The brown substrate shows through the ink and pulls every colour down. A white underprint restores them at the cost of an extra press pass, or the design can be built for kraft with one or two high-contrast colours. Always approve a printed sample on the real board.',
    },
  },
  'minimal-packaging': {
    holds: 'a product with the secondary packaging stripped back to what the job actually requires',
    sizeNote: 'Right-sized to the product with the smallest workable clearance, which is where most of the material saving comes from.',
    failure: 'Material is cut so far that damage rates rise, and replacing damaged orders costs more carbon and more money than the packaging ever saved.',
    buyerNote: 'Minimal is read as thinner board, when almost all of the real saving comes from right-sizing the box rather than lightening it.',
    context: 'brands reducing packaging weight and shipping volume, usually with a published target to meet',
    detail: 'Right-sizing beats lightweighting. A box cut to the product ships more units per pallet and cuts dimensional weight, and it does not increase damage the way thinner board does.',
    spec: 'The lightest board that holds the measured damage rate, established with a sample run rather than assumed.',
    press: 'One or two colours on uncoated stock. Restraint reads as intent here, where a full-bleed print undercuts the message.',
    pairs: ['kraft-packaging', 'eco-friendly-cosmetic-packaging', 'eco-friendly-tube-packaging'],
    ask: {
      q: 'How far can I reduce the board before it becomes a problem?',
      a: 'Further on size than on thickness. Right-sizing the box cuts material, dimensional weight and pallet space without raising damage, whereas thinning the board raises damage quite quickly. We would suggest a sample run at the lighter spec before committing a full order.',
    },
  },

  /* ---------- Custom Containers ---------- */

  'cardboard-cup-holder': {
    holds: 'two or four filled cups, carried one-handed by someone who is also carrying something else',
    sizeNote: 'Standard two-cup and four-cup footprints, with the cup aperture cut to the rim diameter rather than to the base.',
    failure: 'The handle aperture tears through while the tray is being carried, because condensation and heat have softened the board around it.',
    buyerNote: 'It is specified as dry board, when in service it is always damp — from condensation on cold cups or steam from hot ones.',
    context: 'coffee shops and drive-through service, where a tray is loaded quickly and carried immediately',
    detail: 'The handle area needs either a moisture-resistant board or a reinforced aperture. It is the single point where these fail and it fails under load.',
    spec: 'Moulded pulp or E-flute corrugated with a moisture-resistant treatment on the handle area.',
    press: 'One or two colours flexo. This is a genuinely disposable item and print cost per unit shows up quickly at volume.',
    pairs: ['cold-cup-boxes', 'french-fries-containers'],
    ask: {
      q: 'Why do cup carriers tear at the handle?',
      a: 'Moisture. Condensation from cold drinks or steam from hot ones softens the board exactly where the load is concentrated. A moisture-resistant board or a reinforced handle aperture fixes it — heavier dry board on its own does not.',
    },
  },
  'cold-cup-boxes': {
    holds: 'a stack of nested cold cups, either for retail sale or for delivery to a service counter',
    sizeNote: 'Set by the nested stack height, which is far less than the cups added together — 50 nested 16 oz cups run around 20 in, not 50 cup heights.',
    failure: 'The stack telescopes out of the carton end in transit and the rims deform, which means the cups no longer seat properly in a lid.',
    buyerNote: 'The carton is sized from a rough estimate of the stack rather than from a measured nested stack, so the count per carton is wrong.',
    context: 'foodservice supply and cash-and-carry, where cartons are stacked on racking and opened progressively',
    detail: 'Nest the actual cups and measure that stack. Nesting depth varies with the taper and it is not something that can be calculated from the cup height.',
    spec: 'C-flute corrugated with an end-opening dieline, so cups can be drawn from one end without collapsing the carton.',
    press: 'Print the count, size and lid compatibility on the end panel — that is the face that shows on a shelf of stacked cartons.',
    pairs: ['cardboard-cup-holder', 'french-fries-containers'],
    ask: {
      q: 'How do I work out how many cups fit in a carton?',
      a: 'Nest a stack and measure it — the taper means nesting depth is only a fraction of the cup height, and it differs between cup designs. Send us a nested stack of the actual cups and we will size the carton and confirm the count per case.',
    },
  },
  'french-fries-containers': {
    holds: 'hot fried food that is both greasy and steaming, which are two separate attacks on board',
    sizeNote: 'Standard scoop and carton sizes from small through large, sized by fill volume rather than by footprint.',
    failure: 'Grease strikes through within minutes and the customer is holding a translucent, floppy container.',
    buyerNote: 'A grease-resistant coating is assumed to be standard on food board. It has to be specified, and since PFAS restrictions came in the available chemistry has changed.',
    context: 'quick service and takeaway, where the container is filled hot and eaten from directly within minutes',
    detail: 'Grease resistance and moisture resistance are different treatments. Fried food needs both, and several US states now restrict PFAS in food packaging, so the compliant grades differ from what was standard a few years ago.',
    spec: 'PFAS-free grease-resistant board. Confirm the states you sell into, since the restrictions are state-level and not uniform.',
    press: 'Direct food contact restricts the inks and coatings that can be used. Confirm food-contact compliance before artwork rather than after.',
    pairs: ['cold-cup-boxes', 'cardboard-cup-holder'],
    ask: {
      q: 'Is your food packaging PFAS-free?',
      a: 'We specify PFAS-free grease-resistant grades as standard, and several states now require it. Tell us where you sell so we can specify against the strictest of those states rather than the average.',
    },
  },

  /* ---------- Custom Bands ---------- */

  'belly-band-packaging': {
    holds: 'nothing on its own — it wraps an existing product or box to add branding without replacing the pack',
    sizeNote: 'Specified as circumference plus overlap, not as a flat width and length. The overlap is 1 to 1.5 in for a glued band.',
    failure: 'The band is cut to the exact circumference with no overlap, so there is nothing to glue and the run is unusable.',
    buyerNote: 'Flat dimensions are supplied as though it were a label, when the measurement that matters is the path all the way around the product plus the joint.',
    context: 'retail and subscription brands adding seasonal or campaign branding over a standard base pack',
    detail: 'Measure the full path around the product, including corner radius, then add the overlap. On a square box the corners take more length than the flat faces suggest.',
    spec: '150 to 250 gsm. Too light and it tears at the corners; too heavy and it will not fold cleanly around them.',
    press: 'A band is the cheapest way to run a seasonal variant — the base pack stays as it is and only the band changes.',
    pairs: ['minimal-packaging', 'promotional-boxes', 'presentation-boxes'],
    ask: {
      q: 'What measurements do you need for a belly band?',
      a: 'The full circumference around the product as the band will actually sit, plus 1 to 1.5 in of overlap for the glue joint. Sending flat width and length is the usual error, and it produces a band that meets exactly and cannot be joined.',
    },
  },
  'resistance-band-packaging': {
    holds: 'latex or fabric exercise bands, sold in sets of graded strengths that need to stay identifiable',
    sizeNote: 'Sized to the folded band set, commonly 8 × 6 × 2 in for a five-band set, with the folded bulk larger than buyers estimate.',
    failure: 'The bands are packed loose in one compartment, the customer cannot tell the strengths apart, and the set gets returned as incomplete or wrong.',
    buyerNote: 'The pack is designed around fitting the bands in, when the real job is keeping five near-identical items distinguishable.',
    context: 'fitness retail and online sales, where a set is bought on the strength range and used over months',
    detail: 'Each strength needs its own labelled position, or a printed card that maps colour to resistance. Latex also degrades under UV and ozone, so an opaque carton outlasts a clear window.',
    spec: 'Folding carton or a printed box with a partition per band, in preference to a clear-fronted pack.',
    press: 'Print the resistance range prominently — it is the specification customers compare across brands and it decides the sale.',
    pairs: ['belly-band-packaging', 'promotional-boxes'],
    ask: {
      q: 'Should resistance bands be sold in a window pack?',
      a: 'We would usually advise against it. Latex degrades under UV, so a clear window shortens shelf life on the exact product it is showing. An opaque carton with the colour-to-resistance mapping printed clearly does the selling job without that cost.',
    },
  },
}
