import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function TimesSquareTVC() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldPreload = useInView(containerRef, { margin: "1200px 0px 1200px 0px" });

  return (
    <section ref={containerRef} className="py-24 md:py-40 w-full bg-[#000000] border-t border-white/5 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          {/* Soft Liquid Sub-Header */}
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-px bg-white/20" />
             <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
               Global Impact
             </span>
          </div>

          <h2 
            className="text-white tracking-tight leading-[1.0] mb-6 md:mb-8 capitalize drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
            style={{ 
              fontSize: 'clamp(36px, 8vw, 84px)', 
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900
            }}
          >
            Featured On <br />
            Times Square.
          </h2>

          <p 
            className="text-white/80 text-base md:text-xl leading-relaxed max-w-xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: 'Outfit, sans-serif' }}
          >
            Broadcasting our definitive philosophy from the central hub of the world. Demonstrating the unprecedented scale of artificial intelligence through high-impact transmission to millions.
          </p>
        </motion.div>

        {/* Right Video Glass Pill Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[4rem] bg-black/40 backdrop-blur-3xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.05)] group flex items-center justify-center p-4 md:p-8"
        >
          {/* Halftone Overlay Background Map for texturing */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-screen" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }} 
          />

          <video
            src={shouldPreload ? "/videos/Kaboom 14th Sept(Time Square).webm" : undefined}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:opacity-100 group-hover:scale-105 rounded-[3rem] relative z-10 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}
