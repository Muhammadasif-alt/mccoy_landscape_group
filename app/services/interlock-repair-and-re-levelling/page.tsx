import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 ArrowUpDown,
 Wrench,
 LayoutGrid,
 ShieldCheck,
 Ruler,
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
 title: "Interlock Repair & Re-Levelling Oakville | Lift & Relay | McCoy Landscape Group",
 description:
 "Expert interlock repair, re-levelling & lift-and-relay in Oakville, Burlington, Mississauga & Milton. We fix sunken & shifted pavers for good. Call (416) 985-9771.",
 alternates: { canonical: "/services/interlock-repair-and-re-levelling" },
};

const repairTypes = [
 {
 icon: ArrowUpDown,
 title: "Sunken paver re-levelling",
 body: "Lift and relay of dipped or settled sections back to level.",
 },
 {
 icon: Wrench,
 title: "Driveway repairs",
 body: "Fixes for rutted, sunken, or shifted interlock driveways.",
 },
 {
 icon: LayoutGrid,
 title: "Patio and walkway repairs",
 body: "Re-levelling of wavy patios and uneven walkways.",
 },
 {
 icon: ShieldCheck,
 title: "Trip hazard fixes",
 body: "Correction of raised or lifted pavers that are a safety risk.",
 },
 {
 icon: Ruler,
 title: "Edge and border repairs",
 body: "Re-set of loose edges and failed edge restraint.",
 },
 {
 icon: Waves,
 title: "Drainage corrections",
 body: "Base and grade fixes that stop water from washing out again.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Assess & Lift",
 items: [
 "On-site check to find why the pavers shifted",
 "Careful lift of the affected pavers to save them",
 "Removal of failed sand and washed-out base",
 "A look at drainage and grade around the area",
 ],
 },
 {
 heading: "Rebuild & Relay",
 items: [
 "Fresh compacted aggregate base built in lifts",
 "Drainage and grade corrected before relaying",
 "The same pavers set back to level",
 "Edge restraint re-secured around the section",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Fresh polymeric sand set into the joints",
 "Post-job cleanup and wash-down",
 "Care and maintenance guide at handoff",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ hardscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated. Alex and Pieter on every major job",
 "We build interlock too, so we fix the base, not just the surface",
 "Base and drainage rebuilt for Ontario freeze and thaw, not shortcut",
 "We save your existing pavers wherever possible",
 "Clean crews, respectful job sites, daily communication",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share the problem area, size, and photos if you have them." },
 { title: "On-Site Consultation", body: "We find why the pavers shifted and check drainage." },
 { title: "Detailed Estimate", body: "Scope and investment in writing." },
 { title: "Repair & Relay", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough", body: "Confirm the surface is level, hand off care tips." },
];

const faqs = [
 {
 q: "How much does interlock repair cost in Oakville or Burlington?",
 a: "It depends on the size of the area and why it failed. A small sunken section costs far less than a full driveway with a drainage problem. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "Why did my pavers sink in the first place?",
 a: "Almost always because of the base. Water washed out the sand, the ground settled, or the original base was too thin. We fix the cause by rebuilding the base and correcting drainage, not just sweeping sand back on top.",
 },
 {
 q: "Can you re-use my existing pavers?",
 a: "Yes, in most cases. We lift the pavers carefully so we can relay the same ones back to level. If a few are cracked or stained, we can source matching replacements where possible.",
 },
 {
 q: "Will the repaired area sink again?",
 a: "Not when it is fixed properly. We rebuild the compacted base and correct the drainage so water does not wash it out again. A proper repair holds up just like a new install.",
 },
 {
 q: "Do you fix trip hazards from raised pavers?",
 a: "Yes. Raised or lifted pavers are a safety risk, especially on walkways and entries. We re-level them and fix whatever pushed them up, whether it is a root, frost, or a base issue.",
 },
 {
 q: "Can you seal the repaired area to match the rest?",
 a: "Yes. We can add a full clean and seal so the repaired section blends in with the rest of your surface and gets the same protection.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium interlock repair",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville interlock repair by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Re-levelling and lift-and-relay",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington interlock re-levelling and lift-and-relay by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service paver repair",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga full-service paver repair by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Interlock restoration",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton interlock restoration by McCoy Landscape Group",
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
 "Expert interlock repair, re-levelling, and lift-and-relay — sunken paver correction, driveway and patio repairs, trip hazard fixes, and drainage corrections across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Interlock Repair", "Paver Re-Levelling", "Lift and Relay", "Trip Hazard Repair", "Drainage Correction"],
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
 <JsonLd data={serviceLd} />
 <JsonLd data={breadcrumbLd} />
 <JsonLd data={faqLd} />

 <Nav />

 <PageHero
 eyebrow="INTERLOCK REPAIR & RE-LEVELLING"
 title="Interlock Repair and Re-Levelling"
 subtitle="in Oakville"
 opening={
 <>
 Expert interlock repair, re-levelling, and lift-and-relay in Oakville,
 Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. We fix
 sunken and shifted pavers and make them last.
 </>
 }
 imageSrc="/interlock-repair-and-re-levelling/hero-before-after-restoration.png"
 imageAlt="Before-and-after restoration of a driveway with interlock pavers lifted and re-levelled on an Oakville property by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">REPAIR & RESTORATION</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Fix the Base,{" "}
 <em className="italic font-light">Not Just the Surface</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Sunken pavers, wavy patios, and trip hazards do not fix themselves. When
 interlock shifts, it is almost never the pavers that failed. It is the
 base underneath. Water washed out the sand, the ground settled, or the
 original base was too thin for Ontario freeze and thaw. Sweeping sand
 back into the joints does nothing if the base is the problem.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy repairs interlock the right way. We lift the affected pavers,
 rebuild the base underneath, fix the drainage, and relay the same pavers
 back to level. Done properly, a repaired section holds up just as well as
 a new install. We save the pavers you already have and make the surface
 safe and flat again.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Repair Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Interlock Repair and Re-Levelling Services
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every repair is different. Here is the work we do most often across
 Oakville, Burlington, Mississauga, and Milton homes.
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
 src="/interlock-repair-and-re-levelling/center-repair-in-progress.png"
 alt="A paver driveway repair in progress with sunken pavers lifted, re-based, and relaid to level in Oakville by McCoy Landscape Group"
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
 A RECENT MCCOY REPAIR · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 A sunken driveway section lifted, re-based, and relaid to level
 using the same pavers, in a single scope.
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
 The Details That Make a Repair{" "}
 <em className="italic font-light text-[var(--color-accent)]">Hold</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Rebuilt compacted base under the lifted area",
 "Drainage corrections that stop the problem coming back",
 "Fresh polymeric sand and edge restraint on the repaired area",
 "Full clean and seal add-on to match the rest of the surface",
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
 Every McCoy Interlock Repair{" "}
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
 <em className="italic font-light">McCoy for Interlock Repair</em>
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
 <em className="italic font-light">Interlock Repair Process</em>
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
 Most repairs take 1 to 3 days on-site, depending on the size of the
 area. Peak season books ahead, call early.
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
 <em className="italic font-light">Interlock Repair Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every repair is scoped to the size of the area, the cause of the
 problem, and any drainage work needed. There is no flat guessing over
 the phone. We build the written estimate after the on-site visit, so the
 number you see is the number you pay. No surprises, no escalations.
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
 headingMain="Interlock Repair FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA
 bgImage="/interlock-repair-and-re-levelling/end-twilight-firepit.png"
 bgAlt="A twilight patio retreat by the firepit above re-levelled interlock in Oakville by McCoy Landscape Group"
 />
 <Footer />
 </>
 );
}
