import { motion } from 'motion/react';
import brandLogos from './logoList.json';

export function BrandLogos() {
  // Duplicate for seamless infinite scrolling
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="relative py-16 bg-transparent border-t border-b border-white/5 overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-10 flex flex-col items-center px-6"
        >
          <p className="text-white/60 text-base font-semibold uppercase tracking-[0.25em] drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" style={{ fontFamily: 'Barlow, sans-serif' }}>
            Trusted by leading brands
          </p>
        </motion.div>

        {/* Outer Marquee Track Container */}
        <div className="relative flex overflow-hidden w-full border-t border-b border-white/10 group">
          
          {/* Subtle Fading edges for depth */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#060608] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#060608] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Motion Div containing the rigid boxes */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 40 
            }}
            className="flex items-center w-max shrink-0"
          >
            {duplicatedLogos.map((src, index) => (
               <div 
                 key={index} 
                 className="relative border-r border-white/10 shrink-0 w-[180px] md:w-[220px] h-[120px] flex items-center justify-center p-8 group-hover:bg-white/5 transition-colors duration-500"
               >
                  {/* Left Side Rigid Crosshairs */}
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/50 text-xs font-mono font-light pointer-events-none select-none">+</div>
                  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-white/50 text-xs font-mono font-light pointer-events-none select-none">+</div>
                  
                  <img 
                    src={src} 
                    alt="Brand Logo Client" 
                    className="max-w-full max-h-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
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
