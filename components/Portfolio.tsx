"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

const filters = [
 "All",
 "Paver Patios & Walkways",
 "Paver Driveways & Front Entrances",
 "Retaining Walls & Terracing",
 "Outdoor Living Spaces",
 "Landscape Lighting Night Views",
];

type Category =
 | "Paver Patios & Walkways"
 | "Paver Driveways & Front Entrances"
 | "Retaining Walls & Terracing"
 | "Outdoor Living Spaces"
 | "Landscape Lighting Night Views";

type Tile = {
 src: string;
 caption: string;
 category: Category;
 span?: "tall" | "wide" | "large";
};

const tiles: Tile[] = [
 {
 src: "/images/09-showcase-signature-build.jpg",
 caption: "Full Outdoor Living Build · Oakville",
 category: "Outdoor Living Spaces",
 span: "large",
 },
 {
 src: "/images/01-hero-outdoor-living-golden-hour.jpg",
 caption: "Paver Patio + Pergola · Oakville",
 category: "Paver Patios & Walkways",
 },
 {
 src: "/images/07-showcase-retaining-hillside.jpg",
 caption: "Terraced Retaining Wall · Burlington",
 category: "Retaining Walls & Terracing",
 span: "tall",
 },
 {
 src: "/images/08-showcase-lighting-dramatic.jpg",
 caption: "Landscape Lighting at Dusk · Oakville",
 category: "Landscape Lighting Night Views",
 span: "wide",
 },
 {
 src: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 caption: "Paver Driveway · Oakville",
 category: "Paver Driveways & Front Entrances",
 },
 {
 src: "/images/15-cta-dusk-invitation.jpg",
 caption: "Fire Feature at Blue Hour · Oakville",
 category: "Outdoor Living Spaces",
 },
 {
 src: "/images/13-process-handoff.jpg",
 caption: "Final Handoff · Oakville",
 category: "Paver Patios & Walkways",
 },
];

const spanClass = (span?: Tile["span"]) => {
 if (span === "large") return "row-span-2 col-span-2";
 if (span === "tall") return "row-span-2";
 if (span === "wide") return "col-span-2";
 return "";
};

export default function Portfolio() {
 const [selected, setSelected] = useState<Tile | null>(null);
 const [activeFilter, setActiveFilter] = useState<string>("All");

 const visibleTiles =
 activeFilter === "All"
 ? tiles
 : tiles.filter((t) => t.category === activeFilter);

 // ESC closes lightbox
 useEffect(() => {
 if (!selected) return;
 const onKey = (e: KeyboardEvent) => {
 if (e.key === "Escape") setSelected(null);
 };
 window.addEventListener("keydown", onKey);
 // Lock scroll while open
 const prev = document.body.style.overflow;
 document.body.style.overflow = "hidden";
 return () => {
 window.removeEventListener("keydown", onKey);
 document.body.style.overflow = prev;
 };
 }, [selected]);

 return (
 <section
 id="portfolio"
 className="relative pb-24 md:pb-32 pt-[160px] md:pt-[200px] bg-white overflow-hidden -mt-[72px] z-[1]"
 style={{
 clipPath:
 "polygon(0% 72px, 3.1% 67px, 6.5% 68px, 9.9% 67px, 13.9% 60px, 21% 52px, 28% 58px, 34.9% 65px, 41.7% 58px, 48.8% 50px, 55.8% 59px, 62.6% 68px, 69.4% 62px, 76.7% 54px, 84.2% 63px, 91.9% 70px, 100% 55px, 100% 100%, 0% 100%)",
 }}
 >
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-10"
 >
 <span className="eyebrow">RECENT WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(32px,3.6vw,48px)] text-[var(--color-primary)] mt-3 mb-3.5">
 See What We&apos;ve Built Across Oakville, Burlington, Mississauga, and Milton
 </h2>
 <p className="text-[17px] text-[var(--color-text-muted)] mb-6">
 Real paver patios, driveways, walls, and outdoor living projects
 across Oakville, Burlington, Mississauga, and Milton.
 </p>
 <div className="flex flex-wrap justify-center gap-2.5 mb-12">
 {filters.map((f) => {
 const isActive = activeFilter === f;
 return (
 <button
 key={f}
 type="button"
 onClick={() => setActiveFilter(f)}
 aria-pressed={isActive}
 className={`px-5 py-2.5 rounded-full border-[1.5px] text-[13px] font-semibold transition-all duration-200 cursor-pointer ${
 isActive
 ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
 : "bg-white text-[var(--color-text)] border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)]"
 }`}
 >
 {f}
 </button>
 );
 })}
 </div>
 </motion.div>

 {/* Bento grid — mixed spans, click to open lightbox */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px] grid-flow-dense">
 {visibleTiles.map((tile, i) => (
 <motion.button
 type="button"
 key={tile.src}
 onClick={() => setSelected(tile)}
 initial={{ opacity: 0, y: 20, scale: 0.97 }}
 whileInView={{ opacity: 1, y: 0, scale: 1 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{
 duration: 0.6,
 delay: i * 0.06,
 ease: [0.22, 1, 0.36, 1],
 }}
 whileHover={{ y: -4 }}
 className={`group relative text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 rounded-2xl ${spanClass(tile.span)}`}
 aria-label={`View ${tile.caption}`}
 >
 {/* Architectural L-corner trace — bottom-right */}
 <div
 aria-hidden
 className="absolute -bottom-1.5 -right-1.5 w-10 h-10 border-b-[1.5px] border-r-[1.5px] border-[var(--color-accent-mid)]/60 rounded-br-[10px] group-hover:border-[var(--color-primary)] transition-colors duration-300 pointer-events-none z-[2]"
 />
 <div className="relative rounded-2xl overflow-hidden h-full shadow-[var(--shadow-card)] group-hover:shadow-[var(--shadow-card-hover)] transition-shadow duration-300">
 <Image
 src={tile.src}
 alt={tile.caption}
 fill
 className="object-cover group-hover:scale-[1.06] transition-transform duration-[600ms]"
 />
 {/* Location pill */}
 <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[var(--color-primary)] text-[11px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full shadow-sm z-[1]">
 {tile.caption.split("·")[1]?.trim() || "West GTA"}
 </div>
 {/* Caption overlay on hover */}
 <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,20,17,0.85),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
 <div className="text-white text-[14px] font-semibold">
 {tile.caption}
 </div>
 </div>
 </div>
 </motion.button>
 ))}
 </div>

 <div className="text-center mt-10">
 <Link
 href="/gallery"
 className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-full font-semibold text-[15px] hover:bg-[var(--color-primary)] hover:text-white transition-colors"
 >
 View Full Gallery
 <ArrowRight size={16} />
 </Link>
 </div>
 </div>

 {/* Lightbox modal */}
 <AnimatePresence>
 {selected && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.25 }}
 className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
 onClick={() => setSelected(null)}
 role="dialog"
 aria-modal="true"
 aria-label="Project image"
 >
 <motion.div
 initial={{ scale: 0.94, y: 16, opacity: 0 }}
 animate={{ scale: 1, y: 0, opacity: 1 }}
 exit={{ scale: 0.94, y: 16, opacity: 0 }}
 transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
 className="relative w-full max-w-[1200px] max-h-full"
 onClick={(e) => e.stopPropagation()}
 >
 <div className="relative w-full aspect-[4/3] max-h-[85vh] rounded-2xl overflow-hidden shadow-[var(--shadow-floating)]">
 <Image
 src={selected.src}
 alt={selected.caption}
 fill
 className="object-contain bg-black"
 priority
 />
 </div>
 <div className="mt-4 flex items-end justify-between gap-4">
 <div className="text-white">
 <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-accent)] mb-1">
 {selected.caption.split("·")[1]?.trim() || "West GTA"}
 </div>
 <div className="font-[family-name:var(--font-display)] text-[20px] md:text-[24px] font-bold">
 {selected.caption.split("·")[0].trim()}
 </div>
 </div>
 <button
 onClick={() => setSelected(null)}
 className="flex items-center gap-2 text-white/80 hover:text-white text-[13px] font-semibold uppercase tracking-[0.08em]"
 aria-label="Close"
 >
 Close <X size={18} strokeWidth={2.2} />
 </button>
 </div>
 </motion.div>
 </motion.div>
 )}
 </AnimatePresence>
 </section>
 );
}
