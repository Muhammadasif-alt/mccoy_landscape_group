import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WaveDivider from "@/components/WaveDivider";
import TopoBG from "@/components/TopoBG";
import GalleryFilterGrid from "@/components/GalleryFilterGrid";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Hardscape Portfolio West GTA | McCoy Landscape Group",
 description:
 "McCoy Landscape Group portfolio — paver patios, driveways, retaining walls & outdoor living across Oakville, Burlington, Mississauga. Call (416) 985-9771.",
 alternates: { canonical: "/gallery" },
};

const filterPills = [
 "All",
 "Paver Patios",
 "Driveways",
 "Retaining Walls",
 "Outdoor Living",
 "Lighting",
];

type GridItem = {
 src: string;
 alt: string;
 service: string;
 city: string;
 span: string; // tailwind classes for column/row span
 aspect: string; // aspect class
};

const gridItems: GridItem[] = [
 {
 src: "/images/09-showcase-signature-build.jpg",
 alt: "Full outdoor living build at a Oakville home by McCoy Landscape Group",
 service: "Outdoor Living",
 city: "Oakville, ON",
 span: "md:col-span-2 md:row-span-2",
 aspect: "aspect-square",
 },
 {
 src: "/images/03-card-paver-patios.jpg",
 alt: "Paver patio with seating wall at a Burlington home by McCoy Landscape Group",
 service: "Paver Patio",
 city: "Burlington, ON",
 span: "",
 aspect: "aspect-[4/5]",
 },
 {
 src: "/images/02-paver-driveway-front-entrance-oakville.jpg",
 alt: "Paver driveway and front entrance at an Oakville home by McCoy Landscape Group",
 service: "Paver Driveway",
 city: "Oakville, ON",
 span: "",
 aspect: "aspect-[4/3]",
 },
 {
 src: "/images/07-showcase-retaining-hillside.jpg",
 alt: "Terraced retaining wall on a Burlington hillside lot by McCoy Landscape Group",
 service: "Retaining Wall",
 city: "Burlington, ON",
 span: "md:col-span-2",
 aspect: "aspect-[16/9]",
 },
 {
 src: "/images/05-card-outdoor-living.jpg",
 alt: "Outdoor living space with fire feature in Mississauga by McCoy Landscape Group",
 service: "Outdoor Living",
 city: "Mississauga, ON",
 span: "",
 aspect: "aspect-square",
 },
 {
 src: "/images/06-card-landscape-lighting.jpg",
 alt: "Landscape lighting night view of a Mississauga backyard by McCoy Landscape Group",
 service: "Landscape Lighting",
 city: "Mississauga, ON",
 span: "",
 aspect: "aspect-[4/5]",
 },
 {
 src: "/images/04-card-retaining-walls.jpg",
 alt: "Retaining wall with integrated steps at a Milton home by McCoy Landscape Group",
 service: "Retaining Wall",
 city: "Milton, ON",
 span: "",
 aspect: "aspect-[4/3]",
 },
 {
 src: "/images/08-showcase-lighting-dramatic.jpg",
 alt: "Dramatic landscape lighting at dusk on a Milton hardscape build by McCoy Landscape Group",
 service: "Landscape Lighting",
 city: "Milton, ON",
 span: "md:col-span-2",
 aspect: "aspect-[16/10]",
 },
 {
 src: "/images/12-process-installation.jpg",
 alt: "Paver patio installation in progress on a Milton hardscape project by McCoy Landscape Group",
 service: "Paver Patio",
 city: "Milton, ON",
 span: "",
 aspect: "aspect-[4/5]",
 },
 {
 src: "/images/15-cta-dusk-invitation.jpg",
 alt: "Paver patio with fire feature at dusk in Oakville by McCoy Landscape Group",
 service: "Outdoor Living",
 city: "Oakville, ON",
 span: "",
 aspect: "aspect-[4/3]",
 },
 {
 src: "/images/13-process-handoff.jpg",
 alt: "Finished hardscape project handoff on a Mississauga home by McCoy Landscape Group",
 service: "Full Backyard",
 city: "Mississauga, ON",
 span: "",
 aspect: "aspect-[4/5]",
 },
 {
 src: "/images/10-process-consultation.jpg",
 alt: "On-site consultation for a paver patio project by McCoy Landscape Group",
 service: "Consultation",
 city: "Oakville, ON",
 span: "",
 aspect: "aspect-square",
 },
];

export default function GalleryPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="PORTFOLIO"
 title="McCoy Portfolio"
 subtitle="Hardscape Projects Across Oakville, Burlington, Mississauga, and Milton"
 opening={
 <>
 McCoy&apos;s hardscape and outdoor living portfolio across Oakville,
 Burlington, Mississauga, and Milton — 200+ real projects
 showing the kind of work we deliver. Call{" "}
 <strong>(416) 985-9771</strong> to talk about building something
 similar on your lot, backed by our 3-year warranty.
 </>
 }
 imageSrc="/images/09-showcase-signature-build.jpg"
 imageAlt="Signature McCoy Landscape Group hardscape build in Oakville"
 />

 <GalleryFilterGrid items={gridItems} />

 {/* Recent project highlight — wavy white top, STRAIGHT bottom */}
 <section className="relative">
 <div className="relative h-[360px] md:h-[500px] overflow-hidden">
 <Image
 src="/images/01-hero-outdoor-living-golden-hour.jpg"
 alt="Outdoor living build showcasing a hardscape build at golden hour in Oakville by McCoy Landscape Group"
 fill
 className="object-cover"
 />
 <div
 aria-hidden
 className="absolute inset-0"
 style={{
 background:
 "linear-gradient(180deg,rgba(15,20,17,0.25) 0%,rgba(15,20,17,0) 35%,rgba(15,20,17,0.6) 100%)",
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
 A RECENT MCCOY BUILD · OAKVILLE
 </span>
 <p className="font-[family-name:var(--font-display)] font-bold text-white text-[20px] md:text-[28px] leading-tight mt-2 max-w-[720px] [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
 Full outdoor living scope — paver patio, seating walls, fire
 feature, integrated low-voltage lighting at golden hour.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* How to read these photos */}
 <section className="relative bg-[var(--color-bg-warm)] py-20 md:py-24 overflow-hidden">
 <TopoBG shape="shape_02" position="top-left" size={520} opacity={0.13} tint="accent" />
 <div className="relative mx-auto max-w-[1080px] px-5 md:px-10 lg:px-20">
 <span className="eyebrow text-[var(--color-accent-mid)]">WHAT TO LOOK FOR</span>
 <h2 className="font-[family-name:var(--font-display)] font-black leading-[1.15] text-[clamp(28px,3.4vw,42px)] text-[var(--color-primary)] mt-3 mb-6">
 What These Project Examples{" "}
 <em className="italic font-light">Can Tell You</em>
 </h2>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)] mb-4">
 Finished work is the easy part to
 evaluate. What separates a patio that still sits level in 2040 from
 one that&apos;s cracking by 2030 is the base underneath it — base
 depth, compaction, edge restraint, drainage. Look for clean edges,
 consistent joints, and thoughtful transitions in the work shown.
 Those are the tells.
 </p>
 <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--color-text)]">
 Every project shown here uses Techo-Bloc, Unilock, or Permacon
 pavers — three of Ontario&apos;s most respected manufacturers.
 Material choice varies by project; pricing varies by size, site
 access, and feature count. What stays constant is the install
 standard. Every build gets the same 3-year warranty coverage.
 </p>
 </div>
 </section>

 <FinalCTA />
 <Footer />
 <JsonLd
 data={{
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "CollectionPage",
 url: "https://mccoylandscapegroup.com/gallery",
 name: "Hardscape Portfolio - McCoy Landscape Group",
 about: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 },
 {
 "@type": "ImageGallery",
 name: "McCoy Landscape Group Project Gallery",
 associatedMedia: gridItems.map((g) => ({
 "@type": "ImageObject",
 contentUrl: `https://mccoylandscapegroup.com${g.src}`,
 caption: g.alt,
 })),
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://mccoylandscapegroup.com/" },
 { "@type": "ListItem", position: 2, name: "Gallery", item: "https://mccoylandscapegroup.com/gallery" },
 ],
 },
 ],
 }}
 />
 </>
 );
}
