import { useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Brain, Sparkles, Film, Palette, Camera } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      span: "col-span-1 md:col-span-12",
      icon: Palette,
      title: "brand positioning",
      desc: "Architecting the core identity and digital footprint to dominate market perception.",
      video: "/videos/Fenty Beauty .mov"
    },
    {
      span: "col-span-1 md:col-span-4",
      icon: Sparkles,
      title: "AI accelerated video",
      desc: "Deploying hyper-real generative visuals tailored for extreme conversion environments.",
      video: "/videos/AI.webm"
    },
    {
      span: "col-span-1 md:col-span-4",
      icon: Camera,
      title: "shooting & commercials",
      desc: "End-to-end commercial shooting and elite post-production editing engineered for maximum impact.",
      video: "/videos/REEL.mp4"
    },
    {
      span: "col-span-1 md:col-span-4",
      icon: Brain,
      title: "content strategy",
      desc: "Structuring performance-driven frameworks rooted in psychology and aggressive retention mechanics.",
      video: "/videos/Motion graphics.webm"
    }
  ];
  // Removed GSAP stagger because it was locking opacity on mobile/Safari viewport mismatch
  return (
    <section ref={sectionRef} id="services" className="py-24 bg-transparent relative z-10 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header GSAP/Motion style */}
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
               <div className="w-8 h-px bg-white/20" />
               <p className="text-white/50 text-xs uppercase font-bold tracking-[0.2em]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Our Arsenal
               </p>
            </div>
            <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-black capitalize tracking-tight leading-[0.9]" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Our Core<br />Competencies
            </h2>
          </div>
          <p className="text-white/60 text-base md:text-lg max-w-sm font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>
             A highly concentrated selection of specialized infrastructure we deploy for modern brands.
          </p>
        </motion.div>

        {/* Bento Grid 7/5/5/7 layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
           {services.map((svc, i) => {
              const Icon = svc.icon;
               return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`bento-box ${svc.span} group relative min-h-[300px] md:min-h-[450px] bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden flex flex-col justify-end p-6 md:p-12 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] hover:border-white/30`}
                  >
                    {/* Hover Video Reveal */}
                    <video 
                      src={svc.video}
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none scale-105 group-hover:scale-100"
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Halftone Overlay Background Map */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-0 transition-opacity duration-700 mix-blend-multiply" 
                         style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }} 
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                       <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 md:mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-white group-hover:border-transparent transition-all duration-500">
                          <Icon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black transition-colors" />
                       </div>
                       <h3 
                         className="text-2xl md:text-5xl font-black capitalize text-white tracking-tight mb-3 md:mb-4 group-hover:-translate-y-1 transition-transform duration-500"
                         style={{ fontFamily: 'Outfit, sans-serif' }}
                       >
                          {svc.title}
                       </h3>
                       <p 
                         className="text-white/70 text-base md:text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-md font-medium leading-relaxed delay-100"
                         style={{ fontFamily: 'Outfit, sans-serif' }}
                       >
                          {svc.desc}
                       </p>
                    </div>
                 </motion.div>
              )
           })}
        </div>

      </div>
    </section>
  );
}
