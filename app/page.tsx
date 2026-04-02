import FloatingNav from "@/components/ui/FloatingNav";
import Hero from "@/components/ui/Hero";
import Ticker from "@/components/ui/Ticker";
import BentoGallery from "@/components/ui/BentoGallery";
import MenuSection from "@/components/ui/MenuSection";
import Philosophy from "@/components/ui/Philosophy";
import Testimonials from "@/components/ui/Testimonials";
import CTA from "@/components/ui/CTA";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <Hero />
      <Ticker />
      <BentoGallery />
      <MenuSection />
      <Philosophy />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
}
