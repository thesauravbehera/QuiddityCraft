import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronDown, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { getCalApi } from '@calcom/embed-react';

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroSequence = [
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
  ];

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {"theme":"dark"});
    })();

    // Cycle the background video seamlessly every 10 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSequence.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [heroSequence.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#02000A]">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        {/* Loader Overlay */}
        <AnimatePresence>
          {!isVideoLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#02000A]"
            >
              <Loader2 className="w-12 h-12 text-white/50 animate-spin mb-4" />
              <p
                style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.05em' }}
                className="text-white/40 text-xs lowercase"
              >
                Calibrating Visuals...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {heroSequence.map((src, index) => (
            <motion.video
              key={src}
              initial={{ opacity: 0 }}
              animate={{ opacity: isVideoLoaded && currentIndex === index ? 1 : 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              autoPlay
              loop
              muted
              playsInline
              preload={index === 0 ? "auto" : "metadata"}
              onCanPlay={() => {
                if (index === 0) setIsVideoLoaded(true);
              }}
              src={src}
              className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              style={{ zIndex: currentIndex === index ? 1 : 0 }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Overlay for core text visibility and cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]/90 z-0 mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/40 z-0" />
      
      {/* Ramp Effect to seamlessly blend the video into the black DOM */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-10" />

      {/* Content Container */}
      <div className="relative z-[20] w-full max-w-7xl mx-auto px-6 flex flex-col items-start justify-center pt-56 pb-40 min-h-screen">
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="relative z-10">
            {/* Headline */}
            <h1
              className="text-white leading-[1.1] tracking-tight mb-6 drop-shadow-[0_8px_15px_rgba(0,0,0,0.9)] "
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(36px, 10vw, 84px)',
                textTransform: 'uppercase'
              }}
            >
              Where Imagination Meets Intent
            </h1>

            {/* Subheadline */}
            <p
              className="text-white/90 max-w-2xl mb-12 font-medium drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]"
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(16px, 4vw, 22px)',
                lineHeight: '1.6',
                letterSpacing: '0.02em'
              }}
            >
              Crafting Your Brand's Essence
            </p>

            {/* CTA Button */}
            <Button
              data-cal-link="saurav/30min"
              data-cal-config='{"layout":"month_view"}'
              className="group relative overflow-hidden bg-white text-black rounded-none px-8 py-6 text-sm uppercase tracking-[0.15em] font-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-4 border border-white w-fit"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <div className="absolute inset-0 bg-neutral-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-3">
                Book a Strategy Call <Play className="w-4 h-4 fill-current" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/60 text-xs lowercase tracking-wider" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

