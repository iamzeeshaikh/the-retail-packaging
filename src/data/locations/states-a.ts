import { S, type Place } from './types'

/**
 * States, first group. Each record is written from that state's actual
 * industry base, freight position and climate, not from a shared template.
 */
export const statesA: Place[] = [
  S({
    slug: 'california',
    name: 'California',
    variant: 'industry-led',
    sections: ['industries', 'overview', 'demandTable', 'formats', 'checklist', 'logistics', 'ordering', 'resources', 'nearby'],
    keyword: 'custom packaging California',
    h1: 'Packaging for California’s beauty, wellness and DTC brands',
    eyebrow: 'California · United States',
    lede: 'More independent skincare, supplement and cannabis brands launch in California than anywhere else in the country, and each of those categories brings its own labelling rules. We manufacture to order and ship statewide.',
    metaTitle: 'Custom Packaging California | Beauty, CBD & DTC',
    metaDescription: 'Custom packaging for California beauty, wellness, cannabis and DTC brands. Prop 65 panel space, child-resistant structures and made-to-order runs from 100 units.',
    sectors: ['Beauty and skincare', 'Cannabis and CBD', 'Specialty food and beverage', 'Direct-to-consumer brands'],
    overview: {
      h: 'Why California specifications run longer than most',
      body: [
        'A carton leaving for a California retailer usually has to carry more printed information than the same carton going anywhere else. Proposition 65 warnings, cannabis compliance panels, CalRecycle labelling rules and the ingredient disclosure that beauty buyers now expect all compete for the same panel area, and they arrive late in the process when the artwork is already laid out.',
        'The practical consequence is that dieline planning matters more here. We would rather know at quoting that a Prop 65 panel is coming than reflow a finished layout, so tell us which disclosures apply before we cut the structural die.',
      ],
    },
    industries: {
      h: 'The four sectors we quote most in California',
      body: [
        'Demand concentrates in a small number of categories, and each pushes the specification in a different direction.',
      ],
      items: [
        { name: 'Beauty and skincare', detail: 'Los Angeles and Orange County carry a dense cluster of independent skincare brands. Finish quality decides shelf credibility here more than board weight does — soft-touch lamination and foil are specified more often than in any other state.' },
        { name: 'Cannabis and CBD', detail: 'A regulated market with its own structural requirements. Child-resistant closures, opacity rules and a compliance panel that cannot be shrunk all constrain the dieline before aesthetics get a say.' },
        { name: 'Specialty food and beverage', detail: 'Small-batch producers across the Bay Area and Central Coast, usually ordering short runs with frequent artwork revisions as the range expands.' },
        { name: 'Direct-to-consumer brands', detail: 'Subscription and e-commerce sellers where the unboxing moment is the marketing budget. Interior print and tape-free assembly come up in almost every brief.' },
      ],
    },
    demandTable: {
      h: 'What California buyers order, and why',
      intro: 'A rough guide to the format that usually fits each sector, based on the quotes we issue into the state.',
      head: ['Sector', 'Format usually specified', 'Deciding factor'],
      rows: [
        ['Skincare and cosmetics', 'Folding cartons with soft-touch lamination', 'Shelf presentation and ingredient panel space'],
        ['Cannabis and CBD', 'Rigid boxes or child-resistant cartons', 'Compliance panel and closure requirements'],
        ['Supplements', 'Cartons with tamper-evident closure', 'Regulatory copy and stacking on shelf'],
        ['DTC subscription', 'Roll-end tuck mailers with interior print', 'Dimensional weight and the unboxing moment'],
        ['Specialty food', 'Kraft cartons and sleeves', 'Grease resistance and short-run economics'],
      ],
    },
    logistics: {
      h: 'Freight into California and what slows it down',
      body: [
        'We ship into California by ground freight from our production partners, with most consignments landing in 5 to 7 business days. Palletised orders into the Los Angeles basin and Oakland are the simplest to schedule, because both take standard dock deliveries without special arrangement.',
        'The delays we see are almost never in production. They come from delivery addresses that turn out to be residential or shared-unit industrial parks with no forklift. If your receiving point cannot take a pallet, say so at quoting and we will break the consignment into cartons instead.',
      ],
    },
    checklist: {
      h: 'Before you sign off a California dieline',
      intro: 'Five things worth confirming while the layout can still change cheaply.',
      items: [
        'Whether a Proposition 65 warning applies to your product, and how much panel area it needs.',
        'For cannabis products, which compliance marks the current regulations require and at what minimum size.',
        'Whether your retailer has a planogram dimension you must hit rather than a preference.',
        'Whether the delivery address can accept a palletised consignment.',
        'Whether recycled content or recyclability is a claim you intend to print, since each needs different evidence.',
      ],
    },
    ordering: {
      h: 'Working with us from California',
      body: [
        'Send the product dimensions, the quantity and the disclosures that apply. We come back with a board grade, a structure, a print method and a written price, usually within one business day.',
        'Because so many California briefs involve a compliance panel, we will normally send a dieline template with the panel area blocked out before you commit design time to the artwork.',
      ],
    },
    formats: {
      h: 'Ranges that fit California demand',
      intro: 'These four cover most of what we quote into the state.',
      picks: [
        { slug: 'custom-cosmetic-packaging', why: 'The largest share of California enquiries, where finish quality carries the brand.' },
        { slug: 'custom-cbd-packaging', why: 'Structures built around closure and compliance requirements rather than aesthetics alone.' },
        { slug: 'custom-mailers', why: 'For the DTC sellers who make up much of the state’s e-commerce volume.' },
        { slug: 'sustainable-packaging', why: 'Recycled and recyclable stocks, for brands making an environmental claim they must defend.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-material-guide/', anchor: 'how board grades behave in transit', note: 'Useful when a retailer specifies a minimum caliper.' },
      { href: '/artwork-guidelines/', anchor: 'preparing artwork with a compliance panel', note: 'Covers bleed, safe area and where warning copy can sit.' },
      { href: '/sustainability/', anchor: 'which environmental claims you can actually defend', note: 'Recycled content, recyclability and compostability are three separate claims.' },
    ],
    nearby: [
      { slug: 'los-angeles', why: 'Most California beauty and apparel volume originates here.' },
      { slug: 'san-diego', why: 'A separate cluster, weighted toward supplements and craft beverage.' },
      { slug: 'washington', why: 'The other West Coast market we ship into regularly.' },
    ],
    faqs: [
      { q: 'Do I need a Proposition 65 panel on my packaging?', a: 'That depends on your product and its ingredients, and it is a legal question for you rather than for us. What we can do is reserve the panel area on the dieline so the warning does not force a redesign after artwork is finished. Tell us at quoting if one is likely.' },
      { q: 'Can you produce child-resistant packaging for California cannabis products?', a: 'We can produce child-resistant carton structures and rigid boxes with certified closures. Compliance is verified against the regulations in force when your order runs, so send us the specific requirement your licence operates under rather than a general description.' },
      { q: 'How long does delivery to California take?', a: 'Ground freight usually lands in 5 to 7 business days once production finishes, and production is 3 to 5 business days after artwork approval. Los Angeles and Oakland are the least trouble to book, since both take standard dock deliveries.' },
      { q: 'Do you have a facility in California?', a: 'We manufacture through our production partners and ship direct, so there is no office, plant or warehouse in California. Production runs through our manufacturing partners and ships directly to your California address.' },
      { q: 'Can you match a Pantone across a repeat California order?', a: 'Yes, on offset and flexo runs where we hold the ink formulation. Digital press has a wider tolerance, so if exact colour consistency across repeat runs matters more than short-run economics, tell us and we will quote the litho route.' },
      { q: 'What is the minimum order for a California delivery?', a: 'A flat 100 units on any format. Shipping to California does not change the minimum, though freight is quoted separately and depends on consignment size.' },
      { q: 'Can you deliver to a Los Angeles address without a loading dock?', a: 'Yes, but tell us before the consignment is booked. Without a dock we ship in cartons rather than on a pallet, or arrange a lift-gate delivery, and both affect the freight cost.' },
      { q: 'Do you offer recyclable packaging that meets California expectations?', a: 'We produce recycled paperboard, kerbside-recyclable coated stock and certified compostable options. Those are three different claims with three different evidence requirements, so tell us which one you intend to print on the pack and we will specify a material that supports it.' },
      { q: 'Can you split one California order across several addresses?', a: 'Yes. Splitting a run between, say, a Los Angeles fulfilment centre and a Bay Area retail account is straightforward if you tell us the split at quoting so freight is costed correctly from the start.' },
      { q: 'Can I get a sample sent to California before committing?', a: 'Yes. We can send a plain structural sample so you can check the fit, or a printed prototype for colour and finish. Sample costs are normally credited against the production order.' },
      { q: 'How much does custom packaging cost for a California brand?', a: 'Prices start from $0.30 per piece for large-volume orders, with final pricing driven by size, material, printing, finishes and quantity. Freight into California is quoted separately.' },
    ],
    cta: {
      h: 'Quote a California run',
      body: 'Send the dimensions, the quantity and any compliance panel you need to carry. We reply with a full specification and a written price.',
    },
  }),

  S({
    slug: 'texas',
    name: 'Texas',
    variant: 'demand-led',
    sections: ['demandTable', 'overview', 'climate', 'industries', 'logistics', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Texas',
    h1: 'Custom packaging built for Texas volume and Texas heat',
    eyebrow: 'Texas · United States',
    lede: 'Texas orders arrive larger than the coastal average and they sit in warmer warehouses. Both facts change the specification, and both are worth settling before we cut a die.',
    metaTitle: 'Custom Packaging Texas | Food Service & Fulfilment',
    metaDescription: 'Custom packaging shipped across Texas. Heat-stable coatings for hot warehouses, food-service formats and bulk runs for the I-35 fulfilment corridor.',
    sectors: ['Quick-service food', 'Barbecue and specialty food', 'Oil and industrial supply', 'E-commerce fulfilment'],
    overview: {
      h: 'Bigger runs, warmer storage',
      body: [
        'Two things separate a Texas brief from a comparable one on either coast. Order quantities tend to be larger, because food-service operators here buy for multiple sites and fulfilment operations along the I-35 corridor buy in pallet quantities rather than carton quantities. That pushes most jobs past the point where offset or flexo beats digital on unit cost.',
        'The second is storage temperature, and it is the one buyers underestimate. It changes which coating we recommend, not whether the job can be done.',
      ],
    },
    climate: {
      h: 'What a 100°F warehouse does to a laminate',
      body: [
        'Summer heat is a genuine specification issue in Texas rather than a talking point. Warehouses that reach 100°F soften some laminating adhesives, and cartons stacked on a pallet through July and August can bond face to face where the film touches. The damage shows up when the pallet is broken down, long after the run has been signed off.',
        'The fix is cheap if it is decided early: a heat-stable adhesive on laminated stock, or an aqueous coating instead of a film laminate where the finish allows. If your stock sits in an unconditioned warehouse for any part of the year, tell us and we will specify accordingly.',
      ],
    },
    industries: {
      h: 'Where Texas packaging demand comes from',
      body: [
        'Food service across Houston, Dallas and San Antonio accounts for the largest share, with fulfilment volume close behind.',
      ],
      items: [
        { name: 'Quick-service food', detail: 'Multi-site operators buying cups, trays and carriers in bulk. Grease resistance and stacking behaviour at the counter matter more than finish.' },
        { name: 'Barbecue and specialty food', detail: 'A distinctly Texan category with distinctly awkward packaging: heavy, hot, greasy contents that punish an under-specified board.' },
        { name: 'Oil and industrial supply', detail: 'Parts and consumables that need protective corrugated rather than retail presentation, often with barcode placement dictated by an internal system.' },
        { name: 'E-commerce fulfilment', detail: 'The I-35 spine between San Antonio and Dallas carries a growing concentration of third-party fulfilment operations buying mailers by the pallet.' },
      ],
    },
    demandTable: {
      h: 'The Texas order mix at a glance',
      intro: 'What we are usually asked to quote, and the constraint that decides the specification.',
      head: ['Buyer', 'Typical order', 'Constraint that decides it'],
      rows: [
        ['Quick-service chain', '25,000+ cups or trays', 'Grease resistance and unit cost at volume'],
        ['Barbecue and smokehouse', 'Heavy-duty trays and carriers', 'Load weight and moisture from hot contents'],
        ['Fulfilment operator', 'Pallet quantities of mailers', 'Dimensional weight and carrier survival'],
        ['Industrial supplier', 'Corrugated shippers with inserts', 'Protection and barcode placement'],
        ['Retail brand', 'Cartons with heat-stable coating', 'Summer warehouse temperature'],
      ],
    },
    logistics: {
      h: 'Freight across a state this size',
      body: [
        'Ground freight into Texas typically runs 5 to 7 business days. Dallas and Houston both take palletised deliveries without difficulty, and both sit on enough freight capacity that consignment size rarely causes a problem.',
        'The distances inside the state are the thing to plan for. El Paso is closer to San Diego than to Houston, so a single Texas order delivered to several sites is not one freight leg but several. Tell us the split at quoting rather than after the run.',
      ],
    },
    ordering: {
      h: 'Getting a Texas order priced accurately',
      body: [
        'Send the dimensions, the annual or per-drop quantity, and where the stock will sit between delivery and use. That last detail is the one that changes our coating recommendation.',
        'At Texas volumes the print route is usually worth a conversation. Digital removes the plate cost on short runs, but most orders we quote into the state are past the crossover point where offset or flexo is cheaper per unit.',
      ],
    },
    formats: {
      h: 'Ranges that suit Texas buyers',
      intro: 'Weighted toward food service and fulfilment, which is where the volume sits.',
      picks: [
        { slug: 'custom-food-packaging', why: 'The largest category we quote into Texas, from takeout cartons to carriers.' },
        { slug: 'custom-printed-cups', why: 'Multi-site quick-service operators buying at volume.' },
        { slug: 'custom-mailers', why: 'For the fulfilment corridor between San Antonio and Dallas.' },
        { slug: 'custom-food-trays', why: 'Built for heavy, hot and greasy contents rather than dry goods.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-cost-factors/', anchor: 'what actually moves the unit price at volume', note: 'Relevant because most Texas runs are large enough for the print route to matter.' },
      { href: '/printing-options/', anchor: 'where offset overtakes digital on cost', note: 'The crossover point for a typical Texas quantity.' },
    ],
    nearby: [
      { slug: 'houston', why: 'The largest single source of Texas food-service demand.' },
      { slug: 'dallas', why: 'Distribution weight and a separate retail market.' },
      { slug: 'austin', why: 'A different buyer profile — smaller runs, more independent brands.' },
      { slug: 'san-antonio', why: 'Anchors the southern end of the I-35 fulfilment corridor.' },
    ],
    faqs: [
      { q: 'Will Texas summer heat damage laminated packaging in storage?', a: 'It can. Above roughly 100°F some laminating adhesives soften enough that stacked cartons bond where the film touches. It is avoidable: specify a heat-stable adhesive, or use an aqueous coating instead of a film laminate. Tell us if your stock sits in an unconditioned warehouse.' },
      { q: 'Do you deliver to multiple Texas sites on one order?', a: 'Yes, and it is common here because operators run several locations. Texas is large enough that each drop is a separate freight leg, so give us the split at quoting and we will cost it properly rather than revising it later.' },
      { q: 'What is the cheapest print route for a large Texas run?', a: 'Above roughly 1,000 units offset or flexo usually beats digital, because the plate cost spreads across more pieces. Most Texas orders we quote are past that point. Below it, digital removes the plate cost entirely.' },
      { q: 'Can you supply grease-resistant food packaging?', a: 'Yes. Greaseproof papers and grease-resistant coatings are standard options across our food formats. For barbecue and other hot, heavy contents we usually recommend a heavier board as well, because moisture from hot food softens an under-specified tray before grease does.' },
      { q: 'Do you have a warehouse in Texas?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Texas. Everything is made to order and shipped to your address, which is why we quote freight separately rather than folding it into a unit price.' },
      { q: 'How quickly can packaging reach Houston or Dallas?', a: 'Production takes 3 to 5 business days after artwork approval, then ground freight into Texas is typically 5 to 7 business days. Both cities take palletised freight without special arrangement.' },
      { q: 'What is the minimum order for a Texas delivery?', a: 'A flat 100 units on any format, the same as anywhere else. Most Texas enquiries are well above it, but the minimum exists so you can test a structure before committing to a bulk run.' },
      { q: 'Can you print to a food-contact standard?', a: 'Yes. Where packaging touches food directly we specify food-contact compliant boards and inks. Tell us whether contact is direct or through a liner, because it changes which stocks are available to you.' },
      { q: 'Can you handle barcode placement for an internal warehouse system?', a: 'Yes. Send the symbology, the required size and the face it must appear on. Getting this right at dieline stage avoids the common problem of a barcode landing across a crease where scanners fail.' },
      { q: 'How much does custom packaging cost in Texas?', a: 'From $0.30 per piece at large volumes, with the final figure driven by size, material, printing, finishes and quantity. Texas quantities often reach the volume bands where unit cost falls sharply.' },
    ],
    cta: {
      h: 'Price a Texas run',
      body: 'Send the quantity, the drop locations and where the stock will be stored. We will come back with a specification, a coating recommendation and a written price.',
    },
  }),

  S({
    slug: 'florida',
    name: 'Florida',
    variant: 'material-led',
    sections: ['climate', 'overview', 'industries', 'checklist', 'demandTable', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Florida',
    h1: 'Packaging that survives Florida humidity',
    eyebrow: 'Florida · United States',
    lede: 'Board loses rigidity in a humid warehouse, and Florida has a great many humid warehouses. Everything else about a Florida order is ordinary; this part is not.',
    metaTitle: 'Custom Packaging Florida | Humidity-Resistant Stock',
    metaDescription: 'Custom packaging for Florida brands, specified for humidity. Moisture-resistant coatings, hospitality and beverage formats, made to order from 100 units.',
    sectors: ['Hospitality and tourism', 'Beverage and juice', 'Beauty and supplements', 'Cruise and event catering'],
    climate: {
      h: 'Moisture is the specification problem here',
      body: [
        'Paperboard is hygroscopic. It takes on moisture from the air until it reaches equilibrium with its surroundings, and as it does, it loses stiffness. In an air-conditioned building this barely matters. In an unconditioned Florida warehouse through August it matters a great deal: a carton that passed a compression test in the plant can fail after eight weeks of storage, and folding cartons that were crisp on delivery become soft enough to buckle under their own stack.',
        'The remedy is not exotic. A moisture-resistant coating, or a board with a barrier layer, holds performance long enough for normal stock rotation. It carries a small premium and it is far cheaper than replacing a pallet of softened cartons.',
      ],
    },
    overview: {
      h: 'Two selling seasons, not one',
      body: [
        'Florida buyers order in a different rhythm to the rest of the country. Winter tourism drives a peak that runs from roughly November to April, and a second, smaller one around the summer domestic season. Many operators consequently order in two waves rather than one annual run.',
        'That habit interacts badly with humidity. Ordering twelve months of stock in one go to hit a better unit price often means half of it sits through a Florida summer. Two runs at a slightly higher unit cost frequently work out cheaper once spoilage is counted.',
      ],
    },
    industries: {
      h: 'Sectors driving Florida demand',
      body: [
        'Hospitality volume and a substantial beverage and supplement sector account for most of what we quote into the state.',
      ],
      items: [
        { name: 'Hospitality and tourism', detail: 'Hotels, resorts and attraction catering buying cups, carriers and branded takeaway packaging against a seasonal calendar.' },
        { name: 'Beverage and juice', detail: 'A large fresh-juice and functional-drink sector where carrier strength and condensation resistance both matter.' },
        { name: 'Beauty and supplements', detail: 'Cartons and labels for brands selling into both retail and DTC, often with regulatory copy competing for panel space.' },
        { name: 'Cruise and event catering', detail: 'High-volume single-occasion orders with hard deadlines tied to a sailing or event date rather than a stock level.' },
      ],
    },
    checklist: {
      h: 'Specifying for a humid store room',
      intro: 'Work through these before you commit to a large Florida run.',
      items: [
        'How long the stock will sit between delivery and use — anything past six weeks changes our coating recommendation.',
        'Whether the storage space is air-conditioned or unconditioned.',
        'Whether cartons will be stacked on a pallet, and how high, since compression failure shows up first at the bottom of a stack.',
        'Whether the pack will meet condensation from a chilled or iced product.',
        'Whether one large run or two seasonal runs works out cheaper once storage risk is counted.',
      ],
    },
    demandTable: {
      h: 'Format choices against Florida conditions',
      intro: 'How the humidity question changes what we recommend.',
      head: ['Use', 'Standard specification', 'Florida adjustment'],
      rows: [
        ['Takeaway cartons', 'Uncoated kraft board', 'Add a moisture-resistant coating'],
        ['Cold-drink carriers', 'Standard corrugated', 'Barrier-coated board for condensation'],
        ['Retail cartons in long storage', '14pt SBS', 'Heavier caliper or a barrier layer'],
        ['Event and cruise catering', 'Bulk single run', 'Split runs timed to the event calendar'],
        ['Supplement cartons', 'Coated board', 'Standard specification is usually sufficient'],
      ],
    },
    logistics: {
      h: 'Getting freight down the peninsula',
      body: [
        'Deliveries into Florida usually take 5 to 7 business days by ground. Miami, Orlando and Tampa are all straightforward for palletised freight, though the far south of the state adds a day or two over the panhandle.',
        'Hurricane season is worth acknowledging honestly. Between June and November a named storm can close freight lanes for several days with no notice. We cannot control that, but we can build slack into a delivery date if your deadline is fixed — tell us the date that actually matters.',
      ],
    },
    ordering: {
      h: 'Placing a Florida order',
      body: [
        'Tell us the quantity, the deadline, and how the stock will be stored. Storage is the question we ask first for Florida, because it decides the coating before anything else is settled.',
        'If your requirement is tied to a season or an event date, give us that date rather than a lead time. We will work backwards and tell you the latest artwork approval that still makes it.',
      ],
    },
    formats: {
      h: 'Ranges suited to Florida conditions',
      intro: 'Weighted toward hospitality and beverage, with moisture resistance in mind.',
      picks: [
        { slug: 'custom-beverage-packaging', why: 'Carriers and cartons specified against condensation rather than dry-goods assumptions.' },
        { slug: 'custom-food-packaging', why: 'Hospitality and catering volume across the tourism corridor.' },
        { slug: 'wellness-packaging', why: 'Supplement cartons for a sector well represented across the state.' },
        { slug: 'custom-printed-cups', why: 'Cold-drink volume through resorts, attractions and event catering.' },
      ],
    },
    resources: [
      { href: '/materials/', anchor: 'how each substrate handles moisture', note: 'The board comparison that matters most for Florida storage.' },
      { href: '/finishes-and-add-ons/', anchor: 'coatings that add a moisture barrier', note: 'What each finish costs and what it protects against.' },
    ],
    nearby: [
      { slug: 'miami', why: 'The densest concentration of beauty, beverage and import activity in the state.' },
      { slug: 'jacksonville', why: 'A distribution-weighted market with a different buyer profile.' },
      { slug: 'georgia', why: 'The neighbouring state most Florida freight passes through.' },
    ],
    faqs: [
      { q: 'Does Florida humidity really affect packaging?', a: 'Yes, measurably. Paperboard absorbs atmospheric moisture until it equalises with its surroundings, and it loses stiffness as it does. Cartons stored unconditioned through a Florida summer can buckle in a stack even though they passed compression testing when they left the plant.' },
      { q: 'What coating do you recommend for Florida storage?', a: 'A moisture-resistant coating or a barrier-layer board, depending on the format. It costs a small premium over an uncoated stock and it holds performance through a normal stock rotation. For anything held longer than about six weeks unconditioned, we would specify it as standard.' },
      { q: 'Should I order once a year or twice for a seasonal business?', a: 'Two runs often work out cheaper in Florida even at a worse unit price, because a single annual run means half the stock sits through the humid months. We will price both so you can compare properly.' },
      { q: 'Can hurricane season affect my delivery date?', a: 'It can. A named storm closes freight lanes for days at a time and no carrier can work around that. If your deadline is fixed, tell us the date and we will build slack into the schedule rather than quoting the tightest possible timeline.' },
      { q: 'Do you have an office or plant in Florida?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Florida. Production runs through our manufacturing partners and ships directly to your Florida address.' },
      { q: 'How long does delivery to Miami or Orlando take?', a: 'Ground freight is usually 5 to 7 business days after production, which itself takes 3 to 5 business days from artwork approval. For South Florida, plan against the top of that window rather than the bottom.' },
      { q: 'Can you supply packaging that handles condensation from cold drinks?', a: 'Yes. Condensation is a different problem to atmospheric humidity — it is liquid water on the surface rather than moisture in the air. Barrier-coated board handles it; uncoated kraft does not.' },
      { q: 'What is the minimum order for delivery to Florida?', a: 'A flat 100 units on any format. That makes it practical to run a small batch through a Florida summer as a storage test before committing to a full seasonal quantity.' },
      { q: 'Can you deliver to a hotel or resort with restricted receiving hours?', a: 'Yes, but tell us at booking. Many hospitality sites have narrow delivery windows and no forklift, so we either arrange a lift-gate delivery or ship in cartons rather than on a pallet.' },
      { q: 'How much does custom packaging cost for a Florida business?', a: 'From $0.30 per piece at large volumes. Size, material, printing, finishes and quantity all move the figure, and a moisture-resistant coating adds a small amount worth paying for here.' },
    ],
    cta: {
      h: 'Get a Florida specification',
      body: 'Tell us the quantity, the deadline and how the stock will be stored. We will recommend a coating and send a written price.',
    },
  }),

  S({
    slug: 'new-york',
    name: 'New York',
    variant: 'retail-led',
    sections: ['retail', 'overview', 'industries', 'formats', 'logistics', 'checklist', 'ordering', 'resources', 'nearby'],
    keyword: 'custom packaging New York',
    h1: 'Finish-led packaging for New York retail and gifting',
    eyebrow: 'New York · United States',
    lede: 'New York briefs tend to be smaller in quantity and higher in specification than the national average. The constraint is rarely production — it is getting the pallet through the door.',
    metaTitle: 'Custom Packaging New York | Retail & Gifting Finish',
    metaDescription: 'Custom packaging for New York fashion, fragrance, patisserie and gifting brands. High-finish short runs, plus honest delivery planning for Manhattan addresses.',
    sectors: ['Fashion and accessories', 'Specialty food and bakery', 'Beauty and fragrance', 'Publishing and media'],
    retail: {
      h: 'Where the pack is part of the product',
      body: [
        'In fashion, fragrance, patisserie and gifting the packaging is not a container around the purchase, it is a visible part of what the customer paid for. New York carries more of those categories per square mile than anywhere else in the country, and it shows in what buyers ask for: rigid construction, foil, deboss, ribbon closures and interior linings appear in briefs here at a rate we do not see elsewhere.',
        'The trade-off is quantity. A boutique fragrance launch might need 500 rigid boxes, not 50,000, which puts the job firmly in short-run territory where hand assembly and digital print set the economics.',
      ],
    },
    overview: {
      h: 'Small runs, high specification',
      body: [
        'A typical New York order is a few hundred to a few thousand units with a finish schedule that would be unusual at ten times the quantity. That combination is entirely workable, but it changes which production route makes sense: plate costs cannot amortise across a short run, so digital print with a separate finishing pass is usually cheaper than litho with the same finish.',
        'It also changes the timeline. Hand-assembled rigid boxes and applied finishes each add a stage, so a high-finish short run can take longer than a plain long run. We will always tell you which stage is driving the date.',
      ],
    },
    industries: {
      h: 'The categories we quote most in New York',
      body: [
        'Presentation-led sectors dominate, which is why finish appears so often in these briefs.',
      ],
      items: [
        { name: 'Fashion and accessories', detail: 'Garment boxes, wallet boxes and shipping packaging that has to hold up as retail presentation and as a mailer at the same time.' },
        { name: 'Specialty food and bakery', detail: 'Patisserie and confectionery boxes where a window, a rigid base or a ribbon closure carries the price positioning.' },
        { name: 'Beauty and fragrance', detail: 'Rigid boxes with foil and deboss, usually in short runs tied to a launch or a seasonal edition.' },
        { name: 'Publishing and media', detail: 'Press kits and promotional sends where the pack is a one-off with a fixed event date behind it.' },
      ],
    },
    checklist: {
      h: 'Questions we will ask about your New York delivery',
      intro: 'Receiving, not production, is what usually decides a New York timeline.',
      items: [
        'Whether the building has a loading dock, or whether the delivery needs a lift-gate.',
        'What the permitted delivery hours are, since many buildings restrict them tightly.',
        'Whether there is a freight elevator, and its dimensions if the consignment is palletised.',
        'Whether a smaller number of cartons is easier to receive than one pallet.',
        'Whether the address is a street-level retail unit, which changes the arrangement again.',
      ],
    },
    logistics: {
      h: 'Delivering into the five boroughs',
      body: [
        'Ground freight into New York State runs 5 to 7 business days. Upstate destinations are unremarkable. Manhattan is a different exercise: many buildings have no dock, restrict delivery hours, and require the carrier to book a window in advance.',
        'None of that is a problem if we know early. Tell us the address type when you request the quote and we will size the consignment to suit it, rather than discovering at delivery that a pallet cannot get in.',
      ],
    },
    ordering: {
      h: 'Commissioning a short high-finish run',
      body: [
        'Send the dimensions, the quantity and the finish you have in mind. If the finish schedule is ambitious for the quantity we will say so and offer an alternative that reads the same at arm’s length for less money.',
        'For launches with a fixed date, give us the date rather than a lead time. Finishing stages are where short runs lose days, and we would rather plan backwards from your deadline.',
      ],
    },
    formats: {
      h: 'Ranges that fit New York briefs',
      intro: 'Presentation-led formats, mostly in short-run quantities.',
      picks: [
        { slug: 'custom-apparel-packaging', why: 'Garment and accessory boxes that double as retail presentation and shipper.' },
        { slug: 'custom-jewellery-boxes', why: 'Small rigid structures where the interior fit is the whole job.' },
        { slug: 'custom-gift-boxes', why: 'Seasonal and launch editions, usually short runs with applied finishes.' },
        { slug: 'custom-cosmetic-packaging', why: 'Fragrance and beauty cartons with foil and deboss.' },
      ],
    },
    resources: [
      { href: '/finishes-and-add-ons/', anchor: 'what each finish adds to a short run', note: 'Finishing stages are the main cost driver at New York quantities.' },
      { href: '/resources/box-style-guide/', anchor: 'choosing between a rigid box and a folding carton', note: 'The decision that most affects a presentation-led brief.' },
    ],
    nearby: [
      { slug: 'new-york-city', why: 'Where almost all of the state’s presentation-led demand sits.' },
      { slug: 'new-jersey', why: 'Where much New York fulfilment actually ships from.' },
      { slug: 'massachusetts', why: 'The nearest comparable market for short-run, high-finish work.' },
    ],
    faqs: [
      { q: 'Can you deliver to a Manhattan address without a loading dock?', a: 'Yes. Without a dock we either arrange a lift-gate delivery or break the consignment into cartons that can be hand-balled in. Both are routine, but both need to be arranged at booking rather than discovered on the day.' },
      { q: 'Is a high-finish specification viable at 500 units?', a: 'Yes, and it is one of the most common New York briefs. At that quantity we would normally print digitally and apply the finish as a separate pass, because plate costs cannot spread across a short run.' },
      { q: 'How long does a rigid box with foil and deboss take?', a: 'Longer than a plain carton. Each applied finish is a separate stage and rigid boxes are hand-assembled, so allow beyond the standard 3 to 5 production days. We confirm a firm date in writing with the quote.' },
      { q: 'Do you have a showroom or office in New York?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in New York. We can send physical samples so you can assess board, print and finish in your own hands before committing.' },
      { q: 'Can I see a printed prototype before the full run?', a: 'Yes, and for finish-led work we recommend it. Foil and soft-touch both read differently in person than on screen. Sample costs are normally credited against the production order.' },
      { q: 'What is the minimum order for a New York delivery?', a: 'A flat 100 units on any format, which suits the short-run pattern here. Below about 1,000 units we print digitally, which removes the plate cost.' },
      { q: 'Can one box work as both retail packaging and a shipper?', a: 'Sometimes, but it is usually a compromise. A box built to look good on a shelf is rarely built to survive a carrier network alone. We more often specify a presentation box inside a plain outer, and will tell you honestly which route costs less overall.' },
      { q: 'Can you match a Pantone on a short digital run?', a: 'Digital has a wider colour tolerance than offset. For a critical brand colour on a short run we can either run litho with a spot ink at higher cost, or supply a digital proof so you can approve the achievable match before production.' },
      { q: 'Do you handle deliveries with restricted building hours?', a: 'Yes. Tell us the permitted window at quoting and we will book freight against it. Missed delivery windows in Manhattan usually mean a redelivery charge, so it is worth getting right the first time.' },
      { q: 'How much does short-run presentation packaging cost?', a: 'Prices start from $0.30 per piece at large volume, but a short high-finish run sits well above that floor. Rigid construction, foil, deboss and hand assembly each add a stage. We quote the finish schedule line by line so you can see what each element costs.' },
    ],
    cta: {
      h: 'Quote a New York launch',
      body: 'Tell us the quantity, the finish you want and the delivery address type. We will price the finish schedule line by line.',
    },
  }),

  S({
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    variant: 'industry-led',
    sections: ['industries', 'overview', 'checklist', 'demandTable', 'logistics', 'formats', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Pennsylvania',
    h1: 'Packaging with a documented approval trail for Pennsylvania',
    eyebrow: 'Pennsylvania · United States',
    lede: 'A larger share of Pennsylvania work is regulated than in most states, and regulated work is less about the board than about proving which version of the artwork ran.',
    metaTitle: 'Custom Packaging Pennsylvania | Regulated & Food',
    metaDescription: 'Custom packaging for Pennsylvania food manufacturing, pharmaceutical and life-sciences buyers. Versioned proofs, sign-off records and East Coast freight.',
    sectors: ['Food manufacturing', 'Pharmaceutical and life sciences', 'Industrial distribution', 'Craft beverage'],
    industries: {
      h: 'A regulated packaging base around Philadelphia',
      body: [
        'Pennsylvania combines an established food manufacturing sector with one of the country’s denser pharmaceutical and life-sciences clusters. Both bring quality systems that treat packaging artwork as a controlled document.',
      ],
      items: [
        { name: 'Pharmaceutical and life sciences', detail: 'Cartons and inserts where the approval trail matters as much as the print. Version control, dated proofs and named sign-off are usually mandatory.' },
        { name: 'Food manufacturing', detail: 'Established producers running repeat specifications, where consistency between production runs is the recurring requirement.' },
        { name: 'Industrial distribution', detail: 'Corrugated shippers and protective inserts, often specified against a warehouse system rather than a retail shelf.' },
        { name: 'Craft beverage', detail: 'A growing brewery and distillery sector buying carriers, sleeves and labels in mid-size runs.' },
      ],
    },
    overview: {
      h: 'When artwork becomes a controlled document',
      body: [
        'For a regulated buyer, the question is not only whether the carton is right but whether you can demonstrate later that the correct version ran. That means dated proofs, a named approver, a record of what changed between revisions, and the ability to reproduce all of it during an audit.',
        'We can supply versioned proofs with sign-off records where your quality system requires them. It is worth telling us at quoting rather than after the first proof, because the documentation is built alongside the job rather than reconstructed afterwards.',
      ],
    },
    checklist: {
      h: 'What a regulated Pennsylvania brief should include',
      intro: 'Supplying these upfront avoids a proof cycle spent asking for them.',
      items: [
        'The artwork revision number and the date it was approved internally.',
        'Who is authorised to sign off a proof on your side.',
        'Whether you need dated, versioned proofs retained for audit.',
        'Any barcode or serialisation requirement, with the symbology and minimum size.',
        'Whether the carton must match an existing production standard rather than a fresh design.',
      ],
    },
    demandTable: {
      h: 'What each Pennsylvania sector needs from us',
      intro: 'The requirement that usually decides the job.',
      head: ['Sector', 'What they order', 'What decides the specification'],
      rows: [
        ['Pharmaceutical', 'Cartons, leaflets and inserts', 'Version control and audit trail'],
        ['Food manufacturing', 'Repeat carton and sleeve runs', 'Consistency between production runs'],
        ['Industrial distribution', 'Corrugated shippers with inserts', 'Protection and warehouse handling'],
        ['Craft beverage', 'Carriers, sleeves and labels', 'Moisture resistance and shelf presentation'],
      ],
    },
    logistics: {
      h: 'Sitting on the East Coast freight corridors',
      body: [
        'Ground delivery into Pennsylvania is typically 5 to 7 business days, and the state sits on enough freight corridors that the window holds up reliably. The state sits on major East Coast freight corridors and both the Philadelphia and Pittsburgh ends take palletised freight without difficulty.',
        'For repeat regulated runs the freight is rarely the variable. Scheduling is: if your production planning works to a fixed reorder point, tell us and we can hold the specification ready so a repeat needs approval only, not re-quoting.',
      ],
    },
    ordering: {
      h: 'Setting up a repeatable specification',
      body: [
        'For a first order, send the dimensions, the quantity and the documentation your quality system requires. We come back with a specification you can register internally.',
        'Once a specification is agreed, repeats reference it rather than starting again. That is the main efficiency available to a regulated buyer and it removes most of the risk of an unintended change between runs.',
      ],
    },
    formats: {
      h: 'Ranges that fit Pennsylvania demand',
      intro: 'Weighted toward regulated and repeat-run work.',
      picks: [
        { slug: 'pharmaceutical-packaging', why: 'Where version control and audit documentation are part of the job.' },
        { slug: 'custom-food-packaging', why: 'Repeat specifications for the state’s established food manufacturers.' },
        { slug: 'custom-packaging-inserts', why: 'Fitted protection for industrial and life-sciences shippers.' },
        { slug: 'wellness-packaging', why: 'Supplement and nutraceutical cartons with regulatory copy.' },
      ],
    },
    resources: [
      { href: '/artwork-guidelines/', anchor: 'the file standard our prepress team checks against', note: 'What a print-ready file needs before it enters proofing.' },
      { href: '/how-it-works/', anchor: 'where proof approval sits in the production sequence', note: 'Useful when mapping our stages onto your internal QA process.' },
    ],
    nearby: [
      { slug: 'philadelphia', why: 'The centre of the state’s life-sciences packaging demand.' },
      { slug: 'new-jersey', why: 'The adjacent state with an overlapping pharmaceutical cluster.' },
      { slug: 'maryland', why: 'Another mid-Atlantic market on the same freight corridors.' },
    ],
    faqs: [
      { q: 'Can you supply versioned proofs with sign-off records?', a: 'Yes. Where your quality system requires it we issue dated proofs against a revision number and retain the approval record. Tell us at quoting so the documentation is built alongside the job rather than reconstructed later.' },
      { q: 'Can you guarantee a repeat run matches the previous one?', a: 'On offset and flexo we hold the ink formulation and the plate specification, which makes run-to-run consistency achievable within a tight tolerance. Digital has a wider tolerance. If matching a previous run is critical, we will recommend the litho route.' },
      { q: 'Do you handle serialisation or variable barcodes?', a: 'We can accommodate variable data on digital runs. Send the symbology, the data source and the required placement early — barcodes that land across a crease fail at the scanner, and that is a dieline decision rather than a print one.' },
      { q: 'Do you have a plant in Pennsylvania?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in the state. Production runs through our manufacturing partners and ships to your Pennsylvania address, usually within 5 to 7 business days of dispatch.' },
      { q: 'How do I register a specification for repeat ordering?', a: 'Once the first run is approved we hold the full specification — board, structure, print method, finishes and dimensions — against your account. Repeat orders reference it, so nothing is re-derived and nothing changes unintentionally.' },
      { q: 'What is the minimum order for a Pennsylvania delivery?', a: 'A flat 100 units on any format. For regulated work the minimum is useful mainly as a way to validate a structure before it enters a controlled specification.' },
      { q: 'Can you supply printed leaflets and inserts as well as cartons?', a: 'Yes. Leaflets, outserts and fitted inserts can run alongside the carton so the components arrive together and share one approval cycle.' },
      { q: 'How quickly can you turn a proof around?', a: 'Prepress normally issues a proof within one business day of receiving print-ready artwork. Where a documented approval trail is required, that step is the same speed but generates a retained record.' },
      { q: 'Can you match an existing production standard rather than a new design?', a: 'Yes, and it is common here. Send the current specification and a physical sample if you have one. We will quote to match it rather than proposing an alternative you would then have to requalify.' },
      { q: 'How much does regulated packaging cost in Pennsylvania?', a: 'From $0.30 per piece at large volumes. Documentation and version control do not carry a separate line charge, but tighter colour tolerance usually points to offset, which changes the economics at lower quantities.' },
    ],
    cta: {
      h: 'Start a Pennsylvania specification',
      body: 'Send the dimensions, the quantity and the documentation your quality system needs. We will return a specification you can register internally.',
    },
  }),
]
