import { AddOnsSection } from "./components/AddOnsSection";
import { CtaBanner } from "./components/CtaBanner";
import { FleetWhySection } from "./components/FleetWhySection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { NoHiddenBenefitsSection } from "./components/NoHiddenBenefitsSection";

function App() {
  return (
    <>
      <Header />
      <main className="bg-black pt-20">
        <Hero />
        <FleetWhySection />
        <NoHiddenBenefitsSection />
        <HowItWorks />
        <AddOnsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
