import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import OwnerStory from "@/components/OwnerStory";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import FAQBlock from "@/components/FAQBlock";

export const metadata: Metadata = {
 title: "Landscaping Mississauga | Hardscape Contractor | McCoy",
 description:
 "Hardscape design-build across Mississauga — patios, walls, outdoor living. 3-year warranty. Call (416) 985-9771.",
 alternates: { canonical: "/service-areas/mississauga" },
};

const services = [
 {
 title: "Paver Patios & Walkways",
 body: "Paver patio installs designed for Mississauga lots.",
 image: "/images/03-card-paver-patios.jpg",
 alt: "Paver patio install in Mississauga by McCoy Landscape Group",
 href: "/services/paver-patios",
 },
 {
 title: "Paver Driveways",
 body: "Driveway pavers built for front-entry curb appeal.",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Paver driveway in Mississauga by McCoy Landscape Group",
 href: "/services/paver-driveways",
 },
 {
 title: "Retaining Walls",
 body: "Retaining walls engineered for slope, load, and drainage.",
 image: "/images/04-card-retaining-walls.jpg",
 alt: "Retaining wall build in Mississauga by McCoy Landscape Group",
 href: "/services/retaining-walls",
 },
 {
 title: "Outdoor Living Spaces",
 body: "Full outdoor living builds - pergolas, fire, walls, lighting.",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Outdoor living build in Mississauga by McCoy Landscape Group",
 href: "/services/outdoor-living",
 },
 {
 title: "Landscape Lighting",
 body: "Low-voltage lighting that finishes every hardscape build.",
 image: "/images/06-card-landscape-lighting.jpg",
 alt: "Landscape lighting in Mississauga by McCoy Landscape Group",
 href: "/services/landscape-lighting",
 },
 {
 title: "All McCoy Services",
 body: "Patios, driveways, walls, outdoor living, lighting — see the full McCoy hardscape line.",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Full McCoy hardscape services overview",
 href: "/services",
 },
];

const whyMcCoyBullets = [
 "Local expertise across Mississauga lot conditions",
 "Designs that fit mature streets and established properties",
 "Premium materials: Techo-Bloc, Unilock, Permacon",
 "Transparent written estimates - no change-order surprises",
 "Clean, respectful crews with daily communication",
 "Long-term relationships across repeat projects",
];

const faqs = [
 {
 q: "Does McCoy service Mississauga?",
 a: "Yes — Mississauga is a core McCoy market alongside Oakville, Burlington, and Milton. Same install standard, same crew, same warranty on every build.",
 },
 {
 q: "Do you work north of the QEW?",
 a: "Yes — we work across all of Mississauga. Our heaviest focus is on properties with larger lots, mature landscaping, and design expectations that match our West GTA work, but we scope every inquiry the same way regardless of address.",
 },
 {
 q: "What kind of Mississauga properties do you build for?",
 a: "These neighbourhoods often have heritage-era homes, mature trees, high water tables, and lot-line complexities that require careful scoping. We assess each property during consultation, flag any heritage overlays or tree-protection zones, and design the hardscape around the realities of the lot - not around a standard template.",
 },
 {
 q: "What's a typical Mississauga hardscape timeline?",
 a: "Most Mississauga builds run 1-6 weeks on-site depending on scope. Patio-only projects sit at the shorter end; full outdoor living builds with walls and drainage run longer. Peak-season slots (April-September) book 6-12 weeks ahead.",
 },
 {
 q: "How does the 3-year warranty work on Mississauga projects?",
 a: "Same warranty across every McCoy install regardless of city: 3 years covering sink, level, and cracking replacement. Full terms in writing on your estimate. We honour warranty calls on Mississauga projects the same way we do on Oakville or Burlington - one call, we come back.",
 },
 {
 q: "Permits for Mississauga retaining walls or driveway widening?",
 a: "City of Mississauga has its own thresholds - retaining walls above certain heights require permits and engineered drawings, and driveway widening may require boulevard work permits. We research the specific requirements for your address during consultation and handle the coordination when permits are required.",
 },
 {
 q: "How far in advance should Mississauga homeowners book?",
 a: "For spring and summer starts, 6-12 weeks ahead of your ideal start date. Complex scopes (engineered walls, full outdoor living, drainage work) often need 12-16 weeks for design, estimate, and permit coordination to clear before excavation begins.",
 },
];

const alsoServing = [
 { name: "Oakville", href: "/service-areas/oakville" },
 { name: "Burlington", href: "/service-areas/burlington" },
 { name: "Milton", href: "/service-areas/milton" },
];

export default function MississaugaPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="ON · MISSISSAUGA"
 title="Landscaping & Hardscape"
 subtitle="Design-Build in Mississauga"
 opening={
 <>
 Hardscape and outdoor living design-build across Mississauga —
 paver patios, driveways, retaining walls, outdoor living, and
 lighting on the city's premium residential streets. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site consultation.
 Every install backed by our 3-year warranty.
 </>
 }
 imageSrc="/images/02-paver-driveway-front-entrance-oakville.jpg"
 imageAlt="Paver patio and fire feature at a Mississauga home by McCoy Landscape Group"
 />

 {/* Local Positioning */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">ABOUT MCCOY IN MISSISSAUGA</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Landscape & Hardscape{" "}
 <em className="italic font-light">for Mississauga Homes</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 McCoy is the design-build team Mississauga homeowners call when
 they want hardscape that holds up. Clarkson, Lorne Park, and Port
 Credit are our heaviest focus — properties with larger lots,
 mature landscaping, and drainage conditions that demand real
 craftsmanship.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Mississauga is a core part of our West GTA service area — same
 install standard, same crew, same 3-year warranty as every Oakville,
 Burlington, and Milton build. Homeowners who want the work done
 once, done right, and done by the crew who owns it.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Services Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">MISSISSAUGA SERVICES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Hardscape & Landscape Services{" "}
 <em className="italic font-light">Available in Mississauga</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every McCoy service across Mississauga's premium streets,
 and adjacent south Mississauga neighbourhoods.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {services.map((s) => (
 <Link
 key={s.title}
 href={s.href}
 className="group relative block bg-[var(--color-bg-warm)] rounded-2xl overflow-hidden border-t-[3px] border-t-[var(--color-accent-mid)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]"
 >
 <div className="relative aspect-[4/3] w-full overflow-hidden">
 <Image
 src={s.image}
 alt={s.alt}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
 />
 </div>
 <div className="p-6">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] md:text-[19px] text-[var(--color-primary)] mb-2 leading-tight">
 {s.title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-text)] mb-3">
 {s.body}
 </p>
 <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-accent-mid)]">
 Explore
 <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
 </span>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Local context / neighborhoods */}
 <section className="relative bg-[var(--color-bg-dark)] text-white py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_04" position="bottom-right" size={520} opacity={0.18} tint="white" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[820px] mb-10">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">NEIGHBOURHOODS WE SERVE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3 mb-4">
 Hardscape Across{" "}
 <em className="italic font-light text-[var(--color-accent)]">Every Mississauga Neighbourhood</em>
 </h2>
 <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/85">
 Clarkson, Lorne Park, Port Credit, Mineola, Sheridan, Erindale,
 Streetsville, Cooksville, Meadowvale, and Credit Valley are where
 most of our Mississauga builds happen. Surrounding Mississauga
 streets served case-by-case based on scope and scheduling.
 </p>
 </div>
 <div className="flex flex-wrap gap-2 md:gap-3">
 {[
 "Clarkson",
 "Lorne Park",
 "Port Credit",
 "Mineola",
 "Sheridan",
 "Erindale",
 "Streetsville",
 "Cooksville",
 "Meadowvale",
 "Credit Valley",
 "Churchill Meadows",
 "Lisgar",
 ].map((n) => (
 <span
 key={n}
 className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.14] text-[14px] md:text-[15px] text-white/95"
 >
 {n}
 </span>
 ))}
 </div>
 <p className="mt-8 text-[14px] md:text-[15px] leading-[1.65] text-white/70">
 Don&apos;t see your neighbourhood?{" "}
 <Link href="/contact" className="text-[var(--color-accent)] hover:text-white underline-offset-4 hover:underline transition-colors">
 Reach out anyway
 </Link>{" "}
 - we cover plenty of surrounding Mississauga and West GTA areas case-by-case.
 </p>
 </div>
 </section>

 {/* Why McCoy */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.14} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY IN MISSISSAUGA</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Why Mississauga Homeowners{" "}
 <em className="italic font-light">Choose McCoy</em>
 </h2>
 </div>
 <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
 {whyMcCoyBullets.map((b) => (
 <li
 key={b}
 className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-[0_4px_18px_-12px_rgba(0,0,0,0.15)]"
 >
 <CheckCircle2
 size={22}
 className="text-[var(--color-accent-mid)] flex-shrink-0 mt-[2px]"
 />
 <span className="text-[15px] md:text-[16px] leading-[1.55] text-[var(--color-text)]">
 {b}
 </span>
 </li>
 ))}
 </ul>
 </div>
 </section>

 {/* Recent build photo strip */}
 <section className="relative">
 <div className="relative h-[320px] md:h-[460px] overflow-hidden">
 <Image
 src="/images/02-paver-driveway-front-entrance-oakville.jpg"
 alt="Techo-Bloc paver driveway in Mississauga with front-entry landing by McCoy Landscape Group"
 fill
 className="object-cover"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0.25) 0%,rgba(15,20,17,0) 35%,rgba(15,20,17,0.55) 100%)",
 }}
 />
 <WaveDivider
 toColor="var(--color-bg-warm)"
 variant="rolling"
 height={90}
 flip
 className="absolute inset-x-0 top-0 z-[2]"
 />
 <div className="absolute inset-0 flex items-center z-[1]">
 <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-20">
 <span className="inline-flex items-center bg-black/55 backdrop-blur-sm px-3 py-1.5 rounded-full !text-[12px] md:!text-[13px] uppercase tracking-[0.12em] font-semibold text-white">
 A RECENT MCCOY BUILD · MISSISSAUGA
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Mississauga Techo-Bloc paver driveway with front-entry walkway
 integration - one scope, one crew.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Mississauga Landscaping &"
 headingItalic="Hardscape FAQs"
 faqs={faqs}
 />

 {/* Also serving */}
 <section className="relative bg-[var(--color-bg-warm)] pb-20 md:pb-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="pt-8 border-t border-[var(--color-border)]">
 <span className="eyebrow text-[var(--color-accent-mid)]">ALSO SERVING</span>
 <div className="mt-3 flex flex-wrap gap-3">
 {alsoServing.map((c) => (
 <Link
 key={c.name}
 href={c.href}
 className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 text-[14px] font-semibold text-[var(--color-primary)] shadow-[0_4px_18px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-transform"
 >
 {c.name}
 <span aria-hidden>→</span>
 </Link>
 ))}
 </div>
 </div>
 </div>
 </section>

 <OwnerStory
 city="Mississauga"
 focusPhrase="Mississauga's premium streets and established neighbourhoods"
 whyHere="Established neighbourhoods where curb appeal and stone selection are the difference between a build that sells the house and one that disappears into the streetscape."
 />

 <FinalCTA />
 <Footer />
 <JsonLd

 data={{

 "@context": "https://schema.org",

 "@graph": [
 {
 "@type": "LocalBusiness",
 name: "McCoy Landscape Group — Mississauga",
 url: "https://mccoylandscapegroup.com/service-areas/mississauga",
 telephone: "+1-416-985-9771",
 areaServed: { "@type": "City", name: "Mississauga", addressRegion: "ON", addressCountry: "CA" },
 parentOrganization: { "@id": "https://mccoylandscapegroup.com/#organization" },
 image: "https://mccoylandscapegroup.com/images/09-showcase-signature-build.jpg",
 },
 {
 "@type": "FAQPage",
 mainEntity: faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://mccoylandscapegroup.com/" },
 { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://mccoylandscapegroup.com/service-areas/oakville" },
 { "@type": "ListItem", position: 3, name: "Mississauga", item: "https://mccoylandscapegroup.com/service-areas/mississauga" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
