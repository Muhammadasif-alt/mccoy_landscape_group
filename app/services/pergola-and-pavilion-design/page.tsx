import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Fence,
 Layers,
 Home,
 Square,
 Waves,
 Flame,
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
 title: "Pergola & Pavilion Design Oakville | Cedar & Louvered Structures | McCoy Landscape Group",
 description:
 "Custom pergola & pavilion design and build in Oakville, Burlington, Mississauga & Milton. Built for Ontario wind & snow load, backed by our 3-year warranty. Call (416) 985-9771.",
 alternates: { canonical: "/services/pergola-and-pavilion-design" },
};

const structureTypes = [
 {
 icon: Fence,
 title: "Open pergolas",
 body: "Classic slatted pergolas for filtered shade over a patio.",
 },
 {
 icon: Layers,
 title: "Louvered roof pergolas",
 body: "Adjustable roofs that open for sun or close for rain.",
 },
 {
 icon: Home,
 title: "Full-roof pavilions",
 body: "Solid-roof structures that give full shade and rain cover.",
 },
 {
 icon: Square,
 title: "Pergolas with privacy screens",
 body: "Structures with side panels for shade and privacy.",
 },
 {
 icon: Waves,
 title: "Poolside shade structures",
 body: "Pergolas and pavilions built to frame pool areas.",
 },
 {
 icon: Flame,
 title: "Pergolas with fire and kitchen",
 body: "Structures tied into fire features and outdoor kitchens.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep & Base Work",
 items: [
 "Site assessment for grade, access, and structure placement",
 "Excavation and footings rated for Ontario wind and snow load",
 "Footings tied into the patio base where the structure sits",
 "Coordination with the patio and hardscape scope",
 ],
 },
 {
 heading: "Materials & Installation",
 items: [
 "Cedar, aluminum, and composite structures matched to your design",
 "Posts, beams, and roofing built to handle Ontario weather",
 "Louvered roofs, screens, and lighting where they fit the scope",
 "Structure and hardscape built as one scope",
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
 "Owner-operated. Alex and Pieter on every major build",
 "Design-build under one roof, so the structure ties into the whole yard",
 "Footings and anchoring built for Ontario wind and snow load",
 "Clean crews, respectful job sites, daily communication",
 "3-year warranty on the finished build",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your goals, space, and timeline." },
 { title: "On-Site Consultation", body: "We walk the property, measure, and assess grade, access, and placement." },
 { title: "Design & Detailed Estimate", body: "Layout, materials, and investment in writing." },
 { title: "Build & Daily Cleanup", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough & 3-Year Warranty", body: "Confirm every detail, hand off care tips." },
];

const faqs = [
 {
 q: "How much does a pergola or pavilion cost in Oakville or Burlington?",
 a: "It depends on the size, the material, and the roof type. An open cedar pergola is far less than a full pavilion with a solid roof and a louvered system. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "What is the difference between a pergola and a pavilion?",
 a: "A pergola has an open or slatted top that gives filtered shade. A pavilion has a solid roof that gives full shade and rain cover. We walk you through both during the design phase based on how you want to use the space.",
 },
 {
 q: "Do I need a permit for a pergola or pavilion?",
 a: "Some structures need a permit depending on size and location. We let you know during the consultation and help you understand what your project needs before we build.",
 },
 {
 q: "Can you build a pergola over my existing patio?",
 a: "Yes, if the base can support proper footings. We assess the patio during the on-site visit. In many cases we anchor the footings into the existing hardscape so the structure stays solid.",
 },
 {
 q: "Will a pergola hold up to Ontario winters and snow?",
 a: "Yes, when it is built right. We use materials and footings rated for Ontario wind and snow load, so the structure stays solid through every season. That is backed by our 3-year warranty.",
 },
 {
 q: "Can you add lighting, screens, or a fire feature?",
 a: "Yes. We build in low-voltage lighting, privacy screens, and connections to fire features or outdoor kitchens as part of the scope. Planning it all up front means it works together as one space.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium pergola and pavilion builds",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville pergola and pavilion build by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Custom shade structures",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington custom shade structure by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service outdoor structures",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga outdoor structure build by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Custom hardscape design-build",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton custom hardscape design-build by McCoy Landscape Group",
 href: "/service-areas/milton",
 },
];

export default function PergolaAndPavilionDesignPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/pergola-and-pavilion-design`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Pergola and Pavilion Design",
 description:
 "Custom pergola and pavilion design and build — open pergolas, louvered roofs, full-roof pavilions, privacy screens, and poolside shade structures across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Pergola Design", "Pavilion Design", "Louvered Roof Pergola", "Privacy Screens", "Poolside Shade Structures"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Pergola and Pavilion Design", item: URL },
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
 eyebrow="PERGOLAS & PAVILIONS"
 title="Pergolas and Pavilions Built to Last"
 subtitle="in Oakville"
 opening={
 <>
 Custom pergola and pavilion design and build in Oakville, Burlington,
 Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. Every
 structure we build is backed by our 3-year warranty.
 </>
 }
 imageSrc="/images/15-cta-dusk-invitation.jpg"
 imageAlt="Custom cedar pergola over a paver patio at dusk on an Oakville property built by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">DESIGN-BUILD STRUCTURES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Shade and Shelter That Make the Yard{" "}
 <em className="italic font-light">Usable</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 A great patio still bakes in the summer sun and shuts down in the rain.
 A pergola or pavilion fixes that. It gives you shade, shelter, and a
 real roof over your outdoor living space, so the yard gets used on more
 days of the year. But an outdoor structure has to stand up to Ontario
 wind, snow load, and freeze. A post set in a shallow footing does not
 last.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy designs and builds pergolas and pavilions that are solid,
 anchored, and tied into the whole yard. We plan the structure with the
 patio, fire feature, and grade around it, then build it on proper
 footings rated for Ontario conditions. Open pergolas or full-roof
 pavilions, we handle the design and the build under one roof.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Structure Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Custom Pergola and Pavilion Configurations
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 No two McCoy structures are identical. Here are the builds we do most
 often across Oakville, Burlington, Mississauga, and Milton homes.
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
 alt="Cedar pergola over a paver patio tied into a fire feature and seating wall in Oakville by McCoy Landscape Group"
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
 Cedar pergola over a paver patio, tied into a fire feature and
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
 The Details That Turn a Structure{" "}
 <em className="italic font-light text-[var(--color-accent)]">Into a Room</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Integrated low-voltage lighting built into posts and beams",
 "Privacy screens, side panels, and hanging space for fans or heaters",
 "Fire feature, kitchen, and seating connections planned up front",
 "Footings anchored into the patio base for Ontario wind and snow load",
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
 Every McCoy Pergola and Pavilion Build{" "}
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
 <em className="italic font-light">McCoy for Pergolas and Pavilions</em>
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
 <em className="italic font-light">Pergola and Pavilion Process</em>
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
 Most pergola and pavilion builds take 1 to 3 weeks on-site once we
 start. Peak season books 6 to 12 weeks ahead, call early.
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
 <em className="italic font-light">Pergola or Pavilion Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every structure is scoped to size, material, roof type, and features
 like lighting or screens. An open cedar pergola and a full
 louvered-roof pavilion sit at very different price points. We build the
 written estimate after the on-site visit, so the number you see is the
 number you pay. No surprises, no escalations.
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
 headingMain="Pergola and Pavilion FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 </>
 );
}
