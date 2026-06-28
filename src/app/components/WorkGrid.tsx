import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import categorizedAssets from './categorizedAssets.json';

type Category = keyof typeof categorizedAssets;

export function WorkGrid() {
  const baseCategories = Object.keys(categorizedAssets) as Category[];
  const categories = ['All Files', ...baseCategories] as const;
  const [activeCategory, setActiveCategory] = useState<string>('All Files');
  const [showAll, setShowAll] = useState(false);

  // If 'All Files' is selected, merge all arrays. Otherwise, fetch the specific category array.
  const currentAssets = activeCategory === 'All Files' 
    ? Object.values(categorizedAssets).flat() 
    : categorizedAssets[activeCategory as Category] || [];
    
  const displayedAssets = showAll ? currentAssets : currentAssets.slice(0, 24);

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
            className="text-white mb-6 lowercase tracking-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 64px)',
            }}
          >
            Work Archive
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '18px',
            }}
          >
            Explore our massive databanks of premium AI-generated star charts, hyperspace recordings, and cosmic logs.
          </p>
        </motion.div>

        {/* Category navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setShowAll(false);
              }}
              className={`px-6 py-2.5 rounded-full text-sm lowercase tracking-wider font-bold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                  : 'bg-black/40 text-white/70 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-3 sm:gap-4 space-y-3 sm:space-y-4 transition-all duration-500 min-h-[50vh]">
          <AnimatePresence mode="popLayout">
            {displayedAssets.map((src, index) => {
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

            const isVideo = src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.mov');

            return (
              <motion.div
                key={src}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: (index % 10) * 0.05 }}
                className="group relative break-inside-avoid overflow-hidden rounded-[16px] bg-zinc-950/40 backdrop-blur-md border border-white/10 cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:border-white/20"
              >
                {isVideo ? (
                  <video 
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover relative z-0"
                  />
                ) : (
                  <img 
                    src={src} 
                    alt={cleanTitle || 'Creative Visual'} 
                    loading="lazy"
                    className="w-full h-auto object-cover relative z-0" 
                  />
                )}

                {/* Overlays removed to keep imagery purely visual */}
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>

        {/* View Entire Portfolio Button */}
        {!showAll && currentAssets.length > 24 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-5 bg-transparent border border-white/20 text-white text-xs lowercase tracking-tight font-black transition-all duration-500 hover:bg-white hover:text-black hover:scale-105"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Access Full Archive
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
