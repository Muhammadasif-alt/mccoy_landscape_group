import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Blocks,
 Brush,
 Warehouse,
 Anchor,
 Boxes,
 Award,
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
 title: "Masonry & Natural Stone Oakville | Veneer, Pillars & Caps | McCoy Landscape Group",
 description:
 "Stone masonry in Oakville, Burlington, Mississauga & Milton. Stone veneer, mortared stonework, pillars, caps and coping, chimney and column work. Call (416) 985-9771.",
 alternates: { canonical: "/services/masonry-and-natural-stone" },
};

const masonryTypes = [
 {
 icon: Brush,
 title: "Stone veneer",
 body: "Full-bed or thin veneer scratch-coated and mortared onto block, poured walls, and house facades with proper drainage plane behind.",
 },
 {
 icon: Blocks,
 title: "Mortared stonework",
 body: "Solid coursed or random-rubble walls laid stone by stone in freeze-thaw-rated mortar — real masonry, not stacked block with a face.",
 },
 {
 icon: Warehouse,
 title: "Pillars & columns",
 body: "Entrance pillars, gate posts, and pergola columns built around a reinforced core and footing carried below frost.",
 },
 {
 icon: Boxes,
 title: "Caps & coping",
 body: "Full-slab granite, limestone, and bluestone caps cut with drip edges so water sheds clear instead of tracking down the face.",
 },
 {
 icon: Anchor,
 title: "Chimney & fireplace masonry",
 body: "Outdoor chimney stacks, fireboxes, hearths, and flue surrounds built with refractory materials rated for direct heat.",
 },
 {
 icon: Award,
 title: "Stone facing on steps & walls",
 body: "Existing concrete steps, porches, and retaining structures faced in stone to tie the whole property back to the house.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Sourcing & Spec",
 items: [
 "Stone selected from Ontario quarries — Wiarton limestone, Credit Valley sandstone, Muskoka granite",
 "Full-bed versus thin veneer specified against the structure you already have",
 "Mortar mix and colour chosen for the substrate and freeze-thaw exposure",
 "Cap and coping profiles drawn before anything is ordered",
 ],
 },
 {
 heading: "Structure & Substrate",
 items: [
 "Footings poured below the 4-foot Ontario frost line for freestanding masonry",
 "Block or poured cores tied with rebar and grouted solid where load demands it",
 "Weather-resistive barrier, lath, and scratch coat behind veneer on framed walls",
 "Weeps and flashing detailed so water that gets in has a route back out",
 ],
 },
 {
 heading: "Craft & Handover",
 items: [
 "Stones sorted and dry-laid on the ground before they touch mortar",
 "Joints struck, raked, or flush-pointed to the profile you approved",
 "Mortar smears cleaned off the face while green — no acid burn on the finished stone",
 "3-year hardscape warranty covering sink, level, and cracking",
 ],
 },
];

const whyMcCoyBullets = [
 "Masons on staff, not subcontracted — the same hands from footing to final joint",
 "Operating since 2001 with 25+ years of stonework behind us in the West GTA",
 "Alex and Pieter are on the tools for every major masonry build",
 "Type N and Type S mortars mixed to spec for our freeze-thaw climate",
 "Quarry relationships that let us match or extend stone on older properties",
 "Design-build under one roof — masonry, hardscape, lighting, and grading coordinated",
];

const processSteps = [
 { title: "Free On-Site Consult", body: "We assess the structure, substrate, and how the stone should relate to the house." },
 { title: "Stone & Mortar Selection", body: "Quarry samples, mortar colours, joint profiles, and cap options compared on site." },
 { title: "Scope & Written Estimate", body: "Square footage of face, linear footage of cap, footing depth, and structure detailed." },
 { title: "Footings & Substrate", body: "Excavate, pour, cure, then build the core or prep the wall to take veneer." },
 { title: "Set Stone & Point", body: "Stone laid, joints pointed, faces cleaned, caps set, warranty handed over." },
];

const faqs = [
 {
 q: "What is the difference between full-bed and thin stone veneer?",
 a: "Full-bed veneer is 3-5 inches thick, weighs enough to need its own ledge or footing, and reads as solid masonry because the returns and corners are real stone. Thin veneer is roughly an inch, sticks to a scratch coat, and needs no structural support. Thin veneer is the right call on framed walls and existing facades; full-bed suits pillars, wall caps, and anywhere you see a corner.",
 },
 {
 q: "Where does your stone actually come from?",
 a: "Mostly Ontario. Wiarton and Owen Sound limestone from the Bruce Peninsula, Credit Valley sandstone out of the escarpment, and Muskoka granite from the Canadian Shield. Local stone is quarried in the same climate it has to survive, it travels a few hours instead of an ocean, and we can usually get more of the same seam years later if you extend the project.",
 },
 {
 q: "Why does mortar crack, and how do you prevent it?",
 a: "Two causes dominate here. Movement underneath, when a footing sits above the frost line and heaves every winter. And the wrong mortar, when a hard Type S mix is used against soft stone that needs a more forgiving Type N. We pour footings past four feet, tie cores with rebar, and match the mortar to the stone rather than defaulting to whatever is on the truck.",
 },
 {
 q: "Can you repair or extend existing stonework on my house?",
 a: "Yes, and it is a regular request on older Oakville and Burlington homes. We repoint failed joints, rebuild leaning pillars, replace spalled stones, and match new stone to weathered original as closely as the quarry allows. Perfect matching is rarely possible on stone that has aged 40 years, so we usually blend new material into a full elevation rather than patching one obvious square.",
 },
 {
 q: "Do stone caps really need a drip edge?",
 a: "They do. A cap without a drip kerf lets water wick back underneath and run down the face of the wall, which stains the stone and eventually works into the joints. We cut caps with an overhang and a groove on the underside so water breaks and falls clear. It is a small detail on the invoice and the single biggest reason some walls look clean at year ten and others do not.",
 },
 {
 q: "How long does a masonry project take?",
 a: "A pair of entrance pillars with caps runs about a week including the footing pour and cure. A full veneer elevation or an outdoor fireplace is typically two to four weeks. Masonry is weather-dependent — we do not lay mortar below about 5 degrees without heat and hoarding, so late-fall work sometimes shifts to spring. Book 6-12 weeks ahead, or 12-16 for large scopes.",
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

export default function MasonryAndNaturalStonePage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/masonry-and-natural-stone`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Masonry and Natural Stone",
 description:
 "Stone veneer, mortared stonework, pillars, caps and coping, chimney and column masonry across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Stone Masonry", "Stone Veneer", "Stone Pillars", "Caps and Coping", "Chimney Masonry"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Masonry and Natural Stone", item: URL },
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
 eyebrow="MASONRY AND NATURAL STONE"
 title="Real Masonry, Laid"
 subtitle="One Stone at a Time"
 opening={
 <>
 Stone veneer, mortared walls, pillars, caps, coping, and chimney work
 across Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to book a free on-site consult — masons on
 staff, Ontario quarry stone, and a 3-year hardscape warranty on every build.
 </>
 }
 imageSrc="/images/09-showcase-signature-build.jpg"
 imageAlt="Signature McCoy Landscape Group masonry build with mortared natural stone pillars and cut stone caps in Oakville"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE OLDEST TRADE ON SITE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Mortar Is a Material —{" "}
 <em className="italic font-light">Not a Glue</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 A stone face can be bonded on in a week by anyone with a trowel. What
 separates masonry from cladding is what happens behind it: the
 footing depth, the reinforced core, the drainage plane, and a mortar
 chosen for the hardness of the stone it has to live against for the
 next several decades.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Masonry Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE BUILD IN STONE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Veneer, Pillars, Caps, Chimneys — Full Stone Craft
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Masonry is the trade that ties a property together. It&apos;s what
 turns a retaining wall into architecture and a driveway entrance into
 an address. We keep masons on staff so the craft never leaves the
 building.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {masonryTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/04-card-retaining-walls.jpg"
 alt="Mortared natural stone wall with cut stone coping built in Oakville by McCoy Landscape Group"
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
 A RECENT MCCOY BUILD · BURLINGTON
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Full-bed limestone over a reinforced core, coping cut with a drip
 edge, joints struck by hand.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">WHERE MASONRY FAILS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Details That Decide Whether Stonework{" "}
 <em className="italic font-light text-[var(--color-accent)]">Holds</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Footings carried past four feet so no column rides a heaving winter subgrade",
 "Type N against soft stone, Type S against dense — mortar matched, never defaulted",
 "Lath, scratch coat, weeps, and flashing so water behind veneer has a route out",
 "Faces washed while the mortar is still green — no acid burn to fake a clean joint",
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
 <em className="italic font-light">in Every Masonry Build</em>
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
 Masons on Staff Since 2001{" "}
 <em className="italic font-light">Never Subcontracted</em>
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
 From Footing Pour to{" "}
 <em className="italic font-light">Final Pointed Joint</em>
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
 alt={`${s.title} — McCoy Landscape Group masonry process`}
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
 Masonry timelines depend on footing cure time, face area, and the
 weather — mortar does not go down below roughly 5 degrees without heat
 and hoarding.
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
 <em className="italic font-light">Real Stonework</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Masonry is priced by face area, the amount of structure hidden behind
 that face, and the labour the stone itself demands. Full-bed stone
 with real returned corners costs more to buy and far more to lay than
 thin veneer. Footing depth, core reinforcing, cap fabrication, joint
 profile, and site access all shift the figure. Every scope is quoted
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
 headingMain="Masonry FAQs"
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
