import { motion } from 'motion/react';
import brandLogos from './logoList.json';

export function BrandLogos() {
  // Duplicate for seamless infinite scrolling
  const duplicatedLogos = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section className="relative py-24 border-t border-b border-white/5 bg-[#0B0914] overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 flex flex-col items-center px-6"
        >
          <p className="text-[#E0E7FF] text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Trusted by brands that
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none" style={{ fontFamily: 'Outfit, sans-serif' }}>
            <span className="text-white">Shape </span>
            <span className="bg-gradient-to-r from-[#E0E7FF] via-[#E1534E] to-[#99222B] bg-clip-text text-transparent">
              The World
            </span>
          </h2>
        </motion.div>

        {/* Outer Marquee Track Container */}
        <div className="relative flex overflow-hidden w-full border-t border-b border-white/10">
          
          {/* Subtle Fading edges for depth */}
          <div className="absolute top-0 left-0 bottom-0 w-16 md:w-48 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 md:w-48 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

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
                 className="relative border-r border-white/10 shrink-0 w-[180px] md:w-[220px] h-[140px] flex items-center justify-center p-8 group hover:bg-white/5 transition-colors duration-500"
               >
                  {/* Left Side Rigid Crosshairs */}
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/50 text-xs font-mono font-light pointer-events-none select-none">+</div>
                  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-white/50 text-xs font-mono font-light pointer-events-none select-none">+</div>
                  
                  <img 
                    src={src} 
                    alt="Brand Logo Client" 
                    className="max-w-full max-h-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
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
