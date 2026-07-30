import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
 title: "Privacy Policy | McCoy Landscape Group",
 description:
 "How McCoy Landscape Group collects, uses, and protects your personal information. Oakville · Burlington · Mississauga · Milton, ON, Ontario.",
 alternates: { canonical: "/privacy" },
 robots: { index: true, follow: true },
};

export default function PrivacyPage() {
 return (
 <>
 <Nav />

 <PageHero
 eyebrow="LEGAL"
 title="Privacy Policy"
 opening={
 <>
 How McCoy Landscape Group collects, uses, and protects the personal
 information you share with us. Last updated{" "}
 <strong>April 28, 2026</strong>.
 </>
 }
 imageSrc="/images/15-cta-dusk-invitation.jpg"
 imageAlt="McCoy Landscape Group hardscape build"
 />

 <article className="bg-white py-20 md:py-24">
 <div className="mx-auto max-w-[760px] px-5 md:px-10 lg:px-20 prose prose-neutral [&_h2]:font-[family-name:var(--font-display)] [&_h2]:font-bold [&_h2]:text-[var(--color-primary)] [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[24px] [&_h3]:font-[family-name:var(--font-display)] [&_h3]:font-bold [&_h3]:text-[var(--color-primary)] [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-[18px] [&_p]:text-[15px] md:[&_p]:text-[16px] [&_p]:leading-[1.7] [&_p]:text-[var(--color-text)] [&_p]:mb-4 [&_ul]:my-4 [&_ul]:pl-5 [&_ul]:list-disc [&_li]:text-[15px] md:[&_li]:text-[16px] [&_li]:leading-[1.7] [&_li]:text-[var(--color-text)] [&_li]:mb-1 [&_a]:text-[var(--color-accent-mid)] [&_a]:underline-offset-4 [&_a:hover]:underline [&_strong]:text-[var(--color-primary)]">
 <p>
 McCoy Landscape Group (&ldquo;McCoy,&rdquo; &ldquo;we,&rdquo;
 &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the website at{" "}
 <strong>mccoylandscapegroup.com</strong> and provides hardscape
 design-build services across Oakville, Burlington, Mississauga, and Milton Region, Ontario. This Privacy
 Policy explains what personal information we collect, how we use
 it, and the choices you have. By using our website or contacting
 us, you agree to the practices described here.
 </p>

 <h2>1. Information We Collect</h2>
 <p>
 We collect information you give us directly when you fill out a
 consultation request form, send us an email, or call our office.
 That information typically includes:
 </p>
 <ul>
 <li>Your name</li>
 <li>Phone number</li>
 <li>Email address</li>
 <li>Property city or service area</li>
 <li>Service interest, budget range, and timeline</li>
 <li>Any project details you choose to share with us</li>
 </ul>
 <p>
 We also collect limited automatic information when you visit our
 website — such as your IP address, browser type, device type,
 referring page, and pages viewed — through standard web analytics
 (Google Analytics or similar). This helps us understand which
 pages are useful to homeowners researching hardscape projects.
 </p>

 <h2>2. How We Use Your Information</h2>
 <p>We use the information you provide to:</p>
 <ul>
 <li>Respond to your consultation request and follow up on your project</li>
 <li>Schedule on-site visits and prepare written estimates</li>
 <li>Communicate during the design and build process</li>
 <li>Send invoices and warranty documentation</li>
 <li>Improve our website and marketing</li>
 <li>Comply with legal and tax obligations</li>
 </ul>
 <p>
 We do not sell, rent, or trade your personal information to third
 parties. We do not use your information for advertising outside of
 our own follow-up communications.
 </p>

 <h2>3. How We Share Information</h2>
 <p>
 We share your information only with trusted service providers who
 help us operate our business — for example:
 </p>
 <ul>
 <li>Our website hosting and analytics providers</li>
 <li>Our email and CRM platform for follow-ups</li>
 <li>Our accounting platform for invoicing</li>
 <li>Government agencies and our insurance carriers when required by law or contract</li>
 </ul>
 <p>
 These providers are bound to use your information only to perform
 services for McCoy and to keep it confidential.
 </p>

 <h2>4. Cookies and Tracking</h2>
 <p>
 Our website may use cookies and similar technologies to remember
 your preferences and measure traffic. You can disable cookies in
 your browser settings — the website will still work, but some
 convenience features may be limited.
 </p>

 <h2>5. Data Retention</h2>
 <p>
 We retain consultation request and project records for as long as
 your project is active and for a reasonable period afterward to
 honor warranty obligations and meet our legal record-keeping
 requirements. After that, records are securely destroyed.
 </p>

 <h2>6. Your Rights (Canada / Ontario)</h2>
 <p>
 Under Canadian privacy law (PIPEDA) and Ontario provincial law,
 you have the right to:
 </p>
 <ul>
 <li>Ask what personal information we hold about you</li>
 <li>Ask us to correct inaccurate information</li>
 <li>Ask us to delete your information (subject to our legal record-keeping obligations)</li>
 <li>Withdraw consent for marketing follow-ups at any time</li>
 </ul>
 <p>
 To exercise any of these rights, email us at{" "}
 <a href="mailto:info@mccoylandscapegroup.com">
 info@mccoylandscapegroup.com
 </a>{" "}
 and we will respond within 30 days.
 </p>

 <h2>7. Security</h2>
 <p>
 We use reasonable physical, technical, and administrative measures
 to protect your information against loss, theft, and unauthorized
 access. No method of transmission or storage is perfectly secure,
 but we work to keep your information safe.
 </p>

 <h2>8. Children</h2>
 <p>
 Our services and website are intended for property owners and
 adults inquiring about hardscape projects. We do not knowingly
 collect personal information from children under 13.
 </p>

 <h2>9. Updates to This Policy</h2>
 <p>
 We may update this Privacy Policy from time to time. The updated
 version will be posted on this page with a new &ldquo;last
 updated&rdquo; date. Material changes will be communicated by
 email when we have your contact information.
 </p>

 <h2>10. Contact</h2>
 <p>
 Questions about this Privacy Policy or how we handle your
 information? Reach out:
 </p>
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
 <strong>Service area:</strong> Oakville · Burlington · Mississauga · Milton, ON, Ontario, Canada
 </li>
 </ul>
 </div>
 </article>

 <Footer />
 </>
 );
}
