import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Shovel,
 Truck,
 Layers,
 Droplets,
 Calendar,
 Sun,
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
 title: "Sod Installation Oakville | New Lawns, Graded & Rolled | McCoy Landscape Group",
 description:
 "Sod installation in Oakville, Burlington, Mississauga & Milton. Old turf stripped, 4-6in screened topsoil, bluegrass or fescue blends laid same-day and rolled. Call (416) 985-9771.",
 alternates: { canonical: "/services/sod-installation" },
};

const sodTypes = [
 {
 icon: Shovel,
 title: "Full lawn replacement",
 body: "Old turf stripped and hauled, subgrade ripped, and the whole lawn rebuilt from the soil profile up.",
 },
 {
 icon: Layers,
 title: "Kentucky bluegrass blend",
 body: "Three-cultivar bluegrass from Ontario growers — dense, self-repairing by rhizome, and built for full sun.",
 },
 {
 icon: Sun,
 title: "Fescue & shade blends",
 body: "Tall and fine fescue mixes for tree-shaded north sides and lots where deep watering is not happening.",
 },
 {
 icon: Truck,
 title: "Same-day pallet delivery",
 body: "Cut in the morning, laid the same afternoon — sod left rolled overnight in July cooks from the inside.",
 },
 {
 icon: Droplets,
 title: "Grading & drainage correction",
 body: "Re-sloped at 2% minimum away from the foundation, low spots filled, so the lawn drains instead of ponding.",
 },
 {
 icon: Calendar,
 title: "Repair & patch sodding",
 body: "Winter salt damage, grub kill, and construction ruts cut out and re-sodded to blend with existing turf.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Strip & Grade",
 items: [
 "Existing turf cut with a sod cutter and removed off site — never tilled in",
 "Compacted subgrade ripped or raked to break the builder pan",
 "Grade set to fall 2% away from the foundation for the first 6 feet",
 "Sprinkler heads, utilities, and window wells located before the machine moves",
 ],
 },
 {
 heading: "Soil Build",
 items: [
 "4-6 inches of screened triple-mix or garden-grade topsoil placed and levelled",
 "Compost blended into the top layer to feed the root zone through year one",
 "Starter fertiliser high in phosphorus raked in ahead of the sod",
 "Final rake and light roll to remove footprints, ridges, and stone",
 ],
 },
 {
 heading: "Lay & Launch",
 items: [
 "Rolls laid in a staggered brick pattern, seams butted tight, no overlaps or gaps",
 "Edges cut clean to beds, walkways, and paver borders with a knife, not a shovel",
 "Rolled to press the sod mat into full soil contact and eliminate air pockets",
 "First watering done on site, plus a printed 14-day watering schedule",
 ],
 },
];

const whyMcCoyBullets = [
 "Sod goes down the same day the grower cuts it — no pallet sitting in the sun",
 "Full 4-6 inches of screened topsoil, not a 1-inch dusting over builder clay",
 "Grading corrected before sod, so drainage problems get fixed instead of covered",
 "Blend chosen for your actual sun hours, not whatever was on the truck",
 "Rolled after laying — the step most crews skip and the reason seams open up",
 "3-year workmanship warranty on the install; sod material follows grower terms",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Tell us the lawn area, the sun exposure, and how the old lawn failed." },
 { title: "On-Site Measure", body: "We measure square footage, probe soil depth, and check where water sits." },
 { title: "Quote & Install Window", body: "Soil volumes, blend, square footage, and a spring or fall date in writing." },
 { title: "Strip, Grade & Amend", body: "Old turf out, subgrade broken, topsoil and compost placed and levelled." },
 { title: "Lay, Roll & Water In", body: "Sod set the day it is cut, rolled, soaked, and the watering plan handed over." },
];

const faqs = [
 {
 q: "When is the best time to install sod in Oakville?",
 a: "Late April through early June, and late August through mid-October. Those windows give cool air, warm soil, and reliable rain — sod knits in within two weeks with modest watering. Mid-July is the risky one: soil temperatures spike, the sod is transpiring hard with no root system, and it needs heavy daily water just to survive. We will install in July if you need it, but we tell you plainly what it will demand of you.",
 },
 {
 q: "How much water does new sod need, and for how long?",
 a: "Days 1 to 7, water every single day until the soil under the mat is wet to a finger depth — usually 20 to 30 minutes per zone, morning and late afternoon in hot weather. Days 8 to 14, drop to every other day but water longer. After that, taper to two or three deep soakings a week to drive roots down. Shallow daily watering past week three is what creates a lawn that dies the first time you go away.",
 },
 {
 q: "Why strip the old lawn instead of laying sod over it?",
 a: "Sod laid over existing turf sits on a decomposing mat that holds water, breeds fungus, and stops new roots from reaching soil. It also raises the lawn grade an inch or two, which pushes water toward the house and buries the bottom of your siding. We cut and haul the old turf every time. It is more labour and more disposal, and it is the difference between a lawn at year five and a lawn at year one.",
 },
 {
 q: "Bluegrass or fescue for my lot?",
 a: "Kentucky bluegrass blend is the default across Halton and Peel — it spreads by rhizome so it repairs its own wear patches, and it takes full sun and kid traffic well. It does want water. If your lot is heavily shaded by mature maples, or you know you will not irrigate, a tall fescue blend is the smarter call: deeper rooting, far more drought tolerant, tolerates shade, but it clumps rather than spreading so worn patches need overseeding.",
 },
 {
 q: "When can I first mow and fertilise?",
 a: "First cut is usually 14 to 21 days in, once you cannot lift a corner of a roll by hand. Set the deck high — 3 inches or more — use sharp blades, and mow when the surface is dry so tires do not skid the mat. Skip the first cut if the sod still lifts. First real fertiliser goes down about six weeks after install; the starter fertiliser we rake in beforehand carries it until then.",
 },
 {
 q: "What can go wrong, and what do you warranty?",
 a: "The two common failures are underwatering in the first fortnight and seams drying out and shrinking, which shows up as brown lines across the lawn. Both are watering-driven, which is why we walk the schedule with you before we leave. Our installation workmanship — grade, soil depth, seam layout, rolling — carries a 3-year workmanship warranty. Sod itself is a living product and follows supplier-grower terms, contingent on the watering plan being followed.",
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

export default function SodInstallationPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="SOD INSTALLATION"
 title="A New Lawn Built"
 subtitle="From the Soil Up"
 opening={
 <>
 Old turf stripped, grade corrected, 4-6 inches of screened topsoil, and
 fresh sod laid the day it is cut — across Oakville, Burlington,
 Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to book a spring or fall install window
 before the calendar fills.
 </>
 }
 imageSrc="/images/maintenance-hero.jpg"
 imageAlt="Fresh sod rolls being laid in a staggered brick pattern over graded screened topsoil on an Oakville lawn install"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE SOIL PROFILE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Lawn Is Only as Good as{" "}
 <em className="italic font-light">the Six Inches Beneath It</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Most West GTA subdivisions were stripped, backfilled with compacted
 clay, dusted with a thin skim of topsoil, and sodded the week before
 closing. That lawn greens up for one season and stalls for the next
 twenty. We rebuild the profile before a single roll lands, because
 roots go where the soil lets them.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Sod Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE LAY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Strip, Grade, Amend, Lay — No Shortcuts
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Anyone can unroll sod. The lawn that still looks good in year
 four is decided by what happens underneath it — the grade, the
 depth of soil, and how fast the rolls get off the pallet.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {sodTypes.map(({ icon: Icon, title, body }) => (
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
 alt="New sod lawn laid over freshly graded screened topsoil on an Oakville property by McCoy Landscape Group"
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
 A RECENT MCCOY LAWN · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Full lawn replacement — old turf hauled, grade re-cut off the
 foundation, screened topsoil in, sod down the same afternoon.
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
 What Decides Whether a New Lawn{" "}
 <em className="italic font-light text-[var(--color-accent)]">Survives Year Three</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Four to six inches of screened topsoil over a subgrade that has been ripped, not just raked",
 "Compost turned through the root zone so year-one growth is not fertiliser-dependent",
 "Grade re-cut to fall away from the foundation before any soil is placed",
 "Seams butted tight and the whole mat rolled into full soil contact — no air pockets",
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
 What Goes Into Every McCoy Lawn{" "}
 <em className="italic font-light">— The Groundwork</em>
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
 <em className="italic font-light">Choose McCoy for New Lawns</em>
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
 <em className="italic font-light">Sod Installation Process</em>
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
 alt={`${s.title} — McCoy Landscape Group sod installation process`}
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
 Most residential lawn replacements run one to three days on site.
 Spring and fall install windows book out early — call ahead of the
 season you want.
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
 <em className="italic font-light">New Lawn Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Sod pricing follows square footage, how much old turf has to come
 out and get hauled, the volume of screened topsoil the lot
 actually needs, and how badly the grade has to be corrected before
 soil goes down. Access matters too — a fenced backyard reached by
 wheelbarrow is a different labour picture than a front lawn a
 machine can drive onto. Everything is quoted in writing after the
 on-site measure.
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
 Sod Installation Across{" "}
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
 headingMain="Sod Installation FAQs"
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
 name: "Sod Installation",
 description:
 "New lawn installation with turf stripping, grading, screened topsoil, and same-day sod laying across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Sod Installation", "New Lawn Installation", "Lawn Grading", "Topsoil Supply", "Lawn Repair"],
 url: "https://mccoylandscapegroup.com/services/sod-installation",
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
 { "@type": "ListItem", position: 3, name: "Sod Installation", item: "https://mccoylandscapegroup.com/services/sod-installation" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
