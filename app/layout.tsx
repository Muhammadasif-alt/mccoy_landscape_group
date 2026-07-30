import type { Metadata } from "next";
import Script from "next/script";
import { Titillium_Web, Raleway, Caveat } from "next/font/google";
import "./globals.css";
import QuoteModal from "@/components/QuoteModal";

const titillium = Titillium_Web({
 variable: "--font-titillium",
 weight: ["600", "700", "900"],
 subsets: ["latin"],
 display: "swap",
});

const raleway = Raleway({
 variable: "--font-raleway",
 weight: ["400", "500", "600", "700"],
 subsets: ["latin"],
 display: "swap",
});

const caveat = Caveat({
 variable: "--font-caveat",
 weight: ["600"],
 subsets: ["latin"],
 display: "swap",
});

const SITE_URL = "https://mccoylandscapegroup.com";

export const metadata: Metadata = {
 metadataBase: new URL(SITE_URL),
 title: {
 default: "Landscaping Oakville, Burlington | McCoy Landscape Group",
 template: "%s",
 },
 description:
 "Hardscape design-build team serving Oakville, Burlington, Mississauga & Milton. 25 years, 200+ projects, 3-year warranty. Call (416) 985-9771.",
 applicationName: "McCoy Landscape Group",
 authors: [{ name: "McCoy Landscape Group" }],
 generator: "Next.js",
 keywords: [
 "hardscape contractor Oakville",
 "paver patio Oakville",
 "interlocking patio Burlington",
 "paver driveway Mississauga",
 "retaining walls West GTA",
 "outdoor living Oakville",
 "landscape lighting West GTA",
 ],
 alternates: {
 canonical: "/",
 },
 openGraph: {
 type: "website",
 locale: "en_CA",
 url: SITE_URL,
 siteName: "McCoy Landscape Group",
 title: "Landscaping Oakville, Burlington | McCoy Landscape Group",
 description:
 "Premium hardscape design-build for Oakville homeowners. 200+ projects, 25 years, 3-year warranty.",
 images: [
 {
 url: "/images/09-showcase-signature-build.jpg",
 width: 1200,
 height: 630,
 alt: "McCoy Landscape Group signature hardscape build in Oakville",
 },
 ],
 },
 twitter: {
 card: "summary_large_image",
 title: "Landscaping Oakville, Burlington | McCoy Landscape Group",
 description:
 "Premium hardscape design-build for Oakville homeowners. 200+ projects, 25 years, 3-year warranty.",
 images: ["/images/09-showcase-signature-build.jpg"],
 },
 robots: {
 index: true,
 follow: true,
 googleBot: {
 index: true,
 follow: true,
 "max-image-preview": "large",
 "max-snippet": -1,
 },
 },
 verification: {
 google: "5N5C1vib5WoO4CmNzmsX7qZoCBayeJRrogKUh4547K0",
 },
};

// Sitewide JSON-LD: Organization + LocalBusiness graph. Service-page-specific
// Service / FAQPage / BreadcrumbList schema lives in those page files.
const orgGraph = {
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "Organization",
 "@id": `${SITE_URL}/#organization`,
 name: "McCoy Landscape Group",
 url: SITE_URL,
 logo: {
 "@type": "ImageObject",
 url: `${SITE_URL}/brand/logo-dark.svg`,
 width: 600,
 height: 160,
 },
 sameAs: [
 "https://www.instagram.com/mccoylandscapegroup",
 ],
 foundingDate: "2001",
 founder: [
 { "@type": "Person", name: "Alex Medeiros" },
 { "@type": "Person", name: "Pieter Meeussen" },
 ],
 },
 {
 "@type": "LocalBusiness",
 "@id": `${SITE_URL}/#localbusiness`,
 name: "McCoy Landscape Group",
 image: `${SITE_URL}/images/09-showcase-signature-build.jpg`,
 url: SITE_URL,
 telephone: "+1-416-985-9771",
 email: "info@mccoylandscapegroup.com",
 priceRange: "$$$",
 address: {
 "@type": "PostalAddress",
 addressRegion: "ON",
 addressCountry: "CA",
 addressLocality: "Oakville · Burlington · Mississauga · Milton, ON",
 },
 geo: {
 "@type": "GeoCoordinates",
 latitude: 43.4675,
 longitude: -79.6877,
 },
 hasMap: "https://www.google.com/maps/place/Oakville,+ON",
 areaServed: [
 { "@type": "City", name: "Oakville" },
 { "@type": "City", name: "Burlington" },
 { "@type": "City", name: "Mississauga" },
 { "@type": "City", name: "Milton" },
 { "@type": "City", name: "Waterdown" },
 { "@type": "City", name: "Flamborough" },
 ],
 openingHoursSpecification: [
 {
 "@type": "OpeningHoursSpecification",
 dayOfWeek: [
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday",
 ],
 opens: "08:00",
 closes: "17:00",
 },
 ],
 slogan: "Premium Hardscapes Built to Last",
 makesOffer: [
 { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paver Patio Installation" } },
 { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paver Driveway Installation" } },
 { "@type": "Offer", itemOffered: { "@type": "Service", name: "Retaining Wall Installation" } },
 { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outdoor Living Design-Build" } },
 { "@type": "Offer", itemOffered: { "@type": "Service", name: "Landscape Lighting" } },
 ],
 },
 {
 "@type": "WebSite",
 "@id": `${SITE_URL}/#website`,
 url: SITE_URL,
 name: "McCoy Landscape Group",
 publisher: { "@id": `${SITE_URL}/#organization` },
 inLanguage: "en-CA",
 },
 ],
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html
 lang="en"
 className={`${titillium.variable} ${raleway.variable} ${caveat.variable} h-full antialiased`}
 >
 <head>
 {/* Google Tag Manager */}
 <Script id="gtm" strategy="afterInteractive">
 {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','GTM-PGG3RK6Z');`}
 </Script>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(orgGraph) }}
 />
 <link rel="alternate" type="application/rss+xml" title="McCoy Landscape Group Blog" href="/blog" />
 {/* Atarim collaboration script — feedback/annotation tool for staging review */}
 <script
 src="https://ij-script.pages.dev/atarim.js"
 data-siteid="aWRQYlBpL1FCM2cvSzNMVUwyNmxzQT09"
 defer
 type="module"
 />
 </head>
 <body className="min-h-full flex flex-col">
 {/* Google Tag Manager (noscript) */}
 <noscript>
 <iframe
 src="https://www.googletagmanager.com/ns.html?id=GTM-PGG3RK6Z"
 height="0"
 width="0"
 style={{ display: "none", visibility: "hidden" }}
 />
 </noscript>
 {/* Google Analytics 4 */}
 <Script
 src="https://www.googletagmanager.com/gtag/js?id=G-XQ9QTSJDSF"
 strategy="afterInteractive"
 />
 <Script id="ga4" strategy="afterInteractive">
 {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){dataLayer.push(arguments);}
 gtag('js', new Date());
 gtag('config', 'G-XQ9QTSJDSF');
 `}
 </Script>
 {children}
 <QuoteModal />
 </body>
 </html>
 );
}
