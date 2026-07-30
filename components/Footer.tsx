import Link from "next/link";
import Image from "next/image";

export default function Footer() {
 return (
 <footer className="bg-[var(--color-footer-bg)] text-white/75 pt-16 pb-8">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-12">
 <div className="max-w-[320px]">
 <div className="relative h-11 w-[200px] mb-4">
 <Image
 src="/brand/logo-white.png"
 alt="McCoy Landscape Group"
 fill
 className="object-contain object-left"
 />
 </div>
 <p className="text-[14px] text-white/60 leading-[1.6]">
 Owner-operated hardscape design-build team serving West GTA since 2001. Every install backed by our 3-year warranty.
 </p>
 </div>

 <FooterCol
 title="Services"
 items={[
 ["Paver Patios", "/services/paver-patios"],
 ["Paver Driveways", "/services/paver-driveways"],
 ["Retaining Walls", "/services/retaining-walls"],
 ["Outdoor Living", "/services/outdoor-living"],
 ["Landscape Lighting", "/services/landscape-lighting"],
 ["Softscape", "/services/softscape"],
 ["Maintenance", "/services/maintenance"],
 ]}
 />

 <FooterCol
 title="Service Areas"
 items={[
 ["Oakville", "/service-areas/oakville"],
 ["Burlington", "/service-areas/burlington"],
 ["Mississauga", "/service-areas/mississauga"],
 ["Milton", "/service-areas/milton"],
 ]}
 />

 <div>
 <h4 className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.12em] text-[var(--color-accent)] font-bold mb-5">
 Contact
 </h4>
 <ul className="flex flex-col gap-2 text-[14px]">
 <li>
 <a
 href="tel:+14169859771"
 className="text-white/70 hover:text-[var(--color-accent)] transition-colors"
 >
 (416) 985-9771
 </a>
 </li>
 <li>
 <a
 href="mailto:info@mccoylandscapegroup.com"
 className="text-white/70 hover:text-[var(--color-accent)] transition-colors"
 >
 info@mccoylandscapegroup.com
 </a>
 </li>
 <li className="text-white/70">Mon–Sat · 8am–5pm</li>
 <li className="text-white/70">Oakville · Burlington · Mississauga · Milton, ON</li>
 </ul>
 </div>
 </div>

 <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-[13px] text-white/50">
 <span>
 © {new Date().getFullYear()} McCoy Landscape Group. All rights
 reserved.
 </span>
 <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
 <Link
 href="/privacy"
 className="text-white/60 hover:text-[var(--color-accent)] transition-colors"
 >
 Privacy Policy
 </Link>
 <Link
 href="/terms"
 className="text-white/60 hover:text-[var(--color-accent)] transition-colors"
 >
 Terms &amp; Conditions
 </Link>
 </nav>
 <span>
 Hardscape design-build · Oakville · Burlington · Mississauga ·
 Milton
 </span>
 </div>
 </div>
 </footer>
 );
}

function FooterCol({
 title,
 items,
}: {
 title: string;
 items: [string, string][];
}) {
 return (
 <div>
 <h4 className="font-[family-name:var(--font-body)] text-[12px] uppercase tracking-[0.12em] text-[var(--color-accent)] font-bold mb-5">
 {title}
 </h4>
 <ul className="flex flex-col gap-2 text-[14px]">
 {items.map(([label, href]) => (
 <li key={href}>
 <Link
 href={href}
 className="text-white/70 hover:text-[var(--color-accent)] transition-colors"
 >
 {label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 );
}
