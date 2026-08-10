/**
 * Product classification.
 *
 * Every product is resolved to a *form factor* (how it is physically made) and
 * a set of real attributes — materials, size bands, printing suitability,
 * finishes, industries. Page copy, specs and FAQs are then derived from those
 * facts, so two products only read alike when they genuinely are alike.
 *
 * Classification is keyword-driven and ordered: the first matching rule wins,
 * so specific rules sit above general ones.
 */

export type FormFactorId =
  | 'folding-carton'
  | 'rigid-box'
  | 'corrugated-box'
  | 'mailer'
  | 'poly-mailer'
  | 'bubble-mailer'
  | 'paper-bag'
  | 'tote-bag'
  | 'pouch'
  | 'paper-cup'
  | 'tray'
  | 'sleeve'
  | 'label'
  | 'sticker'
  | 'insert'
  | 'display'
  | 'tube'
  | 'band'
  | 'wrap'

export interface FormFactor {
  id: FormFactorId
  /** Plural noun used in running copy, e.g. "folding cartons". */
  noun: string
  /** Singular noun, e.g. "folding carton". */
  singular: string
  /** One-sentence description of how the format is constructed. */
  construction: string
  /** Substrates genuinely used for this format. */
  materials: string[]
  /** Realistic size guidance. */
  sizing: string
  /** Printing methods that suit the format. */
  printing: string[]
  /** Finishes that can actually be applied. */
  finishes: string[]
  /** Add-ons that make sense for the format. */
  addons: string[]
  /** Typical minimum order language. */
  moq: string
  /** How the format is normally shipped. */
  shipping: string
  /** Artwork notes specific to the format. */
  artwork: string
  /** Retail contexts where the format is used. */
  applications: string[]
  /** Structural detail worth calling out on a spec table. */
  specNotes: Record<string, string>
}

export const FORM_FACTORS: Record<FormFactorId, FormFactor> = {
  'folding-carton': {
    id: 'folding-carton',
    noun: 'folding cartons',
    singular: 'folding carton',
    construction:
      'die-cut from a single sheet of paperboard, creased on a rotary or flatbed die, then glued along one seam so the carton ships flat and pops open on the packing line',
    materials: ['12pt SBS paperboard', '14pt SBS paperboard', '16pt SBS paperboard', '18pt kraft board', 'recycled CCNB board'],
    sizing: 'Most cartons land between 2 × 2 × 2 in and 12 × 10 × 6 in. Anything outside that range moves to corrugated for stacking strength.',
    printing: ['Offset lithography', 'Digital press', 'Flexography'],
    finishes: ['Gloss lamination', 'Matte lamination', 'Soft-touch lamination', 'Spot UV', 'Foil stamping', 'Embossing', 'Debossing', 'Aqueous coating'],
    addons: ['Product window with PET film', 'Paperboard divider', 'Hang tab', 'Tear strip', 'Magnetic closure upgrade'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Cartons ship flat in bulk cases, which keeps freight cost low even on large runs.',
    artwork: 'Supply artwork on the dieline we send you, with 3 mm bleed past every trim edge and all text held 4 mm inside the fold lines.',
    applications: ['Shelf display in specialty retail', 'Subscription and gift sets', 'E-commerce inner packaging', 'Point-of-purchase counters'],
    specNotes: {
      'Board thickness': '12pt – 18pt depending on product weight',
      'Construction': 'Die-cut, creased and seam-glued',
      'Ships as': 'Flat-packed, glued one seam',
    },
  },
  'rigid-box': {
    id: 'rigid-box',
    noun: 'rigid boxes',
    singular: 'rigid box',
    construction:
      'built from greyboard wrapped in a printed or specialty paper, assembled by hand so the walls stay rigid and the lid holds its shape',
    materials: ['1200gsm greyboard with printed wrap', '1400gsm greyboard', 'Specialty textured wrap paper', 'Linen-finish wrap', 'Soft-touch laminated wrap'],
    sizing: 'Rigid boxes are usually specified between 4 × 4 × 2 in and 14 × 10 × 4 in. Wall thickness is typically 1.5 mm to 2 mm.',
    printing: ['Offset-printed wrap', 'Digital-printed wrap', 'Screen printing on wrap'],
    finishes: ['Foil stamping', 'Embossing', 'Debossing', 'Soft-touch lamination', 'Spot UV', 'Edge painting'],
    addons: ['Magnetic closure', 'Ribbon pull', 'Foam insert', 'Fabric lining', 'Grosgrain ribbon tie'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Rigid boxes ship pre-assembled and take more freight volume than flat-packed formats, so plan lead time accordingly.',
    artwork: 'Wrap artwork needs 15 mm bleed on all sides to cover the turn-in, and any critical detail should sit at least 10 mm from a corner.',
    applications: ['Luxury retail and gifting', 'Jewellery and watch presentation', 'Premium electronics', 'Limited-edition releases'],
    specNotes: {
      'Board thickness': '1.5 mm – 2 mm greyboard',
      'Construction': 'Hand-wrapped rigid greyboard',
      'Ships as': 'Pre-assembled, nested where possible',
    },
  },
  'corrugated-box': {
    id: 'corrugated-box',
    noun: 'corrugated boxes',
    singular: 'corrugated box',
    construction:
      'made from fluted corrugated board laminated between liners, which gives the panel its stacking strength and impact resistance',
    materials: ['E-flute corrugated', 'B-flute corrugated', 'Double-wall BC-flute', 'Kraft corrugated', 'White-top corrugated'],
    sizing: 'Common footprints run from 6 × 6 × 4 in up to 24 × 18 × 12 in. Double-wall board is worth specifying past about 20 lb of contents.',
    printing: ['Flexography', 'Litho-lamination', 'Digital press'],
    finishes: ['Flood coating', 'Matte lamination on litho-laminated panels', 'Spot UV on litho-laminated panels'],
    addons: ['Corrugated insert', 'Tear strip', 'Double-wall upgrade', 'Handle cut-out'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Boxes ship flat and knocked down, stacked on pallets for volume orders.',
    artwork: 'Flexo printing holds line work well but not fine gradients, so keep type above 7pt and avoid four-colour photography unless you choose litho-lamination.',
    applications: ['E-commerce shipping', 'Wholesale and distribution', 'Retail-ready shelf cases', 'Subscription fulfilment'],
    specNotes: {
      'Board grade': 'E, B or BC double-wall flute',
      'Construction': 'Die-cut or slotted, glued or stitched',
      'Ships as': 'Flat, knocked-down on pallets',
    },
  },
  mailer: {
    id: 'mailer',
    noun: 'mailer boxes',
    singular: 'mailer box',
    construction:
      'cut from single-face corrugated with integrated side wings and a front tuck, so it folds up without tape and survives the carrier network',
    materials: ['E-flute corrugated', 'F-flute corrugated', 'White-top E-flute', 'Kraft E-flute'],
    sizing: 'Mailers commonly run 6 × 4 × 2 in through 16 × 12 × 4 in. Keep 5 mm of clearance around the product for void fill.',
    printing: ['Digital press', 'Flexography', 'Litho-lamination'],
    finishes: ['Matte lamination', 'Gloss lamination', 'Soft-touch lamination', 'Spot UV', 'Interior flood print'],
    addons: ['Interior print', 'Tear strip', 'Double-sided tape strip', 'Custom insert', 'Branded tissue'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Mailers arrive flat and score-folded, ready to assemble by hand in a few seconds each.',
    artwork: 'Design the outside and inside as one flat dieline, and remember the inside print is what the customer sees first at unboxing.',
    applications: ['Direct-to-consumer shipping', 'Subscription boxes', 'Influencer and PR sends', 'Retail click-and-collect'],
    specNotes: {
      'Board grade': 'E-flute or F-flute corrugated',
      'Construction': 'Roll-end tuck-front, tape-free assembly',
      'Ships as': 'Flat with pre-scored folds',
    },
  },
  'poly-mailer': {
    id: 'poly-mailer',
    noun: 'poly mailers',
    singular: 'poly mailer',
    construction:
      'formed from coextruded polyethylene film, heat-sealed on three sides with a permanent self-seal adhesive strip along the opening',
    materials: ['2.5 mil coextruded LDPE', '3 mil coextruded LDPE', '100% recycled LDPE', 'Compostable PBAT/PLA film'],
    sizing: 'Stock sizes run from 6 × 9 in through 19 × 24 in. Add roughly 2 in to the largest flat dimension of the product.',
    printing: ['Flexography', 'Digital film printing'],
    finishes: ['Matte film', 'Gloss film', 'Metallic film'],
    addons: ['Double adhesive strip for returns', 'Tear strip', 'Interior print', 'Custom colour film'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Poly mailers are light and take almost no freight volume, which usually lowers your outbound postage band.',
    artwork: 'Flexo on film holds solid colours cleanly. Keep reversed-out type above 8pt and avoid fine screens under 15%.',
    applications: ['Apparel and soft goods shipping', 'Lightweight e-commerce orders', 'Returns programmes', 'Subscription apparel'],
    specNotes: {
      'Film gauge': '2.5 mil – 3 mil coextruded',
      'Closure': 'Permanent self-seal adhesive strip',
      'Opacity': 'Opaque, contents not visible',
    },
  },
  'bubble-mailer': {
    id: 'bubble-mailer',
    noun: 'bubble mailers',
    singular: 'bubble mailer',
    construction:
      'a kraft or poly outer bonded to an air-bubble lining, giving cushioned protection without the bulk of a box',
    materials: ['Kraft paper outer with bubble lining', 'Poly outer with bubble lining', 'Recyclable paper-padded lining'],
    sizing: 'Sizes run from 4 × 8 in up to 14.25 × 20 in, listed by interior usable dimensions rather than outer size.',
    printing: ['Flexography', 'Digital printing on the outer face'],
    finishes: ['Matte outer', 'Gloss outer', 'Uncoated kraft'],
    addons: ['Double adhesive strip', 'Tear strip', 'Custom outer colour'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Mailers arrive in cartons by size, ready to pack without additional void fill for most small items.',
    artwork: 'Print sits on a slightly padded surface, so favour bold marks and avoid hairline rules under 0.5pt.',
    applications: ['Small electronics and accessories', 'Cosmetics samples', 'Books and print media', 'Jewellery shipping'],
    specNotes: {
      'Lining': 'Air-bubble cushioning',
      'Closure': 'Peel-and-seal adhesive strip',
      'Protection': 'Cushioned, suited to light fragile goods',
    },
  },
  'paper-bag': {
    id: 'paper-bag',
    noun: 'paper bags',
    singular: 'paper bag',
    construction:
      'formed from a printed paper web, side-gusseted and bottom-glued, with handles applied as a separate operation where specified',
    materials: ['Virgin kraft paper', 'Recycled kraft paper', 'White kraft paper', 'Coated art paper', 'Greaseproof paper'],
    sizing: 'Retail bags commonly run 5 × 3 × 8 in through 16 × 6 × 12 in, quoted as width × gusset × height.',
    printing: ['Flexography', 'Offset lithography', 'Digital press'],
    finishes: ['Matte lamination', 'Gloss lamination', 'Foil stamping', 'Spot UV', 'Uncoated natural kraft'],
    addons: ['Twisted paper handles', 'Flat paper handles', 'Cotton rope handles', 'Ribbon handles', 'Reinforced top edge'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Bags ship flat in banded bundles and take very little storage space in a stockroom.',
    artwork: 'Allow for the bottom fold and side gussets on the dieline, and keep logos clear of the crease lines so they read cleanly when the bag is open.',
    applications: ['In-store purchases', 'Bakery and takeaway counters', 'Boutique retail', 'Event and conference giveaways'],
    specNotes: {
      'Paper weight': '100gsm – 200gsm depending on load',
      'Construction': 'Side-gusseted, bottom-glued',
      'Handles': 'Twisted paper, flat paper, rope or ribbon',
    },
  },
  'tote-bag': {
    id: 'tote-bag',
    noun: 'tote bags',
    singular: 'tote bag',
    construction:
      'cut and sewn from woven fabric with stitched webbing handles, so the bag is reusable rather than single-trip',
    materials: ['Cotton canvas 8oz', 'Cotton canvas 12oz', 'Organic cotton', 'Jute with laminated lining', 'Non-woven polypropylene'],
    sizing: 'Standard totes run 13 × 14 in through 18 × 16 in, with gussets from flat up to 6 in.',
    printing: ['Screen printing', 'Direct-to-garment printing', 'Embroidery', 'Heat transfer'],
    finishes: ['Natural unbleached', 'Pigment dyed', 'Embroidered detail'],
    addons: ['Interior pocket', 'Gusseted base', 'Contrast handles', 'Woven brand label'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Totes ship folded and compressed in poly-lined cartons.',
    artwork: 'Screen printing needs vector artwork with separated spot colours. Each additional colour adds a screen and a small setup cost.',
    applications: ['Retail carry bags', 'Conference and event merchandise', 'Grocery and market use', 'Brand gifting'],
    specNotes: {
      'Fabric weight': '8oz – 12oz cotton canvas',
      'Construction': 'Cut and sewn with stitched handles',
      'Reusable': 'Yes, machine washable cold',
    },
  },
  pouch: {
    id: 'pouch',
    noun: 'pouches',
    singular: 'pouch',
    construction:
      'laminated from multiple film layers, then formed and heat-sealed so the barrier layer sits between the printed outer and the food-safe inner',
    materials: ['PET/MPET/PE laminate', 'Kraft paper/PE laminate', 'Clear PET/PE laminate', 'Recyclable mono-PE', 'Compostable kraft/PLA'],
    sizing: 'Pouches are specified by width × height × gusset, commonly 3.5 × 5 in through 12 × 16 in with a 2 in to 4 in bottom gusset.',
    printing: ['Rotogravure', 'Digital film printing', 'Flexography'],
    finishes: ['Matte film', 'Gloss film', 'Soft-touch film', 'Spot gloss over matte', 'Metallised layer'],
    addons: ['Resealable zipper', 'Tear notch', 'Hang hole', 'Degassing valve', 'Clear product window', 'Child-resistant zipper'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Pouches ship flat in cartons and weigh a fraction of rigid alternatives.',
    artwork: 'Build artwork to the flat pouch dieline including the gusset panels, and keep barcodes on a flat face rather than across a seal.',
    applications: ['Coffee and dry goods', 'Snacks and confectionery', 'Supplements and powders', 'Pet treats'],
    specNotes: {
      'Structure': 'Multi-layer laminated film',
      'Barrier': 'Moisture and oxygen barrier available',
      'Closure': 'Heat seal, optional resealable zipper',
    },
  },
  'paper-cup': {
    id: 'paper-cup',
    noun: 'paper cups',
    singular: 'paper cup',
    construction:
      'wound from printed paperboard with a heat-sealed side seam and a rolled rim, lined so the cup holds liquid without wicking',
    materials: ['Single-wall PE-lined paperboard', 'Double-wall paperboard', 'PLA-lined compostable board', 'Ripple-wall board'],
    sizing: 'Common capacities are 4oz, 6oz, 8oz, 12oz, 16oz and 20oz. Lid diameter is fixed per capacity family.',
    printing: ['Offset lithography', 'Flexography', 'Digital press'],
    finishes: ['Matte outer', 'Gloss outer', 'Uncoated kraft outer', 'Soft-touch outer'],
    addons: ['Matching sip lid', 'Double-wall upgrade', 'Ripple sleeve', 'PLA lining for compostability'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Cups nest in sleeves inside cartons, so they take more volume than flat packaging.',
    artwork: 'Cup artwork is built on a fan-shaped dieline. Keep type at least 6 mm from the top rim and bottom curl, and expect slight distortion at the seam.',
    applications: ['Coffee shops and cafés', 'Quick-service restaurants', 'Events and catering', 'Office and hospitality'],
    specNotes: {
      'Lining': 'PE or PLA liquid barrier',
      'Rim': 'Rolled rim, lid-compatible',
      'Wall': 'Single, double or ripple wall',
    },
  },
  tray: {
    id: 'tray',
    noun: 'food trays',
    singular: 'food tray',
    construction:
      'die-cut and folded from grease-resistant board into an open-top tray, with locking corners that hold the shape under warm food',
    materials: ['Grease-resistant SBS board', 'Kraft board with grease barrier', 'Corrugated E-flute', 'Clay-coated news back'],
    sizing: 'Trays are quoted by top opening and depth, commonly 4 × 3 × 1.5 in through 10 × 7 × 2.5 in.',
    printing: ['Offset lithography', 'Flexography', 'Digital press'],
    finishes: ['Grease-resistant coating', 'Matte finish', 'Uncoated kraft'],
    addons: ['Vent holes for steam release', 'Corner locking tabs', 'Stacking shoulder', 'PE-free grease barrier'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Trays ship flat and are formed at the counter, or arrive pre-formed and nested if you prefer.',
    artwork: 'Only the outer faces print. Keep artwork off the glue tabs and allow for the fold radius at each corner.',
    applications: ['Quick-service food counters', 'Bakery and deli', 'Stadium and event catering', 'Food trucks'],
    specNotes: {
      'Barrier': 'Grease-resistant coating',
      'Construction': 'Die-cut with locking corners',
      'Ships as': 'Flat or pre-formed and nested',
    },
  },
  sleeve: {
    id: 'sleeve',
    noun: 'sleeves',
    singular: 'sleeve',
    construction:
      'a printed board or paper band that wraps the product or its container, glued into a loop or supplied flat for hand assembly',
    materials: ['Uncoated kraft board', 'C1S paperboard', 'Corrugated E-flute', 'Greaseproof paper', 'Recycled board'],
    sizing: 'Sleeves are specified by the circumference of the item plus a glue lap, with height set by how much of the product you want covered.',
    printing: ['Offset lithography', 'Flexography', 'Digital press'],
    finishes: ['Matte lamination', 'Uncoated natural', 'Spot UV', 'Foil stamping', 'Emboss'],
    addons: ['Die-cut window', 'Perforated tear line', 'Interior print', 'Grease-resistant coating'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Sleeves ship flat in banded bundles and store in very little space.',
    artwork: 'Measure the circumference of the filled product, not the empty one, and add 10 mm for the glue lap.',
    applications: ['Food service branding', 'Retail product banding', 'Gift presentation', 'Subscription unboxing'],
    specNotes: {
      'Construction': 'Wrapped band, glued or flat-supplied',
      'Fit': 'Sized to filled product circumference',
      'Ships as': 'Flat, banded bundles',
    },
  },
  label: {
    id: 'label',
    noun: 'labels',
    singular: 'label',
    construction:
      'printed on a pressure-sensitive facestock with a permanent or removable adhesive, then die-cut on the liner and supplied on rolls or sheets',
    materials: ['White BOPP film', 'Clear BOPP film', 'Textured uncoated paper', 'Estate label paper', 'Silver metallised film'],
    sizing: 'Labels are cut to any shape within about 0.5 × 0.5 in to 8 × 10 in. Roll labels need a specified core and wind direction.',
    printing: ['Digital label press', 'Flexography', 'Screen printing for heavy ink lay'],
    finishes: ['Gloss laminate', 'Matte laminate', 'Foil stamping', 'Spot UV', 'Textured varnish'],
    addons: ['Waterproof facestock', 'Removable adhesive', 'Freezer-grade adhesive', 'Variable data numbering', 'Sheet or roll format'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Labels ship on cores or in sheets, boxed by quantity.',
    artwork: 'Supply vector artwork with a clearly marked cut line as a separate spot colour, and hold text 2 mm inside the die.',
    applications: ['Product identification on retail shelves', 'Ingredient and compliance panels', 'Jar and bottle branding', 'Batch and date coding'],
    specNotes: {
      'Facestock': 'BOPP film or uncoated paper',
      'Adhesive': 'Permanent, removable or freezer-grade',
      'Supplied as': 'Rolls on core, or sheets',
    },
  },
  sticker: {
    id: 'sticker',
    noun: 'stickers',
    singular: 'sticker',
    construction:
      'printed on vinyl or paper facestock, then either kiss-cut on the backing or die-cut through to the shape outline',
    materials: ['White vinyl', 'Clear vinyl', 'Holographic vinyl', 'Matte paper', 'Glitter vinyl'],
    sizing: 'Stickers work from about 1 × 1 in up to 12 × 12 in. Detail below 2 mm tends to lose definition on the cut.',
    printing: ['Digital eco-solvent printing', 'UV inkjet', 'Screen printing'],
    finishes: ['Gloss laminate', 'Matte laminate', 'UV-resistant laminate', 'Holographic overlay'],
    addons: ['Kiss cut on backing', 'Die cut to shape', 'Sheet layout', 'Weatherproof laminate', 'Removable adhesive'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Stickers ship flat in rigid mailers, or on rolls for higher quantities.',
    artwork: 'Provide vector artwork with the cut path on its own layer, and keep 3 mm of bleed outside the cut line.',
    applications: ['Packaging seals and closures', 'Brand merchandise', 'Laptop and bottle decoration', 'Promotional inserts'],
    specNotes: {
      'Facestock': 'Vinyl or coated paper',
      'Cut': 'Kiss cut or die cut to shape',
      'Durability': 'Indoor, or outdoor with UV laminate',
    },
  },
  insert: {
    id: 'insert',
    noun: 'packaging inserts',
    singular: 'packaging insert',
    construction:
      'die-cut from board or routed from foam to hold each item in a fixed position, so nothing shifts between the packing bench and the customer',
    materials: ['E-flute corrugated', 'Chipboard', 'Moulded pulp', 'EVA foam', 'Polyurethane foam', 'Rigid board with fabric wrap'],
    sizing: 'Inserts are cut to the internal dimensions of the outer pack, with a 1 mm to 2 mm tolerance around each cavity.',
    printing: ['Flexography', 'Digital press', 'Unprinted natural'],
    finishes: ['Unprinted kraft', 'Flood colour', 'Matte lamination', 'Fabric wrap'],
    addons: ['Multi-cavity layout', 'Finger cut-outs for easy removal', 'Foam upgrade for fragile items', 'Printed instructions on the insert face'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Board inserts ship flat and are assembled at packing. Foam inserts ship pre-cut and stacked.',
    artwork: 'We build the insert dieline from your product dimensions, so send the exact measurements of every item that needs a cavity.',
    applications: ['Fragile product protection', 'Multi-piece gift sets', 'Subscription box presentation', 'Electronics and glassware'],
    specNotes: {
      'Material': 'Corrugated, chipboard, moulded pulp or foam',
      'Tolerance': '1 mm – 2 mm around each cavity',
      'Assembly': 'Drop-in, no adhesive required',
    },
  },
  display: {
    id: 'display',
    noun: 'display boxes',
    singular: 'display box',
    construction:
      'engineered from corrugated or paperboard with a tear-away front or open face, so the pack doubles as the shelf unit once it reaches the store',
    materials: ['E-flute corrugated', 'B-flute corrugated', 'Litho-laminated corrugated', 'Heavy paperboard'],
    sizing: 'Counter units usually sit within a 12 × 9 in footprint. Floor displays are built to pallet or half-pallet dimensions.',
    printing: ['Litho-lamination', 'Flexography', 'Digital press'],
    finishes: ['Gloss lamination', 'Matte lamination', 'Spot UV on the header', 'Flood colour'],
    addons: ['Printed header card', 'Shelf dividers', 'Tear-away perforation', 'Product-shaped die cut', 'Weighted base'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Displays ship flat with assembly instructions, or pre-packed with product if you need a fully retail-ready unit.',
    artwork: 'The header is the piece shoppers read from a distance, so keep it to one clear message and avoid crowding it with detail.',
    applications: ['Checkout counter placement', 'Aisle end caps', 'Trade shows and pop-ups', 'Retail-ready shelf sets'],
    specNotes: {
      'Board grade': 'E-flute or B-flute corrugated',
      'Construction': 'Structural die-cut with tear-away face',
      'Retail ready': 'Yes, ships flat or pre-packed',
    },
  },
  tube: {
    id: 'tube',
    noun: 'paper tubes',
    singular: 'paper tube',
    construction:
      'spiral-wound from kraft board into a rigid cylinder, then finished with metal, board or timber end caps',
    materials: ['Spiral-wound kraft board', 'White-lined kraft board', 'Recycled paperboard', 'Food-grade lined board'],
    sizing: 'Tubes are quoted by inner diameter and height, commonly 1.5 in to 4 in diameter and 3 in to 12 in tall.',
    printing: ['Printed wrap label', 'Direct digital printing', 'Screen printing'],
    finishes: ['Matte wrap', 'Gloss wrap', 'Foil stamping', 'Uncoated kraft', 'Soft-touch wrap'],
    addons: ['Metal end caps', 'Board end caps', 'Airtight lid', 'Child-resistant lid', 'Interior foam pad'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Tubes ship nested where the design allows, otherwise loose in cartons.',
    artwork: 'Wrap artwork needs an overlap allowance of 5 mm, and the seam should fall on the back of the pack away from key branding.',
    applications: ['Cosmetics and skincare', 'Tea and dry goods', 'Candles and gifting', 'Supplement packaging'],
    specNotes: {
      'Construction': 'Spiral-wound rigid kraft board',
      'End caps': 'Metal, board or timber',
      'Seal': 'Friction fit or airtight option',
    },
  },
  band: {
    id: 'band',
    noun: 'belly bands',
    singular: 'belly band',
    construction:
      'a printed paper or board strip that wraps a pack and glues into a closed loop, holding the contents together and carrying the branding',
    materials: ['Uncoated text paper', 'C1S paperboard', 'Recycled kraft paper', 'Coated art paper'],
    sizing: 'Band width is usually 1.5 in to 4 in, with length set by the pack circumference plus a 10 mm glue lap.',
    printing: ['Offset lithography', 'Digital press'],
    finishes: ['Matte lamination', 'Uncoated natural', 'Foil stamping', 'Spot UV'],
    addons: ['Perforated tear line', 'Die-cut window', 'Double-sided print'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Bands ship flat in bundles.',
    artwork: 'Set up the band as a single flat strip and mark where the glue lap falls so no critical artwork is hidden underneath.',
    applications: ['Retail pack branding', 'Gift set presentation', 'Subscription boxes', 'Product bundling'],
    specNotes: {
      'Construction': 'Flat strip, glued to a loop',
      'Width': '1.5 in – 4 in typical',
      'Removal': 'Slide off or perforated tear',
    },
  },
  wrap: {
    id: 'wrap',
    noun: 'wraps',
    singular: 'wrap',
    construction:
      'printed on lightweight paper stock and folded around the product by hand or machine, sealed with a label or tuck',
    materials: ['Greaseproof paper', 'Uncoated text paper', 'Glassine', 'Recycled kraft paper', 'Wax-free barrier paper'],
    sizing: 'Wrap sheets are cut square or rectangular to suit the product footprint, commonly 8 × 8 in through 16 × 16 in.',
    printing: ['Flexography', 'Offset lithography', 'Digital press'],
    finishes: ['Uncoated natural', 'Matte print', 'Food-safe ink'],
    addons: ['Grease-resistant barrier', 'Matching seal label', 'Pre-cut sheets or roll format'],
    moq: 'Minimum order is 100 units on any format, and unit cost falls sharply as the quantity rises.',
    shipping: 'Wraps ship as flat cut sheets in reams, or on rolls for higher-volume lines.',
    artwork: 'Because the sheet folds around the product, place the main mark off-centre so it lands face-up on the finished wrap.',
    applications: ['Soap and bath products', 'Bakery and confectionery', 'Deli counters', 'Handmade goods'],
    specNotes: {
      'Material': 'Greaseproof or uncoated paper',
      'Format': 'Cut sheets or roll',
      'Food safe': 'Available with food-grade inks',
    },
  },
}

/** Ordered rules — first match wins, so specific patterns sit at the top. */
const RULES: [RegExp, FormFactorId][] = [
  [/\btote bag/i, 'tote-bag'],
  [/\bcanvas|cotton|jute|garment bag|velvet bag/i, 'tote-bag'],
  [/bubble mailer/i, 'bubble-mailer'],
  [/poly mailer|vinyl mailer|padded mailer/i, 'poly-mailer'],
  [/mailer sleeve/i, 'sleeve'],
  [/mailer|literature mailer|document mailer|book mailer|rigid mailer/i, 'mailer'],
  [/insert/i, 'insert'],
  [/display (box|stand)|display boxes|display stands/i, 'display'],
  [/sticker/i, 'sticker'],
  [/label/i, 'label'],
  [/sleeve/i, 'sleeve'],
  [/belly band|band packaging/i, 'band'],
  [/wrap(s)?\b|wrapping paper/i, 'wrap'],
  [/\btube\b/i, 'tube'],
  [/mylar|pouch/i, 'pouch'],
  [/\btray(s)?\b/i, 'tray'],
  [/\bcup(s)?\b(?!\s*holder)|cup holder/i, 'paper-cup'],
  [/container/i, 'tray'],
  [/\bbag(s)?\b/i, 'paper-bag'],
  [/shipping box|corrugated|e-commerce box/i, 'corrugated-box'],
  [/rigid box|jewellery box|jewelry box|watch box|ring box|pendant box|earring box|necklace box|bracelet box/i, 'rigid-box'],
  [/shoe box|hat box|presentation box/i, 'rigid-box'],
]

export function classify(productName: string): FormFactorId {
  for (const [re, id] of RULES) {
    if (re.test(productName)) return id
  }
  return 'folding-carton'
}

/* ------------------------------------------------------------------ */
/* Industry mapping — drives "who buys this" copy and location pages.  */
/* ------------------------------------------------------------------ */

export interface Industry {
  id: string
  name: string
  blurb: string
}

export const INDUSTRIES: Record<string, Industry> = {
  food: { id: 'food', name: 'Food and beverage', blurb: 'Grease resistance, food-contact compliance and speed at the counter decide the specification.' },
  beauty: { id: 'beauty', name: 'Beauty and personal care', blurb: 'Shelf presence and finish quality carry most of the weight, alongside ingredient panel space.' },
  cannabis: { id: 'cannabis', name: 'CBD and wellness', blurb: 'Compliance panels, tamper evidence and clear dosage information sit alongside brand design.' },
  ecommerce: { id: 'ecommerce', name: 'E-commerce and DTC', blurb: 'Dimensional weight, carrier survival and the unboxing moment drive the format choice.' },
  retail: { id: 'retail', name: 'Retail and grocery', blurb: 'Shelf-ready presentation, stacking strength and barcode placement matter most.' },
  gifting: { id: 'gifting', name: 'Gifting and events', blurb: 'Presentation, weight in the hand and reusability shape the material decision.' },
  apparel: { id: 'apparel', name: 'Apparel and accessories', blurb: 'Soft goods need low-cost protection with room for brand storytelling.' },
  home: { id: 'home', name: 'Home and candles', blurb: 'Fragile contents need structural protection without hiding the product.' },
  electronics: { id: 'electronics', name: 'Electronics and hardware', blurb: 'Static safety, cavity fit and accessory organisation define the internal structure.' },
  pharma: { id: 'pharma', name: 'Pharmaceutical and supplements', blurb: 'Regulated panel content, batch coding and tamper evidence come before aesthetics.' },
}

const INDUSTRY_BY_CATEGORY: Record<string, string[]> = {
  'custom-bags': ['retail', 'food', 'gifting'],
  'custom-beverage-packaging': ['food', 'retail'],
  'custom-candle-packaging': ['home', 'gifting', 'retail'],
  'custom-home-fragrance-packaging': ['home', 'beauty', 'gifting'],
  'custom-cbd-packaging': ['cannabis', 'pharma', 'retail'],
  'custom-cosmetic-packaging': ['beauty', 'retail', 'ecommerce'],
  'custom-printed-cups': ['food', 'retail'],
  'custom-containers': ['food', 'retail'],
  'custom-food-trays': ['food', 'retail'],
  'custom-display-boxes': ['retail', 'beauty', 'food'],
  'custom-mailers': ['ecommerce', 'apparel', 'retail'],
  'custom-food-packaging': ['food', 'retail'],
  'custom-gift-boxes': ['gifting', 'retail', 'ecommerce'],
  'promotional-packaging': ['gifting', 'ecommerce', 'retail'],
  'custom-packaging-inserts': ['ecommerce', 'electronics', 'gifting'],
  'custom-jewellery-boxes': ['gifting', 'retail', 'apparel'],
  'custom-apparel-packaging': ['apparel', 'ecommerce', 'retail'],
  'custom-labels': ['beauty', 'food', 'retail'],
  'custom-stickers': ['retail', 'ecommerce', 'gifting'],
  'pharmaceutical-packaging': ['pharma', 'retail'],
  'wellness-packaging': ['pharma', 'cannabis', 'retail'],
  'custom-pouches': ['food', 'cannabis', 'retail'],
  'custom-sleeves': ['food', 'retail', 'gifting'],
  'custom-bands': ['gifting', 'retail', 'ecommerce'],
  'electronics-packaging': ['electronics', 'ecommerce', 'retail'],
  'sustainable-packaging': ['retail', 'food', 'ecommerce'],
}

export function industriesFor(categorySlug: string): Industry[] {
  const ids = INDUSTRY_BY_CATEGORY[categorySlug] ?? ['retail', 'ecommerce']
  return ids.map((i) => INDUSTRIES[i]).filter(Boolean)
}
