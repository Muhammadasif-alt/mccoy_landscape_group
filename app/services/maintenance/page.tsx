import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Scissors,
 Sparkles,
 Layers,
 Trees,
 Sprout,
 Calendar,
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
 title: "Landscape Maintenance Oakville | Lawn, Pruning & Cleanups | McCoy Landscape Group",
 description:
 "Landscape maintenance in Oakville, Burlington, Mississauga & Milton. Lawn mowing, pruning, mulching, seasonal cleanups. 25+ years caring for premium properties. Call (416) 985-9771.",
 alternates: { canonical: "/services/maintenance" },
};

const maintenanceTypes = [
 {
 icon: Scissors,
 title: "Lawn mowing & upkeep",
 body: "Weekly or bi-weekly cuts with sharp blades, edging, and clippings managed — sharp clean lines every visit.",
 },
 {
 icon: Trees,
 title: "Pruning & shrub trimming",
 body: "Seasonal pruning of ornamental shrubs, hedges, and small ornamental trees. Right cut, right time of year.",
 },
 {
 icon: Layers,
 title: "Mulching & bed top-ups",
 body: "Spring and fall mulch installs at proper depth — beds insulated, weeds suppressed, finish polished.",
 },
 {
 icon: Sparkles,
 title: "Spring & fall cleanups",
 body: "Leaf removal, debris haul-out, bed cutbacks, edge re-cutting, and full property reset twice a year.",
 },
 {
 icon: Sprout,
 title: "Garden bed refresh",
 body: "Clear out tired plants, amend soil, redefine bed edges, replant or top-up — beds back to looking intentional.",
 },
 {
 icon: Calendar,
 title: "Seasonal property care",
 body: "Recurring visits booked across the season so the property always looks finished, never in-between.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Weekly Visits",
 items: [
 "Lawn mowed with sharp blades to proper height",
 "All edges crisp — driveways, walkways, beds, patios",
 "Clippings managed (mulched in or removed per preference)",
 "Quick walk-through to flag anything that needs attention",
 ],
 },
 {
 heading: "Seasonal Work",
 items: [
 "Spring cleanup: leaves, debris, edge re-cutting, bed prep, mulch top-up",
 "Mid-season pruning of shrubs and small ornamentals",
 "Bed top-up mulching as needed to keep depth + colour",
 "Fall cleanup: leaves, bed cutback, equipment + plant prep for winter",
 ],
 },
 {
 heading: "On-Request",
 items: [
 "Sod patch repair where high-traffic areas wear thin",
 "Plant replacement when something fails or gets damaged",
 "Bed re-edging when grass starts creeping into mulch beds",
 "Drainage tweaks if pooling shows up after a wet season",
 ],
 },
];

const whyMcCoyBullets = [
 "25+ years caring for premium Oakville-area properties",
 "Same crew on your property every visit — they learn your landscape",
 "Owner-operated — Alex and Pieter actively manage maintenance routes",
 "Trained on the same install standard we hold for hardscape",
 "Honest cadence recommendations — not pushing visits you don't need",
 "Easy add-ons: hardscape repair, drainage tweaks, plant replacement",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Tell us about the property and what level of care you want." },
 { title: "On-Site Walk", body: "We walk the property, measure beds and lawn area, and confirm scope." },
 { title: "Service Plan & Quote", body: "Cadence, scope per visit, and seasonal extras in writing." },
 { title: "Scheduled Visits Begin", body: "Same crew, same day-of-week, predictable show-ups." },
 { title: "Seasonal Reviews", body: "End of spring and fall — what worked, what to adjust." },
];

const faqs = [
 {
 q: "Do you take new maintenance clients?",
 a: "Yes — we have a maintenance crew running routes across Oakville, Burlington, Mississauga, and Milton. Routes fill up by area, so call early in the season to lock a slot. Existing hardscape clients always get priority on the maintenance side.",
 },
 {
 q: "Weekly or bi-weekly mowing?",
 a: "Most properties run weekly through the growing season (May-September) and bi-weekly in early spring and fall. Larger or low-input properties sometimes run bi-weekly all season. We'll recommend cadence based on your lot, sun, and how the lawn responds.",
 },
 {
 q: "Do you do snow removal?",
 a: "Not currently. We focus on growing-season landscape maintenance plus hardscape design-build. For winter, we can refer you to trusted local snow operators we've worked alongside.",
 },
 {
 q: "Can you do one-time cleanups instead of a full season contract?",
 a: "Yes — spring cleanups, fall cleanups, and mid-summer refreshes are available as one-off jobs. They book up fast in spring and fall so call ahead. Recurring contracts get priority scheduling but one-off work fits in around route capacity.",
 },
 {
 q: "Do you maintain landscapes you didn't install?",
 a: "Yes. We take on properties built by other contractors all the time. The first visit is more of an assessment — we walk the property, note what's going well, flag what's not, and then start the regular cadence.",
 },
 {
 q: "Can maintenance bundle with a hardscape build?",
 a: "Yes, and it's the cleanest path. We hand off a finished hardscape build into our own maintenance routine, so the lawn, beds, and hardscape all stay at the same standard. Same crew quality, no contractor handoff gap.",
 },
];

export default function MaintenancePage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/maintenance`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Landscape Maintenance",
 description:
 "Lawn mowing, pruning, mulching, seasonal cleanups, and recurring property care across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Lawn Care", "Pruning", "Mulching", "Seasonal Cleanup", "Property Maintenance"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Maintenance", item: URL },
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
 eyebrow="LANDSCAPE MAINTENANCE"
 title="Property Care That"
 subtitle="Keeps the Standard"
 opening={
 <>
 Lawn mowing, pruning, mulching, and seasonal cleanups across
 Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to add your property to a McCoy
 maintenance route — 25+ years caring for premium Oakville-area landscapes.
 </>
 }
 imageSrc="/maintenance/Hero.png"
 imageAlt="Premium Oakville residential property after a McCoy seasonal landscape maintenance visit"
 />

 {/* What we do */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-28 overflow-hidden">
 <TopoBG shape="shape_05" position="top-right" size={520} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12 md:mb-14">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE MAINTAIN</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 Lawn, Beds, Shrubs, Cleanups{" "}
 <em className="italic font-light">— Year-Round</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 The same crew on your property every visit. Trained on the same install standard we hold for hardscape — so what we&apos;re maintaining stays at the level it was built to.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
 {maintenanceTypes.map((t) => {
 const Icon = t.icon;
 return (
 <div
 key={t.title}
 className="bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] shadow-[0_8px_22px_-16px_rgba(0,0,0,0.18)] hover:shadow-[0_18px_36px_-22px_rgba(0,0,0,0.22)] hover:-translate-y-1 transition-all duration-300"
 >
 <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-warm)] text-[var(--color-primary)] flex items-center justify-center mb-4">
 <Icon size={24} strokeWidth={1.8} />
 </div>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] md:text-[20px] text-[var(--color-primary)] leading-tight mb-2">
 {t.title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-text-muted)]">
 {t.body}
 </p>
 </div>
 );
 })}
 </div>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* What's included */}
 <section className="relative bg-white py-20 md:py-28 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">SCOPE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What&apos;s Included{" "}
 <em className="italic font-light">in a McCoy Maintenance Route</em>
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
 {includedScope.map((section) => (
 <div key={section.heading} className="bg-[var(--color-bg-warm)] rounded-2xl p-6 md:p-7">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[20px] text-[var(--color-primary)] mb-4 pb-3 border-b border-[var(--color-border)]">
 {section.heading}
 </h3>
 <ul className="flex flex-col gap-3">
 {section.items.map((item) => (
 <li key={item} className="flex items-start gap-2.5 text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-text)]">
 <CheckCircle2 size={18} className="text-[var(--color-accent-mid)] flex-shrink-0 mt-[2px]" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Photo strip */}
 <section className="relative">
 <div className="relative h-[320px] md:h-[460px] overflow-hidden">
 <Image
 src="/maintenance/Center.png"
 alt="A McCoy Landscape Group crew keeping an Oakville property's lawn, beds, and hardscape crisp through the season"
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
 A MCCOY MAINTENANCE ROUTE · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Lawns, beds, and hardscape kept crisp and healthy through every
 season.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Why McCoy */}
 <section className="relative bg-[var(--color-primary)] text-white py-20 md:py-28 overflow-hidden">
 <TopoBG shape="shape_04" position="bottom-right" size={620} opacity={0.18} tint="white" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">WHY MCCOY FOR MAINTENANCE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3 mb-5">
 25 Years of Caring for{" "}
 <em className="italic font-light text-[var(--color-accent)]">Oakville-Area Landscapes</em>
 </h2>
 </div>

 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
 {whyMcCoyBullets.map((b) => (
 <li key={b} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-5">
 <CheckCircle2 size={22} className="text-[var(--color-accent)] flex-shrink-0 mt-[2px]" />
 <span className="text-[15px] md:text-[16px] leading-[1.55] text-white/95">{b}</span>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* Process */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-28 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={520} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">HOW WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 From First Call to{" "}
 <em className="italic font-light">Recurring Care</em>
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
 {processSteps.map((step, i) => {
 const stepPhotos = [
 "/images/14-about-trailer.jpg",
 "/images/10-process-consultation.jpg",
 "/images/11-process-excavation.jpg",
 "/images/12-process-installation.jpg",
 "/images/13-process-handoff.jpg",
 ];
 return (
 <div key={step.title} className="relative bg-white rounded-2xl overflow-hidden border border-[var(--color-border)] flex flex-col">
 <div className="relative aspect-square w-full overflow-hidden">
 <Image
 src={stepPhotos[i]}
 alt={`${step.title} — McCoy Landscape Group maintenance process`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 320px"
 />
 <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[14px] shadow-md">
 {i + 1}
 </span>
 </div>
 <div className="p-5 flex-1">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[16px] text-[var(--color-primary)] leading-tight mb-2">
 {step.title}
 </h3>
 <p className="text-[13px] md:text-[14px] leading-[1.5] text-[var(--color-text-muted)]">
 {step.body}
 </p>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Maintenance FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 {/* Related services */}
 <section className="relative bg-[var(--color-bg-warm)] py-16 md:py-20 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[680px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">RELATED SERVICES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(24px,3vw,36px)] text-[var(--color-primary)] mt-3">
 Build It, Then{" "}
 <em className="italic font-light">Keep It Looking Built</em>
 </h2>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { label: "Softscape Services", href: "/services/softscape" },
 { label: "Paver Patios", href: "/services/paver-patios" },
 { label: "Retaining Walls", href: "/services/retaining-walls" },
 { label: "Outdoor Living", href: "/services/outdoor-living" },
 ].map((s) => (
 <Link
 key={s.href}
 href={s.href}
 className="bg-white rounded-xl p-5 border border-[var(--color-border)] hover:border-[var(--color-accent-mid)] hover:shadow-[0_12px_28px_-18px_rgba(0,0,0,0.22)] transition-all duration-300 text-center"
 >
 <span className="font-[family-name:var(--font-display)] font-bold text-[15px] md:text-[16px] text-[var(--color-primary)]">
 {s.label}
 </span>
 </Link>
 ))}
 </div>
 </div>
 </section>

 <FinalCTA
 bgImage="/maintenance/End.png"
 bgAlt="A well-maintained landscape glowing at twilight in Oakville by McCoy Landscape Group"
 />
 <Footer />
 </>
 );
}
