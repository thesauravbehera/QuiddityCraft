import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 bg-transparent relative overflow-hidden border-t border-white/5">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 5vw, 64px)',
              lineHeight: '1.2',
              textShadow: '0 0 40px rgba(255,255,255,0.3)'
            }}
          >
            Let's create something unforgettable.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/70 text-lg mb-12 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '20px',
              lineHeight: '1.6',
            }}
          >
            If you're a brand or agency looking for content that actually moves people — and moves
            the needle — let's talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="tel:7218676127"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '18px',
              }}
            >
              <Phone className="w-5 h-5" />
              7218676127
            </a>
            <a
              href="mailto:sahil.storyarc@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              style={{
                fontFamily: 'Barlow, sans-serif',
                fontSize: '18px',
              }}
            >
              <Mail className="w-5 h-5" />
              sahil.storyarc@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              className="bg-white text-black hover:bg-white/90 rounded-[2px] px-10 py-6 text-lg font-medium transition-all"
              style={{ fontFamily: 'Barlow, sans-serif' }}
            >
              Book a Call
            </Button>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 pt-8 border-t border-white/10"
        >
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            © 2026 Vibividly. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
