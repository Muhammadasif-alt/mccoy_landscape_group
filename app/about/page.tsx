import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "About McCoy Landscape Group | Owner-Operated Since 2001",
 description:
 "Meet Alex Medeiros & Pieter Meeussen - long-time McCoy crew, now owners. 25 years of hardscape in Oakville, Burlington & Mississauga. Call (416) 985-9771.",
 alternates: { canonical: "/about" },
};

const values = [
 {
 title: "Craftsmanship Over Corners-Cut",
 body: "The hidden work matters more than the visible surface.",
 },
 {
 title: "Transparent Pricing & Honest Communication",
 body: "Written estimates, no change-order games.",
 },
 {
 title: "Built Right the First Time",
 body: "Proper base, proper drainage, done once.",
 },
 {
 title: "Clean Crews, Respectful Job Sites",
 body: "Your property stays neat from day one to handoff.",
 },
 {
 title: "Standing Behind Our Work",
 body: "3-year hardscape warranty covering sink, level, and cracking.",
 },
 {
 title: "Long-Term Client Relationships",
 body: "15+ year relationships are the standard, not the exception.",
 },
];

const whatWeDont = [
 "We don't subcontract major builds — owners are on every project",
 "We don't quote over the phone — every estimate follows an on-site walk",
 "We don't push upgrades you don't need — scope matches the property",
 "We don't disappear after handoff — the warranty is in writing for a reason",
];

const proofBullets = [
 "25+ years of McCoy hardscape and landscape work across Oakville, Burlington, Mississauga, and Milton",
 "200+ completed hardscape projects since 2001",
 "250+ properties served, many with 15+ year relationships",
 "Techo-Bloc, Unilock, and Permacon preferred suppliers",
 "Techo-Bloc Authorized Contractor certification in progress",
 "3-year hardscape warranty + customer satisfaction guarantee",
];

const recentWork = [
 "/images/01-hero-outdoor-living-golden-hour.jpg",
 "/images/09-showcase-signature-build.jpg",
 "/images/07-showcase-retaining-hillside.jpg",
 "/images/05-card-outdoor-living.jpg",
];

export default function AboutPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="ABOUT MCCOY"
 title="Owner-Operated Hardscape Design-Build —"
 subtitle="West GTA Since 2001"
 opening={
 <>
 McCoy Landscape Group is a West GTA hardscape design-build
 company, owner-operated by Alex Medeiros and Pieter Meeussen - the
 two long-time crew members who bought the business they&apos;d
 worked in for six years. Call <strong>(416) 985-9771</strong> to
 talk about your project.
 </>
 }
 imageSrc="/images/14-about-trailer.jpg"
 imageAlt="McCoy Landscape Group wrapped trailer with topographic-line branding, on a West GTA job site"
 />

 {/* Ownership story with photo */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.14} tint="primary" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
 <div>
 <span className="eyebrow text-[var(--color-accent-mid)]">MEET THE TEAM</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Alex Medeiros &amp; Pieter Meeussen -{" "}
 <em className="italic font-light">Owner-Operators</em>
 </h2>

 <div className="mb-7">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[20px] md:text-[22px] text-[var(--color-primary)] mb-2">
 Alex Medeiros — Co-Owner
 </h3>
 <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-text)]">
 Alex leads design and client communication. He&apos;s the
 person you&apos;ll talk to on the first call, the one
 walking your property, scoping the build, and writing the
 estimate. Six years on McCoy crews before purchasing the
 company, so everything he quotes is grounded in what it
 actually takes to install it.
 </p>
 </div>

 <div className="mb-7">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[20px] md:text-[22px] text-[var(--color-primary)] mb-2">
 Pieter Meeussen - Co-Owner
 </h3>
 <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--color-text)]">
 Pieter runs build operations and leads the crew on major
 installs. Base prep depths, compaction, drainage, and the
 hundred decisions that happen during a build are his call.
 Also six years on McCoy crews before co-purchasing the
 company — he&apos;s been running these builds for years.
 </p>
 </div>

 <div className="border-l-[3px] border-[var(--color-accent-mid)] pl-5 mt-6">
 <p
 className="text-[34px] md:text-[44px] text-[var(--color-accent-mid)] leading-[1] mb-1"
 style={{ fontFamily: "var(--font-signature)" }}
 >
 Alex &amp; Pieter
 </p>
 <p className="text-[13px] md:text-[14px] uppercase tracking-[0.08em] text-[var(--color-text-muted)] font-semibold mt-1">
 Owners, McCoy Landscape Group
 </p>
 </div>
 </div>

 <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-[0_18px_44px_-22px_rgba(0,0,0,0.35)]">
 <Image
 src="/images/14-about-trailer.jpg"
 alt="McCoy Landscape Group wrapped trailer with topographic-line branding, on a West GTA job site"
 fill
 className="object-cover"
 sizes="(max-width: 1024px) 100vw, 480px"
 />
 </div>
 </div>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* 25-year history */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[820px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">OUR STORY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 25 Years of West GTA Hardscape —{" "}
 <em className="italic font-light">Handed to the Crew Who Built It</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-5">
 McCoy Landscape Group was founded in the early 2000s and spent
 more than two decades earning a reputation across Oakville, Burlington, Mississauga, and Milton for
 quality hardscape and landscape maintenance work. The company
 grew on word of mouth — neighbour to neighbour, Oakville street
 to Oakville street, Burlington to Mississauga — for a simple
 reason: the work held up.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-5">
 In June 2024, Alex Medeiros and Pieter Meeussen - two crew members
 who&apos;d worked McCoy projects for six years — purchased the
 company from the founding owner. They bought the business
 they&apos;d already been building. Same standards, same
 standards of work, same hands on every major project. New
 ownership energy pointed at one focus: premium hardscape.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Today, McCoy serves Oakville, Burlington, Mississauga, and Milton
 plus surrounding suburbs. Every major build has one of the owners
 on the tools. 200+ projects delivered. 250+ properties served.
 One standard, every time.
 </p>
 </div>
 </div>
 </section>

 {/* Values */}
 <section className="relative bg-[var(--color-bg-dark)] text-white py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_04" position="bottom-right" size={520} opacity={0.18} tint="white" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">WHAT WE STAND FOR</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3 mb-5">
 Our Mission, Vision &amp;{" "}
 <em className="italic font-light text-[var(--color-accent)]">Core Values</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-white/90">
 McCoy&apos;s mission is simple: deliver premium, durable outdoor
 spaces with honest communication and long-term accountability.
 We&apos;re in the business of being the contractor our West GTA
 clients still call 15 years later.
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {values.map((v) => (
 <div
 key={v.title}
 className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
 >
 <CheckCircle2
 size={22}
 className="text-[var(--color-accent)] flex-shrink-0 mt-[2px]"
 />
 <div>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[16px] md:text-[17px] text-white mb-1.5">
 {v.title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.55] text-white/85">
 {v.body}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 <WaveDivider toColor="#ffffff" variant="calm" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* What we don't do */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">JUST AS IMPORTANT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 What McCoy{" "}
 <em className="italic font-light">Doesn&apos;t Do</em>
 </h2>
 </div>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
 {whatWeDont.map((item) => (
 <li
 key={item}
 className="flex items-start gap-3 bg-[var(--color-bg-warm)] rounded-xl p-5 shadow-[0_4px_18px_-12px_rgba(0,0,0,0.15)]"
 >
 <span className="w-2 h-2 rounded-full bg-[var(--color-accent-mid)] flex-shrink-0 mt-[8px]" />
 <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-text)]">
 {item}
 </span>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* Proof bar */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">PROOF</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Experience, Brands &amp;{" "}
 <em className="italic font-light">Proof You Can Trust</em>
 </h2>
 </div>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
 {proofBullets.map((b) => (
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

 {/* Recent work photo strip */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 mb-10 md:mb-12">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">RECENT WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 A Few Recent{" "}
 <em className="italic font-light">McCoy Builds</em>
 </h2>
 </div>
 </div>

 <div className="relative">
 <div className="relative h-[320px] md:h-[460px] overflow-hidden">
 <Image
 src="/images/01-hero-outdoor-living-golden-hour.jpg"
 alt="Outdoor living space at golden hour by McCoy Landscape Group in Oakville"
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
 {/* Wavy white top, straight bottom */}
 <WaveDivider
 toColor="#ffffff"
 variant="rolling"
 height={90}
 flip
 className="absolute inset-x-0 top-0 z-[2]"
 />
 <div className="absolute inset-0 flex items-end z-[1]">
 <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-20 pb-8 md:pb-10">
 <span className="inline-flex items-center bg-black/55 backdrop-blur-sm px-3 py-1.5 rounded-full !text-[12px] md:!text-[13px] uppercase tracking-[0.12em] font-semibold text-white">
 RECENT MCCOY BUILDS · ON
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Outdoor living, paver patios, and retaining walls — built
 one project at a time, owner on the tools.
 </p>
 </div>
 </div>
 </div>
 </div>

 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 mt-10 md:mt-12">
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
 {recentWork.map((src, i) => (
 <div
 key={src}
 className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)]"
 >
 <Image
 src={src}
 alt={`Recent McCoy Landscape Group hardscape build in West GTA — image ${i + 1}`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 50vw, 25vw"
 />
 </div>
 ))}
 </div>
 </div>
 </section>

 <FinalCTA />
 <Footer />
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "AboutPage",
 url: "https://mccoylandscapegroup.com/about",
 name: "About McCoy Landscape Group",
 about: { "@id": "https://mccoylandscapegroup.com/#organization" },
 mainEntity: {
 "@type": "Organization",
 "@id": "https://mccoylandscapegroup.com/#organization",
 foundingDate: "2001",
 founder: [
 { "@type": "Person", name: "Alex Medeiros" },
 { "@type": "Person", name: "Pieter Meeussen" },
 ],
 },
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://mccoylandscapegroup.com/" },
 { "@type": "ListItem", position: 2, name: "About", item: "https://mccoylandscapegroup.com/about" },
 ],
 },
 ],
 }}
 />
 </>
 );
}
