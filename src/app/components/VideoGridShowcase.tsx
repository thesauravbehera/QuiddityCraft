import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const MVP_VIDEOS = [
  '/videos/AI.webm',
  '/videos/Energy drinks.webm',
  '/videos/Fenty Beauty .webm',
  '/videos/Kaboom Reel.webm'
];

export function VideoGridShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Subtle parallax effect without pinning
    gsap.to(leftColRef.current, {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.to(rightColRef.current, {
      y: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full py-24 bg-transparent overflow-hidden">
      
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-16 overflow-hidden">
        
        {/* Title Layer */}
        <div className="relative z-30 w-full md:w-1/3 flex flex-col justify-center mt-10 md:mt-0 pb-16 md:pb-0">
           <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
           >
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-px bg-white/20" />
                 <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-bold font-['Outfit']">
                    Explorations
                 </p>
              </div>
              <h2 className="text-white text-5xl md:text-7xl font-black capitalize tracking-tight leading-[0.9] mb-6 shadow-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
                 Visual<br />Playground
              </h2>
              <p className="text-white/60 font-['Outfit'] text-lg max-w-sm mb-10 font-medium">
                 An expanding archive of our generative experiments and polished commercial deployments.
              </p>
           </motion.div>
        </div>

        {/* Parallax Grid Columns Layer */}
        <div className="relative z-20 w-full md:w-2/3 flex items-center justify-end gap-4 md:gap-8">
           {/* Left Column */}
           <div ref={leftColRef} className="flex flex-col gap-4 md:gap-8 w-1/2 pt-12">
              {MVP_VIDEOS.slice(0, 2).map((src, i) => (
                 <video 
                   key={i} 
                   src={src} 
                   autoPlay muted loop playsInline 
                   className="w-full aspect-[4/5] object-cover rounded-[1rem] md:rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-[1.02]" 
                 />
              ))}
           </div>
           
           {/* Right Column */}
           <div ref={rightColRef} className="flex flex-col gap-4 md:gap-8 w-1/2 -mt-12">
              {MVP_VIDEOS.slice(2, 4).map((src, i) => (
                 <video 
                   key={i} 
                   src={src} 
                   autoPlay muted loop playsInline 
                   className="w-full aspect-[4/5] object-cover rounded-[1rem] md:rounded-[2rem] border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] opacity-90 hover:opacity-100 transition-all duration-500 hover:scale-[1.02]" 
                 />
              ))}
           </div>
        </div>
        
      </div>
    </section>
  );
}
