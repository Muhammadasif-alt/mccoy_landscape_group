"use client";

import { useRef } from "react";
import {
 motion,
 useScroll,
 useTransform,
 useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";
import TopoBG from "./TopoBG";
import Button from "./Button";
import { openQuoteModal } from "@/lib/openQuoteModal";

export default function Hero() {
 const heroRef = useRef<HTMLElement>(null);

 // Scroll progress: 0 when section top hits viewport top, 1 when section bottom hits viewport top
 const { scrollYProgress } = useScroll({
 target: heroRef,
 offset: ["start start", "end start"],
 });

 // 1. Parallax background — image drifts at small Y + grows scale so it always covers
 // the section bounds (no empty white strip exposed at top during scroll).
 const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
 const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.3]);

 // 2. Content recedes — headline + copy + CTAs scale, fade, translate, blur as user scrolls past
 const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0.2]);
 const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
 const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
 const contentBlurPx = useTransform(scrollYProgress, [0, 1], [0, 4]);
 const contentFilter = useMotionTemplate`blur(${contentBlurPx}px)`;

 // 3. Vertical signature stamp marches upward + fades out (ticker feel)
 const stampY = useTransform(scrollYProgress, [0, 1], [0, -160]);
 const stampOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

 // 4. Overlay deepens on exit — hands the transition off to the next section
 const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.82, 0.96]);

 return (
 <section
 ref={heroRef}
 className="relative min-h-[68vh] md:min-h-[88vh] text-white overflow-hidden pt-[100px] md:pt-[140px] pb-[60px] md:pb-[180px]"
 >
 {/* Background image (parallax) + animated gradient overlay.
 Image is scaled 1.15x from start (covers ~7.5% beyond section on each side)
 so the 8% Y-translation during scroll never exposes empty bg. */}
 <div className="absolute inset-0 z-0 overflow-hidden">
 <motion.div
 className="absolute inset-0 will-change-transform"
 style={{ y: bgY, scale: bgScale }}
 >
 <video
 className="absolute inset-0 w-full h-full object-cover"
 src="/videos/hero-ambient-v3.mp4"
 poster="/images/09-showcase-signature-build.jpg"
 autoPlay
 loop
 muted
 playsInline
 preload="metadata"
 aria-label="Premium hardscape outdoor living build in Oakville Ontario by McCoy Landscape Group"
 />
 </motion.div>
 <motion.div
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(92deg,rgba(15,20,17,1) 15%,rgba(15,20,17,0.55) 60%,transparent)",
 opacity: overlayOpacity,
 }}
 />
 </div>

 {/* Topo — dual layering, white on dark */}
 <TopoBG shape="shape_02" position="top-right" size={640} opacity={0.22} tint="white" />
 {/* Second topo layer hidden on mobile to prevent the visible overlap of two topo motifs (per client review) */}
 <div className="hidden md:block">
   <TopoBG shape="shape_04" position="bottom-left" size={520} opacity={0.18} tint="white" flip />
 </div>

 {/* Vertical signature stamp — marches up with scroll */}
 <motion.div
 aria-hidden
 className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-[1] hidden lg:block will-change-transform"
 style={{ y: stampY, opacity: stampOpacity }}
 >
 <div className="origin-left rotate-[-90deg] whitespace-nowrap text-white/35 text-[11px] font-semibold uppercase tracking-[0.32em] pl-8">
 Owner-Operated · West GTA · Since 2001
 </div>
 </motion.div>

 {/* Content — recedes behind form on scroll */}
 <motion.div
 className="relative z-[2] mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 will-change-transform"
 style={{
 opacity: contentOpacity,
 scale: contentScale,
 y: contentY,
 filter: contentFilter,
 }}
 >
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-[720px]"
 >
 <span className="eyebrow mb-3 md:mb-4 inline-block text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] !text-[12px] md:!text-[13px]">
 HARDSCAPE DESIGN-BUILD · WEST GTA
 </span>

 <h1 className="font-[family-name:var(--font-display)] font-black leading-[1.08] text-[32px] md:text-[clamp(40px,5.5vw,68px)] mb-4 md:mb-5 [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]">
 Premium Hardscapes{" "}
 <em className="italic font-light text-[var(--color-accent)]">
 built to last
 </em>
 <br />
 Across Oakville &amp; Burlington
 </h1>

 <p className="text-[15px] md:text-[19px] leading-[1.55] md:leading-[1.6] mb-3.5 max-w-[580px] text-white/95">
 Hardscape design-build serving Oakville, Burlington, Mississauga,
 and Milton. Call{" "}
 <strong className="text-white font-bold">(416) 985-9771</strong>{" "}
 for a free on-site consultation — every hardscape install backed by
 our 3-year warranty and customer satisfaction guarantee.
 </p>

 <div className="mb-8" />

 <div className="flex flex-wrap gap-3.5">
 <Button
 variant="primary"
 size="lg"
 arrow
 onClick={openQuoteModal}
 >
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
 </motion.div>
 </motion.div>
 </section>
 );
}
