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
 title: "Landscaping Oakville | Hardscape Contractor | McCoy",
 description:
 "Hardscape design-build serving Oakville - patios, driveways, walls, outdoor living & lighting. 25+ years West GTA experience. 3-year warranty. (416) 985-9771.",
 alternates: { canonical: "/service-areas/oakville" },
};

const services = [
 {
 title: "Paver Patios & Walkways",
 body: "Paver patio oakville installs scoped for how you actually use the backyard.",
 image: "/images/03-card-paver-patios.jpg",
 alt: "Paver patio install in Oakville by McCoy Landscape Group",
 href: "/services/paver-patios",
 },
 {
 title: "Paver Driveways",
 body: "Driveway paver installation built for Oakville lots and front-entry impressions.",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Paver driveway in Oakville by McCoy Landscape Group",
 href: "/services/paver-driveways",
 },
 {
 title: "Retaining Walls",
 body: "The retaining wall contractor oakville lakeside grade and drainage demand.",
 image: "/images/04-card-retaining-walls.jpg",
 alt: "Retaining wall build in Oakville by McCoy Landscape Group",
 href: "/services/retaining-walls",
 },
 {
 title: "Outdoor Living Spaces",
 body: "Full outdoor living oakville builds - pergolas, fire, walls, lighting.",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Outdoor living build in Oakville by McCoy Landscape Group",
 href: "/services/outdoor-living",
 },
 {
 title: "Landscape Lighting",
 body: "Low-voltage lighting that extends every Oakville hardscape into the evening.",
 image: "/images/06-card-landscape-lighting.jpg",
 alt: "Landscape lighting in Oakville by McCoy Landscape Group",
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
 "Local expertise - Oakville lots, Oakville soils, Oakville weather",
 "Designs that fit Oakville heritage streets and properties",
 "Premium materials: Techo-Bloc, Unilock, and Permacon options",
 "Transparent written estimates - no change-order surprises",
 "Clean, respectful crews and daily communication on every build",
 "Long-term client relationships — repeat, referral, and multi-project",
];

const faqs = [
 {
 q: "How much does landscaping in Oakville typically cost?",
 a: "Oakville hardscape projects range widely - a straightforward rear paver patio is one range, a full outdoor living build with walls, fire, and integrated lighting is another, and lots with complex drainage tend to sit at the higher end. We quote every project in writing after the on-site walk so you see real numbers, not square-foot estimates.",
 },
 {
 q: "What's a typical timeline for a backyard project in Oakville?",
 a: "Most Oakville hardscape builds run 1-6 weeks on-site depending on scope. Patio-only projects sit at the shorter end; full outdoor living scopes with walls, fire features, and drainage work run longer. Peak-season slots (April-September) book 6-12 weeks ahead, so reaching out early gets you timeline options.",
 },
 {
 q: "Do I need permits for hardscape in Oakville or heritage streets?",
 a: "Depends on the project. Retaining walls over certain heights, driveways tied to widening permits, and any work affecting property-line grade changes usually require permits. Heritage-zoned streets can have additional design approvals. We research the specific requirements for your address and handle the paperwork coordination when needed.",
 },
 {
 q: "How do you handle drainage and lot-line issues on Oakville builds?",
 a: "Lakeshore properties often have unique drainage patterns - high water tables, clay-heavy soils, slope toward the lake. We assess the site during the consultation, design drainage into the hardscape scope (not bolted on afterward), and build to keep water moving away from foundations and neighbouring properties.",
 },
 {
 q: "Can you upgrade an old concrete patio or driveway with pavers?",
 a: "Absolutely. Removing and replacing existing concrete or asphalt with pavers is one of our most common Oakville projects. We haul off the old surface, re-excavate the sub-base properly, and install engineered paver systems that outlast what they replace by 15-20 years.",
 },
 {
 q: "Do you service North Oakville as well as Oakville?",
 a: "Yes. Our highest concentration is in central and south Oakville, but we regularly work across the Queen Elizabeth Way corridor up into North Oakville. Travel time is factored into every quote. Reach out and we'll tell you straight whether McCoy is the right fit for your project.",
 },
 {
 q: "How far in advance should I book?",
 a: "For spring and summer starts in Oakville, book 6-12 weeks ahead of your ideal start date. Complex projects (engineered walls, full outdoor living, drainage changes) often need 12-16 weeks lead time to move through design, estimate, and permit coordination before excavation starts.",
 },
 {
 q: "What suppliers do you use?",
 a: "Techo-Bloc is our primary recommendation for most Oakville hardscape projects - widest premium line, best match for lot aesthetics. Unilock and Permacon cover alternate options by look, budget, and spec. We walk through the tradeoffs in the design phase so you pick with full information.",
 },
];

const alsoServing = [
 { name: "Burlington", href: "/service-areas/burlington" },
 { name: "Mississauga", href: "/service-areas/mississauga" },
 { name: "Milton", href: "/service-areas/milton" },
];

export default function OakvillePage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="ON · OAKVILLE"
 title="Landscaping & Hardscape"
 subtitle="Design-Build in Oakville"
 opening={
 <>
 Hardscape and outdoor living design-build in Oakville, Ontario -
 paver patios, driveways, retaining walls, pergolas, and lighting.
 Call <strong>(416) 985-9771</strong> for a free on-site
 consultation. Every install is backed by our 3-year warranty and
 built for the grade, soils, and freeze-thaw Oakville homes demand.
 </>
 }
 imageSrc="/images/09-showcase-signature-build.jpg"
 imageAlt="Paver patio with seating wall and fire pit at a Oakville home by McCoy Landscape Group"
 />

 {/* Local Positioning */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">ABOUT MCCOY IN OAKVILLE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Landscape & Hardscape{" "}
 <em className="italic font-light">for Oakville Homes</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 McCoy is the design-build team Oakville homeowners call when they
 want a hardscape project that fits the street, respects the lot,
 and lasts decades. Our roots here go back 25 years, and the work
 is still driven by the same standard.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Bronte, Morrison, Eastlake, and the heritage streets are where we
 work most — mature lots with complex drainage, grade challenges,
 and design expectations that demand more than a standard suburban
 patio install.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Services Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">OAKVILLE SERVICES</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Hardscape & Landscape Services{" "}
 <em className="italic font-light">Available in Oakville</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Every McCoy service available across Oakville and adjacent
 neighbourhoods.
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
 <em className="italic font-light text-[var(--color-accent)]">Every Oakville Neighbourhood</em>
 </h2>
 <p className="text-[15px] md:text-[17px] leading-[1.7] text-white/85">
 Bronte, Old Oakville, Morrison, Eastlake, Glen Abbey, Kerr Village,
 West Oak Trails, Iroquois Ridge, Joshua Creek, and College Park
 are where most of our Oakville builds happen. Surrounding Oakville
 streets served case-by-case based on scope and scheduling.
 </p>
 </div>
 <div className="flex flex-wrap gap-2 md:gap-3">
 {[
 "Bronte",
 "Old Oakville",
 "Morrison",
 "Eastlake",
 "Glen Abbey",
 "Kerr Village",
 "West Oak Trails",
 "Iroquois Ridge",
 "Joshua Creek",
 "College Park",
 "Westmount",
 "Falgarwood",
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
 - we cover plenty of surrounding Oakville and West GTA areas case-by-case.
 </p>
 </div>
 </section>

 {/* Why McCoy */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.14} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY IN OAKVILLE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Why Oakville Homeowners{" "}
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

 {/* Recent build photo strip - wavy white top, straight bottom */}
 <section className="relative">
 <div className="relative h-[320px] md:h-[460px] overflow-hidden">
 <Image
 src="/images/09-showcase-signature-build.jpg"
 alt="Full outdoor living build in Oakville - pergola, fire, and lighting by McCoy Landscape Group"
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
 A RECENT MCCOY BUILD · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Oakville full outdoor living - paver patio, pergola,
 fire pit, and integrated lighting in a single scope.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Oakville Landscaping &"
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
 city="Oakville"
 focusPhrase="south Oakville — Oakville, Glen Abbey, Kerr Village, and Oakville"
 whyHere="Lots and drainage here demand more from a hardscape build, and we&rsquo;ve spent 25 years learning what that means across Oakville&rsquo;s neighbourhoods."
 />

 <FinalCTA />
 <Footer />
 <JsonLd

 data={{

 "@context": "https://schema.org",

 "@graph": [
 {
 "@type": "LocalBusiness",
 name: "McCoy Landscape Group — Oakville",
 url: "https://mccoylandscapegroup.com/service-areas/oakville",
 telephone: "+1-416-985-9771",
 areaServed: { "@type": "City", name: "Oakville", addressRegion: "ON", addressCountry: "CA" },
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
 { "@type": "ListItem", position: 3, name: "Oakville", item: "https://mccoylandscapegroup.com/service-areas/oakville" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
