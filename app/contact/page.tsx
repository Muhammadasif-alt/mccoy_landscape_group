"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import Button from "@/components/Button";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import ConsentCheckbox from "@/components/ConsentCheckbox";
import { submitLead } from "@/lib/submitLead";

const contactOptions = [
 {
 icon: Phone,
 label: "Phone",
 value: "(416) 985-9771",
 href: "tel:+14169859771",
 note: "Click-to-call on mobile",
 },
 {
 icon: Mail,
 label: "Email",
 value: "info@mccoylandscapegroup.com",
 href: "mailto:info@mccoylandscapegroup.com",
 note: "Replies within 24–48 hours",
 },
 {
 icon: Clock,
 label: "Hours",
 value: "Mon–Sat, 8am–5pm",
 href: null,
 note: "Closed Sundays",
 },
 {
 icon: MapPin,
 label: "Service Area",
 value: "Oakville · Burlington · Mississauga · Milton, ON",
 href: null,
 note: "Oakville · Burlington · Mississauga · Milton",
 },
];

const _serviceAreaListLegacy = [
 "Oakville ",
 "Burlington",
 "Mississauga ",
 "Milton",
 "Waterdown (Case-by-case)",
 "Flamborough (Case-by-case)",
];

const nextSteps = [
 {
 n: "1",
 title: "Initial reply within 24–48 hours",
 body: "We confirm details and flag fit.",
 },
 {
 n: "2",
 title: "On-site consultation",
 body: "We walk the property, measure, assess drainage and access.",
 },
 {
 n: "3",
 title: "Design & detailed estimate",
 body: "Scope, materials, investment in writing.",
 },
 {
 n: "4",
 title: "Schedule & build",
 body: "We lock dates, then the crew handles the rest.",
 },
];

export default function ContactPage() {
 const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
 const [errorMsg, setErrorMsg] = useState<string>("");
 const formRef = useRef<HTMLFormElement>(null);

 const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 e.preventDefault();
 if (status === "loading") return;
 setStatus("loading");
 setErrorMsg("");

 const fd = new FormData(e.currentTarget);
 const result = await submitLead({
 full_name: String(fd.get("full_name") || ""),
 phone: String(fd.get("phone") || ""),
 email: String(fd.get("email") || ""),
 city: String(fd.get("city") || ""),
 service: String(fd.get("service") || ""),
 budget: String(fd.get("budget") || ""),
 message: [
 fd.get("timeline") ? `Timeline: ${fd.get("timeline")}` : "",
 String(fd.get("message") || ""),
 ]
 .filter(Boolean)
 .join("\n\n"),
 website: String(fd.get("website") || ""),
 form_source: "contact-page",
 page_url: typeof window !== "undefined" ? window.location.href : "",
 referrer: typeof document !== "undefined" ? document.referrer : "",
 });

 if (result.ok) {
 setStatus("success");
 formRef.current?.reset();
 if (typeof window !== "undefined") {
 window.scrollTo({ top: 0, behavior: "smooth" });
 }
 } else {
 setStatus("error");
 setErrorMsg(result.error || "Something went wrong. Please call (416) 985-9771.");
 }
 };

 return (
 <>
 <Nav />

 <PageHero
 eyebrow="CONTACT MCCOY"
 title="Contact McCoy Landscape Group —"
 subtitle="Free Consultation"
 opening={
 <>
 Contact McCoy Landscape Group to scope your hardscape or outdoor
 living project across Oakville, Burlington, Mississauga, and
 Milton. Call <strong>(416) 985-9771</strong> or send project
 details below. Every inquiry gets a response within 24–48 hours,
 Mon–Sat 8am–5pm.
 </>
 }
 imageSrc="/images/15-cta-dusk-invitation.jpg"
 imageAlt="McCoy Landscape Group hardscape build at dusk in Oakville, Ontario"
 primaryCta={{ label: "Request Your Free Consultation", href: "#form" }}
 />

 {/* Contact form — first content section after hero so visitors hit it
 immediately. White card sits on warm bg for natural emphasis. */}
 <section
 id="form"
 className="relative bg-[var(--color-bg-warm)] pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden"
 >
 <TopoBG shape="shape_06" position="top-right" size={520} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">FREE CONSULTATION</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 Tell Us About Your{" "}
 <em className="italic font-light">Outdoor Project</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Share a few details about what you want built and your West GTA
 property. We&apos;ll reply within 24–48 hours with next steps
 and an on-site visit timeline. Zero pressure, zero pushy sales.
 </p>
 </div>

 {status === "success" ? (
 <div className="bg-white rounded-3xl p-10 md:p-14 shadow-[0_18px_44px_-22px_rgba(0,0,0,0.18)] border border-[var(--color-border)] text-center">
 <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-4">
 <CheckCircle2 size={36} className="text-[var(--color-primary)]" strokeWidth={2} />
 </div>
 <h3 className="text-[24px] md:text-[28px] font-bold font-[family-name:var(--font-display)] text-[var(--color-primary)] mb-3">
 Thanks &mdash; we&rsquo;ve got it.
 </h3>
 <p className="text-[15px] md:text-[16px] text-[var(--color-text)] max-w-[520px] mx-auto leading-[1.6]">
 Alex or Pieter will review your project and reach out within 24&ndash;48 hours
 to schedule your free on-site consultation. Need to chat sooner?{" "}
 <a href="tel:+14169859771" className="font-semibold text-[var(--color-primary)] underline-offset-2 hover:underline">
 Call (416) 985-9771
 </a>
 .
 </p>
 </div>
 ) : (
 <form
 ref={formRef}
 onSubmit={handleContactSubmit}
 className="bg-white text-[var(--color-text)] rounded-3xl p-8 md:p-10 shadow-[0_18px_44px_-22px_rgba(0,0,0,0.18)] border border-[var(--color-border)]"
 >
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-3.5">
 <Field name="full_name" label="Full Name *" type="text" required />
 <Field name="phone" label="Phone *" type="tel" required />
 <Field name="email" label="Email *" type="email" required />
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
 <Select
 name="city"
 label="City / Area *"
 required
 options={[
 "Oakville",
 "Burlington",
 "Mississauga",
 "Milton",
 "Waterdown",
 "Flamborough",
 "Other",
 ]}
 />
 <Select
 name="service"
 label="Service Interest *"
 required
 options={[
 "Paver Patio / Walkway",
 "Paver Driveway",
 "Retaining Wall",
 "Outdoor Living / Pergola / Fire Pit",
 "Drainage",
 "Landscape Lighting",
 "Full Yard",
 "Other",
 ]}
 />
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
 <Select
 name="budget"
 label="Budget"
 options={[
 "Under $15K",
 "$15K – $30K",
 "$30K – $50K",
 "$50K – $100K",
 "$100K+",
 "Not sure — need guidance",
 ]}
 />
 <Select
 name="timeline"
 label="Desired Timeline"
 options={["ASAP", "This Season", "Next Season", "Just Exploring"]}
 />
 </div>
 <div className="mb-3.5">
 <label className="flex flex-col gap-1.5">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.06em]">
 Message / Project Details
 </span>
 <textarea
 name="message"
 rows={4}
 placeholder="A few details about your project, your property, or your timeline."
 className="px-3.5 py-3 border-[1.5px] border-[var(--color-border)] rounded-xl text-[16px] md:text-[15px] bg-white focus:outline-none focus:border-[var(--color-accent-mid)] resize-y"
 />
 </label>
 </div>
 {/* Honeypot */}
 <input
 type="text"
 name="website"
 tabIndex={-1}
 autoComplete="off"
 aria-hidden="true"
 style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
 />
 <div className="mt-5 pt-4 border-t border-[var(--color-border)]">
 <ConsentCheckbox />
 </div>
 <div className="flex flex-wrap items-center justify-between gap-5 mt-4">
 <p className="text-[13px] max-w-[420px]">
 {status === "error" ? (
 <span className="text-red-600">{errorMsg}</span>
 ) : (
 <span className="text-[var(--color-text-muted)]">
 We reply within 24&ndash;48 hours, Mon&ndash;Sat. Every hardscape backed
 by our 3-year warranty.
 </span>
 )}
 </p>
 <Button type="submit" variant="primary" arrow disabled={status === "loading"}>
 {status === "loading" ? "Sending…" : "Send Project Details"}
 </Button>
 </div>
 </form>
 )}
 </div>
 </section>

 {/* Contact options — hierarchical layout: Phone is the primary CTA
 (large dark-green hero card), Email/Hours/Service Area are
 differentiated secondary cards with distinct visual treatments.
 Avoids the cookie-cutter "4 identical white cards" look. */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_05" position="top-right" size={460} opacity={0.08} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">TALK TO OUR TEAM</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Reach McCoy{" "}
 <em className="italic font-light">Directly</em>
 </h2>
 <p className="text-[15px] md:text-[16px] leading-[1.6] text-[var(--color-text-muted)] italic mt-4">
 No pressure, no pushy sales — just an honest conversation about
 what you want built.
 </p>
 </div>

 {/* PRIMARY — Phone hero card (full width, dark, big number) */}
 <a
 href="tel:+14169859771"
 className="group relative block overflow-hidden rounded-3xl bg-[var(--color-bg-dark)] text-white p-7 md:p-10 mb-5 md:mb-6 transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-24px_rgba(0,0,0,0.55)]"
 >
 <TopoBG shape="shape_04" position="bottom-right" size={340} opacity={0.15} tint="accent" />
 <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center">
 <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[var(--color-accent)] text-[var(--color-bg-dark)] flex items-center justify-center flex-shrink-0 shadow-[0_10px_28px_-10px_rgba(0,0,0,0.4)]">
 <Phone size={32} strokeWidth={2.2} />
 </div>
 <div className="min-w-0">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] !text-[12px]">
 CALL DIRECT — FASTEST RESPONSE
 </span>
 <p className="font-[family-name:var(--font-display)] font-black text-[36px] md:text-[52px] lg:text-[60px] leading-[1] tracking-tight mt-2 text-white">
 (416) 985-9771
 </p>
 <p className="text-[14px] md:text-[15px] text-white/65 mt-2">
 Tap on mobile to call. Mon–Sat · 8am–5pm.
 </p>
 </div>
 <div className="hidden md:flex flex-col items-end gap-1 text-right">
 <span className="text-[13px] uppercase tracking-[0.12em] text-white/55 font-semibold">
 Tap to call
 </span>
 <span
 aria-hidden
 className="text-[var(--color-accent)] text-[44px] leading-none transition-transform duration-300 group-hover:translate-x-1"
 >
 →
 </span>
 </div>
 </div>
 </a>

 {/* SECONDARY — three differentiated cards (Email warm, Hours light, Area dark-tinted) */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
 {/* Email card — cream tone, accent-bordered, word-break for long address */}
 <a
 href="mailto:info@mccoylandscapegroup.com"
 className="group relative block overflow-hidden rounded-2xl bg-white p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)] border border-black/5"
 >
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent-mid)] to-[var(--color-accent)]" />
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-warm)] text-[var(--color-primary)] flex items-center justify-center flex-shrink-0">
 <Mail size={22} strokeWidth={2} />
 </div>
 <div className="min-w-0 flex-1">
 <span className="eyebrow text-[var(--color-accent-mid)] !text-[12px]">
 EMAIL ALEX
 </span>
 <p
 className="font-[family-name:var(--font-display)] font-bold text-[15px] md:text-[16px] text-[var(--color-primary)] mt-1.5 mb-2 leading-tight break-all"
 >
 info@mccoylandscapegroup.com
 </p>
 <p className="text-[13px] md:text-[14px] leading-[1.55] text-[var(--color-text-muted)]">
 Replies within 24–48 hours
 </p>
 </div>
 </div>
 </a>

 {/* Hours card — minimal white with mono-style hours block */}
 <div className="relative overflow-hidden rounded-2xl bg-white p-6 md:p-7 border border-black/5">
 <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-primary)]" />
 <div className="flex items-start gap-4">
 <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center flex-shrink-0">
 <Clock size={22} strokeWidth={2} />
 </div>
 <div className="min-w-0 flex-1">
 <span className="eyebrow text-[var(--color-accent-mid)] !text-[12px]">
 HOURS
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-[18px] md:text-[19px] text-[var(--color-primary)] mt-1.5 leading-tight">
 Mon&ndash;Sat
 </p>
 <p className="text-[14px] md:text-[15px] text-[var(--color-text)] font-semibold tracking-wide">
 8am – 5pm
 </p>
 <p className="text-[12px] md:text-[13px] leading-[1.55] text-[var(--color-text-muted)] mt-2">
 Closed Sundays
 </p>
 </div>
 </div>
 </div>

 {/* Service Area card — dark green tint with map pins motif */}
 <div className="relative overflow-hidden rounded-2xl bg-[var(--color-bg-dark)] text-white p-6 md:p-7">
 <TopoBG shape="shape_06" position="bottom-right" size={220} opacity={0.18} tint="accent" />
 <div className="relative flex items-start gap-4">
 <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] text-[var(--color-bg-dark)] flex items-center justify-center flex-shrink-0">
 <MapPin size={22} strokeWidth={2.2} />
 </div>
 <div className="min-w-0 flex-1">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] !text-[12px]">
 SERVICE AREA
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-[18px] md:text-[19px] mt-1.5 leading-tight text-white">
 Oakville · Burlington · Mississauga · Milton, ON
 </p>
 <p className="text-[12px] md:text-[13px] leading-[1.55] text-white/65 mt-2">
 Plus Waterdown &amp; Flamborough on a case-by-case basis.
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* What happens next */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE NEXT STEPS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 What Happens After{" "}
 <em className="italic font-light">You Reach Out</em>
 </h2>
 </div>
 {/* Vertical timeline — single column, oversized step numbers,
 connecting line down the left, expanded body on the right.
 Distinct from the card-grid pattern above so the page doesn't
 read as "stack of identical card sections." */}
 <ol className="relative max-w-[860px] mx-auto md:mx-0">
 {/* Connecting vertical line — sits behind the number markers */}
 <div
 aria-hidden
 className="absolute left-[27px] md:left-[39px] top-3 bottom-3 w-[2px] bg-[var(--color-accent-mid)]/25"
 />
 {nextSteps.map((s, i) => {
 const isLast = i === nextSteps.length - 1;
 return (
 <li
 key={s.n}
 className={`relative grid grid-cols-[56px_1fr] md:grid-cols-[80px_1fr] gap-5 md:gap-7 ${isLast ? "pb-0" : "pb-10 md:pb-12"}`}
 >
 {/* Oversized number marker */}
 <div className="relative z-[1] flex items-start justify-center">
 <span
 className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-[var(--color-primary)] text-[var(--color-accent)] flex items-center justify-center font-[family-name:var(--font-display)] font-black text-[28px] md:text-[42px] leading-none shadow-[0_10px_24px_-12px_rgba(36,64,48,0.55)]"
 >
 {s.n}
 </span>
 </div>

 {/* Content panel */}
 <div className="pt-1 md:pt-2">
 <span className="eyebrow text-[var(--color-accent-mid)] !text-[12px]">
 Step {s.n} of 4
 </span>
 <h3 className="font-[family-name:var(--font-display)] font-black text-[20px] md:text-[26px] text-[var(--color-primary)] mt-1.5 leading-tight">
 {s.title}
 </h3>
 <p className="text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-text)] mt-2 max-w-[560px]">
 {s.body}
 </p>
 </div>
 </li>
 );
 })}
 </ol>
 <p className="mt-8 text-[14px] md:text-[15px] text-[var(--color-text-muted)] italic max-w-[760px]">
 Spring and summer slots book 6–12 weeks ahead. Reach out early
 for the best timeline options, especially on larger scopes.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Service Areas */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={520} opacity={0.10} tint="accent" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHERE WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 Where McCoy{" "}
 <em className="italic font-light">Works Across Oakville, Burlington, Mississauga & Milton</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 McCoy is based in West GTA and works daily across Oakville,
 Burlington, Mississauga, and Milton. Adjacent West GTA suburbs
 served case-by-case based on scope and scheduling.
 </p>
 </div>

 <ServiceAreaMap />
 </div>
 </section>

 {/* Contact FAQ — wireframe-spec'd. Answers the questions that surface
 on a contact page specifically (timing, prep, area, fit) so visitors
 don't bounce because of a question we never answered. */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="bottom-right" size={500} opacity={0.10} tint="accent" />
 <div className="relative mx-auto max-w-[900px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">FAQS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Common Questions{" "}
 <em className="italic font-light">Before You Reach Out</em>
 </h2>
 </div>
 {/* Editorial Q&A list — no card containers. Pure typography
 hierarchy with a hairline divider + a script-font index marker.
 Reads like a magazine FAQ rather than 6 stacked Lovable boxes. */}
 <div>
 {[
 {
 q: "What happens after I submit the contact form?",
 a: "You get an email confirmation immediately. Alex or Pieter personally reads every inbound and replies within 24-48 hours, Monday through Saturday. If your project sounds like a fit, the next step is a free on-site consultation — typically within 1-2 weeks.",
 },
 {
 q: "Is the consultation really free? Any obligation?",
 a: "Yes, free. Zero obligation. We walk the site, talk through your vision, take measurements and photos, and follow up with a written estimate. Whether you move forward with McCoy is entirely your call.",
 },
 {
 q: "What should I have ready before the consultation?",
 a: "Nothing required. Helpful: a rough sense of what you're picturing (saved photos, Pinterest, screenshots), any constraints you know about (budget ceiling, timeline, HOA rules), and access to the back/side yard so we can see drainage and grade. We'll handle everything else.",
 },
 {
 q: "Do you actually serve my city?",
 a: "Our core service area is Oakville, Burlington, Mississauga, and Milton — every project gets the same install standard, the same crew, and the same warranty. Waterdown and Flamborough are also covered. Adjacent towns are case-by-case — reach out and we'll tell you straight whether McCoy is the right fit.",
 },
 {
 q: "How quickly can you start?",
 a: "Lead time depends on scope and season. Spring and summer slots typically book 6-12 weeks ahead — reach out early for the best timeline. Smaller scopes (walkway repair, lighting add-on) can sometimes slot in sooner. Off-season inquiries (fall, winter) book faster for the following spring.",
 },
 {
 q: "Do I need to be home for the consultation?",
 a: "Helpful but not required. If you can be there, we can walk through ideas in real time and answer questions as they come up. If you can't, we still walk the site and follow up with photos and a written summary so nothing gets missed.",
 },
 ].map(({ q, a }, i) => {
 const num = String(i + 1).padStart(2, "0");
 return (
 <div
 key={q}
 className="grid grid-cols-[44px_1fr] md:grid-cols-[72px_1fr] gap-4 md:gap-7 py-7 md:py-9 border-b border-[var(--color-primary)]/15 last:border-b-0 first:pt-0"
 >
 <div className="pt-1">
 <span
 className="block text-[28px] md:text-[40px] leading-none text-[var(--color-accent-mid)]"
 style={{ fontFamily: "var(--font-signature)" }}
 aria-hidden
 >
 {num}
 </span>
 </div>
 <div>
 <h3 className="font-[family-name:var(--font-display)] font-black text-[20px] md:text-[26px] text-[var(--color-primary)] leading-[1.2] mb-3">
 {q}
 </h3>
 <p className="text-[15px] md:text-[17px] leading-[1.7] text-[var(--color-text)] max-w-[620px]">
 {a}
 </p>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>

 {/* Soft photo invitation strip (no FinalCTA on this page) */}
 <section className="relative">
 <div className="relative h-[260px] md:h-[360px] overflow-hidden">
 <Image
 src="/images/15-cta-dusk-invitation.jpg"
 alt="Completed paver patio with fire feature at dusk in Oakville by McCoy Landscape Group"
 fill
 className="object-cover"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0.45) 0%,rgba(15,20,17,0.25) 35%,rgba(15,20,17,0.7) 100%)",
 }}
 />
 {/* WaveDivider rule: flip=true → flat side is TOP → toColor MUST
 match the bg of the section ABOVE. Section above is the
 Contact FAQ which is bg-warm (cream), NOT white. */}
 <WaveDivider
 toColor="var(--color-bg-warm)"
 variant="rolling"
 height={90}
 flip
 className="absolute inset-x-0 top-0 z-[2]"
 />
 <div className="absolute inset-0 flex items-center z-[1]">
 <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-20 text-center">
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[22px] md:text-[32px] leading-tight max-w-[760px] mx-auto [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Ready to talk? Call{" "}
 <a href="tel:+14169859771" className="text-[var(--color-accent)] underline-offset-4 hover:underline">
 (416) 985-9771
 </a>{" "}
 or use the form above.
 </p>
 </div>
 </div>
 </div>
 </section>

 <Footer />
 </>
 );
}

function Field({
 name,
 label,
 type,
 required,
}: {
 name: string;
 label: string;
 type: string;
 required?: boolean;
}) {
 return (
 <label className="flex flex-col gap-1.5">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.06em]">
 {label}
 </span>
 <input
 name={name}
 type={type}
 required={required}
 className="px-3.5 py-3 border-[1.5px] border-[var(--color-border)] rounded-xl text-[16px] md:text-[15px] bg-white focus:outline-none focus:border-[var(--color-accent-mid)]"
 />
 </label>
 );
}

function Select({
 name,
 label,
 options,
 required,
}: {
 name: string;
 label: string;
 options: string[];
 required?: boolean;
}) {
 return (
 <label className="flex flex-col gap-1.5">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.06em]">
 {label}
 </span>
 <select
 name={name}
 required={required}
 defaultValue=""
 className="px-3.5 py-3 border-[1.5px] border-[var(--color-border)] rounded-xl text-[16px] md:text-[15px] bg-white focus:outline-none focus:border-[var(--color-accent-mid)]"
 >
 <option value="" disabled>
 Select…
 </option>
 {options.map((o) => (
 <option key={o} value={o}>
 {o}
 </option>
 ))}
 </select>
 </label>
 );
}
