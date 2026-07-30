"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import ConsentCheckbox from "./ConsentCheckbox";
import { submitLead } from "@/lib/submitLead";

/**
 * Global quote-request modal. Mounted ONCE in app/layout.tsx so any
 * page can trigger it via the custom event "mccoy:open-quote-modal".
 */
export default function QuoteModal() {
 const [isOpen, setIsOpen] = useState(false);
 const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
 const [errorMsg, setErrorMsg] = useState<string>("");
 const closeBtnRef = useRef<HTMLButtonElement>(null);
 const formRef = useRef<HTMLFormElement>(null);

 useEffect(() => {
 const handler = () => {
 setStatus("idle");
 setErrorMsg("");
 setIsOpen(true);
 };
 window.addEventListener("mccoy:open-quote-modal", handler);
 return () => window.removeEventListener("mccoy:open-quote-modal", handler);
 }, []);

 useEffect(() => {
 if (!isOpen) return;
 const prev = document.body.style.overflow;
 document.body.style.overflow = "hidden";
 document.body.dataset.modalOpen = "true";
 const onKey = (e: KeyboardEvent) => {
 if (e.key === "Escape") setIsOpen(false);
 };
 window.addEventListener("keydown", onKey);
 closeBtnRef.current?.focus();
 return () => {
 document.body.style.overflow = prev;
 delete document.body.dataset.modalOpen;
 window.removeEventListener("keydown", onKey);
 };
 }, [isOpen]);

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
 message: String(fd.get("message") || ""),
 website: String(fd.get("website") || ""),
 form_source: "quote-modal",
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

 return (
 <AnimatePresence>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.2 }}
 className="fixed inset-0 z-[1000] flex items-stretch md:items-center justify-center md:p-4"
 role="dialog"
 aria-modal="true"
 aria-labelledby="quote-modal-title"
 >
 {/* Backdrop */}
 <button
 type="button"
 aria-label="Close form"
 onClick={() => setIsOpen(false)}
 className="absolute inset-0 bg-black/70 backdrop-blur-sm"
 />

 {/* Sheet */}
 <motion.div
 initial={{ y: 60, opacity: 0 }}
 animate={{ y: 0, opacity: 1 }}
 exit={{ y: 60, opacity: 0 }}
 transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
 className="relative bg-white w-full h-[100dvh] md:h-auto md:max-w-[680px] md:rounded-[28px] md:max-h-[92vh] overflow-y-auto shadow-[var(--shadow-floating)] flex flex-col"
 >
 {/* Header */}
 <div className="flex-shrink-0 bg-white border-b border-[var(--color-border)] px-5 md:px-6 py-3.5 flex items-center justify-between">
 <div className="min-w-0">
 <h3
 id="quote-modal-title"
 className="text-[16px] md:text-[18px] font-bold font-[family-name:var(--font-display)] text-[var(--color-primary)] leading-tight truncate"
 >
 {status === "success" ? "Thanks — we've got it." : "Start Your Outdoor Project"}
 </h3>
 <p className="text-[12px] md:text-[12px] text-[var(--color-text-muted)] mt-0.5">
 {status === "success"
 ? "Alex or Pieter will reach out within 24–48 hours."
 : "Free consultation · Reply in 24–48 hours"}
 </p>
 </div>
 <button
 ref={closeBtnRef}
 type="button"
 aria-label="Close"
 onClick={() => setIsOpen(false)}
 className="w-10 h-10 rounded-full bg-[var(--color-bg-warm)] text-[var(--color-primary)] flex items-center justify-center active:scale-95 transition-transform flex-shrink-0 ml-3"
 >
 <X size={20} strokeWidth={2.4} />
 </button>
 </div>

 {status === "success" ? (
 <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
 <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center mb-4">
 <CheckCircle2 size={36} className="text-[var(--color-primary)]" strokeWidth={2} />
 </div>
 <h4 className="text-[20px] md:text-[22px] font-bold font-[family-name:var(--font-display)] text-[var(--color-primary)] mb-2">
 Project details received
 </h4>
 <p className="text-[15px] text-[var(--color-text)] max-w-[420px] leading-[1.6] mb-6">
 We&rsquo;ll review your project and reach out within 24–48 hours
 to schedule your free on-site consultation.
 </p>
 <button
 type="button"
 onClick={() => setIsOpen(false)}
 className="text-[14px] font-semibold text-[var(--color-accent-mid)] underline-offset-4 hover:underline"
 >
 Close
 </button>
 </div>
 ) : (
 <>
 {/* Form body */}
 <form
 ref={formRef}
 onSubmit={handleSubmit}
 className="flex-1 overflow-y-auto px-5 md:px-6 py-4 md:py-6"
 >
 <ModalFields />
 {/* Honeypot — hidden from real users, bots fill it */}
 <input
 type="text"
 name="website"
 tabIndex={-1}
 autoComplete="off"
 aria-hidden="true"
 style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
 />
 <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
 <ConsentCheckbox compact />
 </div>

 {/* Submit lives inside the form so Enter key works */}
 <div className="hidden md:block mt-5">
 <SubmitButton status={status} errorMsg={errorMsg} />
 </div>
 </form>

 {/* Mobile sticky submit (mirrors the desktop one) */}
 <div className="md:hidden flex-shrink-0 bg-white border-t border-[var(--color-border)] px-5 py-3.5">
 <SubmitButton
 status={status}
 errorMsg={errorMsg}
 onClick={() => formRef.current?.requestSubmit()}
 />
 </div>
 </>
 )}
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 );
}

function SubmitButton({
 status,
 errorMsg,
 onClick,
}: {
 status: "idle" | "loading" | "success" | "error";
 errorMsg: string;
 onClick?: () => void;
}) {
 return (
 <>
 <button
 type={onClick ? "button" : "submit"}
 disabled={status === "loading"}
 onClick={onClick}
 className="w-full bg-[var(--color-primary)] text-white text-[15px] md:text-[16px] font-bold rounded-xl px-5 py-3.5 inline-flex items-center justify-center gap-2 active:scale-[0.99] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
 >
 {status === "loading" ? "Sending…" : "Send Project Details"}
 {status !== "loading" && (
 <span aria-hidden className="text-[var(--color-accent)] text-[18px] leading-none">
 →
 </span>
 )}
 </button>
 {status === "error" ? (
 <p className="text-[12px] text-red-600 text-center mt-2">{errorMsg}</p>
 ) : (
 <p className="text-[12px] text-[var(--color-text-muted)] text-center mt-2">
 3-year warranty · satisfaction guarantee
 </p>
 )}
 </>
 );
}

function ModalFields() {
 return (
 <div className="grid grid-cols-2 gap-2.5 md:gap-3">
 <Field name="full_name" label="Full Name *" type="text" required className="col-span-2" />
 <Field name="phone" label="Phone *" type="tel" required />
 <Field name="email" label="Email *" type="email" required />
 <Select
 name="city"
 label="City *"
 required
 options={["Oakville", "Burlington", "Mississauga", "Milton", "Waterdown", "Flamborough", "Other"]}
 />
 <Select
 name="service"
 label="Service *"
 required
 options={[
 "Paver Patio",
 "Paver Driveway",
 "Retaining Wall",
 "Outdoor Living",
 "Landscape Lighting",
 "Full Yard",
 ]}
 />
 <Select
 name="budget"
 label="Budget"
 options={["Under $15K", "$15K – $30K", "$30K – $50K", "$50K – $100K", "$100K+", "Not sure yet"]}
 className="col-span-2"
 />
 <label className="col-span-2 flex flex-col gap-1">
 <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.08em]">
 Project Details <span className="normal-case tracking-normal text-[var(--color-text-muted)]/70 font-normal">(optional)</span>
 </span>
 <textarea
 name="message"
 rows={3}
 placeholder="Anything else? Property notes, timeline, must-haves, photos coming separately, etc."
 className="px-3 py-2 border-[1.5px] border-[var(--color-border)] rounded-lg text-[16px] md:text-[14px] text-[var(--color-text)] bg-white transition-colors focus:outline-none focus:border-[var(--color-accent-mid)] resize-y min-h-[72px]"
 />
 </label>
 </div>
 );
}

function Field({
 name,
 label,
 type,
 required,
 className = "",
}: {
 name: string;
 label: string;
 type: string;
 required?: boolean;
 className?: string;
}) {
 return (
 <label className={`flex flex-col gap-1 ${className}`}>
 <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.08em]">
 {label}
 </span>
 <input
 name={name}
 type={type}
 required={required}
 className="px-3 py-2 border-[1.5px] border-[var(--color-border)] rounded-lg text-[16px] md:text-[14px] text-[var(--color-text)] bg-white transition-colors focus:outline-none focus:border-[var(--color-accent-mid)]"
 />
 </label>
 );
}

function Select({
 name,
 label,
 options,
 required,
 className = "",
}: {
 name: string;
 label: string;
 options: string[];
 required?: boolean;
 className?: string;
}) {
 return (
 <label className={`flex flex-col gap-1 ${className}`}>
 <span className="text-[11px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.08em]">
 {label}
 </span>
 <select
 name={name}
 required={required}
 defaultValue=""
 className="px-3 py-2 border-[1.5px] border-[var(--color-border)] rounded-lg text-[16px] md:text-[14px] text-[var(--color-text)] bg-white transition-colors focus:outline-none focus:border-[var(--color-accent-mid)]"
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
