import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';

export function CTASection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {"theme":"dark"});
    })();
  }, []);

  return (
    <section className="pt-24 bg-transparent relative overflow-hidden border-t border-white/5">

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-black/20 backdrop-blur-2xl p-12 md:p-20 rounded-[3rem] border border-white/10"
        >
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tight mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
            ready to dominate<br />your market?
          </h2>

          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-normal font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
            If you're an ambitious brand ready to elevate your visual identity and scale through high-performance storytelling, let's architect your next move.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="tel:+919987214982" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10">
              <Phone className="w-5 h-5" />
              <span className="font-bold tracking-widest">+91 9987214982</span>
            </a>
            <a href="mailto:build@thequidditycraft.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10">
              <Mail className="w-5 h-5" />
              <span className="font-bold tracking-wider lowercase">build@thequidditycraft.com</span>
            </a>
          </div>

          <Button 
            data-cal-namespace=""
            data-cal-link="quidditycraft"
            data-cal-config='{"layout":"month_view"}'
            className="bg-white text-black hover:bg-neutral-200 rounded-none px-10 py-7 text-sm font-black uppercase tracking-widest transition-all"
          >
            Book a Strategy Call
          </Button>
        </motion.div>

        {/* Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between px-6"
        >
          <div className="flex items-center gap-3 mb-6 md:mb-0">
             <div className="w-2 h-2 rounded-full bg-white/60 animate-pulse" />
             <span className="text-white/60 text-sm font-bold uppercase tracking-widest" style={{ fontFamily: 'Outfit, sans-serif' }}>available for projects</span>
          </div>
          <p className="text-white/40 text-sm font-bold uppercase tracking-widest" style={{ fontFamily: 'Outfit, sans-serif' }}>
            © 2026 quiddity craft. all rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
