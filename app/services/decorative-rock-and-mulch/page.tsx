import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Mountain,
 Gem,
 Layers,
 Truck,
 Waves,
 Boxes,
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
 title: "Decorative Rock & Mulch Oakville | River Rock, Gravel & Bed Surfacing | McCoy Landscape Group",
 description:
 "Decorative rock and mulch supply and install in Oakville, Burlington, Mississauga & Milton. River rock, pea gravel, granite chip, hardwood and cedar mulch. Call (416) 985-9771.",
 alternates: { canonical: "/services/decorative-rock-and-mulch" },
};

const surfacingTypes = [
 {
 icon: Waves,
 title: "River rock drip lines",
 body: "Rounded 2-4 inch stone along foundations and downspout splash zones where mulch would wash out every storm.",
 },
 {
 icon: Gem,
 title: "Pea gravel paths & side yards",
 body: "Compacted screening base under 3/4-inch pea gravel, held by steel edge so it stays a path, not a spill.",
 },
 {
 icon: Mountain,
 title: "Granite chip & limestone screening",
 body: "Angular stone that locks underfoot — ideal for narrow dog runs, gate approaches, and utility strips.",
 },
 {
 icon: Layers,
 title: "Hardwood, cedar & pine mulch",
 body: "Natural bark mulch installed at 2-3 inches over planted beds to hold moisture and feed the soil back.",
 },
 {
 icon: Boxes,
 title: "Boulders & accent stone",
 body: "Weathered Muskoka granite or armour stone set as anchors, buried a third deep so they read as native.",
 },
 {
 icon: Truck,
 title: "Annual top-ups & material swaps",
 body: "Spring refresh cadence, plus stripping tired stone or matted mulch and replacing it with the right surfacing.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Bed Prep",
 items: [
 "Old material stripped where it has matted, silted, or gone sour",
 "Weeds pulled at the root, not buried under fresh product",
 "Bed edge re-cut or hard edging set so material stays contained",
 "Grade shaped so stone sheds water away from the foundation",
 ],
 },
 {
 heading: "Material & Depth",
 items: [
 "Stone size, colour, and angularity matched to the paver or wall already on site",
 "Mulch at 2-3 inches — deeper smothers roots, thinner lets weeds through",
 "Decorative stone at 2-3 inches over a properly separated subgrade",
 "Volumes calculated by area and depth so you are not paying for a guessed yardage",
 ],
 },
 {
 heading: "Install & Cleanup",
 items: [
 "Material wheeled in on plywood runs — no rutted lawn, no stained driveway",
 "Kept 2-3 inches clear of trunks and stems so bark can breathe",
 "Hard surfaces blown and washed down at the end of each day",
 "Top-up timing and volume noted so next season is a known number",
 ],
 },
];

const whyMcCoyBullets = [
 "We tell you where stone is wrong — planted beds and hot south walls",
 "No dyed-black mulch and no rubber mulch on any McCoy property",
 "Fabric used only where it belongs, and never under a living bed",
 "Yardage measured on site so the truck brings the right load once",
 "Stone colour selected against your existing Techo-Bloc or Unilock tones",
 "Owner-operated — Alex and Pieter pick material at the yard themselves",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Tell us which beds are tired and whether you want stone, mulch, or both." },
 { title: "On-Site Measure", body: "We tape the beds, check drainage and exposure, and calculate real yardage." },
 { title: "Material Selection", body: "Samples compared against your paver, wall, and siding colours before ordering." },
 { title: "Strip, Edge & Install", body: "Old material out, edge defined, new product spread to consistent depth." },
 { title: "Refresh Schedule", body: "We note volumes and timing so next year's top-up is a one-call job." },
];

const faqs = [
 {
 q: "Should I use stone or mulch in my beds?",
 a: "Depends entirely on what is planted. Mulch belongs anywhere there are living perennials, shrubs, or young trees — it breaks down into the soil, moderates root temperature, and holds moisture through a dry Halton August. Stone belongs where nothing needs feeding: foundation drip lines, narrow side yards, dog paths, under downspouts, and around utility pads. Putting stone over a planted bed bakes roots and slowly starves the soil.",
 },
 {
 q: "Do I need landscape fabric underneath?",
 a: "Under decorative stone in a non-planted zone, yes — a woven geotextile keeps stone from sinking into the clay we have across most of Oakville and Burlington. Under mulch in a planted bed, no. Fabric there blocks the mulch from ever reaching the soil, roots mat along the top of it, and in three years you are cutting weeds out of a plastic sheet. Anyone stapling fabric under a garden bed is buying themselves a fast install and you a slow problem.",
 },
 {
 q: "Why will you not install dyed-black or rubber mulch?",
 a: "Dyed mulch is usually ground pallet and construction waste coloured with carbon black — it fades to grey by August, and the wood robs nitrogen from the soil as it breaks down. Rubber mulch never decomposes, holds heat brutally, leaches zinc, and is close to impossible to remove once it works into the soil. Neither belongs on a property we put our name on.",
 },
 {
 q: "How often does mulch need topping up?",
 a: "Once a year for most Oakville-area properties, usually late April into May. Natural bark loses roughly an inch a season as it composts into the bed, which is exactly what it is supposed to do. We top up rather than pile on — if the existing layer is already at depth we strip and fluff instead of adding, because burying a bed under six inches of mulch suffocates the crowns.",
 },
 {
 q: "How much material will my beds need?",
 a: "A cubic yard covers about 160 square feet at two inches, or roughly 110 square feet at three inches. Stone is sold by weight as often as volume, and a yard of river rock runs about 1.3 tonnes. We measure your beds on site rather than eyeballing, because ordering short means a second delivery charge and ordering long means a pile in your driveway you have to deal with.",
 },
 {
 q: "Does decorative stone eliminate weeding?",
 a: "It reduces it substantially, but nothing eliminates it. Organic dust and leaf litter settle into the voids over a few seasons and weed seed germinates in that layer, not in the soil below. A blow-out each fall keeps the debris from accumulating, and a spot treatment in spring handles the rest. Compare that to mulched beds, which need a real weeding pass two or three times a season.",
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

export default function DecorativeRockAndMulchPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="DECORATIVE ROCK & MULCH"
 title="The Right Surface"
 subtitle="Over the Right Bed"
 opening={
 <>
 River rock, pea gravel, granite chip, and natural bark mulch installed
 across Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> and we&apos;ll measure real yardage,
 match stone to your existing hardscape, and tell you where mulch beats
 rock — and where it doesn&apos;t.
 </>
 }
 imageSrc="/images/softscape-hero.jpg"
 imageAlt="River rock drip line and hardwood mulch beds edged against a paver walkway on a McCoy Landscape Group property"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">SURFACE STRATEGY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 The Cheapest Layer on a Property{" "}
 <em className="italic font-light">Is the One Most Often Wrong</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Stone poured over a living bed bakes roots. Bark heaped against
 trunks rots the collar. Fabric under a planted bed guarantees a
 weeding problem three summers out. Surfacing is inexpensive
 material and expensive judgement — which product belongs where,
 how deep it goes, and what keeps it contained.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Surfacing Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE SURFACE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Stone, Gravel, Bark — Matched to the Bed
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Bed surfacing is the cheapest thing on a landscape and the fastest
 thing to get wrong. Depth, containment, and picking stone over bark
 in the correct places is most of the craft.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {surfacingTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/maintenance-detail.jpg"
 alt="Hardwood mulch beds and a river rock drip line separated by steel edging on a Milton property by McCoy Landscape Group"
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
 A RECENT MCCOY REFRESH · MILTON
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 River rock along the foundation, hardwood bark through the
 planted beds, a steel edge holding the line between them.
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
 What Decides Whether Bed Surfacing{" "}
 <em className="italic font-light text-[var(--color-accent)]">Still Reads Next Spring</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Matted or silted material stripped out rather than buried under a fresh layer",
 "Depth held consistent — enough to shade weed seed, not so much it smothers crowns",
 "Woven geotextile only under stone in unplanted zones, never beneath a living root zone",
 "Hard edging or a re-cut spade line so bark and stone stay where they were placed",
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
 What Goes Into Every McCoy Bed Refresh{" "}
 <em className="italic font-light">— The Detail</em>
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
 <em className="italic font-light">Choose McCoy for Bed Surfacing</em>
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
 <em className="italic font-light">Rock &amp; Mulch Process</em>
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
 alt={`${s.title} — McCoy Landscape Group decorative rock and mulch process`}
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
 Most bed surfacing jobs finish in a single day. Properties needing
 old material stripped and hauled usually run two.
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
 <em className="italic font-light">Bed Surfacing</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Surfacing is priced by bed area and installed depth, by the
 material itself — bark is a fraction of river rock by volume — and
 by how much tired product has to come out and be hauled first.
 Edging, wheelbarrow distance from the driveway, and whether a load
 can be dumped near the work shift the labour side more than most
 people expect. All of it is quoted in writing after the on-site
 measure.
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
 Rock &amp; Mulch Across{" "}
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
 headingMain="Rock & Mulch FAQs"
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
 name: "Decorative Rock and Mulch",
 description:
 "River rock, pea gravel, granite chip, and natural bark mulch supplied and installed as bed surfacing across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Decorative Stone Installation", "Mulch Installation", "River Rock", "Bed Surfacing", "Landscape Material Supply"],
 url: "https://mccoylandscapegroup.com/services/decorative-rock-and-mulch",
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
 { "@type": "ListItem", position: 3, name: "Decorative Rock and Mulch", item: "https://mccoylandscapegroup.com/services/decorative-rock-and-mulch" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
