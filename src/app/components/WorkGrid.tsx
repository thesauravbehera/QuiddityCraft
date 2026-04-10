import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import categorizedAssets from './categorizedAssets.json';

type Category = keyof typeof categorizedAssets;

export function WorkGrid() {
  const categories = Object.keys(categorizedAssets) as Category[];
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [showAll, setShowAll] = useState(false);

  const currentAssets = categorizedAssets[activeCategory] || [];
  const displayedAssets = showAll ? currentAssets : currentAssets.slice(0, 12);

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
            className="text-white mb-6 uppercase tracking-widest"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 3vw, 42px)',
            }}
          >
            Archived Operations
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            Explore our massive databanks of premium AI-generated star charts, hyperspace recordings, and cosmic logs.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-8 py-3 rounded-none border-b-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'text-white border-white' 
                  : 'text-white/40 border-transparent hover:border-white/20 hover:text-white/80'
              }`}
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              {category}
            </button>
          ))}
        </motion.div>

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
          </AnimatePresence>
        </div>

        {/* View Entire Portfolio Button */}
        {!showAll && currentAssets.length > 12 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-16"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-10 py-5 bg-transparent border border-white/20 text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-500 hover:bg-white hover:text-black"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              Access Full Archive
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
