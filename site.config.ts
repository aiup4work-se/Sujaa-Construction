/* ═══════════════════════════════════════════════════════════════════════════
 *  SITE CONFIG — the ONLY file you need to edit to rebrand this website.
 *
 *  Everything the visitor sees comes from here: company name, logo, colours,
 *  contact details, menus, every heading and paragraph, services, projects,
 *  team, testimonials, FAQs, news, jobs, equipment and photos.
 *
 *  Tips
 *  • Save the file and the dev server (`npm run dev`) updates instantly.
 *  • Text with "\n" breaks onto a new line at that point (used in big headings).
 *  • Photos: use a path to a file in /public, e.g. "/images/projects/tower.jpg",
 *    or a stock photo from the `stock` list below, e.g. stock.heroCrane.
 *    Leave a photo out and a drawn illustration is shown instead.
 *  • A `slug` is the web address of a page, e.g. slug "kelani-bridge" →
 *    /projects/kelani-bridge. Use lowercase letters, numbers and hyphens.
 * ═══════════════════════════════════════════════════════════════════════════ */

import { pexels } from "./lib/pexels";


/* ═══════════════════════════ 0. QUICK SETUP ═══════════════════════════════
 * Change these first — they are reused all through this file.             */
const COMPANY = "Sujaa Constructions";   // full company name
const SHORT = "SJ Constructions";                    // short name next to the logo
const LEGAL_SUFFIX = "(Pvt) Ltd";
const DOMAIN = "sujaa-constructions.lk";               // your website domain (no www)
const FOUNDED = 1958;                      // year founded
const COUNTRY = "Sri Lanka";
const YEARS = new Date().getFullYear() - FOUNDED;   // years in business (automatic)

/* ───────────────────────── 1. STOCK PHOTO LIBRARY ─────────────────────────
 * Free Pexels photos (pexels.com/license) used as stand-ins.
 * Replace with your own project photos before going live.
 * To add one: take the number at the end of a pexels.com/photo/... link.     */
export const stock = {
  heroCrane: pexels(13227041),
  heroTeam: pexels(8961065, 900),
  cranesWaterside: pexels(32059939),
  yellowCranes: pexels(5504388),
  craneSite: pexels(5505125),
  towerCrane: pexels(4513940),
  bigCraneSite: pexels(7121536),
  concreteFrame: pexels(1402923),
  highRiseLowAngle: pexels(7168457),
  scaffoldHighRise: pexels(14143739),
  skyscraperBuild: pexels(31168601),
  resortHotel: pexels(17619969),
  hotelNight: pexels(4223678),
  bridgeBlueSky: pexels(12032959),
  underBridge: pexels(17647104),
  roadMachinery: pexels(12228684),
  asphaltPaver: pexels(5924641),
  aerialEarthworks: pexels(1579356),
  excavatorYellow: pexels(2449603),
  excavator: pexels(69483),
  excavatorBW: pexels(30354001),
  warehouseEmpty: pexels(5843171),
  warehouseDoors: pexels(5759123),
  concreteInterior: pexels(236705),
  waterPlant: pexels(12726229),
  workersHardhats: pexels(8961064),
  teamTalking: pexels(8961030),
  teamStanding: pexels(8961260),
  engineerWomanHarness: pexels(8487999),
  portraitMan1: pexels(28196526, 900),
  portraitMan2: pexels(8961134, 900),
  portraitWoman1: pexels(8960946, 900),
  portraitWoman2: pexels(8961071, 900),
};

/* ───────────────────────────── 2. BRAND ─────────────────────────────────── */
export const brand = {
  name: COMPANY,                            // used in page titles and text
  shortName: SHORT,                         // shown next to the logo
  legalName: `${COMPANY} ${LEGAL_SUFFIX}`,
  tagline: `Building ${COUNTRY}'s landmarks since ${FOUNDED}`,
  description:
    `A CIDA C1 graded building and civil engineering contractor delivering high-rise buildings, highways, bridges and piling across ${COUNTRY} and the region.`,
  founded: FOUNDED,
  parentGroup: `${SHORT} Holdings`,         // set to "" to hide

  /** Logo. Put your file in /public (SVG or PNG) and set the path, e.g. "/images/logo.svg".
   *  Leave as "" to use the built-in round mark + shortName. */
  logo: {
    src: "",
    srcLight: "",          // optional white version for the dark footer
    width: 150,            // display size in px (height scales automatically)
    height: 36,
  },

  /** Colours for the whole site (any CSS colour). */
  colors: {
    primary: "#efc447",    // yellow panels, accents
    primaryDeep: "#e2b130",
    dark: "#111111",       // dark bands, buttons, text
    darkSoft: "#1c1c1c",
    background: "#f6f7f0", // page background (cream)
    muted: "#6b6b66",      // secondary text
    rule: "#d9dad2",       // divider lines
  },

  /** Corner roundness of the big panels (px). */
  panelRadius: 28,
};

/* ──────────────────────────── 3. CONTACT ────────────────────────────────── */
export const contact = {
  address: "No. 000, Sample Mawatha, Colombo 02, Sri Lanka",
  phone: "+94 11 000 0000",
  phoneAlt: "+94 11 000 0001",
  fax: "+94 11 000 0002",
  email: `info@${DOMAIN}`,
  tendersEmail: `tenders@${DOMAIN}`,
  careersEmail: `careers@${DOMAIN}`,
  whatsapp: "+94 77 000 0000",
  hours: "Mon – Fri, 8.30 am – 5.00 pm",
  mapUrl: "https://maps.google.com/?q=Colombo+02+Sri+Lanka",
  videoUrl: "https://www.youtube.com/",      // "Watch Video" button on the home page
};

/** Social links. Supported icons: Facebook, LinkedIn, Instagram, YouTube. Remove any you don't use. */
export const social = [
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
];

/* ─────────────────────────── 4. CREDENTIALS ─────────────────────────────── */
export const credentials = {
  cidaGrade: "C1 — Buildings, Highways & Bridges",
  cidaReg: "C/XXXX",
  businessReg: "PV 00XXXXX",
};

export const certifications = [
  { title: "CIDA C1", text: "Highest grade for buildings, highways and bridges" },
  { title: "ISO 9001:2015", text: "Quality management system" },
  { title: "ISO 14001:2015", text: "Environmental management system" },
  { title: "ISO 45001:2018", text: "Occupational health & safety" },
];

/* ──────────────────────────── 5. MENUS ──────────────────────────────────── */
export const nav = {
  main: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Careers", href: "/careers" },
  ],
  contactButton: { label: "Contact Us", href: "/contact" },
  footer: [
    { label: "Our Expertise", href: "/services" },
    { label: "Featured Projects", href: "/projects" },
    { label: "Insights & News", href: "/news" },
    { label: "Who We Are", href: "/about" },
    { label: "Health & Safety", href: "/safety" },
    { label: "Plant & Machinery", href: "/equipment" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],
};

/* ──────────────────────────── 6. HOME PAGE ──────────────────────────────── */
export const home = {
  hero: {
    title: "Building Tomorrow\nwith Vision",
    text: "We build iconic infrastructure that transforms city skylines, strengthens communities, boosts economic growth, and leaves a lasting mark of innovation across Sri Lanka.",
    primaryButton: { label: "Get Started", href: "/contact" },
    videoButtonLabel: "Watch Video",
    photo: stock.heroCrane,        // big photo on the right
    videoThumb: stock.heroTeam,    // small photo above the headline
    badgeText: "Every single day • Engineering strength • Elevating skylines • ",
    stats: [
      { value: "200+", label: "Projects Completed" },
      { value: `${YEARS}+`, label: "Years of Experience" },
      { value: "99%", label: "Happy Clients" },
    ],
  },
  about: {
    label: "About Us",
    statement:
      "Bringing your vision to life. We transform bold ideas into durable and eco-conscious structures, guided by decades of experience and a relentless commitment to precision in every detail of construction.",
    text: "We combine innovation, craftsmanship, and technical excellence to deliver projects that not only meet expectations — but redefine them. Our team is dedicated to building with purpose, precision, and lasting value.",
    button: { label: "Get Started", href: "/about" },
  },
  services: {
    label: "What We Do",
    count: 5,                      // how many services appear in the big list
    defaultActive: 3,              // which one is highlighted first (1 = first)
    cursorText: "Click for\ndetail",
  },
  works: {
    label: "Our Works",
    title: "Delivering impact through every\nstructure we create",
    text: "Every project is a reflection of our dedication to quality, innovation, and purpose. From urban landmarks to essential community spaces — we build with integrity and intention.",
  },
  team: {
    label: "Our People",
    title: "The professionals turning\nplans into reality",
    text: "Behind every successful project is a passionate team. Our experts bring deep knowledge, strong leadership, and a shared commitment to delivering excellence in every detail — from the ground up.",
  },
  testimonials: {
    label: "Testimonials",
    title: "Hear from those who've\nbuilt with us",
    text: "Real client stories — sharing their experience with our team. From start to finish, we focus on quality and making the process worry-free.",
  },
  faq: {
    label: "Questions & Answers",
    title: "Got Questions? We've\nGot You Covered.",
    text: "Find quick answers to some of the most common inquiries about our services, process, and what it's like to build with us.",
  },
  insights: {
    label: "Insights & Updates",
    title: "Explore the Stories\nBehind the Structures",
    text: "From new ideas to project highlights and practical tips, our blog shares insights that shape the future of construction.",
    buttonLabel: "Discover more",
  },
};

/* ───────────────────── 7. SHARED BLOCKS (all pages) ─────────────────────── */
export const cta = {
  title: "Have a project in mind?",
  text: "Send us your drawings or tender documents and our estimating team will respond within two working days.",
  button: { label: "Talk to our team", href: "/contact" },
};

export const footer = {
  intro: "Let's stay connected — get the latest updates, insights, and stories from the field.",
  tagline: "Building better cities, one project at a time",
  newsletterLabel: "Subscribe to Our Updates:",
  newsletterPlaceholder: "Enter your email address",
  newsletterThanks: "Thanks — you're subscribed.",
};

/* ─────────────────────────── 8. INNER PAGES ─────────────────────────────── */
export const pages = {
  about: {
    hero: { label: "About Us", title: `Building ${COUNTRY}'s landmarks since ${FOUNDED}`, text: `A CIDA C1 graded contractor delivering high-rise buildings, highways, bridges and piling across ${COUNTRY} and the region.`, photo: stock.cranesWaterside },
    storyTitle: `Over ${YEARS} years of\nbuilding ${COUNTRY}`,
    story: [
      `${COMPANY} began in ${FOUNDED} as a family building contractor in Colombo. It has grown into one of the country's leading civil engineering contractors and a member of ${SHORT} Holdings.`,
      "Today we deliver high-rise buildings, highways, bridges, piling, water infrastructure and industrial facilities in Sri Lanka and overseas, supported by our own plant, piling rigs and engineering design team.",
    ],
    storyPhoto: stock.workersHardhats,
    vision: "To be the most trusted construction partner in South Asia.",
    mission: "To deliver safe, high-quality projects on time, creating lasting value for clients, people and communities.",
    milestonesTitle: "Our journey",
    leadershipTitle: "The people leading our work",
    valuesTitle: "Our values",
  },
  services: {
    hero: { label: "Our Services", title: "Integrated construction & engineering", text: "From piling and foundations to finished interiors, we deliver every stage with our own people and equipment.", photo: stock.yellowCranes },
    /** Steps shown on every service page */
    process: [
      { title: "Brief & site visit", text: "We visit the site, review drawings and understand your budget and timeline." },
      { title: "Proposal & BOQ", text: "A detailed method statement, programme and priced Bill of Quantities." },
      { title: "Mobilise & build", text: "A named project manager, weekly reports and stage inspections." },
      { title: "Handover & support", text: "Testing, as-built drawings and a defects-liability period." },
    ],
  },
  projects: {
    hero: { label: "Our Works", title: "Projects that shape the skyline", text: "Landmark buildings, infrastructure and industrial projects delivered across Sri Lanka and overseas.", photo: stock.bigCraneSite },
  },
  news: {
    hero: { label: "Insights & Updates", title: "Stories behind the structures", text: "Project milestones, awards and company announcements.", photo: stock.craneSite },
  },
  careers: {
    hero: { label: "Careers", title: "Build your career with us", text: "We're looking for engineers, quantity surveyors, technical officers and skilled tradespeople.", photo: stock.teamTalking },
    perks: [
      { title: "Landmark projects", text: "Work on towers, expressways and bridges that shape the country." },
      { title: "Training & chartership", text: "Structured mentoring towards IESL and RICS professional membership." },
      { title: "Safety culture", text: "ISO 45001 certified sites with full PPE and insurance cover." },
      { title: "Overseas exposure", text: "Opportunities on regional projects in the Maldives and beyond." },
    ],
    vacanciesTitle: "Current vacancies",
    howToApply: `Email your CV with the position title in the subject line to careers@${DOMAIN}.`,
  },
  contact: {
    hero: { label: "Contact Us", title: "Let's build something lasting", text: "Send us your enquiry, tender invitation or project brief and we'll get back within two working days.", photo: stock.towerCrane },
    formTitle: "Send an enquiry",
    enquiryTypes: ["New project / quotation", "Tender invitation", "Supplier / subcontractor registration", "Careers", "Other"],
    thanksTitle: "Enquiry received",
    thanksText: "Thank you. A member of our team will contact you within two working days.",
  },
  sustainability: {
    hero: { label: "Sustainability", title: "Building responsibly for the next generation", text: "We plan, build and operate with the environment, our workers and nearby communities in mind.", photo: stock.engineerWomanHarness },
    figures: [
      { value: "38%", label: "Construction waste recycled in 2025" },
      { value: "1.5 MW", label: "Rooftop solar installed on our projects" },
      { value: "12", label: "Green-rated buildings delivered" },
      { value: "0", label: "Lost-time injuries in the last 12 months" },
    ],
    title: "Four commitments on every site",
    pillars: [
      { title: "Low-carbon materials", text: "Blended cements, recycled aggregates and locally sourced materials wherever specifications allow." },
      { title: "Waste & water on site", text: "Segregated waste streams, wash-water recycling and silt traps on every project." },
      { title: "Green building", text: "GBCSL-accredited professionals guiding projects to GREENSL and LEED ratings." },
      { title: "People & communities", text: "Local hiring, apprenticeships and rebuilding schools and clinics in the areas we work." },
    ],
    photo: stock.scaffoldHighRise,
  },
  safety: {
    hero: { label: "Health, Safety & Quality", title: "Everyone goes home safe, every day", text: "An ISO-certified integrated management system covering quality, safety and the environment on every site.", photo: stock.engineerWomanHarness },
    figures: [
      { value: "3.2M", label: "Safe man-hours without a lost-time injury" },
      { value: "100%", label: "Workers inducted before starting on site" },
      { value: "48", label: "Independent site audits in 2025" },
      { value: "0.08", label: "Lost-time injury frequency rate (per 200,000 hrs)" },
    ],
    title: "How we keep people safe and work right",
    text: "Safety and quality are planned into the programme from day one — not added at the end.",
    practices: [
      { title: "Induction & toolbox talks", text: "Every worker is inducted in Sinhala, Tamil or English, with a toolbox talk at the start of every shift." },
      { title: "Permit to work", text: "Work at height, hot work, confined spaces and heavy lifts need a signed permit and a supervisor on site." },
      { title: "Quality testing", text: "Cube tests on every concrete pour, pile integrity and load tests, and third-party material certification." },
      { title: "Environmental controls", text: "Dust suppression, noise monitoring, silt traps and segregated waste on every project." },
      { title: "Near-miss reporting", text: "A simple mobile reporting app. Every near miss is investigated and shared across all sites." },
      { title: "Health & welfare", text: "Clean drinking water, rest areas, first aid on every site and annual health checks for field staff." },
    ],
    photo: stock.workersHardhats,
  },
  equipment: {
    hero: { label: "Plant & Machinery", title: "Our own fleet, on our own schedule", text: "Owned machines maintained in our central workshop, so projects never wait on hire companies.", photo: stock.aerialEarthworks },
    title: "Equipment we own and operate",
    text: "All plant is serviced on a planned maintenance schedule and operated by certified operators.",
    fleet: [
      { group: "Lifting", photo: stock.yellowCranes, items: [{ name: "Tower cranes (up to 12 t)", count: 9 }, { name: "Mobile cranes (25–100 t)", count: 6 }, { name: "Passenger & material hoists", count: 14 }] },
      { group: "Piling & foundations", photo: stock.bigCraneSite, items: [{ name: "Hydraulic bored-pile rigs", count: 7 }, { name: "Diaphragm wall grab", count: 1 }, { name: "Pile load test rigs", count: 2 }] },
      { group: "Earthmoving", photo: stock.excavatorYellow, items: [{ name: "Excavators (20–35 t)", count: 22 }, { name: "Bulldozers", count: 5 }, { name: "Motor graders", count: 4 }, { name: "Vibratory rollers", count: 11 }] },
      { group: "Roads & concrete", photo: stock.asphaltPaver, items: [{ name: "Asphalt plant (120 t/h)", count: 1 }, { name: "Asphalt pavers", count: 3 }, { name: "Concrete batching plants", count: 3 }, { name: "Transit mixers", count: 28 }, { name: "Concrete pumps", count: 6 }] },
    ],
  },
  privacy: {
    updated: "1 November 2026",
    // Template text — have it reviewed against Sri Lanka's Personal Data Protection Act, No. 9 of 2022.
    sections: [
      { title: "Information we collect", text: "When you use our contact form, newsletter or apply for a job, we collect the details you give us, such as your name, company, email, phone number and message or CV." },
      { title: "How we use it", text: "We use your information only to reply to your enquiry, send updates you asked for, assess job applications, and meet our legal obligations. We do not sell your information." },
      { title: "How long we keep it", text: "Enquiries are kept for up to two years. Job applications are kept for twelve months unless you ask us to delete them sooner." },
      { title: "Your rights", text: "You can ask to see, correct or delete the personal information we hold about you, or withdraw consent to marketing at any time." },
      { title: "Cookies", text: "This website uses only the cookies needed for it to work. We do not use advertising cookies." },
    ],
  },
};

/* ───────────────────────────── 9. SERVICES ──────────────────────────────── */
// `scene` is the drawn fallback if the photo can't load:
// "crane" | "tower" | "site" | "bridge" | "road" | "city" | "workers" | "warehouse" | "water"
// `projectSectors` picks which projects appear on the service page.
export const services = [
  {
    slug: "high-rise-buildings",
    title: "High-Rise & Commercial Buildings",
    short: "Building Construction",
    summary: "Hotels, office towers, apartments and mixed-use developments delivered as main contractor.",
    details: ["Design & build and traditional contracts", "Post-tensioned and transfer slabs", "Façade and MEP coordination", "Fit-out and handover"],
    photo: stock.highRiseLowAngle,
    scene: "city",
    projectSectors: ["Buildings"],
  },
  {
    slug: "highways-roads",
    title: "Highways & Roads",
    short: "Highways & Roads",
    summary: "Expressways, national and provincial roads, including earthworks, drainage and asphalt.",
    details: ["Earthworks and embankments", "Asphalt and concrete paving", "Culverts and side drains", "Road furniture and marking"],
    photo: stock.asphaltPaver,
    scene: "road",
    projectSectors: ["Highways"],
  },
  {
    slug: "bridges-flyovers",
    title: "Bridges & Flyovers",
    short: "Bridges & Flyovers",
    summary: "Steel and concrete bridges, flyovers and marine structures.",
    details: ["Pre-stressed beam bridges", "Cast-in-situ and precast decks", "River and marine works", "Bridge rehabilitation"],
    photo: stock.bridgeBlueSky,
    scene: "bridge",
    projectSectors: ["Bridges"],
  },
  {
    slug: "piling-foundations",
    title: "Piling & Foundations",
    short: "Piling & Foundations",
    summary: "Bored cast-in-situ piles, diaphragm walls and deep basements with our own rig fleet.",
    details: ["Bored piles up to 2.0 m diameter", "Diaphragm and secant pile walls", "Pile load testing", "Dewatering and shoring"],
    photo: stock.excavatorYellow,
    scene: "site",
    projectSectors: ["Piling", "Bridges"],
  },
  {
    slug: "industrial",
    title: "Industrial & Warehousing",
    short: "Industrial Projects",
    summary: "Factories, warehouses and logistics facilities in BOI zones and industrial estates.",
    details: ["Pre-engineered steel buildings", "Superflat industrial floors", "Cold storage", "Utilities and substations"],
    photo: stock.warehouseEmpty,
    scene: "warehouse",
    projectSectors: ["Industrial"],
  },
  {
    slug: "water-infrastructure",
    title: "Water & Wastewater",
    short: "Water Infrastructure",
    summary: "Water-supply schemes, treatment plants, pipelines and drainage for public and private clients.",
    details: ["Treatment plants", "Transmission pipelines", "Reservoirs and towers", "Storm-water systems"],
    photo: stock.waterPlant,
    scene: "water",
    projectSectors: ["Water"],
  },
  {
    slug: "mep",
    title: "MEP Engineering",
    short: "MEP Engineering",
    summary: "Mechanical, electrical and plumbing installation and commissioning.",
    details: ["HVAC", "Power distribution", "Fire protection", "Plumbing and drainage"],
    photo: stock.teamStanding,
    scene: "workers",
    projectSectors: ["Buildings", "Industrial"],
  },
  {
    slug: "interiors",
    title: "Interiors & Fit-Out",
    short: "Interiors & Fit-Out",
    summary: "Turnkey interiors for hotels, offices and residences.",
    details: ["Joinery", "Ceilings and partitions", "Finishes", "Furniture installation"],
    photo: stock.concreteInterior,
    scene: "tower",
    projectSectors: ["Buildings"],
  },
] as const satisfies readonly ServiceConfig[];

/* ───────────────────────────── 10. PROJECTS ─────────────────────────────── */
/** Sectors used for the project filter. Add or rename freely; each project's `sector` must be one of these. */
export const projectSectors = ["Buildings", "Highways", "Bridges", "Piling", "Industrial", "Water"] as const;

/** Drawn fallback per sector (if a photo can't load). */
export const sectorScene: Record<(typeof projectSectors)[number], SceneName> = {
  Buildings: "site", Highways: "road", Bridges: "bridge", Piling: "crane", Industrial: "warehouse", Water: "water",
};

// featured: true → appears in the home page carousel and on top of /projects.
export const projects: ProjectConfig[] = [
  {
    slug: "harbour-front-hotel-tower",
    name: "Harbour Front Hotel Tower",
    client: "Sample Hotels PLC",
    location: "Colombo 01",
    sector: "Buildings",
    status: "Completed",
    year: "2024",
    value: "LKR 18.5 bn",
    size: "58,000 m²",
    scope: "Main contractor — structure, façade and MEP",
    summary: "A 42-storey five-star hotel and residence tower on the Colombo waterfront.",
    highlights: ["42 storeys, 165 m tall", "6,400 m³ continuous raft pour", "Delivered during monsoon with zero lost-time injuries"],
    challenge: "A tight waterfront site with live traffic on two sides, a 6 m water table and a programme that ran straight through two monsoons.",
    solution: "We installed a secant-pile cofferdam, poured the 6,400 m³ raft in one 38-hour operation and used a jump-form core with two tower cranes to hold a five-day floor cycle.",
    photo: stock.skyscraperBuild,
    gallery: [stock.highRiseLowAngle, stock.scaffoldHighRise, stock.bigCraneSite, stock.hotelNight],
    featured: true,
  },
  {
    slug: "southern-link-expressway-section-2",
    name: "Southern Link Expressway – Section 2",
    client: "Road Development Authority",
    location: "Matara District",
    sector: "Highways",
    status: "Ongoing",
    year: "2026",
    value: "LKR 12.2 bn",
    size: "11.4 km",
    scope: "Earthworks, pavement, drainage and interchanges",
    summary: "An 11.4 km four-lane expressway section with two interchanges.",
    highlights: ["11.4 km four-lane carriageway", "2 interchanges, 14 culverts", "On-site asphalt plant"],
    challenge: "Soft paddy soils along 4 km of the route and a requirement to keep local roads open throughout.",
    solution: "Ground improvement with vertical drains and surcharge, staged diversions agreed with the police, and an on-site asphalt plant to control pavement quality.",
    photo: stock.roadMachinery,
    gallery: [stock.asphaltPaver, stock.aerialEarthworks, stock.excavatorYellow],
    featured: true,
  },
  {
    slug: "kelani-river-bridge",
    name: "Kelani River Bridge",
    client: "Ministry of Highways",
    location: "Kaduwela",
    sector: "Bridges",
    status: "Completed",
    year: "2023",
    value: "LKR 4.1 bn",
    size: "320 m",
    scope: "Design and construction",
    summary: "A 320 m pre-stressed concrete bridge replacing a 60-year-old crossing.",
    highlights: ["320 m, 8 spans", "Bored piles to 38 m depth", "Built without closing the old bridge"],
    challenge: "Replacing a 60-year-old bridge that 40,000 vehicles a day still depended on, over a river prone to sudden floods.",
    solution: "The new bridge was built alongside the old one on 38 m bored piles, with precast beams lifted during low-water windows, then traffic was switched in a single weekend.",
    photo: stock.bridgeBlueSky,
    gallery: [stock.underBridge, stock.excavator, stock.teamStanding],
    featured: true,
  },
  {
    slug: "colombo-city-residences-piling",
    name: "City Residences – Piling Works",
    client: "Sample Developers (Pvt) Ltd",
    location: "Colombo 03",
    sector: "Piling",
    status: "Completed",
    year: "2025",
    size: "312 piles",
    scope: "Bored piles and diaphragm wall",
    summary: "312 bored piles and a 4-level basement diaphragm wall for a twin residential tower.",
    highlights: ["312 piles, up to 1.8 m diameter", "4-level basement", "Static load tests to 2.5× working load"],
    challenge: "Deep basements beside occupied buildings, where vibration and settlement had to stay within strict limits.",
    solution: "Low-vibration bored piling, a monitored diaphragm wall with four levels of props, and daily survey of neighbouring structures.",
    photo: stock.bigCraneSite,
    gallery: [stock.excavatorYellow, stock.excavatorBW, stock.concreteFrame],
  },
  {
    slug: "katunayake-logistics-park",
    name: "Katunayake Logistics Park",
    client: "Sample Logistics Ltd",
    location: "Katunayake",
    sector: "Industrial",
    status: "Ongoing",
    year: "2026",
    value: "LKR 3.4 bn",
    size: "39,000 m²",
    scope: "Design & build",
    summary: "Three clear-span warehouses totalling 420,000 sq ft near the airport.",
    highlights: ["420,000 sq ft", "12 m clear height", "1.5 MW rooftop solar"],
    challenge: "A fast-track programme for an operator who needed the first warehouse handed over in nine months.",
    solution: "A pre-engineered steel frame fabricated off site while the superflat floor slabs were laser-screeded in parallel.",
    photo: stock.warehouseEmpty,
    gallery: [stock.warehouseDoors, stock.concreteInterior, stock.aerialEarthworks],
    featured: true,
  },
  {
    slug: "kurunegala-water-supply",
    name: "Kurunegala Water Supply Scheme",
    client: "National Water Supply & Drainage Board",
    location: "Kurunegala",
    sector: "Water",
    status: "Completed",
    year: "2022",
    value: "LKR 6.8 bn",
    size: "40,000 m³/day",
    scope: "Treatment plant, reservoirs and pipelines",
    summary: "A 40,000 m³/day treatment plant serving over 200,000 people.",
    highlights: ["40,000 m³/day capacity", "68 km of transmission mains", "3 elevated water towers"],
    challenge: "Building a treatment plant and 68 km of mains while existing supply to 200,000 people continued.",
    solution: "Phased commissioning, night-time tie-ins and close coordination with NWSDB operations staff.",
    photo: stock.waterPlant,
    gallery: [stock.excavator, stock.teamTalking, stock.aerialEarthworks],
  },
  {
    slug: "maldives-island-resort",
    name: "Island Resort Development",
    client: "Sample Resorts Pvt Ltd",
    location: "Maldives",
    sector: "Buildings",
    status: "Completed",
    year: "2019",
    value: "USD 60 mn",
    size: "120 villas",
    scope: "Main contractor",
    summary: "A 120-villa overwater and beach resort built entirely by marine logistics.",
    highlights: ["120 villas", "Overwater jetties", "All materials shipped from Colombo"],
    challenge: "No local supply chain: every bag of cement, every tile and every worker had to reach the island by sea.",
    solution: "A dedicated logistics base in Colombo, barge scheduling around the monsoon and modular villa components.",
    photo: stock.resortHotel,
    gallery: [stock.hotelNight, stock.teamStanding, stock.craneSite],
  },
  {
    slug: "kandy-teaching-hospital-wing",
    name: "Teaching Hospital – New Wing",
    client: "Ministry of Health",
    location: "Kandy",
    sector: "Buildings",
    status: "Ongoing",
    year: "2026",
    value: "LKR 5.2 bn",
    size: "21,500 m²",
    scope: "Structure, finishes and medical gas",
    summary: "A 10-storey clinical wing with operating theatres and ICUs.",
    highlights: ["10 storeys", "12 operating theatres", "Built beside a working hospital"],
    challenge: "Building a ten-storey wing next to wards and theatres that never close.",
    solution: "Acoustic hoarding, dust control, out-of-hours heavy lifts and a hospital liaison officer on site every day.",
    photo: stock.towerCrane,
    gallery: [stock.craneSite, stock.scaffoldHighRise, stock.workersHardhats],
  },
];

/* ─────────────────────────── 11. PEOPLE ─────────────────────────────────── */
// Team cards on the home page and About page. Replace stock portraits with your own people.
export const team = [
  { name: "A. B. Perera", role: "Founder & Chairman", bio: "Leads the group's strategy and long-term investments.", photo: stock.portraitMan1 },
  { name: "C. D. Silva", role: "Head of Engineering", bio: "Chartered civil engineer with 30 years in high-rise and infrastructure delivery.", photo: stock.portraitMan2 },
  { name: "G. H. Jayasinghe", role: "Head of Quality Assurance", bio: "Runs testing, inspections and ISO compliance across every site.", photo: stock.portraitWoman1 },
  { name: "E. F. Fernando", role: "Director – Operations", bio: "Oversees site operations, plant and machinery across all active projects.", photo: stock.portraitWoman2 },
];

// `project` (a project slug) shows that project's photo next to the quote.
// Add `photo: "/images/clients/name.jpg"` only with a real photo of that client.
export const testimonials: { quote: string; name: string; role: string; project?: string; photo?: string }[] = [
  { quote: "Their attention to detail and commitment to our vision truly set them apart. The project was completed on time, on budget, and beyond expectations.", name: "Samuel T", role: "Property Developer", project: "harbour-front-hotel-tower" },
  { quote: "They kept the hospital running while building a ten-storey wing next to it. Communication with our team was clear every single week.", name: "Dr. N. Ranasinghe", role: "Hospital Director", project: "kandy-teaching-hospital-wing" },
  { quote: "The piling works were finished three weeks early, which let our main contractor start ahead of the monsoon.", name: "R. Wijesekara", role: "Project Director, Developer", project: "colombo-city-residences-piling" },
];

/* ─────────────────────────── 12. COMPANY FACTS ──────────────────────────── */
export const milestones = [
  { year: String(FOUNDED), text: "Company founded as a small building contractor in Colombo." },
  { year: "1985", text: "Registered with ICTAD (now CIDA) in the highest building category." },
  { year: "1998", text: "Piling division launched with its first bored-pile rigs." },
  { year: "2012", text: "First overseas project: a resort development in the Maldives." },
  { year: "2018", text: "Largest continuous concrete pour in the company's history on a Colombo tower." },
  { year: "2025", text: "Achieved ISO 45001 certification across all sites." },
];

export const values = [
  { title: "Safety first", text: "No programme is worth an injury. Every worker is inducted, equipped and supervised." },
  { title: "Engineering integrity", text: "We build to the drawings, test every pour and stand behind our work after handover." },
  { title: "On-time delivery", text: "Detailed programming and in-house plant keep projects moving through the monsoon." },
  { title: "Sustainability", text: "Green-rated buildings, waste segregation on site and responsible sourcing." },
];

export const faqs = [
  { q: "What types of projects do you specialize in?", a: "We work on residential, commercial, industrial and infrastructure projects — from private homes to expressways and high-rise towers." },
  { q: "How do I get started with a project?", a: "Send us your drawings, BOQ or a short brief through the contact page. We arrange a site visit and return a proposal within two weeks." },
  { q: "Are your projects delivered on time and within budget?", a: "Every project has a baseline programme and cost plan that we report against weekly. Over 95% of our projects in the last five years finished on or before programme." },
  { q: "Do you handle permits and compliance?", a: "Yes. We prepare and follow up UDA, local-authority, CEA and fire approvals, and work to CIDA, ICTAD specifications and ISO standards." },
  { q: "Can I customize my project design?", a: "Yes. Our design & build team works with your architect, or designs from scratch, and adjusts specifications to suit your budget." },
];

/* ──────────────────────────── 13. NEWS ──────────────────────────────────── */
// date format: "YYYY-MM-DD". Newest is shown first automatically.
export const news: { slug: string; title: string; date: string; tag: string; excerpt: string; photo?: string; body: string[] }[] = [
  {
    slug: "national-construction-awards-2025",
    title: "Two Excellence Awards at the CIDA National Construction Awards",
    date: "2025-12-14",
    tag: "Awards",
    excerpt: "The Harbour Front tower and Kelani River Bridge were recognised for construction excellence.",
    photo: stock.cranesWaterside,
    body: [
      "The Construction Industry Development Authority recognised two of our projects at this year's National Construction Awards.",
      "The Harbour Front Hotel Tower received an Excellence Award for large-scale building construction, citing its 38-hour continuous raft pour and zero lost-time injuries across 3.2 million man-hours.",
      "The Kelani River Bridge was recognised for infrastructure delivery, in particular for keeping the old crossing open to traffic for the entire construction period.",
      "Our Managing Director thanked the project teams, subcontractors and clients who made both projects possible.",
    ],
  },
  {
    slug: "expressway-section-2-milestone",
    title: "Expressway Section 2 reaches 60% completion",
    date: "2026-08-03",
    tag: "Projects",
    excerpt: "Pavement works are under way on the first 6 km, with both interchanges structurally complete.",
    photo: stock.roadMachinery,
    body: [
      "Section 2 of the Southern Link Expressway has passed 60% physical completion, two months ahead of the revised programme.",
      "Both interchanges are now structurally complete, and asphalt paving is under way on the first six kilometres from our on-site batching plant.",
      "Ground-improvement works on the soft paddy sections have finished, with settlement monitoring showing results within design limits.",
      "The section is scheduled to open to traffic in the third quarter of 2027.",
    ],
  },
  {
    slug: "iso-45001-certification",
    title: "Company-wide ISO 45001 certification achieved",
    date: "2025-06-20",
    tag: "Company",
    excerpt: "All active sites now operate under a certified occupational health and safety system.",
    photo: stock.workersHardhats,
    body: [
      "Every active site now operates under an occupational health and safety management system certified to ISO 45001:2018.",
      "The certification follows an 18-month programme that included new site induction materials in Sinhala, Tamil and English, a near-miss reporting app, and monthly safety walks by directors.",
      "Together with our existing ISO 9001 and ISO 14001 certifications, this gives clients a fully integrated quality, environment and safety system.",
    ],
  },
  {
    slug: "school-rebuild-programme",
    title: "Rebuilding three rural schools after the floods",
    date: "2025-02-11",
    tag: "CSR",
    excerpt: "Our engineers and volunteers rebuilt classrooms and sanitation blocks in Ratnapura District.",
    photo: stock.teamTalking,
    body: [
      "After severe flooding in Ratnapura District, our engineers and volunteers rebuilt classrooms and sanitation blocks at three rural schools.",
      "Work was completed during the school holidays so that more than 600 students could return to safe buildings at the start of term.",
      "The programme was funded by the company and its staff, with materials donated by several of our long-standing suppliers.",
    ],
  },
];

/* ──────────────────────────── 14. CAREERS ───────────────────────────────── */
// closing date format: "YYYY-MM-DD"
export const jobs = [
  { title: "Project Manager – High-Rise", department: "Projects", location: "Colombo", type: "Full-time", closing: "2026-11-30" },
  { title: "Quantity Surveyor", department: "Commercial", location: "Colombo", type: "Full-time", closing: "2026-11-25" },
  { title: "Site Engineer – Highways", department: "Infrastructure", location: "Matara", type: "Contract", closing: "2026-12-05" },
  { title: "HSE Officer", department: "Safety", location: "Island-wide", type: "Full-time", closing: "2026-11-20" },
  { title: "Trainee Civil Engineer", department: "Projects", location: "Colombo", type: "Internship", closing: "2026-12-15" },
];

/* ──────────────────────────── 15. SEO ───────────────────────────────────── */
export const seo = {
  siteUrl: `https://www.${DOMAIN}`,   // your live domain
  locale: "en_LK",
};


/* ───────────── 16. SMALL LABELS (buttons, headings, field names) ──────────
 * Change any word here, e.g. to translate the site. */
export const labels = {
  ourStory: "Our Story",
  vision: "Vision",
  mission: "Mission",
  milestones: "Milestones",
  leadership: "Leadership",
  whatWeStandFor: "What We Stand For",
  openPositions: "Open Positions",
  closes: "Closes",
  noVacancies: "There are no open positions right now. You are welcome to send your CV for future openings.",
  headOffice: "Head office",
  telephone: "Telephone",
  whatsapp: "WhatsApp",
  generalEnquiries: "General enquiries",
  tenders: "Tenders",
  officeHours: "Office hours",
  getInTouch: "Get In Touch",
  openMap: "Open in Google Maps",
  requiredNote: "Fields marked * are required.",
  fleet: "Fleet",
  moreStories: "More Stories",
  allNews: "All news",
  notFoundTitle: "Page not found",
  notFoundText: "The page you're looking for has moved or doesn't exist.",
  backHome: "Back to home",
  privacyTitle: "Privacy Policy",
  lastUpdated: "Last updated",
  legal: "Legal",
  contactHeading: "Contact",
  allProjects: "All projects",
  overview: "Overview",
  highlights: "Highlights",
  challenge: "The challenge",
  solution: "Our solution",
  projectFacts: "Project facts",
  discussSimilar: "Discuss a similar project",
  gallery: "Gallery",
  projectPhotos: "Project photos",
  moreProjects: "More Projects",
  youMayAlsoLike: "You may also like",
  factClient: "Client",
  factLocation: "Location",
  factSector: "Sector",
  factScope: "Scope",
  factStatus: "Status",
  factCompleted: "Completed",
  factExpected: "Expected",
  factSize: "Size",
  factValue: "Contract value",
  onEverySite: "On Every Site",
  certifications: "Certifications",
  independentlyCertified: "Independently certified",
  whatsIncluded: "What's Included",
  howWeDeliver: "How we deliver",
  step: "Step",
  otherServices: "Other services",
  requestProposal: "Request a proposal",
  relatedWork: "Related Work",
  projectsInField: "Projects in this field",
  explore: "Explore",
  ourApproach: "Our Approach",
  filterAll: "All",
  filterOngoing: "Ongoing",
  filterCompleted: "Completed",
  projectCount: "projects",
  noMatch: "No projects match these filters yet.",
  copyrightExtra: "CIDA Reg. C/XXXX",   // set to "" to hide
  allRightsReserved: "All rights reserved",
};

/* ═════════════════════════ Types (no need to edit) ═════════════════════════ */
export type SceneName = "crane" | "tower" | "site" | "bridge" | "road" | "city" | "workers" | "warehouse" | "water";
type ServiceConfig = {
  slug: string; title: string; short: string; summary: string; details: readonly string[];
  photo?: string; scene: SceneName; projectSectors: readonly (typeof projectSectors)[number][];
};
export type ProjectConfig = {
  slug: string; name: string; client: string; location: string;
  sector: (typeof projectSectors)[number]; status: "Completed" | "Ongoing"; year: string;
  value?: string; size?: string; scope: string; summary: string; highlights: string[];
  challenge?: string; solution?: string; photo?: string; gallery?: string[]; featured?: boolean;
};
