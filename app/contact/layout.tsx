import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
 title: "Contact McCoy Landscape Group | Oakville & Burlington",
 description:
 "Contact McCoy Landscape Group for hardscape design-build in Oakville, Burlington, Mississauga & Milton. Free on-site consultation. Call (416) 985-9771.",
 alternates: { canonical: "/contact" },
 openGraph: {
 type: "website",
 url: "https://mccoylandscapegroup.com/contact",
 title: "Contact McCoy Landscape Group | Oakville & Burlington",
 description:
 "Book a free on-site hardscape consultation across West GTA. Call (416) 985-9771 - reply in 24-48 hrs.",
 images: ["/images/09-showcase-signature-build.jpg"],
 },
};

const contactLd = {
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "ContactPage",
 url: "https://mccoylandscapegroup.com/contact",
 name: "Contact McCoy Landscape Group",
 about: { "@id": "https://mccoylandscapegroup.com/#localbusiness" },
 },
 {
 "@type": "BreadcrumbList",
 itemListElement: [
 { "@type": "ListItem", position: 1, name: "Home", item: "https://mccoylandscapegroup.com/" },
 { "@type": "ListItem", position: 2, name: "Contact", item: "https://mccoylandscapegroup.com/contact" },
 ],
 },
 ],
};

export default function ContactLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
 <>
 <JsonLd data={contactLd} />
 {children}
 </>
 );
}
