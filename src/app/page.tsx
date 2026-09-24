import { SiteHeader } from "@/components/site-header";
import {
  ComunidadSection,
  FinalCtaSection,
  HeroSection,
  IntroSection,
  MentalidadSection,
  NosotrosSection,
  RecursosSection,
  ServiciosSection,
  SiteFooter,
  TestimonialsSection,
} from "@/components/landing";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#111]">
      <SiteHeader />
      <HeroSection />
      <IntroSection />
      <MentalidadSection />
      <ServiciosSection />
      <RecursosSection />
      <NosotrosSection />
      <ComunidadSection />
      <TestimonialsSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
