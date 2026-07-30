"use client";

import FAQBlock from "./FAQBlock";

const faqs = [
 {
 q: "What does a typical paver patio cost in Oakville or Burlington?",
 a: "Every patio is scoped to the lot, layout, and features — there's no flat \"per square foot\" number that tells the real story. A straightforward rear patio is one investment range; a full outdoor living space with walls, fire, and pergola is another. We quote every project in writing after an on-site visit so you see the real number, not a guess.",
 },
 {
 q: "How long does a full backyard hardscape project take?",
 a: "Most full-backyard builds run six to eight weeks of on-site work once we start, depending on scope, access, and weather. Bigger outdoor living scopes with walls and drainage changes can stretch longer. We lock timelines at the estimate stage so you know what to expect before the first truck shows up.",
 },
 {
 q: "When is the best time of year to start a hardscape project in West GTA?",
 a: "Spring and early summer slots book first — we recommend reaching out 6 to 12 weeks before you want work to begin. Late summer and early fall are excellent build windows too; cooler ground temperatures and stable weather make for clean installs. Winter is for planning and design, so your project is ready the day the ground opens up.",
 },
 {
 q: "How do you build paver patios and walls that survive Ontario winters?",
 a: "Proper base, proper drainage, and proper edge restraint — the stuff you never see once the patio's done. We excavate to the right depth for freeze-thaw zones, compact the base in lifts, install geotextile fabric where conditions demand it, and set edge restraint so pavers don't migrate. It's the hidden work that decides whether a patio still sits level 15 years from now.",
 },
 {
 q: "Do you handle drainage before installing pavers or sod?",
 a: "Always. Drainage gets scoped during the on-site consultation — before we quote the visible hardscape. Pooling water, grade issues, and downspout management get solved first because a patio built over bad drainage is a patio you'll replace in five years. \"Fix the water first\" isn't a sales pitch for us; it's how every project gets sequenced.",
 },
 {
 q: "What does the 3-year warranty actually cover?",
 a: "Our 3-year hardscape warranty covers sink and level — if pavers settle or shift outside normal tolerances due to base or installation issues, we fix it. It also covers cracking replacement: we order extra stock on every build so if a paver cracks, we swap it with matching material from the same lot. Warranty details get spelled out in writing when you sign the estimate.",
 },
 {
 q: "Which suppliers do you prefer and why?",
 a: "Our primary suppliers are Techo-Bloc, Unilock, and Permacon — three of the most respected paver manufacturers in Ontario, each with distinct product lines. We'll recommend the right option based on the look you want, the drainage profile of your lot, and your budget. We're working toward Techo-Bloc certification, which recognizes the install standards we already use.",
 },
 {
 q: "Which cities do you serve for hardscape projects?",
 a: "Our core service area is Oakville, Burlington, Mississauga, and Milton, plus Waterdown and Flamborough on a case-by-case basis. We work across all of these markets equally — every project gets the same install standard, the same warranty, and the same crew. If you're nearby but not listed, call and we'll tell you straight whether we're the right fit for your project.",
 },
];

export default function FAQ() {
 return (
 <FAQBlock
 headingMain="Landscaping & Hardscape FAQs"
 headingItalic="for Oakville Homeowners"
 faqs={faqs}
 />
 );
}
