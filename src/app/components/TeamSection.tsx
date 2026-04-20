import { motion } from 'motion/react';

export function TeamSection() {
  const coreTeam = [
    {
      name: "Nakul Pacholi",
      role: "HEAD OF OPERATIONS & BUSINESS",
      image: "/images/Nakul.webp"
    },
    {
      name: "Saurav Behera",
      role: "HEAD OF CREATIVES",
      image: "/images/saurv.webp"
    },
    {
      name: "Rishiabhishek Sharma",
      role: "HEAD OF SALES",
      image: "/images/Rishi.webp"
    }
  ];

  return (
    <section id="team" className="py-32 bg-[#02000A]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Segment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-white/40 text-xs lowercase tracking-tight font-sans mb-8">THE PEOPLE</div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: '1.1',
              letterSpacing: '-0.05em',
            }}
          >
            the team behind quiddity craft.
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-sans" style={{ lineHeight: '1.6' }}>
            this is not a committee. it's a small, opinionated crew building a high-pressure environment where founders can do their best work.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-white/10 rounded-[2rem] p-6 md:p-12 mb-32 bg-[#050510] flex flex-col md:flex-row gap-10 md:gap-16 items-center"
        >
          <div className="w-full md:w-2/5 aspect-[3/4] relative rounded-xl overflow-hidden shrink-0 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
            <img 
              src="/images/Sahil-Color.webp" 
              alt="Sahil Shaikh"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="flex-1 text-left">
            <div className="text-white/40 text-[11px] lowercase tracking-tight font-sans mb-4">FOUNDER - CREATIVE DIRECTOR</div>
            <h3 
              className="text-white mb-4 uppercase" 
              style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(48px, 5vw, 64px)', lineHeight: '1', fontWeight: 900 }}
            >
              Sahil
            </h3>
            <p className="text-white/50 text-[11px] uppercase tracking-widest font-bold mb-8 leading-relaxed" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Architect of Digital Domination
            </p>
            <div className="space-y-6 text-white/80 text-base md:text-lg" style={{ lineHeight: '1.7', fontFamily: 'Outfit, sans-serif' }}>
              <p>
                Quiddity Craft was built on a single, uncompromising principle: exceptional storytelling demands violent execution, not passive observation.
              </p>
              <p>
                With over 100M+ views engineered across global campaigns, Sahil architected this agency to operate purely on pressure, extreme accountability, and visual velocity. We don't just make things look good—we build systems that convert attention into equity.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-white/40 text-[11px] lowercase tracking-tight font-sans mb-4">CORE TEAM</div>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-12 font-sans leading-relaxed">
            each person owns a critical part of the founder journey, from execution infrastructure to how the story gets seen by the world.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {coreTeam.map((member, i) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + (i * 0.1) }}
                className="flex flex-col group"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] mb-5">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h4 
                    className="text-white mb-2" 
                    style={{ fontFamily: 'Outfit, sans-serif', fontSize: '32px' }}
                  >
                    {member.name}
                  </h4>
                  <p className="text-white/40 text-[10px] lowercase tracking-tight font-sans mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/60 text-sm font-sans">
                    {member.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
