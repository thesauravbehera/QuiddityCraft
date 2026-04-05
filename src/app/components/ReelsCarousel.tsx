import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ReelsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const allVideos = [
    { src: '/videos/AI AVATAR_TedX 9x16.mp4', badge: 'Podcast Edit' },
    { src: '/videos/AI.mp4', badge: 'Featured TVC' },
    { src: '/videos/Energy drinks.mp4', badge: 'Action Edit' },
    { src: '/videos/Shelajit AD 2.mp4', badge: 'Commercial' },
    { src: '/videos/Fenty Beauty .mov', badge: 'Beauty Edit' },
    { src: '/videos/Kaboom Reel.mp4', badge: 'VFX Edit' },
    { src: '/videos/Founding Father (AI) 2.mp4', badge: 'AI Generated' },
    { src: '/videos/Kaboom 14th Sept(Time Square).mp4', badge: 'Times Square' },
    { src: '/videos/astruanuat.mp4', badge: 'Cinematic AI' },
    { src: '/videos/Motion graphics.mp4', badge: 'Motion Graphic' },
    { src: '/videos/Clinique Video 04_04 English.mp4', badge: 'Beauty TVC' },
    { src: '/videos/Firefighter.mp4', badge: 'AI Scene' },
    { src: '/videos/AI Capsules 1.mp4', badge: 'Product Render' },
    { src: '/videos/Mountain 1.mp4', badge: 'Environment' },
    { src: '/videos/Party 2.mp4', badge: 'Event Edit' },
    { src: '/videos/Granny.mp4', badge: 'Character AI' },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], ['5%', '-60%']);

  return (
    <section ref={containerRef} className="py-32 w-full bg-[#060608] overflow-hidden border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2
          className="text-white text-center"
          style={{
            fontFamily: 'Instrument Serif, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(40px, 6vw, 70px)',
            lineHeight: '1.1',
          }}
        >
          Cinematic Reels & Outputs
        </h2>
        <p
          className="text-white/60 text-center mt-4 tracking-wide"
          style={{ fontFamily: 'Barlow, sans-serif', fontSize: '18px' }}
        >
          Explore our expansive library of broadcast and generative MVPs.
        </p>
      </div>

      <div className="w-full relative py-10">
        <motion.div
          className="flex gap-8 px-[10vw]"
          style={{ x: xTransform, width: 'max-content' }}
        >
          {allVideos.map((video, idx) => (
            <div
              key={idx}
              className="relative w-[320px] sm:w-[400px] aspect-[9/16] rounded-2xl overflow-hidden shrink-0 group shadow-2xl bg-black border border-white/10"
            >
              <video
                src={video.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Yellow Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-[#ffaa00] text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2">
                  <span>⭐</span> {video.badge}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
