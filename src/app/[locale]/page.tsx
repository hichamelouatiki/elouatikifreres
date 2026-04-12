import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { ConsultingSection } from "@/components/consulting-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { MethodSection } from "@/components/method-section";
import { MethodologySection } from "@/components/methodology-section";
import { OurStorySection } from "@/components/our-story-section";
import { PartnerCarousel } from "@/components/partner-carousel";
import { RealisationsSection } from "@/components/realisations-section";
import { Testimonials } from "@/components/testimonials";
import { SiteFooter } from "@/components/site-footer";
import { isValidLocale } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <main className="overflow-x-hidden bg-zinc-950">
      <HeroSection />
      <MethodSection />
      <ConsultingSection />
      <OurStorySection />
      <div id="methodologie" className="scroll-mt-24">
        <MethodologySection />
      </div>
      <RealisationsSection />
      <PartnerCarousel />
      <Testimonials />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
