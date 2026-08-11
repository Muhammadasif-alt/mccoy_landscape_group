import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Trees,
 Leaf,
 Sprout,
 Home,
 Fence,
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
 title: "Landscape Planting Oakville | Trees, Shrubs & Garden Beds | McCoy Landscape Group",
 description:
 "Custom landscape planting of trees, shrubs & garden beds in Oakville, Burlington, Mississauga & Milton. Right soil, spacing & design so your yard lasts. Call (416) 985-9771.",
 alternates: { canonical: "/services/landscape-planting" },
};

const plantingTypes = [
 {
 icon: Trees,
 title: "Trees and shade planting",
 body: "Trees placed for shade, privacy, and long-term structure.",
 },
 {
 icon: Leaf,
 title: "Shrubs and hedging",
 body: "Shrubs and hedges that frame beds and add privacy.",
 },
 {
 icon: Sprout,
 title: "Garden bed planting",
 body: "Full beds planned for colour and season-long interest.",
 },
 {
 icon: Home,
 title: "Foundation planting",
 body: "Planting that frames the front of your home for curb appeal.",
 },
 {
 icon: Fence,
 title: "Privacy and screen planting",
 body: "Trees and shrubs placed to block views and noise.",
 },
 {
 icon: ShieldCheck,
 title: "Low-maintenance planting",
 body: "Hardy plant choices that look great with little upkeep.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Soil Work",
 items: [
 "Assessment of light, soil, and drainage in each area",
 "Bed shaping and edging",
 "Quality topsoil and soil amendment for healthy roots",
 "Removal of old or overgrown planting if needed",
 ],
 },
 {
 heading: "Plants & Installation",
 items: [
 "Trees, shrubs, and perennials matched to your yard",
 "Proper spacing so plants fill in without crowding",
 "Correct planting depth and root care",
 "Mulch to hold moisture and finish the beds",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Full cleanup of beds and surrounding areas",
 "Watering and care guide at handoff",
 "Guidance on seasonal upkeep",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ landscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated. Alex and Pieter on every major project",
 "Design-build under one roof, so planting fits your hardscape",
 "Plants matched to Ontario conditions and your specific yard",
 "Clean crews, respectful job sites, daily communication",
 "Honest advice on what will thrive and what to avoid",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your goals, space, and timeline." },
 { title: "On-Site Consultation", body: "We walk the property, check light, soil, and drainage." },
 { title: "Design & Detailed Estimate", body: "Plant plan and investment in writing." },
 { title: "Plant & Daily Cleanup", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough", body: "Confirm the layout, hand off watering and care tips." },
];

const faqs = [
 {
 q: "How much does landscape planting cost in Oakville or Burlington?",
 a: "It depends on the size of the beds, the number and size of plants, and the soil work needed. A few new shrubs cost far less than a full front-yard makeover with trees. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "When is the best time to plant in Ontario?",
 a: "Spring and fall are the best planting seasons because the weather is mild and roots settle in well. We can plant through the summer too with the right care and watering. We help you plan the timing during the consultation.",
 },
 {
 q: "How do you choose the right plants for my yard?",
 a: "We look at your light, soil, drainage, and space, then pick plants that will thrive in those conditions. We also match the look you want, whether that is low-maintenance, colourful, or privacy-focused.",
 },
 {
 q: "Will you plant around my new patio or walls?",
 a: "Yes. As a design-build company we plan planting alongside your hardscape. Planting beds around patios, walls, and walkways soften the hard edges and tie the whole yard together.",
 },
 {
 q: "How much upkeep will my new planting need?",
 a: "That depends on the plants you choose. We can plan a low-maintenance yard with hardy plants, or a more detailed garden if you enjoy the upkeep. We hand off a care guide so you know what each area needs.",
 },
 {
 q: "Do you offer ongoing maintenance for the planting?",
 a: "Yes. We offer landscape maintenance including pruning, trimming, and seasonal cleanups to keep your beds and plants healthy and tidy year-round.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium planting and garden beds",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville landscape planting and garden beds by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Trees, shrubs, and beds",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington trees, shrubs, and garden beds by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service planting",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga full-service landscape planting by McCoy Landscape Group",
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

export default function LandscapePlantingPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/landscape-planting`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Landscape Planting",
 description:
 "Custom landscape planting of trees, shrubs, hedges, and garden beds — foundation planting, privacy screens, and low-maintenance plantings across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Landscape Planting", "Tree Planting", "Shrubs and Hedging", "Garden Bed Planting", "Privacy Planting"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Landscape Planting", item: URL },
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
 eyebrow="LANDSCAPE PLANTING"
 title="Landscape Planting"
 subtitle="in Oakville"
 opening={
 <>
 Custom landscape planting of trees, shrubs, and garden beds in Oakville,
 Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. We
 plant with the right soil, spacing, and design so your yard fills in and
 lasts.
 </>
 }
 imageSrc="/images/softscape-hero.jpg"
 imageAlt="Freshly planted garden beds with trees and shrubs framing a patio on an Oakville property by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN-BUILD PLANTING</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Planting That Softens the Hardscape and{" "}
 <em className="italic font-light">Fills In</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Patios and walls give a yard its structure. Planting gives it life. The
 right trees, shrubs, and beds soften hard edges, add colour through the
 seasons, and frame your outdoor living space. But planting fails when it
 is rushed. Wrong plant for the spot, poor soil, or bad spacing means half
 of it dies or outgrows the bed in a year.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy plans and plants yards that fill in the way they should. We pick
 plants that suit your light, soil, and space, then plant them with proper
 soil prep and spacing so they thrive. As a design-build company, we plan
 your planting alongside your patios and walls, so the soft and hard
 elements work together.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Planting Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Custom Landscape Planting Services
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every yard is different. Here is the planting work we do most often
 across Oakville, Burlington, Mississauga, and Milton homes.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {plantingTypes.map(({ icon: Icon, title, body }) => (
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
 alt="New garden beds, trees, and shrubs planted to frame a patio and seating wall in Oakville by McCoy Landscape Group"
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
 New garden beds, trees, and shrubs planted to frame a patio and
 seating wall, built in a single scope.
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
 The Details That Make Planting{" "}
 <em className="italic font-light text-[var(--color-accent)]">Thrive</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Quality topsoil and soil prep for strong root growth",
 "Mulch to hold moisture and keep beds tidy",
 "Plant choices matched to your light, soil, and space",
 "Planting planned alongside patios, walls, and lighting",
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
 Every McCoy Planting Project{" "}
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
 <em className="italic font-light">McCoy for Planting</em>
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
 <em className="italic font-light">Planting Process</em>
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
 alt={`${s.title} — McCoy Landscape Group planting process`}
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
 Most planting projects take a few days to 1 week on-site, depending on
 size. Spring and fall are the best planting seasons, so book ahead.
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
 <em className="italic font-light">Planting Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every project is scoped to the size of the beds, the number and size of
 plants, and the soil work needed. There is no flat guessing over the
 phone. We build the written estimate after the on-site visit, so the
 number you see is the number you pay. No surprises, no escalations.
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
 headingMain="Landscape Planting FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 </>
 );
}
