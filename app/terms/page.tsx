import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
 title: "Terms & Conditions | McCoy Landscape Group",
 description:
 "Terms and conditions for using mccoylandscapegroup.com and engaging McCoy Landscape Group for hardscape design-build services in West GTA, Ontario.",
 alternates: { canonical: "/terms" },
 robots: { index: true, follow: true },
};

export default function TermsPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="LEGAL"
 title="Terms & Conditions"
 opening={
 <>
 The terms that apply when you use mccoylandscapegroup.com or engage
 McCoy Landscape Group for a hardscape project. Last updated{" "}
 <strong>April 28, 2026</strong>.
 </>
 }
 imageSrc="/images/15-cta-dusk-invitation.jpg"
 imageAlt="McCoy Landscape Group hardscape build"
 />

 <article className="bg-white py-20 md:py-24">
 <div className="mx-auto max-w-[760px] px-5 md:px-10 lg:px-20 prose prose-neutral [&_h2]:font-[family-name:var(--font-display)] [&_h2]:font-bold [&_h2]:text-[var(--color-primary)] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[24px] [&_h3]:font-[family-name:var(--font-display)] [&_h3]:font-bold [&_h3]:text-[var(--color-primary)] [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[18px] [&_p]:text-[15px] md:[&_p]:text-[16px] [&_p]:leading-[1.7] [&_p]:text-[var(--color-text)] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:text-[15px] md:[&_li]:text-[16px] [&_li]:leading-[1.7] [&_li]:text-[var(--color-text)] [&_li]:mb-1 [&_a]:text-[var(--color-accent-mid)] [&_a]:underline-offset-4 [&_a:hover]:underline [&_strong]:text-[var(--color-primary)]">
 <p>
 These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your use
 of the McCoy Landscape Group website at{" "}
 <strong>mccoylandscapegroup.com</strong> and your engagement of
 McCoy Landscape Group (&ldquo;McCoy,&rdquo; &ldquo;we,&rdquo;
 &ldquo;us,&rdquo; or &ldquo;our&rdquo;) for hardscape and
 outdoor-living services. By using this website or engaging us for
 a project, you agree to these Terms.
 </p>

 <h2>1. Website Use</h2>
 <p>
 The content on this website — copy, photos, project descriptions,
 and design — is for informational purposes only and is the
 property of McCoy Landscape Group. You may view and share this
 content for personal, non-commercial use. You may not copy,
 reproduce, or republish substantial portions of the website
 without our written permission.
 </p>

 <h2>2. Consultation Requests</h2>
 <p>
 Submitting a consultation request through the form on this website
 is a request for us to contact you. It does not create a contract,
 binding obligation, or guarantee of service. We will respond
 within 24–48 hours, Monday through Saturday, to confirm next
 steps and a timeline for an on-site visit.
 </p>

 <h2>3. Estimates and Quotes</h2>
 <p>
 Written estimates we provide after an on-site visit are valid for{" "}
 <strong>30 days from the date issued</strong> unless we specify
 otherwise in writing. Estimates are based on the scope, materials,
 and conditions assessed during the on-site visit. Material price
 changes, scope changes, or undisclosed site conditions may require
 an updated estimate.
 </p>
 <p>
 A signed estimate plus the agreed deposit is what schedules a
 project on our calendar. Verbal agreements are not binding.
 </p>

 <h2>4. Project Agreements</h2>
 <p>
 Each project is governed by a written agreement between you and
 McCoy that covers scope, materials, schedule, payment terms,
 warranty, and any specific conditions for your property. The
 written agreement is the controlling document for your project.
 Nothing on this website overrides what is in your signed agreement.
 </p>

 <h2>5. Warranty</h2>
 <p>
 Every hardscape installation McCoy completes is backed by our{" "}
 <strong>3-year workmanship warranty</strong>. The warranty covers
 sinking, settling beyond normal tolerance, and cracking
 replacement on the work we install, subject to the terms set out
 in your project agreement.
 </p>
 <p>
 The warranty does not cover damage from acts of God (severe
 storms, flooding, earthquakes), tree-root intrusion from trees
 planted after our install, vehicle damage, modifications made by
 others, or normal wear-and-tear (joint sand top-up, sealer
 refresh). Manufacturer warranties on materials (Techo-Bloc,
 Unilock, Permacon, lighting fixtures) pass through to you and are
 governed by the manufacturer&apos;s terms.
 </p>

 <h2>6. Payment Terms</h2>
 <p>
 Payment terms are set in your written project agreement and
 typically include a deposit, one or more progress payments tied
 to project milestones, and a final payment on substantial
 completion. We accept e-transfer, cheque, and direct deposit.
 Late payments may accrue interest as set out in your agreement.
 </p>

 <h2>7. Limitation of Liability</h2>
 <p>
 McCoy is not liable for indirect, incidental, special, or
 consequential damages arising from use of this website or our
 services. Our total liability for any claim arising from or
 related to a project is limited to the amount you paid us for
 that project, except where prohibited by law.
 </p>

 <h2>8. Photography and Marketing</h2>
 <p>
 We may share examples of completed projects in our portfolio,
 on our website, on social media, and in marketing materials,
 unless you tell us otherwise in writing before project start. We
 do not publish addresses or homeowner names without explicit
 written permission.
 </p>

 <h2>9. Privacy</h2>
 <p>
 Personal information you share with us through this website or
 during a project is handled according to our{" "}
 <a href="/privacy">Privacy Policy</a>.
 </p>

 <h2>10. Governing Law</h2>
 <p>
 These Terms and any project agreement with McCoy are governed by
 the laws of the Province of Ontario and the federal laws of
 Canada. Any disputes will be resolved in the courts of Ontario.
 </p>

 <h2>11. Changes to These Terms</h2>
 <p>
 We may update these Terms from time to time. The current version
 will always be posted on this page with a &ldquo;last
 updated&rdquo; date. Continued use of the website after updates
 means you accept the revised Terms.
 </p>

 <h2>12. Contact</h2>
 <p>Questions about these Terms? Reach out:</p>
 <ul>
 <li>
 <strong>Email:</strong>{" "}
 <a href="mailto:info@mccoylandscapegroup.com">
 info@mccoylandscapegroup.com
 </a>
 </li>
 <li>
 <strong>Phone:</strong>{" "}
 <a href="tel:+14169859771">(416) 985-9771</a>
 </li>
 <li>
 <strong>Mail:</strong> McCoy Landscape Group, Oakville · Burlington · Mississauga · Milton, ON,
 Ontario, Canada
 </li>
 </ul>
 </div>
 </article>

 <Footer />
 </>
 );
}
