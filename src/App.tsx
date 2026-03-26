import { AddOnsSection } from "./components/AddOnsSection";
import { CtaBanner } from "./components/CtaBanner";
import { FeaturedCarsCarousel } from "./components/FeaturedCarsCarousel";
import { FleetWhySection } from "./components/FleetWhySection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { PromoStrip } from "./components/PromoStrip";
import { RevealOnScroll } from "./components/layout/RevealOnScroll";
import { NoHiddenBenefitsSection } from "./components/NoHiddenBenefitsSection";

function App() {
  return (
    <>
      <Header />
      <main className="bg-white pt-20">
        <PromoStrip />
        <RevealOnScroll>
          <Hero />
        </RevealOnScroll>
        <RevealOnScroll>
          <FeaturedCarsCarousel />
        </RevealOnScroll>
        <RevealOnScroll>
          <FleetWhySection />
        </RevealOnScroll>
        <RevealOnScroll>
          <NoHiddenBenefitsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <HowItWorks />
        </RevealOnScroll>
        <RevealOnScroll>
          <AddOnsSection />
        </RevealOnScroll>
        <RevealOnScroll>
          <CtaBanner />
        </RevealOnScroll>
      </main>
      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
}

export default App;
