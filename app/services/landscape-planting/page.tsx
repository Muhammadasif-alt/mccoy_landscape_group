import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 Trees,
 Leaf,
 Shovel,
 Sun,
 Anchor,
 Droplets,
 CheckCircle2,
} from "lucide-react";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import JsonLd from "@/components/JsonLd";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import FAQBlock from "@/components/FAQBlock";

export const metadata: Metadata = {
 title: "Landscape Planting Oakville | Trees, Shrubs & Perennials | McCoy Landscape Group",
 description:
 "Tree, shrub, and perennial planting in Oakville, Burlington, Mississauga & Milton. Zone 5b hardy stock set at correct depth and spacing. Call (416) 985-9771.",
 alternates: { canonical: "/services/landscape-planting" },
};

const plantingTypes = [
 {
 icon: Trees,
 title: "Shade and ornamental trees",
 body: "Caliper stock from Ontario growers — maples, serviceberry, redbud, honey locust — placed for mature canopy, not first-year looks.",
 },
 {
 icon: Leaf,
 title: "Shrub and hedge installation",
 body: "Foundation shrubs, screening hedges, and structural evergreens spaced by mature width so they never need shearing into boxes.",
 },
 {
 icon: Sun,
 title: "Perennial and grass layers",
 body: "Repeating drifts of perennials and ornamental grasses that carry bloom and texture from May through hard frost.",
 },
 {
 icon: Shovel,
 title: "Right plant, right place",
 body: "Selections matched to your sun hours, soil texture, drainage, and salt exposure along driveways and municipal sidewalks.",
 },
 {
 icon: Anchor,
 title: "Large caliper tree setting",
 body: "Balled-and-burlapped trees machine-set, root flare exposed, wire basket cut back, staked only where wind genuinely demands it.",
 },
 {
 icon: Droplets,
 title: "Native and pollinator palettes",
 body: "Coneflower, little bluestem, serviceberry, and other regional natives that feed pollinators and shrug off West GTA summers.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Selection and Sourcing",
 items: [
 "Sun mapping and soil check across the property before a single plant is specified",
 "Everything specified to Zone 5b, with 6a-only material used sparingly and only in sheltered microclimates",
 "Balled-and-burlapped, container, or bare root stock chosen by species, season, and transplant tolerance",
 "Plants tagged at the grower or nursery so you get the specimens we picked, not whatever came off the truck",
 ],
 },
 {
 heading: "Planting the Right Way",
 items: [
 "Holes dug two to three times the root ball width and no deeper than the ball itself",
 "Root flare located and set at or slightly above finished grade — the biggest single cause of slow tree decline",
 "Wire baskets and burlap cut away from the upper ball, girdling roots teased out on container stock",
 "Native soil backfilled and settled with water, with amendment worked into the wider bed rather than the hole",
 ],
 },
 {
 heading: "Support and Handoff",
 items: [
 "Large caliper trees staked with flexible ties for one season only, then released so the trunk builds taper",
 "Mulch ring laid 75 mm deep and pulled back clear of the trunk — no volcano mulching",
 "Written watering schedule for the critical first season, plus a deep autumn soak before freeze-up",
 "3-year workmanship warranty on installation; plant material follows grower terms, typically 1 year on woody stock",
 ],
 },
];

const whyMcCoyBullets = [
 "Plants specified for Zone 5b West GTA conditions, not generic catalogue hardiness claims",
 "Spacing set by mature size — beds look a little open at year one and correct by year three",
 "We tag specimen trees at the nursery so you know exactly what is arriving",
 "Deer-resistant and salt-tolerant selections for the lots that genuinely need them",
 "Owner-operated — Alex and Pieter place every specimen tree before it is backfilled",
 "25+ years planting across Oakville, Burlington, Mississauga, and Milton",
];

const processSteps = [
 { title: "Free Site Visit", body: "We read the light, the soil, and the exposure before recommending anything." },
 { title: "Plant List and Layout", body: "Species, sizes, and quantities set out with a plan showing mature spread." },
 { title: "Sourcing and Tagging", body: "Stock reserved at Ontario growers, specimen trees tagged and held." },
 { title: "Install Day", body: "Beds prepped, plants set, flare exposed, backfilled, watered in, mulched." },
 { title: "Care Walkthrough", body: "Watering schedule, first-winter notes, and warranty terms handed over." },
];

const faqs = [
 {
 q: "What hardiness zone is Oakville, and does it matter?",
 a: "The Oakville and Burlington lakeshore sits in Zone 6a thanks to the moderating effect of Lake Ontario, while areas inland toward Milton read closer to 5b. We specify to 5b as the safe baseline for the whole service area and only push 6a material in genuinely sheltered spots. It matters because a plant rated one zone too tender looks fine for two mild winters and then dies in a cold one.",
 },
 {
 q: "When is the best time of year to plant?",
 a: "Spring and early fall are both excellent. Spring gives a full growing season to establish before winter. Fall, roughly late August through October, has cool air and warm soil, which is ideal for root growth and means far less watering. We avoid planting into midsummer heat where we can. Fall-planted material does need a deep soak before the ground freezes.",
 },
 {
 q: "What is the difference between B&B, container, and bare root?",
 a: "Balled-and-burlapped trees are field-grown and dug with a soil ball, which suits large caliper stock but means losing some roots. Container plants carry their whole root system and transplant with the least shock, though they can circle their roots if held too long. Bare root is cheapest and available only in early spring dormancy. We match the format to the species and the season.",
 },
 {
 q: "Why do my new beds look so sparse?",
 a: "Because we space by mature width, not by what fills the bed today. A shrub sold at 24 inches may reach six feet across. Planting on tight centres looks lush the first summer and turns into an overcrowded, disease-prone thicket that needs constant shearing by year four. We fill the gaps with perennials and annuals for the first two seasons instead.",
 },
 {
 q: "Do you have options for deer or road salt?",
 a: "Yes, and both are real problems in parts of this area. For deer pressure we lean on boxwood, spirea, ornamental grasses, Russian sage, and aromatic perennials they tend to skip. For driveway and sidewalk edges that take winter salt spray we use tolerant material like juniper, potentilla, and daylily, and keep sensitive evergreens out of the splash zone entirely.",
 },
 {
 q: "How much watering do new plants actually need?",
 a: "More than most people expect, and less often than most people do it. The rule is deep and infrequent: a slow soak two or three times a week for the first eight weeks, tapering to weekly for the rest of the first season. Shallow daily sprinkling trains roots to stay near the surface. We hand over a written schedule because watering is where most first-year losses come from.",
 },
];

const serviceAreas = [
 {
 name: "Oakville",
 note: "Premium hardscape installs",
 image: "/images/09-showcase-signature-build.jpg",
 alt: "Oakville hardscape work by McCoy Landscape Group",
 href: "/service-areas/oakville",
 },
 {
 name: "Burlington",
 note: "Custom outdoor living",
 image: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Burlington retaining wall hardscape by McCoy Landscape Group",
 href: "/service-areas/burlington",
 },
 {
 name: "Mississauga",
 note: "Full-service hardscape",
 image: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Mississauga paver driveway by McCoy Landscape Group",
 href: "/service-areas/mississauga",
 },
 {
 name: "Milton",
 note: "Custom hardscape design-build",
 image: "/images/05-card-outdoor-living.jpg",
 alt: "Milton outdoor living build by McCoy Landscape Group",
 href: "/service-areas/milton",
 },
];

export default function LandscapePlantingPage() {
 const SITE = "https://mccoylandscapegroup.com";
 const URL = `${SITE}/services/landscape-planting`;

 const serviceLd = {
 "@context": "https://schema.org",
 "@type": "Service",
 "@id": `${URL}#service`,
 name: "Landscape Planting",
 description:
 "Tree, shrub, and perennial installation matched to Zone 5b conditions across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": `${SITE}/#localbusiness` },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Tree Planting", "Shrub Installation", "Perennial Planting", "Hedge Installation", "Native Plant Landscaping"],
 url: URL,
 };

 const breadcrumbLd = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: SITE },
 { "@type": "ListItem", position: 2, name: "Services", item: `${SITE}/services` },
 { "@type": "ListItem", position: 3, name: "Landscape Planting", item: URL },
 ],
 };

 const faqLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((f) => ({
 "@type": "Question",
 name: f.q,
 acceptedAnswer: { "@type": "Answer", text: f.a },
 })),
 };

 return (
 <>
 <Nav />

 <PageHero
 eyebrow="LANDSCAPE PLANTING"
 title="Trees and Shrubs Chosen"
 subtitle="for the Life Ahead"
 opening={
 <>
 Tree, shrub, and perennial installation across Oakville, Burlington,
 Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> for a free on-site visit — we read
 the sun, soil, and salt exposure first, then specify Zone 5b hardy
 stock and plant it at the depth and spacing it needs to last.
 </>
 }
 imageSrc="/images/softscape-hero.jpg"
 imageAlt="Newly planted trees, shrubs, and ornamental grasses in a mulched bed on a McCoy Landscape Group planting install"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE LONG VIEW</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 A Planting Plan Is a Bet on{" "}
 <em className="italic font-light">Year Ten</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Nursery stock looks its best the day it comes off the truck. What
 decides the next decade is whether the species suits your light,
 your soil, and your winter — and whether it went into the ground at
 the depth and spacing it needed. Most planting failures were settled
 the day the hole was dug.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Planting Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT WE PLANT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Trees, Shrubs, Perennials — Placed for Year Ten
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 Anyone can dig a hole. The craft is in choosing species that suit
 your light and soil, setting the root flare at the right height, and
 spacing for the size that plant is actually going to become.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {plantingTypes.map(({ icon: Icon, title, body }) => (
 <div
 key={title}
 className="group relative bg-[var(--color-bg-warm)] rounded-2xl p-6 md:p-7 border-t-[3px] border-t-[var(--color-accent-mid)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.18)]"
 >
 <div className="w-12 h-12 rounded-full bg-white text-[var(--color-primary)] flex items-center justify-center mb-4 shadow-sm">
 <Icon size={22} strokeWidth={2} />
 </div>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[18px] md:text-[19px] text-[var(--color-primary)] mb-2 leading-tight">
 {title}
 </h3>
 <p className="text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-text)]">
 {body}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Photo strip */}
 <section className="relative">
 <div className="relative h-[320px] md:h-[460px] overflow-hidden">
 <Image
 src="/images/maintenance-detail.jpg"
 alt="Established shrub and perennial planting in a clean mulched bed on a McCoy Landscape Group property"
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
 toColor="#ffffff"
 variant="rolling"
 height={90}
 flip
 className="absolute inset-x-0 top-0 z-[2]"
 />
 <div className="absolute inset-0 flex items-center z-[1]">
 <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 lg:px-20">
 <span className="inline-flex items-center bg-black/55 backdrop-blur-sm px-3 py-1.5 rounded-full !text-[12px] md:!text-[13px] uppercase tracking-[0.12em] font-semibold text-white">
 A RECENT MCCOY PLANTING · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Serviceberry, little bluestem, and coneflower drifted through a
 front bed — spaced for the width they reach, not the width they
 arrive at.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Signature Features */}
 <section className="relative bg-[var(--color-bg-dark)] text-white py-20 md:py-24 overflow-hidden -mt-1">
 <TopoBG shape="shape_04" position="bottom-right" size={520} opacity={0.18} tint="white" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">THE UNGLAMOROUS PART</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 What Happens in the Hole Decides Whether It{" "}
 <em className="italic font-light text-[var(--color-accent)]">Thrives</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Root flare found and set at finished grade, even when the grower buried it in the pot",
 "Wire basket and burlap cut away from the upper ball once the tree is down in its hole",
 "Girdling roots on container stock scored or teased straight instead of dropped in coiled",
 "Mulch kept shallow and held off the bark — no cone of it piled against the trunk",
 ].map((item) => (
 <div
 key={item}
 className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5"
 >
 <CheckCircle2
 size={22}
 className="text-[var(--color-accent)] flex-shrink-0 mt-[2px]"
 />
 <p className="text-[15px] md:text-[16px] leading-[1.55] text-white/95">
 {item}
 </p>
 </div>
 ))}
 </div>
 </div>
 <WaveDivider toColor="#ffffff" variant="calm" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* What's Included */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-14">
 <span className="eyebrow text-[var(--color-accent-mid)]">THE SCOPE</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 What&apos;s Included{" "}
 <em className="italic font-light">in a Planting Install</em>
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
 {includedScope.map((block) => (
 <div key={block.heading}>
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[20px] text-[var(--color-primary)] mb-4 pb-2 border-b border-[var(--color-border)]">
 {block.heading}
 </h3>
 <ul className="flex flex-col gap-3">
 {block.items.map((item) => (
 <li
 key={item}
 className="flex items-start gap-2.5 text-[14px] md:text-[15px] leading-[1.55] text-[var(--color-text)]"
 >
 <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-mid)] mt-[8px] flex-shrink-0" />
 <span>{item}</span>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Why McCoy */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={540} opacity={0.14} tint="accent" />
 <div className="relative mx-auto max-w-[1200px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHY MCCOY</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Plants Chosen for{" "}
 <em className="italic font-light">West GTA Conditions</em>
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

 {/* Process */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-12 md:mb-16">
 <span className="eyebrow text-[var(--color-accent-mid)]">HOW WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 From Site Reading to{" "}
 <em className="italic font-light">Rooted In</em>
 </h2>
 </div>

 <ol className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-6">
 {processSteps.map((s, i) => {
 const stepPhotos = [
 "/images/14-about-trailer.jpg",
 "/images/10-process-consultation.jpg",
 "/images/11-process-excavation.jpg",
 "/images/12-process-installation.jpg",
 "/images/13-process-handoff.jpg",
 ];
 return (
 <li
 key={s.title}
 className="relative bg-[var(--color-bg-warm)] rounded-2xl overflow-hidden border-t-[3px] border-t-[var(--color-accent-mid)] flex flex-col"
 >
 <div className="relative aspect-square w-full overflow-hidden">
 <Image
 src={stepPhotos[i]}
 alt={`${s.title} — McCoy Landscape Group landscape planting process`}
 fill
 className="object-cover"
 sizes="(max-width: 768px) 100vw, 320px"
 />
 <span className="absolute top-3 left-3 w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-[14px] shadow-md">
 {i + 1}
 </span>
 </div>
 <div className="p-5 flex-1">
 <h3 className="font-[family-name:var(--font-display)] font-bold text-[16px] md:text-[17px] text-[var(--color-primary)] mb-2 leading-snug">
 {s.title}
 </h3>
 <p className="text-[13px] md:text-[14px] leading-[1.5] text-[var(--color-text)]">
 {s.body}
 </p>
 </div>
 </li>
 );
 })}
 </ol>

 <p className="mt-10 text-[14px] md:text-[15px] text-[var(--color-text-muted)] italic max-w-[720px]">
 Install days are short; sourcing is what sets the calendar. Specimen
 trees may need to be tagged and held weeks before planting.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Shapes the Cost of{" "}
 <em className="italic font-light">a Planting Install</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Planting is priced by the calibre and count of the material and by
 the ground it has to go into. A specimen caliper tree carries a very
 different value than a flat of perennials. Heavy clay beds need
 amendment and spoil hauled off before anything is set, and large
 stock needs machine access. We put the plant list and the number in
 writing after the free site visit.
 </p>
 </div>
 </div>
 </section>

 {/* Service Areas */}
 <section className="relative bg-white py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHERE WE WORK</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3">
 Planting Across{" "}
 <em className="italic font-light">the West GTA</em>
 </h2>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
 {serviceAreas.map((sa) => (
 <Link
 key={sa.name}
 href={sa.href}
 className="group relative block aspect-square rounded-2xl overflow-hidden shadow-[0_8px_28px_-18px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(0,0,0,0.3)]"
 >
 <Image
 src={sa.image}
 alt={sa.alt}
 fill
 className="object-cover transition-transform duration-700 group-hover:scale-105"
 sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0.05) 0%,rgba(15,20,17,0.35) 50%,rgba(15,20,17,0.85) 100%)",
 }}
 />
 <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
 <span className="eyebrow !text-[12px] md:!text-[13px] text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
 ON
 </span>
 <h3 className="font-[family-name:var(--font-display)] font-black text-white text-[24px] md:text-[28px] leading-tight mt-1.5 [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]">
 {sa.name}
 </h3>
 <p className="text-[13px] md:text-[14px] text-white/90 leading-[1.45] mt-1.5 [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
 {sa.note}
 </p>
 <div className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-accent)]">
 Service area details
 <span
 aria-hidden
 className="transition-transform group-hover:translate-x-1"
 >
 →
 </span>
 </div>
 </div>
 </Link>
 ))}
 </div>

 <p className="mt-6 text-[14px] text-[var(--color-text-muted)] italic">
 Plus surrounding suburbs.
 </p>
 </div>
 </section>

 {/* FAQ — canonical FAQBlock (matches homepage). */}
 <FAQBlock
 headingMain="Planting FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 <JsonLd data={serviceLd} />
 <JsonLd data={breadcrumbLd} />
 <JsonLd data={faqLd} />

 </>
 );
}
