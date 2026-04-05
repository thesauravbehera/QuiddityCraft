import { HeroSection } from '../components/HeroSection';
import { StatRibbon } from '../components/StatRibbon';
import { SectionSpacer } from '../components/SectionSpacer';
import { BrandLogos } from '../components/BrandLogos';
import { TimesSquareTVC } from '../components/TimesSquareTVC';
import { ParallaxGallery } from '../components/ParallaxGallery';
import { ReelsCarousel } from '../components/ReelsCarousel';
import { WorkGrid } from '../components/WorkGrid';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <TimesSquareTVC />
      <BrandLogos />
      <ParallaxGallery />
      <ReelsCarousel />
      <WorkGrid />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
