import { motion } from 'motion/react';
import brandLogos from './logoList.json';

export function BrandLogos() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="relative py-16 bg-transparent border-t border-white/5 overflow-hidden">
      <div className="relative z-10 max-w-[1600px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <p className="text-white/60 text-sm uppercase tracking-[0.2em]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Trusted by leading brands
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden group">
           {/* Left/Right Fade masks for the subtle space vibe */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

          {/* Rolling Track */}
          <motion.div
            animate={{ x: ["0%", "-33.333333%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 30 
            }}
            className="flex items-center gap-16 md:gap-24 w-max shrink-0 px-8"
          >
            {duplicatedLogos.map((src, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center shrink-0 w-[120px] h-[80px]"
              >
                <img 
                  src={src} 
                  alt="Brand Logo" 
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-300 rounded-[10px]"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
