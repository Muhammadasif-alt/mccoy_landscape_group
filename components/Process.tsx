"use client";

import { motion } from "framer-motion";
import TopoBG from "./TopoBG";

const steps = [
 {
 n: "01",
 title: "Initial Call or Form",
 body: "Share your project goals, timeline, and budget.",
 },
 {
 n: "02",
 title: "On-Site Consultation",
 body: "We walk the property, measure, and assess drainage and access.",
 },
 {
 n: "03",
 title: "Design & Estimate",
 body: "Transparent scope, materials, and investment — all in writing.",
 },
 {
 n: "04",
 title: "Build & Daily Cleanup",
 body: "Owner-led crew, clear communication, respectful job site every day.",
 },
 {
 n: "05",
 title: "Walkthrough & Warranty",
 body: "Confirm details, hand off care tips, activate 3-year warranty.",
 },
];

export default function Process() {
 return (
 <section className="py-24 md:py-32 bg-white relative overflow-hidden">
 <TopoBG shape="shape_06" position="bottom-right" size={760} opacity={0.18} tint="primary" flip />
 <TopoBG shape="shape_04" position="top-left" size={640} opacity={0.15} tint="accent" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-14 max-w-[720px] mx-auto"
 >
 <span className="eyebrow">HOW WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(32px,3.6vw,48px)] text-[var(--color-primary)] mt-3 mb-3.5">
 Our Design-Build Process, Step by Step
 </h2>
 <p className="text-[17px] text-[var(--color-text-muted)]">
 Simple. Guided. Same team from the first phone call through the
 final walk-through. No subcontracting, no handoffs, no mystery.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-6 lg:gap-4 pt-8">
 {steps.map((s, i) => (
 <motion.div
 key={s.n}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{
 duration: 0.5,
 delay: i * 0.08,
 ease: [0.22, 1, 0.36, 1],
 }}
 className={`group relative bg-white px-7 pt-14 pb-8 rounded-2xl border-[1.5px] border-[var(--color-border)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-300 ${i % 2 === 1 ? "lg:mt-10" : ""}`}
 >
 {/* Oversized step number — bleeds out top-left, breaks the container wall */}
 <div
 aria-hidden
 className="absolute -top-8 -left-4 font-[family-name:var(--font-display)] font-black text-[96px] leading-none text-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)]/50 transition-colors duration-300 select-none pointer-events-none"
 >
 {s.n}
 </div>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[17px] text-[var(--color-primary)] mb-2 leading-[1.3] relative">
 {s.title}
 </h3>
 <p className="text-[14px] text-[var(--color-text-muted)] leading-[1.55] relative">
 {s.body}
 </p>
 </motion.div>
 ))}
 </div>

 <p className="text-center mt-10 text-[14px] text-[var(--color-text-muted)] italic">
 Larger hardscape projects book 6–12 weeks ahead in peak season —
 reach out early to lock in your slot.
 </p>
 </div>
 </section>
 );
}
