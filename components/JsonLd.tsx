/**
 * Inline JSON-LD structured data. Use inside any page/component to add
 * Schema.org markup. Renders an inert <script type="application/ld+json">.
 *
 * <JsonLd
 * data={{
 * "@context": "https://schema.org",
 * "@type": "FAQPage",
 * mainEntity: faqs.map(f => ({
 * "@type": "Question",
 * name: f.q,
 * acceptedAnswer: { "@type": "Answer", text: f.a },
 * })),
 * }}
 * />
 */
export default function JsonLd({ data }: { data: object }) {
 return (
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
 />
 );
}
