import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HeroForm from "@/components/HeroForm";
import TrustStrip from "@/components/TrustStrip";
import About from "@/components/About";
import Spotlight from "@/components/Spotlight";
import Services from "@/components/Services";
import ServiceAreas from "@/components/ServiceAreas";
import Portfolio from "@/components/Portfolio";
import Reviews from "@/components/Reviews";
import InstagramCarousel from "@/components/InstagramCarousel";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
 return (
 <>
 <Nav />
 <Hero />
 {/* Form bridge (DESKTOP ONLY) — straddles the hero/TrustStrip seam.
 Top 130px is TRANSPARENT so the hero video shows behind the form's
 top half. Below 130px is bg-warm so the form's bottom blends into
 the cream that flows into TrustStrip.
 Mobile uses the global QuoteModal (mounted in layout) — Hero CTA
 and every other "Book Free Consultation" button opens it. */}
 <div className="hidden md:block relative md:-mt-[130px] md:mb-[-130px] z-30">
 <div aria-hidden className="absolute top-[130px] inset-x-0 bottom-0 bg-[var(--color-bg-warm)]" />
 <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 lg:px-20">
 <HeroForm />
 </div>
 </div>
 <TrustStrip />
 <About />
 <Spotlight />
 <Services />
 <ServiceAreas />
 <Portfolio />
 <InstagramCarousel />
 <Reviews />
 <Process />
 <FAQ />
 <FinalCTA />
 <Footer />
 </>
 );
}
