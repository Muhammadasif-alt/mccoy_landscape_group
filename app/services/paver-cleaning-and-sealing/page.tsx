import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 SprayCan,
 Sprout,
 Layers,
 ShieldCheck,
 Sparkles,
 Wrench,
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
 title: "Paver Cleaning & Sealing Oakville | Interlock Restoration | McCoy Landscape Group",
 description:
 "Professional paver cleaning, sealing & restoration in Oakville, Burlington, Mississauga & Milton. Weed removal, re-sanding & quality sealer. Call (416) 985-9771.",
 alternates: { canonical: "/services/paver-cleaning-and-sealing" },
};

const restorationTypes = [
 {
 icon: SprayCan,
 title: "Deep paver cleaning",
 body: "Pressure cleaning that lifts dirt, moss, and stains.",
 },
 {
 icon: Sprout,
 title: "Weed and moss removal",
 body: "Full joint clean-out to stop weeds and moss coming back.",
 },
 {
 icon: Layers,
 title: "Polymeric sand re-sanding",
 body: "Fresh polymeric sand that locks joints and blocks weeds.",
 },
 {
 icon: ShieldCheck,
 title: "Paver sealing",
 body: "Quality sealer that protects colour and resists stains.",
 },
 {
 icon: Sparkles,
 title: "Stain and efflorescence treatment",
 body: "Treatment for oil, rust, and the white haze on pavers.",
 },
 {
 icon: Wrench,
 title: "Lift and relay repairs",
 body: "Re-levelling of sunken or shifted pavers before sealing.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Clean & Prep",
 items: [
 "Weed, moss, and debris removal from the surface and joints",
 "Deep pressure cleaning of the full paver surface",
 "Old or failed joint sand cleared out",
 "Any sunken pavers lifted and re-levelled",
 ],
 },
 {
 heading: "Restore & Seal",
 items: [
 "Fresh polymeric sand swept and set into the joints",
 "Quality sealer applied in your chosen finish",
 "Stain and efflorescence treatment where needed",
 "Even coverage for consistent colour and protection",
 ],
 },
 {
 heading: "Finishing",
 items: [
 "Post-job cleanup and wash-down",
 "Care and maintenance guide at handoff",
 "Guidance on when to re-seal",
 ],
 },
];

const whyMcCoyBullets = [
 "200+ hardscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "Owner-operated. Alex and Pieter on every major job",
 "We build interlock too, so we know how to restore it properly",
 "Quality polymeric sand and sealers, not shortcut products",
 "Clean crews, respectful job sites, daily communication",
 "Honest advice on whether to restore or replace",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share your surface, size, and goals." },
 { title: "On-Site Consultation", body: "We check the pavers, joints, and any sunken areas." },
 { title: "Detailed Estimate", body: "Scope and investment in writing." },
 { title: "Clean, Restore & Seal", body: "Owner-led crew, clear communication, clean job site." },
 { title: "Final Walkthrough", body: "Confirm the finish, hand off care tips." },
];

const faqs = [
 {
 q: "How much does paver cleaning and sealing cost in Oakville or Burlington?",
 a: "It depends on the size of the surface and its condition. A clean-and-seal costs less than a job that also needs re-levelling or heavy stain treatment. We give you a written estimate after the on-site visit, not a guess over the phone.",
 },
 {
 q: "Do I really need to seal my pavers?",
 a: "Sealing is not required, but it makes a big difference. A sealed surface holds its colour, resists stains, and keeps weeds and ants out of the joints. It also makes the pavers much easier to clean going forward.",
 },
 {
 q: "How often should pavers be re-sealed?",
 a: "Most surfaces need re-sealing every 3 to 5 years, depending on traffic and weather. We let you know what to expect for your surface and hand off a simple care guide.",
 },
 {
 q: "Can you get rid of the weeds growing between my pavers?",
 a: "Yes. We clear the joints fully, then set fresh polymeric sand that hardens and blocks weeds and ants from coming back. Sealing on top adds even more protection.",
 },
 {
 q: "My pavers are sunken in spots. Can you fix that?",
 a: "Yes. We lift and relay sunken or shifted pavers to bring the surface back to level before we clean and seal. It is a common part of restoration work.",
 },
 {
 q: "Should I restore my interlock or replace it?",
 a: "Most of the time restoration is all you need and it costs far less than replacement. We give you an honest assessment during the on-site visit. If the base has failed, we will tell you straight.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium paver restoration",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville paver restoration by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Cleaning, sealing, and repair",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington paver cleaning, sealing, and repair by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service paver care",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga full-service paver care by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Interlock restoration",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton interlock restoration by McCoy Landscape Group",
 href: "/service-areas/milton",
 },
];

export default function PaverCleaningAndSealingPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/paver-cleaning-and-sealing`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Paver Cleaning and Sealing",
 description:
 "Professional paver cleaning, sealing, and interlock restoration — deep cleaning, weed and moss removal, polymeric sand re-sanding, and sealing across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Paver Cleaning", "Paver Sealing", "Interlock Restoration", "Polymeric Re-Sanding", "Efflorescence Treatment"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Paver Cleaning and Sealing", item: URL },
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
 eyebrow="PAVER CLEANING, SEALING & RESTORATION"
 title="Paver Cleaning and Sealing"
 subtitle="in Oakville"
 opening={
 <>
 Professional paver cleaning, sealing, and restoration in Oakville,
 Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation. We
 bring tired interlock back to life and protect it for years.
 </>
 }
 imageSrc="/paver-cleaning-and-sealing/Hero.png"
 imageAlt="Freshly cleaned and sealed interlock paver surface on an Oakville property restored by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">RESTORATION & PROTECTION</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Bring Your Interlock{" "}
 <em className="italic font-light">Back to Life</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Interlock does not stay new on its own. After a few Ontario seasons,
 pavers fade, weeds grow up through the joints, and the surface picks up
 dirt, moss, and stains. Many homeowners think a tired patio or driveway
 needs replacing. Most of the time it just needs a proper clean,
 re-sanding, and a quality sealer.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mt-4">
 McCoy cleans, restores, and seals interlock so it looks new again and
 stays that way. We pull the weeds, deep clean the surface, replace the
 joint sand, and seal it to lock everything in. A sealed paver surface
 resists stains, holds its colour, and keeps weeds and ants out of the
 joints.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Restoration Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Paver Cleaning and Sealing Services
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every surface is different. Here is the restoration work we do most
 often across Oakville, Burlington, Mississauga, and Milton homes.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {restorationTypes.map(({ icon: Icon, title, body }) => (
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
 src="/paver-cleaning-and-sealing/center.png"
 alt="A faded weed-filled driveway cleaned, re-sanded, and sealed back to like-new in Oakville by McCoy Landscape Group"
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
 A RECENT MCCOY RESTORATION · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 A faded, weed-filled driveway cleaned, re-sanded, and sealed back to
 like-new in a single scope.
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
 The Details That Make Interlock{" "}
 <em className="italic font-light text-[var(--color-accent)]">Last Longer</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Polymeric sand that locks joints and blocks weeds and ants",
 "Sealer options in matte, satin, or wet-look finish",
 "Lift and relay of sunken pavers before sealing",
 "Stain and efflorescence treatment for a clean, even look",
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
 Every McCoy Cleaning and Sealing Job{" "}
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
 <em className="italic font-light">McCoy for Paver Care</em>
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
 <em className="italic font-light">Cleaning and Sealing Process</em>
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
 alt={`${s.title} — McCoy Landscape Group cleaning and sealing process`}
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
 Most cleaning and sealing jobs take 1 to 3 days on-site, plus curing
 time for the sealer. Peak season books ahead, call early.
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
 <em className="italic font-light">Cleaning and Sealing Investment</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every job is scoped to the size of the surface, the condition of the
 pavers, and any repairs needed before sealing. There is no flat
 guessing over the phone. We build the written estimate after the
 on-site visit, so the number you see is the number you pay. No
 surprises, no escalations.
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
 headingMain="Paver Cleaning and Sealing FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA
 bgImage="/paver-cleaning-and-sealing/end.png"
 bgAlt="A freshly sealed interlock patio glowing at twilight in Oakville by McCoy Landscape Group"
 />
 <Footer />
 </>
 );
}
