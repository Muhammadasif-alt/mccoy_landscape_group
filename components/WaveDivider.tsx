"use client";

/**
 * Section-to-section wave divider. Place at the BOTTOM of a section.
 * The wave SVG is filled with the NEXT section's bg color so it visually
 * "rises up" out of the next section into this one — never a hard color break.
 *
 * Usage:
 * <section className="bg-warm">
 * ...content...
 * <WaveDivider toColor="var(--color-bg)" />
 * </section>
 * <section className="bg-white">...</section>
 *
 * Variants ride on which path is rendered. Keep variants visually distinct
 * so seam-to-seam doesn't look repetitive on the same page.
 *
 * RULE TO PREVENT WHITE-BAND BUGS:
 * `toColor` MUST equal the bg of the section on the FLAT side of the wave.
 *
 * Default (no flip): flat side is the BOTTOM. toColor = the section BELOW.
 * With `flip`: flat side is the TOP. toColor = the section ABOVE.
 *
 * Bug pattern: photo strip at the top of an image with `flip` and
 * `toColor="#ffffff"` while the section above is cream → visible white band.
 * Set toColor to "var(--color-bg-warm)" (or whatever the section above
 * actually is) so the wave melts into it.
 */
export default function WaveDivider({
 toColor,
 height = 90,
 variant = "calm",
 flip = false,
 className = "",
}: {
 toColor: string;
 height?: number;
 variant?: "calm" | "rolling" | "ridge";
 flip?: boolean;
 className?: string;
}) {
 const paths: Record<typeof variant, string> = {
 calm:
 "M0,70 C240,30 480,90 720,55 C960,20 1200,80 1440,50 L1440,120 L0,120 Z",
 rolling:
 "M0,40 C200,90 420,20 640,55 C880,95 1080,35 1280,70 C1360,80 1410,55 1440,50 L1440,120 L0,120 Z",
 ridge:
 "M0,90 C160,40 320,80 480,55 C640,30 800,80 960,50 C1120,20 1280,70 1440,40 L1440,120 L0,120 Z",
 };

 return (
 <div
 aria-hidden
 className={`block w-full pointer-events-none ${className}`}
 style={{
 height,
 lineHeight: 0,
 transform: flip ? "scaleY(-1)" : undefined,
 }}
 >
 <svg
 viewBox="0 0 1440 120"
 preserveAspectRatio="none"
 className="block w-full h-full"
 >
 <path d={paths[variant]} fill={toColor} />
 </svg>
 </div>
 );
}
