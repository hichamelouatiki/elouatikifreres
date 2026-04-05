import { ConsultingSection } from "@/components/consulting-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { MethodSection } from "@/components/method-section";
import { MethodologySection } from "@/components/methodology-section";
import { RealisationsSection } from "@/components/realisations-section";
import { SiteFooter } from "@/components/site-footer";
import { OurStorySection } from "@/components/our-story-section";
import { PartnerCarousel } from "@/components/partner-carousel";

/**
 * Page d’accueil fusionnée : flux de l’ancienne version (consulting, histoire,
 * méthodologie, contact) + hero / méthode / Bento / footer de la nouvelle.
 */
export default function Home() {
  return (
    <main className="overflow-x-hidden bg-zinc-950">
      <HeroSection />
      <MethodSection />
      <ConsultingSection />
      <OurStorySection />
      <div id="methodologie">
        <MethodologySection />
      </div>
      <RealisationsSection />
      <PartnerCarousel />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
