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
              <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply" />
              <img 
                src="/images/sahil-founder.avif" 
                alt="Sahil - Quiddity Craft Founder"
                className="w-full h-full object-cover grayscale contrast-[1.2] brightness-90 hover:scale-105 transition-transform duration-1000"
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
               className="text-white tracking-tighter leading-[1.1] uppercase font-black"
               style={{
                 fontFamily: 'Outfit, sans-serif',
                 fontSize: 'clamp(40px, 5vw, 64px)'
               }}
             >
               The absolute essence of your brand, brought to life.
             </h3>

             <div 
               className="text-white/80 font-medium"
               style={{
                 fontFamily: 'Outfit, sans-serif',
                 fontSize: 'clamp(18px, 2vw, 24px)',
                 lineHeight: '1.6'
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
