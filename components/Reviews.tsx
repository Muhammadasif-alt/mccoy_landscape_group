"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TopoBG from "./TopoBG";
import GoogleReviewsWidget from "./GoogleReviewsWidget";

/**
 * Live Google Reviews — pulled from Elfsight widget tied to McCoy's
 * Google Business Profile. Reviews refresh automatically as new ones
 * come in. No more static handcrafted fallback — only real reviews.
 */
export default function Reviews() {
 return (
 <section className="relative py-24 md:py-32 bg-[var(--color-bg-warm)] overflow-hidden">
 <TopoBG shape="shape_04" position="top-left" size={680} opacity={0.2} tint="primary" />
 <TopoBG shape="shape_06" position="bottom-right" size={540} opacity={0.16} tint="accent" flip />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-12"
 >
 <span className="eyebrow">WHAT HOMEOWNERS SAY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(32px,3.6vw,48px)] text-[var(--color-primary)] mt-3 mb-3.5">
 Real Homeowners, Real Hardscape Projects
 </h2>
 <p className="text-[17px] text-[var(--color-text-muted)] max-w-[640px] mx-auto">
 Live Google reviews from real West GTA homeowners — refreshed automatically as new ones come in.
 </p>
 </motion.div>

 <GoogleReviewsWidget />

 <div className="text-center mt-10">
 <Link
 href="https://www.google.com/search?q=McCoy+Landscape+Group+Oakville"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-full font-semibold text-[15px] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
 >
 Leave a Google Review
 <ArrowRight size={16} />
 </Link>
 </div>
 <p className="text-center mt-5 text-[13px] text-[var(--color-text-muted)]">
 Reviews pulled live from McCoy&apos;s Google Business Profile
 </p>
 </div>
 </section>
 );
}
