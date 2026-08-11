import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Sprout,
 ShieldCheck,
 Sparkles,
 Trees,
 Ruler,
 LayoutGrid,
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
 title: "Artificial Turf Installation Oakville | Pet & Play Turf | McCoy Landscape Group",
 description:
 "Custom artificial turf installation in Oakville, Burlington, Mississauga & Milton. Pet, play & full-lawn turf on a proper drainage base. Call (416) 985-9771.",
 alternates: { canonical: "/services/artificial-turf-installation" },
};

const turfTypes = [
 {
 icon: Sprout,
 title: "Full lawn turf",
 body: "Green, even lawns with no mowing or watering.",
 },
 {
 icon: ShieldCheck,
 title: "Pet-friendly turf",
 body: "Durable, drainable turf built for dogs and pet traffic.",
 },
 {
 icon: Sparkles,
 title: "Play area turf",
 body: "Soft, safe turf surfaces for kids and play sets.",
 },
 {
 icon: Trees,
 title: "Shaded yard turf",
 body: "A green solution for yards where grass will not grow.",
 },
 {
 icon: Ruler,
 title: "Putting greens",
 body: "Custom backyard putting greens with true roll.",
 },
 {
 icon: LayoutGrid,
 title: "Turf and paver combos",
 body: "Turf blended with paver paths and patio areas.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Base Work",
 items: [
 "Removal of old grass, soil, or surface",
 "Excavation to the right depth for a drainage base",
 "Compacted aggregate base built in lifts",
 "Grading so water drains away, not pools",
 ],
 },
 {
 heading: "Materials & Installation",
 items: [
 "Quality artificial turf matched to your use and look",
 "Turf secured with the right edging and fasteners",
 "Seams joined tight for a natural, even surface",
 "Infill brushed in for feel and blade support",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Full cleanup of the area",
 "Care and maintenance guide at handoff",
 "Guidance on rinsing and grooming",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ landscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated. Alex and Pieter on every major project",
 "We build the drainage base right, so turf lays flat and drains fast",
 "Quality turf and infill, not shortcut products",
 "Clean crews, respectful job sites, daily communication",
 "Turf that ties into your patios, paths, and beds",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your goals, space, and how the area gets used." },
 { title: "On-Site Consultation", body: "We walk the property, check drainage and access." },
 { title: "Design & Detailed Estimate", body: "Layout, turf selection, and investment in writing." },
 { title: "Install & Daily Cleanup", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough", body: "Confirm the finish, hand off care tips." },
];

const faqs = [
 {
 q: "How much does artificial turf cost in Oakville or Burlington?",
 a: "It depends on the size of the area, the base work needed, and the turf you choose. A small pet run costs far less than a full backyard lawn. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "Does artificial turf drain well in the rain?",
 a: "Yes, when it is installed on the right base. We build a compacted drainage base under the turf and grade it so water drains straight through and away. That is what stops pooling and muddy spots.",
 },
 {
 q: "Is artificial turf good for dogs?",
 a: "Yes. Pet-friendly turf is one of our most popular installs. It drains well, rinses clean, and stands up to pet traffic far better than a real lawn. There are no muddy paws and no dead patches.",
 },
 {
 q: "Does turf get hot in the summer?",
 a: "Turf can warm up in direct sun, like any surface. A quick rinse cools it down fast. We can also talk through turf options and shade during the design phase if the area gets heavy sun.",
 },
 {
 q: "How long does artificial turf last?",
 a: "Quality turf on a proper base lasts many years with very little upkeep. The base is the key. That is why we focus on getting the drainage and compaction right before the turf goes down.",
 },
 {
 q: "What maintenance does artificial turf need?",
 a: "Very little. An occasional rinse and a light brush to keep the blades upright is all most yards need. We hand off a simple care guide at the end of the install.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium turf installs",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville artificial turf install by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Pet and play turf",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington pet and play artificial turf by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service turf",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga full-service artificial turf by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Custom landscape design-build",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton custom landscape design-build by McCoy Landscape Group",
 href: "/service-areas/milton",
 },
];

export default function ArtificialTurfInstallationPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/artificial-turf-installation`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Artificial Turf Installation",
 description:
 "Custom artificial turf installation — full lawns, pet-friendly turf, play areas, shaded yards, putting greens, and turf-paver combos across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Artificial Turf Installation", "Pet Turf", "Play Area Turf", "Putting Greens", "Synthetic Lawn"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Artificial Turf Installation", item: URL },
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
 eyebrow="ARTIFICIAL TURF INSTALLATION"
 title="Artificial Turf Installation"
 subtitle="in Oakville"
 opening={
 <>
 Custom artificial turf installation in Oakville, Burlington,
 Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. We
 install turf on a proper base so it drains, lays flat, and looks great
 year-round.
 </>
 }
 imageSrc="/images/maintenance-hero.jpg"
 imageAlt="Clean, even artificial turf lawn with a paver border on an Oakville property installed by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN-BUILD TURF</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Green Lawn With{" "}
 <em className="italic font-light">None of the Upkeep</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Some yards just will not grow good grass. Heavy shade, pet traffic, poor
 soil, or a slope can make a real lawn a losing battle. Artificial turf
 gives you a clean, green yard all year with no mowing, watering, or muddy
 patches. But turf is only as good as the base under it. Rolled straight
 onto soil, it ripples, holds water, and flattens out fast.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy installs artificial turf on a proper drainage base so it lays flat,
 drains fast, and holds up for years. We shape the area, build a compacted
 base, and secure the turf with the right infill so it feels natural
 underfoot. Play areas, pet runs, and full lawns all get installed to
 handle Ontario weather and daily use.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Turf Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Custom Artificial Turf Configurations
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every yard is different. Here is the turf work we do most often across
 Oakville, Burlington, Mississauga, and Milton homes.
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
 alt="A shaded backyard turned into a clean, green turf lawn with a paver border in Oakville by McCoy Landscape Group"
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
 A shaded backyard turned into a clean, green turf lawn with a paver
 border, built in a single scope.
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
 The Details That Make Turf{" "}
 <em className="italic font-light text-[var(--color-accent)]">Look and Feel Real</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "A compacted drainage base so water never pools",
 "Quality infill that keeps blades upright and natural",
 "Secured edges and seams that stay tight over time",
 "Paver borders and pathways integrated with the turf",
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
 Every McCoy Turf Install{" "}
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
 <em className="italic font-light">McCoy for Turf</em>
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
 <em className="italic font-light">Turf Install Process</em>
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
 Most turf installs take a few days to 1 week on-site, depending on size.
 Peak season books ahead, call early.
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
 <em className="italic font-light">Turf Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every install is scoped to the size of the area, the base work needed,
 and the turf you choose. There is no flat guessing over the phone. We
 build the written estimate after the on-site visit, so the number you see
 is the number you pay. No surprises, no escalations.
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
 headingMain="Artificial Turf FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 </>
 );
}
