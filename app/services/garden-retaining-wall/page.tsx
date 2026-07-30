import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Blocks,
 Waves,
 Square,
 Sprout,
 Droplets,
 Fence,
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
 title: "Garden Retaining Wall Oakville | Low Block & Planter Walls | McCoy Landscape Group",
 description:
 "Garden retaining walls in Oakville, Burlington, Mississauga & Milton. Low block walls, raised planters, curved beds. Techo-Bloc, Unilock, Permacon. Call (416) 985-9771.",
 alternates: { canonical: "/services/garden-retaining-wall" },
};

const gardenWallTypes = [
 {
 icon: Blocks,
 title: "Segmental block systems",
 body: "Techo-Bloc, Unilock, and Permacon units with built-in lips or pin alignment — engineered products, not landscape-store leftovers.",
 },
 {
 icon: Waves,
 title: "Curved and serpentine runs",
 body: "Split-face units taper so a bed edge can sweep in a true arc rather than a series of short straight facets.",
 },
 {
 icon: Sprout,
 title: "Raised planter beds",
 body: "Two or three courses of block that lift soil to a comfortable height for planting, herbs, or kitchen-garden use.",
 },
 {
 icon: Square,
 title: "Cap courses and seat walls",
 body: "Adhered cap units finish the top clean, shed water off the wall, and give a low run a usable sitting edge.",
 },
 {
 icon: Droplets,
 title: "Drainage on low walls too",
 body: "Clear stone and filter fabric behind every wall we build, including the 18-inch ones most crews backfill with dirt.",
 },
 {
 icon: Fence,
 title: "Tie-ins to steps and edging",
 body: "Walls terminated into stair treads, walkways, or steel edging so the run ends deliberately instead of trailing off.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Layout and Selection",
 items: [
 "Wall lines marked with paint and hose on site so you see the curve before we dig",
 "Block system, colour, texture, and cap profile chosen from full-size samples in your own light",
 "Retained height confirmed at each end — anything approaching 1 m gets flagged for engineering",
 "Bed shapes, planting depth, and soil volume worked out with the wall, not after it",
 ],
 },
 {
 heading: "Base and Build",
 items: [
 "Trench excavated and a compacted granular base set at least 150 mm deep beneath the first course",
 "Bottom course buried to roughly one block height below finished grade so the wall cannot kick out",
 "Units levelled individually, left to right and front to back, before the next course goes on",
 "Curves cut on site with a masonry saw so radius joints stay tight instead of wedging open",
 ],
 },
 {
 heading: "Drainage and Finish",
 items: [
 "Clear stone chimney placed directly behind the block and wrapped in non-woven filter fabric",
 "Native backfill compacted in lifts above the drainage zone, never dumped loose against the wall",
 "Caps adhered with flexible concrete adhesive rated for Ontario freeze-thaw cycling",
 "Beds filled with quality triple-mix, planted, mulched, and graded to drain away from the face",
 ],
 },
];

const whyMcCoyBullets = [
 "Drainage stone and filter fabric behind every wall — even the low ones nobody would check",
 "Full-size block samples on site so you choose colour in daylight against your own house",
 "Curves cut and fitted on the job, not approximated with wedge-shaped gaps",
 "25+ years of design-build across Oakville, Burlington, Mississauga, and Milton",
 "Owner-operated — Alex and Pieter set the layout lines on every garden wall",
 "3-year warranty on sink, level, and cracking, same as our largest hardscape builds",
];

const processSteps = [
 { title: "Free Consultation", body: "We walk the yard, look at the slope, and talk about what the beds need to do." },
 { title: "Layout on the Ground", body: "Lines painted, heights marked, and curves adjusted until you like the shape." },
 { title: "Samples and Quote", body: "Block, cap, and colour confirmed, with lineal footage priced in writing." },
 { title: "Excavate and Build", body: "Base compacted, courses set and levelled, drainage packed in behind." },
 { title: "Plant and Walk Through", body: "Beds filled, planted, mulched, and the finished run reviewed with you." },
];

const faqs = [
 {
 q: "How tall can a garden wall be before it needs engineering?",
 a: "Most decorative garden walls we build sit between 12 and 36 inches of exposed face, which is comfortably below the point where Ontario municipalities require a permit. The usual trigger in Oakville, Burlington, and Milton is 1 m of exposed height, and anything with a driveway, pool, or slope loading above it can trigger review sooner. If your grade needs more, an armour stone or engineered block wall is the right answer.",
 },
 {
 q: "Do low walls really need drainage behind them?",
 a: "Yes, and skipping it is the single most common reason garden walls lean. Much of Halton sits on heavy clay that holds water instead of shedding it. When that water freezes behind a wall it expands and pushes the block outward, a little more each winter. A narrow clear stone chimney with filter fabric costs very little at build time and is the difference between five years and thirty.",
 },
 {
 q: "Which block brand do you use?",
 a: "We build with Techo-Bloc, Unilock, and Permacon, all three of which make garden wall lines with proper alignment lips or pins and consistent colour batching. Which one we recommend depends on the texture and palette you want and what coordinates with existing paving on the property. We bring physical samples rather than asking you to choose from a brochure.",
 },
 {
 q: "Can you build a curved wall, or only straight runs?",
 a: "Curves are one of the nicest things you can do with segmental block. The units are tapered front to back, so they naturally close up on a radius. We lay the arc out with a hose on the ground first, adjust it until it reads right from your kitchen window and your driveway, then build to that line. Tight inside radii get saw-cut units to keep the joints closed.",
 },
 {
 q: "How long does a garden wall take to build?",
 a: "A straightforward 20 to 30 lineal foot planter wall is typically two to three days including excavation, base, drainage, block, caps, and soil. Longer runs, multiple terraces, or walls tying into steps add time. Spring and summer install slots generally book six to twelve weeks out, so it is worth calling well ahead of when you want the beds planted.",
 },
 {
 q: "Will the wall shift over an Ontario winter?",
 a: "Not if it is built on a compacted granular base with the bottom course buried and drainage behind it. Those three things handle freeze-thaw movement on a low wall. What does shift are walls set on bare soil, backfilled with clay, and started at grade — which describes most of the leaning garden walls we get called out to replace. Ours carry a 3-year warranty on sink, level, and cracking.",
 },
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

export default function GardenRetainingWallPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/garden-retaining-wall`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Garden Retaining Wall",
 description:
 "Low segmental block garden walls, raised planters, and terraced beds across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Garden Wall Construction", "Segmental Block Wall", "Raised Planter Bed", "Bed Terracing", "Seat Wall"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Garden Retaining Wall", item: URL },
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
 <Nav />

 <PageHero
 eyebrow="GARDEN RETAINING WALL"
 title="Low Walls That Shape"
 subtitle="the Whole Garden"
 opening={
 <>
 Raised planters, terraced beds, and curved block walls across
 Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation —
 Techo-Bloc, Unilock, and Permacon systems, drained properly behind
 the face even at 18 inches tall.
 </>
 }
 imageSrc="/images/04-card-retaining-walls.jpg"
 imageAlt="Low segmental block garden retaining wall terracing a planted bed on a McCoy Landscape Group property"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DECORATIVE, BUT STRUCTURAL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Knee-High Is Still{" "}
 <em className="italic font-light">a Real Piece of Construction</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 The wall that edges a front bed or lifts a herb garden to working
 height is the one most crews treat as trim — laid on bare soil,
 packed behind with clay, started right at grade. It leans by the
 fifth winter. We build the small runs to the same standard as the
 big ones, because the ground does not know the difference.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Garden Wall Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Planters, Terraces, Seat Walls — Under Three Feet
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 A garden wall is doing two jobs at once — holding a modest amount of
 soil, and drawing the line that tells the eye where the garden
 begins. Both jobs deserve a real base and real drainage.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {gardenWallTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/softscape-hero.jpg"
 alt="Curved low block garden wall edging a freshly planted and mulched bed on a McCoy Landscape Group property"
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
 A RECENT MCCOY BUILD · MISSISSAUGA
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 A serpentine planter run, saw-cut on the radius and capped, then
 filled and planted the same week.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">THE PART NOBODY CHECKS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 Four Small Decisions That Keep a Low Wall{" "}
 <em className="italic font-light text-[var(--color-accent)]">Plumb</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "A full block height buried below grade so the bottom course cannot kick forward",
 "A narrow clear-stone chimney and filter fabric even on an eighteen-inch run",
 "Radius units saw-cut on site so curve joints close instead of wedging open",
 "Caps bedded in flexible freeze-thaw adhesive, never rigid construction glue",
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
 What&apos;s Included{" "}
 <em className="italic font-light">in Every Garden Wall</em>
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
 Small Walls Built to{" "}
 <em className="italic font-light">Big Wall Standards</em>
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
 From Painted Line to{" "}
 <em className="italic font-light">Planted Bed</em>
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
 alt={`${s.title} — McCoy Landscape Group garden wall process`}
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
 A single planter run is often two to three days. Multiple terraces or
 tie-ins to steps add time, and spring slots book well ahead.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Sets the Price of{" "}
 <em className="italic font-light">a Garden Wall</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Garden walls are quoted by lineal foot, and the course count, the
 amount of curve, and the number of corners and terminations do most
 of the work on that figure. Block line and cap profile move the
 material side. Soil volume, planting, and any tie-in to steps or
 edging round it out. You get the whole thing in writing after the
 free on-site consultation.
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
 Shaping Gardens Across{" "}
 <em className="italic font-light">the West GTA</em>
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
 headingMain="Garden Wall FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 <JsonLd data={serviceLd} />
 <JsonLd data={breadcrumbLd} />
 <JsonLd data={faqLd} />

 </>
 );
}
