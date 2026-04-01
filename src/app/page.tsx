import { ConsultingSection } from "@/components/consulting-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { MethodSection } from "@/components/method-section";
import { MethodologySection } from "@/components/methodology-section";
import { ProjectsSection } from "@/components/projects-section";
import { SiteFooter } from "@/components/site-footer";
import { StorySection } from "@/components/story-section";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-zinc-950">
      <HeroSection />
      <MethodSection />
      <ConsultingSection />
      <StorySection />
      <div id="methodologie">
        <MethodologySection />
      </div>
      <ProjectsSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
