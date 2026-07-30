import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowUpDown,
 Ruler,
 Wrench,
 Droplets,
 Anchor,
 Compass,
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
 title: "Interlock Repair and Re-Levelling Oakville | Sunken Pavers Fixed | McCoy Landscape Group",
 description:
 "Interlock repair and re-levelling in Oakville, Burlington, Mississauga & Milton. Sunken pavers lifted, base rebuilt, trip hazards gone. 3-year warranty. Call (416) 985-9771.",
 alternates: { canonical: "/services/interlock-repair-and-re-levelling" },
};

const repairTypes = [
 {
 icon: ArrowUpDown,
 title: "Settled and sunken sections",
 body: "Dips near driveway aprons, downspouts, and vehicle wheel paths lifted, re-based, and set flush with the surrounding field.",
 },
 {
 icon: Compass,
 title: "Frost heave correction",
 body: "Sections pushed upward by trapped water freezing under the base — rebuilt with free-draining aggregate so they stop moving.",
 },
 {
 icon: Anchor,
 title: "Missing or blown edge restraint",
 body: "Spreading perimeters pulled back tight, then locked with spiked polymer or concrete haunch restraint the original crew skipped.",
 },
 {
 icon: Wrench,
 title: "Trip hazard removal",
 body: "Lipped walkway joints and raised corners taken down to a continuous plane — safe underfoot and code-sensible at entries.",
 },
 {
 icon: Ruler,
 title: "Partial lift versus full relay",
 body: "We re-level only the failed area when the base is sound, and quote a full lift-and-relay only when it is genuinely warranted.",
 },
 {
 icon: Droplets,
 title: "Root and drainage repairs",
 body: "Tree roots pruned or routed around, and water redirected with drainage stone so the same section doesn't sink twice.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Diagnosis First",
 items: [
 "Stringline and laser shot across the whole surface to map the real low and high points",
 "Test lift of a few pavers to see base depth, aggregate type, and whether bedding sand has washed out",
 "Downspout, swale, and grade check — most settlement is a water problem before it is a paver problem",
 "Written cause note so you know whether this is a base failure, a root, or a restraint failure",
 ],
 },
 {
 heading: "Lift and Rebuild",
 items: [
 "Existing pavers lifted by hand, cleaned, and stacked for re-use wherever the units are sound",
 "Failed base excavated and replaced with compacted 3/4 clear or Granular A to proper depth",
 "Fresh bedding layer screeded to grade, with drainage stone or geotextile added where the soil holds water",
 "Edge restraint installed or replaced along every open perimeter before a single paver goes back down",
 ],
 },
 {
 heading: "Relay and Finish",
 items: [
 "Salvaged pavers relaid in the original pattern, with new units blended in from the field rather than one obvious patch",
 "Discontinued colours matched from supplier stock, reclaimed lots, or by borrowing units from a hidden area",
 "Plate compacted over protective mat, then swept and set with polymeric jointing sand",
 "Final pass with a level across the repair line so the transition to old work reads flat, not patched",
 ],
 },
];

const whyMcCoyBullets = [
 "We fix the cause, not the symptom — a repair over a bad base sinks again in two winters",
 "25+ years relaying interlock across Oakville, Burlington, Mississauga, and Milton",
 "Your existing pavers get salvaged and re-used, which keeps the colour consistent and the cost down",
 "Owner-operated — Alex and Pieter assess every repair before it gets quoted",
 "Straight answers on partial repair versus full relay, even when full relay is the bigger invoice",
 "Repaired areas carry our 3-year hardscape warranty against sink, level, and cracking",
];

const processSteps = [
 { title: "Send Photos or Call", body: "A few photos of the sunken area tell us a lot before we ever drive out." },
 { title: "On-Site Diagnosis", body: "We shoot grades, lift a test section, and find why it moved." },
 { title: "Scope and Fixed Quote", body: "Repair area, base depth, restraint, and paver matching in writing." },
 { title: "Lift, Re-Base, Relay", body: "Crew on site, base corrected, pavers back down the same week on most jobs." },
 { title: "Level Check and Handoff", body: "We walk the repair with you and confirm the surface reads as one piece." },
];

const faqs = [
 {
 q: "Why did my interlock sink in the first place?",
 a: "Almost always the base, not the pavers. The common causes we find in Halton and Peel are an undersized or uncompacted granular base, bedding sand washing out through a missing edge restraint, water from a downspout tracking under the surface, and clay subgrade holding moisture that freezes and heaves. Tree roots are a distant fifth. We diagnose which one you have before quoting.",
 },
 {
 q: "Can you re-use my existing pavers?",
 a: "Usually yes. Concrete pavers are far tougher than the base under them, so on most re-levelling jobs 90 percent or more of the units come back up clean and go straight back down. We lose some to chipping at the edges of the lift and to old saw cuts. Those get replaced from field stock so the patched area blends instead of announcing itself.",
 },
 {
 q: "My paver is discontinued. Can you still match it?",
 a: "Often, yes. We check current Techo-Bloc, Unilock, and Permacon lines for a close profile, chase down remaining supplier stock, and keep an eye on reclaimed lots. When nothing matches, the better move is to borrow units from a low-visibility area — behind a shed, under a deck, a side walkway — and put the new blended product there instead of in the middle of your front entry.",
 },
 {
 q: "Do I need the whole driveway lifted, or just the bad section?",
 a: "It depends on what the test lift shows. If the base is sound and only one area failed because of a downspout or a settled service trench, a partial re-level is the right call and costs a fraction of a full relay. If the base is thin or contaminated across the whole surface, spot repairs just move the problem, and we will tell you that plainly.",
 },
 {
 q: "How long does a re-levelling job take?",
 a: "A single sunken area on a walkway or an apron is typically one day. A larger driveway section runs two to three days. A full lift-and-relay on an average Oakville driveway is usually three to five days depending on square footage, disposal, and how deep the base has to go. We give you the schedule up front and stick to it.",
 },
 {
 q: "Will the repair sink again next winter?",
 a: "Not if the cause is corrected. Our repairs go back on a properly compacted base with an open-graded drainage layer where the soil is heavy, plus restraint on every free edge. That combination gives freeze-thaw water somewhere to go instead of lifting your surface. Re-levelled areas carry the same 3-year warranty on sink, level, and cracking as a new McCoy build.",
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

export default function InterlockRepairAndRelevellingPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/interlock-repair-and-re-levelling`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Interlock Repair and Re-Levelling",
 description:
 "Lifting, re-basing, and relaying settled or heaved interlock pavers across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Interlock Repair", "Paver Re-Levelling", "Driveway Repair", "Edge Restraint Installation", "Base Reconstruction"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Interlock Repair and Re-Levelling", item: URL },
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
 eyebrow="INTERLOCK REPAIR AND RE-LEVELLING"
 title="Sunken Interlock,"
 subtitle="Lifted and Made Right"
 opening={
 <>
 Settled patios, heaved walkways, and dipped driveway aprons across
 Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> and we&apos;ll find out why it moved
 before we put a single paver back down — because a relay over a bad
 base just buys you two more winters.
 </>
 }
 imageSrc="/images/12-process-installation.jpg"
 imageAlt="McCoy Landscape Group crew re-levelling lifted interlock pavers over a freshly compacted granular base"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">SETTLED INTERLOCK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Relay Is Only as Good as{" "}
 <em className="italic font-light">the Base You Put It On</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 A dip beside the garage apron. A lip at the front walk that catches
 a shoe. A patio corner spreading wider every spring. The concrete
 units are almost never what failed — beneath them the granular
 thinned, the bedding sand escaped through an open edge, or water
 found a route it was never given. That is what we come to find.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Repair Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE REPAIR</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Dips, Heaves, Lips, Spread — All of It
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Pavers rarely fail. What fails is the base beneath them, the
 restraint around them, or the water moving under both. Here is what
 we correct across Oakville, Burlington, Mississauga, and Milton.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {repairTypes.map(({ icon: Icon, title, body }) => (
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
 alt="Failed granular base excavated beneath lifted interlock pavers on a McCoy Landscape Group re-levelling job"
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
 A RECENT MCCOY REPAIR · BURLINGTON
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Driveway apron dug out past the failed layer, re-based, and the
 original pavers relaid flat over the repair line.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">UNDER THE PAVERS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Details That Decide Whether a Repair{" "}
 <em className="italic font-light text-[var(--color-accent)]">Holds</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Excavation carried past the failed layer, never a sand top-up under lifted units",
 "Open-graded clear stone wherever the subgrade is Halton clay that traps winter water",
 "Restraint spiked into compacted base along every free edge before the relay begins",
 "Screed rails pulled and bedding struck true so the repair line disappears underfoot",
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
 <em className="italic font-light">in a Re-Levelling Job</em>
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
 We Fix the Base{" "}
 <em className="italic font-light">Not Just the Surface</em>
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
 From First Photo to{" "}
 <em className="italic font-light">Flat Again</em>
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
 alt={`${s.title} — McCoy Landscape Group interlock repair process`}
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
 Repair timelines depend on area, base depth, and disposal. A single
 sunken section is often one day; a full lift-and-relay runs three to
 five.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Moves the Number on{" "}
 <em className="italic font-light">a Repair</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Repair pricing follows the area being lifted, how deep the failed
 base has to come out, whether spoil leaves the property, and how
 much replacement stone is needed to blend a discontinued colour.
 Access shifts it too — a wheelbarrow-only backyard is slower work
 than a driveway a machine can reach. Every repair is quoted in
 writing after the on-site diagnosis.
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
 Repairing Interlock Across{" "}
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
 headingMain="Interlock Repair FAQs"
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
