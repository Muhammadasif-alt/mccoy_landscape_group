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
 title: "Landscaping Milton | Hardscape Contractor | McCoy",
 description:
 "Hardscape design-build in Milton - paver patios, driveways, retaining walls, outdoor living. Escarpment-edge expertise. 3-year warranty. (416) 985-9771.",
 alternates: { canonical: "/service-areas/milton" },
};

const services = [
 {
 title: "Paver Patios & Walkways",
 body: "Paver patio milton installs for new-build backyards and older lots alike.",
 image: "/images/03-card-paver-patios.jpg",
 alt: "Paver patio install in Milton by McCoy Landscape Group",
 href: "/services/paver-patios",
 },
 {
 title: "Paver Driveways",
 body: "Driveway paver installation built for Milton front-entry curb appeal.",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Paver driveway in Milton by McCoy Landscape Group",
 href: "/services/paver-driveways",
 },
 {
 title: "Retaining Walls",
 body: "Engineered retaining walls for escarpment-edge and subdivision grade changes.",
 image: "/images/04-card-retaining-walls.jpg",
 alt: "Retaining wall build in Milton by McCoy Landscape Group",
 href: "/services/retaining-walls",
 },
 {
 title: "Outdoor Living Spaces",
 body: "Full outdoor living builds - pergolas, fire, walls, lighting.",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Outdoor living build in Milton by McCoy Landscape Group",
 href: "/services/outdoor-living",
 },
 {
 title: "Landscape Lighting",
 body: "Hardscaping milton across every category, finished with low-voltage lighting.",
 image: "/images/06-card-landscape-lighting.jpg",
 alt: "Landscape lighting in Milton by McCoy Landscape Group",
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
 "Local expertise - Milton subdivision and escarpment-edge lot conditions",
 "Familiarity with HOA, builder-covenant, and conservation-area constraints",
 "Premium materials: Techo-Bloc, Unilock, Permacon",
 "Transparent written estimates - no change-order surprises",
 "Long-term client relationships across repeat projects",
];

const faqs = [
 {
 q: "Do you service Milton?",
 a: "Yes - Milton is part of our core West GTA service area. We work across the full city, from the newer subdivisions on the 401 corridor to older heritage lots toward the escarpment. Travel is factored into each quote, and we're up-front about whether a given Milton project fits our schedule.",
 },
 {
 q: "New-build Milton subdivisions - HOA or builder-warranty restrictions?",
 a: "Many newer Milton subdivisions have builder covenants restricting hardscape work for the first two years, HOA approval requirements for front-yard changes, or both. We research your specific subdivision and lot during consultation and flag any restrictions before you sign the estimate.",
 },
 {
 q: "Escarpment-edge drainage considerations?",
 a: "Properties backing onto the Niagara Escarpment often have significant grade changes, rocky sub-soils, and slope-stability considerations. Our retaining wall builds in these zones typically need engineered drawings, proper drainage design, and careful sequencing. We assess every escarpment-edge project on site before quoting.",
 },
 {
 q: "What's a typical Milton hardscape timeline?",
 a: "Most Milton builds run 1-6 weeks on-site depending on scope. Straightforward patios sit at the shorter end; escarpment-edge walls and full outdoor living scopes run longer. Peak-season slots (April-September) book 6-12 weeks ahead.",
 },
 {
 q: "Permits for Milton retaining walls or grading work?",
 a: "Town of Milton has its own wall-height thresholds for permits and engineering. Work along conservation-authority lands (Credit Valley, Conservation West GTA) often has additional approvals. We handle permit coordination when required - no phone-tree navigation on your end.",
 },
 {
 q: "How does the 3-year warranty work on Milton projects?",
 a: "Same warranty across every McCoy install regardless of city: 3 years covering sink, level, and cracking replacement. Full terms in writing on your estimate. Warranty calls get handled the same way in Milton as in Oakville or Burlington - one call, we come back.",
 },
 {
 q: "How far in advance should Milton homeowners book?",
 a: "For spring/summer starts, 6-12 weeks ahead. Escarpment-edge projects, builder-warranty timing restrictions, and conservation-approval lead times can push that longer for complex scopes. Call early and we'll walk through the realistic timeline for your specific project.",
 },
];

const alsoServing = [
 { name: "Oakville", href: "/service-areas/oakville" },
 { name: "Burlington", href: "/service-areas/burlington" },
 { name: "Mississauga", href: "/service-areas/mississauga" },
];

export default function MiltonPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="ON · MILTON"
 title="Landscaping & Hardscape"
 subtitle="Design-Build in Milton"
 opening={
 <>
 Hardscape and outdoor living design-build across Milton, Ontario -
 paver patios, driveways, retaining walls, pergolas, and lighting.
 Call <strong>(416) 985-9771</strong> for a free on-site
 consultation. Every install backed by our 3-year warranty and
 built for Milton's newer subdivisions and escarpment-edge grades.
 </>
 }
 imageSrc="/images/05-card-outdoor-living.jpg"
 imageAlt="Paver patio and pergola at a Milton Heights subdivision home by McCoy Landscape Group"
 />

 {/* Local Positioning */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">ABOUT MCCOY IN MILTON</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Landscape & Hardscape{" "}
 <em className="italic font-light">for Milton Homes</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 McCoy is the Milton landscaping team homeowners call when the
 builder-grade backyard stops working for them. We handle retaining
 wall builds along the escarpment, paver patios in newer
 subdivisions, and the drainage work that comes with both.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 One of Ontario's fastest-growing cities, with properties ranging
 from newer subdivisions on the 401 corridor to heritage lots
 toward the escarpment. Each lot type has its own grade, drainage,
 and design challenges — and we scope each one on its own terms.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Services Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">MILTON SERVICES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Hardscape & Landscape Services{" "}
 <em className="italic font-light">Available in Milton</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every McCoy service for Milton subdivisions, escarpment-edge
 lots, and established streets.
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
 <em className="italic font-light text-[var(--color-accent)]">Every Milton Neighbourhood</em>
 </h2>
 <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/85">
 Old Milton, Beaty, Harrison, Scott, Coates, Dempsey, Bronte
 Meadows, Willmott, Timberlea, and Clarke are where most of our
 Milton builds happen - from newer subdivisions on the 401 corridor
 to heritage lots toward the escarpment. Surrounding Milton streets
 served case-by-case.
 </p>
 </div>
 <div className="flex flex-wrap gap-2 md:gap-3">
 {[
 "Old Milton",
 "Beaty",
 "Harrison",
 "Scott",
 "Coates",
 "Dempsey",
 "Bronte Meadows",
 "Willmott",
 "Timberlea",
 "Clarke",
 "Bowes",
 "Ford",
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
 - we cover plenty of surrounding Milton and West GTA areas case-by-case.
 </p>
 </div>
 </section>

 {/* Why McCoy */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.14} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY IN MILTON</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Why Milton Homeowners{" "}
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
 src="/images/05-card-outdoor-living.jpg"
 alt="Full outdoor living build on a Milton subdivision lot by McCoy Landscape Group"
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
 A RECENT MCCOY BUILD · MILTON
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Milton Heights subdivision backyard - paver patio, fire
 feature, and pergola scoped for a brand-new lot.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Milton Landscaping &"
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
 city="Milton"
 focusPhrase="established subdivisions plus the escarpment-edge new builds north of town"
 whyHere="Heavier clay, more grade changes, and longer growing seasons up here — every patio, wall, and walkway needs base depth and drainage tuned for what Milton actually throws at it."
 />

 <FinalCTA />
 <Footer />
 <JsonLd

 data={{

 "@context": "https://schema.org",

 "@graph": [
 {
 "@type": "LocalBusiness",
 name: "McCoy Landscape Group — Milton",
 url: "https://mccoylandscapegroup.com/service-areas/milton",
 telephone: "+1-416-985-9771",
 areaServed: { "@type": "City", name: "Milton", addressRegion: "ON", addressCountry: "CA" },
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
 { "@type": "ListItem", position: 3, name: "Milton", item: "https://mccoylandscapegroup.com/service-areas/milton" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
