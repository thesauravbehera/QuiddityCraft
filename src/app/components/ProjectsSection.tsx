import { motion } from 'motion/react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { VideoPlayer } from './VideoPlayer';
export function ProjectsSection() {
  const projects = [
    {
      type: 'video',
      src: '/videos/Shelajit Gummies (AI_Podcast_Style)9x16.webm',
      title: 'BetterAlt Shilajit Gummies',
      category: 'TVC • Commercial',
      featured: true,
      isHLS: false,
    },
    {
      type: 'video',
      src: '/videos/Player Montage Edit (Mohamed Salah).webm',
      title: 'Sports Action Montage',
      category: 'Sports',
      featured: true,
      isHLS: false,
    },
    {
      type: 'video',
      src: '/videos/Mumbai 2.webm',
      title: 'Mumbai City Showcase',
      category: 'Cinematic',
      featured: true,
      isHLS: false,
    },
    {
      type: 'video',
      src: '/videos/AI Cat Edits 2.webm',
      title: 'Creative Cat Edits',
      category: 'AI Visual Production',
      isHLS: false,
    },
    {
      type: 'video',
      src: '/videos/REEL.webm',
      title: 'Agency Highlight Reel',
      category: 'Showcase',
      isHLS: false,
    },
    {
      type: 'video',
      src: '/videos/Astruanuat2.webm',
      title: 'Cinematic Space Journey',
      category: 'AI Visual Production',
      isHLS: false,
    },
    {
      type: 'video',
      src: '/videos/Firefighter.webm',
      title: 'Action Sequence',
      category: 'AI Generated',
      isHLS: false,
    },
    {
      type: 'video',
      src: '/videos/Mountain 1.webm',
      title: 'Mountain Drone Shot',
      category: 'Cinematic',
      isHLS: false,
    },
  ];

  return (
    <section id="works" className="py-32 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
                            fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: '1.3',
            }}
          >
            Portfolio Showcase
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            From broadcast TVCs to AI-powered visuals — work that doesn't just get seen, it gets remembered.
            <br />
            <span className="text-white/80">AI-powered. Human-led. Results-driven.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-12"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`group relative aspect-[9/16] overflow-hidden rounded-lg bg-transparent ${
                      project.featured ? 'ring-2 ring-white/20' : ''
                    }`}
                  >
                    {project.type === 'video' ? (
                      <VideoPlayer
                        src={project.src}
                        className="w-full h-full object-cover"
                        isHLS={project.isHLS}
                      />
                    ) : (
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Featured Badge for TVC */}
                    {project.featured && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="absolute top-4 left-4 z-10"
                      >
                        <div className="bg-gradient-to-r from-yellow-400/90 to-orange-400/90 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 shadow-lg">
                          <span
                            className="text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1"
                            style={{ fontFamily: 'Barlow, sans-serif' }}
                          >
                            ⭐ Featured TVC
                          </span>
                        </div>
                      </motion.div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p
                          className="text-white/60 text-sm mb-2 uppercase tracking-wider"
                          style={{ fontFamily: 'Barlow, sans-serif' }}
                        >
                          {project.category}
                        </p>
                        <h3
                          className="text-white"
                          style={{
                            fontFamily: 'Barlow, sans-serif',
                            fontSize: '18px',
                            fontWeight: 600,
                          }}
                        >
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white border-white/20 hover:bg-white/10" />
            <CarouselNext className="text-white border-white/20 hover:bg-white/10" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
