import { motion } from 'motion/react';

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          
          {/* Manifesto Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="w-full space-y-8"
          >
             <h2 className="text-white text-xs uppercase tracking-[0.3em] font-black" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Manifesto
             </h2>
             
             <h3 
               className="text-white tracking-tighter leading-[1.0] uppercase font-black"
               style={{
                 fontFamily: 'Outfit, sans-serif',
                 fontSize: 'clamp(32px, 8vw, 84px)'
               }}
             >
               The absolute essence of your brand, brought to life.
             </h3>

             <div 
               className="text-white/90 font-medium"
               style={{
                 fontFamily: 'Outfit, sans-serif',
                 fontSize: 'clamp(18px, 4vw, 32px)',
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
