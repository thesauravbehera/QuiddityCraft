import { HeroSection } from '../components/HeroSection';
import { StatRibbon } from '../components/StatRibbon';
import { SectionSpacer } from '../components/SectionSpacer';
import { TimesSquareTVC } from '../components/TimesSquareTVC';
import { BrandLogos } from '../components/BrandLogos';
import { TVCReel } from '../components/TVCReel';
import { TVCAchievements } from '../components/TVCAchievements';
import { ParallaxGallery } from '../components/ParallaxGallery';
import { WorkGrid } from '../components/WorkGrid';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StatRibbon />
      <SectionSpacer />
      <TimesSquareTVC />
      <BrandLogos />
      <ParallaxGallery />
      <WorkGrid />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
