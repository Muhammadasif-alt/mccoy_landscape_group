"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TopoBG from "./TopoBG";

const areas = [
 {
 city: "Oakville",
 sub: "Premium hardscape installs",
 href: "/service-areas/oakville",
 },
 {
 city: "Burlington",
 sub: "Premium hardscape installs",
 href: "/service-areas/burlington",
 },
 {
 city: "Mississauga",
 sub: "Custom outdoor living",
 href: "/service-areas/mississauga",
 },
 {
 city: "Milton",
 sub: "Custom hardscape design-build",
 href: "/service-areas/milton",
 },
 {
 city: "Waterdown & Flamborough",
 sub: "Plus surrounding suburbs",
 href: "/contact",
 },
];

export default function ServiceAreas() {
 return (
 <section
 id="service-areas"
 className="relative py-24 md:py-32 bg-[var(--color-primary)] text-white overflow-hidden"
 data-section="service-areas"
 >
 {/* TREATMENT C — Layered strata seam (Services light → ServiceAreas dark).
 Cross-section of patio install: paver / sand / gravel base / compacted subgrade.
 Each stratum a thin colored band; bottom matches the dark section, top matches
 the light section above. Faint demarcation lines + tiny architect labels. */}
 <svg
 aria-hidden
 className="absolute top-0 inset-x-0 w-full h-[80px] md:h-[100px] z-[3] pointer-events-none block"
 viewBox="0 0 1440 100"
 preserveAspectRatio="none"
 >
 {/* Stratum 1 — paver surface (matches Services bg-soft) */}
 <rect x="0" y="0" width="1440" height="22" fill="#fafafa" />
 {/* Stratum 2 — sand setting bed */}
 <rect x="0" y="22" width="1440" height="14" fill="#e8dfc8" />
 {/* Stratum 3 — gravel base */}
 <rect x="0" y="36" width="1440" height="22" fill="#9aa884" />
 {/* Stratum 4 — compacted base */}
 <rect x="0" y="58" width="1440" height="14" fill="var(--color-accent-mid)" />
 {/* Stratum 5 — subgrade transition into the dark ServiceAreas bg */}
 <rect x="0" y="72" width="1440" height="28" fill="var(--color-primary)" />
 {/* Faint demarcation lines */}
 <line x1="0" y1="22" x2="1440" y2="22" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
 <line x1="0" y1="36" x2="1440" y2="36" stroke="rgba(0,0,0,0.18)" strokeWidth="0.5" />
 <line x1="0" y1="58" x2="1440" y2="58" stroke="rgba(0,0,0,0.22)" strokeWidth="0.5" />
 <line x1="0" y1="72" x2="1440" y2="72" stroke="rgba(0,0,0,0.3)" strokeWidth="0.5" />
 </svg>

 {/* Dual topo — both sides, white on dark */}
 <TopoBG shape="shape_05" position="bottom-right" size={640} opacity={0.2} tint="white" />
 <TopoBG shape="shape_04" position="top-left" size={520} opacity={0.16} tint="white" flip />

 {/* Huge background "ON" text — bleeds off left edge, breaks the wall.
 Pushed below the layered-strata seam (80-100px tall) so it doesn't get covered. */}
 <div
 aria-hidden
 className="absolute -left-10 top-[120px] pointer-events-none select-none z-0 hidden lg:block"
 >
 <div className="font-[family-name:var(--font-display)] font-black text-[220px] leading-none text-white/[0.05] tracking-tight">
 ON
 </div>
 </div>

 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 >
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">SERVING</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(30px,3.4vw,44px)] mt-3 mb-5">
 Oakville&apos;s Hardscape Specialists —
 <br />
 Built Across West GTA
 </h2>
 <p className="text-[17px] leading-[1.7] text-white/85 mb-4">
 McCoy is based in Oakville and works across Oakville, Burlington, Mississauga, and Milton — the markets where lot sizes, drainage conditions, and freeze–thaw cycles demand real craftsmanship instead of cookie-cutter installs.
 </p>
 <p className="text-[17px] leading-[1.7] text-white/85">
 Every city we serve gets the same install standard, the same crew, and the same 3-year warranty. The kind of projects that are built once and stay level for decades.
 </p>
 </motion.div>

 <motion.ul
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{
 duration: 0.7,
 delay: 0.15,
 ease: [0.22, 1, 0.36, 1],
 }}
 className="flex flex-col gap-4"
 >
 {areas.map((a) => (
 <li key={a.city}>
 <Link
 href={a.href}
 className="group flex items-center justify-between gap-4 px-6 py-5 bg-white/[0.06] border border-white/[0.12] rounded-[14px] hover:bg-white/[0.1] hover:border-[var(--color-accent)] hover:translate-x-1 transition-all duration-300"
 >
 <div>
 <div className="font-bold text-[17px]">{a.city}</div>
 <div className="text-white/65 text-[13px] mt-0.5">
 {a.sub}
 </div>
 </div>
 <ArrowRight
 size={18}
 className="text-[var(--color-accent)] group-hover:translate-x-1 transition-transform"
 />
 </Link>
 </li>
 ))}
 </motion.ul>
 </div>
 </div>
 </section>
 );
}
