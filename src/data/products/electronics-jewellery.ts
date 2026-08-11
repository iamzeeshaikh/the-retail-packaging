import type { ProductFactsMap } from './types'

/**
 * Electronics Packaging and Custom Jewellery Boxes.
 *
 * Two ranges with opposite problems, which is why they sit in one file without
 * blurring together. Electronics is a weight-and-compliance problem: the pack
 * has to survive a courier and carry marks that are required by law before it
 * carries any brand. Jewellery is a retention problem: almost nothing in the
 * range is heavy, and almost everything in it moves, tangles or scratches
 * against the board if it is not held in one position.
 */
export const electronicsJewelleryFacts: ProductFactsMap = {
  /* ---------- Electronics Packaging ---------- */

  'appliances-packaging': {
    holds: 'a kettle, blender, toaster or similar counter-top unit, heavy enough that the carton is structural rather than presentational',
    sizeNote: 'Driven by the appliance plus the cushioning around it, commonly 10 to 24 in on the longest side. The cushioning allowance is usually 1.5 to 2 in per side, not the half-inch buyers assume.',
    failure: 'The carton is stacked three or four high on a pallet and the bottom unit crushes at the corners, because the walls were rated for the appliance alone rather than for everything sitting on top of it.',
    buyerNote: 'Board is chosen by feel — "something thick" — when the number that decides it is the edge crush rating against the stacking height in the warehouse.',
    context: 'pallet racking, LTL freight and retail backrooms, where the carton is stacked and moved several times before a customer ever sees it',
    detail: 'Tell us the stacking height and whether it travels palletised or by parcel courier. Those two answers set the flute and the wall count; the appliance weight on its own does not.',
    spec: 'Double-wall BC flute for anything above roughly 15 lb or stacked more than two high. Single-wall C is enough for a light unit shipped singly.',
    press: 'Flexo direct to kraft is the honest route here. Litho-laminating a carton that is going to be opened once and recycled adds cost the category rarely supports.',
    pairs: ['electronics-boxes', 'speaker-boxes', 'car-battery-packaging'],
    ask: {
      q: 'How thick does the board need to be for a heavy appliance?',
      a: 'Thickness is the wrong measure — edge crush rating and stacking height are what decide it. A 12 lb blender shipped singly is fine in single-wall C flute; the same blender stacked four high on a pallet needs double-wall BC. Tell us the stacking height and we will specify against it.',
    },
  },
  'car-battery-packaging': {
    holds: 'a lead-acid battery weighing 30 to 50 lb, with corrosive contents and terminals that must not short against anything',
    sizeNote: 'Close-fitted to the battery case, typically 8 to 13 in long, with almost no void — a battery that can slide inside its carton is the problem, not the solution.',
    failure: 'The base gives way while the carton is being lifted, because the weight sits on a glued bottom flap that was never designed to carry it.',
    buyerNote: 'The specification is written around the walls and the base is treated as an afterthought, when on this product the base is the only panel that genuinely has to hold.',
    context: 'automotive parts distribution and trade counters, where units are lifted by hand repeatedly and stored on low racking',
    detail: 'The load path runs straight down. A tray-and-sleeve or a full-overlap base carries it; a standard regular slotted container with a single glued seam does not.',
    spec: 'Double-wall BC flute with a full-overlap or tray base. This is one of the few formats where we will decline to quote a lighter board.',
    press: 'Hazard and orientation marks come first and take the panel area they need. Brand identity works around them, not the other way round.',
    pairs: ['appliances-packaging', 'electronics-boxes'],
    ask: {
      q: 'Does battery packaging need specific regulatory marking?',
      a: 'Yes. Lead-acid batteries carry corrosive and orientation marking, and the requirements differ for road, air and sea. Tell us how it ships and we will block the mark areas into the dieline before you commit design time to the panel.',
    },
  },
  'charger-boxes': {
    holds: 'a plug adapter together with a coiled cable, which is two quite differently shaped things in one carton',
    sizeNote: 'Small, commonly 3 × 3 × 1.5 in, but the depth is set by the coiled cable rather than by the adapter.',
    failure: 'The carton bulges and the tuck flap springs open on the shelf, because a coiled cable behaves like a spring and pushes back against the lid.',
    buyerNote: 'The adapter is measured carefully and the cable coil is not measured at all, so the depth comes out around a third short.',
    context: 'accessory pegs and till-point displays, where units sit alongside dozens of near-identical competitors',
    detail: 'Coil the cable the way it will actually be packed and measure that stack. A cable coiled at 2.5 in diameter needs a different carton from the same cable coiled at 1.75 in.',
    spec: '16pt to 18pt SBS. Light board makes a bulging carton worse, and this is a format where the tuck has to stay shut.',
    press: 'Regulatory marks — FCC, UL, voltage and wattage — take real panel space on a carton this small. Lay them out before the brand, not after.',
    pairs: ['earbud-boxes', 'electronics-boxes', 'headphone-boxes'],
    ask: {
      q: 'Why do my charger cartons keep popping open?',
      a: 'Almost always the coiled cable acting as a spring against the tuck flap. Either add depth for the coil as it is genuinely packed, or move to a tuck with a locking tab. Heavier board alone will not hold a carton that is being pushed open from the inside.',
    },
  },
  'earbud-boxes': {
    holds: 'a charging case and a pair of buds small enough to be lost inside the carton if nothing holds them',
    sizeNote: 'Compact, around 3.5 × 3 × 1.75 in, sized to the closed charging case with the lid shut.',
    failure: 'The buds work free of the insert in transit and arrive rattling loose, which reads as a defective product before the customer has even switched them on.',
    buyerNote: 'A plain carton is specified for a product whose unboxing is a genuine part of what the customer paid for at this price point.',
    context: 'premium accessory retail and direct-to-consumer launches, where the pack is photographed and reviewed as much as the product',
    detail: 'A board or thermoformed insert with a seat for the case and a separate recess for the buds. It is the insert, not the carton, that makes this format feel like the price.',
    spec: 'Rigid board wrapped in a printed litho sheet, or 18pt SBS with a fitted insert where the budget will not carry rigid.',
    press: 'Soft-touch lamination is the finish this category rewards, because the pack is handled at length before the product comes out.',
    pairs: ['headphone-boxes', 'smartwatch-boxes', 'charger-boxes'],
    ask: {
      q: 'Do I need a rigid box or will a folding carton do?',
      a: 'A folding carton with a well-made insert covers most of it. Rigid earns its cost when the pack is part of the review — unboxing videos, gifting, above roughly the $150 price point. We will quote both so the difference is visible against your margin.',
    },
  },
  'electronics-boxes': {
    holds: 'mixed powered goods where the shared risks are static, drop damage and a compliance panel that has to be right',
    sizeNote: 'No single range — this is the format we quote when the product does not fit one of the named categories, so the dieline is cut from your dimensions rather than adapted from a stock size.',
    failure: 'A drop onto a corner transmits straight through to the product, because the void fill was specified to stop movement rather than to absorb impact.',
    buyerNote: 'Stopping the product moving is treated as the same problem as protecting it. They are different: a tightly packed product with no cushioning still takes the full shock of a drop.',
    context: 'mixed electronics catalogues, where one buyer is specifying packs for a range of products with quite different weights',
    detail: 'Movement and impact are separate problems with separate answers. Fitted board stops movement; a corrugated pad, foam or a suspension insert absorbs impact. Most briefs need both.',
    spec: 'Single-wall E flute for small items where print quality matters, B or C flute once weight or drop height climbs.',
    press: 'If any part of the range carries an anti-static requirement, say so at quoting — it changes the liner, and it cannot be added after the board is bought.',
    pairs: ['charger-boxes', 'speaker-boxes', 'appliances-packaging'],
    ask: {
      q: 'Can one carton spec cover a whole product range?',
      a: 'Usually one board grade and one visual system can, but not one set of dimensions. We will normally cut two or three dieline sizes against the range and keep the board, print and finish common, which holds the shelf look together and still fits each product properly.',
    },
  },
  'headphone-boxes': {
    holds: 'an over-ear set that is bulky but light, with a headband under spring tension even when folded',
    sizeNote: 'Large for the weight, commonly 8 × 8 × 4 in, and set by the folded footprint plus the depth of the earcups.',
    failure: 'The headband pushes against the lid until the carton takes on a permanent bow, so units at the back of a shelf look second-hand.',
    buyerNote: 'The pack is sized to the headphones as they lie on a desk, not as they sit compressed inside a closed box.',
    context: 'consumer audio retail and gifting, where the box sits on shelf for months before it sells',
    detail: 'Measure the folded set under light compression, the way the closed lid will hold it. A quarter-inch of unaccounted spring is what bows the lid.',
    spec: 'Rigid board with a fitted insert, or E-flute litho-laminated where the pack has to survive parcel shipping on its own.',
    press: 'Large flat panels show every handling scuff. Matt lamination hides far more than gloss on a box this size.',
    pairs: ['earbud-boxes', 'speaker-boxes', 'smartwatch-boxes'],
    ask: {
      q: 'Why do headphone boxes bow at the lid?',
      a: 'Headband tension. Even folded, the band is a spring pressing outward, and over weeks on a shelf that sets a curve into the lid. The fix is dimensional — allow for the band under compression — plus an insert that carries the load into the walls instead of the lid.',
    },
  },
  'light-bulb-boxes': {
    holds: 'thin glass that is almost weightless and breaks from shock rather than from load',
    sizeNote: 'Small and closely fitted, from 2.5 in square for a standard lamp upward, with multipack cartons sized in twos, fours and sixes.',
    failure: 'The glass breaks in a pack that shows no external damage at all, because the bulb was held tight against a rigid wall with nothing to absorb the shock.',
    buyerNote: 'A snug fit is assumed to be a safe fit. For glass it is the opposite — held rigid against board, the shock goes straight into the envelope.',
    context: 'hardware and grocery shelves and parcel delivery, where a single carton is handled by several couriers',
    detail: 'The bulb needs to be suspended rather than clamped. A board partition that holds it at the base and the neck, with clearance at the glass, survives a drop that a tight-fitting box does not.',
    spec: 'E flute with a die-cut partition, or folding carton with an internal fitment for multipacks.',
    press: 'US retail requires the FTC Lighting Facts panel — brightness in lumens, energy cost, life and light appearance. It is a fixed layout with a fixed minimum size, so block it into the dieline first.',
    pairs: ['electronics-boxes', 'appliances-packaging'],
    ask: {
      q: 'What has to appear on a light bulb box for US retail?',
      a: 'The FTC Lighting Facts panel, covering brightness in lumens, estimated yearly energy cost, life, light appearance and wattage. It has a prescribed format and minimum size. Send us the values and we will block the panel into the dieline before artwork starts.',
    },
  },
  'smartwatch-boxes': {
    holds: 'a watch head and a strap, where the strap is the part that shows damage first',
    sizeNote: 'Small and deliberately square, around 4 × 4 × 2.5 in, with the depth set by the watch sitting on its cushion rather than lying flat.',
    failure: 'The strap takes a hard crease across the middle from being folded flat against board, and silicone and leather both hold that crease permanently.',
    buyerNote: 'The pack is designed around the watch face, which is the part that photographs well, while the strap is left to fold wherever it lands.',
    context: 'premium accessory retail and gifting, where the box is often kept after purchase',
    detail: 'A cushion or bolster the strap wraps around, so it curves instead of folding. This single component is the difference between a watch that looks new out of the box and one that does not.',
    spec: 'Rigid board with a wrapped litho sheet, and a cushion insert rather than a flat pad.',
    press: 'Soft-touch with a foil or blind-embossed logo. The pack is handled slowly at the point of gifting, so texture registers more than print gloss.',
    pairs: ['watch-boxes', 'earbud-boxes', 'jewellery-boxes'],
    ask: {
      q: 'How do I stop the strap creasing in the box?',
      a: 'Wrap it rather than fold it. A cushion or bolster the strap curves around removes the sharp fold entirely. Packing a strap flat against a board pad is what sets a permanent crease into silicone and leather.',
    },
  },
  'speaker-boxes': {
    holds: 'a driver cabinet that is dense for its size, with magnets inside and corners that carry the whole drop risk',
    sizeNote: 'Ranges widely, from a 4 in cube for a portable up to 20 in and beyond for a shelf unit, with weight rising much faster than volume.',
    failure: 'A corner drop drives the cabinet edge through the wall, because the weight is concentrated and corners are where a carton is weakest.',
    buyerNote: 'Weight is judged against the size of the box, when a speaker is far denser than its volume suggests and needs to be specified against the actual figure.',
    context: 'consumer audio retail and parcel delivery, where corner impacts during handling are the normal case rather than the exception',
    detail: 'Corner cushioning does more than wall thickness on this product. Moulded pulp or foam corner blocks take the impact into the cushion rather than into the cabinet.',
    spec: 'Double-wall BC flute above about 15 lb, single-wall C below it, with corner blocks in either case.',
    press: 'Larger cartons ship flat and get handled a lot before they are packed. A matt laminate or an aqueous coating stops scuffing showing on the way to being filled.',
    pairs: ['headphone-boxes', 'electronics-boxes', 'appliances-packaging'],
    ask: {
      q: 'Are corner blocks really necessary?',
      a: 'On a dense product, yes. Roughly four out of five transit failures we see on speakers are corner impacts, and corner cushioning addresses that directly where extra wall thickness mostly does not. It is also usually the cheaper of the two.',
    },
  },

  /* ---------- Custom Jewellery Boxes ---------- */

  'bracelet-boxes': {
    holds: 'a bracelet or bangle, which is either laid out straight or held as a rigid circle — two quite different internal shapes',
    sizeNote: 'A laid-flat chain bracelet needs roughly 8.5 × 2 in; a bangle needs a square nearer 3.5 × 3.5 in. The clasp type decides which.',
    failure: 'A flexible bracelet slides the length of the box and arrives coiled in one corner with the clasp caught in the links.',
    buyerNote: 'One box is ordered for a range that contains both chain bracelets and solid bangles, and the same interior cannot hold both.',
    context: 'jewellery counters and online gifting, where the box is opened by the recipient rather than by the buyer',
    detail: 'A slotted pad that grips the bracelet at two points. Held at one point it swings; held at two it stays laid out as it was packed.',
    spec: 'Rigid board with a foam pad under velvet or a paper-wrapped insert.',
    press: 'Interior colour carries more of the impression than the outer print. The lid is open for the whole moment that matters.',
    pairs: ['necklace-boxes', 'earring-boxes', 'jewellery-boxes'],
    ask: {
      q: 'Can one box suit both bracelets and bangles?',
      a: 'The outer box can; the insert cannot. A bangle needs a compact square and a chain bracelet needs a long slotted pad. We normally keep one outer size and specify two inserts, which holds the range together visually without compromising the fit.',
    },
  },
  'earring-boxes': {
    holds: 'a pair of small items with posts or hooks that must stay paired and stay put',
    sizeNote: 'Among the smallest formats we make, commonly 2 × 2 × 1 in, and sized to the pad rather than to the earrings.',
    failure: 'One earring works loose, migrates under the pad and is assumed lost, which turns a small item into a full replacement.',
    buyerNote: 'A plain foam pad is specified without pierced holes, so posts sit on the surface with nothing holding them.',
    context: 'jewellery retail and small-parcel shipping, where the item is worth many times the cost of the pack',
    detail: 'A pierced pad the posts push through, or a slotted card for hooks. The pad has to grip the fitting, not just sit under it.',
    spec: 'Rigid board with a slit foam pad, or a folding carton with a card fitment for lower price points.',
    press: 'The printable area is tiny. One mark and one line of type is usually all that reads at this size.',
    pairs: ['ring-boxes', 'pendant-boxes', 'jewellery-boxes'],
    ask: {
      q: 'How do I stop earrings coming loose in the box?',
      a: 'The pad has to be pierced or slotted so the post or hook is gripped rather than resting on the surface. A flat unpierced pad holds nothing once the box is turned over, and that is the single most common cause of a "missing" earring.',
    },
  },
  'jewellery-boxes': {
    holds: 'mixed pieces across a retail range, where one outer format has to work for several quite different items',
    sizeNote: 'Specified as a family rather than a single size — typically two or three footprints sharing one board, one wrap and one interior colour.',
    failure: 'The range looks assembled from three different suppliers, because each size was specified separately as it was needed.',
    buyerNote: 'Boxes are ordered one at a time as each product launches, and the shared material decisions that hold a range together are never made.',
    context: 'jewellery retail and e-commerce, where a customer buying twice should recognise the second box as the same brand',
    detail: 'Fix the wrap, the interior colour and the closure once, then vary only the footprint. That is what makes a range read as a range.',
    spec: 'Rigid board throughout, since mixing rigid and folding across a range is immediately visible to a customer.',
    press: 'Choose one wrap stock and one foil and hold them across every size. Consistency reads as quality here more than any individual treatment does.',
    pairs: ['ring-boxes', 'necklace-boxes', 'bracelet-boxes'],
    ask: {
      q: 'Should I order each box size separately as I need them?',
      a: 'Specify them as a family even if you order them in stages. Fixing the wrap stock, interior colour and closure once means sizes added a year apart still match. Boxes specified one at a time almost never do.',
    },
  },
  'necklace-boxes': {
    holds: 'a chain long enough to tangle with itself, plus whatever hangs from it',
    sizeNote: 'Long and shallow, commonly 8 × 2 × 1 in, sized to the chain laid out rather than to the pendant.',
    failure: 'The chain arrives knotted. It is the single most common complaint in this category and it happens in transit, not in the shop.',
    buyerNote: 'The box is sized to hold the necklace, when the job is to stop it moving — a chain with room to move will tangle every time.',
    context: 'jewellery retail and mail order, where the box is turned over repeatedly between packing and opening',
    detail: 'Secure the chain at both ends and the pendant separately. Held at one end only, the free end swings and the chain works itself into a knot.',
    spec: 'Rigid board with a slotted pad, or a folding carton with a card fitment where the price point is tighter.',
    press: 'A deep matt interior makes a bright chain read clearly against it. Light interiors lose the piece.',
    pairs: ['pendant-boxes', 'bracelet-boxes', 'jewellery-boxes'],
    ask: {
      q: 'Why do necklaces arrive tangled?',
      a: 'Because the chain is held at one end, or not at all, and swings in transit. Two fixing points plus a separate seat for the pendant stops it. A tighter box on its own does not — the chain still has slack to move within its own length.',
    },
  },
  'pendant-boxes': {
    holds: 'a single hanging piece on a short chain, where the pendant itself is the valuable part',
    sizeNote: 'Compact, around 3 × 3 × 1.25 in — closer to a ring box than to a necklace box, despite the chain.',
    failure: 'The pendant swings against the board and picks up fine scratches, which show badly on polished silver and plated finishes.',
    buyerNote: 'It is treated as a small necklace box, so the pendant is left loose on a flat pad with the chain coiled around it.',
    context: 'gifting and jewellery retail, where the piece is examined closely at the moment it is opened',
    detail: 'A recessed seat for the pendant with the chain slotted separately. Recessed, the pendant cannot travel far enough to strike anything.',
    spec: 'Rigid board with a die-cut foam recess under a soft lining.',
    press: 'The lining stock matters more than the wrap. A suede or velvet touch is what the recipient registers, and it also stops the scratching.',
    pairs: ['necklace-boxes', 'earring-boxes', 'ring-boxes'],
    ask: {
      q: 'Is a pendant box just a smaller necklace box?',
      a: 'No — the interior is a different problem. A necklace box lays a chain out and holds it at both ends; a pendant box recesses the pendant so it cannot swing and scratch. Using a shortened necklace insert is what produces marked pendants.',
    },
  },
  'ring-boxes': {
    holds: 'a single ring held upright in a slot, where the slot has to match the band',
    sizeNote: 'Small and near-cubic, around 2 × 2 × 1.75 in, with the depth set by the height of the pillow rather than by the ring.',
    failure: 'The ring is either gripped so tightly that the band marks, or so loosely that it falls out when the box is opened at an angle.',
    buyerNote: 'One slot width is ordered for a range that runs from a 2 mm wedding band to an 8 mm signet, and no single slot fits both.',
    context: 'proposals and wedding retail, where the box is opened in front of someone and the moment does not get a second take',
    detail: 'Slot width has to be specified against band width. It is the one measurement in this category that decides whether the box works.',
    spec: 'Rigid board with a sprung slotted pillow, since a hinged rigid lid is part of what the moment expects.',
    press: 'A clean hinge and a lid that stays open matter more than the printing. The box is held open one-handed for a long moment.',
    pairs: ['earring-boxes', 'pendant-boxes', 'jewellery-boxes'],
    ask: {
      q: 'Will one ring box fit my whole range?',
      a: 'The outer box will; the pillow slot will not. Tell us the narrowest and widest band you sell and we will normally specify two slot widths behind one identical exterior — the customer sees one box, and both rings are held properly.',
    },
  },
  'watch-boxes': {
    holds: 'a watch head and strap where the case depth varies far more than the diameter does',
    sizeNote: 'Around 4.5 × 4.5 in on the footprint, but the depth is the live number — a dress watch and a dive watch differ by half an inch or more through the case.',
    failure: 'The lid presses on the crown or the crystal because the box was specified from the face diameter and the case thickness was never measured.',
    buyerNote: 'Watches are compared by face size in the trade, so the depth — which is what actually decides the box — is the measurement nobody sends.',
    context: 'watch retail and gifting, where the box is frequently kept and reused as storage',
    detail: 'A bolster the strap wraps around, with clearance above the crystal. Measure the case at its thickest point, including the crown and any pushers.',
    spec: 'Rigid board with a wrapped sheet and a firm cushion — the cushion has to hold shape under a heavy watch rather than compress under it.',
    press: 'Interior finish and the feel of the hinge carry this category. A box that is going to be kept is judged on how it closes.',
    pairs: ['smartwatch-boxes', 'jewellery-boxes', 'bracelet-boxes'],
    ask: {
      q: 'What measurement do you actually need for a watch box?',
      a: 'Case thickness at its thickest point, including the crown and pushers, plus the lug-to-lug length. Face diameter is the figure most buyers send and it is the one that matters least — depth is what determines whether the lid clears the crystal.',
    },
  },
}
