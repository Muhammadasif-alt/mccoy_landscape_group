import Image from "next/image";

type Shape = "shape_02" | "shape_04" | "shape_05" | "shape_06";
type Position =
 | "top-left"
 | "top-right"
 | "bottom-left"
 | "bottom-right"
 | "center-right"
 | "center-left";

/**
 * Topographic contour-line signature motif (per brand.md).
 * Tasteful, low-opacity background accent used across sections for visual rhythm.
 * Rotate shapes across adjacent sections so the same contour never repeats in a row.
 */
// Tint filter that colors the SVG's black strokes into brand primary green
const PRIMARY_TINT =
 "brightness(0) saturate(100%) invert(22%) sepia(18%) saturate(1020%) hue-rotate(88deg) brightness(92%) contrast(86%)";
// Tint for accent-mid (lighter sage)
const ACCENT_TINT =
 "brightness(0) saturate(100%) invert(62%) sepia(16%) saturate(650%) hue-rotate(53deg) brightness(92%) contrast(85%)";

export default function TopoBG({
 shape = "shape_02",
 position = "top-right",
 size = 420,
 opacity = 0.14,
 tint = "primary",
 flip = false,
}: {
 shape?: Shape;
 position?: Position;
 size?: number;
 opacity?: number;
 tint?: "primary" | "accent" | "white";
 flip?: boolean;
}) {
 const posClass = {
 "top-left": "-top-10 -left-20",
 "top-right": "-top-10 -right-20",
 "bottom-left": "-bottom-10 -left-20",
 "bottom-right": "-bottom-10 -right-20",
 "center-right": "top-1/2 -translate-y-1/2 -right-32",
 "center-left": "top-1/2 -translate-y-1/2 -left-32",
 }[position];

 const filter =
 tint === "primary" ? PRIMARY_TINT : tint === "accent" ? ACCENT_TINT : "";

 // Radial fade mask so edges of the topo contour feather into the bg
 const fadeMask =
 "radial-gradient(ellipse at center, black 30%, rgba(0,0,0,0.55) 55%, transparent 85%)";

 const imgStyle: React.CSSProperties = {
 WebkitMaskImage: fadeMask,
 maskImage: fadeMask,
 WebkitMaskRepeat: "no-repeat",
 maskRepeat: "no-repeat",
 WebkitMaskSize: "100% 100%",
 maskSize: "100% 100%",
 ...(filter && tint !== "white" ? { filter } : {}),
 };

 return (
 <div
 aria-hidden
 className={`pointer-events-none absolute ${posClass} select-none z-0`}
 style={{ width: size, height: size, opacity }}
 >
 <Image
 src={`/brand/${shape}.svg`}
 alt=""
 width={size}
 height={size}
 className={`w-full h-full object-contain ${flip ? "scale-x-[-1]" : ""} ${tint === "white" ? "invert" : ""}`}
 style={imgStyle}
 />
 </div>
 );
}
