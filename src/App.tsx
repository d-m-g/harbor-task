import { AddOnsSection } from "./components/AddOnsSection";
import { CtaBanner } from "./components/CtaBanner";
import { FleetWhySection } from "./components/FleetWhySection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { RevealOnScroll } from "./components/layout/RevealOnScroll";
import { NoHiddenBenefitsSection } from "./components/NoHiddenBenefitsSection";

function App() {
  return (
    <>
      <Header />
      <main className="bg-black pt-20">
        <RevealOnScroll>
          <Hero />
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
