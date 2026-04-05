import { motion } from 'motion/react';

export function VideoGridShowcase() {
  const allVideos = [
    '/videos/Kaboom Reel.mp4',
    '/videos/Sharan.mp4',
    '/videos/astruanuat.mp4',
    '/videos/Astruanuat2.mp4',
    '/videos/Astruanuat3.mp4',
    '/videos/Firefighter.mp4',
    '/videos/Firefighter2.mp4',
    '/videos/granny 2.mp4',
    '/videos/Granny.mp4',
    '/videos/Mountain 1.mp4',
    '/videos/Mountain2.mp4',
    '/videos/Party 2.mp4',
    '/videos/Party 3.mp4',
    '/videos/Party wide angle .mp4',
    '/videos/Party1.mp4',
    '/videos/Clinique Video 04_04 English.mp4',
    '/videos/Motion graphics.mp4',
    '/videos/AI Cat Edits 2.mp4',
    '/videos/AI_Turmeric Sticks_002.mov',
    '/videos/AI.mp4',
    '/videos/Anya_FatBurner.mp4',
    '/videos/Energy drinks.mp4',
    '/videos/Fenty Beauty .mov',
    '/videos/Founding Father (AI) 2.mp4',
    '/videos/GreenAmericanGuy1.mp4',
    '/videos/Keyframe .mov',
    '/videos/Mumbai 2.mp4',
    '/videos/NAC TVC AI Video 03.mov',
    '/videos/Ornam (1st reel).mp4',
    '/videos/Player Montage Edit (Mohamed Salah).mp4',
    '/videos/REEL.mp4',
    '/videos/Sam_Podcast.mp4',
    '/videos/AI AVATAR_TedX 9x16.mp4',
    '/videos/AI Capsules 1.mp4',
  ];

  return (
    <section className="py-20 bg-[#060608] min-h-screen border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 4vw, 56px)',
              textShadow: '0 0 30px rgba(255,255,255,0.2)'
            }}
          >
            The Motion Archive
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            A continuous scroll of our entire production and generative video registry.
          </p>
        </motion.div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {allVideos.map((src, index) => {
            const filename = src.split('/').pop() || '';
            const cleanTitle = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ').trim();

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
                className="group relative break-inside-avoid overflow-hidden rounded-[16px] bg-zinc-950 border border-white/10 cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/30 hover:z-10"
              >
                {/* 
                  Using onMouseEnter/onMouseLeave to handle playback 
                  instead of autoPlay to save immense processing power 
                  since there are 30+ 4k videos on a single page.
                */}
                <video 
                  src={src} 
                  muted 
                  loop 
                  playsInline 
                  preload="metadata"
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0; // Reset to frame 1 on blur
                  }}
                  className="w-full h-auto object-cover relative z-0 transition-opacity duration-300" 
                />

                {/* Dark Vignette/Gradient overlay for text readability */}
                <div className="absolute inset-x-0 bottom-0 top-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                  <h3
                    className="text-white capitalize"
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '1.2',
                    }}
                  >
                    {cleanTitle.length > 30 ? cleanTitle.substring(0, 30) + '...' : cleanTitle}
                  </h3>
                </div>
                
                {/* Play Hint */}
                <div className="absolute top-3 right-3 bg-black/60 rounded-full px-2 py-1 opacity-100 group-hover:opacity-0 transition-opacity duration-300 z-10 pointer-events-none border border-white/10">
                  <span className="text-[10px] text-white/80 tracking-widest uppercase font-bold" style={{ fontFamily: 'Barlow' }}>Hover to Play</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
