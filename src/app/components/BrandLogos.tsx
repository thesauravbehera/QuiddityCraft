import { motion } from 'motion/react';

const officialBrands = [
  { name: "GNC Live Well", src: "/logos/GNC-white-logo.webp" },
  { name: "AKIKI London", src: "/logos/Akiki_London_White_Logo.webp" },
  { name: "ORNAM", src: "/logos/Ornam_logo_page-0001.webp" },
  { name: "CLINIQUE", src: "/logos/download.webp" }, 
  { name: "HOUSE of TOOTH", src: "/logos/Web_logo_1_500x.webp" },
  { name: "BetterAlt", src: "/logos/BetterAlt Logo 98_98.webp" },
  { name: "SKINN", src: "/logos/download (1).webp" },
  { name: "YARDLEY LONDON", src: "/logos/1752487524187.webp" },
  { name: "LAVIE WORLD", src: "/logos/Picture_1.avif" }
];

export function BrandLogos() {
  // Duplicate for seamless infinite scrolling
  const duplicatedLogos = [...officialBrands, ...officialBrands, ...officialBrands, ...officialBrands];

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
          <p className="text-[#ffffff] text-base font-bold lowercase tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Trusted by global visionaries
          </p>
        </motion.div>

        {/* Outer Marquee Track Container */}
        <div className="relative flex overflow-hidden w-full border-t border-b border-white/10 group bg-black py-4">
          
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
            {duplicatedLogos.map((brand, index) => (
               <div 
                 key={index} 
                 className="relative border-r border-white/10 shrink-0 w-[200px] md:w-[250px] h-[120px] flex items-center justify-center p-8 group-hover:bg-white/5 transition-colors duration-500"
               >
                  {/* Left Side Rigid Crosshairs */}
                  <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-white/50 text-xs font-mono font-bold pointer-events-none select-none">+</div>
                  <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-white/50 text-xs font-mono font-bold pointer-events-none select-none">+</div>
                  
                  {brand.src ? (
                    <img 
                      src={brand.src} 
                      alt={`${brand.name} Logo`}
                      className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <span 
                      className="text-white/60 font-black tracking-tight text-xl text-center group-hover:text-white transition-colors uppercase"
                      style={{ fontFamily: 'Outfit, sans-serif' }}
                    >
                      {brand.name}
                    </span>
                  )}
               </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
