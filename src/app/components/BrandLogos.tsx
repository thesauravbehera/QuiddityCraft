import { motion } from 'motion/react';

const officialBrands = [
  { name: "GNC Live Well", src: "/logos/GNC-white-logo.webp" },
  { name: "AKIKI London", src: "/logos/Akiki_London_White_Logo.webp" },
  { name: "ORNAM", src: "/logos/Ornam_logo_page-0001.webp" },
  { name: "CLINIQUE", src: "/logos/download.webp" }, 
  { name: "HOUSE of TOOTH", src: "/logos/Web_logo_1_500x.webp" },
  { name: "BetterAlt", src: "/logos/BetterAlt Logo 98_98.webp" },
  { name: "SKINN", src: "/logos/download (1).webp" },
  { name: "Rubans", src: "/logos/Logo.webp" }
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

        {/* Returning to Marquee Track with Bright Rounded Capsules */}
        <div className="relative flex overflow-hidden w-full border-t border-b border-white/5 group py-12 mt-8 bg-black/40">
          
          <div className="absolute top-0 left-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-[#02000A] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-[#02000A] to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="flex items-center w-max shrink-0"
          >
            {duplicatedLogos.map((brand, index) => {
               const requiresInversion = ['GNC Live Well', 'AKIKI London', 'Rubans'].includes(brand.name);

               return (
                 <div key={index} className="relative shrink-0 w-[140px] md:w-[280px] h-[80px] md:h-[120px] mx-2 md:mx-4 flex items-center justify-center group">
                    {/* Consistent White Rounded Rectangle Background */}
                    <div className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl group-hover:scale-105 transition-all duration-500 shadow-xl border border-black/5" />
                    
                    <div className="relative z-10 w-full h-full p-2 flex flex-col items-center justify-center pointer-events-none">
                      {brand.src && (
                        <img 
                          src={brand.src} 
                          alt={`${brand.name} Logo`}
                          className="w-[85%] h-[85%] object-contain group-hover:scale-110 transition-transform duration-500" 
                          style={{
                             filter: requiresInversion ? 'invert(1) grayscale(1) contrast(300%)' : 'none',
                             mixBlendMode: requiresInversion ? 'multiply' : 'darken'
                          }}
                          loading="lazy"
                        />
                      )}
                    </div>
                 </div>
               )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
