/**
 * SVG wave/curve dividers for section transitions (per CLAUDE.md Design Craft rules).
 * Rotate variants across the page: gentle / steep / stepped / layered.
 * Color the `fill` to match the BOTTOM section's bg.
 */

type Variant = "gentle" | "steep" | "stepped" | "layered";

export default function SectionDivider({
 variant = "gentle",
 fill = "#ffffff",
 flip = false,
 height = 80,
 className = "",
}: {
 variant?: Variant;
 fill?: string;
 flip?: boolean;
 height?: number;
 className?: string;
}) {
 const paths: Record<Variant, string> = {
 gentle:
 "M0,64 C240,0 480,112 720,80 C960,48 1200,16 1440,72 L1440,120 L0,120 Z",
 steep:
 "M0,0 C360,120 720,0 1080,80 C1260,120 1380,92 1440,72 L1440,120 L0,120 Z",
 stepped:
 "M0,80 L320,80 L320,40 L640,40 L640,88 L960,88 L960,32 L1280,32 L1280,72 L1440,72 L1440,120 L0,120 Z",
 layered:
 "M0,56 C320,8 640,104 960,48 C1200,8 1320,64 1440,40 L1440,120 L0,120 Z",
 };

 return (
 <div
 aria-hidden
 className={`w-full pointer-events-none block ${className}`}
 style={{ height, lineHeight: 0, marginTop: -1 }}
 >
 <svg
 viewBox="0 0 1440 120"
 preserveAspectRatio="none"
 className="w-full h-full"
 style={{ transform: flip ? "scaleY(-1)" : undefined, display: "block" }}
 >
 <path d={paths[variant]} fill={fill} />
 </svg>
 </div>
 );
}
