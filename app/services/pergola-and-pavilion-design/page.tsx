import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Sun,
 Warehouse,
 LayoutGrid,
 Trees,
 Anchor,
 Lightbulb,
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
 title: "Pergola & Pavilion Design Oakville | Cedar, Aluminum & Louvered Roofs | McCoy Landscape Group",
 description:
 "Pergola and pavilion design-build in Oakville, Burlington, Mississauga & Milton. Cedar, aluminum, louvered roofs, frost-depth footings. Call (416) 985-9771.",
 alternates: { canonical: "/services/pergola-and-pavilion-design" },
};

const structureTypes = [
 {
 icon: Sun,
 title: "Open-rafter pergolas",
 body: "Rafter depth and spacing worked out so midday sun drops to a comfortable dapple while the sky stays visible overhead.",
 },
 {
 icon: Warehouse,
 title: "Solid-roof pavilions & cabanas",
 body: "A full roof deck with shingles or standing seam, so furniture stays out and the space works in the rain.",
 },
 {
 icon: LayoutGrid,
 title: "Louvered & motorized roofs",
 body: "Aluminum blades that pivot from open sky to sealed and pitched, with rain sensors and gutters built into the frame.",
 },
 {
 icon: Trees,
 title: "Western red cedar frames",
 body: "Kiln-dried cedar with concealed hardware and stainless fasteners — warm grain that takes stain instead of fighting it.",
 },
 {
 icon: Anchor,
 title: "Footings & post anchoring",
 body: "Piers poured below frost depth, or through-patio anchors set into concrete rather than bolted onto pavers.",
 },
 {
 icon: Lightbulb,
 title: "Lighting, fans & heaters",
 body: "Wiring chased inside posts and beams during framing, so no conduit is ever visible on the finished structure.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Structure & Materials",
 items: [
 "Western red cedar, powder-coated aluminum, or composite framing specified to the look you want",
 "Beam and rafter spans sized for Ontario snow load, not catalogue minimums",
 "Concealed hardware with stainless or hot-dip galvanized fasteners throughout",
 "Roof options from open rafters to shingled deck, standing seam, or motorized louvres",
 ],
 },
 {
 heading: "Foundations",
 items: [
 "Concrete piers poured below frost depth on undisturbed soil",
 "Post bases raised on standoffs so end grain never sits in standing water",
 "Anchoring through an existing patio into a poured pad below, never onto the pavers",
 "Knee bracing or lateral bracing added where span and wind exposure call for it",
 ],
 },
 {
 heading: "Systems & Approvals",
 items: [
 "Permit drawings and the municipal application where footprint or attachment triggers one",
 "Setback and lot-coverage checks with Oakville, Burlington, Mississauga, or Milton",
 "Rough-in for pot lights, ceiling fans, infrared heaters, and speakers during framing",
 "Privacy screens, retractable shades, and drop curtains detailed into the frame",
 ],
 },
];

const whyMcCoyBullets = [
 "Spans sized for Ontario snow and wind, not shipped in as a flat-pack guess",
 "Footings below frost line on undisturbed soil — the reason our posts stay plumb",
 "Permit drawings and municipal applications handled by us, not left on your desk",
 "Lighting, fan, and heater wiring roughed in at framing so nothing ends up surface-mounted",
 "In-house carpentry crew — no subcontracted framers on major builds",
 "25+ years building in Halton and Peel, operating since 2001",
];

const processSteps = [
 { title: "Free On-Site Visit", body: "We read the sun path, the roofline, the view from inside, and where footings can go." },
 { title: "Structure & Material", body: "Pergola or pavilion, cedar or aluminum, fixed or louvered — with spans and costs beside each." },
 { title: "Drawings & Permit", body: "Elevations, footing details, and the municipal application when the build requires one." },
 { title: "Footings & Framing", body: "Piers poured below frost, posts set plumb, beams and rafters raised by our own crew." },
 { title: "Roof & Finishing", body: "Roofing or louvres installed, wiring terminated, stain or finish applied, site cleared." },
];

const faqs = [
 {
 q: "Pergola or pavilion — what is the real difference?",
 a: "A pergola has open rafters. It breaks up harsh afternoon sun and frames the space, but you will still get wet. A pavilion or cabana carries a solid pitched roof, so furniture stays dry, the barbecue works in the rain, and you can hang heaters and use it into November. Pavilions cost more and almost always need a permit.",
 },
 {
 q: "Do I need a building permit for one?",
 a: "Often yes. Most Ontario municipalities exempt small detached roofed structures under a set floor area, but that threshold is low, and anything attached to the house or above the limit needs a permit. Setbacks and lot coverage matter too. We check the rules for your address, prepare the drawings, and file the application as part of the build.",
 },
 {
 q: "Cedar or aluminum?",
 a: "Cedar looks warm, takes stain well, and suits traditional Oakville and Burlington homes, but it wants re-oiling every couple of seasons and will grey if you leave it. Powder-coated aluminum is dimensionally stable, carries longer spans on slimmer posts, and needs nothing beyond a wash. Louvered systems are aluminum by definition. It is really a maintenance decision.",
 },
 {
 q: "Can a structure sit on my existing paver patio?",
 a: "Yes, but the posts cannot land on pavers. We lift the units where each post falls, dig and pour a pier below frost line, set an anchor in the wet concrete, then relay the pavers tight around the base. Bolting posts straight onto interlock is a common shortcut, and it is exactly why those structures start leaning within a few winters.",
 },
 {
 q: "Will it handle our snow load?",
 a: "It is designed to. Southern Ontario ground snow plus a rain-on-snow allowance drives the beam and rafter sizing on any solid roof, so we spec spans to that rather than to a supplier minimum. Louvered systems carry a rated capacity with the blades closed, and we walk you through that number, because most want opening after a heavy fall.",
 },
 {
 q: "Can lighting, fans, or heaters be added later?",
 a: "Later is possible but messier — you end up with surface conduit running down a structure you paid to look clean. We rough in wiring inside the posts and beams during framing even when the fixtures are not going in yet, so a heater added in year three plugs into something already waiting. At framing stage it costs very little.",
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

export default function PergolaAndPavilionDesignPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="PERGOLA & PAVILION DESIGN"
 title="Shade, Shelter, and"
 subtitle="a Reason to Stay Out"
 opening={
 <>
 Cedar pergolas, solid-roof pavilions, and motorized louvered systems
 designed and built across Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to talk spans, footings, and permits
 with Alex or Pieter — raised by our own crew, never subcontracted out.
 </>
 }
 imageSrc="/images/15-cta-dusk-invitation.jpg"
 imageAlt="Lit cedar pavilion over a paver patio at dusk on a McCoy Landscape Group outdoor living build in Oakville"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">SHELTER, ENGINEERED</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 The One Thing You Stand Under —{" "}
 <em className="italic font-light">and Look Up At</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 A structure has to carry a wet February snow load, shrug off wind
 off the lake, and still read plumb from the kitchen window twenty
 winters from now. Almost all of that is decided below grade and on
 the span table, long before anyone chooses a stain colour.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Structure Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Pergolas, Pavilions, Louvres — Built for Ontario
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 From an open cedar rafter frame to a fully roofed cabana or a
 motorized louvered system, here are the structures McCoy designs and
 raises across Oakville, Burlington, Mississauga, and Milton.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {structureTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/05-card-outdoor-living.jpg"
 alt="Cedar pavilion over a paver patio on a McCoy Landscape Group outdoor living build in Milton"
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
 Cedar pavilion on frost-depth piers through an existing patio,
 wiring chased inside the posts before the roof went on.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">BELOW THE FIRST POST</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 What Keeps a Structure{" "}
 <em className="italic font-light text-[var(--color-accent)]">Plumb</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "A pier poured to undisturbed soil below frost depth under every post — never an anchor bolted to interlock",
 "Post bases lifted on standoffs so end grain never sits in the water that pools at a post",
 "Beam and rafter spans calculated for ground snow plus a rain-on-snow allowance, not a supplier minimum",
 "Stainless or hot-dip galvanized fasteners with the hardware hidden inside the joint, not face-screwed",
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
 <em className="italic font-light">in a Structure Build</em>
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
 Footings Below Frost,{" "}
 <em className="italic font-light">Spans That Hold Snow</em>
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
 From Sun Path to{" "}
 <em className="italic font-light">Finished Roof</em>
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
 alt={`${s.title} — McCoy Landscape Group pergola and pavilion process`}
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
 Framing moves quickly once the piers have cured. On most structure
 builds the municipal permit review, not the carpentry, sets the
 start date.
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
 <em className="italic font-light">a Pergola or Pavilion</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Footprint, roof type, and material do most of the work. An open
 cedar rafter frame is one thing; a solid pitched pavilion or a
 motorized louvered roof carrying snow load is another. After that
 come footing conditions, whether an existing patio has to be opened
 up for piers, permit drawings, and any lighting, fan, or heater
 rough-in. It is all quoted in writing after the on-site assessment.
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
 Structures Raised Across{" "}
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
 headingMain="Pergola & Pavilion FAQs"
 headingItalic="from Halton Homeowners"
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
 name: "Pergola and Pavilion Design",
 description:
 "Cedar pergolas, solid-roof pavilions and cabanas, and motorized louvered roof systems designed and built across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Pergola Construction", "Pavilion Construction", "Louvered Roof Installation", "Outdoor Structure Design", "Outdoor Living Design"],
 url: "https://mccoylandscapegroup.com/services/pergola-and-pavilion-design",
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
 { "@type": "ListItem", position: 3, name: "Pergola and Pavilion Design", item: "https://mccoylandscapegroup.com/services/pergola-and-pavilion-design" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
