"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import Button from "./Button";
import ConsentCheckbox from "./ConsentCheckbox";
import { openQuoteModal } from "@/lib/openQuoteModal";

export default function FinalCTA() {
 return (
 <section
 id="contact"
 className="relative pb-28 md:pb-36 pt-[180px] md:pt-[230px] text-white overflow-hidden -mt-[72px] z-[1]"
 style={{
 clipPath:
 "polygon(0% 72px, 3.1% 67px, 6.5% 68px, 9.9% 67px, 13.9% 60px, 21% 52px, 28% 58px, 34.9% 65px, 41.7% 58px, 48.8% 50px, 55.8% 59px, 62.6% 68px, 69.4% 62px, 76.7% 54px, 84.2% 63px, 91.9% 70px, 100% 55px, 100% 100%, 0% 100%)",
 }}
 >
 <div className="absolute inset-0 z-0">
 <Image
 src="/images/15-cta-dusk-invitation.jpg"
 alt="Paver patio with fire feature at dusk in Oakville by McCoy Landscape Group"
 fill
 className="object-cover"
 />
 <div className="absolute inset-0 bg-[linear-gradient(rgba(15,20,17,0.8),rgba(15,20,17,0.85))]" />
 </div>

 <div className="relative z-[1] mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-[840px] mx-auto text-center"
 >
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
 READY TO START?
 </span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.1] text-[clamp(36px,4.2vw,56px)] mt-3 mb-4">
 Let&apos;s Plan Your Outdoor Project
 </h2>
 <p className="text-[18px] text-white/90 leading-[1.6] mb-8">
 Share a little about what you want built and we&apos;ll set up a
 no-pressure consultation. Every hardscape is backed by our 3-year
 warranty.
 </p>

 <div className="flex justify-center gap-3.5 flex-wrap mb-12">
 <Button onClick={openQuoteModal} variant="primary" size="lg" arrow>
 Book Free Consultation
 </Button>
 <Button
 href="tel:+14169859771"
 variant="secondary"
 size="lg"
 icon={<Phone size={16} strokeWidth={2.2} />}
 >
 Call (416) 985-9771
 </Button>
 </div>

 <form
 id="form-bottom"
 onSubmit={(e) => e.preventDefault()}
 className="bg-white text-[var(--color-text)] rounded-3xl p-8 md:p-10 text-left shadow-[var(--shadow-floating)]"
 >
 <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-3.5">
 <Field label="Full Name" type="text" />
 <Field label="Phone" type="tel" />
 <Select
 label="City"
 options={["Oakville", "Burlington", "Mississauga", "Milton"]}
 />
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
 <Select
 label="Service Interest"
 options={[
 "Paver Patio / Walkway",
 "Paver Driveway",
 "Retaining Wall",
 "Outdoor Living",
 "Full Yard",
 ]}
 />
 <Select
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
 </div>
 <div className="mb-3.5">
 <label className="flex flex-col gap-1.5">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.06em]">
 Message (optional)
 </span>
 <input
 type="text"
 placeholder="A few details about your project"
 className="px-3.5 py-3 border-[1.5px] border-[var(--color-border)] rounded-xl text-[16px] md:text-[15px] focus:outline-none focus:border-[var(--color-accent-mid)]"
 />
 </label>
 </div>
 <div className="mt-5 pt-4 border-t border-[var(--color-border)]">
 <ConsentCheckbox />
 </div>
 <div className="flex flex-wrap items-center justify-between gap-5 mt-4">
 <p className="text-[13px] text-[var(--color-text-muted)] max-w-[420px]">
 We reply within 24–48 hours. Mon–Sat, 8am–5pm. Serving Oakville, Burlington, Mississauga, and Milton.
 </p>
 <Button type="submit" variant="primary" arrow>
 Send Project Details
 </Button>
 </div>
 </form>
 </motion.div>
 </div>
 </section>
 );
}

function Field({ label, type }: { label: string; type: string }) {
 return (
 <label className="flex flex-col gap-1.5">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.06em]">
 {label}
 </span>
 <input
 type={type}
 className="px-3.5 py-3 border-[1.5px] border-[var(--color-border)] rounded-xl text-[16px] md:text-[15px] focus:outline-none focus:border-[var(--color-accent-mid)]"
 />
 </label>
 );
}

function Select({ label, options }: { label: string; options: string[] }) {
 return (
 <label className="flex flex-col gap-1.5">
 <span className="text-[12px] font-semibold text-[var(--color-text-muted)] uppercase tracking-[0.06em]">
 {label}
 </span>
 <select
 defaultValue=""
 className="px-3.5 py-3 border-[1.5px] border-[var(--color-border)] rounded-xl text-[16px] md:text-[15px] bg-white focus:outline-none focus:border-[var(--color-accent-mid)]"
 >
 <option value="" disabled>
 Select…
 </option>
 {options.map((o) => (
 <option key={o}>{o}</option>
 ))}
 </select>
 </label>
 );
}
