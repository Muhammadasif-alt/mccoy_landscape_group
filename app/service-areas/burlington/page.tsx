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
 title: "Landscaping Burlington | Hardscape Contractor | McCoy",
 description:
 "Hardscape design-build in Burlington - patios, driveways, walls, outdoor living & lighting. Waterfront-area specialists. 3-year warranty. (416) 985-9771.",
 alternates: { canonical: "/service-areas/burlington" },
};

const services = [
 {
 title: "Paver Patios & Walkways",
 body: "Paver patio installs built around how you actually host.",
 image: "/images/03-card-paver-patios.jpg",
 alt: "Paver patio install in Burlington by McCoy Landscape Group",
 href: "/services/paver-patios",
 },
 {
 title: "Paver Driveways",
 body: "Driveway pavers built for front-entry curb appeal.",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Paver driveway in Burlington by McCoy Landscape Group",
 href: "/services/paver-driveways",
 },
 {
 title: "Retaining Walls",
 body: "Retaining walls engineered for slope, load, and drainage.",
 image: "/images/04-card-retaining-walls.jpg",
 alt: "Retaining wall build in Burlington by McCoy Landscape Group",
 href: "/services/retaining-walls",
 },
 {
 title: "Outdoor Living Spaces",
 body: "Full outdoor living builds integrated as one scope.",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Outdoor living build in Burlington by McCoy Landscape Group",
 href: "/services/outdoor-living",
 },
 {
 title: "Landscape Lighting",
 body: "Low-voltage lighting that finishes every hardscape build.",
 image: "/images/06-card-landscape-lighting.jpg",
 alt: "Landscape lighting in Burlington by McCoy Landscape Group",
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
 "Local expertise — Burlington lots, soils, and freeze-thaw weather",
 "Designs that fit Burlington's range of property types and home styles",
 "Premium materials: Techo-Bloc, Unilock, and Permacon options",
 "Transparent written estimates - no change-order surprises",
 "Clean, respectful crews with daily communication",
 "Long-term relationships — repeat, referral, multi-project",
];

const faqs = [
 {
 q: "How much does landscaping in Burlington typically cost?",
 a: "Burlington hardscape investment depends heavily on scope - a rear paver patio sits at one level, a full outdoor living build with walls, fire, and lighting sits at another, and waterfront properties with drainage or grade challenges trend higher. We quote in writing after the on-site walk.",
 },
 {
 q: "Permits for retaining walls in Burlington?",
 a: "Most residential retaining walls over roughly 1 metre (3 feet) in height require engineered drawings and a City of Burlington permit. Smaller decorative walls usually don't. We handle the permit coordination and engineering liaison as part of the scope when required - no phone tree on your end.",
 },
 {
 q: "How do you handle drainage on tough Burlington streets?",
 a: "Many Burlington properties have high water tables, clay-heavy soils, and complex slope. We assess each site during consultation and design drainage into the hardscape scope - not bolted on afterward. \"Fix the water first\" is how every McCoy project gets sequenced.",
 },
 {
 q: "Typical timeline for a Burlington backyard project?",
 a: "Most Burlington hardscape builds run 1-6 weeks on-site. Straightforward patios sit at the shorter end; full outdoor living scopes run longer. Peak season (April-September) books 6-12 weeks ahead - reach out early for the best timeline options.",
 },
 {
 q: "Can you replace an old concrete driveway or patio with pavers?",
 a: "Yes - one of our most common Burlington projects. Existing concrete or asphalt gets demolished, the sub-base gets re-excavated and re-prepped, and new engineered paver systems go in. The finished result is a full upgrade with 25+ year life versus 10-12 for asphalt.",
 },
 {
 q: "Do you service all of Burlington?",
 a: "Yes - those are among our most active Burlington neighbourhoods. We work across the full city, from waterfront to north of the QEW. Travel is factored into every quote. Call or submit the form and we'll confirm whether we're the right fit for your specific address and project.",
 },
 {
 q: "What does the 3-year warranty cover on a Burlington project?",
 a: "Sink and level: if pavers settle or shift outside normal tolerances due to base or installation issues, we fix it. Cracking replacement: we order extra stock on every build so if a paver cracks, we swap it with matching material. Full warranty terms are in writing on your estimate.",
 },
 {
 q: "How far in advance should I book?",
 a: "For Burlington spring/summer starts, 6-12 weeks ahead of your ideal start date. Complex projects (engineered walls, full outdoor living, waterfront drainage work) often need 12-16 weeks to move through design, estimate, and permit coordination.",
 },
];

const alsoServing = [
 { name: "Oakville", href: "/service-areas/oakville" },
 { name: "Mississauga", href: "/service-areas/mississauga" },
 { name: "Milton", href: "/service-areas/milton" },
];

export default function BurlingtonPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="ON · BURLINGTON"
 title="Landscaping & Hardscape"
 subtitle="Design-Build in Burlington"
 opening={
 <>
 Hardscape and outdoor living design-build in Burlington, Ontario -
 paver patios, driveways, retaining walls, pergolas, and lighting.
 Call <strong>(416) 985-9771</strong> for a free on-site
 consultation. Every install is backed by our 3-year warranty and
 built for the slope, soils, and freeze-thaw Burlington homes face.
 </>
 }
 imageSrc="/images/07-showcase-retaining-hillside.jpg"
 imageAlt="Paver patio and pergola at a Burlington home by McCoy Landscape Group"
 />

 {/* Local Positioning */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">ABOUT MCCOY IN BURLINGTON</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Landscape & Hardscape{" "}
 <em className="italic font-light">for Burlington Homes</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 McCoy is the design-build team Burlington homeowners call when
 they want a hardscape build that matches the neighbourhood and
 holds up — clean job sites, design-build scopes, and the kind of
 work that lasts.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Aldershot, Roseland, and Shoreacres are our busiest zones — larger
 properties, mature landscaping, drainage realities that change from
 spring to winter, and design expectations that make generic
 suburban builds feel out of place.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Services Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">BURLINGTON SERVICES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Hardscape & Landscape Services{" "}
 <em className="italic font-light">Available in Burlington</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every McCoy service available across Burlington and adjacent
 West GTA communities.
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
 <em className="italic font-light text-[var(--color-accent)]">Every Burlington Neighbourhood</em>
 </h2>
 <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/85">
 Aldershot, Roseland, Shoreacres, Tyandaga, Brant Hills, Headon
 Forest, Millcroft, Orchard, Alton Village, and Mountainside are
 where most of our Burlington builds happen. Surrounding Burlington
 streets served case-by-case based on scope and scheduling.
 </p>
 </div>
 <div className="flex flex-wrap gap-2 md:gap-3">
 {[
 "Aldershot",
 "Roseland",
 "Shoreacres",
 "Tyandaga",
 "Brant Hills",
 "Headon Forest",
 "Millcroft",
 "Orchard",
 "Alton Village",
 "Mountainside",
 "Tansley",
 "Palmer",
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
 - we cover plenty of surrounding Burlington and West GTA areas case-by-case.
 </p>
 </div>
 </section>

 {/* Why McCoy */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.14} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY IN BURLINGTON</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Why Burlington Homeowners{" "}
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
 src="/images/07-showcase-retaining-hillside.jpg"
 alt="Terraced retaining wall and waterfront drainage fix in Burlington by McCoy Landscape Group"
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
 A RECENT MCCOY BUILD · BURLINGTON
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Burlington terraced retaining wall and waterfront drainage
 solution - engineered, installed, and warrantied.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Burlington Landscaping &"
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
 city="Burlington"
 focusPhrase="Aldershot, Roseland, and Shoreacres"
 whyHere="Mature lots, big trees, and shifting drainage profiles make every base detail matter, and we&rsquo;ve been building here long enough to know which streets hide the worst clay."
 />

 <FinalCTA />
 <Footer />
 <JsonLd

 data={{

 "@context": "https://schema.org",

 "@graph": [
 {
 "@type": "LocalBusiness",
 name: "McCoy Landscape Group — Burlington",
 url: "https://mccoylandscapegroup.com/service-areas/burlington",
 telephone: "+1-416-985-9771",
 areaServed: { "@type": "City", name: "Burlington", addressRegion: "ON", addressCountry: "CA" },
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
 { "@type": "ListItem", position: 3, name: "Burlington", item: "https://mccoylandscapegroup.com/service-areas/burlington" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
