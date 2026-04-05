import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function PlayOnViewVideo({ src, className }: { src: string, className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {});
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}

export function ParallaxGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);

  const galleryVideos = [
    "/videos/astruanuat.mp4",
    "/videos/Astruanuat2.mp4",
    "/videos/Astruanuat3.mp4",
    "/videos/Firefighter.mp4",
    "/videos/Firefighter2.mp4",
    "/videos/granny 2.mp4",
    "/videos/Granny.mp4",
    "/videos/Mountain 1.mp4",
    "/videos/Mountain2.mp4",
    "/videos/Party 2.mp4",
    "/videos/Party 3.mp4",
    "/videos/Party wide angle .mp4",
    "/videos/Party1.mp4"
  ];

  const mid = Math.ceil(galleryVideos.length / 2);
  const col1Videos = galleryVideos.slice(0, mid);
  const col2Videos = galleryVideos.slice(mid);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: textRef.current,
      pinSpacing: false,
    });

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
    <section ref={containerRef} className="relative w-full h-[200vh] bg-transparent mt-20 border-t border-white/5 pt-10">
      
      {/* Pinned Text Layer (z-30) */}
      <div 
        ref={textRef}
        className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-30 pointer-events-none px-6"
      >
        <p 
          className="text-white/60 text-sm uppercase font-medium mb-6 backdrop-blur-sm px-4 py-1 rounded-full bg-black/20" 
          style={{ fontFamily: 'Barlow, sans-serif', letterSpacing: '0.4em' }}
        >
          Explorations
        </p>
        <h2 
          className="text-white text-center leading-[1.1] mb-6 drop-shadow-2xl" 
          style={{ 
            fontFamily: 'Barlow, sans-serif', 
            fontSize: 'clamp(50px, 8vw, 100px)', 
            fontWeight: 300, 
            letterSpacing: '-2px' 
          }}
        >
          Visual <span style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>playground</span>
        </h2>
      </div>

      {/* Parallax Video Columns (z-20) */}
      <div className="absolute top-0 left-0 w-full h-full z-20 pointer-events-none">
        <div className="max-w-[1400px] h-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-40 items-start">
          
          {/* Column 1 */}
          <div ref={col1Ref} className="flex flex-col gap-16 md:gap-40 mt-[30vh] pointer-events-auto items-center md:items-end">
            {col1Videos.map((src, i) => {
              const is9x16 = src.includes('AI.mp4') || src.includes('Energy drinks.mp4') || src.includes('TedX');
              return (
                <div 
                  key={`col1-${i}`} 
                  className={`group relative overflow-hidden rounded-[24px] bg-zinc-950/40 backdrop-blur-md border border-white/10 transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] w-full shadow-2xl aspect-video max-w-[500px]`}
                >
                  <PlayOnViewVideo 
                    src={src} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div ref={col2Ref} className="flex flex-col gap-16 md:gap-40 mt-[80vh] pointer-events-auto items-center md:items-start">
            {col2Videos.map((src, i) => {
              const is9x16 = src.includes('AI.mp4') || src.includes('Energy drinks.mp4') || src.includes('TedX');
              return (
                <div 
                  key={`col2-${i}`} 
                  className={`group relative overflow-hidden rounded-[24px] bg-zinc-950/40 backdrop-blur-md border border-white/10 transition-all duration-700 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(255,255,255,0.1)] w-full shadow-2xl aspect-video max-w-[450px]`}
                >
                  <PlayOnViewVideo 
                    src={src} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
      
    </section>
  );
}
