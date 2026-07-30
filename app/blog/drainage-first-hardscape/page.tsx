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
const POST_URL = `${SITE}/blog/drainage-first-hardscape`;
const POST_TITLE = "Drainage First: How to Avoid Expensive Water Problems Before You Invest in Hardscape";
const POST_IMG = `${SITE}/images/11-process-excavation.jpg`;
const PUBLISHED = "2026-04-25";
const MODIFIED = "2026-04-29";

export const metadata: Metadata = {
 title: "Hardscape Drainage West GTA: Fix Water Before You Build",
 description:
 "Why drainage decides if your West GTA patio, walkway or wall lasts. Signs of trouble, what to fix first, and what it costs. Call McCoy at (416) 985-9771.",
 alternates: { canonical: "/blog/drainage-first-hardscape" },
};

const relatedPosts = [
 {
 href: "/blog/full-backyard-hardscape-halton",
 image: "/images/09-showcase-signature-build.jpg",
 eyebrow: "PLANNING & BUDGETING",
 title:
 "What a Full Backyard Hardscape Project Actually Includes in West GTA",
 excerpt:
 "Scope, sequencing, timelines, and real costs for a full backyard build across Oakville, Burlington, Mississauga, and Milton.",
 },
 {
 href: "/blog/paver-patios-ontario-winters",
 image: "/images/03-card-paver-patios.jpg",
 eyebrow: "PAVER PATIOS & WALKWAYS",
 title: "How We Build Paver Patios That Survive Ontario Winters",
 excerpt:
 "Base depth, geotextile, edge restraint — the hidden craftsmanship behind a paver patio still sitting level in year 15.",
 },
];

const faqs = [
 {
 q: "How do I know if I have a drainage problem?",
 a: "Walk the yard 24 hours after a heavy rain. If water is still pooled anywhere — lawn, driveway, patio, against the foundation — you have a problem. Other tells: chalky white stains on existing pavers, moss in the lawn, soggy zones that never dry, downspouts dumping right at the house, or ice sheets in winter. Two or more and it's time for a proper assessment.",
 },
 {
 q: "Can you install drainage after the patio is already built?",
 a: "Yes, but it's usually more invasive and more expensive. Channel drains can be retrofitted at patio edges, downspout tie-ins can be added, and a French drain can sometimes go in beside a patio without lifting it. Full subsurface drainage under an existing patio usually means pulling the pavers and rebuilding the base. Fixing drainage first is always the better sequence.",
 },
 {
 q: "What does a French drain actually do?",
 a: "A French drain is a perforated pipe buried in clear-stone gravel, wrapped in filter fabric, set below the problem area. Water in the soil flows into the stone, down into the pipe, and out to a safe discharge point. It handles subsurface water — the wet clay, the rising water table, the seepage behind a wall. On West GTA lots with heavy clay, a French drain is often the difference between a wall that lasts 30 years and one that leans in five.",
 },
 {
 q: "Is a channel drain the same as a French drain?",
 a: "No — they solve different problems. A channel drain is a linear trench drain with a grated top, installed at the surface to catch sheet flow before it hits a doorway, garage, or low patio edge. A French drain is buried below grade and catches subsurface water moving through the soil. Most properties with drainage issues need both, each doing its own job.",
 },
 {
 q: "Why does my neighbour's patio look sunken?",
 a: "Almost always a base and drainage failure. Water got under the pavers, the base material washed out or saturated, and freeze-thaw heaved and dropped the surface repeatedly until the pavers sank into the low spots. The fix isn't re-leveling the pavers — it's rebuilding the base with proper compaction and fixing the drainage that caused the failure in the first place.",
 },
 {
 q: "How long does a drainage install take?",
 a: "Most residential drainage scopes run 2–5 days on site, depending on how much trenching is involved and whether we're tying into existing downspouts or sump discharge. On combined drainage-and-hardscape projects, the drainage work happens first, then the site is restored and the hardscape goes on top. We lock the timeline at the estimate stage.",
 },
];

export default function DrainageFirstHardscapePage() {
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
 knowsAbout: ["hardscape design", "paver installation", "West GTA drainage", "freeze-thaw mitigation"],
 },
 publisher: { "@id": `${SITE}/#organization` },
 mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
 description:
 "Why drainage decides if your West GTA patio, walkway or wall lasts. Signs of trouble, what to fix first, and what it costs.",
 articleSection: "Build Wisdom",
 keywords: ["hardscape drainage", "West GTA drainage", "paver drainage", "freeze-thaw"],
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
 { "@type": "ListItem", position: 3, name: "Drainage First", item: POST_URL },
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
 title="Drainage First:"
 subtitle="How to Avoid Expensive Water Problems Before You Invest in Hardscape"
 opening={
 <>
 In West GTA, drainage decides whether a hardscape install lasts 20
 years or fails in four. Call <strong>(416) 985-9771</strong> for a
 free on-site hardscape drainage Oakville-area assessment — we scope the
 water problem first, then the patio, walkway or wall, all backed by
 our 3-year warranty.
 </>
 }
 imageSrc="/images/11-process-excavation.jpg"
 imageAlt="Drainage trench rough-in with perforated weeping tile and clear stone on a backyard hardscape project in Oakville by McCoy Landscape Group"
 />

 {/* Article body */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[760px] px-5 md:px-10">
 <div className="text-[14px] text-[var(--color-text-muted)] mb-8 italic">
 By the McCoy Landscape Group crew · Oakville, ON · 5 min read
 </div>

 <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-text)] mb-8 font-medium">
 Proper base, proper drainage, done once — because water is the
 single biggest reason hardscapes fail.
 </p>

 <ArticleH2>Why Drainage Is the #1 Reason Hardscape Projects Fail in West GTA</ArticleH2>
 <ArticleP>
 Three things conspire against a patio or wall here — freeze-thaw
 cycles, heavy clay soil, and high water tables near the lake. Any
 one stresses a hardscape. Together, they break it.
 </ArticleP>
 <ArticleP>
 Freeze-thaw is the obvious one. Water trapped under a patio
 freezes, expands about 9%, and lifts everything above it. Forty
 cycles a winter for five winters and the pavers heave, joints open,
 and the wall you built last summer starts leaning forward.
 </ArticleP>
 <ArticleP>
 Clay is the quiet one. West GTA&apos;s clay has low
 permeability — water doesn&apos;t drain through it, it sits on top.
 Sandy soil sheds rain in hours. Clay holds it for days. That&apos;s
 why your neighbour&apos;s yard is still soggy Tuesday after a
 Saturday storm.
 </ArticleP>
 <ArticleP>
 The water table is the hidden one. Across Oakville, Burlington,
 Mississauga, and Milton it can sit within a few feet of the
 surface. Dig to build a proper patio base and you&apos;ll often
 hit groundwater before you hit the right depth.
 </ArticleP>

 <ArticleH2>Surface Water vs. Subsurface Water — Two Different Problems</ArticleH2>
 <ArticleP>
 Most homeowners think &ldquo;drainage&rdquo; is one thing.
 It&apos;s two, and they need two different fixes.
 </ArticleP>
 <ArticleP>
 <strong>Surface water</strong> is the rain and snowmelt running
 across your lot — off the roof, down the driveway, across the
 lawn. The fix is grading and conveyance: slopes that move water
 away from the house, plus channel drains, catch basins, and
 downspout extensions to capture it before it pools.
 </ArticleP>
 <ArticleP>
 <strong>Subsurface water</strong> is the water already in the
 ground — rising water table, saturated clay, seepage pushing
 against a wall or foundation. The fix is a system buried behind or
 below the hardscape: perforated pipe (weeping tile) in clear stone,
 wrapped in filter fabric, daylit to a safe outlet or tied into a
 sump.
 </ArticleP>
 <ArticleP>
 A contractor who only talks about &ldquo;a little slope to the
 lawn&rdquo; is solving half the problem. Proper backyard drainage
 ontario homeowners need almost always involves both.
 </ArticleP>

 <ArticleH2>The 7 Signs Your Property Has Drainage Problems to Solve Before Any Hardscape</ArticleH2>
 <ArticleP>Walk your yard after the next heavy rain. You&apos;re looking for:</ArticleP>
 <ArticleOL>
 <li><strong>Standing water that sits for more than 24 hours</strong> — anywhere on the lawn, driveway, or existing patio. That&apos;s water the soil can&apos;t absorb.</li>
 <li><strong>White chalky residue on existing pavers or walls (efflorescence)</strong> — mineral deposits left behind as water passes through the concrete. It means water is moving through a surface that shouldn&apos;t be wet.</li>
 <li><strong>Foundation cracks, especially horizontal ones</strong> — hydrostatic pressure pushing against the wall from outside.</li>
 <li><strong>Soggy lawn zones that never dry out</strong> — low spots where the grade collects water and the clay refuses to let it go.</li>
 <li><strong>Downspouts discharging within 2 feet of the foundation</strong> — extremely common on older Oakville and Burlington homes. Gallons of roof water dumped right where the patio is going.</li>
 <li><strong>Low spots near existing patios or walkways where water pools</strong> — the grade is working against the hardscape, not with it.</li>
 <li><strong>Ice sheets across the yard or driveway in winter</strong> — meltwater with nowhere to go, freezing in place.</li>
 </ArticleOL>
 <ArticleP>
 See two or more of these? The drainage conversation happens before
 the patio conversation. Not after.
 </ArticleP>

 <ArticleH2>What &ldquo;Drainage First&rdquo; Means in Practice</ArticleH2>
 <ArticleP>Our design sequence on every McCoy project runs in this order:</ArticleP>
 <ArticleOL>
 <li><strong>Walk the property and read the water.</strong> Where does it come from? Where does it want to go? Where is it getting stuck?</li>
 <li><strong>Design the surface grading.</strong> Establish the finished elevations so water moves away from the house and any new hardscape, toward a safe outlet.</li>
 <li><strong>Scope the subsurface drainage.</strong> If a retaining wall is in scope, weeping tile and clear-stone backfill behind it. If the water table is high, a French drain system to intercept.</li>
 <li><strong>Tie downspouts and sump discharge into the plan.</strong> Solid PVC carrying roof water and sump water out and away — often the single biggest drainage fix on older West GTA lots.</li>
 <li><strong>Then — and only then — scope the hardscape on top.</strong> Patio layout, paver selection, wall configuration. The fun stuff. Last.</li>
 </ArticleOL>
 <ArticleP>
 Proper yard grading before patio installation isn&apos;t an upsell
 — it&apos;s the sequence that makes the patio worth building.
 </ArticleP>

 <ArticleH2>Solutions We Use</ArticleH2>
 <ArticleP>
 The drainage toolkit isn&apos;t complicated. It&apos;s about
 picking the right tool for the water you have:
 </ArticleP>
 <ArticleUL>
 <li><strong>Surface grading</strong> — reshaping the lawn and base elevations so water flows where you want it</li>
 <li><strong>French drains</strong> — perforated pipe in clear stone, wrapped in filter fabric, set below grade to intercept subsurface water</li>
 <li><strong>Channel drains</strong> — linear trench drains across driveways, at patio edges, or in front of walkout doors to capture sheet flow</li>
 <li><strong>Catch basins</strong> — grated boxes at low points that collect and carry water underground</li>
 <li><strong>Downspout tie-ins</strong> — solid PVC taking roof water from the downspout to a safe outlet 10+ feet from the house</li>
 <li><strong>Sump discharge routing</strong> — getting basement sump water fully away from the foundation and any new hardscape</li>
 <li><strong>Dry wells</strong> — underground gravel pits where local infiltration is allowed and municipal connection isn&apos;t an option</li>
 </ArticleUL>
 <ArticleP>
 Every one of these is standard work for our crew, selected based
 on what the lot actually needs.
 </ArticleP>

 <ArticleH2>What a Proper On-Site Drainage Assessment Looks Like</ArticleH2>
 <ArticleP>
 When Alex or Pieter walks your property, this is what&apos;s
 actually happening:
 </ArticleP>
 <ArticleUL>
 <li>Walking the perimeter after (or during) rain whenever possible</li>
 <li>Checking every downspout — where it discharges, how far from the house, and what happens to that water</li>
 <li>Pushing a soil probe in high-risk zones to feel for the water table</li>
 <li>Shooting elevations with a laser level to map where water wants to go</li>
 <li>Reading foundation walls, existing hardscape joints, and lawn areas for telltales of past water movement</li>
 <li>Confirming whether town-level rules apply — Oakville lot-drainage plans on larger scopes, conservation-authority review for some lakeshore and ravine properties</li>
 </ArticleUL>
 <ArticleP>
 None of this takes long. Skipping it is how $40,000 patios end up
 torn out in year five.
 </ArticleP>

 <ArticleH2>Cost Reality — Why Drainage Work Pays for Itself</ArticleH2>
 <ArticleP>
 Drainage work on a typical West GTA residential project runs anywhere
 from $3,000 for a few downspout tie-ins and regrading to $15,000+
 for a full French drain system, channel drains, and engineered
 discharge routing.
 </ArticleP>
 <ArticleP>
 Replacing a failed patio runs $30,000 to $80,000. Rebuilding a
 collapsed retaining wall and fixing the grade behind it, more.
 </ArticleP>
 <ArticleP>
 The math is the same every time. Drainage done upfront is the
 cheapest insurance on the most expensive part of your build — the
 hardscape itself. Backed by our 3-year warranty, our drainage work
 is part of the reason we can stand behind every install we build.
 </ArticleP>
 </div>
 </section>

 {/* FAQ */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={560} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">READER QUESTIONS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Drainage &amp; Hardscape Questions{" "}
 <em className="italic font-light">Oakville Homeowners Ask</em>
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
