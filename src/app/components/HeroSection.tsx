import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const tvcVideos = [
    '/videos/Sharan.mp4',
    '/videos/astruanuat.mp4',
    '/videos/Astruanuat2.mp4',
    '/videos/Astruanuat3.mp4',
    '/videos/Firefighter.mp4',
    '/videos/Firefighter2.mp4',
    '/videos/granny 2.mp4',
    '/videos/Granny.mp4',
    '/videos/Mountain 1.mp4',
    '/videos/Mountain2.mp4',
    '/videos/Party 2.mp4',
    '/videos/Party 3.mp4',
    '/videos/Party wide angle .mp4',
    '/videos/Party1.mp4',
    '/videos/Clinique Video 04_04 English.mp4',
    '/videos/Motion graphics.mp4',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % tvcVideos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#060608]">
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
            <source src={tvcVideos[currentVideoIndex]} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Ramp Effect to blend into layout */}
      <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-b from-transparent to-[#060608] pointer-events-none z-10" />

      {/* Content Container with Corner Accents */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pb-[250px]">

        {/* Corner Accents Container */}
        <div className="relative inline-block">
          {/* Top-left corner */}
          <div className="absolute -top-4 -left-4 w-[7px] h-[7px] bg-white" />
          {/* Top-right corner */}
          <div className="absolute -top-4 -right-4 w-[7px] h-[7px] bg-white" />
          {/* Bottom-left corner */}
          <div className="absolute -bottom-4 -left-4 w-[7px] h-[7px] bg-white" />
          {/* Bottom-right corner */}
          <div className="absolute -bottom-4 -right-4 w-[7px] h-[7px] bg-white" />

          <div className="p-8">
            {/* Headline */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <h1
                className="text-white mb-2 relative"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  lineHeight: '1.2',
                  letterSpacing: '-2px',
                  textShadow: '0 0 30px rgba(255,255,255,0.4)'
                }}
              >
                Agency that makes your
              </h1>
              <h1
                className="text-white relative"
                style={{
                  fontFamily: 'Instrument Serif, serif',
                  fontStyle: 'italic',
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  lineHeight: '1.2',
                  textShadow: '0 0 40px rgba(255,255,255,0.5)'
                }}
              >
                videos & reels viral
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/75 max-w-2xl mx-auto mb-8"
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              Broadcast TVCs, AI-Powered Commercials & Premium Content for Brands Worldwide
            </motion.p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            onClick={() => {
              const tvcReelSection = document.querySelector('#tvc-reel');
              tvcReelSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-[#f8f8f8] text-[#171717] hover:bg-white rounded-[2px] px-8 py-6 text-base font-medium transition-colors flex items-center gap-3 mx-auto"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            <Play className="w-5 h-5 fill-current" />
            Watch TVC Reel
          </Button>
        </motion.div>
      </div>

      {/* Video Indicators */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2"
      >
        {tvcVideos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentVideoIndex(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentVideoIndex ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Switch to video ${index + 1}`}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator */}
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
          <span className="text-white/60 text-xs uppercase tracking-wider" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
