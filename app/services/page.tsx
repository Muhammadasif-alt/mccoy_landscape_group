import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import FAQBlock from "@/components/FAQBlock";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Hardscaping Services Oakville | McCoy Landscape Group",
 description:
 "Paver patios, driveways, retaining walls, outdoor living & landscape lighting across Oakville, Burlington & Mississauga. 3-year warranty. Call (416) 985-9771.",
 alternates: { canonical: "/services" },
};

const serviceCards = [
 {
 title: "Paver Patios & Walkways",
 body:
 "Custom paver patio Oakville and walkway builds — base prep, drainage, and edge restraint done right so your patio still sits level 15 years from now.",
 cta: "Explore Paver Patios",
 href: "/services/paver-patios",
 image: "/images/03-card-paver-patios.jpg",
 alt: "Brick paver patio installation in Burlington by McCoy Landscape Group",
 },
 {
 title: "Paver Driveways",
 body:
 "Engineered driveway paver installation Oakville homeowners trust — Techo-Bloc, Unilock, and Permacon options, with base prep built for Ontario freeze–thaw.",
 cta: "Explore Paver Driveways",
 href: "/services/paver-driveways",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Interlocking paver driveway in Mississauga by McCoy Landscape Group",
 },
 {
 title: "Retaining Walls",
 body:
 "The retaining wall contractor Burlington grade changes and drainage demand — structural, decorative, and seating walls engineered for the long haul.",
 cta: "Explore Retaining Walls",
 href: "/services/retaining-walls",
 image: "/images/04-card-retaining-walls.jpg",
 alt: "Terraced retaining wall installation in Oakville by McCoy Landscape Group",
 },
 {
 title: "Outdoor Living Spaces",
 body:
 "Full outdoor living Oakville builds — pergolas, fire pits, seating walls, and integrated lighting designed and built as one scope.",
 cta: "Explore Outdoor Living",
 href: "/services/outdoor-living",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Outdoor living space with pergola and fire feature in Oakville by McCoy Landscape Group",
 },
 {
 title: "Landscape Lighting",
 body:
 "Low-voltage landscape lighting Oakville — path, step, uplighting, and deck lighting designed into the hardscape build, not added after.",
 cta: "Explore Landscape Lighting",
 href: "/services/landscape-lighting",
 image: "/images/06-card-landscape-lighting.jpg",
 alt: "Landscape lighting on stone steps and patio in Oakville by McCoy Landscape Group",
 },
 {
 title: "Softscape Services",
 body:
 "Sod installation, garden bed design, plant installation, and mulch — the green half of a finished landscape, paired with hardscape or done on its own.",
 cta: "Explore Softscape",
 href: "/services/softscape",
 image: "/images/softscape-hero.jpg",
 alt: "Softscape build — sod lawn, mulched beds, and ornamental plantings on an Oakville property by McCoy Landscape Group",
 },
 {
 title: "Landscape Maintenance",
 body:
 "Lawn mowing, pruning, mulching, and seasonal cleanups — recurring property care that keeps Oakville-area landscapes looking finished, year after year.",
 cta: "Explore Maintenance",
 href: "/services/maintenance",
 image: "/images/maintenance-detail.jpg",
 alt: "Premium Oakville property after a McCoy maintenance visit — edged lawn and crisp mulched beds",
 },
];

// Specialty leaf services, grouped. Rendered as compact text-link cards below the
// main image-card grid — same link-card language as the "Related services" block
// on each service page.
const specialtyGroups: { heading: string; links: { label: string; href: string }[] }[] = [
 {
 heading: "Stone & Masonry",
 links: [
 { label: "Masonry and Natural Stone", href: "/services/masonry-and-natural-stone" },
 { label: "Natural Stone Patio", href: "/services/natural-stone-patio" },
 { label: "Natural Stone Steps", href: "/services/natural-stone-steps" },
 { label: "Seating Walls and Stone Pillars", href: "/services/seating-walls-and-stone-pillars" },
 { label: "Armour Stone Retaining Wall", href: "/services/armour-stone-retaining-wall" },
 { label: "Garden Retaining Wall", href: "/services/garden-retaining-wall" },
 ],
 },
 {
 heading: "Design & Outdoor Living",
 links: [
 { label: "Landscape Design Consultation", href: "/services/landscape-design-consultation" },
 { label: "Fire Pit and Outdoor Fireplace", href: "/services/fire-pit-and-outdoor-fireplace" },
 { label: "Pergola and Pavilion Design", href: "/services/pergola-and-pavilion-design" },
 ],
 },
 {
 heading: "Paver Care & Repair",
 links: [
 { label: "Paver Cleaning and Sealing", href: "/services/paver-cleaning-and-sealing" },
 { label: "Interlock Repair and Re-Levelling", href: "/services/interlock-repair-and-re-levelling" },
 ],
 },
 {
 heading: "Softscape & Lawn",
 links: [
 { label: "Landscape Planting", href: "/services/landscape-planting" },
 { label: "Garden Bed Design", href: "/services/garden-bed-design" },
 { label: "Decorative Rock and Mulch", href: "/services/decorative-rock-and-mulch" },
 { label: "Sod Installation", href: "/services/sod-installation" },
 { label: "Artificial Turf Installation", href: "/services/artificial-turf-installation" },
 ],
 },
];

const whyMcCoyBullets = [
 "25+ years of hardscape craftsmanship across Oakville, Burlington, Mississauga, and Milton",
 "Owner-operated on every major project — Alex and Pieter, on the tools",
 "Built for Ontario freeze–thaw: proper base, proper drainage, done once",
 "3-year warranty + customer satisfaction guarantee on every install",
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium hardscape installs",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville hardscape work by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Custom outdoor living",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington retaining wall hardscape by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service hardscape",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga paver driveway by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Custom hardscape design-build",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton outdoor living build by McCoy Landscape Group",
 href: "/service-areas/milton",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Base Work",
 items: [
 "Demolition and removal of existing surfaces",
 "Excavation to the right depth for Ontario freeze–thaw",
 "Base prep, compaction in lifts, geotextile fabric where conditions demand it",
 "Drainage assessment and solutions before any pavers come in",
 ],
 },
 {
 heading: "Materials & Installation",
 items: [
 "Techo-Bloc, Unilock, or Permacon premium pavers — recommended by scope",
 "Polymeric sand jointing, edge restraint, and heavy-traffic detailing",
 "Engineered wall systems (gravity + reinforced) where grade or load requires",
 ],
 },
 {
 heading: "Details & Finishing",
 items: [
 "Steps, borders, inlays, and tie-ins to doors, grass, and planting",
 "Post-install cleanup, wash-down, and care-guide handoff",
 "3-year warranty activation on every hardscape install",
 ],
 },
];

const faqs = [
 {
 q: "Do you handle design and build, or just installation?",
 a: "Both. McCoy is a full design-build contractor — we scope, design, source materials, and install every project in-house. One accountability chain from first call to final walkthrough, no subcontracting on major builds.",
 },
 {
 q: "Which West GTA communities do you serve?",
 a: "Oakville, Burlington, Mississauga, and Milton across West GTA. Adjacent surrounding suburbs are served case-by-case based on scope and scheduling.",
 },
 {
 q: "How far in advance should I book?",
 a: "Spring and summer slots book 6–12 weeks ahead. Larger scopes (engineered walls, full outdoor living, permits) often need 12–16 weeks. Reach out early — winter is actually the best time to plan for spring builds.",
 },
 {
 q: "What's covered by the 3-year warranty?",
 a: "Sink, level, and cracking on hardscape installs — covered in writing on every estimate. We include a care guide at handoff so you know exactly what to expect from the surface long-term.",
 },
];

export default function ServicesHubPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="HARDSCAPE & OUTDOOR LIVING SERVICES"
 title="Hardscape Services in Oakville,"
 subtitle="Burlington & Mississauga"
 opening={
 <>
 Hardscape design-build services across Oakville, Burlington,
 Mississauga, and Milton — paver patios, driveways, retaining walls,
 outdoor living, and landscape lighting. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation,
 with every install backed by our 3-year warranty.
 </>
 }
 imageSrc="/images/09-showcase-signature-build.jpg"
 imageAlt="Paver patio, retaining wall, and outdoor lighting in Oakville by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">OUR SERVICE LINE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Everything McCoy Designs, Builds &amp;{" "}
 <em className="italic font-light">Backs With a 3-Year Warranty</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 One team handling every phase of your hardscaping Oakville
 project — from first walkthrough through final wash-down. A true
 hardscape contractor Burlington homeowners rely on.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Service Cards Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
 {serviceCards.map((s) => (
 <Link
 key={s.title}
 href={s.href}
 className="group relative block rounded-2xl overflow-hidden bg-[var(--color-bg-warm)] shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)] border-t-[3px] border-t-[var(--color-accent-mid)]"
 >
 <div className="relative aspect-[3/4] w-full overflow-hidden">
 <Image
 src={s.image}
 alt={s.alt}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 />
 </div>
 <div className="p-6 md:p-7">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[20px] md:text-[22px] text-[var(--color-primary)] mb-3 leading-tight">
 {s.title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.6] text-[var(--color-text)] mb-4">
 {s.body}
 </p>
 <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-accent-mid)]">
 {s.cta}
 <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
 </span>
 </div>
 </Link>
 ))}

 {/* Card 6 — Not Sure */}
 <Link
 href="/contact"
 className="group relative block rounded-2xl overflow-hidden bg-[var(--color-bg-dark)] text-white p-7 md:p-8 shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)] flex flex-col justify-center"
 >
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">START HERE</span>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[22px] md:text-[24px] mt-3 mb-3 leading-tight">
 Not Sure What You Need Yet?
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.6] text-white/85 mb-5">
 Most McCoy projects combine two or three services into one
 build. Book an on-site walk and we&apos;ll scope it together.
 </p>
 <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--color-accent)]">
 Tell Us Your Project
 <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
 </span>
 </Link>
 </div>

 {/* Specialty services — compact grouped link lists */}
 <div className="mt-16 md:mt-20 pt-12 md:pt-14 border-t border-[var(--color-border)]">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">SPECIALTY SERVICES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 Every Scope We Take On{" "}
 <em className="italic font-light">— Down to the Detail</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Most McCoy builds combine several of these into one scope. Open a
 detail page to see how we plan, price, and install each one.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
 {specialtyGroups.map((group) => (
 <div key={group.heading}>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] md:text-[20px] text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
 {group.heading}
 </h3>
 <ul className="flex flex-col gap-2.5">
 {group.links.map((l) => (
 <li key={l.href}>
 <Link
 href={l.href}
 className="group flex items-start gap-2 text-[14px] md:text-[15px] leading-[1.5] text-[var(--color-text)] hover:text-[var(--color-accent-mid)] transition-colors"
 >
 <span aria-hidden className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-mid)] mt-[8px] flex-shrink-0" />
 <span>{l.label}</span>
 <span aria-hidden className="opacity-0 transition-opacity group-hover:opacity-100">→</span>
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* What's Included */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-14">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE SCOPE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What&apos;s Included in Every{" "}
 <em className="italic font-light">McCoy Hardscape Build</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every McCoy project is a complete, no-shortcuts install — the
 hidden work under the surface matters as much as the pavers on
 top. Here&apos;s what every hardscape build covers from day one
 to handoff.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
 {includedScope.map((block) => (
 <div key={block.heading}>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[20px] text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
 {block.heading}
 </h3>
 <ul className="flex flex-col gap-3">
 {block.items.map((item) => (
 <li
 key={item}
 className="flex items-start gap-2.5 text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-text)]"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-mid)] mt-[8px] flex-shrink-0" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why McCoy */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.10} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Oakville Homeowners{" "}
 <em className="italic font-light">Choose McCoy Because…</em>
 </h2>
 </div>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
 {whyMcCoyBullets.map((b) => (
 <li
 key={b}
 className="flex items-start gap-3 bg-[var(--color-bg-warm)] rounded-xl p-5 shadow-[0_4px_18px_-12px_rgba(0,0,0,0.15)]"
 >
 <CheckCircle2
 size={22}
 className="text-[var(--color-accent-mid)] flex-shrink-0 mt-[2px]"
 />
 <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-text)]">
 {b}
 </span>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* Service Areas */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHERE WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Serving West GTA&apos;s{" "}
 <em className="italic font-light">West GTA</em>
 </h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
 {serviceAreas.map((sa) => (
 <Link
 key={sa.name}
 href={sa.href}
 className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)]"
 >
 <Image
 src={sa.image}
 alt={sa.alt}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0.05) 0%,rgba(15,20,17,0.35) 50%,rgba(15,20,17,0.85) 100%)",
 }}
 />
 <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
 <span className="eyebrow !text-[12px] md:!text-[13px] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
 ON
 </span>
 <h3 className="font-[family-name:var(--font-display)] font-black text-white text-[24px] md:text-[28px] leading-tight mt-1.5 [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
 {sa.name}
 </h3>
 <p className="text-[13px] md:text-[14px] text-white/90 leading-[1.45] mt-1.5 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
 {sa.note}
 </p>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Hardscape Service"
 headingItalic="FAQs"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "CollectionPage",
 url: "https://mccoylandscapegroup.com/services",
 name: "Hardscape & Outdoor Living Services",
 about: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 hasPart: [
 ...serviceCards.map((s) => ({ name: s.title, href: s.href })),
 ...specialtyGroups.flatMap((g) =>
 g.links.map((l) => ({ name: l.label, href: l.href }))
 ),
 ].map((s) => ({
 "@type": "Service",
 name: s.name,
 url: `https://mccoylandscapegroup.com${s.href}`,
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 })),
 },
 {
 "@type": "FAQPage",
 mainEntity: faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://mccoylandscapegroup.com/" },
 { "@type": "ListItem", position: 2, name: "Services", item: "https://mccoylandscapegroup.com/services" },
 ],
 },
 ],
 }}
 />
 </>
 );
}
