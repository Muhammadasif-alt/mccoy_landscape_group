import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Fence,
 Blocks,
 Flame,
 Wrench,
 Lightbulb,
 LayoutGrid,
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
 title: "Seating Walls & Stone Pillars Oakville | Built-In Patio Seating | McCoy Landscape Group",
 description:
 "Seating walls and stone pillars in Oakville, Burlington, Mississauga & Milton. Built-in patio seating, entrance columns, pier caps, frost footings. Call (416) 985-9771.",
 alternates: { canonical: "/services/seating-walls-and-stone-pillars" },
};

const seatingWallTypes = [
 {
 icon: Fence,
 title: "Freestanding seating walls",
 body: "Double-sided walls finished on both faces at 18-20 inches high — permanent seating that never has to be stacked away in October.",
 },
 {
 icon: Flame,
 title: "Fire pit surrounds",
 body: "Curved seating wrapped at a comfortable arm's reach from the fire, sized so nobody is roasting or shivering.",
 },
 {
 icon: LayoutGrid,
 title: "Patio edge definition",
 body: "Low walls that draw the boundary between dining zone, lawn, and garden without closing the space in.",
 },
 {
 icon: Blocks,
 title: "Entrance & corner pillars",
 body: "Squared columns anchoring driveway entrances, stair landings, and wall terminations — the vertical punctuation a flat yard lacks.",
 },
 {
 icon: Wrench,
 title: "Pier caps & coping",
 body: "Cut stone or manufactured caps with a proper overhang and drip so water sheds clear of the pillar face.",
 },
 {
 icon: Lightbulb,
 title: "Lighting & post integration",
 body: "Lantern posts, pergola brackets, and under-cap LED strip sleeved into the core before the pillar is closed up.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Sizing & Comfort",
 items: [
 "Seat height set at 18-20 inches finished, cap included — chair height, not curb height",
 "Cap depth of 12-16 inches so an adult sits back rather than perching on an edge",
 "Cap overhang of 1-1.5 inches beyond the wall face for calf clearance and shadow line",
 "Wall length planned around real seating counts, not the leftover perimeter",
 ],
 },
 {
 heading: "Structure",
 items: [
 "Concrete footings carried below the 4-foot Ontario frost line for every pillar",
 "Compacted 3/4-inch clear stone base under seating walls tied into the patio base",
 "Pillar cores filled with concrete and vertical rebar dowelled into the footing",
 "Sleeves and conduit cast into cores for lighting, gas, or lantern posts",
 ],
 },
 {
 heading: "Materials & Finish",
 items: [
 "Techo-Bloc, Unilock, and Permacon wall units, or full natural stone on request",
 "Structural adhesive at every course, not just the top two",
 "Caps mitred at corners so no cut end shows on a sightline",
 "3-year hardscape warranty covering sink, level, and cracking",
 ],
 },
];

const whyMcCoyBullets = [
 "We build seating walls to sitting height, not to a course count that came out even",
 "Every pillar gets a poured footing below frost — no floating columns on a sand bed",
 "Conduit and gas sleeves planned before the core closes, never chased in afterward",
 "Owner-operated — Alex and Pieter build the pillars on every signature project",
 "Wall and cap product from Techo-Bloc, Unilock, and Permacon, matched to your patio",
 "3-year hardscape warranty on sink, level, and cracking",
];

const processSteps = [
 { title: "Free On-Site Consult", body: "We look at how you actually use the space and where seating belongs." },
 { title: "Layout & Seat Planning", body: "Wall runs marked on the ground, heights and seat counts confirmed before pricing." },
 { title: "Written Estimate", body: "Linear footage, cap type, pillar count, footing depth, and lighting sleeves itemized." },
 { title: "Footings & Base", body: "Pillar footings poured below frost, wall base compacted and tied into the patio." },
 { title: "Build, Cap & Light", body: "Courses set and glued, cores filled, caps mitred, fixtures wired, site cleaned." },
];

const faqs = [
 {
 q: "What is the right height for a seating wall?",
 a: "Finished height of 18-20 inches with the cap on, which lands within an inch of a dining chair. Below 16 inches people crouch and complain, above 22 inches their feet dangle. Cap depth matters just as much — 12 to 16 inches lets an adult sit back properly. We set the height by the cap you choose, not by how many courses come out even.",
 },
 {
 q: "Do seating walls and pillars really need frost footings?",
 a: "Pillars absolutely do. A column concentrates weight on a small footprint, so it is the first thing to tip when Halton clay heaves in February. Ours sit on a poured footing carried below four feet with rebar dowelled up into the core. Low seating walls under about two feet can ride on a properly compacted clear-stone base tied into the patio, because they move with the patio rather than against it.",
 },
 {
 q: "How much seating does a wall actually give me?",
 a: "Budget about 30 inches of wall per person for comfortable seating, or 24 inches if you want a rough maximum. A 12-foot run seats four or five without anyone touching elbows. Corners eat capacity, so a wall that returns 90 degrees loses roughly one seat at the bend. We do this count with you on site before quoting, so nobody is surprised at the first party.",
 },
 {
 q: "Can you build a seating wall around an existing fire pit or patio?",
 a: "Usually yes. We excavate a base trench along the wall line, tie it into the existing patio base where we can, and cut back the surface course to seat the first row. The one thing we check first is what the existing patio was built on — if the base underneath is thin or was never compacted, adding wall load on top of it just accelerates a problem that already exists.",
 },
 {
 q: "Are natural stone pillars worth the premium over manufactured units?",
 a: "It depends where they sit. At a driveway entrance where every visitor passes within a metre, full natural stone with a solid cut cap is a noticeably different object and holds its value. On a rear patio corner that mainly terminates a wall, a quality Techo-Bloc or Permacon pillar kit costs considerably less and reads perfectly well. We will tell you which situation you are in.",
 },
 {
 q: "Can lighting or a gas line run inside a pillar?",
 a: "Yes, and inside is the only good place for it. We cast PVC sleeves and conduit into the core while the pillar goes up, so low-voltage lighting, a lantern post feed, or a gas line to a fire feature runs hidden from footing to cap. Retrofitting into a filled and capped column means coring solid concrete, so decide before we close it.",
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

export default function SeatingWallsAndStonePillarsPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/seating-walls-and-stone-pillars`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Seating Walls and Stone Pillars",
 description:
 "Freestanding seating walls, fire pit surrounds, entrance pillars, and pier caps built on frost footings across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Seating Walls", "Stone Pillars", "Entrance Columns", "Pier Caps", "Patio Seating"],
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
 <Nav />

 <PageHero
 eyebrow="SEATING WALLS AND STONE PILLARS"
 title="Seating You Never"
 subtitle="Have to Put Away"
 opening={
 <>
 Built-in seating walls, fire pit surrounds, entrance pillars, and pier caps
 across Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> and we&apos;ll count the seats on the ground
 before we quote — frost footings under every pillar, 3-year hardscape warranty.
 </>
 }
 imageSrc="/images/05-card-outdoor-living.jpg"
 imageAlt="Outdoor living space with a capped seating wall and stone pillars surrounding a patio built by McCoy Landscape Group in Oakville"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">FURNITURE THAT STAYS OUT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Patio Without Vertical Elements Is Just{" "}
 <em className="italic font-light">a Floor</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Seating walls give a space its edges and somewhere to land. Pillars give
 it corners and a sense of address. Both are structures people put their
 whole body weight against, which means they answer to the dimensions of
 the human frame long before they answer to a product catalogue.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Wall and Pillar Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Walls to Sit On, Pillars to Frame It — Built In
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 From a curved bench wrapped around the fire to a pair of capped columns
 at the driveway, these are the built-in elements McCoy adds across
 Oakville, Burlington, Mississauga, and Milton.
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
 src="/images/01-hero-outdoor-living-golden-hour.jpg"
 alt="Capped seating wall and stone pillars framing an outdoor living patio in Oakville by McCoy Landscape Group"
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
 Curved seating wall wrapped around the fire, mitred caps, lantern
 feeds sleeved through the cores.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">WHAT NOBODY SEES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Work That Keeps a Wall and Pillar{" "}
 <em className="italic font-light text-[var(--color-accent)]">Plumb</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Poured footings below four feet under every column, rebar dowelled into the core",
 "Cores filled solid with concrete so the pillar acts as one mass, not a hollow stack",
 "Structural adhesive at every course, not only under the cap where a hand can reach",
 "PVC sleeves cast in for lighting, lantern feeds, and gas before the core is closed",
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
 <em className="italic font-light">in Every Wall and Pillar</em>
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
 Sized to the Body{" "}
 <em className="italic font-light">Not to the Course Count</em>
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
 From Seat Count to{" "}
 <em className="italic font-light">Capped and Lit</em>
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
 Seating wall and pillar timelines depend on linear footage, pillar
 count, and footing cure time. Most scopes run alongside the patio build
 rather than after it.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Shapes the Cost of{" "}
 <em className="italic font-light">Built-In Seating</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Seating walls price on linear footage, whether the run is straight or
 curved, and the cap you choose — a mitred cut-stone cap is a different
 order of work than a manufactured coping unit. Pillars price on the
 footing that has to go under them and the reinforcing inside them, so a
 column always costs more than its height suggests. Sleeves for lighting
 or gas add a little. Everything is quoted in writing after the on-site
 assessment.
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
 headingMain="Seating Wall & Pillar FAQs"
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
