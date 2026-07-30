import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import TopoBG from "@/components/TopoBG";
import JsonLd from "@/components/JsonLd";

const SITE = "https://mccoylandscapegroup.com";
const POST_URL = `${SITE}/blog/full-backyard-hardscape-halton`;
const POST_TITLE = "What a Full Backyard Hardscape Project Actually Includes in West GTA";
const POST_IMG = `${SITE}/images/09-showcase-signature-build.jpg`;
const PUBLISHED = "2026-04-25";
const MODIFIED = "2026-04-29";

export const metadata: Metadata = {
 title: "Full Backyard Hardscape in West GTA: What's Included",
 description:
 "What a full backyard hardscape project actually includes in West GTA — scope, sequencing, timelines, and real costs. 25 years of McCoy build experience.",
 alternates: { canonical: "/blog/full-backyard-hardscape-halton" },
};

const relatedPosts = [
 {
 href: "/blog/drainage-first-hardscape",
 image: "/images/11-process-excavation.jpg",
 eyebrow: "DRAINAGE & GRADING",
 title:
 "Drainage First: How to Avoid Expensive Water Problems Before You Invest in Hardscape",
 excerpt:
 "Why water gets solved before the first paver goes down — signs to watch for, what to fix, and what it costs.",
 },
 {
 href: "/blog/paver-patios-ontario-winters",
 image: "/images/03-card-paver-patios.jpg",
 eyebrow: "PAVER PATIOS & WALKWAYS",
 title: "How We Build Paver Patios That Survive Ontario Winters",
 excerpt:
 "The hidden base-prep work that decides the 15-year outcome — base depth, geotextile, edge restraint, polymeric sand activation.",
 },
];

const faqs = [
 {
 q: "How much should I budget for a full backyard hardscape in Oakville or Burlington?",
 a: "Full backyard builds in West GTA typically start around $60K–$80K and go up from there — engineered walls, and larger paver footprints push the number higher. We don't quote flat per-square-foot numbers because drainage, walls, and feature count are where real cost lives. Call us for a site visit and we'll quote the real scope in writing.",
 },
 {
 q: "Can I do the backyard in phases instead of all at once?",
 a: "You can, and some homeowners do — but it usually costs more. Phasing means mobilizing twice, redoing sod that gets torn up for wall footings, and cutting into finished hardscape to run lighting wire later. If your budget only covers half the scope right now, we'd rather scope the first phase with the second phase already planned underneath.",
 },
 {
 q: "Do I need a permit for a full backyard hardscape in West GTA?",
 a: "Patios and low walls usually don't need a municipal permit in Oakville, Burlington, Mississauga, or Milton. Walls over 1.2 metres, structures with roofs, gas lines, and anything near an escarpment or conservation area do. We confirm permit requirements during the on-site visit and handle engineered drawings where they're needed.",
 },
 {
 q: "How long does a full backyard build take from first call to finished?",
 a: "Plan on 4 to 8 months end-to-end. That's 2 to 6 weeks of design, 6 to 12 weeks of lead time before break-ground in peak season, and 6 to 10 weeks on-site. Add 2 to 6 more if the project needs engineered drawings or conservation sign-off.",
 },
 {
 q: "Will my lawn survive the build?",
 a: "Mostly, no — not the parts near the work. Heavy equipment and excavation tear up grass. That's why softscape reinstatement is baked into the scope. New sod, topsoil, and planting beds get laid at the end, and the finished yard looks better than the one we started on.",
 },
 {
 q: "Do you handle drainage before or after the patio goes in?",
 a: "Before. Always. Drainage gets scoped at the consultation, trenched during rough grading, and installed before any base material is compacted. A patio laid over bad drainage is a patio you'll replace in five years — so fixing the water first is non-negotiable on every McCoy build.",
 },
 {
 q: "What happens if we find a problem mid-build — like bad soil or a buried pipe?",
 a: "We find something on most full-yard builds. Old clay tile, buried debris, unmarked utilities. The estimate covers standard conditions and we flag unknowns upfront. If something shows up mid-build, we stop, document it, show you the options in writing, and only move forward when you've signed off.",
 },
];

export default function FullBackyardHardscapeHaltonPage() {
 const schema = {
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "BlogPosting",
 "@id": `${POST_URL}#article`,
 headline: POST_TITLE,
 image: [POST_IMG],
 datePublished: PUBLISHED,
 dateModified: MODIFIED,
 author: {
 "@type": "Person",
 name: "Alex Medeiros",
 jobTitle: "Owner & Lead Hardscape Designer",
 worksFor: { "@id": `${SITE}/#organization` },
 knowsAbout: ["hardscape design", "outdoor living scope", "paver installation", "West GTA hardscape"],
 },
 publisher: { "@id": `${SITE}/#organization` },
 mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
 description:
 "What a full backyard hardscape project actually includes in West GTA — scope, sequencing, timelines, and real costs.",
 articleSection: "Planning & Budgeting",
 keywords: ["full backyard hardscape", "West GTA hardscape project", "outdoor living scope", "design-build"],
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
 { "@type": "ListItem", position: 3, name: "Full Backyard Hardscape in West GTA", item: POST_URL },
 ],
 },
 {
 "@type": "FAQPage",
 mainEntity: faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 },
 ],
 };
 return (
 <>
 <JsonLd data={schema} />
 <Nav />

 <PageHero
 eyebrow="BLOG · BUILD WISDOM"
 title="What a Full Backyard Hardscape Project"
 subtitle="Actually Includes in West GTA"
 opening={
 <>
 A full backyard hardscape Oakville-area build is a single, sequenced scope
 — patio, walls, drainage, lighting, and softscape — designed and
 installed as one project, not bolted on over three summers. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation.
 </>
 }
 imageSrc="/images/09-showcase-signature-build.jpg"
 imageAlt="Full backyard hardscape build in Oakville with paver patio, seating wall, and fire pit by McCoy Landscape Group"
 />

 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[760px] px-5 md:px-10">
 <div className="text-[14px] text-[var(--color-text-muted)] mb-8 italic">
 By the McCoy Landscape Group crew · Oakville, ON · 7 min read
 </div>

 <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-text)] mb-8 font-medium">
 Proper base, proper drainage, done once — how McCoy scopes full
 backyard builds across Oakville and Burlington.
 </p>

 <ArticleH2>Full Backyard Hardscape: Not a Patio, Not a Phase — One Scope</ArticleH2>
 <ArticleP>
 Most Oakville homeowners calling us about a &ldquo;full backyard&rdquo;
 are really thinking about three or four separate projects stitched
 together — a patio this year, a wall next year, lighting eventually.
 A full backyard hardscape means the opposite. It&apos;s one designed
 scope, built in the right order, by one crew, in one window.
 </ArticleP>
 <ArticleP>Here&apos;s what that usually looks like:</ArticleP>
 <ArticleUL>
 <li><strong>Primary paver patio</strong> — dining and lounge zones sized to how you actually host</li>
 <li><strong>Retaining or seating walls</strong> — grade changes, terracing, built-in benches</li>
 <li><strong>Outdoor living features</strong> — fire pit, pergola, privacy screens</li>
 <li><strong>Walkways and connections</strong> — front-to-back access, side yards, gate landings</li>
 <li><strong>Drainage</strong> — grading, catch basins, weeping tile, downspout extensions</li>
 <li><strong>Low-voltage landscape lighting</strong> — patio, path, wall, tree uplighting</li>
 <li><strong>Softscape reinstatement</strong> — sod, topsoil, planting beds, edging</li>
 </ArticleUL>
 <ArticleP>
 Every full backyard build touches most of this list. Miss one and
 the rest suffers — a patio without drainage floods, walls without
 lighting disappear at 8 p.m., new sod with no grading dies in the
 first July drought.
 </ArticleP>

 <ArticleH2>The Seven Elements in a Full West GTA Backyard Build</ArticleH2>
 <ArticleH3>Paver patio</ArticleH3>
 <ArticleP>
 The anchor of the project. Typically 400–900 sq ft on a full-yard
 build, sized around dining, lounge, and built-in features.
 Techo-Bloc, Unilock, or Permacon pavers on a 6–10 inch compacted
 aggregate base with geotextile fabric.
 </ArticleP>
 <ArticleH3>Walls</ArticleH3>
 <ArticleP>
 Seating walls frame the patio. Retaining walls handle grade —
 especially on Burlington hillside lots and escarpment-edge Milton
 properties. Walls over 1.2 metres need engineered drawings and,
 near the escarpment, conservation-authority sign-off.
 </ArticleP>
 <ArticleH3>Outdoor living features</ArticleH3>
 <ArticleP>
 Fire pits (gas or wood), pergolas, privacy
 screens. These get designed at the start — footings, gas lines,
 and electrical rough-ins all happen during base prep.
 </ArticleP>
 <ArticleH3>Walkways and circulation</ArticleH3>
 <ArticleP>
 How you move around the space. Side yards, gate landings, pool
 deck connections. Often overlooked until the patio&apos;s done and
 the old grass path is a mud strip again.
 </ArticleP>
 <ArticleH3>Drainage</ArticleH3>
 <ArticleP>
 The element that decides whether the build lasts. On Oakville and
 Burlington properties with clay soils and high water
 tables, drainage is the first line item scoped — not optional.
 </ArticleP>
 <ArticleH3>Landscape lighting</ArticleH3>
 <ArticleP>
 Low-voltage wiring gets buried during base prep, before pavers go
 down. Adding lighting later means cutting into finished hardscape.
 </ArticleP>
 <ArticleH3>Softscape reinstatement</ArticleH3>
 <ArticleP>
 New sod, topsoil, planting beds, mulch, and edging. The
 &ldquo;before and after&rdquo; moment depends on softscape being
 finished as carefully as the patio.
 </ArticleP>

 <ArticleH2>The Order We Build In (And Why It&apos;s Non-Negotiable)</ArticleH2>
 <ArticleP>
 This is where a full hardscape project scope oakville homeowners
 research online most often goes sideways. The order looks obvious
 on paper. It&apos;s brutal in practice. Miss one step and the next
 three get compromised.
 </ArticleP>
 <ArticleP>Here&apos;s the sequence we follow on every full-yard build:</ArticleP>
 <ArticleOL>
 <li><strong>Site protection and demo</strong> — tarp the lawn, protect mature trees, remove old hardscape and any failing drainage</li>
 <li><strong>Rough grading and drainage layout</strong> — set finish grades before any base material is touched; dig drainage trenches</li>
 <li><strong>Drainage rough-in</strong> — weeping tile, catch basins, downspout extensions, French drains where needed</li>
 <li><strong>Utility rough-ins</strong> — gas lines for fire features and grills, electrical for lighting transformers, low-voltage wire runs</li>
 <li><strong>Wall footings and construction</strong> — retaining walls and seating walls built before the patio meets them</li>
 <li><strong>Base prep in lifts</strong> — excavated aggregate compacted in 2–3 inch lifts, geotextile fabric between subgrade and base</li>
 <li><strong>Paver installation</strong> — patios, walkways, pool decks laid, edge restraint spiked, polymeric sand jointed and activated</li>
 <li><strong>Feature installation</strong> — fire pit, pergola, lighting fixtures mounted and tested</li>
 <li><strong>Softscape and finishing</strong> — topsoil, sod, plants, mulch, edging, final wash-down</li>
 </ArticleOL>
 <ArticleP>
 Skip drainage rough-in and the patio is wet all spring. Pour wall
 footings after the patio&apos;s laid and you&apos;re cutting pavers
 to make them fit. Run lighting wire after the base is compacted
 and you&apos;re trenching through finished work.
 </ArticleP>
 <ArticleP>
 Done in the right order, a full backyard build is one continuous
 site. Done wrong, it&apos;s three repair jobs three years from now.
 </ArticleP>

 <ArticleH2>Typical Full Backyard Timelines Across Oakville, Burlington, Mississauga, and Milton</ArticleH2>
 <ArticleP>
 Timelines depend on scope, access, weather, and whether
 engineering or permits are in play. Here&apos;s what we see on most
 McCoy builds across Oakville, Burlington, Mississauga, and Milton:
 </ArticleP>
 <ArticleUL>
 <li><strong>Patio and walls only</strong> — 3 to 5 weeks on-site</li>
 <li><strong>Full outdoor living (patio, walls, fire, pergola, lighting)</strong> — 5 to 7 weeks on-site</li>
 <li><strong>Full backyard hardscape (everything, softscape included)</strong> — 6 to 10 weeks on-site</li>
 <li><strong>Add for engineered drawings or permits</strong> — 2 to 6 extra weeks before we break ground</li>
 </ArticleUL>
 <ArticleP>Factors that stretch West GTA timelines:</ArticleP>
 <ArticleUL>
 <li><strong>Escarpment-edge Milton properties</strong> — conservation-authority review adds 3–6 weeks</li>
 <li><strong>Newer Milton subdivisions</strong> — builder covenants often restrict hardscape for the first 2 years after close; we confirm scope before quoting</li>
 <li><strong>Mature Mississauga neighbourhoods (Clarkson, Lorne Park, Port Credit)</strong> — mature tree root systems slow excavation</li>
 <li><strong>Spring builds</strong> — wet springs push start dates; weather gets a veto</li>
 </ArticleUL>
 <ArticleP>
 Peak season (May–October) books 6 to 12 weeks ahead. Larger scopes
 routinely book 3 to 4 months out.
 </ArticleP>

 <ArticleH2>Where the Budget Actually Goes (And Where Homeowners Get Surprised)</ArticleH2>
 <ArticleP>
 A straight-talk section on backyard hardscape cost ontario
 homeowners don&apos;t see coming until the estimate lands. Not
 every homeowner undershoots the budget — but when they do,
 it&apos;s almost always one of these five line items.
 </ArticleP>
 <ArticleH3>Drainage</ArticleH3>
 <ArticleP>
 The invisible line item. On clay-soil, high-water-table
 properties, drainage can be 15–25 percent of the total. Weeping
 tile, catch basins, rerouted downspouts — none of it shows in the
 after photo. All of it decides whether the patio is still level in
 year 10.
 </ArticleP>
 <ArticleH3>Base prep</ArticleH3>
 <ArticleP>
 Ontario freeze-thaw is real. Proper base means 6 to 10 inches of
 compacted aggregate, geotextile fabric, and compaction in lifts.
 Homeowners pricing &ldquo;just the pavers&rdquo; miss the
 two-thirds of the work that sits under them.
 </ArticleP>
 <ArticleH3>Feature count</ArticleH3>
 <ArticleP>
 Fire pit, pergola, privacy screens, built-in
 seating. Each one is a separate scope inside the scope. Three
 features doubles the trades and the footing work.
 </ArticleP>
 <ArticleH3>Lighting</ArticleH3>
 <ArticleP>
 Low-voltage lighting on a full yard typically runs 12 to 30
 fixtures — path, step, wall, and tree uplighting. A real line
 item, not an add-on.
 </ArticleP>
 <ArticleH3>Softscape reinstatement</ArticleH3>
 <ArticleP>
 New sod, topsoil, planting beds, mulch, edging — easily $3K–$8K
 on a full yard. On a full backyard build, most of the old lawn is
 gone by week two.
 </ArticleP>

 <ArticleH2>Five Things to Have Ready Before You Call</ArticleH2>
 <ArticleP>
 You don&apos;t need a designer, a drawing, or a final material
 list to call us. You do need a clear picture of how you want to
 use the space. The more specific, the better the quote.
 </ArticleP>
 <ArticleP>Before your consultation, put together:</ArticleP>
 <ArticleOL>
 <li><strong>A function list</strong> — dining for how many, lounge zone, fire, pool deck, privacy screen, kids&apos; play area. What actually happens in this yard?</li>
 <li><strong>Water-problem photos</strong> — any spot in the yard that pools, stays wet for a day, or runs water toward the house. Phone photos are perfect.</li>
 <li><strong>Rough measurements</strong> — lot width, backyard depth, and the current patio size if there is one. Pacing it off is fine.</li>
 <li><strong>A rough budget range</strong> — full backyard builds in West GTA typically start around $60K–$80K and climb from there. A rough range lets us scope the right project instead of guessing.</li>
 <li><strong>Access notes</strong> — side yard width, gate size, utility locates, anything a mini-excavator has to squeeze through.</li>
 </ArticleOL>
 <ArticleP>
 Have that ready and a one-hour site visit is enough to scope the
 full project. Backed by a 3-year warranty, built to last in
 Ontario winters.
 </ArticleP>
 </div>
 </section>

 {/* FAQ */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={560} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">FAQS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Full Backyard Hardscape FAQs{" "}
 <em className="italic font-light">for Oakville Homeowners</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
 {faqs.map((f) => (
 <div
 key={f.q}
 className="bg-white rounded-2xl p-6 md:p-7 shadow-[0_4px_18px_-12px_rgba(0,0,0,0.15)]"
 >
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[17px] md:text-[18px] text-[var(--color-primary)] mb-3 leading-snug">
 {f.q}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--color-text)]">
 {f.a}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <RelatedPosts posts={relatedPosts} />

 <FinalCTA />
 <Footer />
 </>
 );
}

function ArticleH2({ children }: { children: React.ReactNode }) {
 return (
 <h2 className="font-[family-name:var(--font-display)] font-black text-[24px] md:text-[30px] leading-[1.2] text-[var(--color-primary)] mt-12 mb-5">
 {children}
 </h2>
 );
}

function ArticleH3({ children }: { children: React.ReactNode }) {
 return (
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[19px] md:text-[22px] leading-[1.3] text-[var(--color-primary)] mt-8 mb-3">
 {children}
 </h3>
 );
}

function ArticleP({ children }: { children: React.ReactNode }) {
 return (
 <p className="text-[16px] md:text-[17px] leading-[1.75] text-[var(--color-text)] mb-5">
 {children}
 </p>
 );
}

function ArticleUL({ children }: { children: React.ReactNode }) {
 return (
 <ul className="flex flex-col gap-2.5 mb-6 pl-5 list-disc marker:text-[var(--color-accent-mid)]">
 {children}
 </ul>
 );
}

function ArticleOL({ children }: { children: React.ReactNode }) {
 return (
 <ol className="flex flex-col gap-3 mb-6 pl-5 list-decimal marker:text-[var(--color-accent-mid)] marker:font-bold">
 {children}
 </ol>
 );
}

function RelatedPosts({
 posts,
}: {
 posts: {
 href: string;
 image: string;
 eyebrow: string;
 title: string;
 excerpt: string;
 }[];
}) {
 return (
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">KEEP READING</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 More from{" "}
 <em className="italic font-light">the McCoy crew</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
 {posts.map((p) => (
 <Link
 key={p.href}
 href={p.href}
 className="group relative block bg-[var(--color-bg-warm)] rounded-2xl overflow-hidden border-t-[3px] border-t-[var(--color-accent-mid)] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)]"
 >
 <div className="relative aspect-[16/9] w-full overflow-hidden">
 <Image
 src={p.image}
 alt={p.title}
 fill
 sizes="(max-width: 768px) 100vw, 50vw"
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 />
 </div>
 <div className="p-6 md:p-7">
 <span className="eyebrow !text-[12px] md:!text-[13px] text-[var(--color-accent-mid)]">
 {p.eyebrow}
 </span>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[19px] md:text-[22px] text-[var(--color-primary)] mt-2 mb-3 leading-snug">
 {p.title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--color-text)]">
 {p.excerpt}
 </p>
 <div className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-accent-mid)]">
 Read article
 <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>
 );
}
