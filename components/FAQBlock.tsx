"use client";

import { motion } from "framer-motion";
import TopoBG from "./TopoBG";

export type FAQItem = { q: string; a: string };

type FAQBlockProps = {
 /** Uppercase tracked label above the heading. Defaults to "FAQS". */
 eyebrow?: string;
 /** First line of the heading (rendered bold). */
 headingMain: string;
 /** Second line of the heading (rendered italic light). Optional. */
 headingItalic?: string;
 /** Array of question/answer pairs. */
 faqs: FAQItem[];
};

/**
 * Canonical FAQ section. Visual match to the homepage FAQ component so every
 * page using this block looks identical — only copy differs. Only the contact
 * page intentionally diverges (magazine-style editorial layout).
 */
export default function FAQBlock({
 eyebrow = "FAQS",
 headingMain,
 headingItalic,
 faqs,
}: FAQBlockProps) {
 return (
 <section className="relative py-24 md:py-32 bg-[var(--color-bg-warm)] overflow-hidden">
 <TopoBG shape="shape_05" position="top-right" size={720} opacity={0.22} tint="primary" />
 <TopoBG shape="shape_02" position="bottom-left" size={600} opacity={0.18} tint="accent" flip />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-14"
 >
 <span className="eyebrow">{eyebrow}</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(32px,3.6vw,48px)] text-[var(--color-primary)] mt-3">
 {headingMain}
 {headingItalic ? (
 <>
 <br />
 <em className="italic font-light">{headingItalic}</em>
 </>
 ) : null}
 </h2>
 </motion.div>

 <div className="max-w-[880px] mx-auto flex flex-col gap-5">
 {faqs.map((f, i) => (
 <motion.div
 key={f.q}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{
 duration: 0.5,
 delay: i * 0.05,
 ease: [0.22, 1, 0.36, 1],
 }}
 className="bg-white p-7 md:p-8 rounded-2xl border-l-[3px] border-[var(--color-accent)]"
 >
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] text-[var(--color-primary)] mb-3 leading-[1.4]">
 {f.q}
 </h3>
 <p className="text-[15px] text-[var(--color-text)] leading-[1.65]">
 {f.a}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
