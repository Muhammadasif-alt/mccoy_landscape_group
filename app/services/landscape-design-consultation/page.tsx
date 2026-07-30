import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Compass,
 Ruler,
 Droplets,
 PencilRuler,
 Lightbulb,
 Calendar,
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
 title: "Landscape Design Consultation Oakville | Plans, Renders & Phasing | McCoy Landscape Group",
 description:
 "Landscape design consultation in Oakville, Burlington, Mississauga & Milton. Site walk, measured plans, 3D renders and phased budgets. Call (416) 985-9771.",
 alternates: { canonical: "/services/landscape-design-consultation" },
};

const designConsultationTypes = [
 {
 icon: Compass,
 title: "On-site design walk",
 body: "We walk the lot with you, noting sightlines, sun angles, mature trees, and how you actually move through the yard.",
 },
 {
 icon: Ruler,
 title: "Measured survey & grade shots",
 body: "Laser and tape measurements of house corners, lot lines, and elevation changes so every dimension on the plan is real.",
 },
 {
 icon: Droplets,
 title: "Drainage assessment",
 body: "Where water sits after a storm, where downspouts discharge, and how much fall we have to work with.",
 },
 {
 icon: PencilRuler,
 title: "Scaled 2D layout",
 body: "Dimensioned plan drawings showing patio shapes, wall lines, steps, beds, and circulation — detailed enough to build from.",
 },
 {
 icon: Lightbulb,
 title: "3D renders & material boards",
 body: "Renders from your kitchen window and back door, plus Techo-Bloc, Unilock, and Permacon samples laid out in real daylight.",
 },
 {
 icon: Calendar,
 title: "Phasing across seasons",
 body: "A large build broken into stages, sequenced so nothing installed in phase one gets torn out in phase two.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "The Site Visit",
 items: [
 "Walk-through of the whole property with everyone who will actually use the space",
 "Laser and tape measurements of house corners, lot lines, and existing hardscape",
 "Grade shots at every elevation change so slopes and step counts are numbers, not guesses",
 "Photos of downspouts, window wells, gas meters, and anything the design has to work around",
 ],
 },
 {
 heading: "The Drawings",
 items: [
 "Dimensioned 2D plan at scale — patio shapes, wall lines, step locations, bed outlines",
 "3D renders from the viewpoints you use daily: kitchen window, back door, driveway approach",
 "Material board naming every paver, coping, and stone by brand and colour",
 "Planting layout drawn at mature spread, not nursery-pot spacing",
 ],
 },
 {
 heading: "Numbers & Approvals",
 items: [
 "Line-item estimate tied to the drawing so you can see the cost of each element",
 "Phase breakdown when the build runs across two or three seasons",
 "Setback, lot-coverage, and permit checks with your municipality flagged early",
 "Design fee credited back in full against the build when you go ahead with McCoy",
 ],
 },
];

const whyMcCoyBullets = [
 "First on-site consultation is free — no charge to walk your property and talk options",
 "Drawn by the people who build it — Alex and Pieter are on the tools for major builds",
 "Every dimension on the plan is a number we measured, not a number we assumed",
 "Design fee credited in full toward your build when you proceed with us",
 "Drainage and grade solved on paper, before a single machine touches the yard",
 "Phased plans so a big property can be built over two or three seasons without rework",
];

const processSteps = [
 { title: "Intro Call or Form", body: "A short conversation about the property, the wish list, and the budget range." },
 { title: "Free On-Site Walk", body: "We measure, shoot grades, photograph the site, and talk through how you want to use it." },
 { title: "Concept & Layout", body: "First scaled 2D layout with options for patio shape, circulation, and elevation." },
 { title: "Renders & Materials", body: "3D views, samples on-site, and revisions until the drawing matches what you pictured." },
 { title: "Estimate & Phasing", body: "Line-item pricing, phase options, permit notes, and a construction slot." },
];

const faqs = [
 {
 q: "Is the design consultation free?",
 a: "The first on-site consultation is free — we walk the property, talk through what you want, and give you a realistic range. Full design work (measured survey, scaled drawings, 3D renders, material boards) is a paid service, and that fee is credited back in full against your build if you move forward with McCoy.",
 },
 {
 q: "How long does the design process take?",
 a: "From the on-site walk to a finished drawing set is usually two to four weeks, depending on how many revisions we go through. Larger properties with grade changes, pool integration, or multiple phases run longer. We would rather spend an extra week at the drawing stage than change something mid-excavation.",
 },
 {
 q: "Do I need a permit for my project?",
 a: "It depends on the element. Patios at grade usually don't, but raised structures, anything over a set footprint, pool enclosures, and work that alters lot drainage can trigger a permit or a grading review. We check the requirements for Oakville, Burlington, Mississauga, or Milton during design and flag anything that needs an application before we quote a build date.",
 },
 {
 q: "Can I take the drawings to another contractor?",
 a: "You own the design you paid for, so yes. What you lose is the credit — the design fee only comes off the build price if we do the work. Most people who hire us to design end up hiring us to build, because the person who shot the grades is the person compacting the base.",
 },
 {
 q: "Can the build be split into phases?",
 a: "That is one of the main reasons to design first. We sequence phases so nothing gets torn out later — lighting and irrigation sleeves, base for a future structure, and drainage lines all go in with phase one even if the feature lands two seasons later. The budget spreads out; the finished result doesn't suffer.",
 },
 {
 q: "What do I actually receive at the end?",
 a: "A dimensioned 2D plan at scale, 3D renders from the viewpoints you look at every day, a material board naming each product by brand and colour, a planting layout at mature spread, and a line-item estimate. It is enough for a crew to build from and enough for a municipality to review.",
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

export default function LandscapeDesignConsultationPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="LANDSCAPE DESIGN CONSULTATION"
 title="Design It Properly"
 subtitle="Before Anyone Digs"
 opening={
 <>
 Measured site surveys, scaled layouts, 3D renders, and material boards
 for homeowners in Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to book a free on-site design walk —
 and the design fee comes off your build when you go ahead with McCoy.
 </>
 }
 imageSrc="/images/10-process-consultation.jpg"
 imageAlt="McCoy Landscape Group reviewing measured plans and grade notes with a homeowner during an Oakville landscape design consultation"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN FIRST</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Plan You Can Build From —{" "}
 <em className="italic font-light">Not a Pretty Picture</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Backyard budgets rarely break at the quote. They break mid-build,
 when a step count changes or a low spot nobody measured turns into
 a drainage problem. Design moves those decisions onto paper, where
 a revision costs an afternoon instead of a week of machine time and
 a base that has to come back out.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Design Service Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT DESIGN COVERS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Survey, Drawings, Renders — Then a Build Plan
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Design is where the money gets saved. An afternoon of measuring and
 a week of drawing prevents the mid-build changes that wreck budgets
 — and it gives you something real to look at before you commit.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {designConsultationTypes.map(({ icon: Icon, title, body }) => (
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
 alt="Finished Oakville backyard built from a measured McCoy Landscape Group design plan"
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
 DRAWN AND BUILT BY MCCOY · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Every grade, step riser, and sightline on this build was settled
 on a scaled drawing months before excavation.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">WHAT THE DRAWING DECIDES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Measurements Behind{" "}
 <em className="italic font-light text-[var(--color-accent)]">a Buildable Plan</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Grade shots at every elevation change, so step risers come out equal instead of improvised on site",
 "Downspout discharge and standing-water points recorded after rain, not assumed on a dry-day walk",
 "Utility locates, gas meters, and window wells plotted before a single layout line is drawn over them",
 "Planting spaced at mature spread, so nothing has to be dug out and thinned in year four",
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
 <span className="eyebrow text-[var(--color-accent-mid)]">THE DELIVERABLES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 What&apos;s Included{" "}
 <em className="italic font-light">in a Full Design Package</em>
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
 Drawn by the People{" "}
 <em className="italic font-light">Who Build It</em>
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
 From First Walk to{" "}
 <em className="italic font-light">Construction Drawing</em>
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
 alt={`${s.title} — McCoy Landscape Group landscape design process`}
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
 From the on-site walk to a finished drawing set is usually two to
 four weeks. Large properties with grade changes, pool integration,
 or multiple phases run longer.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Sets the Cost of{" "}
 <em className="italic font-light">a Design Package</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Design fees track the size of the lot, how many elements are in
 play, how much grade and drainage has to be resolved, and how many
 render viewpoints and revision rounds you want. A single patio
 layout sits at one end; a whole-property master plan with phasing
 and permit drawings sits at the other. The fee is quoted in writing
 after the free on-site assessment — and credited back against your
 build.
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
 Design Walks Across{" "}
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
 headingMain="Design & Consultation FAQs"
 headingItalic="Before You Commit to a Build"
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
 name: "Landscape Design Consultation",
 description:
 "On-site design walks, measured surveys, scaled 2D layouts, 3D renders, material boards, and phased build planning across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Landscape Design", "3D Landscape Rendering", "Site Consultation", "Grading and Drainage Design", "Project Phasing"],
 url: "https://mccoylandscapegroup.com/services/landscape-design-consultation",
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
 { "@type": "ListItem", position: 3, name: "Landscape Design Consultation", item: "https://mccoylandscapegroup.com/services/landscape-design-consultation" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
