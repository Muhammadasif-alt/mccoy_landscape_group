import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Mountain,
 Sprout,
 Layers,
 ArrowUpDown,
 Footprints,
 Waves,
 CheckCircle2,
} from "lucide-react";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import FAQBlock from "@/components/FAQBlock";

export const metadata: Metadata = {
 title: "Armour Stone Retaining Wall Oakville | Slope & Grade Walls | McCoy Landscape Group",
 description:
 "Custom armour stone retaining wall installation in Oakville, Burlington, Mississauga & Milton. 3-year warranty on shifting, settling & leaning. Call (416) 985-9771.",
 alternates: { canonical: "/services/armour-stone-retaining-wall" },
};

const wallTypes = [
 {
 icon: Mountain,
 title: "Slope retaining walls",
 body: "Strong walls that hold back sloped and hillside yards.",
 },
 {
 icon: Sprout,
 title: "Garden armour stone walls",
 body: "Low natural stone walls that frame beds and level space.",
 },
 {
 icon: Layers,
 title: "Terraced armour stone",
 body: "Tiered walls that turn a steep slope into usable levels.",
 },
 {
 icon: ArrowUpDown,
 title: "Driveway and grade walls",
 body: "Walls that hold grade along driveways and property lines.",
 },
 {
 icon: Footprints,
 title: "Armour stone steps and seating",
 body: "Large stone steps and seating built into the wall line.",
 },
 {
 icon: Waves,
 title: "Waterfront and shoreline walls",
 body: "Rugged stone walls for waterfront grade and erosion control.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Base Work",
 items: [
 "Site and slope assessment for the right wall design",
 "Excavation to the right depth for Ontario freeze and thaw",
 "Compacted aggregate base built to carry the stone",
 "Grade and access planning for placing large stone",
 ],
 },
 {
 heading: "Materials & Installation",
 items: [
 "Quality armour stone sized to the wall and grade",
 "Each stone set with the correct pitch and lock",
 "Drainage stone and pipe behind the wall to relieve water",
 "Steps, seating, and terraces built as one scope",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Backfill, grading, and cleanup",
 "Care and maintenance guide at handoff",
 "3-year warranty activation",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ hardscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated. Alex and Pieter on every major build",
 "The equipment and skill to place large armour stone safely",
 "Drainage and base built for Ontario freeze, thaw, and water pressure",
 "Clean crews, respectful job sites, daily communication",
 "3-year warranty covering shifting, settling, and leaning",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your goals, slope, and timeline." },
 { title: "On-Site Consultation", body: "We walk the property, assess the grade, drainage, and access." },
 { title: "Design & Detailed Estimate", body: "Wall design, stone selection, and investment in writing." },
 { title: "Build & Daily Cleanup", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough & 3-Year Warranty", body: "Confirm every detail, hand off care tips." },
];

const faqs = [
 {
 q: "How much does an armour stone wall cost in Oakville or Burlington?",
 a: "It depends on the length, the height, the stone size, and site access. A low garden wall is far less than a tall terraced wall that needs machines and drainage work. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "What is armour stone?",
 a: "Armour stone is large, quarried natural rock, often weighing hundreds of kilos or more per piece. It is used for retaining walls, borders, and bold landscape features. Its size and weight are what make it so strong and long-lasting.",
 },
 {
 q: "Is armour stone better than a block retaining wall?",
 a: "Both work well. Armour stone gives a natural, rugged look and each piece is unique. Block walls give a clean, uniform finish. We walk you through both during the design phase based on your slope, look, and budget.",
 },
 {
 q: "Do armour stone walls need drainage?",
 a: "Yes. Water building up behind any retaining wall is the main cause of failure. We install drainage stone and pipe behind the wall to relieve that pressure, which is why our walls hold up for decades.",
 },
 {
 q: "Will an armour stone wall shift or lean over time?",
 a: "Not when it is built right. A proper base, the correct pitch, and drainage behind the wall keep it solid through freeze and thaw. That is why our 3-year warranty covers shifting, settling, and leaning.",
 },
 {
 q: "Do you need machine access to build an armour stone wall?",
 a: "Usually yes, because the stone is heavy. We assess access during the on-site visit and plan the build around your property. If access is tight, we plan for it so there are no surprises.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium armour stone walls",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville armour stone wall by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Custom slope and grade walls",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington armour stone slope and grade wall by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service retaining walls",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga armour stone retaining wall by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Custom hardscape design-build",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton custom hardscape design-build by McCoy Landscape Group",
 href: "/service-areas/milton",
 },
];

export default function ArmourStoneRetainingWallPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/armour-stone-retaining-wall`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Armour Stone Retaining Wall",
 description:
 "Custom armour stone retaining wall installation — slope and grade walls, terraced walls, garden walls, armour stone steps, and shoreline walls across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Armour Stone Retaining Wall", "Slope Retaining Wall", "Terraced Wall", "Grade Wall", "Shoreline Wall"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Armour Stone Retaining Wall", item: URL },
 ],
 };

 const faqLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 };

 return (
 <>
 <JsonLd data={serviceLd} />
 <JsonLd data={breadcrumbLd} />
 <JsonLd data={faqLd} />

 <Nav />

 <PageHero
 eyebrow="ARMOUR STONE RETAINING WALLS"
 title="Armour Stone Retaining Walls Built to Last"
 subtitle="in Oakville"
 opening={
 <>
 Custom armour stone retaining wall installation in Oakville, Burlington,
 Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. Every
 wall we build is backed by our 3-year warranty covering shifting,
 settling, and leaning.
 </>
 }
 imageSrc="/armour-stone-retaining-wall/hero-tiered-limestone-wall.png"
 imageAlt="Tiered limestone armour stone retaining wall terracing the front garden of an Oakville home built by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN-BUILD RETAINING WALLS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Big Stone That Holds Back Grade{" "}
 <em className="italic font-light">for Decades</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Armour stone is one of the strongest and boldest ways to hold back a
 slope. These are large, single pieces of natural rock that look rugged
 and last for decades. But their size is exactly why they have to be set
 right. A poorly placed armour stone wall can lean, shift, or fail, and
 moving multi-tonne stone to fix it is a serious job.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy builds armour stone walls that hold their line and their grade for
 the long haul. We assess the slope, plan for drainage behind the wall,
 and set each stone on a proper base with the right pitch. Whether it is a
 low garden wall or a tall grade change, we build it to handle Ontario
 freeze, thaw, and water pressure.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Wall Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Custom Armour Stone Wall Configurations
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 No two McCoy walls are identical. Here are the armour stone builds we do
 most often across Oakville, Burlington, Mississauga, and Milton homes.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {wallTypes.map(({ icon: Icon, title, body }) => (
 <div
 key={title}
 className="group relative bg-[var(--color-bg-warm)] rounded-2xl p-6 md:p-7 border-t-[3px] border-t-[var(--color-accent-mid)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]"
 >
 <div className="w-12 h-12 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center mb-4 shadow-sm">
 <Icon size={22} strokeWidth={2} />
 </div>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] md:text-[19px] text-[var(--color-primary)] mb-2 leading-tight">
 {title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-text)]">
 {body}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Photo strip */}
 <section className="relative">
 <div className="relative h-[320px] md:h-[460px] overflow-hidden">
 <Image
 src="/armour-stone-retaining-wall/center-tiered-stone-stairway.png"
 alt="A tiered stone garden with a central stone stairway and planting beds holding a backyard grade in Oakville by McCoy Landscape Group"
 fill
 className="object-cover"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0.25) 0%,rgba(15,20,17,0) 35%,rgba(15,20,17,0.55) 100%)",
 }}
 />
 <WaveDivider
 toColor="#ffffff"
 variant="rolling"
 height={90}
 flip
 className="absolute inset-x-0 top-0 z-[2]"
 />
 <div className="absolute inset-0 flex items-center z-[1]">
 <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-20">
 <span className="inline-flex items-center bg-black/55 backdrop-blur-sm px-3 py-1.5 rounded-full !text-[12px] md:!text-[13px] uppercase tracking-[0.12em] font-semibold text-white">
 A RECENT MCCOY BUILD · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 A terraced armour stone wall with built-in steps and planting beds,
 holding a steep backyard grade.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Signature Features */}
 <section className="relative bg-[var(--color-bg-dark)] text-white py-20 md:py-24 overflow-hidden -mt-1">
 <TopoBG shape="shape_04" position="bottom-right" size={520} opacity={0.18} tint="white" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">OPTIONAL FEATURES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Details That Make a Wall{" "}
 <em className="italic font-light text-[var(--color-accent)]">Work Harder</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Built-in armour stone steps and seating along the wall line",
 "Integrated low-voltage lighting on walls and steps",
 "Planting beds and terraces built into the grade change",
 "Engineered drainage behind the wall that relieves water pressure",
 ].map((item) => (
 <div
 key={item}
 className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
 >
 <CheckCircle2
 size={22}
 className="text-[var(--color-accent)] flex-shrink-0 mt-[2px]"
 />
 <p className="text-[15px] md:text-[16px] leading-[1.55] text-white/95">
 {item}
 </p>
 </div>
 ))}
 </div>
 </div>
 <WaveDivider toColor="#ffffff" variant="calm" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* What's Included */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-14">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE SCOPE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Every McCoy Armour Stone Wall{" "}
 <em className="italic font-light">Includes</em>
 </h2>
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
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.14} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Why Oakville Homeowners Choose{" "}
 <em className="italic font-light">McCoy for Armour Stone</em>
 </h2>
 </div>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
 {whyMcCoyBullets.map((b) => (
 <li
 key={b}
 className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-[0_4px_18px_-12px_rgba(0,0,0,0.15)]"
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

 {/* Process */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12 md:mb-16">
 <span className="eyebrow text-[var(--color-accent-mid)]">HOW WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Our 5-Step{" "}
 <em className="italic font-light">Armour Stone Wall Process</em>
 </h2>
 </div>

 <ol className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6">
 {processSteps.map((s, i) => {
 const stepPhotos = [
 "/images/14-about-trailer.jpg",
 "/images/10-process-consultation.jpg",
 "/images/11-process-excavation.jpg",
 "/images/12-process-installation.jpg",
 "/images/13-process-handoff.jpg",
 ];
 return (
 <li
 key={s.title}
 className="relative bg-[var(--color-bg-warm)] rounded-2xl overflow-hidden border-t-[3px] border-t-[var(--color-accent-mid)] flex flex-col"
 >
 <div className="relative aspect-square w-full overflow-hidden">
 <Image
 src={stepPhotos[i]}
 alt={`${s.title} — McCoy Landscape Group armour stone wall process`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 320px"
 />
 <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[14px] shadow-md">
 {i + 1}
 </span>
 </div>
 <div className="p-5 flex-1">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[16px] md:text-[17px] text-[var(--color-primary)] mb-2 leading-snug">
 {s.title}
 </h3>
 <p className="text-[13px] md:text-[14px] leading-[1.5] text-[var(--color-text)]">
 {s.body}
 </p>
 </div>
 </li>
 );
 })}
 </ol>

 <p className="mt-10 text-[14px] md:text-[15px] text-[var(--color-text-muted)] italic max-w-[720px]">
 Most armour stone walls take 1 to 3 weeks on-site once we start,
 depending on size and access. Peak season books 6 to 12 weeks ahead,
 call early.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Goes Into an{" "}
 <em className="italic font-light">Armour Stone Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every wall is scoped to the slope, the length and height, the stone
 size, and site access. There is no flat per foot quoting that misses the
 real story. Access for large stone and machines is a big factor, so we
 assess it in person. We build the written estimate after the on-site
 visit, so the number you see is the number you pay. No surprises, no
 escalations.
 </p>
 </div>
 </div>
 </section>

 {/* Service Areas */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHERE WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Serving{" "}
 <em className="italic font-light">West GTA</em>
 </h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
 {serviceAreas.map((sa) => (
 <Link
 key={sa.name}
 href={sa.href}
 className="group relative block aspect-square rounded-2xl overflow-hidden shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)]"
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
 <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-accent)]">
 Service area details
 <span
 aria-hidden
 className="transition-transform group-hover:translate-x-1"
 >
 →
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>

 <p className="mt-6 text-[14px] text-[var(--color-text-muted)] italic">
 Plus surrounding suburbs.
 </p>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Armour Stone Wall FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA
 bgImage="/armour-stone-retaining-wall/end-twilight-fire-pit.png"
 bgAlt="A cozy twilight patio with a stone fire pit set above an armour stone wall in Oakville by McCoy Landscape Group"
 />
 <Footer />
 </>
 );
}
