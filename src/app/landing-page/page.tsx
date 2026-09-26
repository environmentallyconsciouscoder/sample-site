import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AudienceSection } from "./components/AudienceSection";
import { SoftwareSection } from "./components/SoftwareSection";
import { ServicesSection } from "./components/ServicesSection";
import { HouseSection } from "./components/HouseSection";
import { ProblemSection } from "./components/ProblemSection";
import { SocialProofBar } from "./components/SocialProofBar";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen font-sans antialiased">
      <Navbar />
      <HeroSection />
      <AudienceSection />
      <SoftwareSection />
      <ServicesSection />
      <HouseSection />
      <ProblemSection />
      <SocialProofBar />
      <CtaSection />
      <Footer />
    </div>
  );
}
