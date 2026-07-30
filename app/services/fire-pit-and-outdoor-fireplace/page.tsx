import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Flame,
 Wrench,
 Package,
 Mountain,
 ShieldCheck,
 Users,
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
 title: "Fire Pit & Outdoor Fireplace Oakville | Wood, Gas & Masonry | McCoy Landscape Group",
 description:
 "Fire pit and outdoor fireplace builds in Oakville, Burlington, Mississauga & Milton. Wood-burning, natural gas, and masonry fireboxes. Call (416) 985-9771.",
 alternates: { canonical: "/services/fire-pit-and-outdoor-fireplace" },
};

const fireFeatureTypes = [
 {
 icon: Flame,
 title: "Wood-burning fire pits",
 body: "Firebrick-lined bowls in Techo-Bloc or Permacon units, sized so the heat reads at seating distance without scorching the coping.",
 },
 {
 icon: Wrench,
 title: "Natural gas fire features",
 body: "Permanent gas runs trenched from the meter and tied in by a licensed gas fitter, with a keyed shut-off at the feature.",
 },
 {
 icon: Package,
 title: "Propane fire tables",
 body: "Self-contained units with a concealed tank cabinet — no trenching, no line permit, and they move if the layout changes.",
 },
 {
 icon: Mountain,
 title: "Built-in masonry fireplaces",
 body: "Full firebox, throat, smoke chamber, and flue built in block, then clad in natural stone or manufactured veneer.",
 },
 {
 icon: ShieldCheck,
 title: "Fire-rated firebox work",
 body: "Refractory panels and firebrick set in high-heat mortar so the box takes repeated thermal cycling without spalling apart.",
 },
 {
 icon: Users,
 title: "Seating around the fire",
 body: "Curved seat walls and slab benches placed at a radius where conversation works and nobody ends up roasting.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Build & Materials",
 items: [
 "Firebrick or refractory panel liner set in high-temperature mortar",
 "Techo-Bloc, Unilock, or Permacon units for the surround, coping, and hearth",
 "Compacted granular base and a footing sized for the mass of a masonry chimney",
 "Flue liner with rain cap and spark arrestor on full fireplace builds",
 ],
 },
 {
 heading: "Gas & Controls",
 items: [
 "Trenched gas line from the meter, sleeved wherever it passes under hardscape",
 "Tie-in and pressure test by a licensed gas fitter, with the paperwork handed to you",
 "Burner ring, media (lava rock or fire glass), and a keyed valve or electronic ignition",
 "Air mixture set on-site so the flame reads full and yellow, not thin and blue",
 ],
 },
 {
 heading: "Siting & Safety",
 items: [
 "Clearance measured from the house, fences, decks, and overhanging branches",
 "Open-air burning rules confirmed with your Oakville, Burlington, Mississauga, or Milton fire service",
 "Prevailing wind and smoke path considered before the location is fixed",
 "3-year hardscape warranty on the masonry — covers sink, level, and cracking",
 ],
 },
];

const whyMcCoyBullets = [
 "Masonry fireplaces built in-house — Alex and Pieter lay the firebox themselves",
 "Firebrick and refractory mortar inside the box, never standard block and standard mortar",
 "Licensed gas fitter on every tie-in, with the inspection paperwork left with you",
 "Footings dug below frost line so a heavy chimney doesn't heave by its third winter",
 "Seating radius planned with the fire feature, not bolted on after the patio is laid",
 "Owner-operated since 2001, no subcontracted crews on major builds",
];

const processSteps = [
 { title: "Free On-Site Visit", body: "We read the yard, the wind, the house wall, and where a gas line could realistically run." },
 { title: "Feature Selection", body: "Wood or gas, pit or fireplace, kit or custom masonry — with real costs beside each." },
 { title: "Layout & Clearances", body: "Location staked, clearances measured, bylaw confirmed, seating radius marked on the ground." },
 { title: "Footing & Build", body: "Excavation, compacted base, footing below frost, firebox laid, veneer and coping set." },
 { title: "Tie-In & First Burn", body: "Gas fitter connects and tests, then we light it with you and set the flame." },
];

const faqs = [
 {
 q: "Wood-burning or natural gas — which should I pick?",
 a: "Wood gives you the crackle, the smell, and real radiant heat, but it also means storing fuel, cleaning ash, and smoke that drifts wherever it wants. Gas lights instantly, throws no sparks, and shuts off when you head inside, at maybe two-thirds the heat. Families with young kids and tight lot lines usually land on gas.",
 },
 {
 q: "Am I allowed to have an open fire in Oakville?",
 a: "Rules differ by municipality and tighten with conditions. Oakville and Burlington both restrict open-air burning and treat approved appliances differently from open pits, and bans go up during dry spells. We confirm the current bylaw for your address during design, and we will tell you straight if a gas feature is the only clean option on your lot.",
 },
 {
 q: "How far does a fire feature have to sit from the house?",
 a: "As a working rule we keep open fire well clear of any combustible wall, eave, fence, or deck, and further still from anything overhead. Manufactured units carry their own listed clearances and we follow those to the letter. On narrower Mississauga and Milton lots, clearance is often the thing that decides the location, so we stake it first.",
 },
 {
 q: "Can you run gas to a feature on an existing patio?",
 a: "Usually yes. We lift and set aside the pavers along the route, trench, sleeve the line, backfill in compacted lifts, then relay the units on fresh bedding with new joint sand. Done properly the reinstated strip is hard to pick out afterward. The tie-in at the meter is always handled by a licensed gas fitter.",
 },
 {
 q: "Why does our old fireplace smoke back at us?",
 a: "Usually the flue is undersized relative to the firebox opening, or there is no smoke shelf and throat to get the draw started. Sometimes the house itself creates a downdraft. We size the flue to the opening and build a proper throat and smoke chamber, which is the difference between a fireplace and a decorative box that smokes.",
 },
 {
 q: "Will a masonry fireplace shift over an Ontario winter?",
 a: "Not if the footing is right. A full fireplace is serious mass, so it gets its own footing below frost line on compacted granular — not the same base as the surrounding patio. Halton clay holds water and heaves hard, which is exactly why we dig separately for it. The masonry carries our 3-year warranty on sink, level, and cracking.",
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

export default function FirePitAndOutdoorFireplacePage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="FIRE PIT & OUTDOOR FIREPLACE"
 title="A Fire Feature That"
 subtitle="Holds the Evening"
 opening={
 <>
 Wood-burning pits, natural gas features, and full masonry fireplaces
 built for backyards in Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to walk your yard with Alex or Pieter —
 firebox to flue, laid by our own hands and backed by a 3-year hardscape warranty.
 </>
 }
 imageSrc="/images/01-hero-outdoor-living-golden-hour.jpg"
 imageAlt="Natural stone outdoor fireplace lit at golden hour on a McCoy Landscape Group outdoor living build in Oakville"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">MASONRY FIRST</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Fire Feature Is Masonry —{" "}
 <em className="italic font-light">Atmosphere Comes Second</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 The fire pits we get called out to repair almost always failed for
 the same three reasons: ordinary mortar inside the box, no footing
 under the mass, or a flue that never had a chance of drawing. Get
 the heat path and the ground right and the glow takes care of
 itself.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Fire Feature Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Pits, Fireplaces, Gas or Wood — Built to Burn
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 From a firebrick-lined pit to a full stone-clad fireplace with its
 own flue, here are the fire features McCoy builds across Oakville,
 Burlington, Mississauga, and Milton.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {fireFeatureTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/15-cta-dusk-invitation.jpg"
 alt="Outdoor fireplace and seating area lit at dusk on a McCoy Landscape Group build in Burlington"
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
 Stone-clad firebox on its own frost-depth footing, gas trenched
 from the meter, seat wall set at conversation radius.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">INSIDE THE FIREBOX</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 What Decides Whether a Fire Feature{" "}
 <em className="italic font-light text-[var(--color-accent)]">Survives</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Firebrick or refractory panel set in high-temperature mortar, never ordinary block in ordinary mix",
 "Flue area sized against the firebox opening, with a real throat and smoke shelf to start the draw",
 "A separate footing below frost line under the chimney mass, poured on undisturbed compacted granular",
 "Air-to-gas mixture adjusted on-site after the first burn so the flame runs full instead of thin and blue",
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
 <em className="italic font-light">in a Fire Feature Build</em>
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
 Firebox, Flue, and Footing{" "}
 <em className="italic font-light">Done by Hand</em>
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
 From Site Walk to{" "}
 <em className="italic font-light">First Burn</em>
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
 alt={`${s.title} — McCoy Landscape Group fire feature process`}
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
 A pit surround is usually a few days on site. Full masonry
 fireplaces run longer, and gas tie-ins are scheduled around the
 licensed fitter.
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
 <em className="italic font-light">a Fire Feature</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Price follows mass. A kit-based pit surround is one conversation; a
 full firebox with throat, smoke chamber, flue, and stone veneer is
 another entirely. On top of that sit the length of the gas run,
 whether hardscape has to be lifted for the trench, the veneer you
 choose, and any seating built around the fire. Everything is quoted
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
 Fire Features Across{" "}
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
 headingMain="Fire Feature FAQs"
 headingItalic="Answered Before You Build"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 <JsonLd

 data={{

 "@context": "https://schema.org",

 "@graph": [
 {
 "@type": "Service",
 name: "Fire Pit and Outdoor Fireplace",
 description:
 "Wood-burning fire pits, natural gas fire features, and built-in masonry outdoor fireplaces across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Outdoor Fireplace Construction", "Fire Pit Installation", "Gas Fire Feature Installation", "Outdoor Masonry", "Outdoor Living Design"],
 url: "https://mccoylandscapegroup.com/services/fire-pit-and-outdoor-fireplace",
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
 { "@type": "ListItem", position: 3, name: "Fire Pit and Outdoor Fireplace", item: "https://mccoylandscapegroup.com/services/fire-pit-and-outdoor-fireplace" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
