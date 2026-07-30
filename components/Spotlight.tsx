"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import TopoBG from "./TopoBG";

const features = [
 "Custom paver patios and walkways — built for daily use and entertaining",
 "Retaining and seating walls — engineered for grade, drainage, and durability",
 "Fire pits, pergolas and — rooms without walls",
 "Integrated low-voltage lighting, planting and finishing details",
];

export default function Spotlight() {
 return (
 <section className="relative text-white py-28 md:py-36 overflow-hidden">
 {/* Background */}
 <div className="absolute inset-0 z-0">
 <Image
 src="/images/01-hero-outdoor-living-golden-hour.jpg"
 alt="Full outdoor living build in Oakville at golden hour"
 fill
 className="object-cover"
 />
 <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,20,17,0.85)_30%,rgba(36,64,48,0.55))]" />
 </div>

 {/* Topographic contour seam — the seam between About (white) and this section IS the topo line.
 Three layers: warm-cream shadow contour offset down, white primary, then a sage accent line that draws in
 on viewport entry with survey tick marks. Brand language is "topographic-line motif" + sage = topo strokes. */}
 <svg
 aria-hidden
 className="absolute top-0 inset-x-0 w-full h-[140px] md:h-[180px] z-[3] pointer-events-none block"
 viewBox="0 0 1440 180"
 preserveAspectRatio="none"
 >
 {/* Layer 1: Warm-cream contour offset down — subtle stratum behind the main edge */}
 <path
 d="M0,0 L1440,0 L1440,75 C1280,118 1140,52 1000,82 C870,108 740,48 600,78 C470,104 340,52 200,80 C120,96 60,80 0,92 Z"
 fill="#f5f1e8"
 />
 {/* Layer 2: White primary edge */}
 <path
 d="M0,0 L1440,0 L1440,55 C1280,98 1140,32 1000,62 C870,88 740,28 600,58 C470,84 340,32 200,60 C120,76 60,60 0,72 Z"
 fill="#ffffff"
 />
 {/* Layer 3: Sage accent contour line — draws across as user scrolls in */}
 <motion.path
 d="M0,72 C60,60 120,76 200,60 C340,32 470,84 600,58 C740,28 870,88 1000,62 C1140,32 1280,98 1440,55"
 stroke="var(--color-accent)"
 strokeWidth="1.5"
 strokeLinecap="round"
 fill="none"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 0.75 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{
 pathLength: { duration: 1.8, ease: [0.22, 1, 0.36, 1] },
 opacity: { duration: 0.5 },
 }}
 />
 {/* Layer 4: Survey tick marks dropping from the contour — draftsman/elevation-marker feel */}
 {[
 { x: 200, y: 60 },
 { x: 600, y: 58 },
 { x: 1000, y: 62 },
 ].map((p, i) => (
 <motion.line
 key={p.x}
 x1={p.x}
 y1={p.y}
 x2={p.x}
 y2={p.y + 14}
 stroke="var(--color-accent)"
 strokeWidth="1.2"
 strokeLinecap="round"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 0.6 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{
 pathLength: { duration: 0.5, delay: 1.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
 opacity: { duration: 0.3, delay: 1.2 + i * 0.15 },
 }}
 />
 ))}
 </svg>
 <TopoBG shape="shape_05" position="bottom-right" size={860} opacity={0.28} tint="white" />
 <TopoBG shape="shape_04" position="top-left" size={680} opacity={0.2} tint="white" flip />

 <div className="relative z-[1] mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-[780px]"
 >
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
 SIGNATURE PROJECTS
 </span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(32px,3.6vw,48px)] mt-3 mb-5">
 Complete Outdoor Living Spaces
 <br />
 Across West GTA
 </h2>

 <p className="text-[18px] md:text-[20px] leading-[1.7] text-white/95 mb-8 font-medium">
 McCoy&apos;s highest-investment work is full outdoor living builds - paver patios, fire features, retaining and seating walls, integrated lighting, and drainage, all designed and built as one scope instead of bolted together over three summers.
 </p>

 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-9">
 {features.map((f, i) => (
 <motion.li
 key={f}
 initial={{ opacity: 0, x: -12 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{
 duration: 0.5,
 delay: 0.1 + i * 0.08,
 ease: [0.22, 1, 0.36, 1],
 }}
 className="flex gap-3 items-start px-5 py-4 bg-white/[0.08] border border-white/[0.12] rounded-[14px] text-[15px] text-white/95"
 >
 <span className="text-[var(--color-accent)] font-bold flex-shrink-0">
 →
 </span>
 <span className="leading-[1.5]">{f}</span>
 </motion.li>
 ))}
 </ul>

 <a
 href="/gallery"
 className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-[15px] border-b-[1.5px] border-[var(--color-accent)] pb-1 hover:text-white hover:border-white transition-colors"
 >
 See our outdoor living portfolio
 <ArrowRight size={16} />
 </a>
 </motion.div>
 </div>

 {/* Floating signature stamp — breaks right edge */}
 <div className="absolute right-10 bottom-20 hidden lg:block pointer-events-none select-none z-[2]">
 <div className="relative rotate-[-6deg]">
 {/* Shadow layer */}
 <div className="absolute inset-0 bg-[var(--color-accent-mid)]/40 rounded-2xl translate-x-2 translate-y-2" />
 {/* Stamp */}
 <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl px-7 py-5 shadow-[var(--shadow-floating)] border-2 border-[var(--color-accent)]/50">
 <div className="font-[family-name:var(--font-signature)] text-[var(--color-primary)] text-[26px] leading-tight">
 Signature Build
 </div>
 <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent-mid)] mt-1">
 Oakville · Featured Project
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
