import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronDown, BatteryFull } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const tvcVideos = [
    '/videos/Sharan.webm',
    '/videos/astruanuat.webm',
    '/videos/Astruanuat2.webm',
    '/videos/Astruanuat3.webm',
    '/videos/Firefighter.webm',
    '/videos/Firefighter2.webm',
    '/videos/granny 2.webm',
    '/videos/Granny.webm',
    '/videos/Mountain 1.webm',
    '/videos/Mountain2.webm',
    '/videos/Party 2.webm',
    '/videos/Party 3.webm',
    '/videos/Party wide angle .webm',
    '/videos/Party1.webm',
    '/videos/Clinique Video 04_04 English.webm',
    '/videos/Motion graphics.webm',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % tvcVideos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0B0914]">
      {/* Video Background with fade transition */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={tvcVideos[currentVideoIndex]} type="video/webm" />
          </motion.video>
        </AnimatePresence>
      </div>

      {/* Overlay for pristine contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      
      {/* Ramp Effect to blend into layout */}
      <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-10" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 xl:px-20 -translate-y-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Studio Tagline */}
          <p className="text-[#A855F7] font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
            The Galactic Studio
          </p>
          
          {/* Massive Owled-style Headline */}
          <h1 className="text-white font-black uppercase leading-[0.85] tracking-tight text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] mb-8" style={{ fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase', }}>
            Beyond The <span className="text-[#A855F7]">Atmosphere</span>
          </h1>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 max-w-4xl">
            {/* Paragraph Text with Yellow Highlight */}
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed max-w-2xl" style={{ fontFamily: 'Barlow, sans-serif' }}>
              We transform ambitious ideas into high-fidelity entertainment. Utilizing a world-class production pipeline and <span className="bg-[#22D3EE] text-black font-semibold px-2 py-0.5 rounded-sm">AI-native visual infrastructure</span>, we engineer content that genuinely moves culture.
            </p>

            {/* Red Accent CTA */}
            <Button
              onClick={() => {
                const tvcReelSection = document.querySelector('#tvc-reel');
                tvcReelSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#A855F7] text-white hover:bg-[#7E22CE] rounded-none px-10 py-7 text-sm font-bold tracking-widest uppercase transition-all shrink-0"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Start Project
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Cinematic Viewfinder / REC Border effect at the bottom */}
      <div className="absolute bottom-[8vh] left-0 right-0 z-20 flex justify-between items-end px-12 pb-6 border-t border-white/20 select-none pointer-events-none">
         <div className="flex items-center gap-3 mt-6">
            <motion.div 
               animate={{ opacity: [1, 0, 1] }} 
               transition={{ duration: 2, repeat: Infinity }}
               className="w-4 h-4 rounded-full bg-[#A855F7] shadow-[0_0_15px_rgba(237,28,36,0.6)]" 
            />
            <span className="text-white/80 font-mono text-sm tracking-widest font-light">REC</span>
         </div>
         <BatteryFull className="text-white/80 w-8 h-8 opacity-80" />
      </div>

      {/* Custom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-white/60 text-xs uppercase tracking-[0.2em]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
