import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Car,
 Replace,
 MoveHorizontal,
 DoorOpen,
 Droplets,
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
 title: "Driveway Paver Installation Oakville | McCoy Landscape",
 description:
 "Paver driveway installation in Oakville, Burlington & Mississauga. Engineered base built for Ontario freeze-thaw. 3-year warranty. Call (416) 985-9771.",
 alternates: { canonical: "/services/paver-driveways" },
};

const drivewayTypes = [
 {
 icon: Car,
 title: "Full paver driveways",
 body: "Complete paver driveway contractor mississauga installs for single, double, and triple-car driveways.",
 },
 {
 icon: Replace,
 title: "Interlocking driveway replacements",
 body: "Removing failed asphalt or concrete and installing engineered paver driveways.",
 },
 {
 icon: MoveHorizontal,
 title: "Driveway extensions and widening",
 body: "Adding capacity for a second vehicle, RV, or boat on an existing lot.",
 },
 {
 icon: DoorOpen,
 title: "Front-entry paver landings",
 body: "Integrated into the driveway scope — curb-appeal transitions from driveway to door.",
 },
 {
 icon: Droplets,
 title: "Permeable paver driveways",
 body: "Drainage-friendly installs for lots with grade or runoff concerns.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Excavation & Base",
 items: [
 "Excavation to 10–14 inches below finished grade for driveway-load builds",
 "Compaction in 2-inch lifts — not a single dump-and-roll pass",
 "Geotextile fabric where sub-soils are unstable or clay-heavy",
 ],
 },
 {
 heading: "Materials",
 items: [
 "Techo-Bloc, Unilock, or Permacon driveway-rated pavers (thicker, load-tested)",
 "ICPI-informed install methods used by every McCoy crew",
 "Heavy-traffic polymeric sand in the joints",
 ],
 },
 {
 heading: "Details",
 items: [
 "Edge restraint spiked into compacted base around the full perimeter",
 "Drainage tie-ins and slope planning built into the design",
 "Front-entry landings, steps, and door transitions finished as one scope",
 ],
 },
];

const whyMcCoyBullets = [
 "25+ years of driveway construction across Oakville, Burlington, Mississauga, and Milton",
 "ICPI-informed base-prep standards on every build",
 "Techo-Bloc, Unilock, and Permacon premium driveway-rated materials",
 "Designed and built for Ontario freeze–thaw, plowing, and daily load",
 "Owner-operated — Alex and Pieter on every major driveway build",
 "3-year warranty covering sink, settlement, and cracking replacement",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your goals, space, and timeline." },
 { title: "On-Site Consultation", body: "We walk the property, measure, assess drainage and access." },
 { title: "Design & Detailed Estimate", body: "Layout, materials, and investment in writing." },
 { title: "Build & Daily Cleanup", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough & 3-Year Warranty", body: "Confirm every detail, hand off care tips." },
];

const faqs = [
 {
 q: "How much does a paver driveway cost compared to asphalt?",
 a: "Paver driveways are a larger upfront investment than asphalt — usually 2–3x — but they last 25–30 years with minimal upkeep versus 10–12 for asphalt, and they add real resale value. If you plan to stay in the home past 5 years, the numbers favour pavers on total cost of ownership.",
 },
 {
 q: "How long does paver driveway installation take?",
 a: "Most McCoy driveway builds run 1–3 weeks on-site once excavation starts, depending on size, access, and integration with front-entry walkways or landings. Peak-season (April–September) books 6–12 weeks ahead, so reach out early.",
 },
 {
 q: "Do paver driveways handle Canadian winters?",
 a: "When they're installed correctly, yes — better than asphalt. The key is base depth and compaction. Our driveways go down on 10–14 inches of compacted aggregate so freeze–thaw cycles have nothing to move. Individual pavers can also be replaced section-by-section if anything ever shifts.",
 },
 {
 q: "What about snow plowing on pavers?",
 a: "Snow plowing works fine on paver driveways — lift the plow blade slightly off the surface, and use a plastic or rubber cutting edge rather than metal. We cover this in the care-guide handoff so you (or your plow contractor) know the right setup before winter.",
 },
 {
 q: "Can you extend or widen an existing driveway?",
 a: "Yes — extensions and widening are common projects. We match the existing paver colour and style where possible, and rebuild the adjacent base so the new section and the old one behave the same way under load and freeze–thaw.",
 },
 {
 q: "How often does a paver driveway need resealing?",
 a: "Sealing is optional but recommended every 5–7 years if you want the fresh-install look maintained. Polymeric sand top-up every 3–5 years keeps joints tight. We include a care guide at handoff that spells out timing and the right products to use.",
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

export default function PaverDrivewaysPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="PAVER DRIVEWAYS"
 title="Paver Driveways That Elevate Curb Appeal"
 subtitle="Built for Oakville Homes"
 opening={
 <>
 Driveway paver installation across Oakville, Burlington,
 Mississauga, and Milton. Call <strong>(416) 985-9771</strong> for a
 free on-site quote — engineered base prep, Techo-Bloc, Unilock and
 Permacon options, and a 3-year warranty on every driveway we build.
 </>
 }
 imageSrc="/images/02-paver-driveway-front-entrance-oakville.jpg"
 imageAlt="Interlocking paver driveway with front-entry landing in Oakville by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">ENGINEERED BASE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Interlock &amp; Paver Driveways{" "}
 <em className="italic font-light">Engineered for Ontario</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 Most failed driveways fail in the dirt, not the surface. Asphalt
 patched every three years. Poured concrete cracked through from
 freeze–thaw. Interlocking driveways installed over inadequate base
 that migrate, dip, or rut. The surface gets blamed; the sub-base is
 the real problem.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 McCoy&apos;s driveway paver installation oakville approach is
 base-first. Every interlocking driveway burlington build starts
 with excavation to proper depth, compaction in lifts, and drainage
 planning — then premium pavers set over ground that won&apos;t move.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Driveway Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Driveway Configurations &amp; Features
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every McCoy driveway is scoped to the lot, layout, and load —
 here are the configurations we build most often across Oakville, Burlington, Mississauga, and Milton.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {drivewayTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/09-showcase-signature-build.jpg"
 alt="Completed paver driveway with edge restraint and polymeric sand in West GTA"
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
 Engineered sub-base, Techo-Bloc driveway pavers, integrated
 front-entry landing — built as a single scope.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">THE HIDDEN WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Reason Most Driveways Fail{" "}
 <em className="italic font-light text-[var(--color-accent)]">Isn&apos;t the Pavers</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Excavation to 10–14 inches below finished grade for true driveway load",
 "Compaction in 2-inch lifts, not one dump-and-roll pass",
 "Edge restraint spiked into compacted base around the full perimeter",
 "Drainage tie-ins and slope planning built in during design",
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
 What Makes a McCoy Paver Driveway{" "}
 <em className="italic font-light">Last</em>
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
 Why Oakville Homeowners{" "}
 <em className="italic font-light">Choose McCoy for Paver Driveways</em>
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
 <em className="italic font-light">Paver Driveway Process</em>
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
 alt={`${s.title} — McCoy Landscape Group paver driveway process`}
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
 Most driveway builds run 1–3 weeks on-site once excavation starts.
 Peak-season books 6–12 weeks out.
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
 <em className="italic font-light">Paver Driveway Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every driveway is priced to square footage, access, base depth
 required, and paver selection. We quote in writing after the
 on-site visit — you see the exact scope and the exact number
 before any work starts. No change-order games, no surprise extras.
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
 headingMain="Paver Driveway FAQs"
 headingItalic="for Oakville Homeowners"
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
 name: "Paver Driveway Installation",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 url: "https://mccoylandscapegroup.com/services/paver-driveways",
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
 { "@type": "ListItem", position: 3, name: "Paver Driveways", item: "https://mccoylandscapegroup.com/services/paver-driveways" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
