import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Mountain,
 Gem,
 Layers,
 Ruler,
 Hammer,
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
 title: "Natural Stone Patio Oakville | Flagstone & Bluestone | McCoy Landscape Group",
 description:
 "Natural stone patios in Oakville, Burlington, Mississauga & Milton. Flagstone, sawn bluestone, limestone and granite laid dry or mortared. 3-year warranty. Call (416) 985-9771.",
 alternates: { canonical: "/services/natural-stone-patio" },
};

const stonePatioTypes = [
 {
 icon: Mountain,
 title: "Irregular flagstone",
 body: "Hand-fitted broken-edge slabs puzzled together on site, joints tightened by eye — the most organic patio surface we build.",
 },
 {
 icon: Gem,
 title: "Sawn-cut bluestone",
 body: "Thermal-finish bluestone cut to true rectangles, laid in ashlar or running pattern for a tailored, architectural terrace.",
 },
 {
 icon: Layers,
 title: "Ontario limestone",
 body: "Quarried buff and grey limestone slabs — soft warm tone, excellent slip resistance, and a natural fit beside stucco or brick homes.",
 },
 {
 icon: Compass,
 title: "Granite paving",
 body: "The densest option we lay — near-zero absorption, brutal freeze-thaw resistance, and colour that barely shifts over decades.",
 },
 {
 icon: Hammer,
 title: "Mortared on concrete",
 body: "Stone bonded to a reinforced concrete slab with polymer-modified mortar — rigid, dead-flat, ideal over existing structural decks.",
 },
 {
 icon: Ruler,
 title: "Dry-laid on aggregate",
 body: "Slabs set on screeded bedding over compacted base — flexes with the ground, drains freely, and lifts cleanly for future service.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Selection & Layout",
 items: [
 "Quarry samples brought to site so you see veining in your own daylight",
 "Thickness spec'd to use — 1 inch sawn for mortar beds, 1.5-2 inch for dry-laid traffic",
 "Slabs dry-fit and chalked before a single joint is filled",
 "Colour blended across pallets so no one corner reads darker than the rest",
 ],
 },
 {
 heading: "Base & Setting",
 items: [
 "Excavation to 8-12 inches depending on soil and whether the patio abuts the foundation",
 "Geotextile separation over Halton clay subgrade, then compacted 3/4-inch clear or Granular A",
 "Bedding screeded to grade with 1.5-2% fall carried away from the house",
 "Mortared work set on a reinforced slab with a bonding slurry, never straight onto sand",
 ],
 },
 {
 heading: "Jointing & Finish",
 items: [
 "Polymeric sand, stone dust, or freeze-thaw-rated mortar joints matched to the build method",
 "Perimeter slabs cut on-site with a wet saw so edges follow the actual house line",
 "Optional penetrating sealer to hold colour depth without a plastic sheen",
 "3-year hardscape warranty covering sink, level, and cracking",
 ],
 },
];

const whyMcCoyBullets = [
 "25+ years hand-fitting natural stone across Oakville and Burlington properties",
 "Alex and Pieter personally lay the feature slabs on every stone terrace",
 "We buy full pallets from Ontario quarries so the colour run stays consistent",
 "In-house wet saw and splitting work — no cuts subcontracted or rushed",
 "We will tell you when manufactured pavers are the smarter spend for your budget",
 "3-year hardscape warranty on sink, level, and cracking",
];

const processSteps = [
 { title: "Free On-Site Consult", body: "We read the grade, soil, and how the patio has to meet the house." },
 { title: "Stone Selection", body: "Samples on site — flagstone, bluestone, limestone, or granite compared in real light." },
 { title: "Detailed Estimate", body: "Square footage, thickness, base depth, jointing method, and edge treatment priced in writing." },
 { title: "Excavate & Build Base", body: "Dig, separate, compact in lifts, screed bedding, then dry-fit the slab layout." },
 { title: "Set, Joint & Walk", body: "Stone set, joints filled and cured, site cleaned, warranty handed over in person." },
];

const faqs = [
 {
 q: "Natural stone or manufactured pavers — which should I actually pick?",
 a: "Natural stone typically runs 30-60% more installed, mostly because slabs vary in thickness and every piece needs hand-fitting. What you buy is depth of colour and a surface that ages rather than fades. Manufactured pavers from Techo-Bloc or Unilock give tighter tolerances, faster installs, and a lower price. We quote both when a client is genuinely torn.",
 },
 {
 q: "Will flagstone survive Ontario freeze-thaw cycles?",
 a: "Dense stone will. Granite and quality bluestone absorb very little water, so there is almost nothing inside the slab to expand when it freezes. Softer sandstones can spall after enough cycles. The bigger risk is not the stone at all — it is a shallow or poorly drained base heaving under it, which is why we excavate deep and use clear stone on clay lots.",
 },
 {
 q: "Dry-laid or mortared on a concrete slab?",
 a: "Dry-laid is our default for ground-level patios in Halton and Peel. It drains, it moves with the soil instead of fighting it, and individual slabs can be lifted years later. Mortared makes sense over an existing structural slab, on rooftop or podium decks, or where you want dead-flat rectangles with pencil-thin joints. Mortared work needs a properly drained slab underneath or the joints eventually let go.",
 },
 {
 q: "What fills the joints between the stones?",
 a: "Three options. Polymeric sand for tight sawn joints under about half an inch — it locks up, resists weeds, and stays flexible. Stone dust or screening for wide irregular flagstone joints where a rustic look is wanted. Freeze-thaw-rated mortar only on mortared-on-concrete builds. Putting rigid mortar joints on a flexible sand-set patio is the single most common failure we get called to fix.",
 },
 {
 q: "The samples all look different from each other. Is that a defect?",
 a: "No — that variation is the product. Natural stone is cut from a seam in the ground, so veining, iron staining, and tone shift from slab to slab and pallet to pallet. We order the full quantity from one quarry run and blend across pallets during layout so the variation is spread evenly rather than pooling in one corner. If you want uniformity, manufactured pavers are the honest answer.",
 },
 {
 q: "How long does a natural stone patio take to build?",
 a: "A 400-500 square foot flagstone terrace usually runs 7-12 working days. Hand-fitting irregular stone is slower than laying pavers — a good mason places maybe 60-80 square feet a day. Sawn bluestone moves faster. Add time for steps, seating walls, or lighting conduit. Spring and summer slots book 6-12 weeks out, and larger scopes 12-16 weeks.",
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

export default function NaturalStonePatioPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/natural-stone-patio`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Natural Stone Patio",
 description:
 "Flagstone, bluestone, limestone, and granite patio construction — dry-laid or mortared — across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Natural Stone Patio", "Flagstone Installation", "Bluestone Patio", "Limestone Paving", "Stone Terrace Construction"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Natural Stone Patio", item: URL },
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
 eyebrow="NATURAL STONE PATIO"
 title="Stone Cut From"
 subtitle="the Ground, Not a Mould"
 opening={
 <>
 Flagstone, sawn bluestone, limestone, and granite terraces built across
 Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to walk your grade with us and see quarry
 samples in your own daylight — every build backed by our 3-year hardscape warranty.
 </>
 }
 imageSrc="/images/03-card-paver-patios.jpg"
 imageAlt="Hand-fitted natural stone patio with irregular flagstone joints on an Oakville property built by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">QUARRIED, NOT MOULDED</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Every Slab Arrives Different —{" "}
 <em className="italic font-light">That Is the Point</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 No two pallets leave a quarry the same. Thickness wanders, tone
 shifts, and edges break where the seam decided they would. A stone
 terrace is built by a mason reading each piece and bedding it to one
 true plane — which is why we price hand-fitting and layout time, not
 square footage alone.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Stone Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE LAY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Flagstone, Bluestone, Limestone, Granite — Set by Hand
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every slab arrives a slightly different thickness and shape. That&apos;s
 the whole appeal — and the reason this work belongs to a mason with a
 trowel and a wet saw, not a crew racing a pallet count.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {stonePatioTypes.map(({ icon: Icon, title, body }) => (
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
 alt="Hand-fitted natural stone terrace with tight joints and cut perimeter slabs in Oakville by McCoy Landscape Group"
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
 Irregular flagstone terrace, dry-laid on clear stone, every
 perimeter slab cut to the house line.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">UNDER THE STONE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 What Decides Whether a Stone Terrace Stays{" "}
 <em className="italic font-light text-[var(--color-accent)]">Flat</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Bedding screeded to a true plane so each slab bears fully, not on three corners",
 "Pallets sorted by thickness before layout — 1 inch for mortar beds, 1.5-2 inch dry-laid",
 "Geotextile between Halton clay and clear stone so the base never pumps full of fines",
 "Joint material matched to the method — rigid mortar on a sand-set patio always lets go",
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
 <em className="italic font-light">in a McCoy Stone Terrace</em>
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
 Fitting Stone Is a Trade{" "}
 <em className="italic font-light">Not a Product Order</em>
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
 <span className="eyebrow text-[var(--color-accent-mid)]">HOW WE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 From Quarry Sample to{" "}
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
 alt={`${s.title} — McCoy Landscape Group natural stone patio process`}
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
 Stone terrace timelines depend on square footage, stone format, and
 how much of the perimeter needs cutting. Most residential patios run
 7–12 working days on site.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Moves the Price of a{" "}
 <em className="italic font-light">Stone Terrace</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Stone patios are priced by the material you choose, the slab
 thickness the build method demands, how much of the perimeter needs
 wet-saw cutting, and how deep the base has to go on your soil.
 Irregular flagstone takes a mason far longer per square foot than
 sawn bluestone. Machine access, jointing method, and lighting
 conduit all move the number. Everything is quoted in writing after
 the on-site assessment.
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
 headingMain="Natural Stone Patio FAQs"
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
