import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ReelsCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const allVideos = [
    { src: '/videos/AI Cat Edits 2.mp4', badge: 'AI Cat Edits' },
    { src: '/videos/AI_Turmeric Sticks_002.mov', badge: 'Turmeric AD' },
    { src: '/videos/AI.mp4', badge: 'AI Featured' },
    { src: '/videos/Anya_FatBurner.mp4', badge: 'FatBurner' },
    { src: '/videos/Clinique Video 04_04 English.mp4', badge: 'Clinique TVC' },
    { src: '/videos/Energy drinks.mp4', badge: 'Energy Drink' },
    { src: '/videos/Fenty Beauty .mov', badge: 'Fenty Edit' },
    { src: '/videos/Founding Father (AI) 2.mp4', badge: 'AI Founding' },
    { src: '/videos/GreenAmericanGuy1.mp4', badge: 'Character AI' },
    { src: '/videos/Kaboom 14th Sept(Time Square).mp4', badge: 'Time Square' },
    { src: '/videos/Kaboom Reel.mp4', badge: 'Kaboom Reel' },
    { src: '/videos/Keyframe .mov', badge: 'Keyframe' },
    { src: '/videos/Motion graphics.mp4', badge: 'Motion FX' },
    { src: '/videos/Mumbai 2.mp4', badge: 'Mumbai Scene' },
    { src: '/videos/NAC TVC AI Video 03.mov', badge: 'NAC TVC' },
    { src: '/videos/Ornam (1st reel).mp4', badge: 'Ornam Reel' },
    { src: '/videos/Player Montage Edit (Mohamed Salah).mp4', badge: 'Salah Edit' },
    { src: '/videos/REEL.mp4', badge: 'Master Reel' },
    { src: '/videos/Sam_Podcast.mp4', badge: 'Sam Podcast' },
    { src: '/videos/AI AVATAR_TedX 9x16.mp4', badge: 'TedX Avatar' },
    { src: '/videos/AI Capsules 1.mp4', badge: 'AI Capsules' },
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
          className="flex gap-6 px-[10vw]"
          style={{ x: xTransform, width: 'max-content' }}
        >
          {allVideos.map((video, idx) => (
            <div
              key={idx}
              className="relative w-[280px] sm:w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shrink-0 group shadow-2xl bg-black border border-white/10"
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
