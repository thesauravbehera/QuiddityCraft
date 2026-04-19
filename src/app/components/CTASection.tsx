import { useRef } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Phone, Mail } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export function CTASection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite GSAP marquee
    gsap.to(marqueeRef.current, {
      xPercent: -50,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, { scope: marqueeRef });

  return (
    <section className="pt-24 bg-transparent relative overflow-hidden border-t border-white/5">
      
      {/* Heavy GSAP Marquee Strip */}
      <div className="w-full overflow-hidden bg-black/40 py-6 border-y border-white/5 shadow-2xl mb-20 flex whitespace-nowrap">
         <div ref={marqueeRef} className="flex items-center gap-10 opacity-70">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="text-white font-black text-6xl md:text-8xl lowercase tracking-tight shrink-0">
                 quiddity craft • true essence •
              </span>
            ))}
         </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pb-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="bg-black/20 backdrop-blur-2xl p-12 md:p-20 rounded-[3rem] border border-white/10"
        >
          <h2 className="text-white text-4xl md:text-6xl font-black lowercase tracking-tight mb-8">
            ready to break<br />the light barrier?
          </h2>

          <p className="text-white/60 lowercase text-lg md:text-xl mb-12 max-w-2xl mx-auto tracking-normal">
            if you're a brand or agency ready to defy gravity and launch content that moves the universe—let's align our satellites.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <a href="tel:7218676127" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10">
              <Phone className="w-5 h-5" />
              <span className="font-bold lowercase">7218676127</span>
            </a>
            <a href="mailto:comms@prepareoflightspeed.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors bg-white/5 px-6 py-3 rounded-full hover:bg-white/10">
              <Mail className="w-5 h-5" />
              <span className="font-bold lowercase">comms@prepareoflightspeed.com</span>
            </a>
          </div>

          <Button className="bg-white text-black hover:bg-white/90 rounded-full px-10 py-7 text-sm font-black lowercase transition-all">
            Open Comms Channel
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
             <div className="w-2 h-2 rounded-full bg-[#00ffff] animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
             <span className="text-white/60 text-sm font-bold lowercase">available for projects</span>
          </div>
          <p className="text-white/40 text-sm font-bold lowercase">
            © 2026 quiddity craft. active command.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
