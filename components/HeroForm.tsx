"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";
import ConsentCheckbox from "./ConsentCheckbox";
import { submitLead } from "@/lib/submitLead";

/**
 * HeroForm — DESKTOP-ONLY inline form straddling the hero/trust-strip seam.
 *
 * Mobile + the popup version live in `QuoteModal.tsx` (mounted globally
 * in app/layout.tsx). Any "Book Free Consultation" CTA anywhere on the
 * site dispatches `mccoy:open-quote-modal` to open that.
 */
export default function HeroForm() {
 const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
 const [errorMsg, setErrorMsg] = useState<string>("");
 const formRef = useRef<HTMLFormElement>(null);

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
 website: String(fd.get("website") || ""),
 form_source: "hero-form",
 page_url: typeof window !== "undefined" ? window.location.href : "",
 referrer: typeof document !== "undefined" ? document.referrer : "",
 });

 if (result.ok) {
 setStatus("success");
 formRef.current?.reset();
 } else {
 setStatus("error");
 setErrorMsg(result.error || "Something went wrong. Please call (416) 985-9771.");
 }
 };

 if (status === "success") {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4 }}
 className="relative mx-auto max-w-[1200px] bg-white rounded-[28px] px-8 md:px-10 py-10 md:py-12 shadow-[var(--shadow-floating)] z-30 text-center"
 >
 <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-4">
 <CheckCircle2 size={36} className="text-[var(--color-primary)]" strokeWidth={2} />
 </div>
 <h3 className="text-[22px] md:text-[26px] font-bold font-[family-name:var(--font-display)] text-[var(--color-primary)] mb-2">
 Thanks — we&rsquo;ve got it.
 </h3>
 <p className="text-[15px] md:text-[16px] text-[var(--color-text)] max-w-[520px] mx-auto leading-[1.6]">
 Alex or Pieter will review your project and reach out within 24–48 hours
 to schedule your free on-site consultation.
 </p>
 </motion.div>
 );
 }

 return (
 <motion.form
 ref={formRef}
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
 className="relative mx-auto max-w-[1200px] bg-white rounded-[28px] px-8 md:px-10 py-7 md:py-8 shadow-[var(--shadow-floating)] z-30"
 onSubmit={handleSubmit}
 >
 <FormHeader />
 <FormFields />
 {/* Honeypot — hidden from real users, bots fill it */}
 <input
 type="text"
 name="website"
 tabIndex={-1}
 autoComplete="off"
 aria-hidden="true"
 style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
 />
 <FormFooter status={status} errorMsg={errorMsg} />
 </motion.form>
 );
}

function FormHeader() {
 return (
 <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
 <div>
 <h3 className="text-[22px] md:text-[24px] text-[var(--color-primary)] font-bold font-[family-name:var(--font-display)] leading-tight">
 Start Your Outdoor Project
 </h3>
 <p className="text-[13px] text-[var(--color-text-muted)] mt-1 font-medium">
 Free on-site consultation · 24–48 hour reply
 </p>
 </div>
 </div>
 );
}

function FormFields() {
 return (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
 <div className="col-span-2">
 <Field name="full_name" label="Full Name" type="text" placeholder="Your name" required />
 </div>
 <Field name="phone" label="Phone" type="tel" placeholder="(416) 000-0000" required />
 <Field name="email" label="Email" type="email" placeholder="you@example.com" required />
 <Select
 name="city"
 label="City / Area"
 required
 options={["Oakville", "Burlington", "Mississauga", "Milton", "Waterdown", "Flamborough", "Other"]}
 />
 <Select
 name="service"
 label="Service"
 required
 options={[
 "Paver Patio / Walkway",
 "Paver Driveway",
 "Retaining Wall",
 "Outdoor Living",
 "Landscape Lighting",
 "Full Yard",
 "Other",
 ]}
 />
 <div className="col-span-2">
 <Select
 name="budget"
 label="Budget"
 options={["Under $15K", "$15K – $30K", "$30K – $50K", "$50K – $100K", "$100K+", "Not sure yet"]}
 />
 </div>
 </div>
 );
}

function FormFooter({
 status,
 errorMsg,
}: {
 status: "idle" | "loading" | "success" | "error";
 errorMsg: string;
}) {
 return (
 <div className="mt-5 pt-5 border-t border-[var(--color-border)] flex flex-col gap-4">
 <ConsentCheckbox />
 <div className="flex flex-wrap items-center justify-between gap-4">
 <p className="text-[13px] text-[var(--color-text-muted)] max-w-[540px] leading-[1.55]">
 {status === "error" ? (
 <span className="text-red-600">{errorMsg}</span>
 ) : (
 "Every hardscape project backed by our 3-year warranty and customer satisfaction guarantee."
 )}
 </p>
 <Button type="submit" variant="primary" arrow disabled={status === "loading"}>
 {status === "loading" ? "Sending…" : "Send Project Details"}
 </Button>
 </div>
 </div>
 );
}

function Field({
 name,
 label,
 type,
 placeholder,
 required,
}: {
 name: string;
 label: string;
 type: string;
 placeholder?: string;
 required?: boolean;
}) {
 return (
 <label className="flex flex-col gap-1">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.08em]">
 {label}
 </span>
 <input
 name={name}
 type={type}
 placeholder={placeholder}
 required={required}
 className="px-3 py-2.5 border-[1.5px] border-[var(--color-border)] rounded-lg text-[16px] md:text-[14px] text-[var(--color-text)] bg-white transition-colors focus:outline-none focus:border-[var(--color-accent-mid)]"
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
 <label className="flex flex-col gap-1">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.08em]">
 {label}
 </span>
 <select
 name={name}
 required={required}
 defaultValue=""
 className="px-3 py-2.5 border-[1.5px] border-[var(--color-border)] rounded-lg text-[16px] md:text-[14px] text-[var(--color-text)] bg-white transition-colors focus:outline-none focus:border-[var(--color-accent-mid)]"
 >
 <option value="" disabled>
 Select…
 </option>
 {options.map((opt) => (
 <option key={opt} value={opt}>
 {opt}
 </option>
 ))}
 </select>
 </label>
 );
}
