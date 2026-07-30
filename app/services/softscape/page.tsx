import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Sprout,
 Trees,
 Layers,
 Droplets,
 Shovel,
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
 title: "Softscape Services Oakville | Sod, Gardens & Mulch | McCoy Landscape Group",
 description:
 "Sod installation, garden bed design, and mulch services in Oakville, Burlington, Mississauga & Milton. Complete softscape that finishes your hardscape. 3-year workmanship warranty. Call (416) 985-9771.",
 alternates: { canonical: "/services/softscape" },
};

const softscapeTypes = [
 {
 icon: Sprout,
 title: "Sod installation",
 body: "Fresh sod laid on graded, amended soil — instant lawn that roots in within 2-3 weeks.",
 },
 {
 icon: Trees,
 title: "Garden bed design & planting",
 body: "Designed plant palettes — mature trees, shrubs, perennials, and ornamental grasses chosen for your light and soil conditions.",
 },
 {
 icon: Layers,
 title: "Mulch installation & top-up",
 body: "Premium hardwood, pine, or cedar mulch installed at proper depth — beds insulated, weeds suppressed, finish polished.",
 },
 {
 icon: Droplets,
 title: "Soil amendment & grading",
 body: "Topsoil, compost, and grade work prepped before sod or planting — the part that decides whether the softscape thrives or struggles.",
 },
 {
 icon: Shovel,
 title: "Bed edging & cleanup",
 body: "Defined bed edges (cut, steel, or paver), removal of old material, and finished transitions to lawn and hardscape.",
 },
 {
 icon: ShieldCheck,
 title: "Softscape paired with hardscape",
 body: "Bundled with paver patio, driveway, or wall builds so the finished space is landscaped, not just installed.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Site Prep",
 items: [
 "Removal of old sod, weeds, and debris",
 "Grade adjustments for proper drainage away from the house",
 "Topsoil and compost delivered and worked into native soil",
 "Bed shapes laid out and approved before edging or planting",
 ],
 },
 {
 heading: "Install",
 items: [
 "Fresh-cut sod laid tight on prepared soil — Kentucky bluegrass blend or alternative on request",
 "Plants installed at correct depth, spacing, and orientation for mature size",
 "Premium mulch (hardwood, pine, or cedar) at 2-3 inch depth — weeds suppressed, moisture retained",
 "Bed edging cut, steel, or paver to define lawn-bed transitions",
 ],
 },
 {
 heading: "Finishing & Care",
 items: [
 "Initial deep watering and rolling for sod",
 "Plant identification card and care guide for the season ahead",
 "Watering schedule walkthrough — most softscape failures are watering failures",
 "3-year workmanship warranty on installation; plant material guarantee per supplier terms",
 ],
 },
];

const whyMcCoyBullets = [
 "Softscape paired with hardscape — one team, one schedule, one quality standard",
 "Topsoil + compost amendment included on every install (most contractors skip this)",
 "Plant palettes designed for your light, soil, and maintenance preference",
 "Mulch sourced from quality Ontario suppliers — no playground or dyed-black filler",
 "Sod laid same-day as delivery — no greenhouse stress sitting on a pallet",
 "Owner-operated — Alex and Pieter walk every softscape job",
];

const processSteps = [
 { title: "Initial Call or Form", body: "Share what you want planted, sodded, or refreshed." },
 { title: "On-Site Consultation", body: "We walk the property, check sun, soil, and drainage, and confirm what fits." },
 { title: "Plant Plan & Detailed Estimate", body: "Sod area, plant list, mulch volumes, edging, and finishing in writing." },
 { title: "Install & Daily Cleanup", body: "Crew on-site, beds prepped, sod laid, plants placed, mulched, edged." },
 { title: "Walkthrough & Care Guide", body: "Watering schedule, care notes, and warranty terms handed off." },
];

const faqs = [
 {
 q: "Do you do softscape on its own, or only paired with hardscape?",
 a: "Both. We're known for hardscape design-build, but softscape (sod, gardens, mulch, edging) runs as its own service or bundles into a hardscape scope. Bundling is common — most clients want the whole space finished, not a beautiful patio surrounded by half-dead lawn.",
 },
 {
 q: "What kind of sod do you install?",
 a: "Standard install is a Kentucky bluegrass blend from Ontario growers — durable, dense, and proven for our climate. We can spec drought-tolerant fescue blends or shade-tolerant varieties on request based on your lot's sun exposure and watering preference.",
 },
 {
 q: "How soon after install can I walk on new sod?",
 a: "Light foot traffic is fine after about 2-3 weeks once the sod has rooted in. Heavy use (kids, dogs, BBQs) — give it a full month minimum. We'll lay it tight against pathways and patios so you have access without walking on the new lawn.",
 },
 {
 q: "What mulch do you use?",
 a: "Premium natural hardwood mulch by default — long-lasting, looks clean, breaks down into the soil. Pine or cedar available on request for specific aesthetics or scent. We don't install dyed-black or rubber mulch — neither belongs in a quality landscape.",
 },
 {
 q: "Can you re-mulch existing beds without replanting?",
 a: "Yes. Bed top-ups are a regular spring job — we strip old material if it's compacted, edge the beds clean, and lay fresh mulch at proper depth. Usually a one-day job depending on bed area.",
 },
 {
 q: "Do you guarantee the plants?",
 a: "Workmanship — installation depth, spacing, and prep — is covered by our 3-year warranty. Individual plant material follows supplier-grower guarantees, which typically run 1 year on woody plants when watering is followed. We walk through the watering plan at handoff because that's where most failures happen.",
 },
];

export default function SoftscapePage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/softscape`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Softscape Services",
 description:
 "Sod installation, garden bed design, plant installation, and mulch services across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Sod Installation", "Garden Design", "Plant Installation", "Mulch Installation"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Softscape", item: URL },
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
 eyebrow="SOFTSCAPE SERVICES"
 title="Softscape That Finishes"
 subtitle="The Whole Landscape"
 opening={
 <>
 Sod installation, garden bed design, plant installation, and mulch services across
 Oakville, Burlington, Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to scope a softscape refresh on its
 own, or bundle it into your next hardscape build — every install
 backed by our 3-year workmanship warranty.
 </>
 }
 imageSrc="/images/softscape-hero.jpg"
 imageAlt="Softscape build — fresh sod lawn, mulched garden beds, ornamental grasses, and Japanese maple on a McCoy Landscape Group install"
 />

 {/* What we do */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-28 overflow-hidden">
 <TopoBG shape="shape_05" position="top-right" size={520} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12 md:mb-14">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE INSTALL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 Sod, Gardens, Mulch{" "}
 <em className="italic font-light">— Done Right</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Softscape is the green half of a finished landscape. We do it the
 same way we do hardscape — proper soil prep, quality material,
 and an install standard that holds up past the first season.
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
 {softscapeTypes.map((t) => {
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
 <em className="italic font-light">in Every Softscape Install</em>
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

 {/* Why McCoy */}
 <section className="relative bg-[var(--color-primary)] text-white py-20 md:py-28 overflow-hidden">
 <TopoBG shape="shape_04" position="bottom-right" size={620} opacity={0.18} tint="white" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">WHY MCCOY FOR SOFTSCAPE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3 mb-5">
 The Same Standard{" "}
 <em className="italic font-light text-[var(--color-accent)]">as Our Hardscape Builds</em>
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
 <em className="italic font-light">Finished Landscape</em>
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
 {processSteps.map((step, i) => (
 <div key={step.title} className="bg-white rounded-2xl p-5 md:p-6 border border-[var(--color-border)]">
 <div className="aspect-square rounded-xl bg-[var(--color-bg-warm)] mb-4 flex items-center justify-center">
 <span className="font-[family-name:var(--font-display)] font-black text-[42px] text-[var(--color-primary)]">
 {String(i + 1).padStart(2, "0")}
 </span>
 </div>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[16px] text-[var(--color-primary)] leading-tight mb-2">
 {step.title}
 </h3>
 <p className="text-[13px] md:text-[14px] leading-[1.5] text-[var(--color-text-muted)]">
 {step.body}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Softscape FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 {/* Related services */}
 <section className="relative bg-[var(--color-bg-warm)] py-16 md:py-20 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[680px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">RELATED SERVICES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(24px,3vw,36px)] text-[var(--color-primary)] mt-3">
 Pair Softscape With{" "}
 <em className="italic font-light">a Hardscape Build</em>
 </h2>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
 {[
 { label: "Paver Patios", href: "/services/paver-patios" },
 { label: "Paver Driveways", href: "/services/paver-driveways" },
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

 <FinalCTA />
 <Footer />
 </>
 );
}
