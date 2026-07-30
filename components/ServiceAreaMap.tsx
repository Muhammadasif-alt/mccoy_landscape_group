"use client";

import dynamic from "next/dynamic";
import { MapPin } from "lucide-react";

/**
 * ServiceAreaMap — Interactive Leaflet map of McCoy's GMB-verified service
 * area, dotted polygon matching the boundary on his Google Business Profile.
 *
 * Renders the verified-cities list alongside. Used on the Contact page and
 * available for any location page that wants a "where we work" visual.
 *
 * Leaflet is loaded dynamically (ssr: false) because its window-dependent
 * code can't run during Next.js prerender.
 */
const ServiceAreaLeafletMap = dynamic(
 () => import("./ServiceAreaLeafletMap"),
 {
 ssr: false,
 loading: () => (
 <div className="absolute inset-0 flex items-center justify-center text-[13px] text-[var(--color-text-muted)] bg-[var(--color-bg-warm)]">
 Loading map…
 </div>
 ),
 }
);

const SERVICE_CITIES = [
 { name: "Oakville", focus: "Premium hardscape installs" },
 { name: "Burlington", focus: "Custom outdoor living" },
 { name: "Mississauga", focus: "Full-service hardscape" },
 { name: "Milton", focus: "Custom hardscape design-build" },
 { name: "Waterdown", focus: "Coverage on request" },
 { name: "Flamborough", focus: "Coverage on request" },
];

export default function ServiceAreaMap() {
 return (
 <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-10 items-stretch">
 <div className="relative rounded-2xl overflow-hidden border border-black/10 shadow-[0_18px_44px_-22px_rgba(0,0,0,0.20)] aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
 <ServiceAreaLeafletMap />
 </div>

 <ul className="grid grid-cols-1 gap-3">
 {SERVICE_CITIES.map((city) => (
 <li
 key={city.name}
 className="flex items-start gap-3 bg-[var(--color-bg-warm)] rounded-xl p-4 md:p-5 border border-black/5"
 >
 <MapPin
 size={22}
 className="text-[var(--color-accent-mid)] flex-shrink-0 mt-[2px]"
 aria-hidden
 />
 <div>
 <p className="font-[family-name:var(--font-display)] font-bold text-[16px] md:text-[17px] text-[var(--color-primary)] leading-tight">
 {city.name}
 </p>
 <p className="text-[13px] md:text-[14px] leading-[1.5] text-[var(--color-text-muted)] mt-0.5">
 {city.focus}
 </p>
 </div>
 </li>
 ))}
 </ul>
 </div>
 );
}
