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
const POST_URL = `${SITE}/blog/paver-patios-ontario-winters`;
const POST_TITLE = "How We Build Paver Patios That Survive Ontario Winters";
const POST_IMG = `${SITE}/images/03-card-paver-patios.jpg`;
const PUBLISHED = "2026-04-25";
const MODIFIED = "2026-04-29";

export const metadata: Metadata = {
 title: "Paver Patios Built for Ontario Winters | McCoy Landscape",
 description:
 "How McCoy builds paver patios that survive Ontario freeze-thaw — base depth, drainage, edge restraint. West GTA hardscape since 2001. Call (416) 985-9771.",
 alternates: { canonical: "/blog/paver-patios-ontario-winters" },
};

const relatedPosts = [
 {
 href: "/blog/drainage-first-hardscape",
 image: "/images/11-process-excavation.jpg",
 eyebrow: "DRAINAGE & GRADING",
 title:
 "Drainage First: How to Avoid Expensive Water Problems Before You Invest in Hardscape",
 excerpt:
 "The sequencing rule that decides whether pavers last or fail — drainage gets scoped before the patio quote.",
 },
 {
 href: "/blog/full-backyard-hardscape-halton",
 image: "/images/09-showcase-signature-build.jpg",
 eyebrow: "PLANNING & BUDGETING",
 title:
 "What a Full Backyard Hardscape Project Actually Includes in West GTA",
 excerpt:
 "Scope, sequencing, timelines, and real costs for a full backyard build across Oakville, Burlington, Mississauga, and Milton.",
 },
];

const faqs = [
 {
 q: "Can you install patios in winter?",
 a: "Not usually. The ground needs to be workable — not frozen — to excavate, compact, and set base properly. Our build season in West GTA runs roughly late March through early December, weather-dependent. Winter is when we design, quote, and book slots. If you want work starting in April or May, the conversation happens in January and February. Frozen-ground installs end up with base problems by spring.",
 },
 {
 q: "What's the minimum base depth for Ontario?",
 a: "We build to 10–12 inches of excavated depth below your finished patio surface — enough for a full compacted aggregate base plus paver and bedding sand. Anything shallower sits inside the freeze-thaw zone. Some Canadian jurisdictions quote 6 inches as a minimum; in West GTA clay soil under residential freeze-thaw cycles, that's a recipe for a patio you replace in 7 years.",
 },
 {
 q: "How do I know if my old patio has good base?",
 a: "A few quick tests. Walk across it — any paver that rocks, tips, or sounds hollow signals a failed bedding or base layer. Look at the edges — open joints or drifted pavers mean edge restraint is gone. Check after a rain — water pooling on the surface means the slope was never set. If two or more of those are happening, you're looking at a demo-and-rebuild, not a surface repair.",
 },
 {
 q: "Do polymeric sand joints really last?",
 a: "Done right, polymeric sand joints stay locked for 3 to 5 years before they need a top-up, and a full re-joint every 7 to 10 years depending on traffic, sun exposure, and pressure washing habits. Done wrong — over-watered during activation, or swept in on dirty pavers — they fail in the first winter. We include a care guide at handoff so you don't accidentally ruin them with a pressure washer.",
 },
 {
 q: "What happens if drainage wasn't done right?",
 a: "Water finds the path of least resistance. Under a patio with bad drainage, that path is usually your foundation, your neighbour's lot line, or a slow washout under the base. Six signs of drainage failure: efflorescence streaks, moss in joints, ice sheets in winter, pooling water after rain, heaving edges, and sinking corners. Drainage gets scoped before the patio quote — fixing it after is always more expensive.",
 },
 {
 q: "Why are Techo-Bloc, Unilock, and Permacon worth the upcharge?",
 a: "Three reasons. First, published freeze-thaw and absorption ratings — you know what you're buying. Second, denser concrete and better surface treatments that shed Ontario road salt instead of spalling under it. Third, warranty and lot-matching — if a paver ever needs replacing years later, we can usually source a colour match. Generic big-box pavers rarely offer that, and it shows at year 5.",
 },
 {
 q: "How long does a proper paver patio install take?",
 a: "Most McCoy paver patio builds run 1–3 weeks on-site once excavation starts. Excavation and base prep alone usually take 2–4 days depending on size and access — and that's where we don't rush. Paver laying and jointing move faster once the base is right. Peak-season slots book 6–12 weeks ahead, so if you want a May or June install, reach out in the winter planning window.",
 },
];

export default function PaverPatiosOntarioWintersPage() {
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
 knowsAbout: ["paver patio installation", "Ontario freeze-thaw", "base preparation", "edge restraint"],
 },
 publisher: { "@id": `${SITE}/#organization` },
 mainEntityOfPage: { "@type": "WebPage", "@id": POST_URL },
 description:
 "How McCoy builds paver patios that survive Ontario freeze-thaw — base depth, drainage, edge restraint.",
 articleSection: "Paver Patios & Walkways",
 keywords: ["paver patio Ontario", "freeze-thaw paver", "West GTA paver patio", "base preparation"],
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
 { "@type": "ListItem", position: 3, name: "Paver Patios for Ontario Winters", item: POST_URL },
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
 title="How We Build Paver Patios"
 subtitle="That Survive Ontario Winters"
 opening={
 <>
 A paver patio built for ontario winters demands 10–12 inches of
 compacted base, geotextile separation, proper slope, and staked
 edge restraint — the hidden craftsmanship freeze thaw patio
 installation Oakville-area homeowners pay for once. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation
 across Oakville, Burlington, Mississauga, and Milton.
 </>
 }
 imageSrc="/images/03-card-paver-patios.jpg"
 imageAlt="Finished Techo-Bloc paver patio with tight polymeric sand joints in Burlington, Ontario, built by McCoy Landscape Group"
 />

 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[760px] px-5 md:px-10">
 <div className="text-[14px] text-[var(--color-text-muted)] mb-8 italic">
 By the McCoy Landscape Group crew · Oakville, ON · 6 min read
 </div>

 <p className="text-[17px] md:text-[18px] leading-[1.75] text-[var(--color-text)] mb-8 font-medium">
 Built to last in Ontario winters. Proper base, proper drainage,
 done once — backed by our 3-year warranty.
 </p>

 <ArticleH2>Why Ontario Winters Destroy Cheap Patios</ArticleH2>
 <ArticleP>
 Ontario&apos;s climate runs through 40 to 60 freeze-thaw cycles a
 winter. Water seeps into the base under your patio, freezes,
 expands about 9 percent, and shoves everything above it upward.
 Then it melts, the space collapses, and pavers drop back down
 uneven. Do that a hundred times and a shortcut patio starts to
 look like a skateboard ramp.
 </ArticleP>
 <ArticleP>
 West GTA adds two more problems on top of that. Much of the region —
 especially lots in Oakville, Burlington, and south
 Mississauga — sits on heavy clay soil. Clay holds water instead of
 draining it, so the freeze-thaw punishment sits right under your
 pavers for months. The second problem is water migration: if your
 downspouts, grading, or drainage weren&apos;t scoped before the
 patio went in, water runs under the base and hollows it out from
 the edges. That&apos;s why so many &ldquo;5-year patios&rdquo;
 look 20 years old by year six.
 </ArticleP>

 <ArticleH2>Excavation Depth: Why 10–12 Inches, Not 4</ArticleH2>
 <ArticleP>
 The single biggest reason cheap patios fail is excavation depth.
 Big-box install guides sometimes say 4–6 inches of base is
 &ldquo;fine.&rdquo; It isn&apos;t — not for residential Ontario
 freeze-thaw.
 </ArticleP>
 <ArticleP>
 Our crews dig out 10 to 12 inches below the finished patio
 surface. That gives us room for a proper compacted aggregate base
 plus the paver and bedding layer on top. Cut corners here and the
 freeze-thaw line reaches the underside of your pavers — the exact
 layer you never want water freezing in.
 </ArticleP>

 <ArticleH2>Geotextile Fabric: The Separation Layer Most Contractors Skip</ArticleH2>
 <ArticleP>
 Once the excavation is clean, we roll out woven geotextile
 separation fabric across the sub-grade before any aggregate goes
 down. Most contractors skip this step because it costs a few
 hundred dollars and adds half a day.
 </ArticleP>
 <ArticleP>
 Here&apos;s what it does: it stops the native soil (especially
 West GTA clay) from pumping up into your aggregate base over time.
 Without it, freeze-thaw cycling mixes the two layers — soil
 migrates up, stones migrate down — and your clean base turns into
 a muddy mess. Fifteen years from now, a patio with geotextile
 still has a base. A patio without it doesn&apos;t.
 </ArticleP>

 <ArticleH2>Base Prep in Lifts — Why Lift-by-Lift Beats One Big Dump</ArticleH2>
 <ArticleP>
 This is where real paver patio base prep ontario either gets done
 right or gets faked. We build the base in 2-inch compacted lifts
 of 3/4-inch crushed aggregate (sometimes called Granular A or
 crusher run). Each lift gets:
 </ArticleP>
 <ArticleUL>
 <li>Spread evenly across the excavation</li>
 <li>Wet down lightly if dry</li>
 <li>Compacted with a plate compactor — minimum 3–4 passes in different directions</li>
 <li>Checked for level and depth before the next lift goes in</li>
 </ArticleUL>
 <ArticleP>
 Why not just dump 8 inches and hit it once? Because a plate
 compactor can only meaningfully compact about 2 inches of
 aggregate at a time. Dump more than that and the bottom half stays
 loose — and loose base is where pavers sink. A four-lift base
 takes a full day longer than a one-dump job. It&apos;s also the
 difference between a patio that still sits flat in 2041 and one
 that needs to be lifted in 2030.
 </ArticleP>

 <ArticleH2>Proper Slope for Water Management</ArticleH2>
 <ArticleP>
 Every patio we build pitches away from the house at a minimum of
 1/8 inch per foot. That&apos;s the slope rule for West GTA
 residential — enough to move water, not enough to feel like
 you&apos;re eating dinner on a hill.
 </ArticleP>
 <ArticleP>
 Slope gets set during base prep, not at the paver stage. We use
 string lines and laser levels across the compacted base so the
 finished paver surface lands at the right grade. Patios built flat
 or sloped toward a house are where water damage, ice sheeting, and
 foundation issues start.
 </ArticleP>

 <ArticleH2>Edge Restraint — The Reason Paver Joints Stay Tight</ArticleH2>
 <ArticleP>
 Pavers want to migrate outward. Every time someone walks, every
 freeze-thaw cycle, every summer expansion — the field pushes
 against the perimeter. Without edge restraint, outer pavers drift,
 joints open, polymeric sand washes out, and the whole patio starts
 unraveling from the edges.
 </ArticleP>
 <ArticleP>
 Our standard is heavy-duty PVC or aluminum edging, spiked into
 the compacted sub-base with 10-inch landscape spikes every 12
 inches around the full perimeter. Not into the bedding sand —
 into the base. Edge restraint that&apos;s only staked into topsoil
 will heave out with the first frost.
 </ArticleP>

 <ArticleH2>Paver Selection — Freeze-Thaw Rated vs. Not</ArticleH2>
 <ArticleP>
 We specify Techo-Bloc, Unilock, and Permacon — three Ontario
 manufacturers that publish freeze-thaw durability data and
 absorption ratings for every product line. Big-box concrete pavers
 don&apos;t. That&apos;s not branding; it&apos;s material
 engineering.
 </ArticleP>
 <ArticleP>
 Premium pavers use denser concrete mixes, lower water absorption,
 and surface treatments that shed de-icing salts. They cost more
 per square foot. They also look the same in photos 15 years later
 — where a lower-grade paver spalls, fades, and flakes at the
 surface after three or four Ontario winters.
 </ArticleP>

 <ArticleH2>Polymeric Sand Joints — Activation Method Matters</ArticleH2>
 <ArticleP>
 Polymeric sand goes between every paver joint. It&apos;s a mix of
 silica sand and polymer binders that hardens when activated with
 water. Done right, it locks the field together and blocks weed
 growth, ant intrusion, and water infiltration for 3–5 years
 before top-up.
 </ArticleP>
 <ArticleP>
 The activation step is where cheap installs fail. We sweep the
 sand in dry, compact it once with a plate compactor and a rubber
 mat, sweep again, then mist — not spray — the entire surface in
 stages so the polymer wicks down through the joint without
 washing the sand out. Hit it with a pressure nozzle and
 you&apos;ve got expensive mud.
 </ArticleP>

 <ArticleH2>Post-Install Compaction</ArticleH2>
 <ArticleP>
 After joints are filled and polymeric sand is activated, we run
 the plate compactor back over the entire patio surface with a
 rubber mat underneath to protect the paver faces. This final pass
 seats every paver into the bedding layer, locks the field, and
 squeezes any remaining voids out of the joints. Skipping this
 step is how a brand-new patio develops high and low spots in its
 first year.
 </ArticleP>

 <ArticleH2>The 15-Year Test — What Separates a 5-Year Patio From a 25-Year One</ArticleH2>
 <ArticleP>
 A patio built for freeze thaw patio installation Oakville-area conditions
 looks the same in year 15 as it did in year 1. That outcome comes
 down to six things, none of which you can see once the pavers are
 down:
 </ArticleP>
 <ArticleOL>
 <li>Excavation depth cut to the freeze-thaw zone — 10 to 12 inches</li>
 <li>Geotextile separation fabric under the aggregate</li>
 <li>Base built in compacted 2-inch lifts, not one dump</li>
 <li>Slope set before pavers, minimum 1/8 inch per foot</li>
 <li>Edge restraint staked into the sub-base, every 12 inches</li>
 <li>Polymeric sand properly activated, followed by final compaction</li>
 </ArticleOL>
 <ArticleP>
 Miss one and the clock starts ticking. Hit all six and the patio
 outlives most of the other hardscape on the property.
 </ArticleP>

 <ArticleH2>How to Spot a Poorly Installed Patio in Someone Else&apos;s Yard</ArticleH2>
 <ArticleUL>
 <li>Rocking or tipping pavers when stepped on — bedding layer failure or washed-out base</li>
 <li>Joints wider than a finger at the edges — edge restraint missing or heaved</li>
 <li>Water pooling on the surface after rain — no slope or reverse slope</li>
 <li>White chalky deposits on paver faces (efflorescence is normal; flaking isn&apos;t) — low-grade pavers cracking at the surface</li>
 <li>Grass or moss growing in the joints — polymeric sand never activated or long washed out</li>
 <li>A visible dip or wave across the field — one-dump base that wasn&apos;t compacted in lifts</li>
 </ArticleUL>
 </div>
 </section>

 {/* FAQ */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={560} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">PAVER PATIO FAQS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Ontario Winter{" "}
 <em className="italic font-light">Paver Patio FAQs</em>
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
