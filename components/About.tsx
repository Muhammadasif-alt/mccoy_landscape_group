"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const bullets = [
 "200+ hardscape projects delivered across Oakville, Burlington, Mississauga, and Milton since 2001",
 "250+ properties serviced — some with 15+ year relationships",
 "Design-build: one team from first walkthrough to final wash-down",
 "Techo-Bloc, Unilock and Permacon — premium material options",
 "3-year hardscape warranty backs every install we build",
];

export default function About() {
 return (
 <section
 className="relative bg-white py-24 md:py-32 overflow-hidden"
 id="about"
 >
 {/* Topo-line accent */}
 <div className="absolute top-10 -left-20 w-[320px] opacity-[0.06] pointer-events-none select-none">
 <Image
 src="/brand/shape_04.svg"
 alt=""
 width={320}
 height={320}
 className="w-full h-auto"
 />
 </div>

 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
 {/* Copy column */}
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 >
 <span className="eyebrow">ABOUT MCCOY LANDSCAPE GROUP</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(32px,3.6vw,48px)] text-[var(--color-primary)] mt-3 mb-6">
 West GTA&apos;s Design-Build Hardscape Team,
 <br />
 <em className="italic font-light">
 Owned by the Crew Who Built It
 </em>
 </h2>

 <p className="text-[17px] leading-[1.7] text-[var(--color-text)] mb-4">
 McCoy Landscape Group is West GTA&apos;s owner-operated{" "}
 <strong className="text-[var(--color-primary)] font-semibold">
 hardscape contractor
 </strong>{" "}
 homeowners have been calling for 25 years — now owned by Alex
 Medeiros and Pieter Meeussen, the two long-time crew members who bought
 the company in 2024 and run every major build themselves. Same
 standards. Same hands. New energy.
 </p>

 <p className="text-[17px] leading-[1.7] text-[var(--color-text)] mb-6">
 We&apos;re a design-build team — we plan, engineer, and install
 complete hardscape and outdoor living projects across Oakville,
 Burlington, Mississauga, and Milton. One crew walks your
 property with you, designs the scope, builds it, and hands it
 off. No subcontracting. No surprises.
 </p>

 <ul className="flex flex-col gap-3">
 {bullets.map((b) => (
 <li
 key={b}
 className="flex items-start gap-3 text-[15px] text-[var(--color-text)] leading-[1.55]"
 >
 <span className="w-2 h-2 rounded-full bg-[var(--color-accent-mid)] mt-[9px] flex-shrink-0" />
 <span>{b}</span>
 </li>
 ))}
 </ul>
 </motion.div>

 {/* Image column with breaking-the-barrier accents */}
 <motion.div
 initial={{ opacity: 0, y: 32 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{
 duration: 0.7,
 delay: 0.15,
 ease: [0.22, 1, 0.36, 1],
 }}
 className="relative"
 >
 {/* Architectural L-corner trace — top-left, outline only */}
 <div
 aria-hidden
 className="absolute -top-4 -left-4 w-24 h-24 border-t-[2px] border-l-[2px] border-[var(--color-accent-mid)] rounded-tl-[20px] z-0 pointer-events-none"
 />
 {/* Architectural L-corner trace — bottom-right (mirrored) */}
 <div
 aria-hidden
 className="absolute -bottom-4 -right-4 w-24 h-24 border-b-[2px] border-r-[2px] border-[var(--color-primary)]/60 rounded-br-[20px] z-0 pointer-events-none"
 />
 {/* Topo contour curl behind image — offset */}
 <div
 aria-hidden
 className="pointer-events-none absolute -bottom-8 -right-8 w-[160px] h-[160px] opacity-[0.35] z-0"
 >
 <Image
 src="/brand/shape_06.svg"
 alt=""
 width={160}
 height={160}
 className="w-full h-full object-contain"
 style={{
 filter:
 "brightness(0) saturate(100%) invert(24%) sepia(14%) saturate(1345%) hue-rotate(87deg) brightness(94%) contrast(87%)",
 }}
 />
 </div>

 {/* Image frame */}
 <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-card-hover)] z-[1]">
 <Image
 src="/images/14-about-trailer.jpg"
 alt="McCoy Landscape Group wrapped trailer with topographic-line branding, parked on a West GTA job site"
 fill
 className="object-cover"
 />
 {/* Signature card overlap (bottom) */}
 <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-5">
 <div className="font-[family-name:var(--font-signature)] font-semibold text-[28px] text-[var(--color-primary)] leading-[1.1]">
 Alex &amp; Pieter
 </div>
 <div className="text-[13px] text-[var(--color-text-muted)] mt-0.5 font-medium">
 Owner-Operators, McCoy Landscape Group
 </div>
 </div>
 </div>

 {/* Floating proof badge — breaks out top-right corner, with stacked depth */}
 <div className="absolute -top-6 -right-6 z-[2] group/badge">
 {/* Shadow-layer card behind — creates stacked depth */}
 <div
 aria-hidden
 className="absolute inset-0 bg-[var(--color-accent-mid)] rounded-2xl translate-x-2 translate-y-2 group-hover/badge:translate-x-3 group-hover/badge:translate-y-3 transition-transform duration-500"
 />
 {/* Thin accent outline layer */}
 <div
 aria-hidden
 className="absolute inset-0 border-2 border-[var(--color-accent)] rounded-2xl -translate-x-1 -translate-y-1 group-hover/badge:-translate-x-1.5 group-hover/badge:-translate-y-1.5 transition-transform duration-500"
 />
 {/* Actual badge */}
 <div className="relative bg-[var(--color-primary)] text-white rounded-2xl px-5 py-4 shadow-[var(--shadow-floating)] rotate-[2deg] group-hover/badge:rotate-0 transition-transform duration-500">
 <div className="font-[family-name:var(--font-display)] font-black text-[28px] leading-none text-[var(--color-accent)]">
 200+
 </div>
 <div className="text-[11px] font-semibold uppercase tracking-[0.08em] mt-0.5 text-white/90">
 West GTA Projects
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
