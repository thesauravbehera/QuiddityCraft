import { useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Brain, Sparkles, Film, Palette } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      span: "col-span-1 md:col-span-7",
      icon: Brain,
      title: "content strategy",
      desc: "Performance-driven frameworks rooted in psychology and retention mechanics.",
    },
    {
      span: "col-span-1 md:col-span-5",
      icon: Sparkles,
      title: "ai imagery",
      desc: "Hyper-real generative visuals and next-gen commercial creative.",
    },
    {
      span: "col-span-1 md:col-span-5",
      icon: Film,
      title: "cinema editing",
      desc: "High-impact edits with unparalleled pacing and sound design.",
    },
    {
      span: "col-span-1 md:col-span-7",
      icon: Palette,
      title: "brand identity",
      desc: "From visual aesthetics to the underlying core quiddity of your digital footprint.",
    }
  ];

  useGSAP(() => {
    // Stagger in the bento boxes
    const boxes = gsap.utils.toArray('.bento-box');
    gsap.from(boxes, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });
  }, { scope: sectionRef });

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
               <p className="text-white/50 text-xs lowercase font-bold tracking-tight">
                  Selected Work
               </p>
            </div>
            <h2 className="text-white text-5xl md:text-7xl font-black lowercase tracking-tight leading-none bg-clip-text">
              our core<br />competencies
            </h2>
          </div>
          <p className="text-white/60 lowercase text-lg max-w-sm">
             A highly concentrated selection of specialized infrastructure we deploy for modern brands.
          </p>
        </motion.div>

        {/* Bento Grid 7/5/5/7 layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
           {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                 <div 
                   key={i} 
                   className={`bento-box ${svc.span} group relative min-h-[350px] md:min-h-[450px] bg-black/40 backdrop-blur-md border border-white/10 rounded-[3rem] overflow-hidden flex flex-col justify-end p-8 md:p-12 hover:bg-white/5 transition-colors duration-500`}
                 >
                    {/* Halftone Overlay Background Map (GSAP prompt request) */}
                    <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-10 transition-opacity duration-700 mix-blend-multiply" 
                         style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '4px 4px' }} 
                    />
                    
                    {/* Content */}
                    <div className="relative z-10">
                       <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white transition-all duration-500">
                          <Icon className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                       </div>
                       <h3 className="text-3xl md:text-5xl font-black lowercase text-white tracking-tight mb-4 group-hover:-translate-y-2 transition-transform duration-500">
                          {svc.title}
                       </h3>
                       <p className="text-white/60 text-lg lowercase opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-md">
                          {svc.desc}
                       </p>
                    </div>
                 </div>
              )
           })}
        </div>

      </div>
    </section>
  );
}
