"use client";

import { motion } from "framer-motion";
import {
 Clock,
 Users,
 Shield,
 Check,
 Layers,
 Snowflake,
 Building2,
 Star,
} from "lucide-react";
import TopoBG from "./TopoBG";

const trustItems = [
 { icon: Clock, text: "25+ years of West GTA hardscape craftsmanship" },
 { icon: Users, text: "Owner-operated — on every major project" },
 { icon: Shield, text: "3-year warranty on all hardscape installs" },
 { icon: Check, text: "Customer satisfaction guarantee on every build" },
 { icon: Layers, text: "Techo-Bloc, Unilock & Permacon premium materials" },
 { icon: Snowflake, text: "Built for Ontario freeze–thaw and drainage" },
 { icon: Building2, text: "200+ projects · 250+ properties served" },
 { icon: Star, text: "Owner-operated in Oakville since 2001" },
];

export default function TrustStrip() {
 return (
 <section className="relative bg-[var(--color-bg-warm)] pt-10 md:pt-48 pb-16 md:pb-24 overflow-hidden">
 {/* Topo — dual on both sides for visual balance */}
 <TopoBG
 shape="shape_06"
 position="center-right"
 size={720}
 opacity={0.2}
 tint="primary"
 />
 <TopoBG
 shape="shape_02"
 position="center-left"
 size={620}
 opacity={0.15}
 tint="accent"
 flip
 />

 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 relative">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-80px" }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-10"
 >
 <span className="eyebrow">WHY ON HOMEOWNERS CHOOSE US</span>
 </motion.div>

 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-7">
 {trustItems.map((item, i) => {
 const Icon = item.icon;
 return (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 16 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-40px" }}
 transition={{
 duration: 0.5,
 delay: i * 0.06,
 ease: [0.22, 1, 0.36, 1],
 }}
 className="flex flex-col items-start gap-3"
 >
 <div className="w-12 h-12 rounded-full bg-[rgba(145,182,122,0.2)] text-[var(--color-primary)] flex items-center justify-center">
 <Icon size={22} strokeWidth={2} />
 </div>
 <p className="text-[15px] font-medium leading-[1.45] text-[var(--color-text)]">
 {item.text}
 </p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
