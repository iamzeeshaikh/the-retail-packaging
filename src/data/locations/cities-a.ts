import { C, type Place } from './types'

/**
 * Cities, first group. Each city takes a different angle from its parent
 * state so the two pages are not two versions of the same argument.
 */
export const citiesA: Place[] = [
  C({
    slug: 'new-york-city',
    name: 'New York City',
    state: 'New York',
    stateSlug: 'new-york',
    variant: 'maker-led',
    sections: ['overview', 'industries', 'checklist', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging New York City',
    h1: 'Small-batch packaging for New York City independents',
    eyebrow: 'New York City · New York',
    lede: 'The typical New York City order is a few hundred units for a brand with one shop, one product line and no warehouse. Almost everything about that shapes the specification.',
    metaTitle: 'Custom Packaging New York City | Small-Batch Runs',
    metaDescription: 'Custom packaging for New York City independents — bakeries, boutiques, studios and small labels. Runs from 100 units, with realistic delivery planning.',
    sectors: ['Independent food and bakery', 'Boutique retail', 'Studio and craft brands', 'Restaurants and takeaway'],
    overview: {
      h: 'Ordering without a stockroom',
      body: [
        'The constraint that shapes most New York City briefs is not budget or design, it is space. A bakery in Brooklyn or a studio in Queens has nowhere to put six months of boxes, so buying a large run at a better unit price is not actually available to them.',
        'The useful answer is not to pretend otherwise. We can produce in smaller batches against a scheduled delivery pattern, so you pay slightly more per unit and store a fraction of the stock. For most independents that trade is comfortably worth making.',
      ],
    },
    industries: {
      h: 'Who orders from us in the five boroughs',
      body: [
        'Almost entirely small operators, and almost all buying for a single site.',
      ],
      items: [
        { name: 'Independent food and bakery', detail: 'Pastry boxes, takeaway cartons and printed sleeves in short runs, usually with seasonal artwork changes.' },
        { name: 'Boutique retail', detail: 'Bags, tissue and small rigid boxes bought as a set, where the whole presentation has to feel coherent.' },
        { name: 'Studio and craft brands', detail: 'Makers producing in small batches who need packaging that reads as considered without a large brand budget behind it.' },
        { name: 'Restaurants and takeaway', detail: 'Delivery packaging where grease resistance and stacking behaviour in a courier bag decide the specification.' },
      ],
    },
    checklist: {
      h: 'Making a small run work harder',
      intro: 'Five ways independents get more from a limited order.',
      items: [
        'Use one structure across the range and change only a printed sleeve or a label.',
        'Order the base pack unprinted and apply a printed sticker for seasonal variants.',
        'Choose a size that suits your two best-selling products rather than a compromise across five.',
        'Schedule delivery in batches instead of taking the whole run into a small stockroom.',
        'Order a modest overage now rather than a second short run in three months.',
      ],
    },
    logistics: {
      h: 'Getting a delivery into the boroughs',
      body: [
        'Ground freight reaches the city in 2 to 5 business days. The complication is receiving, not transit. Street-level shops with no dock, walk-up buildings and narrow delivery windows are all normal here.',
        'For a small run this is usually straightforward — a few cartons rather than a pallet can be hand-delivered without special arrangement. Tell us the address type and we will ship it in a form that can actually get through the door.',
      ],
    },
    ordering: {
      h: 'Placing a small New York order',
      body: [
        'Tell us the quantity you can genuinely store as well as the quantity you want. Those are often different numbers and the second one is the useful one.',
        'If artwork changes seasonally, say so at the start. It usually changes what we recommend structurally, because a constant base pack with a variable element is much cheaper over a year than four separate runs.',
      ],
    },
    formats: {
      h: 'Formats that suit a small operator',
      intro: 'Short-run friendly, with low storage demands.',
      picks: [
        { slug: 'custom-bags', why: 'The core of most boutique and bakery presentations, and flat to store.' },
        { slug: 'custom-food-packaging', why: 'Pastry and takeaway formats for independent food businesses.' },
        { slug: 'custom-labels', why: 'The cheapest way to vary a range or run a seasonal edition.' },
        { slug: 'custom-sleeves', why: 'A printed sleeve over a plain base pack, which keeps stock simple.' },
      ],
    },
    resources: [
      { href: '/resources/custom-packaging-size-guide/', anchor: 'picking one size that fits most of your range', note: 'How to avoid holding five different boxes.' },
      { href: '/samples/', anchor: 'checking a structure before you commit shelf space', note: 'Worth doing when storage is the binding constraint.' },
    ],
    nearby: [
      { slug: 'new-york', why: 'Statewide context, including higher-volume retail work.' },
      { slug: 'new-jersey', why: 'Where a pallet can be received if the city address cannot take one.' },
      { slug: 'boston', why: 'A comparable market of independent operators.' },
    ],
    faqs: [
      { q: 'Can I order packaging if I have almost no storage space?', a: 'Yes. We can produce a run and schedule delivery in batches, so you hold a fraction of the stock at any time. The unit price is slightly higher than taking everything at once, and for most city operators that trade is clearly worth it.' },
      { q: 'What is the smallest order you will take?', a: 'A flat 100 units on any format. There is no separate small-order surcharge, though below about 1,000 units we print digitally, which removes the plate cost.' },
      { q: 'Can you deliver to a shop with no loading dock?', a: 'Yes. For small runs we ship cartons rather than a pallet, which can be hand-delivered normally. Tell us the address type at quoting so we pack it accordingly.' },
      { q: 'Do you have a shop or office in New York City?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in the city or anywhere else in New York. We can post physical samples so you can assess the board and print in your own hands.' },
      { q: 'How do I run seasonal packaging without four separate orders?', a: 'Keep one base pack constant and change a printed sleeve or a label for each season. You get a visibly different pack four times a year and pay a setup cost only on the small variable element.' },
      { q: 'How long will a small run take to arrive?', a: 'Production is 3 to 5 business days after artwork approval, plus 2 to 5 days freight into the city. If you have a fixed opening or launch date, give us the date and we will work backwards.' },
      { q: 'Can you produce grease-resistant takeaway packaging?', a: 'Yes. Greaseproof papers and grease-resistant coatings are standard across our food formats. For delivery work also tell us whether packs are stacked in a courier bag, because that changes the structural requirement.' },
      { q: 'Is it cheaper to order unprinted boxes and add stickers?', a: 'Often, for very small quantities or frequent changes. You lose full-surface print, but you gain the ability to change the design whenever you like without a new run. We will price both so you can compare.' },
      { q: 'Can I see the board before ordering?', a: 'Yes. We will send physical samples of the stocks under consideration. Board weight and surface are difficult to judge on a screen and the difference matters at the counter.' },
      { q: 'How much does packaging cost for a small New York business?', a: 'Prices start from $0.30 per piece for large-volume orders, and a 200-unit run sits well above that floor. We quote each option separately so you can see where the money is going before committing.' },
    ],
    cta: {
      h: 'Quote a small New York City run',
      body: 'Tell us the quantity you can store as well as the quantity you want. We will price a batch schedule around it.',
    },
  }),

  C({
    slug: 'los-angeles',
    name: 'Los Angeles',
    state: 'California',
    stateSlug: 'california',
    variant: 'sector-spotlight',
    sections: ['industries', 'overview', 'demandTable', 'formats', 'checklist', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Los Angeles',
    h1: 'Beauty packaging built for the Los Angeles launch cycle',
    eyebrow: 'Los Angeles · California',
    lede: 'Los Angeles beauty brands launch faster and iterate harder than almost any other market. The packaging problem here is rarely the first run — it is the fourth one, six months later.',
    metaTitle: 'Custom Packaging Los Angeles | Beauty & Launch Runs',
    metaDescription: 'Custom packaging for Los Angeles beauty, apparel and DTC brands. Structures designed to survive fast iteration, with Prop 65 panel space planned in.',
    sectors: ['Beauty and skincare', 'Apparel and streetwear', 'Entertainment and influencer', 'Health and supplements'],
    industries: {
      h: 'A beauty market that iterates constantly',
      body: [
        'Los Angeles carries the densest concentration of independent beauty brands in the country, and the pattern is consistent: launch small, learn quickly, reformulate, relaunch.',
      ],
      items: [
        { name: 'Beauty and skincare', detail: 'Cartons and sleeves where the ingredient panel changes more often than the structure does. Designing for that from the start saves repeated tooling.' },
        { name: 'Apparel and streetwear', detail: 'Drop-based releases with hard dates and limited quantities, where the pack is part of the release.' },
        { name: 'Entertainment and influencer', detail: 'Press and seeding packaging produced in a single wave with no second run behind it.' },
        { name: 'Health and supplements', detail: 'Cartons carrying substantial regulatory copy alongside brand design, competing for the same panel.' },
      ],
    },
    overview: {
      h: 'Design the structure to outlive the artwork',
      body: [
        'The expensive mistake in a fast-iterating market is tooling a structure around a specific formulation or claim, then re-tooling when either changes. The structure — dimensions, closure, insert — should be stable enough to survive several artwork generations.',
        'Practically that means sizing to the container rather than to the current label, leaving panel headroom for claims you have not written yet, and choosing a print route that makes a small artwork change cheap rather than a new setup.',
      ],
    },
    demandTable: {
      h: 'What changes between launches, and what should not',
      intro: 'Separating the stable parts of a pack from the volatile ones.',
      head: ['Element', 'How often it changes', 'Design implication'],
      rows: [
        ['Container dimensions', 'Rarely', 'Tool the structure around this'],
        ['Ingredient panel', 'Frequently', 'Leave headroom from the start'],
        ['Brand artwork', 'Every season or two', 'Favour a print route with cheap changeover'],
        ['Claims and certifications', 'Unpredictably', 'Reserve panel area early'],
        ['Range size', 'Grows', 'Pick a structure that scales to variants'],
      ],
    },
    checklist: {
      h: 'Planning a first run you will not regret',
      intro: 'Questions worth answering before the first die is cut.',
      items: [
        'Will the container size change, or only the formulation inside it?',
        'How many variants is the range likely to have in a year?',
        'Is a Proposition 65 panel likely to become necessary?',
        'Will the pack ship direct to consumers as well as sit on a shelf?',
        'Is the first quantity a genuine forecast or a test?',
      ],
    },
    logistics: {
      h: 'Delivery into the LA basin',
      body: [
        'Ground freight into Los Angeles typically lands in 3 to 6 business days, and the basin is one of the easier destinations in the state for palletised consignments.',
        'Where deliveries go wrong here is address type. A great many LA beauty brands operate from shared industrial units or co-working studios with no forklift. Tell us which you have and we will break the consignment down accordingly.',
      ],
    },
    ordering: {
      h: 'Quoting an LA launch',
      body: [
        'Send the container, the first quantity and an honest guess at how many variants the range will have within a year. That last answer changes our structural recommendation more than anything else.',
        'For seeding and press work, give us the send date rather than a lead time.',
      ],
    },
    formats: {
      h: 'Formats for a fast-moving LA brand',
      intro: 'Chosen for iteration as much as for appearance.',
      picks: [
        { slug: 'custom-cosmetic-packaging', why: 'The core category, with panel headroom planned for changing claims.' },
        { slug: 'custom-sleeves', why: 'Variant changes without re-running the whole pack.' },
        { slug: 'custom-mailers', why: 'For the DTC channel most LA beauty brands run alongside retail.' },
        { slug: 'promotional-packaging', why: 'Seeding and press sends against fixed dates.' },
      ],
    },
    resources: [
      { href: '/printing-options/', anchor: 'which print route makes artwork changes cheap', note: 'The decision that matters most to an iterating brand.' },
      { href: '/artwork-guidelines/', anchor: 'leaving room for claims you have not written yet', note: 'Panel planning before the layout is fixed.' },
    ],
    nearby: [
      { slug: 'california', why: 'Statewide context, including compliance requirements.' },
      { slug: 'san-diego', why: 'A different California cluster, weighted to supplements.' },
      { slug: 'phoenix', why: 'The nearest large market for onward distribution.' },
    ],
    faqs: [
      { q: 'How do I avoid re-tooling every time my formula changes?', a: 'Tool the structure around the container rather than the current artwork, and leave panel headroom for claims that do not exist yet. A formulation change should only need new print, not a new die.' },
      { q: 'Which print route is best for a brand that iterates quickly?', a: 'Usually digital while the range is still moving. There are no plates to remake when the artwork changes, so a revision costs almost nothing. Once volumes stabilise, offset becomes cheaper per unit.' },
      { q: 'Can you deliver to a shared industrial unit with no forklift?', a: 'Yes. Tell us at quoting and we will ship cartons rather than a pallet, or arrange a lift-gate delivery. Discovering it at the door usually means a redelivery charge.' },
      { q: 'Do you have a facility in Los Angeles?', a: 'We manufacture through our production partners and ship direct — there is no office, plant or warehouse in Los Angeles. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How much panel space should I reserve for a Prop 65 warning?', a: 'Enough that adding it later does not force a reflow. We will block the area on the dieline template before you commit design time, which is much cheaper than rearranging finished artwork.' },
      { q: 'What is the minimum order for an LA brand?', a: 'A flat 100 units on any format, which suits a genuine launch test rather than a forecast you are not confident in.' },
      { q: 'Can one structure work across several product variants?', a: 'Usually yes, and it is worth designing for. A shared structure with a variable sleeve or label lets you add variants without new tooling each time.' },
      { q: 'How quickly can you turn around a seeding run?', a: 'Production is 3 to 5 business days after artwork approval plus freight. Give us the send date and we will tell you the latest approval that still lands in time.' },
      { q: 'Should my retail carton also work as a mailer?', a: 'Rarely, in beauty. A carton built for shelf presentation is not built for a carrier network, and glass or pumps make that worse. A presentation carton inside a plain protective mailer is usually cheaper than one box trying to do both.' },
      { q: 'How much does beauty packaging cost in Los Angeles?', a: 'From $0.30 per piece at large volumes. Launch quantities sit above that, and soft-touch lamination, foil and rigid construction each add a stage we quote separately.' },
    ],
    cta: {
      h: 'Quote a Los Angeles launch',
      body: 'Send the container and an honest estimate of how many variants you will have in a year. We will design the structure to last.',
    },
  }),

  C({
    slug: 'chicago',
    name: 'Chicago',
    state: 'Illinois',
    stateSlug: 'illinois',
    variant: 'hospitality-led',
    sections: ['industries', 'overview', 'demandTable', 'checklist', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Chicago',
    h1: 'Takeaway and delivery packaging for Chicago kitchens',
    eyebrow: 'Chicago · Illinois',
    lede: 'A Chicago restaurant pack has to survive a courier bag, a flight of stairs and a Chicago winter between the kitchen and the table. Most packaging failures here happen in that last mile.',
    metaTitle: 'Custom Packaging Chicago | Restaurant & Delivery',
    metaDescription: 'Custom takeaway and delivery packaging for Chicago restaurants and food businesses. Grease resistance, stacking strength and heat retention that survives the last mile.',
    sectors: ['Restaurants and delivery', 'Bakery and confectionery', 'Bars and breweries', 'Grocery and specialty food'],
    industries: {
      h: 'A food city with a delivery problem',
      body: [
        'Chicago’s restaurant density is matched by its delivery volume, and delivery is where packaging is genuinely tested.',
      ],
      items: [
        { name: 'Restaurants and delivery', detail: 'Cartons and trays that must stack in a courier bag, resist grease and stay closed when carried at an angle.' },
        { name: 'Bakery and confectionery', detail: 'Presentation boxes with windows and inserts, where the product has to arrive looking as it left.' },
        { name: 'Bars and breweries', detail: 'Carriers and sleeves for takeaway service, needing condensation resistance as standard.' },
        { name: 'Grocery and specialty food', detail: 'Retail formats that also need to survive a distribution chain, since many sell wholesale too.' },
      ],
    },
    overview: {
      h: 'The last mile is the hard part',
      body: [
        'Kitchen-to-counter is easy. Counter-to-table via a courier bag is not. Packs are stacked at angles, carried in insulated bags that trap steam, set down hard, and opened by someone who is already disappointed if anything has shifted.',
        'The three failures we are asked to solve are almost always the same: grease striking through to the outside, a closure that opens under weight, and condensation from trapped steam softening the board. Each has a straightforward answer, but they need specifying rather than assuming.',
      ],
    },
    demandTable: {
      h: 'Three delivery failures and their fixes',
      intro: 'What actually goes wrong between the kitchen and the customer.',
      head: ['Failure', 'Cause', 'Specification that fixes it'],
      rows: [
        ['Grease strike-through', 'Untreated board against hot food', 'Grease-resistant coating or greaseproof liner'],
        ['Lid opening in transit', 'Closure sized for a flat surface', 'Locking tab or tuck designed for angled carriage'],
        ['Soggy base', 'Trapped steam condensing inside', 'Vented structure or moisture-resistant board'],
        ['Crushing in a stack', 'Board too light for the load above', 'Heavier caliper on the base and walls'],
      ],
    },
    checklist: {
      h: 'Testing a delivery pack properly',
      intro: 'Worth doing before committing to a full run.',
      items: [
        'Fill it with the hottest, greasiest item on your menu, not a representative one.',
        'Carry it at an angle in an insulated bag for the length of a typical delivery.',
        'Stack it under two more of the same and leave it for twenty minutes.',
        'Open it the way a customer will, not the way you know it opens.',
        'Repeat in cold weather if you deliver through a Chicago winter.',
      ],
    },
    logistics: {
      h: 'Supply into a working kitchen',
      body: [
        'Ground freight reaches Chicago in 2 to 4 business days, and the city is one of the easiest destinations in the country for palletised consignments.',
        'Kitchen storage is the real constraint. Restaurants rarely have room for a pallet of packaging, so we frequently split a run into scheduled drops. Tell us your storage capacity and delivery frequency and we will schedule around it.',
      ],
    },
    ordering: {
      h: 'Specifying a Chicago food pack',
      body: [
        'Tell us the hottest and greasiest thing that will go in it, and whether it travels by courier. Those two facts decide most of the specification.',
        'If you run seasonal menus, keep one structure and vary the print. It costs far less than tooling a new pack each time the menu changes.',
      ],
    },
    formats: {
      h: 'Formats for Chicago food service',
      intro: 'Built for the last mile.',
      picks: [
        { slug: 'custom-food-packaging', why: 'Takeaway cartons and containers specified for delivery rather than counter service.' },
        { slug: 'custom-food-trays', why: 'For heavy and hot contents that punish a light board.' },
        { slug: 'custom-printed-cups', why: 'Hot and cold drinks, including condensation-resistant builds.' },
        { slug: 'custom-bags', why: 'Carry-out bags strong enough for a full order at an angle.' },
      ],
    },
    resources: [
      { href: '/materials/', anchor: 'grease-resistant boards and how they differ', note: 'Coating versus liner, and when each is right.' },
      { href: '/resources/box-style-guide/', anchor: 'closures that hold under weight', note: 'The structural detail behind lids that stay shut.' },
    ],
    nearby: [
      { slug: 'illinois', why: 'Statewide context, including grocery and retail-ready work.' },
      { slug: 'indianapolis', why: 'The nearest comparable Midwest market.' },
      { slug: 'michigan', why: 'Where cold-weather specification matters for the same formats.' },
    ],
    faqs: [
      { q: 'How do I stop grease showing through my takeaway boxes?', a: 'Specify a grease-resistant coating or a greaseproof liner. Untreated board will always strike through eventually with hot, oily food — it is a material property rather than a quality issue, and it is inexpensive to design out.' },
      { q: 'My lids pop open in delivery bags. What fixes that?', a: 'A closure designed for angled carriage rather than a flat counter. Locking tabs and deeper tucks both hold under weight. It is a structural change, so it needs to happen at dieline stage.' },
      { q: 'Why does food arrive soggy even in a good box?', a: 'Trapped steam condensing on the inside. A vented structure lets it escape; a moisture-resistant board stops the base softening. Which one is right depends on whether venting would let the food go cold.' },
      { q: 'Do you have a warehouse in Chicago?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Chicago. Production runs through our manufacturing partners and ships directly to your address.' },
      { q: 'Can you deliver in batches so we do not fill the kitchen?', a: 'Yes, and it is common for restaurant work. We produce the run and schedule drops against your storage capacity rather than sending everything at once.' },
      { q: 'How fast can we get packaging in Chicago?', a: 'Production is 3 to 5 business days after artwork approval, then 2 to 4 days freight. Chicago is among the quickest destinations we ship to.' },
      { q: 'What is the minimum order for a restaurant?', a: 'A flat 100 units on any format, which is enough to test a pack through real deliveries before committing to a season’s supply.' },
      { q: 'Can I change the print for a seasonal menu?', a: 'Yes, and it is much cheaper than a new structure. Keep the same box and change the printed artwork, or use a plain base with a printed sleeve for very frequent changes.' },
      { q: 'Do you supply food-contact compliant materials?', a: 'Yes. Tell us whether the food touches the board directly or sits on a liner, because it changes which stocks are available to you.' },
      { q: 'How much does takeaway packaging cost in Chicago?', a: 'From $0.30 per piece at large volumes. Grease-resistant coatings add a small amount; heavier board for hot, heavy contents adds more. Both are cheaper than a remade order.' },
    ],
    cta: {
      h: 'Specify a Chicago delivery pack',
      body: 'Tell us the hottest, greasiest thing on your menu and how it travels. We will specify the board, coating and closure around it.',
    },
  }),

  C({
    slug: 'houston',
    name: 'Houston',
    state: 'Texas',
    stateSlug: 'texas',
    variant: 'sector-spotlight',
    sections: ['industries', 'demandTable', 'overview', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Houston',
    h1: 'Industrial and food-service packaging for Houston',
    eyebrow: 'Houston · Texas',
    lede: 'Houston runs two packaging economies side by side — heavy industrial supply and one of the largest restaurant markets in the country — and they want almost opposite things.',
    metaTitle: 'Custom Packaging Houston | Industrial & Food Service',
    metaDescription: 'Custom packaging for Houston industrial suppliers and food-service operators. Protective corrugated, grease-resistant formats and bulk runs.',
    sectors: ['Industrial and energy supply', 'Restaurants and catering', 'Medical and healthcare', 'Import and distribution'],
    industries: {
      h: 'Two markets, one city',
      body: [
        'Houston enquiries split cleanly between industrial supply and food service, and the specifications rarely overlap.',
      ],
      items: [
        { name: 'Industrial and energy supply', detail: 'Parts, consumables and equipment where protection and handling weight decide everything and print is often unnecessary.' },
        { name: 'Restaurants and catering', detail: 'A very large and diverse restaurant sector, with grease resistance and heat performance as baseline requirements.' },
        { name: 'Medical and healthcare', detail: 'The Texas Medical Center generates demand for protective and documented packaging.' },
        { name: 'Import and distribution', detail: 'Port activity feeds a repack and redistribution sector buying at volume.' },
      ],
    },
    demandTable: {
      h: 'Opposite requirements, side by side',
      intro: 'Why we ask which side of the city you are on before quoting.',
      head: ['Requirement', 'Industrial supply', 'Food service'],
      rows: [
        ['Print', 'Often none needed', 'Central to the brand'],
        ['Board grade', 'Heavy, protection-led', 'Light, cost-led at volume'],
        ['Governing risk', 'Damage in handling', 'Grease and heat'],
        ['Order pattern', 'Irregular, project-based', 'Regular, high frequency'],
        ['Storage', 'Warehouse, usually fine', 'Tight, needs phasing'],
      ],
    },
    overview: {
      h: 'Where print is worth paying for',
      body: [
        'Industrial buyers frequently ask for printed boxes out of habit rather than need. If a carton goes from a warehouse to a technician and is discarded, print adds cost and no return. A plain box with a clear label often does the job better and cheaper.',
        'The exception is where the pack reaches a customer or sits on a distributor’s shelf. Then print earns its place. We will tell you plainly which side of that line we think your job falls on.',
      ],
    },
    logistics: {
      h: 'Freight and heat in Houston',
      body: [
        'Ground freight into Houston runs 2 to 5 business days and the city takes palletised deliveries without difficulty.',
        'Storage temperature matters as much here as anywhere in Texas. If stock sits in an unconditioned warehouse through summer, a heat-stable coating on laminated work avoids cartons bonding in the stack.',
      ],
    },
    ordering: {
      h: 'Getting a Houston quote right',
      body: [
        'Tell us which market you are in and what the pack has to survive. For industrial work that means weight and handling; for food service it means the hottest, greasiest item involved.',
        'For high-frequency restaurant supply, tell us your storage capacity so we can phase deliveries rather than filling your stockroom in one drop.',
      ],
    },
    formats: {
      h: 'Ranges for both Houston markets',
      intro: 'Deliberately split across the two.',
      picks: [
        { slug: 'custom-packaging-inserts', why: 'Protective fitted packaging for industrial components.' },
        { slug: 'custom-food-packaging', why: 'Takeaway and catering formats for a very large restaurant sector.' },
        { slug: 'custom-printed-cups', why: 'High-frequency food-service consumables.' },
        { slug: 'custom-mailers', why: 'For distribution and repack operations shipping onward.' },
      ],
    },
    resources: [
      { href: '/resources/packaging-cost-factors/', anchor: 'when printing an outer stops paying for itself', note: 'Relevant to any industrial buyer printing out of habit.' },
      { href: '/materials/', anchor: 'grease resistance and heat performance compared', note: 'The two constraints food-service buyers ask about most.' },
    ],
    nearby: [
      { slug: 'texas', why: 'Statewide context, including the heat specification.' },
      { slug: 'san-antonio', why: 'The nearest major Texas market on the same corridor.' },
      { slug: 'dallas', why: 'A different Texas buyer profile, weighted to distribution.' },
    ],
    faqs: [
      { q: 'Do I need printed boxes for industrial supply?', a: 'Often not. If the box goes from warehouse to technician and is discarded, print adds cost without return, and a plain box with a clear label works better. Where the pack reaches a customer or a distributor shelf, print earns its place.' },
      { q: 'How do I stop cartons sticking together in a hot warehouse?', a: 'Specify a heat-stable laminating adhesive, or an aqueous coating instead of a film laminate. Above roughly 100°F standard adhesives soften and stacked cartons bond where the film touches.' },
      { q: 'Do you have a facility in Houston?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Houston. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'Can you phase deliveries for a restaurant with limited storage?', a: 'Yes. We produce the run and schedule drops against your capacity, which is standard for high-frequency food-service supply.' },
      { q: 'How long does delivery to Houston take?', a: 'Ground freight is typically 2 to 5 business days after the 3 to 5 business days of production. Houston takes palletised deliveries without special arrangement.' },
      { q: 'Can you package heavy industrial components?', a: 'Yes. Send the weight, geometry and the vulnerable points. Heavy items are an insert and edge-protection problem more than a box problem.' },
      { q: 'What is the minimum order in Houston?', a: 'A flat 100 units on any format, whichever market you are in.' },
      { q: 'Can you supply food-contact compliant packaging?', a: 'Yes. Tell us whether contact is direct or through a liner, since it changes which boards and inks are available.' },
      { q: 'Do you supply plain corrugated as well as printed?', a: 'Yes. Plain corrugated is frequently the right answer for a protective outer, and it lets you put the print budget where it is actually seen.' },
      { q: 'How much does packaging cost in Houston?', a: 'From $0.30 per piece at large volumes. Houston quantities are often high enough to reach the bands where unit cost falls sharply.' },
    ],
    cta: {
      h: 'Quote a Houston order',
      body: 'Tell us whether this is industrial or food service, and what the pack has to survive. The questions differ and we will ask the right ones.',
    },
  }),

  C({
    slug: 'phoenix',
    name: 'Phoenix',
    state: 'Arizona',
    stateSlug: 'arizona',
    variant: 'ecommerce-led',
    sections: ['overview', 'demandTable', 'industries', 'checklist', 'formats', 'logistics', 'ordering', 'nearby', 'resources'],
    keyword: 'custom packaging Phoenix',
    h1: 'Shipping packaging for Phoenix fulfilment operations',
    eyebrow: 'Phoenix · Arizona',
    lede: 'Phoenix has become a serious fulfilment market, and fulfilment packaging is judged on two numbers: what it costs to ship and how often it arrives damaged.',
    metaTitle: 'Custom Packaging Phoenix | Fulfilment & Shipping',
    metaDescription: 'Custom shipping packaging for Phoenix fulfilment operations and DTC brands. Right-sized mailers, fitted inserts and lower dimensional weight.',
    sectors: ['E-commerce fulfilment', 'Supplements and nutrition', 'Electronics distribution', 'Home goods'],
    overview: {
      h: 'Two numbers decide everything',
      body: [
        'For a fulfilment operation, packaging is a recurring cost with a recurring risk attached. The unit price of the box is the least interesting number in the calculation. What matters is the shipping cost it generates on every parcel and the damage rate it fails to prevent.',
        'A box that costs three cents more but drops a dimensional weight band pays for itself immediately. A box that costs three cents less and raises damage by half a percent is a bad trade on almost any product value.',
      ],
    },
    demandTable: {
      h: 'What a packaging change is actually worth',
      intro: 'The arithmetic that should drive a fulfilment decision.',
      head: ['Change', 'Effect on unit cost', 'Effect on total cost'],
      rows: [
        ['Right-sizing the box', 'Neutral or slightly lower', 'Large saving on every parcel'],
        ['Adding a fitted insert', 'Higher', 'Usually lower — damage falls'],
        ['Dropping a board grade', 'Lower', 'Higher if damage rises'],
        ['Removing void fill', 'Lower', 'Lower, if the box was right-sized first'],
        ['Printing the outer', 'Higher', 'Neutral — a brand decision, not a cost one'],
      ],
    },
    industries: {
      h: 'What ships out of Phoenix',
      body: [
        'A growing fulfilment sector, with supplements and electronics well represented.',
      ],
      items: [
        { name: 'E-commerce fulfilment', detail: 'Third-party and in-house operations buying mailers at pallet quantities, where small dimensional savings compound quickly.' },
        { name: 'Supplements and nutrition', detail: 'A substantial local sector shipping direct as well as into retail, with cartons that must work in both channels.' },
        { name: 'Electronics distribution', detail: 'Devices and accessories where fitted protection prevents most of the damage.' },
        { name: 'Home goods', detail: 'Bulkier items where dimensional weight dominates the shipping bill.' },
      ],
    },
    checklist: {
      h: 'Auditing an existing fulfilment pack',
      intro: 'Five checks that usually find money.',
      items: [
        'Measure the product and compare it against the box you are actually using.',
        'Check how much void fill goes in — it is a direct measure of wasted volume.',
        'Find which dimensional weight band you sit in and how far you are from the one below.',
        'Separate damage caused by crushing from damage caused by movement inside.',
        'Count how many box sizes you run; most operations use one or two more than they need.',
      ],
    },
    logistics: {
      h: 'Inbound freight and summer storage',
      body: [
        'Ground delivery into Phoenix typically takes 3 to 6 business days and the metropolitan area takes palletised freight easily.',
        'Summer storage is worth a thought for laminated stock, though most fulfilment packaging is plain corrugated, which is unaffected by heat in a way that laminated cartons are not.',
      ],
    },
    ordering: {
      h: 'Getting a fulfilment quote that means something',
      body: [
        'Send product dimensions and your current damage rate rather than the box you are using now. The current box is usually inherited rather than chosen, and quoting a replacement for it just repeats an old decision.',
        'If you run multiple product sizes, send the range. Consolidating to fewer box sizes is often possible and reduces both purchasing complexity and storage.',
      ],
    },
    formats: {
      h: 'Formats for Phoenix shippers',
      intro: 'Shipping-led, with protection where it pays.',
      picks: [
        { slug: 'custom-mailers', why: 'The core format, where right-sizing delivers the recurring saving.' },
        { slug: 'custom-packaging-inserts', why: 'How you cut damage without adding board.' },
        { slug: 'electronics-packaging', why: 'Fitted protection for devices and accessories.' },
        { slug: 'wellness-packaging', why: 'Supplement cartons that work in retail and DTC channels.' },
      ],
    },
    resources: [
      { href: '/resources/custom-packaging-size-guide/', anchor: 'finding the dimensional weight band below yours', note: 'Where the recurring saving usually comes from.' },
      { href: '/resources/packaging-insert-guide/', anchor: 'stopping movement rather than adding board', note: 'The cheaper route to a lower damage rate.' },
    ],
    nearby: [
      { slug: 'arizona', why: 'Statewide context, including the dry-climate crease issue.' },
      { slug: 'los-angeles', why: 'The nearest large market and a common onward destination.' },
      { slug: 'denver', why: 'A comparable inland distribution market.' },
    ],
    faqs: [
      { q: 'How do I work out whether a new box would save money?', a: 'Compare the shipping cost per parcel, not the unit price of the box. A box that costs slightly more but drops you a dimensional weight band saves on every parcel you ship, which almost always outweighs the difference.' },
      { q: 'Is void fill a sign of a problem?', a: 'Usually, yes. Void fill is a direct measure of volume you are paying to ship and doing nothing with. It is sometimes the right answer for irregular items, but if you are using a lot, the box is probably a size too large.' },
      { q: 'Should I reduce board grade to save money?', a: 'Only if your damage is not coming from crushing. Dropping a grade on a box that is already at its limit raises damage and costs far more than it saves. Look at where the damage actually happens first.' },
      { q: 'Do you have a warehouse in Phoenix?', a: 'We manufacture through our production partners and ship direct — there is no office or warehouse in Phoenix. Production runs through our manufacturing partners and ships to your address.' },
      { q: 'How many box sizes should we run?', a: 'Fewer than most operations do. Every extra size adds purchasing, storage and pick complexity. We will look at your product range and tell you honestly whether it can consolidate.' },
      { q: 'How long does delivery to Phoenix take?', a: 'Ground freight is typically 3 to 6 business days after the 3 to 5 business days of production.' },
      { q: 'What is the minimum order in Phoenix?', a: 'A flat 100 units on any format, which is enough to trial a right-sized box against your real damage rate before switching a line.' },
      { q: 'Does Arizona heat affect corrugated shippers?', a: 'Not meaningfully. Heat affects laminated cartons, where adhesives soften. Plain corrugated, which is most fulfilment packaging, is unaffected.' },
      { q: 'Should we print our shipping boxes?', a: 'That is a brand decision rather than a cost one. Printing does not change shipping cost or protection. If the unboxing matters to your customers it can be worth it; if parcels go to a business address, usually not.' },
      { q: 'How much does fulfilment packaging cost in Phoenix?', a: 'From $0.30 per piece at large volumes. For a shipper the more useful figure is the total per-parcel cost including freight, and we are happy to work that through with you.' },
    ],
    cta: {
      h: 'Audit a Phoenix shipping pack',
      body: 'Send the product dimensions and your damage rate. We will tell you whether the box can shrink and what that saves per parcel.',
    },
  }),
]
