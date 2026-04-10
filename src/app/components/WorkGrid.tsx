import { motion } from 'motion/react';
import assetList from './assetList.json';

export function WorkGrid() {
  return (
    <section className="py-20 bg-transparent min-h-screen">
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
            }}
          >
            Creative Visuals
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            Explore our massive library of premium AI-generated concepts, lifestyle photography, and commercial renders.
          </p>
        </motion.div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {assetList.map((src, index) => {
            // Get a clean title from the filename
            const filename = src.split('/').pop() || '';
            const cleanTitle = filename
              .replace(/^[0-9]+_/, '')
              .replace(/_remix_.*\.webp$/, '')
              .replace(/freepik__.*?-/, '')
              .replace(/-__\d+\.webp$/, '')
              .replace(/-\d+\.webp$/, '')
              .replace(/\.[^/.]+$/, '') // remove extension
              .replace(/[-_]/g, ' ')
              .trim();

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
                className="group relative break-inside-avoid overflow-hidden rounded-[16px] bg-zinc-950/40 backdrop-blur-md border border-white/10 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20"
              >
                <img 
                  src={src} 
                  alt={cleanTitle || 'Creative Visual'} 
                  loading="lazy"
                  className="w-full h-auto object-cover relative z-0" 
                />

                {/* Dark Vignette/Gradient overlay for text readability */}
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <h3
                    className="text-white capitalize"
                    style={{
                      fontFamily: 'Barlow, sans-serif',
                      fontSize: '15px',
                      fontWeight: 600,
                      lineHeight: '1.3',
                      textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                    }}
                  >
                    {cleanTitle.length > 40 ? cleanTitle.substring(0, 40) + '...' : cleanTitle}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
