import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-white mb-8"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              textTransform: 'uppercase',
                            fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: '1.3',
            }}
          >
            Hi, I'm Sahil Shaikh.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/80"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
              lineHeight: '1.8',
              fontWeight: 400,
            }}
          >
            <p>
              I create visuals that make people stop scrolling and start caring.
            </p>

            <p>
              With 3+ years of experience, 100M+ views generated, and multiple high-impact projects
              across brands and industries, I blend cutting-edge AI with human creativity to build
              content that performs and connects.
            </p>

            <p>
              I started as a video editor working with incredible brands, but what truly excites me
              today is how I've integrated AI into my creative process. It allows me to bring
              ambitious ideas to life — the kind that once required massive budgets and timelines —
              without losing the emotional core of storytelling.
            </p>

            <p>
              Alongside editing, I work hands-on with cinematography and photography, which lets me
              shape stories from the ground up — from concept to final frame. Whether I'm crafting a
              reel that gives you goosebumps or building a content strategy that actually converts,
              I'm focused on one thing:
            </p>

            <p className="text-white text-xl italic" style={{ fontFamily: 'Instrument Serif, serif' }}>
              Creating work that resonates deeply and tells your brand's story authentically.
            </p>

            <p>
              Today, I work as a Creative Producer, handling everything across pre-production,
              production, and post-production — your creative strategist, storyteller, and execution
              partner in one.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
