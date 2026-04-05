import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import assetList from './assetList.json';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  // Curate 6 striking images from the asset list
  // Skipping the first few to grab more diverse visual imagery mapped to indexes
  const galleryImages = [
    assetList[12],
    assetList[25],
    assetList[45],
    assetList[61],
    assetList[78],
    assetList[86]
  ].filter(Boolean); // fallback if array bounds change

  // Provide fallback images if assetList doesn't have enough entries
  const curatedImages = galleryImages.length === 6 ? galleryImages : assetList.slice(0, 6);

  const col1Images = curatedImages.slice(0, 3);
  const col2Images = curatedImages.slice(3, 6);

  useGSAP(() => {
    // 1. Pin the text layer dead-center of the screen during the entire 300vh scroll segment
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: textRef.current,
      pinSpacing: false, // Prevents GSAP from adding extra padding, letting the elements flow naturally over it
    });

    // 2. Parallax Column 1: Moves upward faster than the natural scroll to create depth
    gsap.to(col1Ref.current, {
      y: "-50vh",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    // 3. Parallax Column 2: Placed further down but moves much faster upward to overtake
    gsap.to(col2Ref.current, {
      y: "-120vh",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-transparent mt-20 border-t border-white/5 pt-10">
      
      {/* Pinned Text Layer (z-10) */}
      <div 
        ref={textRef}
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 pointer-events-none px-6"
      >
        <p 
          className="text-white/60 text-sm uppercase font-medium mb-6" 
          style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.4em' }}
        >
          Explorations
        </p>
        <h2 
          className="text-white text-center leading-[1.1] mb-6" 
          style={{ 
            fontFamily: 'Barlow, sans-serif', 
            fontSize: 'clamp(50px, 8vw, 100px)', 
            fontWeight: 300, 
            letterSpacing: '-2px' 
          }}
        >
          Visual <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.7)' }}>playground</span>
        </h2>
        <p 
          className="text-white/50 text-base md:text-lg max-w-md mx-auto text-center font-medium leading-relaxed" 
          style={{ fontFamily: 'Barlow, sans-serif' }}
        >
          Designing seamless digital interactions by focusing on the unique nuances which bring systems to life.
        </p>
      </div>

      {/* Parallax Image Columns (z-20) */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <div className="max-w-[1400px] h-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 items-start">
          
          {/* Column 1 - Starts immediately, moves moderately */}
          <div ref={col1Ref} className="flex flex-col gap-16 md:gap-40 mt-[30vh] pointer-events-auto items-center md:items-end">
            {col1Images.map((src, i) => (
              <div 
                key={`col1-${i}`} 
                className="group relative overflow-hidden rounded-[24px] bg-zinc-950/40 backdrop-blur-md border border-white/10 transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] aspect-square max-w-[340px] w-full shadow-2xl"
              >
                <img 
                  src={src} 
                  alt="Exploration Concept" 
                  className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>

          {/* Column 2 - Starts lower offset, moves rapidly */}
          <div ref={col2Ref} className="flex flex-col gap-16 md:gap-40 mt-[80vh] pointer-events-auto items-center md:items-start">
            {col2Images.map((src, i) => (
              <div 
                key={`col2-${i}`} 
                className="group relative overflow-hidden rounded-[24px] bg-zinc-950/40 backdrop-blur-md border border-white/10 transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] aspect-[4/5] max-w-[300px] w-full shadow-2xl"
              >
                <img 
                  src={src} 
                  alt="Exploration Concept" 
                  className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>

        </div>
      </div>
      
    </section>
  );
}
