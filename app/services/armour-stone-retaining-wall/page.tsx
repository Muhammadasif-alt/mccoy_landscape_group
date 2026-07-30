import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Mountain,
 Truck,
 Layers,
 Droplets,
 PencilRuler,
 Gem,
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
 title: "Armour Stone Retaining Wall Oakville | Quarried Block Walls | McCoy Landscape Group",
 description:
 "Armour stone retaining walls in Oakville, Burlington, Mississauga & Milton. Quarried limestone and granite set by excavator, drained and battered. Call (416) 985-9771.",
 alternates: { canonical: "/services/armour-stone-retaining-wall" },
};

const armourStoneTypes = [
 {
 icon: Mountain,
 title: "Quarried limestone blocks",
 body: "Ontario limestone in 1,000 to 6,000 lb pieces, each one weathered, unrepeatable, and heavy enough to hold grade on mass alone.",
 },
 {
 icon: Gem,
 title: "Guillotine-cut versus natural split",
 body: "Guillotine faces give a crisp linear wall; natural-split faces read rugged and quarry-raw. We show samples before ordering.",
 },
 {
 icon: Layers,
 title: "Terraced slope systems",
 body: "Steep grades broken into two or three shorter benches with planted shelves between, instead of one intimidating monolith.",
 },
 {
 icon: Droplets,
 title: "Drainage behind the wall",
 body: "Clear stone chimney, filter fabric, and perforated weeping tile daylighted so hydrostatic pressure never builds behind the face.",
 },
 {
 icon: PencilRuler,
 title: "Engineered wall design",
 body: "Stamped drawings from a licensed engineer when the exposed height passes 1 m or a surcharge sits above the wall.",
 },
 {
 icon: Truck,
 title: "Tight-lot machine access",
 body: "Compact excavators, ground protection, and staged deliveries so we can build on narrow Oakville side yards without wrecking them.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Survey and Design",
 items: [
 "Existing grades shot and the retained height measured at every point along the run",
 "Soil and surcharge assessed — driveways, pools, or structures above the wall change the whole design",
 "Stone selected by face type, colour range, and course height, with samples reviewed on site",
 "Engineered stamped drawings arranged where the exposed face exceeds 1 m, plus permit coordination with Halton or Peel",
 ],
 },
 {
 heading: "Base and Drainage",
 items: [
 "Trench excavated below frost-affected soil and cut level across the full length of the wall",
 "Compacted granular base at least 300 mm deep, wider than the base stone, verified with a plate compactor",
 "Perforated weeping tile bedded in clear stone at the heel and run to a daylight outlet or catch basin",
 "Non-woven geotextile separating drainage stone from native clay so fines never migrate in and clog it",
 ],
 },
 {
 heading: "Setting the Stone",
 items: [
 "First course buried so at least a third of the base block sits below finished grade",
 "Each block placed by excavator with thumb attachment, seated on shim stone, and levelled front to back",
 "Consistent batter set course by course — each stone stepped back into the slope rather than stacked plumb",
 "Backfill placed and compacted in lifts as the wall rises, then capped, topsoiled, and graded to shed water away",
 ],
 },
];

const whyMcCoyBullets = [
 "25+ years setting heavy stone across Halton and Peel — walls we built in 2005 have not moved",
 "In-house excavator operators — no subcontracted machine crew guessing at your grades",
 "Owner-operated: Alex and Pieter place the feature stones themselves on major walls",
 "We handle the engineer and the municipal permit file when your wall clears the 1 m threshold",
 "Drainage detailed before the first block lands — the part nobody sees is the part that lasts",
 "3-year warranty covering sink, level, and cracking on every hardscape install",
];

const processSteps = [
 { title: "Site Visit and Grades", body: "We walk the slope, measure retained height, and check machine access." },
 { title: "Stone Selection", body: "Face type, block size, and colour picked from quarry samples with you." },
 { title: "Engineering and Permits", body: "Stamped drawings and municipal approval arranged for walls over 1 m." },
 { title: "Excavate, Drain, Set", body: "Trench cut, tile laid, blocks placed and battered course by course." },
 { title: "Backfill and Restore", body: "Compacted lifts, topsoil, grading, and the site left clean." },
];

const faqs = [
 {
 q: "Do I need a permit for an armour stone wall in Oakville?",
 a: "Generally, walls with more than 1 m of exposed height need a building permit in Ontario, and Halton municipalities including Oakville, Burlington, and Milton apply that threshold. Anything supporting a driveway, pool deck, or structure gets scrutiny even below that height. We measure the exposed face, tell you honestly whether you are over the line, and handle the engineer and the application when you are.",
 },
 {
 q: "How big are the stones and how do you move them?",
 a: "Typical residential armour stone runs roughly 1,000 to 6,000 lb per piece, usually 2 to 3 ft high by 3 to 6 ft long. Nothing gets moved by hand. We set every block with an excavator fitted with a hydraulic thumb, which is also what lets us rotate a stone repeatedly until its best face is pointing out at the right batter.",
 },
 {
 q: "Can you get machinery into my backyard?",
 a: "Usually. Compact excavators fit through gate openings around 1.2 m, and we lay plywood or ground mats over lawn and existing hardscape to spread the load. On truly landlocked lots we stage stone at the front, walk it back in smaller pieces, or bring in a crane truck for a lift-over. We confirm access at the site visit, before you get a number.",
 },
 {
 q: "Guillotine-cut or natural split — which should I choose?",
 a: "Guillotine-cut stone has a flat mechanically split face and squared ends, so the courses line up tight and the wall reads architectural. Natural-split stone keeps the irregular quarry face, gives deeper shadow lines, and suits ravine lots and naturalized settings. Cut stone costs a little more per lineal foot because it stacks faster and truer. We bring samples so you can see both against your house.",
 },
 {
 q: "Why does the wall need to lean back?",
 a: "That backward step is called batter, and it is what turns a stack of rock into a retaining structure. Each course sets back roughly 25 to 50 mm so the weight of the wall leans into the slope instead of away from it. Combined with a buried base course and drainage stone at the heel, batter is why a gravity wall resists soil pressure and freeze-thaw movement without anchors.",
 },
 {
 q: "How does armour stone compare to a block wall on cost?",
 a: "Armour stone typically runs higher per lineal foot than a segmental block system at the same height because of material weight, freight, and machine time. Where it pays back is at height and permanence — a single 3 ft armour stone course does the work of many block courses, needs no adhesive or pins, and never fades. On low decorative walls under 3 ft, segmental block is often the smarter spend.",
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

export default function ArmourStoneRetainingWallPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/armour-stone-retaining-wall`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Armour Stone Retaining Wall",
 description:
 "Quarried armour stone retaining walls, terracing, and slope stabilization across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Armour Stone Wall", "Retaining Wall Construction", "Slope Terracing", "Grade Retention", "Natural Stone Wall"],
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
 <Nav />

 <PageHero
 eyebrow="ARMOUR STONE RETAINING WALL"
 title="Quarried Stone That"
 subtitle="Holds the Hillside"
 opening={
 <>
 Armour stone walls, terracing, and slope stabilization across
 Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to walk your grade with us — blocks
 up to three tons set by excavator, drained properly behind the face,
 and backed by our 3-year hardscape warranty.
 </>
 }
 imageSrc="/images/07-showcase-retaining-hillside.jpg"
 imageAlt="Terraced armour stone retaining wall holding a steep hillside grade on a McCoy Landscape Group build"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">QUARRIED MONOLITHS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Held by Its Own Weight —{" "}
 <em className="italic font-light">No Pins, No Adhesive</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Manufactured systems borrow their strength from many small units
 locked together. Armour stone works the opposite way: single
 quarried monoliths, a ton or more apiece, resisting the slope on
 mass alone. Fewer pieces, a bigger machine, and a weathered face the
 quarry will never cut twice the same way.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Stone Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Heavy Stone, Set by Machine — Placed by Eye
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 An armour stone wall is a gravity structure. Its strength comes from
 mass, batter, and drainage — and its beauty comes from someone
 turning each block until the right face is showing.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {armourStoneTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/11-process-excavation.jpg"
 alt="Excavator cutting the base trench for an armour stone retaining wall on a McCoy Landscape Group site"
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
 A RECENT MCCOY BUILD · MILTON
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Base trench cut below frost and struck level the full run before
 the first three-ton block ever landed.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">BELOW THE FACE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Craft Nobody Photographs{" "}
 <em className="italic font-light text-[var(--color-accent)]">Once the Wall Is Up</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Base course buried a third of its height so the toe can never walk forward",
 "Shim stone tucked and re-checked under each block before the thumb releases it",
 "Every stone rotated on the machine until its weathered face reads with its neighbours",
 "Lift-by-lift compaction as the courses rise, never one loose backfill at the end",
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
 <em className="italic font-light">in an Armour Stone Build</em>
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
 Two Decades of{" "}
 <em className="italic font-light">Moving Serious Rock</em>
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
 From Raw Slope to{" "}
 <em className="italic font-light">Finished Terrace</em>
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
 alt={`${s.title} — McCoy Landscape Group armour stone process`}
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
 Schedules hinge on stone delivery, machine access, and whether an
 engineer and permit are in the file. Most residential runs are on site
 one to two weeks.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Drives the Cost of{" "}
 <em className="italic font-light">Armour Stone</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Freight and machine hours move an armour stone quote as much as the
 rock does. Quarry origin, face type, and block size set the delivered
 material cost. How far the excavator has to travel, what ground
 protection the lot needs, where the spoil goes, and whether the
 exposed face triggers an engineer and a permit account for the rest.
 We put the full number in writing after we walk the grade with you.
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
 Setting Stone Across{" "}
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
 headingMain="Armour Stone FAQs"
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
