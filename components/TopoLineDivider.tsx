"use client";

import { motion } from "framer-motion";

/**
 * Animated topographic contour lines — draws in as the divider enters the viewport.
 * Use between sections as a transition treatment (survey-line feel).
 *
 * Place inside a parent that sets its own bg — this component is transparent.
 */
export default function TopoLineDivider({
 stroke = "var(--color-accent-mid)",
 height = 100,
 className = "",
 flip = false,
}: {
 stroke?: string;
 height?: number;
 className?: string;
 flip?: boolean;
}) {
 const pathTransition = (duration: number, delay: number) => ({
 pathLength: {
 duration,
 delay,
 ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
 },
 opacity: { duration: 0.4, delay },
 });

 return (
 <div
 aria-hidden
 className={`w-full pointer-events-none overflow-hidden ${className}`}
 style={{
 height,
 lineHeight: 0,
 transform: flip ? "scaleY(-1)" : undefined,
 }}
 >
 <svg
 viewBox="0 0 1440 100"
 preserveAspectRatio="none"
 className="w-full h-full"
 >
 {/* Primary contour — most visible, sweeping curve */}
 <motion.path
 d="M0,55 C180,30 360,70 540,50 C720,30 900,75 1080,55 C1260,35 1380,60 1440,50"
 stroke={stroke}
 strokeWidth="1.2"
 strokeLinecap="round"
 fill="none"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 0.55 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={pathTransition(1.6, 0)}
 />

 {/* Secondary contour — offset below, thinner */}
 <motion.path
 d="M0,70 C200,50 400,82 600,66 C800,52 1000,80 1200,68 C1320,60 1400,70 1440,66"
 stroke={stroke}
 strokeWidth="0.9"
 strokeLinecap="round"
 fill="none"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 0.3 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={pathTransition(1.8, 0.15)}
 />

 {/* Tertiary contour — above, whisper-thin */}
 <motion.path
 d="M0,35 C160,20 320,42 480,30 C640,20 800,45 960,33 C1120,22 1280,40 1440,30"
 stroke={stroke}
 strokeWidth="0.6"
 strokeLinecap="round"
 fill="none"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 0.2 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={pathTransition(2.0, 0.3)}
 />

 {/* Survey tick marks — station markers along the main contour */}
 {[240, 480, 720, 960, 1200].map((x, i) => (
 <motion.line
 key={x}
 x1={x}
 y1={50}
 x2={x}
 y2={60}
 stroke={stroke}
 strokeWidth="1.2"
 strokeLinecap="round"
 initial={{ pathLength: 0, opacity: 0 }}
 whileInView={{ pathLength: 1, opacity: 0.5 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{
 pathLength: {
 duration: 0.4,
 delay: 0.8 + i * 0.1,
 ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
 },
 opacity: { duration: 0.3, delay: 0.8 + i * 0.1 },
 }}
 />
 ))}
 </svg>
 </div>
 );
}
