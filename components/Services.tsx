"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TopoBG from "./TopoBG";

const services = [
 {
 title: "Paver Patios & Walkways",
 body: (
 <>
 Custom <strong>paver patio</strong> Oakville and walkway installations
 built to last decades.
 </>
 ),
 href: "/services/paver-patios",
 image: "/images/03-card-paver-patios.jpg",
 cta: "Explore Paver Patios",
 },
 {
 title: "Paver Driveways",
 body: (
 <>
 Engineered-base <strong>driveway paver installation</strong> Oakville
 homeowners rely on.
 </>
 ),
 href: "/services/paver-driveways",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 cta: "Explore Paver Driveways",
 },
 {
 title: "Retaining Walls",
 body: (
 <>
 The <strong>retaining wall contractor</strong> Burlington grade
 changes and drainage demand.
 </>
 ),
 href: "/services/retaining-walls",
 image: "/images/04-card-retaining-walls.jpg",
 cta: "Explore Retaining Walls",
 },
 {
 title: "Outdoor Living Spaces",
 body: (
 <>
 Pergolas, fire pits, and seating walls — built as one
 scope.
 </>
 ),
 href: "/services/outdoor-living",
 image: "/images/05-card-outdoor-living.jpg",
 cta: "Explore Outdoor Living",
 },
 {
 title: "Landscape Lighting",
 body: (
 <>
 Low-voltage <strong>landscape lighting</strong> Oakville — designed
 with the build, not added after.
 </>
 ),
 href: "/services/landscape-lighting",
 image: "/images/06-card-landscape-lighting.jpg",
 cta: "Explore Landscape Lighting",
 },
 {
 title: "All Services Hub",
 body: <>See our full hardscape and outdoor living service line.</>,
 href: "/services",
 image: "/images/13-process-handoff.jpg",
 cta: "See All Services",
 },
];

export default function Services() {
 return (
 <section
 id="services"
 className="pb-24 md:pb-32 pt-[160px] md:pt-[200px] bg-[var(--color-bg-soft)] relative overflow-hidden -mt-[72px] z-[1]"
 style={{
 clipPath:
 "polygon(0% 72px, 3.1% 67px, 6.5% 68px, 9.9% 67px, 13.9% 60px, 21% 52px, 28% 58px, 34.9% 65px, 41.7% 58px, 48.8% 50px, 55.8% 59px, 62.6% 68px, 69.4% 62px, 76.7% 54px, 84.2% 63px, 91.9% 70px, 100% 55px, 100% 100%, 0% 100%)",
 }}
 >
 <TopoBG shape="shape_02" position="top-right" size={720} opacity={0.18} tint="primary" flip />
 <TopoBG shape="shape_04" position="bottom-left" size={560} opacity={0.15} tint="accent" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-14"
 >
 <span className="eyebrow">WHAT WE BUILD</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(32px,3.6vw,48px)] text-[var(--color-primary)] mt-3 mb-4">
 Hardscape, Outdoor Living &amp; Finishing Services
 </h2>
 <p className="text-[17px] text-[var(--color-text-muted)] max-w-[640px] mx-auto">
 Full-service{" "}
 <strong className="text-[var(--color-primary)] font-semibold">
 hardscape design build
 </strong>{" "}
 Oakville homeowners trust — from paver patios and driveways to
 pergolas, walls, and integrated lighting.
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
 {services.map((s, i) => (
 <motion.div
 key={s.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-60px" }}
 transition={{
 duration: 0.6,
 delay: i * 0.08,
 ease: [0.22, 1, 0.36, 1],
 }}
 >
 <Link
 href={s.href}
 className="group relative block bg-white rounded-[20px] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col"
 >
 {/* Architectural L-corner trace — top-left */}
 <div
 aria-hidden
 className="absolute -top-2 -left-2 w-10 h-10 border-t-[1.5px] border-l-[1.5px] border-[var(--color-accent-mid)]/70 rounded-tl-[8px] group-hover:border-[var(--color-primary)] group-hover:-top-2.5 group-hover:-left-2.5 transition-all duration-300 z-0 pointer-events-none"
 />
 {/* Card wrapper */}
 <div className="relative z-[1] bg-white rounded-[20px] overflow-hidden border-t-[3px] border-transparent group-hover:border-[var(--color-accent)] transition-colors duration-300 h-full flex flex-col">
 {/* Plain div wrapper — previously a motion.div with a
 clipPath whileInView reveal. That broke on iOS Safari:
 framer-motion's IntersectionObserver fires inconsistently
 when combined with clipPath transitions, leaving cards
 permanently clipped (invisible) on mobile. The parent
 motion.div already handles the card's entrance animation
 (opacity + translate) — that's enough. */}
 <div className="aspect-[4/3] overflow-hidden">
 <Image
 src={s.image}
 alt={s.title}
 width={600}
 height={450}
 className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-[600ms]"
 />
 </div>
 <div className="p-6 md:p-7 flex flex-col flex-1">
 <h3 className="font-[family-name:var(--font-display)] text-[22px] font-bold text-[var(--color-primary)] mb-2.5">
 {s.title}
 </h3>
 <p className="text-[14px] text-[var(--color-text-muted)] leading-[1.55] flex-1">
 {s.body}
 </p>
 <span className="inline-flex items-center gap-1.5 mt-4 text-[14px] font-semibold text-[var(--color-accent-mid)] group-hover:text-[var(--color-primary)] transition-colors">
 {s.cta}
 <ArrowRight size={14} />
 </span>
 </div>
 </div>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
