import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: Moody Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="w-full md:w-1/2"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-none shadow-2xl relative">
              <div className="absolute inset-0 bg-transparent z-10" />
              <img 
                src="/images/Sahil-Color.webp" 
                alt="Sahil - Quiddity Craft Founder"
                className="w-full h-full object-cover shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Minimal label underneath image */}
            <p className="text-white/40 text-xs uppercase tracking-[0.2em] mt-4 font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Sahil • Founder, Creative Director
            </p>
          </motion.div>

          {/* Right Side: Manifesto Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
            className="w-full md:w-1/2 space-y-8"
          >
             <h2 className="text-white text-xs uppercase tracking-[0.3em] font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Manifesto
             </h2>
             
             <h3 
               className="text-white tracking-tighter leading-[1.0] uppercase font-black"
               style={{
                 fontFamily: 'Outfit, sans-serif',
                 fontSize: 'clamp(48px, 6vw, 84px)'
               }}
             >
               The absolute essence of your brand, brought to life.
             </h3>

             <div 
               className="text-white/90 font-medium"
               style={{
                 fontFamily: 'Outfit, sans-serif',
                 fontSize: 'clamp(22px, 3vw, 32px)',
                 lineHeight: '1.5'
               }}
             >
               <p className="mb-6">
                 Attention is the most expensive asset on the internet. We don't just capture it; we convert it.
               </p>
               <p>
                 We blend elite AI prompt engineering with human-led cinematic storytelling to build creatives that scale effortlessly in the modern digital economy.
               </p>
             </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
