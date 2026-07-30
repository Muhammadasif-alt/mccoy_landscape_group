import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
 SprayCan,
 Sparkles,
 Leaf,
 Shovel,
 Droplets,
 ShieldCheck,
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
 title: "Paver Cleaning & Sealing Oakville | Restore, Re-Sand & Seal | McCoy Landscape Group",
 description:
 "Paver cleaning and sealing in Oakville, Burlington, Mississauga & Milton. Pressure washing, efflorescence removal, re-sanding and sealer. Call (416) 985-9771.",
 alternates: { canonical: "/services/paver-cleaning-and-sealing" },
};

const paverCareTypes = [
 {
 icon: SprayCan,
 title: "Controlled pressure washing",
 body: "A surface cleaner run at a pressure the paver face can take — enough to lift grime, not enough to scar aggregate.",
 },
 {
 icon: Sparkles,
 title: "Efflorescence removal",
 body: "The white salt haze pulled off with a dedicated cleaner and properly neutralised, rather than scrubbed around the surface.",
 },
 {
 icon: Leaf,
 title: "Weed, moss & algae kill",
 body: "Joints treated and cleared to full depth, because anything left rooted grows straight back through fresh sand.",
 },
 {
 icon: Shovel,
 title: "Polymeric joint re-sanding",
 body: "Joints refilled to spec depth with polymeric sand, swept, blown clean, then activated with a controlled fine mist.",
 },
 {
 icon: Droplets,
 title: "Penetrating matte sealer",
 body: "Silane-siloxane sealer that soaks in and repels water and road salt while leaving the stone looking untouched.",
 },
 {
 icon: ShieldCheck,
 title: "Film-forming wet-look sealer",
 body: "An acrylic coat that deepens colour, binds the joint sand hard, and adds gloss on tight, well-drained installs.",
 },
];

const includedScope: { heading: string; items: string[] }[] = [
 {
 heading: "Clean & Strip",
 items: [
 "Full sweep, then a surface-cleaner wash at pressure matched to the paver face",
 "Old sealer stripped wherever a previous coat is peeling, blushing, or clouded",
 "Efflorescence treated with a dedicated cleaner and neutralised, not left to etch",
 "Weeds, moss, and algae killed and cleared out of the joints to full depth",
 ],
 },
 {
 heading: "Repair & Re-Sand",
 items: [
 "Sunken or rocking units lifted, bedding corrected, and re-set flush before anything is sealed",
 "Joints vacuumed or blown out where the old sand has washed low",
 "Polymeric sand swept in to the right depth for the joint width and paver thickness",
 "Sand activated with a measured mist so it sets hard without hazing the faces",
 ],
 },
 {
 heading: "Seal & Cure",
 items: [
 "Surface confirmed bone dry and the forecast checked before a drop of sealer goes down",
 "Two coats at the manufacturer's flash time, with all edges cut in by hand",
 "Foot traffic held 24 hours and vehicles 72 hours, longer in cool or humid weather",
 "A written re-seal window so you know exactly when the surface is due again",
 ],
 },
];

const whyMcCoyBullets = [
 "We fix what is under the surface first — nothing gets sealed over a rocking paver",
 "Pressure matched to the paver, not cranked to whatever the machine can throw",
 "Efflorescence properly neutralised so the haze doesn't bloom back through the coating",
 "Sealer chosen for your paver, drainage, and desired finish — not one product for every job",
 "Weather windows respected — we would rather push a day than trap moisture under a coat",
 "25+ years on Halton and Peel interlock, so we know how these surfaces age here",
];

const processSteps = [
 { title: "Photos or Site Visit", body: "Send photos or we drop by to check paver type, joint condition, and any previous sealer." },
 { title: "Test Patch", body: "A small area cleaned and sealed so you see the finished colour before the whole surface commits." },
 { title: "Clean & Repair", body: "Wash, efflorescence treatment, weed clear-out, and any lifting and re-setting needed." },
 { title: "Re-Sand the Joints", body: "Polymeric sand swept to depth, surface blown clean, misted, then left to set hard." },
 { title: "Seal & Cure", body: "Sealer laid in the right weather window, then the surface kept clear until fully cured." },
];

const faqs = [
 {
 q: "How soon can brand-new pavers be sealed?",
 a: "Give them 60 to 90 days at minimum. New concrete pavers are still releasing free lime and moisture as they finish curing, and sealing early traps it — you get a permanent white blush under the coating that only comes off by stripping. A full season is better still, because it lets any efflorescence surface so we can wash it away first.",
 },
 {
 q: "Do I actually need to seal my patio?",
 a: "No, sealing is optional. What it buys you is easier cleanup of grease, wine, and leaf tannin, better colour retention against UV, locked joint sand, and real protection from de-icing salt. On a driveway that sees a winter of salt it is genuinely worth doing. On a shaded side walkway that nobody uses, it is mostly cosmetic.",
 },
 {
 q: "Will sealing trap moisture and wreck the pavers?",
 a: "It can, if it is done badly. A film-forming sealer laid over damp units, or over a base that does not drain, seals water underneath and you get milky blushing and eventually flaking. That is why we test moisture and read the forecast before starting, and on installs with poor drainage we recommend a breathable penetrating sealer instead of a film.",
 },
 {
 q: "Wet-look or natural finish?",
 a: "Wet-look acrylics deepen the colour, add gloss, and bind joint sand hard — they look excellent on flagstone-profile and darker units. They also need stripping or abrading before recoating and can get slick underfoot when wet. Penetrating silane-siloxane sealers leave the surface looking bare, repel water and salt, and never peel. We do a test patch so you can see both.",
 },
 {
 q: "How often does it need redoing?",
 a: "Plan on three to five years for most Oakville and Burlington properties. Driveways and south-facing patios taking full sun and winter salt sit at the shorter end, while shaded low-traffic areas stretch longer. Penetrating sealers simply wear out and can be reapplied straight over themselves. Film-forming coats need the old layer stripped or abraded first.",
 },
 {
 q: "Can you seal in the fall, or is it a summer job?",
 a: "Late spring through early fall is the working window here. Sealer needs surface temperatures inside the manufacturer's range and dry weather either side of application, and Ontario nights cool off fast once October arrives. We book sealing with a weather buffer built in, and we will happily move a day rather than lay product into dew or an incoming front.",
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

export default function PaverCleaningAndSealingPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="PAVER CLEANING & SEALING"
 title="Bring Tired Interlock"
 subtitle="Back to New"
 opening={
 <>
 Pressure washing, efflorescence removal, joint re-sanding, and sealing
 for existing patios, walkways, and driveways in Oakville, Burlington,
 Mississauga, and Milton. Call{" "}
 <strong>(416) 985-9771</strong> to book a restoration slot — 25+ years
 working on interlock across Halton and Peel.
 </>
 }
 imageSrc="/images/13-process-handoff.jpg"
 imageAlt="Restored paver patio with freshly cleaned faces and re-sanded joints on an Oakville property finished by McCoy Landscape Group"
 />

 {/* Positioning Intro */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_06" position="center-right" size={620} opacity={0.16} tint="primary" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">RESTORATION, NOT RESURFACING</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 Sealer Is the Last Five Percent —{" "}
 <em className="italic font-light">the Prep Is the Job</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 A can of sealer will not hide a rocking unit, rooted weeds, or salt
 haze still sitting in the pores. Everything that decides how the
 surface looks three summers from now happens before the first coat
 goes down — the wash, the repairs, the joints, and the weather
 window.
 </p>
 </div>
 <WaveDivider toColor="#ffffff" variant="rolling" height={100} className="absolute inset-x-0 bottom-0" />
 </section>

 {/* Restoration Types Grid */}
 <section className="relative bg-white pt-24 md:pt-28 pb-20 md:pb-24 overflow-hidden">
 <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px] mb-10 md:mb-12">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT RESTORATION COVERS</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-4">
 Wash, Re-Sand, Seal — In That Order
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text)]">
 From a controlled wash through joint re-sanding to the sealer you
 actually want, here is the restoration work McCoy carries out on
 existing interlock across Oakville, Burlington, Mississauga, and Milton.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
 {paverCareTypes.map(({ icon: Icon, title, body }) => (
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
 src="/images/03-card-paver-patios.jpg"
 alt="Cleaned and sealed paver patio with re-sanded joints on a Mississauga property restored by McCoy Landscape Group"
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
 A RECENT MCCOY RESTORATION · MISSISSAUGA
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[680px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Failed coat stripped, sunken units re-set, joints re-sanded to
 depth, then sealed inside a clear four-day window.
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
 <span className="eyebrow text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">WHERE SEAL JOBS FAIL</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] mt-3">
 The Unseen Steps That Make a Coat{" "}
 <em className="italic font-light text-[var(--color-accent)]">Hold</em>
 </h2>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
 {[
 "Efflorescence neutralised after the cleaner, so salts can't bloom back up through the finished coat",
 "Failing sealer stripped or abraded off rather than coated over and locked under a new layer",
 "Joint sand filled to full depth and activated with a measured mist, never flooded with a hose",
 "Surface moisture read and the forecast checked on both sides of the application day",
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
 <em className="italic font-light">in a Clean-and-Seal</em>
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
 The Prep Decides{" "}
 <em className="italic font-light">How Long the Seal Lasts</em>
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
 From Test Patch to{" "}
 <em className="italic font-light">Cured Surface</em>
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
 alt={`${s.title} — McCoy Landscape Group paver cleaning and sealing process`}
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
 Most clean-and-seal jobs run two to three days on site, and we
 always book them against a dry stretch in the forecast rather than
 a fixed date.
 </p>
 </div>
 </section>

 {/* Investment Guidance */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <div className="max-w-[760px]">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO EXPECT</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-5">
 What Sets the Price of{" "}
 <em className="italic font-light">a Clean-and-Seal</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Square footage sets the floor; condition sets everything above it.
 Stripping a failed coat, treating heavy efflorescence, clearing
 rooted weeds, or lifting and re-setting sunken units all add labour
 before a drop of sealer is opened. Joint width and sand volume
 matter, and so does the sealer you choose. Every surface is quoted
 in writing after the on-site assessment.
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
 Interlock Restoration Across{" "}
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
 headingMain="Cleaning & Sealing FAQs"
 headingItalic="for Existing Interlock"
 faqs={faqs}
 />

 <FinalCTA />
 <Footer />
 <JsonLd

 data={{

 "@context": "https://schema.org",

 "@graph": [
 {
 "@type": "Service",
 name: "Paver Cleaning and Sealing",
 description:
 "Pressure washing, efflorescence removal, polymeric joint re-sanding, and sealing of existing interlock patios, walkways, and driveways across Oakville, Burlington, Mississauga, and Milton.",
 provider: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 areaServed: ["Oakville", "Burlington", "Mississauga", "Milton"],
 serviceType: ["Paver Cleaning", "Paver Sealing", "Efflorescence Removal", "Polymeric Sand Re-Sanding", "Interlock Restoration"],
 url: "https://mccoylandscapegroup.com/services/paver-cleaning-and-sealing",
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
 { "@type": "ListItem", position: 2, name: "Services", item: "https://mccoylandscapegroup.com/services" },
 { "@type": "ListItem", position: 3, name: "Paver Cleaning and Sealing", item: "https://mccoylandscapegroup.com/services/paver-cleaning-and-sealing" },
 ],
 },
 ],
 }}
 />

 </>
 );
}
