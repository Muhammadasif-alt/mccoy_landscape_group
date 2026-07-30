"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, Award, Users, ShieldCheck, MapPin, Waves, Trees } from "lucide-react";
import Button from "./Button";
import { openQuoteModal } from "@/lib/openQuoteModal";

// ---------- Mega menu data ----------

type ServiceItem = {
 label: string;
 href: string;
 description: string;
 image: string;
 imageAlt: string;
};

type LocationItem = {
 label: string;
 href: string;
 description: string;
 image: string;
 imageAlt: string;
};

type TrustPillar = {
 Icon: typeof Award;
 title: string;
 body: string;
};

const SERVICES: ServiceItem[] = [
 {
 label: "Paver Patios & Walkways",
 href: "/services/paver-patios",
 description: "Backyard, walkways, pool decks, multi-level builds.",
 image: "/images/03-card-paver-patios.jpg",
 imageAlt: "Backyard paver patio with seating wall and fire pit by McCoy Landscape Group",
 },
 {
 label: "Paver Driveways",
 href: "/services/paver-driveways",
 description: "Curb-appeal driveways built for Ontario freeze–thaw.",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 imageAlt: "Paver driveway front entrance in Oakville by McCoy Landscape Group",
 },
 {
 label: "Retaining Walls",
 href: "/services/retaining-walls",
 description: "Engineered structural and decorative walls.",
 image: "/images/04-card-retaining-walls.jpg",
 imageAlt: "Retaining wall hardscape build by McCoy Landscape Group",
 },
 {
 label: "Outdoor Living",
 href: "/services/outdoor-living",
 description: "Fire features, pergolas, full living spaces.",
 image: "/images/05-card-outdoor-living.jpg",
 imageAlt: "Outdoor living space with fire feature by McCoy Landscape Group",
 },
 {
 label: "Landscape Lighting",
 href: "/services/landscape-lighting",
 description: "Low-voltage lighting designed for the build.",
 image: "/images/06-card-landscape-lighting.jpg",
 imageAlt: "Landscape lighting on a paver patio by McCoy Landscape Group",
 },
 {
 label: "Softscape Services",
 href: "/services/softscape",
 description: "Sod, garden beds, planting, and mulch installs.",
 image: "/images/softscape-hero.jpg",
 imageAlt: "Softscape build with sod, mulched beds, ornamental grasses, and a Japanese maple by McCoy Landscape Group",
 },
 {
 label: "Landscape Maintenance",
 href: "/services/maintenance",
 description: "Lawn, pruning, mulching, seasonal cleanups.",
 image: "/images/maintenance-detail.jpg",
 imageAlt: "Crisply maintained beds and edged lawn at an Oakville property",
 },
];

// Specialty leaf services. Rendered as a compact grouped strip along the bottom
// of the Services mega menu so the main list stays short and scannable.
const SPECIALTY_GROUPS: { heading: string; links: LeafLink[] }[] = [
 {
 heading: "Stone & Masonry",
 links: [
 { label: "Masonry and Natural Stone", href: "/services/masonry-and-natural-stone" },
 { label: "Natural Stone Patio", href: "/services/natural-stone-patio" },
 { label: "Natural Stone Steps", href: "/services/natural-stone-steps" },
 { label: "Seating Walls and Stone Pillars", href: "/services/seating-walls-and-stone-pillars" },
 { label: "Armour Stone Retaining Wall", href: "/services/armour-stone-retaining-wall" },
 { label: "Garden Retaining Wall", href: "/services/garden-retaining-wall" },
 ],
 },
 {
 heading: "Design & Outdoor Living",
 links: [
 { label: "Landscape Design Consultation", href: "/services/landscape-design-consultation" },
 { label: "Fire Pit and Outdoor Fireplace", href: "/services/fire-pit-and-outdoor-fireplace" },
 { label: "Pergola and Pavilion Design", href: "/services/pergola-and-pavilion-design" },
 ],
 },
 {
 heading: "Paver Care & Repair",
 links: [
 { label: "Paver Cleaning and Sealing", href: "/services/paver-cleaning-and-sealing" },
 { label: "Interlock Repair and Re-Levelling", href: "/services/interlock-repair-and-re-levelling" },
 ],
 },
 {
 heading: "Softscape & Lawn",
 links: [
 { label: "Landscape Planting", href: "/services/landscape-planting" },
 { label: "Garden Bed Design", href: "/services/garden-bed-design" },
 { label: "Decorative Rock and Mulch", href: "/services/decorative-rock-and-mulch" },
 { label: "Sod Installation", href: "/services/sod-installation" },
 { label: "Artificial Turf Installation", href: "/services/artificial-turf-installation" },
 ],
 },
];

const SERVICE_TRUST: TrustPillar[] = [
 {
 Icon: Award,
 title: "25+ Years",
 body: "West GTA hardscape craftsmanship since 2001.",
 },
 {
 Icon: Users,
 title: "Owner-Operated",
 body: "Alex & Pieter on every major build.",
 },
 {
 Icon: ShieldCheck,
 title: "3-Year Warranty",
 body: "Sink, level, and cracking covered.",
 },
];

const LOCATIONS: LocationItem[] = [
 {
 label: "Oakville",
 href: "/service-areas/oakville",
 description: "Premium hardscape installs.",
 image: "/images/09-showcase-signature-build.jpg",
 imageAlt: "Oakville hardscape work by McCoy Landscape Group",
 },
 {
 label: "Burlington",
 href: "/service-areas/burlington",
 description: "Custom outdoor living.",
 image: "/images/07-showcase-retaining-hillside.jpg",
 imageAlt: "Burlington retaining wall hardscape by McCoy Landscape Group",
 },
 {
 label: "Mississauga",
 href: "/service-areas/mississauga",
 description: "Full-service hardscape.",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 imageAlt: "Mississauga paver driveway by McCoy Landscape Group",
 },
 {
 label: "Milton",
 href: "/service-areas/milton",
 description: "Custom hardscape design-build.",
 image: "/images/05-card-outdoor-living.jpg",
 imageAlt: "Milton outdoor living build by McCoy Landscape Group",
 },
];

const LOCATION_TRUST: TrustPillar[] = [
 {
 Icon: MapPin,
 title: "West GTA-Focused",
 body: "West GTA specialists, not generalists.",
 },
 {
 Icon: Waves,
 title: "Drainage-First",
 body: "Built for Ontario freeze–thaw and grade.",
 },
 {
 Icon: Trees,
 title: "Local Sense",
 body: "Mature trees, established lots, real soils.",
 },
];

// ---------- Component ----------

type LeafLink = { label: string; href: string };
type NavItem =
 | LeafLink
 | { label: string; href: string; mega: "services" | "locations" };

const isMega = (item: NavItem): item is Extract<NavItem, { mega: string }> =>
 "mega" in item;

const navLinks: NavItem[] = [
 { label: "Services", href: "/services", mega: "services" },
 { label: "Gallery", href: "/gallery" },
 { label: "About", href: "/about" },
 { label: "Service Areas", href: "/service-areas/oakville", mega: "locations" },
 { label: "Blog", href: "/blog" },
 { label: "Contact", href: "/contact" },
];

export default function Nav() {
 const [scrolled, setScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);
 const [openMega, setOpenMega] = useState<string | null>(null);
 const [hoveredService, setHoveredService] = useState(0);
 const [hoveredLocation, setHoveredLocation] = useState(0);
 const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
 const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

 const openMenu = (key: string) => {
 if (closeTimer.current) {
 clearTimeout(closeTimer.current);
 closeTimer.current = null;
 }
 setOpenMega(key);
 };

 const scheduleClose = () => {
 if (closeTimer.current) clearTimeout(closeTimer.current);
 closeTimer.current = setTimeout(() => setOpenMega(null), 180);
 };

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 20);
 onScroll();
 window.addEventListener("scroll", onScroll, { passive: true });
 return () => {
 window.removeEventListener("scroll", onScroll);
 if (closeTimer.current) clearTimeout(closeTimer.current);
 };
 }, []);

 return (
 <header
 className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
 scrolled
 ? "bg-white/95 backdrop-blur-md shadow-[var(--shadow-floating)]"
 : "bg-gradient-to-b from-black/40 to-transparent"
 }`}
 >
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="flex items-center justify-between h-[72px] md:h-[88px]">
 <Link
 href="/"
 className="flex items-center shrink-0"
 aria-label="McCoy Landscape Group home"
 >
 <span
 className={`relative block transition-all duration-300 ${
 scrolled
 ? "w-[170px] h-[50px] md:w-[220px] md:h-[62px]"
 : "w-[140px] h-[40px] md:w-[180px] md:h-[50px]"
 }`}
 >
 <Image
 src="/brand/logo-dark.svg"
 alt="McCoy Landscape Group"
 fill
 priority
 sizes="(max-width: 768px) 140px, 180px"
 className={`object-contain object-left transition-opacity duration-300 ${
 scrolled ? "opacity-100" : "opacity-0"
 }`}
 />
 <Image
 src="/brand/logo-white.png"
 alt="McCoy Landscape Group"
 fill
 priority
 sizes="(max-width: 768px) 140px, 180px"
 className={`object-contain object-left transition-opacity duration-300 ${
 scrolled ? "opacity-0" : "opacity-100"
 }`}
 />
 </span>
 </Link>

 {/* Desktop Nav */}
 <nav
 className="hidden lg:flex items-center gap-7"
 aria-label="Primary"
 >
 {navLinks.map((link) =>
 isMega(link) ? (
 <div
 key={link.label}
 className="relative"
 onMouseEnter={() => openMenu(link.mega)}
 onMouseLeave={scheduleClose}
 >
 <Link
 href={link.href}
 className={`flex items-center gap-1 text-[15px] font-medium transition-colors hover:text-[var(--color-accent-mid)] ${
 scrolled ? "text-[var(--color-text)]" : "text-white"
 }`}
 aria-haspopup="true"
 aria-expanded={openMega === link.mega}
 >
 {link.label}
 <ChevronDown
 size={14}
 strokeWidth={2.2}
 className={`transition-transform ${
 openMega === link.mega ? "rotate-180" : ""
 }`}
 />
 </Link>
 </div>
 ) : (
 <Link
 key={link.href}
 href={link.href}
 className={`text-[15px] font-medium transition-colors hover:text-[var(--color-accent-mid)] ${
 scrolled ? "text-[var(--color-text)]" : "text-white"
 }`}
 >
 {link.label}
 </Link>
 )
 )}
 </nav>

 {/* Desktop CTAs */}
 <div className="hidden lg:flex items-center gap-3">
 <a
 href="tel:+14169859771"
 className={`flex items-center gap-2 text-[15px] font-semibold transition-colors ${
 scrolled
 ? "text-[var(--color-primary)] hover:text-[var(--color-accent-mid)]"
 : "text-white hover:text-[var(--color-accent)]"
 }`}
 >
 <Phone size={16} strokeWidth={2.2} />
 (416) 985-9771
 </a>
 <Button onClick={openQuoteModal} variant="primary" arrow>
 Book Free Consultation
 </Button>
 </div>

 {/* Mobile trigger */}
 <button
 onClick={() => setMobileOpen((v) => !v)}
 className={`lg:hidden p-2 rounded-md transition-colors ${
 scrolled ? "text-[var(--color-primary)]" : "text-white"
 }`}
 aria-label={mobileOpen ? "Close menu" : "Open menu"}
 aria-expanded={mobileOpen}
 >
 {mobileOpen ? <X size={24} /> : <Menu size={24} />}
 </button>
 </div>
 </div>

 {/* Mega menu — Services */}
 {openMega === "services" && (
 <div
 className="hidden lg:block absolute left-0 right-0 top-full"
 onMouseEnter={() => openMenu("services")}
 onMouseLeave={scheduleClose}
 >
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 pt-3">
 <div className="bg-white rounded-2xl shadow-[var(--shadow-floating)] border border-[var(--color-border)] overflow-hidden">
 <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.85fr)] gap-6 p-6">
 {/* Left: services list */}
 <div>
 <p className="eyebrow text-[var(--color-accent-mid)] mb-3">OUR SERVICES</p>
 <ul className="flex flex-col">
 {SERVICES.map((s, i) => (
 <li key={s.href}>
 <Link
 href={s.href}
 onMouseEnter={() => setHoveredService(i)}
 onFocus={() => setHoveredService(i)}
 className={`block px-3 py-2.5 -mx-3 rounded-lg transition-colors ${
 hoveredService === i
 ? "bg-[var(--color-bg-warm)]"
 : "hover:bg-[var(--color-bg-warm)]"
 }`}
 >
 <span className="block font-[family-name:var(--font-display)] font-bold text-[15px] text-[var(--color-primary)] leading-tight">
 {s.label}
 </span>
 <span className="block text-[13px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
 {s.description}
 </span>
 </Link>
 </li>
 ))}
 </ul>
 </div>

 {/* Center: hovered service preview */}
 <div className="relative rounded-xl overflow-hidden min-h-[260px] bg-[var(--color-bg-warm)]">
 {/* Pre-render every image; only the active one is opacity-100 */}
 {SERVICES.map((s, i) => (
 /* eslint-disable-next-line @next/next/no-img-element */
 <img
 key={s.image}
 src={s.image}
 alt={s.imageAlt}
 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
 i === hoveredService ? "opacity-100" : "opacity-0"
 }`}
 />
 ))}
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0) 50%,rgba(15,20,17,0.75) 100%)",
 }}
 />
 <div className="absolute inset-x-0 bottom-0 p-4">
 <span className="block text-white font-[family-name:var(--font-display)] font-bold text-[15px] leading-tight [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
 {SERVICES[hoveredService].label}
 </span>
 </div>
 </div>

 {/* Right: trust pillars (services) */}
 <div className="bg-[var(--color-bg-warm)] rounded-xl p-5">
 <p className="eyebrow text-[var(--color-accent-mid)] mb-4">WHY MCCOY</p>
 <ul className="flex flex-col gap-4">
 {SERVICE_TRUST.map(({ Icon, title, body }) => (
 <li key={title} className="flex items-start gap-3">
 <span className="w-9 h-9 shrink-0 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center shadow-sm">
 <Icon size={16} strokeWidth={2.1} />
 </span>
 <span className="block">
 <span className="block font-[family-name:var(--font-display)] font-bold text-[14px] text-[var(--color-primary)] leading-tight">
 {title}
 </span>
 <span className="block text-[12px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
 {body}
 </span>
 </span>
 </li>
 ))}
 </ul>
 </div>
 </div>

 {/* Bottom strip: specialty leaf services, grouped */}
 <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-warm)]/50 px-6 py-5">
 <p className="eyebrow text-[var(--color-accent-mid)] mb-3">SPECIALTY SERVICES</p>
 <div className="grid grid-cols-4 gap-x-6 gap-y-4">
 {SPECIALTY_GROUPS.map((group) => (
 <div key={group.heading}>
 <p className="font-[family-name:var(--font-display)] font-bold text-[13px] text-[var(--color-primary)] leading-tight mb-2">
 {group.heading}
 </p>
 <ul className="flex flex-col gap-1">
 {group.links.map((l) => (
 <li key={l.href}>
 <Link
 href={l.href}
 className="block text-[12.5px] leading-snug text-[var(--color-text-muted)] hover:text-[var(--color-accent-mid)] transition-colors"
 >
 {l.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 )}

 {/* Mega menu — Service Areas */}
 {openMega === "locations" && (
 <div
 className="hidden lg:block absolute left-0 right-0 top-full"
 onMouseEnter={() => openMenu("locations")}
 onMouseLeave={scheduleClose}
 >
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20 pt-3">
 <div className="bg-white rounded-2xl shadow-[var(--shadow-floating)] border border-[var(--color-border)] overflow-hidden">
 <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,0.85fr)] gap-6 p-6">
 <div>
 <p className="eyebrow text-[var(--color-accent-mid)] mb-3">WHERE WE WORK</p>
 <ul className="flex flex-col">
 {LOCATIONS.map((loc, i) => (
 <li key={loc.href}>
 <Link
 href={loc.href}
 onMouseEnter={() => setHoveredLocation(i)}
 onFocus={() => setHoveredLocation(i)}
 className={`block px-3 py-2.5 -mx-3 rounded-lg transition-colors ${
 hoveredLocation === i
 ? "bg-[var(--color-bg-warm)]"
 : "hover:bg-[var(--color-bg-warm)]"
 }`}
 >
 <span className="block font-[family-name:var(--font-display)] font-bold text-[15px] text-[var(--color-primary)] leading-tight">
 {loc.label}
 </span>
 <span className="block text-[13px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
 {loc.description}
 </span>
 </Link>
 </li>
 ))}
 </ul>
 </div>

 <div className="relative rounded-xl overflow-hidden min-h-[260px] bg-[var(--color-bg-warm)]">
 {LOCATIONS.map((loc, i) => (
 /* eslint-disable-next-line @next/next/no-img-element */
 <img
 key={loc.image}
 src={loc.image}
 alt={loc.imageAlt}
 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
 i === hoveredLocation ? "opacity-100" : "opacity-0"
 }`}
 />
 ))}
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0) 50%,rgba(15,20,17,0.75) 100%)",
 }}
 />
 <div className="absolute inset-x-0 bottom-0 p-4">
 <span className="block text-white font-[family-name:var(--font-display)] font-bold text-[15px] leading-tight [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
 {LOCATIONS[hoveredLocation].label}
 </span>
 </div>
 </div>

 <div className="bg-[var(--color-bg-warm)] rounded-xl p-5">
 <p className="eyebrow text-[var(--color-accent-mid)] mb-4">WHY MCCOY HERE</p>
 <ul className="flex flex-col gap-4">
 {LOCATION_TRUST.map(({ Icon, title, body }) => (
 <li key={title} className="flex items-start gap-3">
 <span className="w-9 h-9 shrink-0 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center shadow-sm">
 <Icon size={16} strokeWidth={2.1} />
 </span>
 <span className="block">
 <span className="block font-[family-name:var(--font-display)] font-bold text-[14px] text-[var(--color-primary)] leading-tight">
 {title}
 </span>
 <span className="block text-[12px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
 {body}
 </span>
 </span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 </div>
 </div>
 )}

 {/* Mobile menu */}
 {mobileOpen && (
 <div className="lg:hidden bg-white border-t border-[var(--color-border)] shadow-[var(--shadow-floating)] max-h-[calc(100vh-72px)] overflow-y-auto">
 <nav
 className="flex flex-col px-5 py-3"
 aria-label="Mobile primary"
 >
 {navLinks.map((link) =>
 isMega(link) ? (
 <div
 key={link.label}
 className="border-b border-[var(--color-border)]"
 >
 <button
 onClick={() =>
 setOpenMobileMenu((cur) =>
 cur === link.mega ? null : link.mega
 )
 }
 className="w-full flex items-center justify-between py-3 text-[16px] font-medium text-[var(--color-text)]"
 aria-expanded={openMobileMenu === link.mega}
 >
 <span>{link.label}</span>
 <ChevronDown
 size={18}
 strokeWidth={2.2}
 className={`transition-transform ${
 openMobileMenu === link.mega ? "rotate-180" : ""
 }`}
 />
 </button>
 {openMobileMenu === link.mega && (
 <ul className="pb-3 flex flex-col">
 {(link.mega === "services" ? SERVICES : LOCATIONS).map(
 (item) => (
 <li key={item.href}>
 <Link
 href={item.href}
 onClick={() => {
 setMobileOpen(false);
 setOpenMobileMenu(null);
 }}
 className="block pl-4 py-2.5"
 >
 <span className="block font-medium text-[15px] text-[var(--color-text)] leading-tight">
 {item.label}
 </span>
 <span className="block text-[12px] text-[var(--color-text-muted)] mt-0.5 leading-snug">
 {item.description}
 </span>
 </Link>
 </li>
 )
 )}
 {link.mega === "services" &&
 SPECIALTY_GROUPS.map((group) => (
 <li key={group.heading} className="pl-4 pt-3">
 <p className="font-[family-name:var(--font-display)] font-bold text-[13px] text-[var(--color-primary)] leading-tight mb-1.5">
 {group.heading}
 </p>
 <ul className="flex flex-col gap-1.5 pb-1">
 {group.links.map((l) => (
 <li key={l.href}>
 <Link
 href={l.href}
 onClick={() => {
 setMobileOpen(false);
 setOpenMobileMenu(null);
 }}
 className="block text-[13.5px] leading-snug text-[var(--color-text-muted)]"
 >
 {l.label}
 </Link>
 </li>
 ))}
 </ul>
 </li>
 ))}
 </ul>
 )}
 </div>
 ) : (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setMobileOpen(false)}
 className="py-3 text-[16px] font-medium text-[var(--color-text)] hover:text-[var(--color-accent-mid)] border-b border-[var(--color-border)] last:border-b-0"
 >
 {link.label}
 </Link>
 )
 )}
 <div className="mt-4 flex flex-col gap-3">
 <a
 href="tel:+14169859771"
 className="flex items-center justify-center gap-2 py-3 text-[var(--color-primary)] font-semibold border border-[var(--color-primary)] rounded-full"
 >
 <Phone size={16} />
 (416) 985-9771
 </a>
 <button
 type="button"
 onClick={() => {
 setMobileOpen(false);
 openQuoteModal();
 }}
 className="text-center rounded-full bg-[var(--color-primary)] text-white font-semibold py-3"
 >
 Book Free Consultation
 </button>
 </div>
 </nav>
 </div>
 )}
 </header>
 );
}
