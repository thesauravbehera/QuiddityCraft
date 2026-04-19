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
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: '1.3',
            }}
          >
            I am Sahil Shaikh, Commander of Visuals.
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-white/80"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '18px',
              lineHeight: '1.8',
              fontWeight: 400,
            }}
          >
            <p>
              I command visuals that break the gravitational pull of ordinary content.
            </p>

            <p>
              With light-years of experience navigating the digital cosmos and 100M+ views generated
              across the galaxy, I blend stellar AI with human creativity to build
              content that performs and connects.
            </p>

            <p>
              My journey began orbiting as a video editor working with incredible brands, but what truly excites me
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

            <p className="text-[#00ffff] text-xl italic" style={{ fontFamily: 'Instrument Serif, serif', textShadow: '0 0 20px rgba(0,255,255,0.4)' }}>
              Forging cosmic visuals that resonate beyond the stratosphere.
            </p>

            <p>
              Today, I operate as your Creative Navigator, handling everything across pre-production,
              production, and post-production — your creative strategist, storyteller, and execution
              partner in one.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
