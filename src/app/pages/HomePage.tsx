import { HeroSection } from '../components/HeroSection';
import { SectionSpacer } from '../components/SectionSpacer';
import { BrandLogos } from '../components/BrandLogos';
import { TimesSquareTVC } from '../components/TimesSquareTVC';

import { WorkGrid } from '../components/WorkGrid';
import { VideoGridShowcase } from '../components/VideoGridShowcase';
import { ServicesSection } from '../components/ServicesSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <SectionSpacer />
      <TimesSquareTVC />
      <BrandLogos />
      <WorkGrid />

      <VideoGridShowcase />
      <ServicesSection />
      <CTASection />
    </>
  );
}
