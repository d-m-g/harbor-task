import { AddOnsSection } from "./components/AddOnsSection";
import { Benefits } from "./components/Benefits";
import { BrandGrid } from "./components/BrandGrid";
import { ComparisonSection } from "./components/ComparisonSection";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { IncludedServices } from "./components/IncludedServices";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandGrid />
        <IncludedServices />
        <HowItWorks />
        <ComparisonSection />
        <Benefits />
        <AddOnsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;
