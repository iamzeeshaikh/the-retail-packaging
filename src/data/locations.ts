/**
 * Location data.
 *
 * Each entry carries genuine regional facts — the sectors that actually drive
 * packaging demand there, the freight reality, and a note that only applies to
 * that place. No invented offices, teams, addresses or testimonials.
 */
export interface Place {
  slug: string
  name: string
  kind: 'state' | 'city'
  /** State the city sits in, for cities only. */
  state?: string
  stateSlug?: string
  /** Sectors that genuinely generate packaging demand locally. */
  sectors: string[]
  /** One paragraph of real local context. */
  context: string
  /** Freight and delivery reality for this place. */
  freight: string
  /** A specific, non-generic observation about buyers here. */
  note: string
  /** Category slugs most relevant locally. */
  recommend: string[]
}

const S = (
  slug: string, name: string, sectors: string[], context: string,
  freight: string, note: string, recommend: string[]
): Place => ({ slug, name, kind: 'state', sectors, context, freight, note, recommend })

const C = (
  slug: string, name: string, state: string, stateSlug: string, sectors: string[],
  context: string, freight: string, note: string, recommend: string[]
): Place => ({ slug, name, kind: 'city', state, stateSlug, sectors, context, freight, note, recommend })

export const states: Place[] = [
  S('california', 'California',
    ['Beauty and skincare', 'Cannabis and CBD', 'Specialty food and beverage', 'Direct-to-consumer brands'],
    'California carries more independent beauty and wellness brands than any other state, and a regulated cannabis market that sets its own packaging rules. Between Los Angeles, the Bay Area and San Diego, most of the demand we see is small-batch launches scaling into national retail.',
    'We ship into California by ground freight from our production partners, with most consignments landing in 3 to 6 business days. Palletised orders to Los Angeles and Oakland move fastest.',
    'California Proposition 65 warning requirements catch out-of-state brands regularly. If your product needs a Prop 65 panel, allow room for it on the dieline before we go to print.',
    ['custom-cosmetic-packaging', 'custom-cbd-packaging', 'custom-mailers', 'sustainable-packaging']),

  S('texas', 'Texas',
    ['Quick-service food', 'Barbecue and specialty food', 'Oil and industrial supply', 'E-commerce fulfilment'],
    'Texas demand splits between food service across Houston, Dallas and San Antonio, and a fast-growing e-commerce fulfilment corridor along the I-35 spine. Volumes tend to be larger per order than the coastal states.',
    'Ground freight into Texas typically runs 2 to 5 business days. Dallas and Houston both take palletised deliveries without difficulty.',
    'Summer heat is a genuine specification issue here. Warehouses that reach 100°F soften some laminating adhesives, so we recommend heat-stable coatings on anything stored through July and August.',
    ['custom-food-packaging', 'custom-printed-cups', 'custom-mailers', 'custom-food-trays']),

  S('florida', 'Florida',
    ['Hospitality and tourism', 'Beverage and juice', 'Beauty and supplements', 'Cruise and event catering'],
    'Florida packaging demand is shaped by hospitality volume and a large supplement and beverage sector. Seasonal peaks around winter tourism mean many buyers order in two waves rather than one annual run.',
    'Deliveries into Florida usually take 3 to 6 business days by ground. Miami, Orlando and Tampa are all straightforward for palletised freight.',
    'Humidity is the specification factor buyers underestimate. Uncoated board stored in an unconditioned Florida warehouse absorbs moisture and loses rigidity, so a moisture-resistant coating is worth the small premium.',
    ['custom-beverage-packaging', 'custom-food-packaging', 'wellness-packaging', 'custom-printed-cups']),

  S('new-york', 'New York',
    ['Fashion and accessories', 'Specialty food and bakery', 'Beauty and fragrance', 'Publishing and media'],
    'New York buyers skew toward presentation-led packaging — fashion, fragrance, patisserie and gifting. Order quantities are often smaller but the finish specification is higher than average.',
    'Ground freight into New York State runs 2 to 5 business days. Deliveries into Manhattan need a delivery window and often a lift-gate, which we arrange at booking.',
    'Manhattan receiving is the practical constraint, not production. Many buildings have no loading dock and restrict delivery hours, so tell us the address type early and we will size the consignment to suit.',
    ['custom-apparel-packaging', 'custom-jewellery-boxes', 'custom-gift-boxes', 'custom-cosmetic-packaging']),

  S('pennsylvania', 'Pennsylvania',
    ['Food manufacturing', 'Pharmaceutical and life sciences', 'Industrial distribution', 'Craft beverage'],
    'Pennsylvania combines an established food manufacturing base with a substantial pharmaceutical and life-sciences cluster around Philadelphia. Regulated packaging with controlled artwork revisions makes up a larger share of demand here than in most states.',
    'Ground delivery into Pennsylvania is typically 2 to 4 business days, helped by the state sitting on major East Coast freight corridors.',
    'Pharmaceutical buyers here usually need a documented artwork approval trail. We can supply versioned proofs with sign-off records if your quality system requires them.',
    ['pharmaceutical-packaging', 'custom-food-packaging', 'custom-mailers', 'wellness-packaging']),

  S('illinois', 'Illinois',
    ['Food and confectionery', 'Logistics and distribution', 'Retail and grocery', 'Trade shows and events'],
    'Illinois is a distribution hub before it is anything else, and Chicago hosts a dense food and confectionery manufacturing base. Retail-ready packaging that survives a full distribution chain is the recurring requirement.',
    'Chicago is one of the easiest destinations in the country for palletised freight, with most consignments arriving in 2 to 4 business days.',
    'Retail-ready specifications matter more here because so much product moves through grocery distribution. Confirm your retailer planogram dimensions before we cut the structural die.',
    ['custom-display-boxes', 'custom-food-packaging', 'custom-mailers', 'custom-packaging-inserts']),

  S('ohio', 'Ohio',
    ['Consumer goods manufacturing', 'E-commerce fulfilment', 'Food processing', 'Automotive supply'],
    'Ohio sits inside a day of ground freight from roughly half the US population, which is why so many fulfilment operations base themselves here. Packaging orders tend to be volume-led and cost-sensitive.',
    'Ohio is central to the national freight network, so ground deliveries usually complete in 2 to 4 business days.',
    'Because so much Ohio volume is fulfilment, dimensional weight is the number that decides the specification. Trimming an inch off a mailer often saves more than switching board grade.',
    ['custom-mailers', 'custom-packaging-inserts', 'custom-food-packaging', 'sustainable-packaging']),

  S('georgia', 'Georgia',
    ['Food and poultry', 'Film and entertainment', 'Logistics', 'Beauty and haircare'],
    'Atlanta anchors packaging demand in Georgia across food production, a growing beauty sector and a film industry that generates short-run promotional work with tight deadlines.',
    'Atlanta is a major freight hub, and ground deliveries into Georgia typically land in 2 to 4 business days.',
    'Short-run promotional and press packaging is a bigger share of demand here than elsewhere. Digital printing usually beats litho on these because the deadline matters more than the unit cost.',
    ['custom-food-packaging', 'promotional-packaging', 'custom-cosmetic-packaging', 'custom-mailers']),

  S('north-carolina', 'North Carolina',
    ['Furniture and home goods', 'Biotech and pharmaceutical', 'Craft food and beverage', 'Textiles'],
    'North Carolina blends an established manufacturing base with a research-driven biotech cluster around the Research Triangle. Packaging requirements here range from heavy-duty shippers to regulated pharmaceutical cartons.',
    'Ground freight into North Carolina generally completes in 2 to 5 business days.',
    'Furniture and home goods shipments need genuine structural engineering rather than a heavier box. Double-wall corrugated with a fitted insert usually outperforms a thicker single-wall alternative.',
    ['custom-packaging-inserts', 'pharmaceutical-packaging', 'custom-food-packaging', 'custom-mailers']),

  S('michigan', 'Michigan',
    ['Automotive supply', 'Craft beverage', 'Food processing', 'Industrial goods'],
    'Michigan demand leans industrial, with automotive parts packaging and a strong craft brewing and distilling scene generating steady beverage carton work.',
    'Ground deliveries into Michigan usually take 2 to 5 business days.',
    'Winter transit is a real factor for adhesive-heavy formats. Cold-set glue can become brittle below freezing, so we specify cold-resistant adhesives for winter deliveries here.',
    ['custom-beverage-packaging', 'custom-packaging-inserts', 'electronics-packaging', 'custom-mailers']),

  S('new-jersey', 'New Jersey',
    ['Pharmaceutical and personal care', 'Food importing and distribution', 'Chemicals', 'E-commerce'],
    'New Jersey hosts one of the densest pharmaceutical and personal-care manufacturing corridors in the country, alongside major port-side distribution. Regulated and high-volume work dominates.',
    'Port proximity and East Coast corridors mean ground deliveries into New Jersey typically land in 2 to 3 business days.',
    'Personal-care buyers here often need matched sets — a carton, a label and an insert that all reference the same brand system. Ordering them together keeps the colour targets consistent.',
    ['pharmaceutical-packaging', 'custom-cosmetic-packaging', 'custom-labels', 'custom-mailers']),

  S('virginia', 'Virginia',
    ['Government and defence supply', 'Craft food and beverage', 'Data centre hardware', 'Agriculture'],
    'Virginia packaging demand spans agricultural produce, a growing craft beverage sector and hardware packaging tied to the state\'s large data-centre footprint.',
    'Ground freight into Virginia typically completes in 2 to 4 business days.',
    'Hardware and equipment packaging here often needs anti-static consideration. Tell us if components are sensitive and we will specify an appropriate insert material.',
    ['electronics-packaging', 'custom-beverage-packaging', 'custom-packaging-inserts', 'custom-food-packaging']),

  S('washington', 'Washington',
    ['Coffee and specialty beverage', 'Outdoor and apparel', 'Technology hardware', 'Cannabis'],
    'Washington is a coffee state before anything else, and that shapes packaging demand heavily — barrier pouches, cups and sleeves make up a large share. Outdoor apparel and a regulated cannabis market add to it.',
    'Ground deliveries into Washington usually take 4 to 7 business days from central production, so we plan lead times accordingly.',
    'Coffee packaging needs a degassing valve if the roast is fresh. It is a small addition at production and a serious problem if it is left out.',
    ['custom-pouches', 'custom-printed-cups', 'custom-sleeves', 'custom-cbd-packaging']),

  S('arizona', 'Arizona',
    ['Food and beverage', 'Supplements and wellness', 'Electronics manufacturing', 'Tourism retail'],
    'Arizona demand centres on Phoenix, with a growing supplement sector and an electronics manufacturing base. Heat management is a genuine specification constraint rather than an afterthought.',
    'Ground freight into Arizona typically arrives in 3 to 6 business days.',
    'Sustained warehouse heat affects both adhesives and some laminates. For anything stored through an Arizona summer, we recommend heat-stable lamination and avoid pressure-sensitive closures that soften.',
    ['wellness-packaging', 'custom-food-packaging', 'electronics-packaging', 'custom-mailers']),

  S('massachusetts', 'Massachusetts',
    ['Biotech and pharmaceutical', 'Specialty food', 'Education and publishing', 'Medical devices'],
    'Massachusetts is dominated by life sciences. Medical device and pharmaceutical packaging with strict documentation requirements makes up a much larger share of demand here than in most states.',
    'Ground deliveries into Massachusetts generally complete in 2 to 4 business days.',
    'Medical device packaging often needs a validated, repeatable specification rather than the cheapest one. We hold your board grade and dieline on file so repeat runs match exactly.',
    ['pharmaceutical-packaging', 'custom-packaging-inserts', 'custom-food-packaging', 'wellness-packaging']),

  S('tennessee', 'Tennessee',
    ['Music and entertainment merchandise', 'Food and beverage', 'Healthcare supply', 'Logistics'],
    'Memphis makes Tennessee a national logistics centre, and Nashville generates a steady stream of merchandise and short-run promotional packaging tied to the music industry.',
    'Tennessee sits on major freight routes, and ground deliveries usually land in 2 to 4 business days.',
    'Merchandise packaging here is often short-run and deadline-driven around tour and release dates. Digital printing keeps those schedules realistic.',
    ['promotional-packaging', 'custom-mailers', 'custom-stickers', 'custom-food-packaging']),

  S('indiana', 'Indiana',
    ['Pharmaceutical manufacturing', 'Automotive and RV supply', 'Food processing', 'Distribution'],
    'Indiana carries a significant pharmaceutical manufacturing presence alongside heavy industrial and distribution activity. Packaging demand tends toward regulated cartons and heavy-duty shippers.',
    'Ground deliveries into Indiana are typically 2 to 4 business days.',
    'Regulated cartons here frequently need serialisation or batch coding space. Leave a clear, uncoated area on the dieline so the code prints legibly on your line.',
    ['pharmaceutical-packaging', 'custom-mailers', 'custom-packaging-inserts', 'custom-food-packaging']),

  S('missouri', 'Missouri',
    ['Agriculture and food', 'Brewing and beverage', 'Healthcare', 'Distribution'],
    'Missouri packaging demand is grounded in agriculture, food processing and a long-established brewing sector across St. Louis and Kansas City.',
    'Central location means ground deliveries into Missouri usually complete in 2 to 4 business days.',
    'Beverage multipacks need base strength tested against the filled weight, not the empty one. We size the board grade against your actual product weight.',
    ['custom-beverage-packaging', 'custom-food-packaging', 'custom-mailers', 'custom-display-boxes']),

  S('maryland', 'Maryland',
    ['Biotech and pharmaceutical', 'Seafood and specialty food', 'Government supply', 'Healthcare'],
    'Maryland demand is shaped by a dense biotech corridor and a specialty seafood sector with cold-chain packaging requirements.',
    'Ground deliveries into Maryland typically arrive in 2 to 3 business days.',
    'Cold-chain and chilled applications need a moisture barrier that survives condensation. Standard coated board is not enough on its own for chilled retail.',
    ['pharmaceutical-packaging', 'custom-food-packaging', 'custom-packaging-inserts', 'wellness-packaging']),

  S('colorado', 'Colorado',
    ['Craft beverage', 'Cannabis and CBD', 'Outdoor and sporting goods', 'Natural foods'],
    'Colorado has one of the densest craft brewing sectors in the country, a mature regulated cannabis market and a strong natural foods scene. Environmental positioning matters to buyers here more than average.',
    'Ground deliveries into Colorado generally take 3 to 6 business days.',
    'Altitude affects flexible packaging. Sealed pouches shipped to or filled at elevation can distend, so we specify seal strength with that in mind.',
    ['custom-cbd-packaging', 'custom-beverage-packaging', 'sustainable-packaging', 'custom-pouches']),
]

export const cities: Place[] = [
  C('new-york-city', 'New York City', 'New York', 'new-york',
    ['Fashion and accessories', 'Patisserie and specialty food', 'Fragrance and beauty', 'Hospitality'],
    'New York City packaging work is presentation-first. Fashion houses, patisseries and fragrance brands here specify finish quality well above the national average, often on relatively small runs.',
    'Deliveries into the five boroughs need a booked window and frequently a lift-gate. We size consignments to the receiving reality of the address rather than the cheapest pallet configuration.',
    'Storage space is the constraint nobody plans for. Many NYC businesses have no stockroom, so we often split a production run into scheduled releases rather than delivering it all at once.',
    ['custom-apparel-packaging', 'custom-gift-boxes', 'custom-jewellery-boxes', 'custom-bags']),

  C('los-angeles', 'Los Angeles', 'California', 'california',
    ['Beauty and skincare', 'Cannabis', 'Entertainment merchandise', 'Specialty food'],
    'Los Angeles generates more independent beauty brand packaging than anywhere else we ship to, alongside a regulated cannabis market and constant short-run merchandise work tied to the entertainment industry.',
    'Ground freight into the Los Angeles basin typically lands in 3 to 6 business days, and palletised delivery is straightforward across most of the metro.',
    'LA beauty brands frequently launch with a small run and reorder at ten times the volume within a year. We hold the dieline and colour targets so the scale-up matches the launch.',
    ['custom-cosmetic-packaging', 'custom-cbd-packaging', 'promotional-packaging', 'custom-mailers']),

  C('chicago', 'Chicago', 'Illinois', 'illinois',
    ['Food and confectionery', 'Grocery retail', 'Trade shows', 'Distribution'],
    'Chicago combines a deep food manufacturing base with grocery distribution reach across the Midwest. Retail-ready packaging built to survive a full distribution chain is the recurring brief.',
    'Chicago is among the simplest US destinations for palletised freight, with most orders landing in 2 to 4 business days.',
    'Trade show deadlines drive a lot of short-run display work here. Book structural dies early — that is the step that sets the schedule, not the printing.',
    ['custom-display-boxes', 'custom-food-packaging', 'promotional-packaging', 'custom-mailers']),

  C('houston', 'Houston', 'Texas', 'texas',
    ['Quick-service food', 'Energy sector supply', 'International food retail', 'Healthcare'],
    'Houston packaging demand is led by food service at scale and a diverse international grocery sector. Order volumes here tend to run larger than the national average.',
    'Ground freight into Houston typically completes in 2 to 5 business days, with straightforward palletised receiving across the metro.',
    'High summer humidity combined with warehouse heat is hard on uncoated board. A moisture-resistant coating is worth specifying for anything held in stock over the summer.',
    ['custom-food-packaging', 'custom-printed-cups', 'custom-food-trays', 'custom-containers']),

  C('phoenix', 'Phoenix', 'Arizona', 'arizona',
    ['Supplements and wellness', 'Food and beverage', 'Electronics assembly', 'Retail'],
    'Phoenix demand is anchored by a growing supplement and wellness sector alongside electronics assembly. Heat resilience is a genuine part of the specification conversation here.',
    'Ground deliveries into Phoenix generally take 3 to 6 business days.',
    'Warehouse temperatures above 100°F soften some pressure-sensitive adhesives. For long-stored stock we move to heat-stable laminates and mechanical closures rather than adhesive ones.',
    ['wellness-packaging', 'custom-food-packaging', 'electronics-packaging', 'custom-labels']),

  C('philadelphia', 'Philadelphia', 'Pennsylvania', 'pennsylvania',
    ['Pharmaceutical and life sciences', 'Specialty food', 'Craft beverage', 'Healthcare'],
    'Philadelphia sits at the centre of a pharmaceutical corridor, and that shapes packaging demand toward regulated cartons with controlled artwork revision processes.',
    'Ground deliveries into Philadelphia typically arrive in 2 to 3 business days.',
    'Regulated buyers here usually need versioned proofs with a documented approval trail. We can supply that record if your quality system requires it.',
    ['pharmaceutical-packaging', 'custom-food-packaging', 'wellness-packaging', 'custom-labels']),

  C('san-antonio', 'San Antonio', 'Texas', 'texas',
    ['Food service and restaurants', 'Tourism retail', 'Healthcare', 'Military supply'],
    'San Antonio packaging demand is led by an unusually strong restaurant scene and steady tourism retail through the year.',
    'Ground freight into San Antonio typically completes in 3 to 5 business days.',
    'Restaurant buyers here often order across several formats at once — trays, cups, bags and sleeves. Ordering them as one job keeps the printed brand colours matched across all of them.',
    ['custom-food-trays', 'custom-printed-cups', 'custom-bags', 'custom-sleeves']),

  C('san-diego', 'San Diego', 'California', 'california',
    ['Craft brewing', 'Biotech', 'Surf and outdoor apparel', 'Specialty food'],
    'San Diego has one of the densest craft brewing clusters in the country alongside a substantial biotech sector, giving a packaging mix that swings between beverage multipacks and regulated cartons.',
    'Ground deliveries into San Diego usually take 3 to 6 business days.',
    'Brewery multipacks need base strength calculated against filled can or bottle weight. We test the board grade against your actual pack weight rather than a nominal figure.',
    ['custom-beverage-packaging', 'pharmaceutical-packaging', 'custom-apparel-packaging', 'custom-mailers']),

  C('dallas', 'Dallas', 'Texas', 'texas',
    ['E-commerce fulfilment', 'Food service', 'Beauty and wellness', 'Retail distribution'],
    'Dallas has become a major e-commerce fulfilment centre, and that drives packaging demand toward mailers, inserts and dimensional-weight optimisation.',
    'Dallas takes palletised freight easily, with most ground consignments landing in 2 to 4 business days.',
    'For fulfilment operations here, dimensional weight usually costs more than the packaging itself. Trimming an inch off a mailer often saves more per order than any material change.',
    ['custom-mailers', 'custom-packaging-inserts', 'custom-food-packaging', 'custom-cosmetic-packaging']),

  C('austin', 'Austin', 'Texas', 'texas',
    ['Technology hardware', 'Craft food and beverage', 'Direct-to-consumer brands', 'Music merchandise'],
    'Austin packaging demand skews toward newer brands — hardware startups, craft food producers and direct-to-consumer launches. Unboxing experience carries more weight here than raw unit cost.',
    'Ground deliveries into Austin typically complete in 3 to 5 business days.',
    'Startup buyers here usually need a small first run to validate the product before committing. Digital printing makes a 100-unit test run genuinely affordable.',
    ['custom-mailers', 'electronics-packaging', 'custom-food-packaging', 'promotional-packaging']),

  C('jacksonville', 'Jacksonville', 'Florida', 'florida',
    ['Logistics and port distribution', 'Food service', 'Healthcare', 'Marine supply'],
    'Jacksonville is a port and distribution city first, and packaging demand reflects that — heavy-duty shippers and retail-ready cases outnumber presentation packaging.',
    'Ground deliveries into Jacksonville generally arrive in 3 to 5 business days.',
    'Salt air and humidity affect long-stored stock near the coast. Sealed pallet wrapping is worth requesting if inventory sits for months.',
    ['custom-mailers', 'custom-food-packaging', 'custom-packaging-inserts', 'custom-display-boxes']),

  C('fort-worth', 'Fort Worth', 'Texas', 'texas',
    ['Food processing', 'Western goods retail', 'Logistics', 'Manufacturing'],
    'Fort Worth demand leans toward food processing and regional retail, with packaging specified for durability through a distribution chain rather than for shelf theatre.',
    'Ground freight into Fort Worth typically lands in 2 to 4 business days.',
    'Regional retail here often means mixed-case shipments. A retail-ready case that opens into a shelf tray saves handling time at the store end.',
    ['custom-display-boxes', 'custom-food-packaging', 'custom-mailers', 'custom-food-trays']),

  C('columbus', 'Columbus', 'Ohio', 'ohio',
    ['E-commerce fulfilment', 'Apparel retail', 'Food processing', 'Insurance and services'],
    'Columbus is one of the strongest fulfilment locations in the country by ground reach, and apparel brands with distribution here order mailers and poly bags in volume.',
    'Ground deliveries into Columbus usually complete in 2 to 4 business days.',
    'Apparel fulfilment favours poly mailers over boxes on cost, but returns programmes need a double adhesive strip. It is cheap to add at production and impossible to retrofit.',
    ['custom-mailers', 'custom-apparel-packaging', 'custom-packaging-inserts', 'sustainable-packaging']),

  C('charlotte', 'Charlotte', 'North Carolina', 'north-carolina',
    ['Financial services merchandise', 'Food and beverage', 'Textiles', 'Healthcare'],
    'Charlotte packaging demand mixes corporate gifting and merchandise with a growing craft food and beverage sector.',
    'Ground deliveries into Charlotte typically arrive in 2 to 4 business days.',
    'Corporate gifting runs here cluster around year end. Book production by early autumn if you need delivery before the holidays.',
    ['custom-gift-boxes', 'promotional-packaging', 'custom-food-packaging', 'custom-mailers']),

  C('indianapolis', 'Indianapolis', 'Indiana', 'indiana',
    ['Pharmaceutical', 'Sports and events', 'Food processing', 'Distribution'],
    'Indianapolis combines pharmaceutical manufacturing with a substantial sports and events sector that generates seasonal merchandise packaging.',
    'Central location keeps ground deliveries into Indianapolis at 2 to 4 business days.',
    'Event merchandise packaging works to hard, immovable dates. We schedule these backwards from the event and flag any risk to the date at quoting.',
    ['pharmaceutical-packaging', 'promotional-packaging', 'custom-mailers', 'custom-food-packaging']),

  C('seattle', 'Seattle', 'Washington', 'washington',
    ['Coffee roasting', 'Technology hardware', 'Outdoor apparel', 'Seafood'],
    'Seattle is a coffee city, and barrier pouches with degassing valves make up a large share of what we produce for buyers here, alongside hardware and outdoor apparel packaging.',
    'Ground deliveries into Seattle generally take 4 to 7 business days.',
    'Fresh-roasted coffee releases CO2 for days after roasting. Without a one-way degassing valve the pouch will swell and seals can fail, so it is not an optional extra.',
    ['custom-pouches', 'custom-printed-cups', 'electronics-packaging', 'custom-apparel-packaging']),

  C('denver', 'Denver', 'Colorado', 'colorado',
    ['Craft brewing', 'Cannabis and CBD', 'Outdoor goods', 'Natural foods'],
    'Denver demand is driven by craft brewing, a mature regulated cannabis market and natural food brands where environmental positioning is a real purchase factor.',
    'Ground deliveries into Denver typically take 3 to 6 business days.',
    'Altitude genuinely affects sealed flexible packaging — pouches filled at sea level can distend in Denver. We account for that in seal specification.',
    ['custom-cbd-packaging', 'custom-beverage-packaging', 'sustainable-packaging', 'custom-pouches']),

  C('boston', 'Boston', 'Massachusetts', 'massachusetts',
    ['Biotech and medical devices', 'Specialty food', 'Education merchandise', 'Seafood'],
    'Boston packaging work is dominated by life sciences. Medical device cartons and validated packaging specifications make up more of the demand here than anywhere else we ship.',
    'Ground deliveries into Boston usually complete in 2 to 4 business days. Downtown addresses often need a booked delivery window.',
    'Validated packaging cannot change between runs without re-qualification. We lock your board grade, dieline and supplier on file so repeat orders are identical.',
    ['pharmaceutical-packaging', 'custom-packaging-inserts', 'custom-food-packaging', 'wellness-packaging']),

  C('atlanta', 'Atlanta', 'Georgia', 'georgia',
    ['Beauty and haircare', 'Film and entertainment', 'Food and poultry', 'Logistics'],
    'Atlanta has a strong beauty and haircare sector alongside a film industry that generates constant short-run promotional and press packaging with tight deadlines.',
    'Atlanta is a national freight hub, so ground deliveries typically arrive in 2 to 4 business days.',
    'Press and influencer sends here often go out in a single wave. Order a few spare units — replacing a damaged parcel from a completed run is disproportionately expensive.',
    ['custom-cosmetic-packaging', 'promotional-packaging', 'custom-mailers', 'custom-food-packaging']),

  C('miami', 'Miami', 'Florida', 'florida',
    ['Beauty and fragrance', 'Beverage and juice', 'Import and export', 'Hospitality'],
    'Miami packaging demand mixes beauty and fragrance with a substantial beverage sector and hospitality volume, plus considerable import and export activity.',
    'Ground deliveries into Miami usually take 4 to 6 business days.',
    'Humidity is the practical issue for stored stock. Uncoated board left in an unconditioned Miami warehouse loses rigidity within weeks, so specify a moisture-resistant coating.',
    ['custom-cosmetic-packaging', 'custom-beverage-packaging', 'custom-printed-cups', 'custom-bags']),
]

export const allPlaces: Place[] = [...states, ...cities]
export const placeBySlug = new Map(allPlaces.map((p) => [p.slug, p]))
