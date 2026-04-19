import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

export function TimesSquareTVC() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldPreload = useInView(containerRef, { margin: "1200px 0px 1200px 0px" });

  return (
    <section ref={containerRef} className="py-24 md:py-40 w-full bg-[#000000] border-t border-white/5 relative z-20">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
        
        {/* Left Typography Side */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          {/* Adihuman style tiny meta-header */}
          <div className="mb-6">
            <span className="text-[10px] tracking-[0.25em] text-blue-500 uppercase font-bold" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Galactic Milestone
            </span>
          </div>

          <h2 
            className="text-white tracking-tight leading-[1.1] mb-8"
            style={{ 
              fontSize: 'clamp(40px, 5vw, 64px)', 
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 400
            }}
          >
            Featured On <br />
            Times Square.
          </h2>

          <p 
            className="text-white/60 text-lg leading-relaxed max-w-xl"
            style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 400 }}
          >
            Broadcasting our core philosophy from the central hub of the world. Demonstrating the unprecedented scale of artificial intelligence through galactic transmission to millions of viewers daily.
          </p>
        </motion.div>

        {/* Right Video Glass Card Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-zinc-950 border border-white/10 shadow-2xl group"
        >
          {/* Adihuman style data strip */}
          <div className="absolute top-0 left-0 w-32 h-[2px] bg-blue-500 z-20" />
          
          {/* Tab Header Decoration */}
          <div className="absolute top-0 left-0 right-0 h-10 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md z-20 flex items-center px-4">
             <div className="flex gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
             </div>
             <span className="ml-4 text-[10px] text-white/40 font-mono tracking-widest uppercase">Location: NY_10036</span>
          </div>

          <video
            src={shouldPreload ? "/videos/Kaboom 14th Sept(Time Square).webm" : undefined}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100 will-change-transform transform-gpu pt-10 p-2 rounded-[24px]"
          />
        </motion.div>

      </div>
    </section>
  );
}
