import { Preloader } from './components/Preloader';
import { HeroSection } from './components/HeroSection';
import { TimesSquareTVC } from './components/TimesSquareTVC';
import { TVCShowcase } from './components/TVCShowcase';
import { TVCReel } from './components/TVCReel';
import { TVCAchievements } from './components/TVCAchievements';
import { BrandLogos } from './components/BrandLogos';
import { ParallaxGallery } from './components/ParallaxGallery';
import { WorkGrid } from './components/WorkGrid';
import { TestimonialsSection } from './components/TestimonialsSection';
import { CTASection } from './components/CTASection';
import { Navigation } from './components/Navigation';
import { AmbientBackground } from './components/AmbientBackground';
import { ScrollToTop } from './components/ScrollToTop';

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#060608]">
      <Preloader />
      <AmbientBackground />
      <Navigation />
      <HeroSection />
      <TimesSquareTVC />
      <TVCShowcase />
      <TVCReel />
      <TVCAchievements />
      <BrandLogos />
      <ParallaxGallery />
      <WorkGrid />
      <TestimonialsSection />
      <CTASection />
      <ScrollToTop />
    </div>
  );
}
