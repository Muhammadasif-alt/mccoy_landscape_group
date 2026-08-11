import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Sprout,
 Sparkles,
 LayoutGrid,
 Home,
 Wrench,
 Truck,
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
 title: "Sod Installation Oakville | Lawn Renovation & Fresh Sod | McCoy Landscape Group",
 description:
 "Custom sod installation & lawn renovation in Oakville, Burlington, Mississauga & Milton. Proper soil prep so your lawn roots fast. Call (416) 985-9771.",
 alternates: { canonical: "/services/sod-installation" },
};

const sodTypes = [
 {
 icon: Sprout,
 title: "Full lawn sod",
 body: "A complete new lawn laid fresh over prepped soil.",
 },
 {
 icon: Sparkles,
 title: "Lawn renovation",
 body: "Removal of old, worn lawn and a full re-sod.",
 },
 {
 icon: LayoutGrid,
 title: "Backyard sod",
 body: "Fresh, even lawns for play, pets, and outdoor living.",
 },
 {
 icon: Home,
 title: "Front yard sod",
 body: "Curb-appeal lawns that frame your home.",
 },
 {
 icon: Wrench,
 title: "Patch and repair sod",
 body: "Sod fixes for worn, damaged, or bare areas.",
 },
 {
 icon: Truck,
 title: "Post-construction sod",
 body: "New lawns laid after a build or hardscape project.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Soil Work",
 items: [
 "Removal of old lawn, weeds, or surface",
 "Grading and levelling for proper drainage",
 "Quality topsoil added and prepped",
 "A clean, even base for the new sod",
 ],
 },
 {
 heading: "Sod & Installation",
 items: [
 "Fresh, quality sod matched to your yard and light",
 "Laid tight with staggered, gap-free seams",
 "Rolled for firm soil-to-root contact",
 "Edges cut clean around beds, paths, and hardscape",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Full cleanup of the area",
 "Watering and care guide at handoff",
 "Guidance to get the lawn established",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ landscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated. Alex and Pieter on every major project",
 "We prep the soil right, so the sod roots in and lasts",
 "Grading and drainage handled before the sod goes down",
 "Clean crews, respectful job sites, daily communication",
 "Honest advice on watering and getting your lawn established",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your goals, space, and timeline." },
 { title: "On-Site Consultation", body: "We walk the property, check grade, soil, and drainage." },
 { title: "Detailed Estimate", body: "Scope and investment in writing." },
 { title: "Prep & Install", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough", body: "Confirm the finish, hand off watering and care tips." },
];

const faqs = [
 {
 q: "How much does sod installation cost in Oakville or Burlington?",
 a: "It depends on the size of the lawn, the soil prep needed, and whether an old lawn has to be removed first. A small patch costs far less than a full yard renovation. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "When is the best time to lay sod in Ontario?",
 a: "Spring and fall are the best seasons because the mild weather helps the sod root in. Sod can be laid through the summer too with careful watering. We help you plan the timing during the consultation.",
 },
 {
 q: "How long until I can walk on my new sod?",
 a: "Keep off it for the first couple of weeks so the roots take hold. We give you a simple care and watering plan so you know exactly what to do in those first few weeks.",
 },
 {
 q: "Why did my last sod install fail?",
 a: "Almost always because of poor soil prep. Sod laid on hard or uneven ground with no topsoil dries out and roots poorly. We fix that by grading, adding quality topsoil, and prepping a proper base before the sod goes down.",
 },
 {
 q: "How much watering does new sod need?",
 a: "New sod needs regular watering for the first few weeks to establish. We give you a clear watering schedule at handoff so the lawn roots in strong.",
 },
 {
 q: "Should I choose sod or artificial turf?",
 a: "Sod gives you a real, natural lawn but needs mowing and watering. Turf gives you a green yard with no upkeep but is a bigger upfront cost. We install both and can walk you through which fits your yard and lifestyle.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium sod installs",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville sod installation by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Lawn renovation and sod",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington lawn renovation and sod by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service sod",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga full-service sod installation by McCoy Landscape Group",
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

export default function SodInstallationPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/sod-installation`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Sod Installation",
 description:
 "Custom sod installation and lawn renovation — full lawn sod, lawn renovation, backyard and front yard sod, patch repairs, and post-construction sod across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Sod Installation", "Lawn Renovation", "Backyard Sod", "Sod Repair", "Post-Construction Sod"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Sod Installation", item: URL },
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
 eyebrow="SOD INSTALLATION"
 title="Sod Installation"
 subtitle="in Oakville"
 opening={
 <>
 Custom sod installation and lawn renovation in Oakville, Burlington,
 Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. We prep
 the soil the right way so your new lawn roots fast and stays green.
 </>
 }
 imageSrc="/images/maintenance-hero.jpg"
 imageAlt="Fresh, even sod lawn laid over prepped soil on an Oakville property by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN-BUILD LAWNS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A New Lawn That Roots In{" "}
 <em className="italic font-light">and Lasts</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Fresh sod gives you a full, green lawn almost overnight. But sod is only
 as good as the soil under it. Rolled onto hard, poor, or uneven ground,
 it dries out, roots poorly, and turns patchy within weeks. The prep work
 you never see is what makes the difference between a lawn that thrives
 and one that struggles.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy installs sod on properly prepped soil so your new lawn roots in
 fast and stays green. We clear the old surface, grade for drainage, add
 quality topsoil, and lay fresh sod tight with no gaps. Whether it is a
 full yard or a worn-out patch, we give the sod the base it needs to take
 hold and last.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Sod Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Sod and Lawn Installation Services
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every lawn is different. Here is the sod work we do most often across
 Oakville, Burlington, Mississauga, and Milton homes.
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
 alt="A worn-out backyard stripped, re-graded, top-dressed, and laid with fresh sod in Oakville by McCoy Landscape Group"
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
 A worn-out backyard stripped, re-graded, top-dressed, and laid with
 fresh sod, in a single scope.
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
 The Details That Make Sod{" "}
 <em className="italic font-light text-[var(--color-accent)]">Take Hold</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Quality topsoil and grading for strong root growth",
 "Proper drainage so water does not pool on the new lawn",
 "Tight seams with no gaps or dry edges",
 "Watering and care plan to get the lawn established",
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
 Every McCoy Sod Install{" "}
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
 <em className="italic font-light">McCoy for Sod</em>
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
 <em className="italic font-light">Sod Install Process</em>
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
 alt={`${s.title} — McCoy Landscape Group sod install process`}
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
 Most sod installs take 1 to 3 days on-site, depending on size. Spring and
 fall are the best seasons for new sod, so book ahead.
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
 <em className="italic font-light">Sod Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every install is scoped to the size of the lawn, the soil prep and
 grading needed, and the removal of the old surface. There is no flat
 guessing over the phone. We build the written estimate after the on-site
 visit, so the number you see is the number you pay. No surprises, no
 escalations.
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
 headingMain="Sod Installation FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 </>
 );
}
