import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ProblemSolutionSection } from "./components/ProblemSolutionSection";
import { ValueSection } from "./components/ValueSection";
import { WhatYouGainSection } from "./components/WhatYouGainSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <ValueSection />
      <WhatYouGainSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
