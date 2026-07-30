import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 PencilRuler,
 Compass,
 ArrowUpDown,
 Square,
 Brush,
 Leaf,
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
 title: "Garden Bed Design Oakville | Bed Shape, Layering & Edging | McCoy Landscape Group",
 description:
 "Garden bed design in Oakville, Burlington, Mississauga & Milton. Bed lines, scale, layering, four-season structure, and edging planned before a single plant. Call (416) 985-9771.",
 alternates: { canonical: "/services/garden-bed-design" },
};

const bedDesignTypes = [
 {
 icon: Compass,
 title: "Bed line & shape",
 body: "Sweeping curves for traditional lots, or crisp architectural lines that echo a modern facade — drawn before we dig.",
 },
 {
 icon: ArrowUpDown,
 title: "Height layering",
 body: "Three tiers minimum — groundcover, mid-mass, and anchor — so the bed reads as depth rather than a flat row.",
 },
 {
 icon: Leaf,
 title: "Four-season structure",
 body: "Evergreen bones and winter form built in first, then bloom sequence layered on top of that skeleton.",
 },
 {
 icon: PencilRuler,
 title: "Foundation plantings",
 body: "Beds proportioned to house height so the facade sits in a landscape instead of on a mowed slab.",
 },
 {
 icon: Square,
 title: "Island & feature beds",
 body: "Free-standing beds shaped to be read from every side, with a clear centre of gravity and no back row.",
 },
 {
 icon: Brush,
 title: "Colour palette planning",
 body: "Two or three colour families repeated through the bed — restraint is what makes a garden look designed.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Design Phase",
 items: [
 "Bed lines laid out in paint or hose on site and viewed from the street and the kitchen window",
 "Bed depth scaled to house height — a two-storey facade needs 6-8 feet, not 3",
 "Sun, shade, wind, and downspout mapping before a single species is chosen",
 "Plan drawn with mature sizes shown, not nursery-pot sizes",
 ],
 },
 {
 heading: "Structure & Layering",
 items: [
 "Evergreen anchors placed first to hold the bed through a Halton winter",
 "Repetition rhythm set — odd-numbered groupings, repeated three or more times",
 "Bloom calendar sequenced so something is carrying the bed every month from April to October",
 "Seedheads and grasses left standing for winter form and snow contrast",
 ],
 },
 {
 heading: "Build Detail",
 items: [
 "Bed excavated and backfilled to 12-18 inches of workable soil, deeper for shrub masses",
 "Edging specified: spade-cut, steel, aluminum, or a paver soldier course",
 "Grade shaped with a slight crown so beds shed water instead of holding it",
 "Bed plan handed over with a planting key and a maintenance rhythm",
 ],
 },
];

const whyMcCoyBullets = [
 "Beds designed on site at full scale — not sketched from a satellite photo",
 "Bed lines drawn to relate to the house, driveway, and hardscape already there",
 "Winter structure planned first, because that is half the Ontario year",
 "We size beds for mature plants, so year five looks better than year one",
 "Design and build under one roof — nothing is lost in a contractor handoff",
 "3-year workmanship warranty on the build; plant material follows supplier terms",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Tell us which beds feel wrong and how much upkeep you actually want." },
 { title: "On-Site Design Walk", body: "We paint bed lines, sight them from the street, and adjust until they read." },
 { title: "Bed Plan & Estimate", body: "Shape, depth, layering, edging, and soil volumes drawn and priced." },
 { title: "Shape, Amend & Edge", body: "Beds cut, soil built up, edging set, and the whole outline locked in." },
 { title: "Plant & Hand Over", body: "Material placed to plan, mulched, and a planting key left with you." },
];

const faqs = [
 {
 q: "My beds look thin and stringy against the house. Why?",
 a: "Almost always scale. Builder beds get cut at three feet deep regardless of house height, and a two-storey Oakville facade needs six to eight feet to look balanced. The fix is rarely more plants — it is a deeper bed line with proper layering. Widening a bed by three feet costs a fraction of what people spend replanting the same narrow strip over and over.",
 },
 {
 q: "Curved beds or straight lines?",
 a: "It follows the architecture. A traditional centre-hall or Georgian home carries long sweeping curves well, and the curves need to be genuinely long — one or two big arcs, not a wobbly scallop every four feet. Modern flat-roof and stone-clad builds want straight runs and hard corners that pick up the geometry of the house. Mixing both on one property is the usual reason a garden looks busy without anyone knowing why.",
 },
 {
 q: "How do I get a bed that still looks like something in February?",
 a: "Structure before flowers. We place evergreen anchors — boxwood, yew, spruce, dwarf conifers — first, so the bed has a shape when everything else is dormant. Then ornamental grasses and perennials with strong seedheads get left standing rather than cut down in fall, and a red-twig dogwood or a birch clump gives colour against snow. Design that way and the bloom season becomes a bonus, not the whole point.",
 },
 {
 q: "What edging do you recommend?",
 a: "Spade-cut edge is the cleanest look and costs the least, but needs re-cutting each spring. Steel and aluminum edging holds a crisp line for a decade and disappears visually, which is why we spec it most often on modern designs. A paver soldier course is the most permanent, lets you run a mower wheel right along it, and ties the bed to existing Techo-Bloc or Unilock hardscape. We match the choice to the maintenance you want to do.",
 },
 {
 q: "How deep does the soil actually need to be?",
 a: "Twelve inches of workable soil for perennials and eighteen or more for shrub masses. Most West GTA subdivisions were stripped and then backfilled with compacted clay subsoil under four inches of thin topsoil — plants stall in that permanently. We excavate the bed, break the pan, and blend compost into a real soil profile. This is the single largest cost line people do not expect and the one that decides whether the bed thrives.",
 },
 {
 q: "Can you redesign existing beds instead of starting over?",
 a: "Often, yes. Plenty of properties have good mature material sitting in a badly shaped bed. We can re-cut the bed line, transplant what is worth keeping — early spring or fall is the window for that — build up the soil, and fill the gaps. Redesigning around existing anchors usually costs less than a clear-out and gets you a mature-looking bed immediately.",
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

export default function GardenBedDesignPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="GARDEN BED DESIGN"
 title="The Bed Is the Design"
 subtitle="Before the Plants Are"
 opening={
 <>
 Bed shape, scale, layering, and edging designed on site across Oakville,
 Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> and we&apos;ll paint the lines at full
 size in your yard before anything gets planted — because a good bed line
 makes ordinary plants look intentional.
 </>
 }
 imageSrc="/images/maintenance-detail.jpg"
 imageAlt="Layered garden bed with a crisp curved edge, evergreen anchors, and ornamental grasses on a McCoy Landscape Group design"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">GEOMETRY FIRST</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Bed Line Does More{" "}
 <em className="italic font-light">Than Any Plant List</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Widen the bed, sweep the line so it answers the roofline, and give
 the planting three real tiers of height — the same shrubs
 suddenly look deliberate. Species selection matters, but it is the
 shape of the ground that decides whether a garden reads as
 designed or merely decorated.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Bed Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE DESIGN</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Line, Scale, Layer, Edge — In That Order
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Most disappointing gardens are not a plant problem. The bed was
 too narrow, the line fought the house, and everything got planted
 in a single row. We fix the geometry first.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {bedDesignTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/softscape-hero.jpg"
 alt="Re-cut foundation garden bed with evergreen anchors and a steel edge holding the curve, designed by McCoy Landscape Group"
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
 A RECENT MCCOY DESIGN · MISSISSAUGA
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Foundation bed re-cut to full depth, evergreen anchors set
 first, steel edge holding one long unbroken curve.
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
 What Sits Under a Bed{" "}
 <em className="italic font-light text-[var(--color-accent)]">That Keeps Getting Better</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Twelve to eighteen inches of workable soil, with the builder clay pan broken before backfill",
 "Compost turned through the full root zone rather than dressed across the surface",
 "Beds crowned and drained away from the foundation so crowns never sit wet",
 "Steel, aluminum, or spade-cut edge set deep enough to stop lawn roots crossing the line",
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
 What Goes Into Every McCoy Bed{" "}
 <em className="italic font-light">— The Layout</em>
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
 <em className="italic font-light">Choose McCoy for Bed Design</em>
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
 <em className="italic font-light">Garden Bed Design Process</em>
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
 alt={`${s.title} — McCoy Landscape Group garden bed design process`}
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
 Bed shaping and soil work usually runs a few days on site. Planting
 is scheduled into the spring or fall window that suits the material
 being installed.
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
 <em className="italic font-light">Garden Bed Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Bed design is priced by the length of line being re-cut, how much
 soil has to be excavated and replaced to reach a real root depth,
 the edging you select, and whether mature material is being kept
 and transplanted rather than cleared. A refresh of an established
 bed and a full re-shape down to clay are different jobs. All of it
 is quoted in writing after the on-site design walk.
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
 Bed Design Across{" "}
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
 headingMain="Garden Bed Design FAQs"
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
 name: "Garden Bed Design",
 description:
 "Garden bed shape, scale, layering, four-season structure, and edging design for properties across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Garden Bed Design", "Planting Design", "Foundation Planting", "Bed Edging", "Landscape Layout"],
 url: "https://mccoylandscapegroup.com/services/garden-bed-design",
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
 { "@type": "ListItem", position: 3, name: "Garden Bed Design", item: "https://mccoylandscapegroup.com/services/garden-bed-design" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
