import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function TVCReel() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const tvcReels = [
    {
      thumbnail: '/videos/Shelajit Gummies (AI_Podcast_Style)9x16.webm',
      src: '/videos/Shelajit Gummies (AI_Podcast_Style)9x16.webm',
      title: 'Shilajit Gummies',
      duration: 'Podcast Edit',
      isHLS: false,
    },
    {
      thumbnail: '/videos/REEL.webm',
      src: '/videos/REEL.webm',
      title: 'Agency Master Reel',
      duration: 'Highlight',
      isHLS: false,
    },
    {
      thumbnail: '/videos/AI Cat Edits 2.webm',
      src: '/videos/AI Cat Edits 2.webm',
      title: 'AI Cat Edits',
      duration: 'Creative AI',
      isHLS: false,
    },
  ];

  return (
    <>
      <section id="tvc-reel" className="py-20 bg-black border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3
              className="text-white mb-3"
              style={{
                fontFamily: 'Instrument Serif, serif',
                fontStyle: 'italic',
                fontSize: 'clamp(28px, 3vw, 42px)',
              }}
            >
              Watch Our TVC Reel
            </h3>
            <p
              className="text-white/60"
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '16px',
              }}
            >
              Click to view full commercials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tvcReels.map((reel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-video overflow-hidden rounded-lg bg-zinc-900 cursor-pointer"
                onClick={() => setSelectedVideo(index)}
              >
                <VideoPlayer
                  src={reel.thumbnail}
                  className="w-full h-full object-cover"
                  isHLS={reel.isHLS}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-6"
                    >
                      <Play className="w-8 h-8 text-white fill-current" />
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between">
                      <h4
                        className="text-white"
                        style={{
                          fontFamily: 'Barlow, sans-serif',
                          fontSize: '18px',
                          fontWeight: 600,
                        }}
                      >
                        {reel.title}
                      </h4>
                      <span
                        className="text-white/80 text-sm"
                        style={{ fontFamily: 'Barlow, sans-serif' }}
                      >
                        {reel.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <VideoPlayer
                src={tvcReels[selectedVideo].src}
                className="w-full h-full object-contain rounded-lg"
                isHLS={tvcReels[selectedVideo].isHLS}
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-white/70 transition-colors"
                aria-label="Close video"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Video Title */}
              <div className="absolute -bottom-16 left-0">
                <h3
                  className="text-white text-xl"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  {tvcReels[selectedVideo].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
