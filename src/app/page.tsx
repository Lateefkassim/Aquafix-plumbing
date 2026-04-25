import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import FinalCTASection from "@/components/FinalCTASection";
import StickyCallBar from "@/components/StickyCallBar";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <QuoteFormSection />
      <FinalCTASection />
      <StickyCallBar />
    </main>
  );
}
