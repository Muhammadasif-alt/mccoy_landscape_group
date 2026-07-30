import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 ChefHat,
 Home as HomeIcon,
 ArrowRightLeft,
 Waves,
 Layers as LayersIcon,
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
 title: "Paver Patio Contractor Oakville | McCoy Landscape",
 description:
 "Custom paver patios & walkways across Oakville, Burlington & Mississauga. Techo-Bloc, Unilock, Permacon. 3-year warranty. Call (416) 985-9771 for a free quote.",
 alternates: { canonical: "/services/paver-patios" },
};

const patioTypes = [
 {
 icon: ChefHat,
 title: "Backyard entertaining patios",
 body: "Dining zones, lounge areas, and fire features laid out for how you actually host.",
 },
 {
 icon: HomeIcon,
 title: "Front entry walkways & landings",
 body: "Curb-appeal brick paver walkway Mississauga installs with elegant transitions to front doors.",
 },
 {
 icon: ArrowRightLeft,
 title: "Side-yard & courtyard walkways",
 body: "Narrow-space paver runs connecting gates, side doors, and backyards.",
 },
 {
 icon: Waves,
 title: "Pool deck pavers",
 body: "Slip-resistant, heat-resistant paver surrounds for inground and above-ground pools.",
 },
 {
 icon: LayersIcon,
 title: "Multi-level step-down patios",
 body: "Tiered builds that handle grade changes with integrated steps and seating walls.",
 },
 {
 icon: Droplets,
 title: "Permeable paver installations",
 body: "Drainage-conscious lots, eco-conscious homeowners, and problem drainage areas.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Base Work",
 items: [
 "Demolition and removal of existing concrete or old pavers",
 "Excavation to the right depth for Ontario freeze–thaw (typically 8–12 inches below finished grade)",
 "Base prep with compacted aggregate in lifts",
 "Geotextile fabric for unstable soils or problem drainage",
 ],
 },
 {
 heading: "Materials & Installation",
 items: [
 "Techo-Bloc, Unilock, or Permacon pavers — matched to scope and lot",
 "Edge restraint spiked into the sub-base around the full perimeter",
 "Polymeric sand jointing, compacted and activated",
 "Steps, borders, inlays, and transitions built as one scope",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Post-install cleanup and wash-down",
 "Care and maintenance guide at handoff",
 "3-year warranty activation",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ hardscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated — Alex and Pieter on every major build",
 "Techo-Bloc, Unilock, and Permacon premium supplier options",
 "Base prep depths built for Ontario freeze–thaw — not shortcut",
 "Clean crews, respectful job sites, daily communication",
 "3-year warranty covering sink, level, and cracking replacement",
];

const processSteps = [
 {
 title: "Initial Call or Form",
 body: "Share your goals, space, and timeline.",
 },
 {
 title: "On-Site Consultation",
 body: "We walk the property, measure, assess drainage and access.",
 },
 {
 title: "Design & Detailed Estimate",
 body: "Layout, materials, and investment in writing.",
 },
 {
 title: "Build & Daily Cleanup",
 body: "Owner-led crew, clear communication, clean job site.",
 },
 {
 title: "Final Walkthrough & 3-Year Warranty",
 body: "Confirm every detail, hand off care tips.",
 },
];

const faqs = [
 {
 q: "How much does a paver patio cost in Oakville or Burlington?",
 a: "Every patio is priced to the lot, layout, and feature mix. A simple rear dining patio is one investment range; a full outdoor living space with walls, fire, and pergola is another. We quote in writing after an on-site walk so you see real numbers, not estimates based on square footage alone.",
 },
 {
 q: "What's the difference between brick pavers and interlocking?",
 a: '"Interlocking" and "paver" get used interchangeably in West GTA — they usually mean the same thing: individual concrete or clay units set over a compacted base. What actually matters is the manufacturer (Techo-Bloc, Unilock, Permacon), the thickness rating for residential versus driveway use, and the base prep underneath.',
 },
 {
 q: "How long does a paver patio installation take?",
 a: "Most McCoy patio builds run 1–3 weeks on-site once excavation starts, depending on size, access, and whether we're integrating walls, fire, or drainage work. Peak-season projects book 6–12 weeks ahead, so the earlier you reach out, the better your timeline options.",
 },
 {
 q: "What maintenance does a paver patio need?",
 a: "Minimal, done right. Expect a light pressure wash once or twice a year, polymeric sand top-up every 3–5 years depending on traffic, and re-sealing every 5–7 years if you want that fresh-install look maintained. We include a care guide at handoff with product recommendations.",
 },
 {
 q: "Can you replace an existing concrete patio with pavers?",
 a: "Almost always, yes. Existing concrete usually gets demolished and hauled off, the sub-base gets re-excavated and re-prepped, and new pavers go down on a proper base. The finished look is a full upgrade — and a paver patio is replaceable section-by-section later if anything ever shifts.",
 },
 {
 q: "Do you use Techo-Bloc, Unilock, or Permacon — and why?",
 a: "All three, depending on the project. Techo-Bloc has the widest premium line and is our most-recommended option. Unilock has a strong traditional range. Permacon covers solid mid-tier options when budget matters. We walk you through the look, durability profile, and cost of each during the design phase.",
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

export default function PaverPatiosPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="PAVER PATIOS & WALKWAYS"
 title="Paver Patios & Walkways"
 subtitle="Built to Last in Oakville"
 opening={
 <>
 Custom paver patio and walkway installation in Oakville,
 Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation —
 every patio we build is backed by our 3-year warranty covering
 sink, level, and cracking replacement.
 </>
 }
 imageSrc="/images/03-card-paver-patios.jpg"
 imageAlt="Backyard paver patio with seating wall and fire pit in Oakville by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN-BUILD PATIOS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 The Patio You&apos;ll Actually Use —{" "}
 <em className="italic font-light">Scoped for How You Live</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 Most West GTA backyards have an underused patio nobody planned for.
 Plain concrete that cracks. Pavers that sink. A layout that
 doesn&apos;t match how anyone actually eats, hosts, or relaxes
 outside. The patio exists — it just doesn&apos;t work. And
 replacing it costs more than building it right the first time.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 McCoy designs paver patio builds around how you live — dining
 zones, lounge spaces, fire features, and circulation that flows.
 Every interlocking patio install starts with site assessment,
 proper base prep, and drainage before the first paver goes down.
 </p>
 </div>
 {/* Wave seam: white rises up out of next section into cream */}
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Patio Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Custom Paver Patio &amp; Walkway Configurations
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 No two McCoy patios are identical — here are the configurations
 we build most often across Oakville, Burlington, Mississauga, and Milton homes.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {patioTypes.map(({ icon: Icon, title, body }) => (
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

 {/* Full-width photo accent — image itself has wavy top edge (white wave
 overlays the photo's top, no dark band, no hard seam). */}
 <section className="relative">
 <div className="relative h-[320px] md:h-[460px] overflow-hidden">
 <Image
 src="/images/09-showcase-signature-build.jpg"
 alt="Premium paver patio with stone seating wall and fire feature in Oakville by McCoy Landscape Group"
 fill
 className="object-cover"
 />
 {/* Subtle dark gradient for caption legibility */}
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0.25) 0%,rgba(15,20,17,0) 35%,rgba(15,20,17,0.55) 100%)",
 }}
 />
 {/* Wave on TOP of the image — white wave covers the photo's top edge,
 giving the image itself a wavy top. The BOTTOM of the image
 meets the dark Optional Features section as a clean straight
 horizontal line — no wave there. */}
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
 Stone seating wall, integrated fire feature, Techo-Bloc paver
 surround — built in a single scope.
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
 The Details That Turn a Patio Into{" "}
 <em className="italic font-light text-[var(--color-accent)]">a Room</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Built-in seating walls with integrated low-voltage lighting",
 "Custom inlay borders, banded accents, and signature paver patterns",
 "Integrated fire pits (wood or gas) and pergola connections",
 "Engineered drainage and grade transitions that hold the patio level",
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
 {/* Wave seam: white rises out of next into dark */}
 <WaveDivider toColor="#ffffff" variant="calm" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* What's Included */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-14">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE SCOPE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Every McCoy Paver Patio Build{" "}
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

 {/* Why McCoy — reuse TrustStrip pattern as visual anchor + custom bullets below */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.14} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Why Oakville Homeowners{" "}
 <em className="italic font-light">Choose McCoy for Paver Patios</em>
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

 {/* Process — 5 steps with photo accents */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12 md:mb-16">
 <span className="eyebrow text-[var(--color-accent-mid)]">HOW WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Our 5-Step{" "}
 <em className="italic font-light">Paver Patio Process</em>
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
 alt={`${s.title} — McCoy Landscape Group paver patio process`}
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
 Most paver patio builds take 1–3 weeks on-site once we start. Peak
 season books 6–12 weeks ahead — call early.
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
 <em className="italic font-light">Paver Patio Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every patio is scoped to lot size, layout, feature integration,
 and material selection — no flat &ldquo;per square foot&rdquo;
 quoting that misses the real story. We build the written
 estimate after the on-site visit so the number you see is the
 number you pay. No surprises, no escalations.
 </p>
 </div>
 </div>
 </section>

 {/* Service Areas — photo cards per city */}
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

 {/* FAQ — canonical FAQBlock (matches homepage). Flat, not accordion (SEO). */}
 <FAQBlock
 headingMain="Paver Patio FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 {/* Reuse FinalCTA + Footer from homepage */}
 <FinalCTA />
 <Footer />
 <JsonLd

 data={{

 "@context": "https://schema.org",

 "@graph": [
 {
 "@type": "Service",
 name: "Paver Patio Installation",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 url: "https://mccoylandscapegroup.com/services/paver-patios",
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
 { "@type": "ListItem", position: 3, name: "Paver Patios", item: "https://mccoylandscapegroup.com/services/paver-patios" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
