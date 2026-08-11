import { C, type Place } from './types'

/** Cities, second group. */
export const citiesB: Place[] = [
  C({
    slug: 'philadelphia',
    name: 'Philadelphia',
    state: 'Pennsylvania',
    stateSlug: 'pennsylvania',
    variant: 'maker-led',
    sections: ['overview', 'industries', 'formats', 'checklist', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Philadelphia',
    h1: 'Packaging for Philadelphia’s independent food and drink scene',
    eyebrow: 'Philadelphia · Pennsylvania',
    lede: 'Pennsylvania’s packaging reputation is built on regulated manufacturing. Philadelphia itself sends us something quite different: small producers, market stalls and neighbourhood brands buying a few hundred at a time.',
    metaTitle: 'Custom Packaging Philadelphia | Independent Food & Drink',
    metaDescription: 'Custom packaging for Philadelphia independent food producers, bakeries, roasters and market traders. Short runs from 100 units with flexible artwork.',
    sectors: ['Independent food producers', 'Coffee roasting', 'Bakery and confectionery', 'Neighbourhood retail'],
    overview: {
      h: 'Growing out of a market stall',
      body: [
        'A recognisable Philadelphia pattern: a producer starts at a market with hand-labelled jars, gets into two or three shops, and suddenly needs packaging that looks like a product rather than a hobby. The quantities are still small and the budget is real.',
        'The right first step is usually not a fully printed carton. A well-chosen base pack with a strong printed label achieves most of the visual jump for a fraction of the cost, and it leaves room to upgrade once the volume justifies it.',
      ],
    },
    industries: {
      h: 'What Philadelphia producers package',
      body: [
        'Food and drink dominate, almost entirely at small scale.',
      ],
      items: [
        { name: 'Independent food producers', detail: 'Preserves, sauces and specialty goods moving from market stalls into retail, where the label carries the brand.' },
        { name: 'Coffee roasting', detail: 'A dense roasting scene needing barrier bags and valves, with frequent single-origin changeovers.' },
        { name: 'Bakery and confectionery', detail: 'Presentation boxes and sleeves in short runs, often with seasonal designs.' },
        { name: 'Neighbourhood retail', detail: 'Shops buying bags and tissue as a coherent set rather than as separate items.' },
      ],
    },
    checklist: {
      h: 'Making a first proper packaging order count',
      intro: 'What to settle before spending the budget.',
      items: [
        'Whether a printed label on a stock base gets you most of the way for now.',
        'How many product variants the label needs to cover.',
        'Whether the pack has to survive shipping or only a shopping bag.',
        'How much stock you can physically store.',
        'Whether the design will still work when you add two more products.',
      ],
    },
    logistics: {
      h: 'Delivery into the city',
      body: [
        'Ground freight reaches Philadelphia in 2 to 4 business days. The city sits on major East Coast corridors and most addresses take delivery without difficulty.',
        'For small producers the practical question is usually storage rather than transit. We can split a run into scheduled drops if a few hundred boxes is more than your space allows.',
      ],
    },
    ordering: {
      h: 'Placing a small Philadelphia order',
      body: [
        'Tell us what you are packing, how many variants you have now, and how many you expect within a year. Ranges here grow quickly and a label designed for one product rarely stretches to five.',
        'Send a photo of the current pack if there is one. It tells us more about the problem than a description usually does.',
      ],
    },
    formats: {
      h: 'Formats for small producers',
      intro: 'Low commitment, easy to vary.',
      picks: [
        { slug: 'custom-labels', why: 'The cheapest route to a professional-looking range on a stock base.' },
        { slug: 'custom-pouches', why: 'Barrier bags for roasters and dry goods.' },
        { slug: 'custom-food-packaging', why: 'Bakery and confectionery presentation formats.' },
        { slug: 'custom-bags', why: 'Retail carry bags for neighbourhood shops.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-cost-factors/', anchor: 'where the money goes on a small run', note: 'Useful before committing a first real budget.' },
      { href: '/samples/', anchor: 'seeing the stock before you commit', note: 'Board and label finish are hard to judge on screen.' },
    ],
    nearby: [
      { slug: 'pennsylvania', why: 'Statewide context, including regulated and repeat-run work.' },
      { slug: 'new-jersey', why: 'Adjacent market across the river, with warehousing capacity.' },
      { slug: 'new-york-city', why: 'A comparable independent scene with the same storage constraints.' },
    ],
    faqs: [
      { q: 'Should I start with printed boxes or printed labels?', a: 'Labels, in most cases. A strong printed label on a well-chosen stock base achieves most of the visual jump from hand-made to retail-ready, and costs a fraction of a fully printed carton. Upgrade when the volume justifies it.' },
      { q: 'What is the smallest order you will take?', a: 'A flat 100 units on any format. There is no small-order surcharge, and below about 1,000 units we print digitally, which removes plate costs entirely.' },
      { q: 'Can one label design cover several products?', a: 'Yes, and it is worth designing for from the start. A common layout with a variable product name and colour lets you add lines without redesigning. Ranges grow faster than most producers expect.' },
      { q: 'Do you have a shop in Philadelphia?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Philadelphia or anywhere else. We post physical samples so you can assess the material directly.' },
      { q: 'Can you supply coffee bags with degassing valves?', a: 'Yes. Freshly roasted coffee off-gasses, and without a one-way valve the bag inflates. It is a standard option on our pouch formats.' },
      { q: 'How long will a small order take?', a: 'Production is 3 to 5 business days after artwork approval, plus 2 to 4 days freight into Philadelphia.' },
      { q: 'Can you deliver in stages if I have no storage?', a: 'Yes. We can produce the run and schedule drops against your space rather than delivering everything at once.' },
      { q: 'I do not have professional artwork. Can you still help?', a: 'We can work from what you have and tell you honestly whether it will reproduce well. We do not offer full design services, but we will flag resolution, colour and bleed problems before anything goes to print.' },
      { q: 'Will my packaging survive being shipped?', a: 'Only if it is specified for it. A retail pack designed for a shopping bag is not built for a carrier network. If you ship as well as sell in person, tell us and we will specify accordingly or recommend a protective outer.' },
      { q: 'How much should a first packaging order cost?', a: 'Prices start from $0.30 per piece at large volumes, and a small first run sits above that. We quote each option separately, so you can see whether a label route or a printed carton fits the budget you have.' },
    ],
    cta: {
      h: 'Quote a Philadelphia run',
      body: 'Tell us what you are packing and how many variants you expect within a year. We will recommend the route that fits the budget.',
    },
  }),

  C({
    slug: 'san-antonio',
    name: 'San Antonio',
    state: 'Texas',
    stateSlug: 'texas',
    variant: 'logistics-hub',
    sections: ['logistics', 'overview', 'industries', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging San Antonio',
    h1: 'Packaging supply at the southern end of the I-35 corridor',
    eyebrow: 'San Antonio · Texas',
    lede: 'San Antonio anchors the southern end of the I-35 fulfilment corridor and sits close enough to the border that a good deal of what we ship here is destined to cross it.',
    metaTitle: 'Custom Packaging San Antonio | I-35 Corridor Supply',
    metaDescription: 'Custom packaging for San Antonio distribution, food service and manufacturing. Corridor freight, heat-stable specifications and bulk runs.',
    sectors: ['Distribution and logistics', 'Food service and hospitality', 'Manufacturing', 'Cross-border trade'],
    logistics: {
      h: 'A corridor position with a border behind it',
      body: [
        'San Antonio sits at the southern end of the I-35 corridor, with Austin, Fort Worth and Dallas strung along it northward and the Mexican border a short run south. Ground freight from our partners typically arrives in 2 to 5 business days.',
        'For packaging that will continue across the border, the relevant question is what happens to it after our delivery. If it will be filled here and shipped south, or filled south and returned north, tell us — extra handling stages change the board grade we recommend.',
      ],
    },
    overview: {
      h: 'Counting the handling stages',
      body: [
        'Most packaging specifications assume one journey: our dock to your dock, then fill and ship. Cross-border and corridor work often involves several more — a consolidation warehouse, a customs hold, a second trailer.',
        'Each additional handling stage is another chance for a corner to be crushed. It is not a reason to over-specify everywhere, but it is worth counting the stages honestly and adding grade only where the count is genuinely high.',
      ],
    },
    industries: {
      h: 'What San Antonio buys',
      body: [
        'Distribution and food service lead, with manufacturing behind them.',
      ],
      items: [
        { name: 'Distribution and logistics', detail: 'Corridor operations buying shippers and mailers at volume, often for onward consolidation.' },
        { name: 'Food service and hospitality', detail: 'A large tourism-supported restaurant sector buying takeaway and catering formats.' },
        { name: 'Manufacturing', detail: 'Component and finished-goods packaging where handling count drives the specification.' },
        { name: 'Cross-border trade', detail: 'Goods moving south or arriving north, with extra handling stages in between.' },
      ],
    },
    ordering: {
      h: 'Quoting corridor work',
      body: [
        'Tell us the full journey the packaging takes, not just the delivery address. The number of times a pack is handled matters more to the specification than the distance it covers.',
        'For high-volume corridor supply we can phase deliveries against a consolidation schedule rather than sending a full run at once.',
      ],
    },
    formats: {
      h: 'Formats for corridor supply',
      intro: 'Shipping and food-service led.',
      picks: [
        { slug: 'custom-mailers', why: 'Core shipping format for corridor and fulfilment operations.' },
        { slug: 'custom-food-packaging', why: 'Takeaway and catering formats for the hospitality sector.' },
        { slug: 'custom-packaging-inserts', why: 'Protection where extra handling stages raise the risk.' },
        { slug: 'custom-printed-cups', why: 'High-frequency food-service consumables.' },
      ],
    },
    resources: [
      { href: '/materials/', anchor: 'flute grades against handling count', note: 'How many journeys a board grade will take.' },
      { href: '/shipping-information/', anchor: 'how we schedule phased deliveries', note: 'Relevant for consolidation-based supply.' },
    ],
    nearby: [
      { slug: 'texas', why: 'Statewide context, including the heat specification.' },
      { slug: 'austin', why: 'The next market north along the same corridor.' },
      { slug: 'houston', why: 'The nearest very large Texas market.' },
    ],
    faqs: [
      { q: 'Does extra handling change the board I need?', a: 'Yes. Each handling stage is another opportunity for corner and edge damage. Count the stages honestly — dock, consolidation, customs, second trailer — and we will specify against that count rather than against distance.' },
      { q: 'Can you supply packaging that will cross the border?', a: 'We supply the packaging; we do not handle customs or export documentation. What we can do is specify a board that survives the extra handling those journeys involve.' },
      { q: 'Do you have a facility in San Antonio?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in San Antonio or anywhere in Texas. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to San Antonio take?', a: 'Ground freight is typically 2 to 5 business days after the 3 to 5 business days of production.' },
      { q: 'Can you phase deliveries against a consolidation schedule?', a: 'Yes. Rather than delivering a full run at once we can schedule drops to match how you consolidate, which reduces storage pressure.' },
      { q: 'What is the minimum order in San Antonio?', a: 'A flat 100 units on any format.' },
      { q: 'Does Texas heat affect packaging stored here?', a: 'It affects laminated cartons, where adhesives soften above roughly 100°F. Plain corrugated is largely unaffected. If your stock is laminated and stored unconditioned, ask for a heat-stable adhesive.' },
      { q: 'Can you deliver to several corridor sites on one order?', a: 'Yes. Give us the split at quoting — the corridor is long enough that each drop is a separate freight leg and it needs costing properly.' },
      { q: 'Do you supply plain shippers as well as printed?', a: 'Yes. For consolidation and onward shipping, plain corrugated is frequently the sensible choice.' },
      { q: 'How much does packaging cost in San Antonio?', a: 'From $0.30 per piece at large volumes. Corridor quantities often reach the bands where unit cost drops sharply.' },
    ],
    cta: {
      h: 'Quote a San Antonio supply',
      body: 'Describe the whole journey, not just the delivery address. The handling count decides the specification.',
    },
  }),

  C({
    slug: 'san-diego',
    name: 'San Diego',
    state: 'California',
    stateSlug: 'california',
    variant: 'sector-spotlight',
    sections: ['industries', 'overview', 'formats', 'demandTable', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging San Diego',
    h1: 'Packaging for San Diego biotech and craft beverage',
    eyebrow: 'San Diego · California',
    lede: 'San Diego pairs a serious life-sciences cluster with one of the country’s densest craft brewing scenes. They have almost nothing in common except that both order in small, frequent batches.',
    metaTitle: 'Custom Packaging San Diego | Biotech & Craft Beverage',
    metaDescription: 'Custom packaging for San Diego life sciences, craft breweries and supplement brands. Fitted inserts, seasonal variants and short-run economics.',
    sectors: ['Life sciences and biotech', 'Craft brewing', 'Supplements and nutrition', 'Surf and outdoor brands'],
    industries: {
      h: 'Two clusters, one buying pattern',
      body: [
        'Different products entirely, but the same commercial rhythm: small batches, frequent repeats, and a strong dislike of tooling costs.',
      ],
      items: [
        { name: 'Life sciences and biotech', detail: 'Kit and instrument packaging where a fitted insert does the work and the outer is often plain.' },
        { name: 'Craft brewing', detail: 'Carriers, sleeves and labels with constant seasonal changeover, which makes print setup cost the dominant concern.' },
        { name: 'Supplements and nutrition', detail: 'Cartons carrying regulatory copy alongside brand design, sold through both retail and DTC.' },
        { name: 'Surf and outdoor brands', detail: 'Apparel and accessory packaging expected to look minimal and be recyclable.' },
      ],
    },
    overview: {
      h: 'Designing around frequent change',
      body: [
        'When a buyer reorders every few weeks with a different design, the cost that matters is not the unit price but the setup charge each change incurs. A brewery running eight seasonal releases a year pays eight setups if the whole pack is printed.',
        'The structural answer is the same in both clusters here: hold one constant element and vary a small one. A constant carrier with a variable sleeve, or a constant outer with a variable label, turns eight setups into eight cheap ones.',
      ],
    },
    demandTable: {
      h: 'Where setup cost lands',
      intro: 'Why the constant-plus-variable approach saves money.',
      head: ['Approach', 'Setup cost per change', 'Best for'],
      rows: [
        ['Fully printed pack, redesigned each time', 'Full setup', 'Rare changes, high volume'],
        ['Constant pack, variable printed sleeve', 'Small setup', 'Frequent seasonal releases'],
        ['Constant pack, variable label', 'Smallest setup', 'Very frequent or small changes'],
        ['Digital print throughout', 'No plate cost', 'Many variants at low volume'],
      ],
    },
    logistics: {
      h: 'Freight into San Diego',
      body: [
        'Ground delivery typically takes 3 to 6 business days. The metropolitan area takes palletised freight without difficulty.',
        'Many local breweries and labs receive at premises without a dock. Tell us the address type and we will ship cartons rather than a pallet where that is easier.',
      ],
    },
    ordering: {
      h: 'Quoting a San Diego order',
      body: [
        'Tell us how often the design changes. That single answer decides whether we recommend a fully printed pack or a constant base with a variable element.',
        'For life-sciences work, send the item geometry — the insert is the design problem and the outer follows from it.',
      ],
    },
    formats: {
      h: 'Formats for both San Diego clusters',
      intro: 'Split across the two markets.',
      picks: [
        { slug: 'custom-beverage-packaging', why: 'Carriers and sleeves for a dense craft brewing scene.' },
        { slug: 'custom-packaging-inserts', why: 'Fitted protection for laboratory kits and instruments.' },
        { slug: 'custom-labels', why: 'The cheapest way to run frequent seasonal variants.' },
        { slug: 'wellness-packaging', why: 'Supplement cartons for retail and DTC channels.' },
      ],
    },
    resources: [
      { href: '/printing-options/', anchor: 'what a setup charge actually covers', note: 'The cost that dominates frequent-change work.' },
      { href: '/resources/packaging-insert-guide/', anchor: 'matching an insert to an instrument', note: 'Where life-sciences briefs start.' },
    ],
    nearby: [
      { slug: 'california', why: 'Statewide context, including compliance panel requirements.' },
      { slug: 'los-angeles', why: 'The larger California market a short distance north.' },
      { slug: 'phoenix', why: 'The nearest inland distribution market.' },
    ],
    faqs: [
      { q: 'How do I run frequent seasonal releases affordably?', a: 'Keep one element constant and vary a small one. A constant carrier with a variable printed sleeve, or a constant pack with a variable label, means each release carries a small setup rather than a full one.' },
      { q: 'What is a setup charge and why does it matter so much?', a: 'It covers preparing the press for your specific job — plates on offset, or file and colour setup on digital. It is charged per design, so a brand running eight designs a year pays it eight times regardless of quantity.' },
      { q: 'Can you package laboratory instruments?', a: 'Yes. The fitted insert is the real design work; send drawings or a sample and we will specify the cavity around the geometry, then choose an outer to suit.' },
      { q: 'Do you have a facility in San Diego?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in San Diego. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to San Diego take?', a: 'Ground freight is typically 3 to 6 business days after the 3 to 5 business days of production.' },
      { q: 'Can you deliver to a brewery without a loading dock?', a: 'Yes. Tell us at quoting and we will ship cartons rather than a pallet, which most premises can receive normally.' },
      { q: 'What is the minimum order in San Diego?', a: 'A flat 100 units on any format, which suits both a limited beer release and a small instrument batch.' },
      { q: 'Do I need a Prop 65 panel on supplement packaging?', a: 'It depends on your product and is a legal question for you. What we can do is reserve the panel area on the dieline so adding it later does not force a redesign.' },
      { q: 'Are recyclable options available for outdoor brands?', a: 'Yes — recycled paperboard, recyclable coated stock and certified compostable. They are three separate claims with three separate evidence requirements, so tell us which you intend to print.' },
      { q: 'How much does packaging cost in San Diego?', a: 'From $0.30 per piece at large volumes. For frequent-change work, the setup cost per design usually matters more to your annual spend than the unit price does.' },
    ],
    cta: {
      h: 'Quote a San Diego run',
      body: 'Tell us how often the design changes. That decides whether to print the whole pack or vary a sleeve.',
    },
  }),

  C({
    slug: 'dallas',
    name: 'Dallas',
    state: 'Texas',
    stateSlug: 'texas',
    variant: 'ecommerce-led',
    sections: ['overview', 'demandTable', 'industries', 'formats', 'logistics', 'checklist', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Dallas',
    h1: 'Right-sized shipping packaging for Dallas-Fort Worth sellers',
    eyebrow: 'Dallas · Texas',
    lede: 'Dallas has enough carrier capacity that shipping is rarely a bottleneck. What it is, for most sellers here, is the largest single line on the packaging budget.',
    metaTitle: 'Custom Packaging Dallas | E-commerce & Shipping',
    metaDescription: 'Custom shipping packaging for Dallas e-commerce sellers and distributors. Right-sized mailers, fitted inserts and lower dimensional weight per parcel.',
    sectors: ['E-commerce and DTC', 'Apparel and accessories', 'Distribution', 'Consumer electronics'],
    overview: {
      h: 'The box is not the cost',
      body: [
        'Sellers routinely negotiate hard on the unit price of a mailer and never look at what that mailer costs them in freight. For most DTC operations the shipping bill attached to a box over a year is several times the purchase price of the box itself.',
        'That makes the useful question different: not what does this box cost, but what does this box cost to ship, and could a different one cost less. Usually it could, because most boxes in use were inherited rather than chosen.',
      ],
    },
    demandTable: {
      h: 'Where a Dallas seller’s packaging money actually goes',
      intro: 'Rough proportions over a year of shipping.',
      head: ['Line', 'Relative weight', 'How much control you have'],
      rows: [
        ['Freight per parcel', 'Largest', 'High — via pack size'],
        ['Damage and replacement', 'Variable, often underestimated', 'High — via inserts'],
        ['Box unit price', 'Modest', 'Low — commodity pricing'],
        ['Void fill and consumables', 'Small but avoidable', 'High — right-size instead'],
        ['Print on the outer', 'Small', 'A brand choice, not a cost lever'],
      ],
    },
    industries: {
      h: 'What ships from Dallas',
      body: [
        'A broad DTC base with apparel particularly well represented.',
      ],
      items: [
        { name: 'E-commerce and DTC', detail: 'Sellers shipping nationally where dimensional weight applies to every parcel, every day.' },
        { name: 'Apparel and accessories', detail: 'Soft goods that can often move to a lighter, flatter format than the box currently in use.' },
        { name: 'Distribution', detail: 'Operations reshipping at scale, buying mailers and shippers by the pallet.' },
        { name: 'Consumer electronics', detail: 'Products where fitted protection matters more than board grade.' },
      ],
    },
    checklist: {
      h: 'Finding the saving in an existing pack',
      intro: 'Five checks, in the order worth doing them.',
      items: [
        'Measure the product and compare it to the box actually in use.',
        'Weigh a packed parcel and find which dimensional band it sits in.',
        'Work out how far you are from the band below.',
        'Check whether soft goods are travelling in a box that could be a flat mailer.',
        'Separate crush damage from movement damage before changing board grade.',
      ],
    },
    logistics: {
      h: 'Freight in and out of DFW',
      body: [
        'Ground freight into Dallas runs 2 to 5 business days, and the metropolitan area has enough carrier capacity that inbound scheduling is straightforward.',
        'Outbound is where the position pays. From Dallas most of the country is reachable quickly, which is why so much distribution capacity sits here.',
      ],
    },
    ordering: {
      h: 'Quoting a Dallas shipping pack',
      body: [
        'Send product dimensions rather than your current box, and your damage rate if you track one. Quoting a replacement for the current box just repeats whatever decision produced it.',
        'If you ship a range of product sizes, send the range. Consolidating to fewer box sizes usually reduces both cost and complexity.',
      ],
    },
    formats: {
      h: 'Formats for Dallas shippers',
      intro: 'Shipping-led, with protection where it earns its cost.',
      picks: [
        { slug: 'custom-mailers', why: 'The core format, where right-sizing produces the recurring saving.' },
        { slug: 'custom-apparel-packaging', why: 'Flat formats for soft goods currently shipping in boxes.' },
        { slug: 'custom-packaging-inserts', why: 'Cutting damage without adding board.' },
        { slug: 'electronics-packaging', why: 'Fitted protection for devices and accessories.' },
      ],
    },
    resources: [
      { href: '/resources/custom-packaging-size-guide/', anchor: 'moving down a dimensional weight band', note: 'Where the annual saving comes from.' },
      { href: '/resources/packaging-cost-factors/', anchor: 'the costs that are not on the invoice', note: 'Freight and damage against unit price.' },
    ],
    nearby: [
      { slug: 'fort-worth', why: 'The adjacent market with heavy distribution capacity.' },
      { slug: 'texas', why: 'Statewide context, including the heat specification.' },
      { slug: 'austin', why: 'A different Texas buyer profile, weighted to independents.' },
    ],
    faqs: [
      { q: 'How much can right-sizing a box actually save?', a: 'It depends how far you currently are from the band below, but for a seller shipping thousands of parcels a year the saving typically dwarfs any difference in the unit price of the box. It is the first thing worth checking.' },
      { q: 'Can soft goods ship in something flatter than a box?', a: 'Very often, yes. Apparel and other soft goods frequently move in cartons out of habit. A flat mailer removes both volume and weight, and for non-fragile items the protection is usually sufficient.' },
      { q: 'Do you have a warehouse in Dallas?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Dallas. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'Should I print my shipping mailers?', a: 'It is a brand decision, not a cost one — print does not change freight or protection. If the unboxing matters to your customers it can be worth it; for business deliveries it usually is not.' },
      { q: 'How long does delivery to Dallas take?', a: 'Ground freight is typically 2 to 5 business days after the 3 to 5 business days of production.' },
      { q: 'How many box sizes should I stock?', a: 'Usually fewer than you do. Each extra size adds purchasing, storage and pick complexity. Send us your product range and we will say honestly whether it can consolidate.' },
      { q: 'What is the minimum order in Dallas?', a: 'A flat 100 units on any format, which is enough to trial a smaller mailer against real shipments before switching a line.' },
      { q: 'Will a lighter box increase my damage rate?', a: 'Only if crushing is what is damaging your product. If damage comes from movement inside the box, a fitted insert lets you go lighter without any increase. Check which failure you actually have first.' },
      { q: 'Can you match an existing box exactly?', a: 'Yes — send the dimensions or a sample. But it is worth asking whether the existing box is right before we reproduce it.' },
      { q: 'How much does shipping packaging cost in Dallas?', a: 'From $0.30 per piece at large volumes. For a shipper the more useful figure is the total cost per parcel including freight, which we are happy to work through with you.' },
    ],
    cta: {
      h: 'Audit a Dallas shipping pack',
      body: 'Send the product dimensions and your damage rate. We will tell you whether the box can shrink and what it saves.',
    },
  }),

  C({
    slug: 'austin',
    name: 'Austin',
    state: 'Texas',
    stateSlug: 'texas',
    variant: 'maker-led',
    sections: ['overview', 'industries', 'checklist', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Austin',
    h1: 'Packaging for Austin’s independent brands and small producers',
    eyebrow: 'Austin · Texas',
    lede: 'Austin buys packaging the way it buys most things — in smaller quantities, with a strong preference for something that does not look like everyone else’s.',
    metaTitle: 'Custom Packaging Austin | Independent Brands',
    metaDescription: 'Custom packaging for Austin independent food, drink, beauty and tech brands. Short runs from 100 units with distinctive structures and finishes.',
    sectors: ['Independent food and drink', 'Craft beverage', 'Beauty and personal care', 'Technology startups'],
    overview: {
      h: 'Distinctive without being expensive',
      body: [
        'The Austin brief is usually some version of "we want it to feel different, and we cannot spend like a national brand." That is achievable, but the money has to go somewhere specific rather than being spread thinly.',
        'The cheapest ways to look different are structural rather than decorative: an unusual opening, an unexpected proportion, an uncoated stock against a saturated ink. Those cost little. Full-coverage foil across a short run costs a great deal and often reads as less considered.',
      ],
    },
    industries: {
      h: 'What Austin brands make',
      body: [
        'Independent food and drink lead, with beauty and technology behind them.',
      ],
      items: [
        { name: 'Independent food and drink', detail: 'Small producers selling locally and online, usually with a range that grows quickly.' },
        { name: 'Craft beverage', detail: 'Breweries and distilleries with constant limited releases, where setup cost per design dominates.' },
        { name: 'Beauty and personal care', detail: 'Small-batch brands where the pack has to justify a premium against national competitors.' },
        { name: 'Technology startups', detail: 'Hardware and accessory packaging, often a first production run with no packaging experience behind it.' },
      ],
    },
    checklist: {
      h: 'Spending a limited packaging budget well',
      intro: 'Where the money returns most on a short run.',
      items: [
        'Structure first — an unusual opening or proportion costs almost nothing extra.',
        'One strong material choice beats three weak decorative ones.',
        'Uncoated stock with a saturated ink often reads better than a cheap gloss.',
        'Spend on the surface the customer touches, not the one they never see.',
        'Leave the range room to grow so the second product does not need a redesign.',
      ],
    },
    logistics: {
      h: 'Delivery into Austin',
      body: [
        'Ground freight reaches Austin in 2 to 5 business days. The city sits on the I-35 corridor with good carrier capacity.',
        'Small producers here often receive at studios or shared units without a dock, so tell us the address type and we will ship in cartons rather than on a pallet.',
      ],
    },
    ordering: {
      h: 'Quoting an Austin brief',
      body: [
        'Tell us the budget per unit as well as the quantity. It lets us tell you what is achievable rather than quoting something you were never going to buy.',
        'Send the product itself if you can, or good photographs with dimensions. Structure ideas come more easily from the object than from a description.',
      ],
    },
    formats: {
      h: 'Formats for Austin independents',
      intro: 'Short-run friendly, structurally interesting.',
      picks: [
        { slug: 'custom-gift-boxes', why: 'Rigid and unusual structures where the opening is part of the product.' },
        { slug: 'custom-beverage-packaging', why: 'Carriers and sleeves for constant limited releases.' },
        { slug: 'custom-sleeves', why: 'A distinctive printed element over a simple base pack.' },
        { slug: 'custom-labels', why: 'Range variants without a new setup each time.' },
      ],
    },
    resources: [
      { href: '/resources/box-style-guide/', anchor: 'structures that read as considered', note: 'Where a limited budget goes furthest.' },
      { href: '/finishes-and-add-ons/', anchor: 'which finishes justify their cost at low volume', note: 'Honest about what a short run can carry.' },
    ],
    nearby: [
      { slug: 'texas', why: 'Statewide context, including bulk and heat considerations.' },
      { slug: 'san-antonio', why: 'The next corridor market south.' },
      { slug: 'dallas', why: 'A larger Texas market with a distribution focus.' },
    ],
    faqs: [
      { q: 'How do I make packaging look distinctive on a small budget?', a: 'Spend on structure rather than decoration. An unusual opening, an unexpected proportion or a well-chosen uncoated stock costs little and reads as considered. Full-coverage foil on a short run costs a lot and often reads as less so.' },
      { q: 'What is the minimum order in Austin?', a: 'A flat 100 units on any format, with no small-order surcharge. Below about 1,000 units we print digitally, which removes plate costs.' },
      { q: 'Can you work to a budget per unit?', a: 'Yes, and it is the most useful thing you can tell us. Give us a target and we will say what is achievable at it rather than quoting a specification you were never going to buy.' },
      { q: 'Do you have a facility in Austin?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Austin. We post physical samples so you can assess material and print directly.' },
      { q: 'How do I keep costs down across several product variants?', a: 'Keep one structure and vary a printed sleeve or a label. Each variant then carries a small setup rather than a full one, which matters far more than unit price when the range is growing.' },
      { q: 'Can you deliver to a studio without a loading dock?', a: 'Yes. Tell us at quoting and we will ship cartons rather than a pallet.' },
      { q: 'How long does an Austin order take?', a: 'Production is 3 to 5 business days after artwork approval, plus 2 to 5 days freight.' },
      { q: 'We have never ordered packaging before. Where do we start?', a: 'With the product dimensions and how it will be sold or shipped. From those two facts we can propose a structure and tell you what it costs, which is usually enough to make the next decision.' },
      { q: 'Is uncoated stock cheaper than coated?', a: 'Not always, but it often looks more expensive than it is. What matters more is matching the stock to the ink and the brand — a saturated colour on uncoated board reads very differently to the same colour on gloss.' },
      { q: 'How much does a distinctive small run cost?', a: 'From $0.30 per piece at large volumes, and a short run sits above that. We quote each element separately — structure, print, finish — so you can see which parts are worth keeping.' },
    ],
    cta: {
      h: 'Quote an Austin project',
      body: 'Tell us your budget per unit as well as the quantity. We will tell you honestly what is achievable at it.',
    },
  }),

  C({
    slug: 'jacksonville',
    name: 'Jacksonville',
    state: 'Florida',
    stateSlug: 'florida',
    variant: 'logistics-hub',
    sections: ['logistics', 'industries', 'overview', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Jacksonville',
    h1: 'Port-side packaging supply for Jacksonville distribution',
    eyebrow: 'Jacksonville · Florida',
    lede: 'Jacksonville is a port and distribution city first. Most packaging we ship here is bought by operations that will fill it and move it on within days.',
    metaTitle: 'Custom Packaging Jacksonville | Port & Distribution',
    metaDescription: 'Custom packaging for Jacksonville distribution, logistics and food operations. Fast turnaround stock, moisture-resistant board and bulk runs.',
    sectors: ['Port and distribution', 'Logistics and third-party fulfilment', 'Food processing', 'Healthcare supply'],
    logistics: {
      h: 'Fast turn, low storage',
      body: [
        'Ground delivery into Jacksonville typically takes 3 to 5 business days, quicker than most Florida destinations because the city sits at the top of the peninsula rather than down it.',
        'Distribution operations generally want packaging to arrive close to when it is needed rather than sitting in stock. That works in Florida’s favour — packaging that turns over quickly never has time to absorb the humidity that damages long-stored board.',
      ],
    },
    industries: {
      h: 'What Jacksonville handles',
      body: [
        'Port and distribution activity dominates, with food processing alongside.',
      ],
      items: [
        { name: 'Port and distribution', detail: 'Repack and consolidation operations buying shippers and cases at volume.' },
        { name: 'Logistics and third-party fulfilment', detail: 'Operations shipping on behalf of multiple clients, needing plain stock and fast replenishment.' },
        { name: 'Food processing', detail: 'Producers needing food-contact compliant materials with moisture resistance built in.' },
        { name: 'Healthcare supply', detail: 'Distribution requiring documented specifications and consistent repeats.' },
      ],
    },
    overview: {
      h: 'Fast rotation changes the humidity calculation',
      body: [
        'Elsewhere in Florida we recommend moisture-resistant coatings as a near-default, because stock often sits for months in unconditioned space. For a distribution operation turning packaging over in weeks, that recommendation softens considerably.',
        'It is worth being honest about which situation you are in. If your packaging is consumed within a month of delivery, you may not need to pay for a barrier you will never benefit from.',
      ],
    },
    ordering: {
      h: 'Quoting a Jacksonville supply',
      body: [
        'Tell us how quickly the packaging is consumed after delivery. That decides whether a moisture-resistant specification earns its cost here.',
        'For continuous operations we can schedule repeat deliveries against consumption rather than quoting one large run.',
      ],
    },
    formats: {
      h: 'Formats for distribution operations',
      intro: 'Volume and turnover led.',
      picks: [
        { slug: 'custom-mailers', why: 'Core shipping format for fulfilment operations.' },
        { slug: 'custom-packaging-inserts', why: 'Protection for repack and consolidation work.' },
        { slug: 'custom-food-packaging', why: 'Food-contact compliant formats for processing operations.' },
        { slug: 'custom-display-boxes', why: 'Retail-ready cases for product moving onward to stores.' },
      ],
    },
    resources: [
      { href: '/shipping-information/', anchor: 'scheduling deliveries against consumption', note: 'How phased supply works in practice.' },
      { href: '/materials/', anchor: 'when a moisture barrier is worth paying for', note: 'It depends on how long stock actually sits.' },
    ],
    nearby: [
      { slug: 'florida', why: 'Statewide context, including the humidity specification.' },
      { slug: 'georgia', why: 'The neighbouring freight hub just north.' },
      { slug: 'miami', why: 'The other major Florida distribution market.' },
    ],
    faqs: [
      { q: 'Do I need moisture-resistant board in Jacksonville?', a: 'Only if the stock sits. Florida humidity damages board over months, not days. If your packaging is consumed within a few weeks of delivery, you may be paying for a barrier you never benefit from — and we will tell you so.' },
      { q: 'Can you schedule deliveries against consumption?', a: 'Yes. For continuous operations we can phase production and delivery to match how quickly you use stock, rather than delivering one large run you then have to store.' },
      { q: 'How long does delivery to Jacksonville take?', a: 'Ground freight is typically 3 to 5 business days after the 3 to 5 business days of production — quicker than South Florida because of the position at the top of the peninsula.' },
      { q: 'Do you have a facility in Jacksonville?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Jacksonville or anywhere in Florida. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'Do you supply plain unprinted shippers?', a: 'Yes, and for third-party fulfilment it is usually the sensible choice, since one plain stock serves every client.' },
      { q: 'What is the minimum order in Jacksonville?', a: 'A flat 100 units on any format, though distribution quantities here are typically far above it.' },
      { q: 'Can you supply food-contact compliant materials?', a: 'Yes. Tell us whether contact is direct or through a liner, since it changes which stocks are available and what documentation we can provide.' },
      { q: 'Can hurricane season affect deliveries?', a: 'It can. A named storm closes freight lanes for days at a time. If a delivery is critical, tell us and we will build slack into the schedule rather than quoting the tightest timeline.' },
      { q: 'Can you hold stock for us?', a: 'We manufacture to order rather than warehousing finished goods. For a continuous requirement we phase production against your consumption instead, which achieves the same result without you paying to store it.' },
      { q: 'How much does distribution packaging cost?', a: 'From $0.30 per piece at large volumes. Plain corrugated at pallet quantities sits at the lower end, since there is no print or finishing to pay for.' },
    ],
    cta: {
      h: 'Quote a Jacksonville supply',
      body: 'Tell us how quickly you consume packaging after delivery. It decides whether a moisture barrier is worth paying for.',
    },
  }),

  C({
    slug: 'fort-worth',
    name: 'Fort Worth',
    state: 'Texas',
    stateSlug: 'texas',
    variant: 'logistics-hub',
    sections: ['logistics', 'overview', 'industries', 'demandTable', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Fort Worth',
    h1: 'Bulk packaging runs for Fort Worth distribution and manufacturing',
    eyebrow: 'Fort Worth · Texas',
    lede: 'Fort Worth buys in larger quantities than almost any market we serve. At those volumes the decisions that matter are made before anyone talks about design.',
    metaTitle: 'Custom Packaging Fort Worth | Bulk & Distribution',
    metaDescription: 'Custom packaging for Fort Worth distribution, manufacturing and food operations. Bulk run economics, phased delivery and heat-stable specifications.',
    sectors: ['Distribution and warehousing', 'Manufacturing', 'Food and agriculture', 'Aviation and industrial supply'],
    logistics: {
      h: 'Volume in, volume out',
      body: [
        'Ground freight into Fort Worth runs 2 to 5 business days, and the area has substantial distribution infrastructure that makes palletised delivery routine at almost any scale.',
        'At bulk quantities the constraint moves from freight to storage. A large run occupies real warehouse space even flat-packed, so we frequently phase deliveries across weeks rather than sending everything at once.',
      ],
    },
    overview: {
      h: 'What actually changes the price at volume',
      body: [
        'At a few hundred units, the specification barely moves the price. At fifty thousand, three decisions dominate: the print route, the board grade, and how efficiently the shape nests on the press sheet.',
        'That last one is the least obvious and often the most valuable. A dimensional change of a few millimetres can allow an extra piece per sheet, and at volume that is a permanent reduction in cost per unit. If your dimensions have any flexibility, tell us — it is worth checking before the die is cut.',
      ],
    },
    industries: {
      h: 'What Fort Worth packages',
      body: [
        'Distribution and manufacturing lead, with agriculture and industrial supply alongside.',
      ],
      items: [
        { name: 'Distribution and warehousing', detail: 'High-volume buyers of shippers and cases where a fraction of a cent per unit is a real number.' },
        { name: 'Manufacturing', detail: 'Finished-goods and component packaging, usually on repeat specifications.' },
        { name: 'Food and agriculture', detail: 'Producers and processors buying in bulk against a seasonal cycle.' },
        { name: 'Aviation and industrial supply', detail: 'Parts packaging where protection and traceable labelling both matter.' },
      ],
    },
    demandTable: {
      h: 'The three levers at bulk volume',
      intro: 'In rough order of how much they move a large quote.',
      head: ['Lever', 'Typical effect', 'When to decide it'],
      rows: [
        ['Print route', 'Large at volume', 'Before artwork is finalised'],
        ['Board grade', 'Large, but risky to cut', 'After the damage rate is known'],
        ['Sheet nesting', 'Small per unit, large in total', 'Before the die is cut'],
        ['Finishing', 'Moderate', 'Early — each stage is a pass'],
        ['Delivery phasing', 'None on unit price', 'Whenever storage is tight'],
      ],
    },
    ordering: {
      h: 'Quoting a bulk Fort Worth run',
      body: [
        'Send the annual volume rather than the first order quantity. Pricing bands work on committed volume and the difference between quoting one drop and a year’s requirement is usually significant.',
        'Tell us whether your dimensions are fixed or have a few millimetres of flexibility, so we can check the nesting before tooling.',
      ],
    },
    formats: {
      h: 'Formats for bulk buyers',
      intro: 'Volume-led, print secondary.',
      picks: [
        { slug: 'custom-mailers', why: 'High-volume shipping formats for distribution operations.' },
        { slug: 'custom-display-boxes', why: 'Retail-ready cases for product moving onward to stores.' },
        { slug: 'custom-packaging-inserts', why: 'Protection for parts and industrial supply.' },
        { slug: 'custom-food-packaging', why: 'Bulk formats for food and agricultural producers.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-cost-factors/', anchor: 'the levers that move a large quote', note: 'Print route, board grade and sheet efficiency.' },
      { href: '/printing-options/', anchor: 'why plate costs stop mattering at volume', note: 'Where offset and flexo pull decisively ahead.' },
    ],
    nearby: [
      { slug: 'dallas', why: 'The adjacent market with a stronger e-commerce weighting.' },
      { slug: 'texas', why: 'Statewide context, including the heat specification.' },
      { slug: 'indianapolis', why: 'A comparable central distribution market.' },
    ],
    faqs: [
      { q: 'Can a small dimension change reduce my unit cost?', a: 'Sometimes substantially. If a few millimetres allows an extra piece to nest on the press sheet, every unit gets cheaper for the life of the die. It is worth telling us whether your dimensions have any flexibility before we tool.' },
      { q: 'Should I quote for one order or a year?', a: 'A year, if you can. Pricing bands work on committed volume, and quoting a single drop when you will actually buy twelve usually leaves money on the table.' },
      { q: 'Can you phase delivery of a bulk run?', a: 'Yes, and at these quantities it is normal. We produce the run and schedule drops against your storage capacity across weeks or months.' },
      { q: 'Do you have a warehouse in Fort Worth?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Fort Worth. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'Is it safe to reduce board grade at volume?', a: 'Only if you know your damage rate. Cutting a grade across fifty thousand units saves a lot and costs far more if damage rises even slightly. Establish the current rate before changing anything.' },
      { q: 'How long does delivery to Fort Worth take?', a: 'Ground freight is typically 2 to 5 business days after production, which is 3 to 5 business days from artwork approval.' },
      { q: 'What print route is right for a large run?', a: 'Almost always offset or flexo. Above a few thousand units plate costs spread far enough that digital stops competing, and the gap widens as volume grows.' },
      { q: 'What is the minimum order in Fort Worth?', a: 'A flat 100 units on any format, though bulk buyers here are typically ordering several orders of magnitude above it.' },
      { q: 'Does summer heat affect bulk stored packaging?', a: 'It affects laminated cartons, where adhesives soften above roughly 100°F and stacked pieces can bond. Plain corrugated is largely unaffected. If your stock is laminated and stored unconditioned, ask for a heat-stable adhesive.' },
      { q: 'How much does bulk packaging cost?', a: 'From $0.30 per piece at large volumes, and genuinely large runs reach the lower bands. Print route and board grade drive the figure far more than anything else at that scale.' },
    ],
    cta: {
      h: 'Price a Fort Worth bulk run',
      body: 'Send your annual volume and tell us whether the dimensions are fixed. We will check the sheet nesting before tooling.',
    },
  }),

  C({
    slug: 'columbus',
    name: 'Columbus',
    state: 'Ohio',
    stateSlug: 'ohio',
    variant: 'ecommerce-led',
    sections: ['overview', 'checklist', 'demandTable', 'industries', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Columbus Ohio',
    h1: 'Fulfilment packaging for Columbus distribution centres',
    eyebrow: 'Columbus · Ohio',
    lede: 'Columbus exists on the fulfilment map because of where it is. For packaging, that means almost everything we ship here is bought to be shipped again within days.',
    metaTitle: 'Custom Packaging Columbus | Fulfilment & DTC',
    metaDescription: 'Custom fulfilment packaging for Columbus distribution centres and DTC brands. Right-sized mailers, fitted inserts and lower damage rates.',
    sectors: ['E-commerce fulfilment', 'Apparel and retail distribution', 'Consumer goods', 'Third-party logistics'],
    overview: {
      h: 'A pack that gets used within the week',
      body: [
        'Columbus operations rarely store packaging for long. It arrives, it gets used, it leaves as parcels. That removes several of the concerns that dominate elsewhere — humidity, long-term storage, seasonal degradation — and concentrates everything on two questions: how much does it cost to ship, and how often does it fail.',
        'It also means replenishment reliability matters more than it does for a buyer holding six months of stock. Running out is a genuine operational problem here, so we schedule against consumption rather than quoting one large drop.',
      ],
    },
    checklist: {
      h: 'A fulfilment packaging review',
      intro: 'What we look at when an operation asks us to reduce cost.',
      items: [
        'Product dimensions against the box currently in use.',
        'The proportion of parcels going out with significant void fill.',
        'Which dimensional weight band each SKU sits in, and the distance to the next one down.',
        'Damage split between crush failures and internal movement.',
        'Number of box sizes in use versus the number genuinely required.',
      ],
    },
    demandTable: {
      h: 'Where fulfilment packaging fails',
      intro: 'Two different failures with two different fixes.',
      head: ['Symptom', 'Cause', 'Fix'],
      rows: [
        ['Box arrives crushed', 'Board grade too light for the stack', 'Heavier grade or better stacking'],
        ['Box intact, product damaged', 'Movement inside the box', 'Fitted insert, not more board'],
        ['High shipping cost', 'Box larger than the product needs', 'Right-size the die'],
        ['Excess consumable spend', 'Void fill compensating for size', 'Right-size, then remove fill'],
      ],
    },
    industries: {
      h: 'What ships through Columbus',
      body: [
        'Apparel and consumer goods dominate, moving through both in-house and third-party operations.',
      ],
      items: [
        { name: 'E-commerce fulfilment', detail: 'High parcel volumes where a single dimensional band saves meaningfully across a year.' },
        { name: 'Apparel and retail distribution', detail: 'Soft goods that frequently ship in boxes when a flat format would do.' },
        { name: 'Consumer goods', detail: 'Mixed product sizes where consolidating box count reduces complexity as much as cost.' },
        { name: 'Third-party logistics', detail: 'Operations serving multiple clients, needing plain stock and dependable replenishment.' },
      ],
    },
    logistics: {
      h: 'Inbound speed and replenishment',
      body: [
        'Ground freight into Columbus takes 2 to 4 business days and the area handles palletised delivery routinely.',
        'For continuous operations we schedule repeat deliveries against consumption. That matters more than raw speed — a predictable weekly drop is more useful to a fulfilment centre than an occasional fast one.',
      ],
    },
    ordering: {
      h: 'Setting up continuous supply',
      body: [
        'Send your SKU dimensions, monthly parcel volumes and damage rate. From those we can propose a consolidated box set and a replenishment schedule.',
        'Once agreed, we hold the specifications so repeats reference them exactly and nothing drifts between runs.',
      ],
    },
    formats: {
      h: 'Formats for Columbus fulfilment',
      intro: 'Shipping-led throughout.',
      picks: [
        { slug: 'custom-mailers', why: 'The core format, where right-sizing produces the saving.' },
        { slug: 'custom-apparel-packaging', why: 'Flat formats for soft goods currently shipping in cartons.' },
        { slug: 'custom-packaging-inserts', why: 'The cheaper route to a lower damage rate.' },
        { slug: 'custom-display-boxes', why: 'Retail-ready cases for stock moving onward to stores.' },
      ],
    },
    resources: [
      { href: '/resources/custom-packaging-size-guide/', anchor: 'consolidating to fewer box sizes', note: 'Reduces cost and pick complexity together.' },
      { href: '/shipping-information/', anchor: 'how replenishment scheduling works', note: 'For operations that cannot run out.' },
    ],
    nearby: [
      { slug: 'ohio', why: 'Statewide context, including industrial and automotive work.' },
      { slug: 'indianapolis', why: 'A comparable Midwest parcel and distribution market.' },
      { slug: 'chicago', why: 'The largest distribution hub in the region.' },
    ],
    faqs: [
      { q: 'Can you set up a regular replenishment schedule?', a: 'Yes. For continuous operations we schedule deliveries against consumption rather than quoting one large drop. Predictable weekly or fortnightly supply is usually more useful to a fulfilment centre than occasional speed.' },
      { q: 'How do I know whether to change board grade or add an insert?', a: 'Look at what arrives damaged. Crushed boxes mean the grade is too light. Intact boxes with damaged contents mean the product is moving inside, and an insert fixes that at lower cost than heavier board.' },
      { q: 'How many box sizes should a fulfilment operation run?', a: 'Usually fewer than it does. Each extra size adds purchasing, storage and pick complexity. Send your SKU dimensions and we will propose a consolidated set.' },
      { q: 'Do you have a warehouse in Columbus?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Columbus. Production runs through our manufacturing partners and ships directly to you.' },
      { q: 'How long does delivery to Columbus take?', a: 'Ground freight is typically 2 to 4 business days after the 3 to 5 business days of production.' },
      { q: 'Will right-sizing really save enough to justify new tooling?', a: 'At fulfilment volumes, usually within months. The saving applies to every parcel, so the payback depends on your volume rather than on the size of the saving per parcel.' },
      { q: 'What is the minimum order in Columbus?', a: 'A flat 100 units on any format, which lets you trial a new box against real shipments before switching a line.' },
      { q: 'Do you supply plain stock for third-party operations?', a: 'Yes. Plain corrugated serves every client from one stock, which is usually the right answer for a 3PL.' },
      { q: 'Can you hold the specification so repeats match?', a: 'Yes. We hold board, structure, dimensions and print details against your account so reorders reference the same specification exactly.' },
      { q: 'How much does fulfilment packaging cost?', a: 'From $0.30 per piece at large volumes. For a fulfilment operation the more meaningful number is total cost per parcel including freight and damage, which we are happy to work through.' },
    ],
    cta: {
      h: 'Review a Columbus packaging set',
      body: 'Send your SKU dimensions, parcel volumes and damage rate. We will propose a consolidated box set and a schedule.',
    },
  }),

  C({
    slug: 'charlotte',
    name: 'Charlotte',
    state: 'North Carolina',
    stateSlug: 'north-carolina',
    variant: 'sector-spotlight',
    sections: ['industries', 'overview', 'formats', 'checklist', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Charlotte',
    h1: 'Packaging for Charlotte food, drink and consumer brands',
    eyebrow: 'Charlotte · North Carolina',
    lede: 'Charlotte’s consumer brands tend to be at the stage where packaging stops being a purchase and starts being a system — several products, several channels, one identity.',
    metaTitle: 'Custom Packaging Charlotte | Food, Drink & Consumer',
    metaDescription: 'Custom packaging for Charlotte food, beverage and consumer brands scaling into retail. Range systems, channel-appropriate formats and repeat specifications.',
    sectors: ['Food and beverage brands', 'Craft brewing and distilling', 'Consumer goods', 'Textiles and apparel'],
    industries: {
      h: 'Brands at the scaling stage',
      body: [
        'Most Charlotte enquiries come from brands past their first product and moving into multiple channels at once.',
      ],
      items: [
        { name: 'Food and beverage brands', detail: 'Ranges expanding from one product to several, where a coherent system matters more than any single pack.' },
        { name: 'Craft brewing and distilling', detail: 'Carriers, sleeves and labels with core and seasonal lines running side by side.' },
        { name: 'Consumer goods', detail: 'Products selling through retail and direct at the same time, needing packaging that works in both.' },
        { name: 'Textiles and apparel', detail: 'A long-standing regional industry, with soft-goods packaging for retail and shipping.' },
      ],
    },
    overview: {
      h: 'One identity, two very different channels',
      body: [
        'A pack that works on a shelf and a pack that works in a carrier network want different things. Shelf wants face area, finish and a clean front panel. Shipping wants tight dimensions, protection and as little wasted volume as possible.',
        'Trying to satisfy both with one pack usually produces something mediocre at each. The more reliable approach is a shared visual system across two formats: a retail carton and a shipping format that clearly belong to the same brand without pretending to be the same object.',
      ],
    },
    checklist: {
      h: 'Building a range system rather than a pack',
      intro: 'What to fix once so it holds across every future product.',
      items: [
        'A consistent panel layout that works whether the product name is short or long.',
        'A colour system with room for variants you have not launched yet.',
        'One structural family, so new products look related without new tooling each time.',
        'A decision on which elements change per variant and which never change.',
        'A shipping format that shares the identity without copying the retail pack.',
      ],
    },
    logistics: {
      h: 'Freight into Charlotte',
      body: [
        'Ground delivery typically takes 2 to 5 business days, and Charlotte takes palletised freight without difficulty.',
        'Growing brands often outgrow their storage before they outgrow their volume. If space is tight, we can phase deliveries rather than sending a full run at once.',
      ],
    },
    ordering: {
      h: 'Quoting a range rather than a product',
      body: [
        'Send the whole range, including products not yet launched if you know them. Quoting a system is different to quoting one pack and usually cheaper across the year.',
        'Tell us the channel split between retail and direct, because it decides whether you need one format or two.',
      ],
    },
    formats: {
      h: 'Formats for a growing Charlotte brand',
      intro: 'Chosen to work as a set.',
      picks: [
        { slug: 'custom-food-packaging', why: 'Core retail formats for food and beverage ranges.' },
        { slug: 'custom-labels', why: 'Variant management across an expanding range.' },
        { slug: 'custom-mailers', why: 'The direct channel, sharing the identity without copying the retail pack.' },
        { slug: 'custom-beverage-packaging', why: 'Carriers and sleeves for brewing and distilling.' },
      ],
    },
    resources: [
      { href: '/resources/retail-packaging-checklist/', anchor: 'building a system that survives new products', note: 'What to settle before the range grows.' },
      { href: '/resources/packaging-design-checklist/', anchor: 'panel layout that stretches to longer names', note: 'A common failure when a range expands.' },
    ],
    nearby: [
      { slug: 'north-carolina', why: 'Statewide context across a broader industrial base.' },
      { slug: 'atlanta', why: 'The nearest major Southeast market.' },
      { slug: 'virginia', why: 'A comparable specialty retail market north.' },
    ],
    faqs: [
      { q: 'Should one pack work for both retail and shipping?', a: 'Rarely. Shelf wants face area and finish; shipping wants tight dimensions and protection. One pack doing both is usually mediocre at each. A shared visual system across two formats works better and often costs less.' },
      { q: 'How do I design packaging for products I have not launched yet?', a: 'Fix the system rather than the artwork — panel layout, colour logic, structural family — and leave the variable elements clearly defined. A new product then slots in without a redesign.' },
      { q: 'Can you quote a whole range at once?', a: 'Yes, and it is usually cheaper than quoting products one at a time. Shared structures and combined runs both reduce cost, and neither is available if each product is treated separately.' },
      { q: 'Do you have a facility in Charlotte?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Charlotte. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to Charlotte take?', a: 'Ground freight is typically 2 to 5 business days after the 3 to 5 business days of production.' },
      { q: 'What is the minimum order in Charlotte?', a: 'A flat 100 units on any format, which makes it practical to launch a new range member in small quantity first.' },
      { q: 'Can you phase deliveries if storage is tight?', a: 'Yes. Growing brands frequently outgrow their storage before their volume. We can schedule drops rather than delivering everything at once.' },
      { q: 'How do I keep variants distinct without confusing the range?', a: 'Change one element consistently — usually colour or a single band — and hold everything else constant. Variants that differ in several ways at once stop reading as a family.' },
      { q: 'Should the shipping box be printed?', a: 'It depends on your channel. For direct sales where the customer opens it, print can be worth it. For wholesale shipments to a retailer, plain is usually the better use of the budget.' },
      { q: 'How much does a range of packaging cost?', a: 'From $0.30 per piece at large volumes per format. Shared structures across a range reduce tooling considerably, which is the main saving available when quoting a system rather than a single pack.' },
    ],
    cta: {
      h: 'Quote a Charlotte range',
      body: 'Send the whole range, including products not yet launched. Quoting a system is usually cheaper than quoting packs one at a time.',
    },
  }),

  C({
    slug: 'indianapolis',
    name: 'Indianapolis',
    state: 'Indiana',
    stateSlug: 'indiana',
    variant: 'logistics-hub',
    sections: ['logistics', 'overview', 'demandTable', 'industries', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Indianapolis',
    h1: 'Air-parcel packaging economics in Indianapolis',
    eyebrow: 'Indianapolis · Indiana',
    lede: 'Indianapolis handles a very large volume of air parcels, and air parcels reward packaging decisions that road freight is indifferent to.',
    metaTitle: 'Custom Packaging Indianapolis | Air Parcel & Distribution',
    metaDescription: 'Custom packaging for Indianapolis distribution and air-parcel operations. Lightweight structures, fitted inserts and volumetric weight reduction.',
    sectors: ['Air parcel and logistics', 'Pharmaceutical distribution', 'Manufacturing supply', 'Sports and events'],
    logistics: {
      h: 'Weight is billed, every time',
      body: [
        'Ground freight into Indianapolis takes 2 to 4 business days and the city is straightforward for palletised delivery. What makes it distinctive is what happens next: a substantial share of what is packed here leaves by air.',
        'Air billing charges on actual or volumetric weight, whichever is greater, on every parcel. That makes both the weight and the dimensions of a pack recurring costs rather than one-off design choices.',
      ],
    },
    overview: {
      h: 'Lighter without being weaker',
      body: [
        'The instinct when told to cut weight is to drop a board grade, and that usually raises damage. The better route is to remove the reason the heavy board was needed: hold the product still with a fitted insert, and the outer no longer has to absorb movement.',
        'The insert adds a small amount of weight in one place and removes considerably more from another. Done properly, the parcel gets lighter and the damage rate falls at the same time.',
      ],
    },
    demandTable: {
      h: 'Reducing parcel weight without raising damage',
      intro: 'Four changes, ranked by how well they work.',
      head: ['Change', 'Weight effect', 'Damage effect'],
      rows: [
        ['Add a fitted insert, lighten the outer', 'Net reduction', 'Usually improves'],
        ['Right-size the box', 'Reduction', 'Neutral or better'],
        ['Remove void fill', 'Reduction', 'Worse unless right-sized first'],
        ['Drop board grade alone', 'Reduction', 'Usually worse'],
      ],
    },
    industries: {
      h: 'What Indianapolis ships',
      body: [
        'Logistics dominates, with pharmaceutical distribution significant alongside it.',
      ],
      items: [
        { name: 'Air parcel and logistics', detail: 'Operations where every gram and every cubic inch is billed on every parcel.' },
        { name: 'Pharmaceutical distribution', detail: 'Protective packaging with documented specifications, often moving by air for speed.' },
        { name: 'Manufacturing supply', detail: 'Components where fitted protection prevents most transit damage.' },
        { name: 'Sports and events', detail: 'Merchandise and promotional packaging against fixed event dates.' },
      ],
    },
    ordering: {
      h: 'Quoting for air parcels',
      body: [
        'Tell us how your parcels are billed and what your damage rate is. Those two numbers set the trade-off far better than any general rule.',
        'If you ship both by air and by road, tell us the split so we can optimise for the channel that carries the majority.',
      ],
    },
    formats: {
      h: 'Formats for air-parcel operations',
      intro: 'Weight and volume led.',
      picks: [
        { slug: 'custom-packaging-inserts', why: 'How to lighten the outer without raising damage.' },
        { slug: 'custom-mailers', why: 'Right-sized shipping formats for air and ground.' },
        { slug: 'pharmaceutical-packaging', why: 'Protective formats with documented specifications.' },
        { slug: 'promotional-packaging', why: 'Event and merchandise work against fixed dates.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-insert-guide/', anchor: 'trading outer board for a fitted cavity', note: 'The mechanism behind lighter parcels.' },
      { href: '/resources/custom-packaging-size-guide/', anchor: 'how volumetric weight is calculated', note: 'Why dimensions matter as much as mass.' },
    ],
    nearby: [
      { slug: 'indiana', why: 'Statewide context, including RV and heavy industrial work.' },
      { slug: 'columbus', why: 'A comparable Midwest fulfilment market.' },
      { slug: 'chicago', why: 'The largest distribution hub in the region.' },
    ],
    faqs: [
      { q: 'How do I reduce air freight cost through packaging?', a: 'Reduce both weight and volume. Air bills on actual or volumetric weight, whichever is greater, so a smaller box can save even if the mass is unchanged. A fitted insert lets you lighten the outer without raising damage.' },
      { q: 'Is dropping board grade a good way to cut weight?', a: 'On its own, usually not — damage tends to rise by more than the freight saving. It works when paired with a fitted insert that stops the product moving, because then the outer no longer has to absorb that movement.' },
      { q: 'Do you have a facility in Indianapolis?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Indianapolis. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to Indianapolis take?', a: 'Ground freight is typically 2 to 4 business days after the 3 to 5 business days of production.' },
      { q: 'What if I ship by both air and road?', a: 'Tell us the split. Optimising for the majority channel and accepting a small inefficiency on the other usually beats a compromise specification that suits neither.' },
      { q: 'Does void fill hurt on air parcels?', a: 'Twice over. It adds mass and it usually indicates the box is larger than necessary, which raises the volumetric charge. A right-sized box with an insert is nearly always cheaper to fly.' },
      { q: 'What is the minimum order in Indianapolis?', a: 'A flat 100 units on any format, enough to trial a lighter specification against real shipments.' },
      { q: 'Can you supply documented specifications for pharmaceutical distribution?', a: 'Yes. Dated proofs against a revision number with retained approval records, where your quality system requires it.' },
      { q: 'Can you produce merchandise packaging for a fixed event date?', a: 'Yes. Give us the date rather than a lead time and we will work backwards to the latest artwork approval that still lands in time.' },
      { q: 'How much does air-parcel packaging cost?', a: 'From $0.30 per piece at large volumes. For air shippers the recurring freight saving from a lighter, tighter pack usually matters far more than the unit price.' },
    ],
    cta: {
      h: 'Quote an Indianapolis parcel pack',
      body: 'Tell us how parcels are billed and your current damage rate. We will balance weight against protection.',
    },
  }),

  C({
    slug: 'seattle',
    name: 'Seattle',
    state: 'Washington',
    stateSlug: 'washington',
    variant: 'sector-spotlight',
    sections: ['industries', 'overview', 'checklist', 'demandTable', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Seattle',
    h1: 'Coffee packaging and the barrier-versus-recyclability problem',
    eyebrow: 'Seattle · Washington',
    lede: 'Seattle roasters want packaging that keeps coffee fresh and can be recycled. Those two requirements pull against each other, and pretending otherwise helps nobody.',
    metaTitle: 'Custom Packaging Seattle | Coffee & Barrier Formats',
    metaDescription: 'Custom coffee and specialty packaging for Seattle roasters and brands. Honest guidance on barrier films versus recyclability, plus valves and short runs.',
    sectors: ['Coffee roasting', 'Specialty food', 'Technology and hardware', 'Outdoor brands'],
    industries: {
      h: 'A roasting city with a recycling conscience',
      body: [
        'Coffee dominates the enquiries we get from Seattle, and the second most common subject is recyclability.',
      ],
      items: [
        { name: 'Coffee roasting', detail: 'Bags with valves and barrier layers, frequently changing for single origins, and almost always with a sustainability question attached.' },
        { name: 'Specialty food', detail: 'Small producers needing barrier or moisture protection with the same environmental expectations.' },
        { name: 'Technology and hardware', detail: 'Device packaging where minimal presentation and fitted protection are both expected.' },
        { name: 'Outdoor brands', detail: 'Equipment and apparel packaging expected to be recyclable and unfussy.' },
      ],
    },
    overview: {
      h: 'Why the two goals conflict',
      body: [
        'Coffee needs protection from oxygen and moisture to hold its character, and the materials that block those effectively are usually multi-layer laminates. Multi-layer structures are difficult to recycle precisely because they are made of different materials bonded together.',
        'Mono-material films have improved considerably and are recyclable through store drop-off in many places, but they generally offer a shorter shelf life than a full laminate. The honest position is that you are choosing a point on a scale rather than getting both ends of it, and the right point depends on how quickly your coffee sells.',
      ],
    },
    checklist: {
      h: 'Choosing a coffee bag material',
      intro: 'The questions that actually decide it.',
      items: [
        'How long between roasting and the customer opening the bag.',
        'Whether the coffee is whole bean or ground, since ground stales far faster.',
        'Whether your customers realistically have access to store drop-off recycling.',
        'Whether a shorter stated shelf life is commercially acceptable.',
        'Whether a valve is needed, which it usually is for freshly roasted beans.',
      ],
    },
    demandTable: {
      h: 'Barrier options compared honestly',
      intro: 'What each material actually gives you.',
      head: ['Material', 'Barrier performance', 'Recyclability'],
      rows: [
        ['Multi-layer laminate', 'Highest', 'Not kerbside recyclable'],
        ['Mono-material film', 'Good, shorter shelf life', 'Store drop-off in many areas'],
        ['Kraft with liner', 'Moderate', 'Depends entirely on the liner'],
        ['Compostable film', 'Lower, shortest shelf life', 'Industrial facilities only'],
      ],
    },
    logistics: {
      h: 'Freight to the Northwest',
      body: [
        'Ground delivery into Seattle typically takes 4 to 7 business days, at the longer end of our range because of distance. The metropolitan area takes palletised freight without difficulty.',
        'If your reorder point is set on a national average lead time, it is probably a few days short for Seattle. Worth adjusting rather than discovering during a busy season.',
      ],
    },
    ordering: {
      h: 'Quoting a Seattle coffee run',
      body: [
        'Tell us the time between roast and consumption, and whether you sell whole bean or ground. Those two facts determine how much barrier you genuinely need.',
        'Tell us also which environmental claim you want to print. We will say plainly if the barrier requirement and the claim cannot both be met.',
      ],
    },
    formats: {
      h: 'Formats for Seattle brands',
      intro: 'Barrier and recycled formats.',
      picks: [
        { slug: 'custom-pouches', why: 'The core coffee format, with valve and barrier options.' },
        { slug: 'sustainable-packaging', why: 'Recycled and recyclable stocks for secondary packaging.' },
        { slug: 'custom-labels', why: 'Single-origin changeovers without reprinting the bag.' },
        { slug: 'electronics-packaging', why: 'Fitted protection for the hardware sector.' },
      ],
    },
    resources: [
      { href: '/resources/sustainable-packaging-guide/', anchor: 'where each sustainable material falls short', note: 'Written to be honest rather than promotional.' },
      { href: '/materials/', anchor: 'barrier films and what each one blocks', note: 'The technical comparison behind the choice.' },
    ],
    nearby: [
      { slug: 'washington', why: 'Statewide context, including damp-climate storage.' },
      { slug: 'denver', why: 'A comparable market of roasters and outdoor brands.' },
      { slug: 'california', why: 'The nearest very large West Coast market.' },
    ],
    faqs: [
      { q: 'Can I have a fully recyclable coffee bag with a full barrier?', a: 'Not currently, and it is better to be straight about it. The materials that block oxygen and moisture best are multi-layer laminates, which are hard to recycle for exactly that reason. Mono-material films are recyclable through store drop-off but give a shorter shelf life.' },
      { q: 'How much shelf life do I lose with a mono-material film?', a: 'It depends on the specific film and your coffee, but expect a meaningful reduction against a full laminate. If your coffee reaches customers quickly, the difference may not matter commercially at all.' },
      { q: 'Do I need a degassing valve?', a: 'For freshly roasted beans, almost always. Coffee off-gasses CO₂ for days after roasting and a sealed bag without a valve will inflate. It is a standard option.' },
      { q: 'Does whole bean or ground change the material choice?', a: 'Yes, considerably. Ground coffee has vastly more surface area and stales much faster, so it needs a better barrier for the same perceived freshness.' },
      { q: 'Do you have a facility in Seattle?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Seattle. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to Seattle take?', a: 'Ground freight is typically 4 to 7 business days after the 3 to 5 business days of production. It is at the longer end of our range, so allow for it in your reorder point.' },
      { q: 'Is compostable packaging a good option for coffee?', a: 'Only if your customers can actually compost it, which usually means industrial facilities rather than a home heap. It also gives the shortest shelf life of the options. For many roasters a recyclable film does more real good.' },
      { q: 'What is the minimum order in Seattle?', a: 'A flat 100 units on any format, which suits single-origin runs well.' },
      { q: 'Can I change the design per single origin without a new bag run?', a: 'Yes. Print a common base bag and apply a variable label per origin. It is much cheaper than a separate print run for each release.' },
      { q: 'How much does coffee packaging cost?', a: 'From $0.30 per piece at large volumes. Barrier films and valves both add cost, and we will quote the material options side by side so the trade-off is visible.' },
    ],
    cta: {
      h: 'Quote a Seattle coffee run',
      body: 'Tell us the time from roast to cup and the claim you want to print. We will be straight about what is achievable.',
    },
  }),

  C({
    slug: 'denver',
    name: 'Denver',
    state: 'Colorado',
    stateSlug: 'colorado',
    variant: 'maker-led',
    sections: ['overview', 'industries', 'checklist', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Denver',
    h1: 'Packaging for Denver’s independent food, drink and outdoor brands',
    eyebrow: 'Denver · Colorado',
    lede: 'Denver brands tend to be small, growing and unusually willing to spend on doing packaging properly. The useful advice here is mostly about what not to spend it on.',
    metaTitle: 'Custom Packaging Denver | Independent & Outdoor Brands',
    metaDescription: 'Custom packaging for Denver independent food, drink, outdoor and wellness brands. Short runs, altitude-aware fills and honest advice on where budget goes.',
    sectors: ['Craft beverage', 'Natural and specialty food', 'Outdoor and recreation', 'Wellness and cannabis'],
    overview: {
      h: 'Where a growing brand wastes money',
      body: [
        'The three most common mistakes we see from brands at this stage are the same everywhere but especially visible here: tooling a structure before the range has settled, buying a year of stock to hit a price break, and paying for finishes that do not survive being looked at on a shelf from a metre away.',
        'None of those is about being cheap. They are about sequencing. Get the structure and the system right first, keep the quantities honest until demand is proven, and put the finish budget on the one element customers actually touch.',
      ],
    },
    industries: {
      h: 'What Denver makes',
      body: [
        'Craft beverage and natural food lead, with a strong outdoor sector alongside.',
      ],
      items: [
        { name: 'Craft beverage', detail: 'Breweries and distilleries with core and seasonal lines, where setup cost per design dominates the annual spend.' },
        { name: 'Natural and specialty food', detail: 'Front Range producers using pouches and barrier formats, where altitude affects the fill.' },
        { name: 'Outdoor and recreation', detail: 'Brands whose customers expect minimal, recyclable packaging that still survives shipping.' },
        { name: 'Wellness and cannabis', detail: 'A mature regulated market where closures and compliance panels constrain the structure.' },
      ],
    },
    checklist: {
      h: 'Sequencing a packaging budget',
      intro: 'The order that avoids paying twice.',
      items: [
        'Settle the range structure before tooling anything.',
        'Buy quantities against proven demand, not a price break.',
        'Decide which single element carries the finish budget.',
        'For sealed formats, decide which altitude the fill is calibrated for.',
        'Leave the design room for the next two products.',
      ],
    },
    logistics: {
      h: 'Delivery into the Front Range',
      body: [
        'Ground freight into Denver typically takes 3 to 6 business days, and the Front Range corridor takes palletised deliveries without difficulty.',
        'Many small producers here receive at breweries, kitchens or shared units without a dock. Tell us and we will ship cartons rather than a pallet.',
      ],
    },
    ordering: {
      h: 'Quoting a Denver run',
      body: [
        'Tell us how many products the range will have in a year and how often the design changes. Those answers matter more to your annual cost than the unit price does.',
        'For sealed formats, tell us where the product is filled and where most of it sells, so we can advise on headspace.',
      ],
    },
    formats: {
      h: 'Formats for Denver brands',
      intro: 'Short-run friendly and variant-tolerant.',
      picks: [
        { slug: 'custom-pouches', why: 'The dominant natural-food format on the Front Range.' },
        { slug: 'custom-beverage-packaging', why: 'Carriers and sleeves for a dense craft sector.' },
        { slug: 'custom-labels', why: 'Frequent variants without a full setup each time.' },
        { slug: 'sustainable-packaging', why: 'Recycled stocks for an outdoor market that expects them.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-cost-factors/', anchor: 'the costs that grow with a range', note: 'Setup per design, not unit price.' },
      { href: '/finishes-and-add-ons/', anchor: 'which finishes read from a metre away', note: 'Where to put a limited finish budget.' },
    ],
    nearby: [
      { slug: 'colorado', why: 'Statewide context, including altitude and dry-air effects.' },
      { slug: 'seattle', why: 'A comparable market of roasters and outdoor brands.' },
      { slug: 'phoenix', why: 'The nearest large distribution market.' },
    ],
    faqs: [
      { q: 'Should I buy a year of packaging to get a better price?', a: 'Usually not until demand is proven. A price break on stock you end up not using is not a saving, and for sealed or coated formats long storage can create its own problems. Buy against demand you can evidence.' },
      { q: 'Where should a small finish budget go?', a: 'On the element the customer touches and sees closest — usually the front panel or the closure. Finishes that only read at arm’s length rarely justify their cost at small quantities.' },
      { q: 'Does altitude affect my pouches?', a: 'Yes, if they are sealed. A pack filled near sea level expands on the way to Denver; one filled here can look slack at sea level. Neither is a defect but both generate complaints, so headspace should be calibrated to your main market.' },
      { q: 'Do you have a facility in Denver?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Denver. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to Denver take?', a: 'Ground freight is typically 3 to 6 business days after the 3 to 5 business days of production.' },
      { q: 'What is the minimum order in Denver?', a: 'A flat 100 units on any format, which suits a limited release or a first production run.' },
      { q: 'How do I keep costs down as my range grows?', a: 'Hold one structure constant and vary a label or sleeve per product. Each new line then carries a small setup rather than new tooling, which is where a growing range usually leaks money.' },
      { q: 'Can you deliver to a brewery without a dock?', a: 'Yes. Tell us at quoting and we will ship cartons rather than a pallet.' },
      { q: 'Can you produce compliant cannabis packaging?', a: 'We can produce child-resistant structures with certified closures. Send the specific requirement your licence operates under, since compliance is verified against the regulations in force when the order runs.' },
      { q: 'How much does packaging cost for a Denver brand?', a: 'From $0.30 per piece at large volumes. For a growing range, the setup cost per design usually affects your annual spend more than the unit price does.' },
    ],
    cta: {
      h: 'Quote a Denver run',
      body: 'Tell us how many products the range will have in a year and how often the design changes.',
    },
  }),

  C({
    slug: 'boston',
    name: 'Boston',
    state: 'Massachusetts',
    stateSlug: 'massachusetts',
    variant: 'hospitality-led',
    sections: ['industries', 'overview', 'demandTable', 'formats', 'checklist', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Boston',
    h1: 'Food-service packaging for Boston’s restaurants and cafés',
    eyebrow: 'Boston · Massachusetts',
    lede: 'Boston food businesses operate in tight premises with narrow streets and a hard winter. All three shape what packaging actually works here.',
    metaTitle: 'Custom Packaging Boston | Restaurant & Café',
    metaDescription: 'Custom takeaway and café packaging for Boston food businesses. Heat retention, grease resistance and delivery schedules built for small premises.',
    sectors: ['Restaurants and cafés', 'Bakery and dessert', 'Seafood and specialty food', 'Universities and institutional catering'],
    industries: {
      h: 'A dense food scene in small spaces',
      body: [
        'Boston food businesses are typically operating in less space than their volume suggests, which affects packaging as much as any culinary decision.',
      ],
      items: [
        { name: 'Restaurants and cafés', detail: 'Takeaway and delivery formats where heat retention through a cold walk matters more than in warmer cities.' },
        { name: 'Bakery and dessert', detail: 'Presentation boxes with windows and inserts, where the product must arrive intact after being carried.' },
        { name: 'Seafood and specialty food', detail: 'Leak and moisture resistance as a baseline requirement rather than an upgrade.' },
        { name: 'Universities and institutional catering', detail: 'High-volume operations buying against an academic calendar with predictable peaks.' },
      ],
    },
    overview: {
      h: 'Heat retention in a cold city',
      body: [
        'A takeaway container that performs well in a mild climate can disappoint in a Boston February, because the food is losing heat for the whole walk. Board thickness contributes a little, but the larger factors are the amount of trapped air, the fit of the lid, and whether the pack vents.',
        'There is a genuine tension: venting stops food going soggy but lets heat escape. Which side to favour depends on the dish, and it is worth deciding deliberately rather than accepting whatever the stock container happens to do.',
      ],
    },
    demandTable: {
      h: 'Venting versus heat retention',
      intro: 'Choosing deliberately rather than by default.',
      head: ['Dish type', 'Priority', 'Structure'],
      rows: [
        ['Fried and crisp items', 'Venting', 'Perforated or vented lid'],
        ['Soups and wet dishes', 'Heat and seal', 'Sealed lid, no venting'],
        ['Baked goods', 'Moisture control', 'Partial venting with a liner'],
        ['Cold items', 'Neither', 'Standard closure'],
      ],
    },
    checklist: {
      h: 'Ordering with almost no storage',
      intro: 'Boston kitchens are small. These help.',
      items: [
        'Work out how many weeks of stock you can genuinely hold.',
        'Ask for phased deliveries against that figure rather than one drop.',
        'Standardise on fewer container sizes to reduce shelf space.',
        'Choose formats that nest or stack flat.',
        'Time larger deliveries away from your busiest service days.',
      ],
    },
    logistics: {
      h: 'Delivering into Boston',
      body: [
        'Ground freight reaches Boston in 2 to 4 business days. Delivery into the city itself can be awkward — narrow streets, restricted hours and limited kerbside access are all common.',
        'For most food businesses a few cartons rather than a pallet solves it. Tell us the premises type and we will pack the consignment to suit.',
      ],
    },
    ordering: {
      h: 'Specifying a Boston food pack',
      body: [
        'Tell us the dishes involved and whether they travel by courier. Fried items and wet dishes want opposite things from a lid.',
        'Tell us your storage capacity too, so we can schedule deliveries rather than overwhelming a small stockroom.',
      ],
    },
    formats: {
      h: 'Formats for Boston food service',
      intro: 'Chosen for small premises and cold walks.',
      picks: [
        { slug: 'custom-food-packaging', why: 'Takeaway formats specified around venting and heat retention.' },
        { slug: 'custom-printed-cups', why: 'Hot drinks, where heat retention is the whole point.' },
        { slug: 'custom-food-trays', why: 'For heavier dishes that punish a light board.' },
        { slug: 'custom-bags', why: 'Carry-out bags that hold a full order in bad weather.' },
      ],
    },
    resources: [
      { href: '/materials/', anchor: 'boards that resist grease and moisture', note: 'The two baseline requirements for food service.' },
      { href: '/resources/box-style-guide/', anchor: 'lid closures and how they behave', note: 'The structural detail behind venting decisions.' },
    ],
    nearby: [
      { slug: 'massachusetts', why: 'Statewide context, including biotech and technical work.' },
      { slug: 'new-york-city', why: 'A comparable market of small operators with no storage.' },
      { slug: 'new-york', why: 'The nearest large regional market.' },
    ],
    faqs: [
      { q: 'How do I keep takeaway food hot in winter?', a: 'Reduce trapped air, use a well-fitting lid, and vent only where the dish needs it. Board thickness helps a little but fit and venting matter more. Crisp foods need venting; wet dishes are better sealed.' },
      { q: 'Should my containers be vented?', a: 'It depends on the dish. Venting prevents sogginess in fried items but lets heat escape, which is a real cost on a cold walk. Soups and wet dishes are usually better sealed. It is worth deciding per dish rather than accepting a default.' },
      { q: 'Can you deliver in stages? We have no storage.', a: 'Yes. We produce the run and schedule drops against your capacity, which is standard for Boston food businesses.' },
      { q: 'Do you have a facility in Boston?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Boston. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How do deliveries work on a narrow city street?', a: 'For most food businesses we ship cartons rather than a pallet, which can be received normally. Tell us the premises type at quoting.' },
      { q: 'How long does delivery to Boston take?', a: 'Ground freight is typically 2 to 4 business days after the 3 to 5 business days of production.' },
      { q: 'What is the minimum order for a Boston restaurant?', a: 'A flat 100 units on any format, enough to test a container through real deliveries before committing.' },
      { q: 'Can you supply leak-resistant packaging for seafood?', a: 'Yes. Leakage needs a wet-strength board with a barrier rather than a surface coating alone, which handles condensation but not bulk liquid.' },
      { q: 'Can we change the print for a seasonal menu?', a: 'Yes, and it is much cheaper than a new structure. Keep the container and change the artwork, or use a plain base with a printed sleeve for frequent changes.' },
      { q: 'How much does food-service packaging cost in Boston?', a: 'From $0.30 per piece at large volumes. Grease-resistant coatings add a little; heavier boards for hot, heavy dishes add more.' },
    ],
    cta: {
      h: 'Specify a Boston food pack',
      body: 'Tell us the dishes and your storage capacity. We will choose venting and closure per dish and schedule deliveries to fit.',
    },
  }),

  C({
    slug: 'atlanta',
    name: 'Atlanta',
    state: 'Georgia',
    stateSlug: 'georgia',
    variant: 'sector-spotlight',
    sections: ['industries', 'overview', 'checklist', 'formats', 'demandTable', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Atlanta',
    h1: 'Haircare and beauty packaging for Atlanta brands',
    eyebrow: 'Atlanta · Georgia',
    lede: 'Atlanta has one of the strongest haircare and personal-care sectors in the country, and bottle packaging has its own specific failure modes that carton buyers never encounter.',
    metaTitle: 'Custom Packaging Atlanta | Haircare & Beauty',
    metaDescription: 'Custom packaging for Atlanta haircare, beauty and personal-care brands. Bottle cartons that seat properly, sleeve options and press-send packaging.',
    sectors: ['Haircare and personal care', 'Beauty and cosmetics', 'Film and press', 'Food and beverage'],
    industries: {
      h: 'A personal-care capital',
      body: [
        'Haircare in particular is concentrated here to a degree that shapes the kind of briefs we receive.',
      ],
      items: [
        { name: 'Haircare and personal care', detail: 'Bottle cartons, sleeves and labels, where the container shape decides the structure and finish decides shelf credibility.' },
        { name: 'Beauty and cosmetics', detail: 'Smaller cartons with heavy regulatory copy competing for panel space against brand design.' },
        { name: 'Film and press', detail: 'Short-run promotional and seeding packaging against fixed release dates.' },
        { name: 'Food and beverage', detail: 'A substantial local production base needing food-contact compliant formats.' },
      ],
    },
    overview: {
      h: 'Why bottle cartons go wrong',
      body: [
        'A carton around a bottle is harder than it looks. The bottle is widest at a point that is often not the base, the cap adds height that is easy to forget, and any flexibility in the container means it does not sit still.',
        'The result of getting it slightly wrong is a carton that either will not close or rattles on the shelf. Both look cheap in a category where looking cheap is fatal. We nearly always recommend a structural sample with your actual bottle in it before print, because a measurement taken from a drawing is not the same as a bottle in your hand.',
      ],
    },
    checklist: {
      h: 'Measuring a bottle for a carton',
      intro: 'The measurements that actually matter.',
      items: [
        'Width at the widest point, which is often not the base.',
        'Total height including the cap and any pump or trigger.',
        'Whether the container flexes when squeezed, and by how much.',
        'Whether a label already applied adds thickness.',
        'Whether the carton must also hold a leaflet or sachet alongside the bottle.',
      ],
    },
    demandTable: {
      h: 'Carton, sleeve or label',
      intro: 'Three routes for a bottled product, with different economics.',
      head: ['Route', 'Cost', 'Best when'],
      rows: [
        ['Full printed carton', 'Highest', 'Retail shelf presence matters most'],
        ['Printed sleeve over bottle', 'Middle', 'Range with many variants'],
        ['Label only', 'Lowest', 'Direct sales or minimal positioning'],
        ['Carton plus insert', 'Highest', 'Bottle needs holding and presenting'],
      ],
    },
    logistics: {
      h: 'Freight through Atlanta',
      body: [
        'Ground freight arrives in 2 to 4 business days, and Atlanta is one of the better-connected destinations in the country.',
        'If you distribute across the Southeast, consolidating into Atlanta and redistributing from there is frequently cheaper than separate freight legs. Tell us the onward split and we will pack the consignment to break down easily.',
      ],
    },
    ordering: {
      h: 'Quoting an Atlanta beauty run',
      body: [
        'Send the actual container, or precise measurements including the cap. Bottle cartons are the format where measurement errors are most expensive.',
        'Tell us how many variants the range has. Above three or four, a sleeve or label route usually beats separate printed cartons.',
      ],
    },
    formats: {
      h: 'Formats for Atlanta beauty brands',
      intro: 'Bottle-led, with variant management in mind.',
      picks: [
        { slug: 'custom-cosmetic-packaging', why: 'The core category — bottle cartons and beauty formats.' },
        { slug: 'custom-sleeves', why: 'Variant management without separate printed cartons.' },
        { slug: 'custom-labels', why: 'The lowest-cost route for a range with many variants.' },
        { slug: 'promotional-packaging', why: 'Press and seeding sends against fixed dates.' },
      ],
    },
    resources: [
      { href: '/samples/', anchor: 'testing a carton with your actual bottle', note: 'The single most useful step for bottle packaging.' },
      { href: '/resources/custom-packaging-size-guide/', anchor: 'measuring a container properly', note: 'Where bottle cartons usually go wrong.' },
    ],
    nearby: [
      { slug: 'georgia', why: 'Statewide context, including freight consolidation.' },
      { slug: 'charlotte', why: 'A comparable Southeast consumer-brand market.' },
      { slug: 'miami', why: 'The other major Southeast beauty market.' },
    ],
    faqs: [
      { q: 'Why does my bottle rattle inside its carton?', a: 'Almost always a measurement taken at the wrong point. Bottles are frequently widest somewhere other than the base, and a carton sized to the base leaves the bottle loose. A structural sample with your actual bottle catches this before print.' },
      { q: 'Should I send a bottle or a drawing?', a: 'A bottle, if at all possible. Drawings miss flex, applied label thickness and cap tolerance — all of which affect whether a carton closes cleanly.' },
      { q: 'Is a sleeve cheaper than a printed carton?', a: 'Usually, especially across several variants. You print one small element per variant instead of a whole carton, so setup costs fall sharply as the range grows.' },
      { q: 'Do you have a facility in Atlanta?', a: 'We manufacture through our production partners and ship direct — there is no office, plant or warehouse in Atlanta. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to Atlanta take?', a: 'Ground freight is typically 2 to 4 business days after the 3 to 5 business days of production. Atlanta is one of the better-connected freight destinations in the country.' },
      { q: 'Can I consolidate a Southeast distribution through Atlanta?', a: 'Yes, and it is often cheaper than separate freight legs into each state. Tell us the onward split so we pack the consignment to break down easily.' },
      { q: 'What is the minimum order in Atlanta?', a: 'A flat 100 units on any format, which suits both a launch test and a press send.' },
      { q: 'How much panel space do beauty regulatory requirements need?', a: 'More than most brands allow for. Ingredient lists and any warnings compete directly with brand design. We will block the area on the dieline before you commit design time.' },
      { q: 'Should I order spares for a press send?', a: 'Yes. Press sends go out in one wave with no second run behind them, and producing overage inside the original run costs a fraction of a separate short run later.' },
      { q: 'How much does beauty packaging cost in Atlanta?', a: 'From $0.30 per piece at large volumes. Soft-touch lamination, foil and structural inserts each add a stage, and we quote them separately so the trade-offs are visible.' },
    ],
    cta: {
      h: 'Quote an Atlanta beauty run',
      body: 'Send us the actual bottle if you can. It is the single most useful thing for getting a carton right first time.',
    },
  }),

  C({
    slug: 'miami',
    name: 'Miami',
    state: 'Florida',
    stateSlug: 'florida',
    variant: 'hospitality-led',
    sections: ['industries', 'overview', 'checklist', 'demandTable', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Miami',
    h1: 'Hospitality and beverage packaging for Miami',
    eyebrow: 'Miami · Florida',
    lede: 'Miami packaging works outdoors more than anywhere else we ship. Condensation, heat and humidity all arrive at once, usually while the customer is holding the pack.',
    metaTitle: 'Custom Packaging Miami | Hospitality & Beverage',
    metaDescription: 'Custom packaging for Miami hospitality, beverage and beauty brands. Condensation-resistant carriers, humidity-proof storage and bilingual panel planning.',
    sectors: ['Hospitality and nightlife', 'Beverage and juice', 'Beauty and fragrance', 'Import and export'],
    industries: {
      h: 'What Miami packages',
      body: [
        'Hospitality volume dominates, with beverage and beauty close behind.',
      ],
      items: [
        { name: 'Hospitality and nightlife', detail: 'Venues and outdoor service where packs are handled wet, in heat, and often outdoors.' },
        { name: 'Beverage and juice', detail: 'Cold drinks where condensation on the outside of the pack is constant rather than occasional.' },
        { name: 'Beauty and fragrance', detail: 'Cartons and sleeves, frequently with bilingual copy competing for the same panel area.' },
        { name: 'Import and export', detail: 'Repack and redistribution operations with extra handling stages.' },
      ],
    },
    overview: {
      h: 'Wet on the outside, not just the inside',
      body: [
        'Most moisture advice for packaging concerns what happens inside the pack. In Miami the more visible problem is outside it: a cold drink pulls condensation from humid air onto the carrier, and an uncoated board carrier goes soft in the customer’s hand within minutes.',
        'This is not the same problem as long-term humid storage and it does not have the same fix. Surface condensation needs a barrier on the outside face, not just a moisture-resistant board.',
      ],
    },
    checklist: {
      h: 'Specifying for outdoor service',
      intro: 'What to consider before a Miami hospitality run.',
      items: [
        'Whether the pack is handled while the contents are cold.',
        'Whether it will sit outdoors in direct sun.',
        'Whether it must survive being set down on a wet surface.',
        'Whether the panel needs both English and Spanish copy.',
        'How long stock will be stored before use, which is a separate humidity question.',
      ],
    },
    demandTable: {
      h: 'Three moisture problems, three fixes',
      intro: 'They are genuinely different and need different answers.',
      head: ['Problem', 'Where it happens', 'Fix'],
      rows: [
        ['Surface condensation', 'Outside face, in use', 'Exterior barrier coating'],
        ['Long-term humid storage', 'Whole pack, in the stockroom', 'Moisture-resistant board'],
        ['Contents leaking', 'Inside face, in use', 'Wet-strength board with liner'],
        ['Set down on wet surfaces', 'Base, in use', 'Coated base or raised structure'],
      ],
    },
    logistics: {
      h: 'Freight into South Florida',
      body: [
        'Ground deliveries into Miami usually take 4 to 6 business days, the longest of our Florida destinations because of the distance down the peninsula.',
        'Hurricane season between June and November can close lanes for days at a time. If your date is fixed, tell us and we will build slack into the schedule.',
      ],
    },
    ordering: {
      h: 'Quoting Miami hospitality work',
      body: [
        'Tell us whether the pack is used outdoors and whether contents are cold. Those two answers decide the coating on the outside face.',
        'If you need bilingual copy, say so before layout begins. Two languages need meaningfully more panel area than one and retrofitting it is expensive.',
      ],
    },
    formats: {
      h: 'Formats for Miami',
      intro: 'Hospitality and beverage led.',
      picks: [
        { slug: 'custom-printed-cups', why: 'Cold-drink volume across venues and outdoor service.' },
        { slug: 'custom-beverage-packaging', why: 'Carriers specified against surface condensation.' },
        { slug: 'custom-cosmetic-packaging', why: 'Beauty and fragrance cartons, often bilingual.' },
        { slug: 'custom-bags', why: 'Carry formats that survive humid handling.' },
      ],
    },
    resources: [
      { href: '/finishes-and-add-ons/', anchor: 'exterior coatings that shed condensation', note: 'Different from an interior moisture barrier.' },
      { href: '/artwork-guidelines/', anchor: 'planning a panel for two languages', note: 'Bilingual copy needs the space designing in from the start.' },
    ],
    nearby: [
      { slug: 'florida', why: 'Statewide context, including long-term humid storage.' },
      { slug: 'jacksonville', why: 'The other major Florida distribution market.' },
      { slug: 'atlanta', why: 'The nearest large Southeast market and freight hub.' },
    ],
    faqs: [
      { q: 'Why does my cold-drink carrier go soft in the customer’s hand?', a: 'Surface condensation. Humid air condenses on a cold pack and an uncoated board absorbs it within minutes. It needs a barrier on the outside face, which is a different fix from the moisture-resistant board used for humid storage.' },
      { q: 'Is that the same problem as humid storage?', a: 'No, and they need different specifications. Storage humidity acts slowly on the whole pack; condensation acts quickly on the outside face. A pack can be specified for one and fail at the other.' },
      { q: 'Do I need bilingual panels?', a: 'Many Miami brands do, and it is worth deciding before layout. Two languages need considerably more panel area than one, and adding the second later usually forces a redesign rather than an edit.' },
      { q: 'Do you have a facility in Miami?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Miami or anywhere in Florida. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How long does delivery to Miami take?', a: 'Ground freight is typically 4 to 6 business days after the 3 to 5 business days of production — the longest of our Florida destinations.' },
      { q: 'Can hurricane season affect my order?', a: 'It can. A named storm closes freight lanes for days at a time. If your deadline is fixed, tell us and we will build slack into the schedule rather than quoting the tightest timeline.' },
      { q: 'What is the minimum order in Miami?', a: 'A flat 100 units on any format, enough to trial a coating through real outdoor service before committing to a season.' },
      { q: 'Will packaging fade in direct sun?', a: 'Some inks are more light-stable than others. If packs sit outdoors for extended periods, tell us and we will specify inks and coatings with better light-fastness.' },
      { q: 'Can you supply packaging for a hotel with restricted receiving?', a: 'Yes, but tell us at booking. Many hospitality sites have narrow delivery windows and no forklift, so we ship cartons or arrange a lift-gate.' },
      { q: 'How much does hospitality packaging cost in Miami?', a: 'From $0.30 per piece at large volumes. An exterior barrier coating adds a small premium and is usually the difference between a pack that works outdoors and one that does not.' },
    ],
    cta: {
      h: 'Specify a Miami run',
      body: 'Tell us whether packs are used outdoors with cold contents. That decides the coating on the outside face.',
    },
  })
]
