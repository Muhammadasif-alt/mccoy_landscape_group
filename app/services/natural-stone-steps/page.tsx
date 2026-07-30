import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowUpDown,
 Square,
 Truck,
 Lightbulb,
 PencilRuler,
 Home,
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
 title: "Natural Stone Steps Oakville | Solid Granite & Limestone Treads | McCoy Landscape Group",
 description:
 "Solid slab stone steps in Oakville, Burlington, Mississauga & Milton. Granite, limestone and sandstone treads set to code on engineered base. Call (416) 985-9771.",
 alternates: { canonical: "/services/natural-stone-steps" },
};

const stoneStepTypes = [
 {
 icon: Square,
 title: "Monolithic slab treads",
 body: "One solid piece per step — no joints to open, nothing to shift apart, and a single clean shadow line front to back.",
 },
 {
 icon: ArrowUpDown,
 title: "Built-up stone risers",
 body: "Coursed stone risers under a separate cap tread, used where the rise is tall or the run has to change width.",
 },
 {
 icon: Home,
 title: "Front entrance steps",
 body: "Granite or limestone treads carried from the driveway to the door, sized to meet the threshold without an awkward last step.",
 },
 {
 icon: PencilRuler,
 title: "Grade-change garden steps",
 body: "Informal slab runs through sloped yards, set into the grade so the landscape climbs instead of stopping at a wall.",
 },
 {
 icon: Truck,
 title: "Machine-set heavy treads",
 body: "Slabs from 400 to 800 pounds placed with excavator, clamp, or crane — precision setting no crew does by hand.",
 },
 {
 icon: Lightbulb,
 title: "Integrated step lighting",
 body: "Conduit and recessed riser fixtures cored before the slabs land, so every tread is lit with no surface wiring.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Layout & Code",
 items: [
 "Total rise measured, then divided into equal risers around the 7-inch Ontario target",
 "Tread depth held at 11 inches or more so a full adult foot lands on the stone",
 "Riser heights kept within 5 mm of each other across the flight",
 "Landings sized where a run exceeds the allowable number of risers",
 ],
 },
 {
 heading: "Foundation",
 items: [
 "Excavation to 12-18 inches, deeper where clay subgrade holds water",
 "Geotextile, then 3/4-inch clear stone compacted in 4-inch lifts under dry-set flights",
 "Concrete footing below the 4-foot frost line where steps attach to a porch or structure",
 "Perforated drain routed away from the flight so nothing freezes under the bottom tread",
 ],
 },
 {
 heading: "Setting & Finish",
 items: [
 "Slabs placed with an excavator and stone clamp, then shimmed and bedded to dead level",
 "Front-to-back pitch of about 1% built into each tread so water runs off, not back to the house",
 "Thermal or flamed top finish specified for grip in winter",
 "3-year hardscape warranty covering sink, level, and cracking",
 ],
 },
];

const whyMcCoyBullets = [
 "Excavator, stone clamp, and crew trained to set 800 lb treads without a chip",
 "Riser consistency measured across the flight, not eyeballed step by step",
 "Owner-operated — Alex and Pieter set the treads on every entrance flight",
 "Lighting conduit and drainage planned before the first slab is unloaded",
 "Granite, limestone, and sandstone sourced from Ontario quarries we buy from directly",
 "3-year hardscape warranty on sink, level, and cracking",
];

const processSteps = [
 { title: "Free On-Site Consult", body: "We shoot the total rise from finished grade to threshold and check access." },
 { title: "Riser Math & Layout", body: "Rise divided into equal steps, tread depth and landings drawn to code." },
 { title: "Written Estimate", body: "Slab material, sizes, foundation type, lighting, and machine access priced out." },
 { title: "Excavate & Found", body: "Dig, drain, compact base in lifts, or pour and cure the footing where required." },
 { title: "Set Treads & Light", body: "Slabs craned in, levelled, pitched, lights wired, and the flight walked with you." },
];

const faqs = [
 {
 q: "What rise and run does Ontario actually require?",
 a: "For exterior stairs serving a house, the Ontario Building Code allows risers roughly between 125 mm and 200 mm, and most people find about 7 inches the most comfortable. Run needs to be at least 235 mm, and we usually go 11-12 inches or more on landscape flights. The rule that matters most is uniformity — risers in a flight must be within 5 mm of each other, because your foot memorizes the first step.",
 },
 {
 q: "Do stone steps need a concrete footing?",
 a: "It depends where they land. A garden flight set into a slope does fine on 12-18 inches of compacted clear stone — it drains, it moves as one unit, and nothing cracks. Steps that attach to a porch, house, or poured landing get a concrete footing below the four-foot frost line, because if the steps heave and the structure does not, you get a growing gap at the top riser every winter.",
 },
 {
 q: "Solid slabs or stone-faced built-up risers?",
 a: "Solid slabs are the better build where access allows. One piece per step means no joints to open, no cap to work loose, and a heavier mass that resists frost movement. Built-up construction earns its place when the flight is tall, the run needs to change width, or a machine simply cannot reach the location — a backyard behind a finished house being the usual reason.",
 },
 {
 q: "How do you move an 800 lb slab into a finished backyard?",
 a: "Carefully, and with the route planned before we order stone. Most jobs use a mini excavator with a stone clamp or lifting straps. Where side access is too tight, we bring in a boom truck and fly the treads over the house. That changes the price, so we assess access at the consult rather than discovering the problem on delivery day.",
 },
 {
 q: "Are stone steps slippery in a Halton winter?",
 a: "Not if the finish is specified correctly. Thermal or flamed granite and limestone have a deliberately roughened surface with good slip resistance even when wet. Avoid honed or polished stone outdoors entirely. We also build about 1% of front-to-back pitch into each tread so meltwater sheds instead of sitting there and refreezing overnight.",
 },
 {
 q: "Can lighting be added to steps later?",
 a: "It can, but retrofitting means coring finished stone and chasing wire where there is no chase — messier and more expensive than doing it up front. Riser conduit costs very little to install while the flight is being built. We run it as standard on entrance steps even when a client is undecided, so the fixtures can go in whenever they want them.",
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

export default function NaturalStoneStepsPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/natural-stone-steps`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Natural Stone Steps",
 description:
 "Solid slab granite, limestone, and sandstone steps set to code on engineered base or frost footings across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Natural Stone Steps", "Granite Step Treads", "Limestone Steps", "Entrance Stairs", "Grade Change Stairs"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Natural Stone Steps", item: URL },
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
 eyebrow="NATURAL STONE STEPS"
 title="Solid Slab Treads"
 subtitle="Set Level and to Code"
 opening={
 <>
 Granite, limestone, and sandstone step treads built for entrances and grade
 changes across Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> and we&apos;ll shoot your total rise on site —
 equal risers, engineered base, and a 3-year hardscape warranty.
 </>
 }
 imageSrc="/images/06-card-landscape-lighting.jpg"
 imageAlt="Lit natural stone step treads set into a landscaped grade change on an Oakville property by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE ARITHMETIC FIRST</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Flight Is Measured Before It Is{" "}
 <em className="italic font-light">Ever Ordered</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Steps are the one piece of hardscape your body audits every day. Nobody
 admires a well-proportioned flight, but everybody notices a riser that
 is half an inch off. So the total rise gets shot, divided, and drawn on
 paper long before a single slab is loaded onto a truck.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Step Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE SET</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Entrance Flights, Garden Runs, Grade Changes — In Solid Stone
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 From a two-riser threshold at the front door to a long garden run
 climbing a slope, these are the step builds McCoy sets across Oakville,
 Burlington, Mississauga, and Milton.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {stoneStepTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/08-showcase-lighting-dramatic.jpg"
 alt="Granite step treads with recessed riser lighting on an Oakville entrance flight by McCoy Landscape Group"
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
 Solid granite treads to the threshold, equal risers throughout,
 riser lighting cored before the slabs landed.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">WHAT YOUR FEET NOTICE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Millimetres That Separate a Safe Flight From a{" "}
 <em className="italic font-light text-[var(--color-accent)]">Trip Hazard</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Total rise shot from finished grade to threshold, then divided into equal risers",
 "Riser heights held within 5 mm across the flight — the foot memorizes the first step",
 "About 1% front-to-back pitch per tread so meltwater sheds instead of refreezing",
 "Thermal or flamed tops specified for grip; honed and polished stone never goes outside",
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
 <em className="italic font-light">in Every Stone Flight</em>
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
 The Riser Math Comes{" "}
 <em className="italic font-light">Before the Stone Order</em>
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
 From Total Rise to{" "}
 <em className="italic font-light">the Last Tread Set</em>
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
 alt={`${s.title} — McCoy Landscape Group natural stone step process`}
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
 Step timelines depend on the number of risers, whether a footing has to
 be poured and cured, and how the slabs reach the location. Most flights
 are a few days on site.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Sets the Price of a{" "}
 <em className="italic font-light">Stone Flight</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Steps are priced by the number of risers, the size and species of slab,
 and above all by how the stone reaches its position. A flight a mini
 excavator can drive to costs one thing; the same flight behind a
 finished house, flown over the roof by boom truck, costs another.
 Foundation type, landings, and riser lighting all factor in. We quote
 in writing after the on-site assessment.
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
 Serving West GTA&apos;s{" "}
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
 headingMain="Stone Step FAQs"
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
