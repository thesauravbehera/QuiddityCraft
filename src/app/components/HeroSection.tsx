import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroSequence = [
    "/LightSpeedimages/Astruanuat2.mp4",
    "/hero_sequence/astruanuat.mp4",
    "/hero_sequence/Astruanuat2.mp4",
    "/hero_sequence/Astruanuat3.mp4"
  ];

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % heroSequence.length);
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#02000A]">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <AnimatePresence mode="wait">
          <motion.video
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            src={heroSequence[currentIndex]}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Ramp Effect to blend into layout */}
      <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-b from-transparent to-[#02000A] pointer-events-none z-10" />

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
                  fontWeight: 500,
                  fontSize: 'clamp(14px, 2vw, 18px)',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}
              >
                Accelerate your brand to
              </h1>
              <h1
                className="text-white mt-4 tracking-tighter"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(60px, 10vw, 120px)',
                  lineHeight: '1',
                  textTransform: 'uppercase'
                }}
              >
                Quiddity Craft
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/60 max-w-2xl mx-auto mb-10 tracking-wide"
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Cosmic-scale Content, AI-Powered Visuals & High-Velocity Campaigns for Brands Worldwide
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
            className="relative overflow-hidden bg-transparent border border-white/20 text-white hover:text-black hover:bg-white rounded-none px-10 py-7 text-sm uppercase tracking-widest font-semibold transition-all duration-500 flex items-center gap-4 mx-auto group"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out -z-10" />
            <Play className="w-4 h-4 fill-current" />
            Initiate Sequence
          </Button>
        </motion.div>
      </div>



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
