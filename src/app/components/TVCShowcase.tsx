import { motion } from 'motion/react';
import { Award, TvMinimal, Sparkles } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function TVCShowcase() {
  const tvcProjects = [
    {
      src: '/videos/Fenty Beauty .webm',
      title: 'Fenty Beauty Campaign',
      subtitle: 'Luxury Cosmetics Edit',
      description: 'High-end cosmetic advertising featuring extreme physics-based motion graphics and seamless compositing.',
      icon: Sparkles,
      badge: 'Beauty TVC',
      isHLS: false,
    },
    {
      src: '/videos/AI AVATAR_TedX 9x16.webm',
      title: 'TedX AI Experience',
      subtitle: 'Avatars in Broadcast',
      description: 'Pushing the boundary of thought leadership with ultra-realistic AI generated avatars specifically for TedX features.',
      icon: TvMinimal,
      badge: 'Broadcast Edit',
      isHLS: false,
    },
    {
      src: '/videos/AI.webm',
      title: 'Antigravity Synthetics',
      subtitle: 'Unbound Creative AI',
      description: 'A completely unhinged showcase of raw generative processing and cinematic lighting designed entirely from code.',
      icon: Award,
      badge: 'Synthetic Output',
      isHLS: false,
    },
    {
      src: '/videos/astruanuat.webm',
      title: 'Cinematic Space Exploration',
      subtitle: 'AI Generative Physics',
      description: 'Zero-gravity physics simulations driven entirely by advanced prompt engineering and temporal coherence framing.',
      icon: Sparkles,
      badge: 'Hyperspace Edit',
      isHLS: false,
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
              <span
                className="text-white/80 text-sm font-black lowercase tracking-wider"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                ⭐ Galactic Quality Operations
              </span>
            </div>
          </motion.div>

          <h2
            className="text-white mb-6"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontStyle: 'italic',
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: '1.2',
            }}
          >
            Featured Transmission Operations
          </h2>
          <p
            className="text-white/70 max-w-3xl mx-auto"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '20px',
              lineHeight: '1.6',
            }}
          >
            From planetary broadcasts to Times Square billboards — launching hyperspace transmissions that reach 
            millions across the universe
          </p>
        </motion.div>

        <div className="space-y-12">
          {tvcProjects.map((project, index) => {
            const Icon = project.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Video */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-video overflow-hidden rounded-xl bg-black shadow-2xl"
                  >
                    <VideoPlayer
                      src={project.src}
                      className="w-full h-full object-cover"
                      isHLS={project.isHLS}
                    />

                    {/* Badge overlay */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                        <span
                          className="text-black text-xs font-bold lowercase tracking-wider"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          {project.badge}
                        </span>
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span
                        className="text-white/60 text-sm lowercase tracking-wider"
                        style={{ fontFamily: 'Outfit, sans-serif' }}
                      >
                        {project.subtitle}
                      </span>
                    </div>

                    <h3
                      className="text-white mb-4"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: 'clamp(24px, 3vw, 36px)',
                        fontWeight: 700,
                        lineHeight: '1.2',
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      className="text-white/70"
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '18px',
                        lineHeight: '1.8',
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-6 pt-4">
                      <div>
                        <div
                          className="text-white text-2xl font-bold mb-1"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          100M+
                        </div>
                        <div
                          className="text-white/60 text-sm"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          Impressions
                        </div>
                      </div>
                      <div>
                        <div
                          className="text-white text-2xl font-bold mb-1"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          AI-Powered
                        </div>
                        <div
                          className="text-white/60 text-sm"
                          style={{ fontFamily: 'Outfit, sans-serif' }}
                        >
                          Production
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
