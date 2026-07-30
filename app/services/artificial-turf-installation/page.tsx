import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Layers,
 Droplets,
 Sun,
 Ruler,
 Anchor,
 ShieldCheck,
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
 title: "Artificial Turf Installation Oakville | Shade, Dogs & Putting Greens | McCoy Landscape Group",
 description:
 "Artificial turf installation in Oakville, Burlington, Mississauga & Milton. Engineered base, pet infill, putting greens, shaded yards. 15-20 year turf life. Call (416) 985-9771.",
 alternates: { canonical: "/services/artificial-turf-installation" },
};

const turfTypes = [
 {
 icon: Layers,
 title: "Deep-shade lawn replacement",
 body: "North-facing yards and heavy tree canopy where sod has failed twice already — turf holds colour with zero light.",
 },
 {
 icon: Anchor,
 title: "Dog runs & pet areas",
 body: "Short pile, antimicrobial zeolite infill, and a free-draining base so urine flushes through instead of sitting.",
 },
 {
 icon: Ruler,
 title: "Backyard putting greens",
 body: "Nylon putting surface rolled to a target stimp, with cup cutting, fringe collar, and contoured base shaping.",
 },
 {
 icon: Sun,
 title: "Rooftop terraces & small urban lots",
 body: "Lightweight turf over drainage board or pedestal decking where soil depth and irrigation simply are not options.",
 },
 {
 icon: Droplets,
 title: "Pool surrounds & splash zones",
 body: "Chlorine-stable fibres and permeable backing around pool decks, so nothing tracks mud back onto the coping.",
 },
 {
 icon: ShieldCheck,
 title: "Turf inlays in hardscape",
 body: "Green ribbons between paver treads or around a fire lounge, edged in aluminum so lines stay razor straight.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Base Build",
 items: [
 "Excavation to 4-6 inches, deeper under dog runs and putting surfaces",
 "Geotextile separation fabric over subgrade to stop base migration",
 "Compacted 3/4-inch clear or HPB granular, laser-checked for plane",
 "Screeded bedding layer compacted to 90% before a single roll lands",
 ],
 },
 {
 heading: "Turf & Infill",
 items: [
 "Pile height 25-40mm and face weight matched to traffic, not to a showroom sample",
 "Rolls run in one direction so blade lean reads uniform from the patio door",
 "Seams glued on tape and hand-tufted closed — no visible zipper line",
 "Silica sand infill standard; antimicrobial zeolite blend for pet installs",
 ],
 },
 {
 heading: "Edges & Handover",
 items: [
 "Perimeter secured with 6-inch spikes, timber nailer, or aluminum restraint",
 "Trimmed tight to paver, coping, and wall faces with no gapping",
 "Power-broomed to stand the pile and lock infill to depth",
 "Grooming schedule, cleaning products, and manufacturer warranty paperwork",
 ],
 },
];

const whyMcCoyBullets = [
 "We build turf bases the way we build patio bases — same compaction standard",
 "Honest assessment first: if sod will thrive on your lot, we say so",
 "Drainage rates verified on site, not assumed from a spec sheet",
 "Owner-operated — Alex and Pieter set the base grade on every turf job",
 "Turf supplied through Ontario distributors with real warranty backing",
 "3-year workmanship warranty on base, seams, and edge restraint",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Tell us the area, the use — dogs, putting, shade — and the finish you want." },
 { title: "On-Site Assessment", body: "We probe the subgrade, check drainage, and measure roll direction and seam layout." },
 { title: "Turf Spec & Quote", body: "Pile, face weight, infill, base depth, and edge restraint priced line by line." },
 { title: "Excavate & Build Base", body: "Dig out, fabric, granular in lifts, compact, and screed to a true plane." },
 { title: "Lay, Seam & Groom", body: "Rolls set, seams closed, edges fastened, infill brushed in, site swept clean." },
];

const faqs = [
 {
 q: "Does artificial turf survive Ontario freeze-thaw?",
 a: "Yes, and better than sod does. The turf fibres stay flexible well below freezing, and the failure risk is never the turf itself — it is the base. Our clear-stone base drains rather than holding water, so there is nothing to freeze into a lens and heave the surface. A poorly built base on limestone screenings is what pumps and ripples by year three.",
 },
 {
 q: "How hot does it get in full sun?",
 a: "In direct July sun a turf surface can run noticeably hotter than sod — that is physics, not a product defect. It cools within minutes of shade or a hose rinse. If your lot is a wide-open south exposure with kids barefoot all summer, we will usually recommend turf for the shaded zones and sod or a paver terrace for the sun. Lighter thatch colours and cooling infills help, but they do not eliminate it.",
 },
 {
 q: "What about dog urine and odour?",
 a: "This is where the base decides everything. We run a fully open-graded clear-stone base with no fines, so liquid passes straight through instead of pooling in a screening layer. Antimicrobial zeolite infill traps ammonia between rinses. Hose the area weekly in summer and an enzyme cleaner monthly and there is no smell — the complaints you read about are almost always compacted-fines bases.",
 },
 {
 q: "How does the 10-year cost compare to sod?",
 a: "Turf costs roughly three to five times a sod install up front. Sod then draws water, fertiliser, mowing, aeration, overseeding, and grub treatment every season. On a small shaded Oakville lot where the sod keeps failing and needs replacing, turf usually pulls ahead somewhere between years six and nine. On a big sunny lot with healthy grass, it rarely pays back — we will tell you that at the estimate.",
 },
 {
 q: "Is it genuinely zero maintenance?",
 a: "No, and anyone promising that is selling. Expect a cross-direction power broom once or twice a year to stand the pile, leaf blowing in fall, a rinse after pets, and an infill top-up around year five to seven in high-traffic lanes. That is maybe two hours a season versus roughly thirty for a mowed lawn — but it is not nothing.",
 },
 {
 q: "How long will it last and what is warrantied?",
 a: "Quality turf carries a 15-year manufacturer UV and fibre warranty and typically looks good for 15-20 years before the pile flattens in walked lanes. Our base and installation workmanship carries a 3-year workmanship warranty covering settlement, seam separation, and edge lift; the turf material itself follows supplier terms. Cheap big-box turf fades and mats in five to seven years, which is why we do not install it.",
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

export default function ArtificialTurfInstallationPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="ARTIFICIAL TURF INSTALLATION"
 title="Green Where Grass"
 subtitle="Refuses to Grow"
 opening={
 <>
 Synthetic turf for deep-shade yards, dog runs, putting greens, and
 tight urban lots across Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> and we&apos;ll tell you honestly whether
 turf or sod is the right call for your lot — then build the base to hold it.
 </>
 }
 imageSrc="/images/maintenance-hero.jpg"
 imageAlt="Artificial turf lawn installed over a compacted granular base with aluminum edge restraint on an Oakville backyard"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHEN GRASS LOSES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Synthetic Turf Is a Base Job{" "}
 <em className="italic font-light">Wearing a Green Jacket</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every synthetic lawn that ripples, puddles, or smells was built on
 the wrong stone. Fibre colour and pile height are the easy
 decisions. What holds a turf surface flat and odour-free through a
 Halton winter is open-graded aggregate, honest compaction, and a
 perimeter anchored so nothing lifts.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Turf Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHERE TURF WINS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Shade, Dogs, Putting, Rooftops — The Hard Cases
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Turf is not a lawn substitute everywhere. It is a fix for the
 specific spots where grass keeps losing — and the whole install
 lives or dies on the base underneath it.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {turfTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/03-card-paver-patios.jpg"
 alt="Artificial turf panel set flush into paver hardscape with aluminum edge restraint in Burlington by McCoy Landscape Group"
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
 Shaded side yard converted to turf — clear-stone base, aluminum
 restraint, seams hand-tufted closed against the paver edge.
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
 What Keeps Synthetic Turf{" "}
 <em className="italic font-light text-[var(--color-accent)]">Flat and Odour-Free</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Open-graded clear stone under the turf so liquid drains through instead of sitting in fines",
 "Geotextile separation over the subgrade so the base never migrates into West GTA clay",
 "Base built in lifts, compacted, and screeded to a true plane before a roll is unwrapped",
 "Perimeter locked in aluminum, timber nailer, or spike so edges never lift or curl",
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
 <span className="eyebrow text-[var(--color-accent-mid)]">THE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 What Goes Under Every McCoy Turf Lawn{" "}
 <em className="italic font-light">— The Base</em>
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
 <em className="italic font-light">Choose McCoy for Turf</em>
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
 <em className="italic font-light">Turf Installation Process</em>
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
 alt={`${s.title} — McCoy Landscape Group artificial turf process`}
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
 Turf installs typically run two to five days on site, depending on
 area, base depth, and how much excavation and disposal the lot
 requires.
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
 <em className="italic font-light">a Turf Installation</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Turf is priced by area, by how deep the base has to go for the
 intended use, and by the pile, face weight, and infill spec you
 choose. Excavation and disposal on a clay lot, the edge restraint
 the perimeter needs, and whether material can be machined in or
 has to be wheeled through a gate all move the labour side as much
 as the turf itself does. Everything is quoted in writing after the
 on-site assessment.
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
 Turf Installs Across{" "}
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
 headingMain="Artificial Turf FAQs"
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
 name: "Artificial Turf Installation",
 description:
 "Synthetic turf installation for shaded yards, dog runs, putting greens, and small urban lots across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Artificial Turf Installation", "Synthetic Lawn", "Pet Turf", "Putting Greens", "Turf Base Construction"],
 url: "https://mccoylandscapegroup.com/services/artificial-turf-installation",
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
 { "@type": "ListItem", position: 3, name: "Artificial Turf Installation", item: "https://mccoylandscapegroup.com/services/artificial-turf-installation" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
