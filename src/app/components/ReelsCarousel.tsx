import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export function ReelsCarousel() {
  const allVideos = [
    { src: '/videos/AI Cat Edits 2.webm', badge: 'AI Cat Edits' },
    { src: '/videos/AI_Turmeric Sticks_002.webm', badge: 'Turmeric AD' },
    { src: '/videos/AI.webm', badge: 'AI Featured' },
    { src: '/videos/Anya_FatBurner.webm', badge: 'FatBurner' },
    { src: '/videos/Clinique Video 04_04 English.webm', badge: 'Clinique TVC' },
    { src: '/videos/Energy drinks.webm', badge: 'Energy Drink' },
    { src: '/videos/Fenty Beauty .webm', badge: 'Fenty Edit' },
    { src: '/videos/Founding Father (AI) 2.webm', badge: 'AI Founding' },
    { src: '/videos/GreenAmericanGuy1.webm', badge: 'Character AI' },
    { src: '/videos/Keyframe .webm', badge: 'Keyframe' },
    { src: '/videos/Motion graphics.webm', badge: 'Motion FX' },
    { src: '/videos/Mumbai 2.webm', badge: 'Mumbai Scene' },
    { src: '/videos/NAC TVC AI Video 03.webm', badge: 'NAC TVC' },
    { src: '/videos/Ornam (1st reel).webm', badge: 'Ornam Reel' },
    { src: '/videos/Player Montage Edit (Mohamed Salah).webm', badge: 'Salah Edit' },
    { src: '/videos/REEL.webm', badge: 'Master Reel' },
    { src: '/videos/Sam_Podcast.webm', badge: 'Sam Podcast' },
    { src: '/videos/AI AVATAR_TedX 9x16.webm', badge: 'TedX Avatar' },
    { src: '/videos/AI Capsules 1.webm', badge: 'AI Capsules' },
  ];

  return (
    <section className="py-24 w-full bg-[#060608] overflow-hidden border-t border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2
          className="text-white text-center"
          style={{
            fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
                        fontSize: 'clamp(36px, 5vw, 60px)',
            lineHeight: '1.1',
          }}
        >
          Cinematic Reels
        </h2>
        <p
          className="text-white/60 text-center mt-3 tracking-wide"
          style={{ fontFamily: 'Barlow, sans-serif', fontSize: '16px' }}
        >
          Scroll naturally through our expansive library of vertical broadcast MVPs.
        </p>
      </div>

      <div className="w-full relative px-6">
        <div 
          className="flex gap-4 overflow-x-auto overflow-y-hidden pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {allVideos.map((video, idx) => (
            <div
              key={idx}
              className="relative w-[180px] sm:w-[220px] aspect-[9/16] rounded-2xl overflow-hidden shrink-0 snap-center group shadow-2xl bg-black border border-white/10"
            >
              <video
                src={video.src}
                muted
                loop
                playsInline
                preload="metadata"
                onMouseEnter={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for better contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none opacity-80" />

              {/* Play Hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none z-10 text-white/50">
                <span className="bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-bold" style={{ fontFamily: 'Barlow' }}>Hover to Play</span>
              </div>

              {/* Yellow Badge */}
              <div className="absolute top-3 left-3 z-10 pointer-events-none">
                <div className="bg-[#ffaa00] text-black px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                  <span>⭐</span> {video.badge}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Fade Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-[#060608] to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-[#060608] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
