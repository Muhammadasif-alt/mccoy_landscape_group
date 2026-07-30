import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Hardscape & Outdoor Living Blog | McCoy Landscape Group",
 description:
 "Practical hardscape and outdoor living tips from McCoy Landscape Group — 25 years of West GTA experience. Patios, walls, drainage, budget, timelines.",
 alternates: { canonical: "/blog" },
};

const posts = [
 {
 slug: "full-backyard-hardscape-halton",
 title:
 "What a Full Backyard Hardscape Project Actually Includes in West GTA",
 category: "Planning & Budgeting",
 readTime: "7 min read",
 excerpt:
 "A straight-talk breakdown of what goes into a full backyard hardscape build — scope, sequencing, materials, timelines, and where homeowners most often underestimate. Written from 25 years of real McCoy project experience.",
 image: "/images/03-card-paver-patios.jpg",
 alt: "Full backyard hardscape build in Oakville — McCoy project reference",
 },
 {
 slug: "paver-patios-ontario-winters",
 title: "How We Build Paver Patios That Survive Ontario Winters",
 category: "Paver Patios & Walkways",
 readTime: "6 min read",
 excerpt:
 "The hidden work under a paver patio — excavation depth, base prep in lifts, geotextile fabric, edge restraint, polymeric sand — and how each one keeps your patio level 15 years from now.",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Paver patio base prep in lifts — McCoy install methodology",
 },
 {
 slug: "drainage-first-hardscape",
 title:
 "Drainage First: How to Avoid Expensive Water Problems Before You Invest in Hardscape",
 category: "Drainage & Grading",
 readTime: "5 min read",
 excerpt:
 "The single biggest reason hardscape projects fail: bad drainage scoped in as an afterthought. How McCoy solves water issues before the first paver goes down — and what to look for on your own property.",
 image: "/images/01-hero-outdoor-living-golden-hour.jpg",
 alt: "Drainage solution installation before hardscape in Burlington",
 },
];

export default function BlogHubPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="HARDSCAPE INSIGHTS"
 title="Hardscape & Outdoor Living Insights"
 subtitle="for Oakville Homeowners"
 opening={
 <>
 Practical guides on paver patios, driveways, retaining walls,
 outdoor living, and the hidden work that decides whether your
 hardscape lasts 5 years or 25. Written by McCoy Landscape Group —{" "}
 <strong>25 years of West GTA hardscape experience</strong> on every
 page.
 </>
 }
 imageSrc="/images/09-showcase-signature-build.jpg"
 imageAlt="Hardscape projects by McCoy Landscape Group — paver patio, pergola, driveway in West GTA"
 primaryCta={{ label: "Start Reading", href: "#articles" }}
 />

 {/* Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.14} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">START HERE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 Featured Guides for{" "}
 <em className="italic font-light">Planning Your Project</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] italic">
 Real advice from working contractors — no generic SEO filler, no
 copy-paste from other blogs.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Blog post cards grid */}
 <section
 id="articles"
 className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden"
 >
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
 {posts.map((p) => (
 <Link
 key={p.slug}
 href={`/blog/${p.slug}`}
 className="group relative block rounded-2xl overflow-hidden bg-[var(--color-bg-warm)] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)] border-t-[3px] border-t-[var(--color-accent-mid)] flex flex-col"
 >
 <div className="relative aspect-[16/10] w-full overflow-hidden">
 <Image
 src={p.image}
 alt={p.alt}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 768px) 100vw, 33vw"
 />
 </div>
 <div className="p-6 md:p-7 flex-1 flex flex-col">
 <div className="flex items-center gap-3 mb-3">
 <span className="eyebrow !text-[12px] md:!text-[13px] text-[var(--color-accent-mid)]">
 {p.category}
 </span>
 <span className="text-[12px] text-[var(--color-text-muted)]">
 · {p.readTime}
 </span>
 </div>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[19px] md:text-[21px] text-[var(--color-primary)] mb-3 leading-tight">
 {p.title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--color-text)] mb-5 flex-1">
 {p.excerpt}
 </p>
 <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-accent-mid)]">
 Read article
 <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
 </span>
 </div>
 </Link>
 ))}
 </div>

 <p className="mt-10 text-[14px] md:text-[15px] text-[var(--color-text-muted)] italic max-w-[720px]">
 More articles in the works — paver vs. asphalt, contractor
 selection, Techo-Bloc vs. Unilock, and outdoor living budget
 scopes coming soon.
 </p>
 </div>
 </section>

 {/* Why trust McCoy */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY LISTEN TO MCCOY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Why Trust Hardscape Advice{" "}
 <em className="italic font-light">From McCoy</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 McCoy has delivered 200+ hardscape projects across Oakville, Burlington, Mississauga, and Milton since
 2001. Every article on this blog is written from project
 experience, not keyword research — we write what homeowners
 actually need to know before spending $30K+ on their outdoor
 space.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Owner-operated by Alex Medeiros and Pieter Meeussen, both on-the-tools for
 6 years before buying the company in 2024. Articles reflect real
 Ontario build experience — freeze-thaw, clay soils, 
 drainage, and what actually fails versus what actually lasts.
 </p>
 </div>
 </section>

 <FinalCTA />
 <Footer />
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "Blog",
 url: "https://mccoylandscapegroup.com/blog",
 name: "McCoy Landscape Group Build Wisdom Blog",
 publisher: { "@id": "https://mccoylandscapegroup.com/#organization" },
 blogPost: posts.map((p) => ({
 "@type": "BlogPosting",
 headline: p.title,
 url: `https://mccoylandscapegroup.com/blog/${p.slug}`,
 author: { "@id": "https://mccoylandscapegroup.com/#organization" },
 })),
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://mccoylandscapegroup.com/" },
 { "@type": "ListItem", position: 2, name: "Blog", item: "https://mccoylandscapegroup.com/blog" },
 ],
 },
 ],
 }}
 />
 </>
 );
}
