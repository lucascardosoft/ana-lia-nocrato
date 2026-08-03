import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Specialties } from "@/components/sections/Specialties";
import { Problems } from "@/components/sections/Problems";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
// import { Education } from "@/components/sections/Education"; // oculto: ainda avaliando se mantém
import { Approach } from "@/components/sections/Approach";
import { SessionFormat } from "@/components/sections/SessionFormat";
import { Modalities } from "@/components/sections/Modalities";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Specialties />
        <Problems />
        <HowItWorks />
        <Benefits />
        <About />
        {/* <Education /> oculto: ainda avaliando se mantém */}
        <Approach />
        <SessionFormat />
        <Modalities />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFAB />
      <ThemeToggle />
    </>
  );
}
