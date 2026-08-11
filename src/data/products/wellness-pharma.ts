import type { ProductFactsMap } from './types'

/**
 * Custom CBD, Pharmaceutical, Wellness and Home Fragrance Packaging.
 *
 * What ties these four ranges together is that the carton is rarely the barrier.
 * Nearly everything here is secondary packaging around a bottle, blister, pouch
 * or foil that does the actual protecting — and the mistake that recurs across
 * all four is specifying the carton as though it were doing that job. The other
 * shared constraint is panel area: every one of these categories carries copy
 * that is required rather than chosen, and it has to be laid out before the
 * brand rather than fitted around it.
 */
export const wellnessPharmaFacts: ProductFactsMap = {
  /* ---------- Custom CBD Packaging ---------- */

  'cbd-gift-boxes': {
    holds: 'an assortment — typically a tincture, a balm and an edible — with quite different heights and weights in one pack',
    sizeNote: 'Set by the tallest item and the widest, so commonly 9 × 7 × 2.5 in, with the footprint decided by how the pieces sit side by side rather than by their combined volume.',
    failure: 'The shorter items sink below the lid and shift, so the set arrives looking disarranged even though nothing is damaged.',
    buyerNote: 'The set is specified as a box big enough to hold everything, when the job is to hold each item at its own height in a fixed position.',
    context: 'seasonal gifting and retail bundles, where the arrangement is the product as much as the contents are',
    detail: 'A compartmented insert cut to each item, with the shallow recesses packed up so every lid sits level. Uneven heights are what make an assortment look thrown together.',
    spec: 'Rigid board with a die-cut board or foam fitment, since a gift set is judged on the moment it opens.',
    press: 'Every component may carry its own required copy. Check what has to appear on the outer as well before the panel is designed.',
    pairs: ['cbd-oil-boxes', 'cbd-gummies-boxes', 'presentation-boxes'],
    ask: {
      q: 'Can you make one gift box that works for several different bundles?',
      a: 'Yes, and it is usually the right call — one outer size with two or three interchangeable fitments. You keep a single print run on the outer, which is the expensive part, and change only the insert per bundle.',
    },
  },
  'cbd-gummies-boxes': {
    holds: 'an edible that softens and sticks to itself, packed inside a resealable pouch rather than loose in the carton',
    sizeNote: 'Sized to the filled pouch lying flat, commonly 4 × 4 × 1.5 in, and the filled pouch is always thicker than the flat one buyers measure.',
    failure: 'The carton is treated as the barrier, so the product picks up moisture and the gummies fuse into a single mass.',
    buyerNote: 'A folding carton is specified on its own for a product that needs a barrier film inside it — board is not a moisture barrier at any weight.',
    context: 'regulated retail and direct-to-consumer sales, where child-resistant closure requirements vary from state to state',
    detail: 'The carton is secondary. The pouch or jar inside carries the barrier and, where required, the child-resistant closure. Specify both together or the pack does not work.',
    spec: '18pt SBS carton around a foil-laminate pouch. The board choice is about print and stacking, not protection.',
    press: 'Dose per piece, total contents, batch and a COA route have to fit alongside the brand, and several states add their own required marks.',
    pairs: ['cbd-oil-boxes', 'cbd-gift-boxes', 'vitamin-boxes'],
    ask: {
      q: 'Does the carton need to be child-resistant?',
      a: 'Usually the closure does rather than the carton, and the requirement depends on the state you sell into. In most cases the CR function sits with the pouch or jar and the carton is secondary. Tell us which states you ship to and we will specify against the strictest of them.',
    },
  },
  'cbd-oil-boxes': {
    holds: 'a glass tincture bottle with a dropper cap, where the dropper adds height that the bottle spec does not mention',
    sizeNote: 'Tall and narrow, commonly 1.5 × 1.5 × 4.5 in for a 30 ml bottle — measured with the dropper seated, which is typically 0.5 in more than the bottle alone.',
    failure: 'The bottle moves inside the carton, the dropper cap works loose against the lid, and oil leaks into the board.',
    buyerNote: 'The bottle height is taken from the supplier sheet, which almost always quotes the bottle without the dropper assembly fitted.',
    context: 'regulated retail and online sales, where the carton has to carry compliance copy and survive parcel shipping unaided',
    detail: 'A collar or fitment holding the bottle at the shoulder. Held at the base only, a tall bottle pivots and puts all the leverage on the cap.',
    spec: '18pt SBS with a coated inner face, so a minor leak does not wick straight into the board.',
    press: 'Milligram strength, batch number and a QR route to the certificate of analysis are effectively mandatory, and on a panel this narrow they need laying out first.',
    pairs: ['cbd-gummies-boxes', 'essential-oil-boxes', 'cbd-gift-boxes'],
    ask: {
      q: 'What height should I give you for a tincture bottle?',
      a: 'The bottle with the dropper cap fully seated, not the bottle alone. Supplier sheets quote the bottle, and the dropper assembly usually adds around half an inch. That gap is the most common cause of a carton that will not close flat.',
    },
  },
  'cigarette-boxes': {
    holds: 'a stacked block of rod product behind a hinged lid that is opened and closed dozens of times',
    sizeNote: 'Closely fitted to the block, around 3.4 × 2.2 × 0.9 in for a standard count, with the inner frame taking part of that internal space.',
    failure: 'The hinge crease tears after a week of use, because the score was cut for a lid that opens once rather than repeatedly.',
    buyerNote: 'It is specified like any other tuck carton, when the hinge on this format is a wear component and needs a scored crease chosen for repeated flexing.',
    context: 'pocket carry and repeated daily opening, which is a harder mechanical life than almost any other carton faces',
    detail: 'The inner frame is what holds the lid shut and square. Without it the lid splays within days and the pack stops closing.',
    spec: 'Board around 240 to 280 gsm with a properly specified hinge score. Heavier board is not the answer — the crease quality is.',
    press: 'Health warning copy takes a mandated share of the panel area, and the percentage differs by market. Confirm the market before layout begins.',
    pairs: ['cbd-gummies-boxes'],
    ask: {
      q: 'Why does the lid tear at the hinge?',
      a: 'The crease is wrong for the duty. A hinged lid opened many times a day needs a score cut for repeated flexing, not the standard fold crease used on a carton opened once. Adding board thickness makes it worse, not better.',
    },
  },

  /* ---------- Pharmaceutical Packaging ---------- */

  'medical-device-boxes': {
    holds: 'a device that may be supplied sterile, in which case the pack is part of the device rather than a container for it',
    sizeNote: 'Cut to the device and its tray, with clearance specified so nothing bears on a sterile barrier seal.',
    failure: 'The sterile barrier is compromised in transit and there is no visible external damage to explain it, which means the whole consignment is suspect.',
    buyerNote: 'Sterile and non-sterile devices are briefed the same way. They are entirely different packaging problems and only one of them is a normal carton job.',
    context: 'clinical supply and medical distribution, where a pack that cannot be shown to be intact cannot be used',
    detail: 'If the device is supplied sterile, the barrier system falls under ISO 11607 and needs validated materials and a validated sealing process. Say so at the enquiry — it changes who should make it, not just how.',
    spec: 'For non-sterile devices, folding carton or E flute cut to the tray. For sterile barrier systems we will tell you honestly if the work belongs with a validated medical converter instead.',
    press: 'UDI marking, lot and expiry have to be legible and machine-readable after any lamination. Check the scan on the finished stock, not on a proof.',
    pairs: ['medicine-boxes', 'electronics-boxes'],
    ask: {
      q: 'Can you produce sterile barrier packaging?',
      a: 'For non-sterile devices and outer cartons, yes. A validated sterile barrier system under ISO 11607 needs a converter with a validated sealing process and the documentation to match, and if that is what your device needs we will say so rather than quote around it.',
    },
  },
  'medicine-boxes': {
    holds: 'a blister strip or a bottle together with a folded patient leaflet, and the leaflet is bulkier than anyone expects',
    sizeNote: 'Driven by the leaflet as much as by the medicine — a folded leaflet commonly adds 3 to 5 mm of depth that the blister dimensions do not account for.',
    failure: 'The carton will not close once the leaflet is inserted, so the line jams and the pack has to be re-tooled after the board has been bought.',
    buyerNote: 'The carton is sized from the blister or bottle and the leaflet is added to the brief afterwards, by which time the dieline is already cut.',
    context: 'pharmacy retail and automated packing lines, where a carton that does not run at speed is a production problem before it is a design one',
    detail: 'Send the folded leaflet with the sample. Its folded thickness is a real dimension and it is the one most often missing from the brief.',
    spec: 'Folding boxboard around 300 to 350 gsm, chosen for consistent creasing on an automatic cartoner rather than for feel.',
    press: 'Tamper-evident closure, batch and expiry fields, and Braille where the market requires it. Braille needs clear space around it and cannot overlap print.',
    pairs: ['medical-device-boxes', 'vitamin-boxes'],
    ask: {
      q: 'Why does my carton jam on the packing line?',
      a: 'Most often the leaflet. A folded patient leaflet adds several millimetres of depth, and a carton sized from the blister alone runs tight and jams at speed. Send us the leaflet with the product sample and we will size the dieline around both.',
    },
  },

  /* ---------- Wellness Packaging ---------- */

  'cbd-dissolvable-sleep-tablets-boxes': {
    holds: 'a fast-dissolving tablet or film that begins to degrade on contact with humidity',
    sizeNote: 'Small, around 2.5 × 2 × 0.75 in, sized to a foil blister or sachet rather than to loose tablets.',
    failure: 'The dose softens and tackifies before it reaches the customer, so a product that is chemically fine is unusable.',
    buyerNote: 'A carton is specified for a product whose whole shelf life depends on a foil barrier, and the barrier is left off the brief entirely.',
    context: 'supplement retail and subscription boxes, where stock can sit in a warm warehouse for months before it is opened',
    detail: 'Dissolvables need foil, not board. The carton protects the blister from crushing and carries the copy; it contributes nothing to shelf life.',
    spec: '16pt to 18pt SBS around a foil blister or a foil-laminate sachet.',
    press: 'Dose, timing and a clear route to third-party test results. Sleep products are scrutinised more closely than most supplements.',
    pairs: ['vitamin-boxes', 'cbd-gummies-boxes', 'medicine-boxes'],
    ask: {
      q: 'Will a carton keep dissolvable tablets dry?',
      a: 'No. Board is not a moisture barrier at any weight or coating. Dissolvables need a foil blister or a foil-laminate sachet, and the carton sits around that — protecting it from crushing and carrying the labelling.',
    },
  },
  'vitamin-boxes': {
    holds: 'a tablet bottle or a blister pack, with a Supplement Facts panel that is prescribed rather than designed',
    sizeNote: 'Sized to the bottle including the cap, commonly 2.5 × 2.5 × 5 in, with headspace so the carton does not bow over a domed closure.',
    failure: 'The Supplement Facts panel is squeezed below its legal minimum type size to make room for the brand, which makes the whole run unsaleable.',
    buyerNote: 'The panel is treated as a design element that can be scaled. It has a prescribed format and minimum type sizes, and neither is negotiable.',
    context: 'supplement retail and e-commerce, where shelf competition is intense and the required panel takes a large share of the available area',
    detail: 'Lay the Supplement Facts panel out first at its correct size, then design the remaining area. Doing it the other way round is what forces a reprint.',
    spec: '18pt SBS for a bottle carton; lighter board bows visibly over a domed cap.',
    press: 'Reserve one full panel for the facts block and its associated statements before any brand layout begins.',
    pairs: ['cbd-dissolvable-sleep-tablets-boxes', 'medicine-boxes', 'cbd-gummies-boxes'],
    ask: {
      q: 'How much space does the Supplement Facts panel need?',
      a: 'More than most brands allow for. It has a prescribed layout with minimum type sizes that scale with package surface area, and it usually takes most of one panel. Send us the ingredient list at quoting and we will block it into the dieline at legal size before artwork starts.',
    },
  },

  /* ---------- Custom Home Fragrance Packaging ---------- */

  'essential-oil-boxes': {
    holds: 'a small amber or cobalt glass bottle, usually 10 to 30 ml, with an orifice reducer under the cap',
    sizeNote: 'Small and tall relative to its footprint, around 1.25 × 1.25 × 3.25 in for a 15 ml bottle.',
    failure: 'The bottle rattles inside an oversized carton and chips at the neck, which is the thinnest part of the glass.',
    buyerNote: 'One carton is ordered across a range that runs 10 ml to 30 ml, so most of the range is packed in a box that is too large for it.',
    context: 'aromatherapy retail and multi-bottle sets, where a range of sizes shares one shelf and one brand system',
    detail: 'The coloured glass is doing the light protection, not the carton. What the carton has to do is stop the neck striking anything.',
    spec: '16pt SBS with a fitted collar, or a partitioned carton where several bottles ship together.',
    press: 'Botanical name, dilution guidance and safety copy are expected in this category and take more room than the brand usually anticipates.',
    pairs: ['reed-diffuser-boxes', 'home-fragrance-boxes', 'cbd-oil-boxes'],
    ask: {
      q: 'Can one box cover 10 ml through 30 ml bottles?',
      a: 'Not well — a 10 ml bottle in a 30 ml carton rattles and chips at the neck. The usual answer is two carton sizes sharing one board, one print system and one finish, so the range still reads as a range on shelf.',
    },
  },
  'home-fragrance-boxes': {
    holds: 'candles, diffusers and room sprays across one brand range, with little in common dimensionally',
    sizeNote: 'Specified as a family of two or three footprints sharing one board and one visual system, rather than as a single size.',
    failure: 'The range arrives looking like three separate brands, because each format was specified at a different time against a different budget.',
    buyerNote: 'Each product is quoted on its own as it launches, so the decisions that would have held the range together are never made at all.',
    context: 'home and gift retail, where a customer buys across the range and the collection has to read as one thing on a shelf',
    detail: 'Fix the board, the print method and the finish once across the range, then let only the dimensions change. That is what makes a collection look deliberate.',
    spec: 'One board grade held across every format, even where a lighter one would do on the smaller items.',
    press: 'Choose one finish for the whole collection. A matt candle box next to a gloss diffuser box reads as an error rather than as variety.',
    pairs: ['reed-diffuser-boxes', 'essential-oil-boxes', 'presentation-boxes'],
    ask: {
      q: 'How do I keep a fragrance range looking consistent?',
      a: 'Lock the board grade, print method and finish across the whole range at the first order, then vary only dimensions. Ranges specified product by product drift, because each one gets optimised for its own budget on the day.',
    },
  },
  'reed-diffuser-boxes': {
    holds: 'a filled glass bottle and a bundle of reeds substantially longer than the bottle is tall',
    sizeNote: 'Governed by the reeds, not the bottle — reeds run 10 to 12 in, so the carton is usually 12 in tall for a bottle around 5 in.',
    failure: 'The reeds puncture the carton corner in transit, or the bottle leaks because it travelled on its collar rather than on a sealed transit cap.',
    buyerNote: 'The carton is sized to the bottle and the reeds are treated as an accessory, when they are the component that sets the dimensions.',
    context: 'home fragrance retail and gifting, where the pack ships filled with liquid and cannot leak into a customer\'s order',
    detail: 'Two things decide this format: a reed compartment separate from the bottle, and a sealed transit cap rather than the open collar. Ship on the collar and it will leak.',
    spec: '18pt SBS with an internal partition, or rigid where the set sits at a gift price point.',
    press: 'A tall narrow front panel is what shows on shelf. Design for a vertical strip rather than for the full wrap.',
    pairs: ['home-fragrance-boxes', 'essential-oil-boxes'],
    ask: {
      q: 'Why do diffusers leak in transit?',
      a: 'Nearly always because they shipped with the open collar fitted rather than a sealed transit cap. The customer swaps the cap for the collar when they set it up. Reed length is the other thing to get right — it sets the carton height, not the bottle.',
    },
  },
}
