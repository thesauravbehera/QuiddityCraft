import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from 'motion/react';

gsap.registerPlugin(ScrollTrigger);

const PARALLAX_VIDEOS = [
  '/videos/Kaboom Reel.webm',
  '/videos/Sharan.webm',
  '/videos/astruanuat.webm',
  '/videos/Firefighter.webm',
  '/videos/Mountain 1.webm',
  '/videos/Motion graphics.webm'
];

export function VideoGridShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pin the entire container for the duration of the scroll (min-h-[300vh])
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: false, // The section itself is 300vh, we pin the inner wrapper using sticky instead.
    });

    // Parallax logic: Column 1 moves UP exceptionally fast, Column 2 moves UP slightly slower.
    gsap.to(leftColRef.current, {
      y: "-50%", // moves up 
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrubbing
      }
    });

    gsap.to(rightColRef.current, {
      y: "-30%", // moves up but less, creating the parallax disparity
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full min-h-[300vh] bg-transparent overflow-hidden">
      
      {/* Sticky Checkpoint Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 overflow-hidden pointer-events-none">
        
        {/* Pinned Title Layer */}
        <div className="relative z-30 w-full md:w-1/3 flex flex-col justify-center pointer-events-auto mt-20 md:mt-0">
           <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
           >
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-px bg-white/20" />
                 <p className="text-white/50 text-xs lowercase tracking-tight font-bold font-['Outfit']">
                    Explorations
                 </p>
              </div>
              <h2 className="text-white text-5xl md:text-7xl font-black lowercase tracking-tight leading-[1.0] mb-6 shadow-xl">
                 visual<br />playground
              </h2>
              <p className="text-white/60 font-['Outfit'] lowercase text-base max-w-sm mb-10 bg-[#0a0a0a]/80 backdrop-blur-md p-4 rounded-xl border border-white/5">
                 An expanding archive of our generative experiments and polished commercial deployments.
              </p>
           </motion.div>
        </div>

        {/* Parallax Grid Columns Layer */}
        <div className="relative z-20 w-full md:w-2/3 h-full flex items-start justify-end gap-4 md:gap-8 pointer-events-auto">
           {/* Left Moving Column */}
           <div ref={leftColRef} className="flex flex-col gap-4 md:gap-8 pt-[10vh] w-1/2 will-change-transform">
              {PARALLAX_VIDEOS.slice(0, 5).map((src, i) => (
                 <video 
                   key={i} 
                   src={src} 
                   autoPlay muted loop playsInline 
                   className="w-full aspect-[4/5] object-cover rounded-[1rem] md:rounded-[2rem] border border-white/10 shadow-2xl opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-[1.02]" 
                 />
              ))}
           </div>
           
           {/* Right Moving Column */}
           <div ref={rightColRef} className="flex flex-col gap-4 md:gap-8 pt-[20vh] w-1/2 will-change-transform">
              {PARALLAX_VIDEOS.slice(5, 10).map((src, i) => (
                 <video 
                   key={i} 
                   src={src} 
                   autoPlay muted loop playsInline 
                   className="w-full aspect-[4/5] object-cover rounded-[1rem] md:rounded-[2rem] border border-white/10 shadow-2xl opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-[1.02]" 
                 />
              ))}
           </div>
        </div>
        
      </div>
    </section>
  );
}
