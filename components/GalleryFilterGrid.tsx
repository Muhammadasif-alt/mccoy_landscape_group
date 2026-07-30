"use client";

import { useState } from "react";
import Image from "next/image";
import TopoBG from "./TopoBG";
import WaveDivider from "./WaveDivider";

export type GridItem = {
 src: string;
 alt: string;
 service: string;
 city: string;
 span: string;
 aspect: string;
};

const filterPills = [
 "All",
 "Paver Patios",
 "Driveways",
 "Retaining Walls",
 "Outdoor Living",
 "Lighting",
];

// Maps a filter pill label → which `service` values count as a match.
const FILTER_MAP: Record<string, string[]> = {
 All: [],
 "Paver Patios": ["Paver Patio"],
 Driveways: ["Paver Driveway"],
 "Retaining Walls": ["Retaining Wall"],
 "Outdoor Living": ["Outdoor Living"],
 Lighting: ["Landscape Lighting"],
};

/**
 * Renders BOTH the cream Filter Bar section and the white Grid section
 * because they share `activeFilter` state. Page-level layout keeps its
 * surrounding sections (CTA, etc.) untouched.
 */
export default function GalleryFilterGrid({ items }: { items: GridItem[] }) {
 const [activeFilter, setActiveFilter] = useState<string>("All");

 const matches = FILTER_MAP[activeFilter] ?? [];
 const visible =
 activeFilter === "All"
 ? items
 : items.filter((it) => matches.includes(it.service));

 return (
 <>
 {/* Filter Bar */}
 <section className="relative bg-[var(--color-bg-warm)] py-16 md:py-20 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={560} opacity={0.13} tint="primary" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-8 md:mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">FILTER PROJECTS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Browse by{" "}
 <em className="italic font-light">Service, City, or Budget</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Use the filters to explore projects similar to the space
 you&apos;re planning for your own home.
 </p>
 </div>

 <div className="flex flex-wrap gap-3">
 {filterPills.map((pill) => {
 const isActive = activeFilter === pill;
 return (
 <button
 key={pill}
 type="button"
 onClick={() => setActiveFilter(pill)}
 aria-pressed={isActive}
 className={`inline-flex items-center px-5 py-2.5 rounded-full text-[14px] md:text-[15px] font-semibold border transition-all cursor-pointer ${
 isActive
 ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
 : "bg-white text-[var(--color-primary)] border-[var(--color-border)] hover:border-[var(--color-accent-mid)]"
 }`}
 >
 {pill}
 </button>
 );
 })}
 </div>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Main Gallery Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">RECENT WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 {activeFilter === "All" ? (
 <>
 See What We&apos;ve Built{" "}
 <em className="italic font-light">Across Oakville, Burlington, Mississauga, and Milton</em>
 </>
 ) : (
 <>
 {activeFilter}{" "}
 <em className="italic font-light">Across Oakville, Burlington, Mississauga, and Milton</em>
 </>
 )}
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 {activeFilter === "All"
 ? "McCoy builds across Oakville, Burlington, Mississauga, Milton, across West GTA. Mixed aspect ratios by design - not every project fits a square."
 : `Showing ${visible.length} ${visible.length === 1 ? "project" : "projects"} in ${activeFilter}. Pick another filter to keep browsing.`}
 </p>
 </div>

 <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-5 [column-fill:_balance]">
 {visible.length === 0 ? (
 <p className="text-[15px] text-[var(--color-text-muted)] italic break-inside-avoid">
 No projects in this category yet - check back soon, or pick
 another filter to keep browsing.
 </p>
 ) : (
 visible.map((item) => (
 <figure
 key={item.src + item.service}
 className={`group relative block break-inside-avoid mb-4 md:mb-5 overflow-hidden rounded-2xl shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)] ${item.aspect}`}
 >
 <Image
 src={item.src}
 alt={item.alt}
 fill
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0) 45%,rgba(15,20,17,0.75) 100%)",
 }}
 />
 <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5">
 <span className="eyebrow !text-[12px] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
 {item.service}
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[14px] md:text-[16px] leading-tight mt-1 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
 {item.city}
 </p>
 </figcaption>
 </figure>
 ))
 )}
 </div>
 </div>
 </section>
 </>
 );
}
