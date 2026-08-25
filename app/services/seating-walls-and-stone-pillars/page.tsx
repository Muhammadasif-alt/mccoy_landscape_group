import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Armchair,
 Flame,
 Blocks,
 Lightbulb,
 Fence,
 Sprout,
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
 title: "Seating Walls & Stone Pillars Oakville | Fire Seating & Columns | McCoy Landscape Group",
 description:
 "Custom seating wall & stone pillar installation in Oakville, Burlington, Mississauga & Milton. 3-year warranty on shifting, settling & cracking. Call (416) 985-9771.",
 alternates: { canonical: "/services/seating-walls-and-stone-pillars" },
};

const seatingWallTypes = [
 {
 icon: Armchair,
 title: "Patio seating walls",
 body: "Built-in seating that frames patios and adds function without furniture.",
 },
 {
 icon: Flame,
 title: "Fire feature seating",
 body: "Curved seating walls wrapped around fire pits and fireplaces.",
 },
 {
 icon: Blocks,
 title: "Entry stone pillars",
 body: "Pillars that anchor driveways, walkways, and front entries.",
 },
 {
 icon: Lightbulb,
 title: "Lighting columns",
 body: "Stone columns built to hold low-voltage lights and post caps.",
 },
 {
 icon: Fence,
 title: "Privacy and divider walls",
 body: "Low stone walls that define zones and add structure to open yards.",
 },
 {
 icon: Sprout,
 title: "Planter and raised bed walls",
 body: "Stone walls that double as garden beds and seating edges.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Base Work",
 items: [
 "Demolition and removal of old walls or features",
 "Excavation to the right depth for Ontario freeze and thaw",
 "Compacted aggregate base built in lifts",
 "Footings sized for the weight of the wall or pillar",
 ],
 },
 {
 heading: "Materials & Installation",
 items: [
 "Natural stone and manufactured block matched to your design",
 "Techo-Bloc, Unilock, and Permacon products where they fit the scope",
 "Reinforced cores for pillars and taller walls",
 "Walls, pillars, caps, and lighting built as one scope",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Post-install cleanup and wash-down",
 "Care and maintenance guide at handoff",
 "3-year warranty activation",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ hardscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated. Alex and Pieter on every major build",
 "Techo-Bloc, Unilock, and Permacon premium supplier options",
 "Footings and base depths built for Ontario freeze and thaw, not shortcut",
 "Clean crews, respectful job sites, daily communication",
 "3-year warranty covering shifting, settling, and cracking",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your goals, space, and timeline." },
 { title: "On-Site Consultation", body: "We walk the property, measure, and assess drainage and access." },
 { title: "Design & Detailed Estimate", body: "Layout, stone selection, and investment in writing." },
 { title: "Build & Daily Cleanup", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough & 3-Year Warranty", body: "Confirm every detail, hand off care tips." },
];

const faqs = [
 {
 q: "How much does a seating wall cost in Oakville or Burlington?",
 a: "The price depends on length, height, stone selection, and features like lighting or a fire pit. A short accent wall and a full curved fire seating wall sit at very different price points. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "Can you build a seating wall around a fire pit?",
 a: "Yes. Curved seating walls around a fire feature are one of our most popular builds. We plan the seating, the fire pit, and the patio together so it all works as one space with one warranty.",
 },
 {
 q: "Do stone pillars need special footings?",
 a: "Yes. Pillars carry a lot of weight and often hold lights or post caps, so they need proper footings and reinforced cores. We build them to stay plumb and solid through Ontario freeze and thaw.",
 },
 {
 q: "Can you add lighting to seating walls and pillars?",
 a: "Yes. We build in low-voltage lighting during the install. Lit walls and pillar caps make the space usable at night and add a high-end look. We handle the wiring as part of the scope.",
 },
 {
 q: "Will a seating wall crack or lean over time?",
 a: "Not when it is built right. A compacted base, proper footings, and drainage keep the wall stable through freeze and thaw. That is why our 3-year warranty covers shifting and settling.",
 },
 {
 q: "How long does it take to build a seating wall or pillars?",
 a: "Most builds take a few days to 2 weeks on-site, depending on size and features. Peak season books 6 to 12 weeks ahead, so reach out early.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium seating wall installs",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville stone seating wall by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Custom pillars and fire seating",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington stone pillars and fire seating wall by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service stone features",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga stone features by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Custom stone design-build",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton custom stone design-build by McCoy Landscape Group",
 href: "/service-areas/milton",
 },
];

export default function SeatingWallsAndStonePillarsPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/seating-walls-and-stone-pillars`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Seating Walls and Stone Pillars",
 description:
 "Custom seating wall and stone pillar installation — patio seating, fire feature seating, entry pillars, lighting columns, and divider walls across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Seating Walls", "Stone Pillars", "Fire Feature Seating", "Lighting Columns", "Divider Walls"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Seating Walls and Stone Pillars", item: URL },
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
 eyebrow="SEATING WALLS & STONE PILLARS"
 title="Seating Walls and Stone Pillars Built to Last"
 subtitle="in Oakville"
 opening={
 <>
 Custom seating wall and stone pillar installation in Oakville,
 Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. Every
 wall we build is backed by our 3-year warranty covering shifting,
 settling, and cracking.
 </>
 }
 imageSrc="/seating-walls-and-stone-pillars/Hero.png"
 imageAlt="Curved natural stone seating wall with fire feature and matching stone pillars on an Oakville property built by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN-BUILD FEATURES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Seating and Structure That Frame{" "}
 <em className="italic font-light">Your Yard</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 A patio is just a flat surface until you give it walls, seating, and
 structure. Seating walls turn open space into a room you actually use.
 Stone pillars anchor entries, hold lighting, and frame the whole
 design. But these features carry real weight, so they only stay solid
 when they sit on proper footings.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy builds seating walls and stone pillars that hold their shape for
 decades. We plan them around how you host and move through the space,
 then build each one on a compacted base with the right footings.
 Seating walls, pillars, columns, and accent features all get built to
 handle Ontario freeze and thaw.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Seating Wall Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Custom Seating Wall and Pillar Configurations
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 No two McCoy features are identical. Here are the seating walls and
 pillars we build most often across Oakville, Burlington, Mississauga,
 and Milton homes.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {seatingWallTypes.map(({ icon: Icon, title, body }) => (
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
 src="/seating-walls-and-stone-pillars/canter.png"
 alt="Curved stone seating wall with integrated fire feature and matching pillars in Oakville by McCoy Landscape Group"
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
 Curved stone seating wall, integrated fire feature, and matching
 pillars, built in a single scope.
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
 The Details That Turn a Wall{" "}
 <em className="italic font-light text-[var(--color-accent)]">Into a Feature</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Integrated low-voltage lighting built into walls and pillars",
 "Custom stone caps, banded accents, and pattern layouts",
 "Fire pits, planters, and pergola posts tied into the wall",
 "Engineered footings and drainage that keep walls level",
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
 Every McCoy Seating Wall and Pillar Build{" "}
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
 <em className="italic font-light">McCoy for Seating Walls and Pillars</em>
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
 <em className="italic font-light">Seating Wall and Pillar Process</em>
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
 alt={`${s.title} — McCoy Landscape Group seating wall and pillar process`}
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
 Most seating wall and pillar builds take a few days to 2 weeks on-site
 once we start. Peak season books 6 to 12 weeks ahead, call early.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Goes Into a{" "}
 <em className="italic font-light">Seating Wall Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every wall and pillar is scoped to length, height, stone selection, and
 features like lighting or fire integration. There is no flat per foot
 quoting that misses the real story. We build the written estimate after
 the on-site visit, so the number you see is the number you pay. No
 surprises, no escalations.
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
 headingMain="Seating Wall and Pillar FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA
 bgImage="/seating-walls-and-stone-pillars/end.png"
 bgAlt="A curved stone seating wall glowing at twilight in Oakville by McCoy Landscape Group"
 />
 <Footer />
 </>
 );
}
