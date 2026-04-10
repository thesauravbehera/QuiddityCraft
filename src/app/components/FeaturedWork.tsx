import { motion } from 'motion/react';
import { Award, TvMinimal } from 'lucide-react';
import { VideoPlayer } from './VideoPlayer';

export function FeaturedWork() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
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
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: '1.3',
            }}
          >
            Featured Campaigns
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            Broadcast-quality productions that reached millions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* USA TVC */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-video overflow-hidden rounded-lg bg-black"
          >
            <VideoPlayer
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.webm"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <TvMinimal className="w-5 h-5 text-white/80" />
                  <span
                    className="text-white/60 text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    National TV Commercial
                  </span>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                  }}
                >
                  BetterAlt — Broadcasted in USA
                </h3>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  AI-powered commercial that aired nationwide, showcasing cutting-edge product
                  visualization and storytelling.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Times Square */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative aspect-video overflow-hidden rounded-lg bg-black"
          >
            <VideoPlayer
              src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
              className="w-full h-full object-cover"
              isHLS={true}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-white/80" />
                  <span
                    className="text-white/60 text-sm uppercase tracking-wider"
                    style={{ fontFamily: 'Barlow, sans-serif' }}
                  >
                    Times Square Feature
                  </span>
                </div>
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                  }}
                >
                  BetterAlt — Times Square Billboard
                </h3>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  Premium brand campaign featured on the iconic Times Square screens, reaching
                  millions of viewers daily.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
