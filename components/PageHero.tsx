"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import TopoBG from "./TopoBG";
import Button from "./Button";
import WaveDivider from "./WaveDivider";
import { openQuoteModal } from "@/lib/openQuoteModal";

/**
 * Internal-page hero. Smaller and more compact than the homepage Hero.
 * Same visual language: dark photo bg + topo motif + eyebrow + display H1
 * + opening paragraph with phone number + dual CTA. Reuse on every
 * non-home page (services, locations, about, gallery, contact, blog).
 */
export default function PageHero({
 eyebrow,
 title,
 subtitle,
 opening,
 imageSrc,
 imageAlt,
 primaryCta = { label: "Tell Us Your Project", href: "#contact" },
 phone = "(416) 985-9771",
 nextSectionColor = "var(--color-bg-warm)",
}: {
 eyebrow: string;
 title: string;
 subtitle?: string;
 opening: React.ReactNode;
 imageSrc: string;
 imageAlt: string;
 primaryCta?: { label: string; href: string };
 phone?: string;
 /** Bg color of the section directly below the hero — drives the wave divider. */
 nextSectionColor?: string;
}) {
 return (
 <section className="relative text-white overflow-hidden pt-[120px] md:pt-[160px] pb-[100px] md:pb-[140px]">
 <div className="absolute inset-0 z-0 overflow-hidden">
 <Image
 src={imageSrc}
 alt={imageAlt}
 fill
 priority
 className="object-cover scale-[1.02]"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(92deg,rgba(15,20,17,0.96) 18%,rgba(15,20,17,0.65) 60%,rgba(15,20,17,0.35) 100%)",
 }}
 />
 </div>

 <TopoBG shape="shape_02" position="top-right" size={520} opacity={0.18} tint="white" />
 <TopoBG shape="shape_04" position="bottom-left" size={440} opacity={0.14} tint="white" flip />

 <div className="relative z-[2] mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow mb-3 md:mb-4 inline-block text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)] !text-[12px] md:!text-[13px]">
 {eyebrow}
 </span>

 <h1 className="font-[family-name:var(--font-display)] font-black leading-[1.1] text-[28px] md:text-[clamp(36px,4.5vw,56px)] mb-4 md:mb-5 [text-shadow:0_2px_18px_rgba(0,0,0,0.35)]">
 {title}
 {subtitle ? (
 <>
 {" "}
 <em className="italic font-light text-[var(--color-accent)]">
 {subtitle}
 </em>
 </>
 ) : null}
 </h1>

 <div className="text-[15px] md:text-[18px] leading-[1.6] mb-6 max-w-[640px] text-white/95 [&>strong]:text-white [&>strong]:font-bold">
 {opening}
 </div>

 <div className="flex flex-wrap gap-3.5">
 {/* Hash hrefs (#form, #contact, etc.) used to scroll to inline
 forms — now they all open the global QuoteModal. Real URL
 hrefs (e.g. /gallery) still navigate. */}
 {primaryCta.href.startsWith("#") ? (
 <Button onClick={openQuoteModal} variant="primary" size="lg" arrow>
 {primaryCta.label}
 </Button>
 ) : (
 <Button href={primaryCta.href} variant="primary" size="lg" arrow>
 {primaryCta.label}
 </Button>
 )}
 <Button
 href={`tel:${phone.replace(/[^\d+]/g, "")}`}
 variant="secondary"
 size="lg"
 icon={<Phone size={16} strokeWidth={2.2} />}
 >
 Call {phone}
 </Button>
 </div>
 </div>
 </div>

 {/* Wave divider melts the dark hero into the cream section below. */}
 <WaveDivider
 toColor={nextSectionColor}
 variant="calm"
 height={90}
 className="absolute inset-x-0 bottom-0 z-[3]"
 />
 </section>
 );
}
