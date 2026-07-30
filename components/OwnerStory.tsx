import TopoBG from "@/components/TopoBG";

/**
 * OwnerStory — humanized ownership trust block for service area pages.
 *
 * Surfaces Alex Medeiros + Pieter as the actual humans behind every build in
 * a given city. Closes the GEO+SEO E-E-A-T gap: location pages had no named
 * authority signal beyond the global Organization schema.
 *
 * Place near the bottom of a location page, after the Why-McCoy block and
 * before the FinalCTA, so trust is reinforced right before the conversion ask.
 */
export type OwnerStoryProps = {
 city: string;
 /** Single phrase describing the focus area, e.g. "south Oakville — Oakville, Glen Abbey, Kerr Village, Oakville" */
 focusPhrase: string;
 /** Single sentence explaining why this geography demands more from a build */
 whyHere: string;
};

export default function OwnerStory({ city, focusPhrase, whyHere }: OwnerStoryProps) {
 const eyebrow = `OWNER-OPERATED IN ${city.toUpperCase()}`;

 return (
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_05" position="top-right" size={460} opacity={0.1} tint="accent" />
 <div className="relative mx-auto max-w-[1100px] px-5 md:px-10 lg:px-16">
 <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
 <div>
 <span className="eyebrow text-[var(--color-accent-mid)]">{eyebrow}</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.1] text-[clamp(28px,3.4vw,40px)] text-[var(--color-primary)] mt-3">
 The same crew is on every job —{" "}
 <em className="italic font-light">start to finish.</em>
 </h2>
 </div>
 <div className="space-y-5">
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 McCoy was founded in 2001 and has been owner-operated since 2024 by{" "}
 <strong>Alex</strong> and <strong>Pieter</strong> - both long-time
 McCoy crew before they bought the company together. They run every{" "}
 {city} build personally: site walk, design, install, final wash-down.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 That&rsquo;s why our heaviest focus is the {focusPhrase}. {whyHere}
 </p>
 <p
 className="text-[20px] md:text-[24px] text-[var(--color-accent-mid)] mt-2"
 style={{ fontFamily: "var(--font-signature)" }}
 >
 - Alex &amp; Pieter, Owners
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
