"use client";

import { useRef, Fragment, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Scroll-linked word-by-word reveal.
 * Ghost version of each word sits at low opacity; each word lights up as the user
 * scrolls the paragraph through the reveal band. Adapted from Magic UI TextRevealByWord.
 *
 * Single-deployment component — use sparingly (one per page) to keep impact.
 */

function Word({
 children,
 progress,
 range,
}: {
 children: ReactNode;
 progress: MotionValue<number>;
 range: [number, number];
}) {
 const opacity = useTransform(progress, range, [0.18, 1]);
 return <motion.span style={{ opacity }}>{children}</motion.span>;
}

export default function WordReveal({
 text,
 className = "",
 as: Tag = "p",
}: {
 text: string;
 className?: string;
 as?: "p" | "h2" | "h3" | "div";
}) {
 const ref = useRef<HTMLDivElement>(null);

 // Reveal band: starts when paragraph enters lower 85% of viewport,
 // finishes when paragraph reaches upper 25%.
 const { scrollYProgress } = useScroll({
 target: ref,
 offset: ["start 0.85", "start 0.25"],
 });

 const words = text.split(" ");

 return (
 <Tag ref={ref as never} className={className}>
 {words.map((word, i) => {
 const start = i / words.length;
 const end = Math.min(1, start + 2 / words.length);
 return (
 <Fragment key={`${word}-${i}`}>
 <Word progress={scrollYProgress} range={[start, end]}>
 {word}
 </Word>
 {i < words.length - 1 ? " " : ""}
 </Fragment>
 );
 })}
 </Tag>
 );
}
