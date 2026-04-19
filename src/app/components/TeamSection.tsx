import { motion } from 'motion/react';

export function TeamSection() {
  const coreTeam = [
    {
      name: "ved sanap",
      role: "OPERATIONS",
      desc: "turns chaos into systems",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop&grayscale=true"
    },
    {
      name: "aaryan saiyed",
      role: "BUILDER EXPERIENCE",
      desc: "keeps founders unblocked",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop&grayscale=true"
    },
    {
      name: "hridya jejurkar",
      role: "COMMUNITY",
      desc: "holds culture and accountability",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop&grayscale=true"
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
          <div className="text-white/40 text-xs lowercase tracking-widest font-sans mb-8">THE PEOPLE</div>
          <h2
            className="text-white mb-6"
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontSize: 'clamp(48px, 6vw, 80px)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
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
          <div className="w-full md:w-2/5 aspect-[3/4] relative rounded-xl overflow-hidden shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop&grayscale=true" 
              alt="Sahil Shaikh"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            />
          </div>
          <div className="flex-1 text-left">
            <div className="text-white/40 text-[11px] lowercase tracking-[0.2em] font-sans mb-4">FOUNDER</div>
            <h3 
              className="text-white mb-4" 
              style={{ fontFamily: 'Instrument Serif, serif', fontSize: 'clamp(48px, 5vw, 64px)', lineHeight: '1' }}
            >
              sahil shaikh
            </h3>
            <p className="text-white/50 text-[11px] lowercase tracking-[0.2em] font-sans mb-8 leading-relaxed">
              STARTED QUIDDITY CRAFT TO BUILD THE ROOM HE WISHED EXISTED
            </p>
            <div className="space-y-6 text-white/80 font-sans text-base md:text-lg" style={{ lineHeight: '1.7' }}>
              <p>
                quiddity craft started with one stubborn belief: exceptional storytelling does better in an environment that demands execution, not performance.
              </p>
              <p>
                sahil built that environment by designing for pressure, accountability, and velocity so brands leave with real outcomes—with light-years of experience navigating the digital cosmos and 100M+ views generated.
              </p>
              <p className="text-[#00ffff] italic font-serif text-xl" style={{ fontFamily: 'Instrument Serif, serif', textShadow: '0 0 20px rgba(0,255,255,0.4)', letterSpacing: '0.05em' }}>
                Forging cosmic visuals that resonate beyond the stratosphere.
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
          <div className="text-white/40 text-[11px] lowercase tracking-[0.2em] font-sans mb-4">CORE TEAM</div>
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
                    style={{ fontFamily: 'Instrument Serif, serif', fontSize: '32px' }}
                  >
                    {member.name}
                  </h4>
                  <p className="text-white/40 text-[10px] lowercase tracking-[0.2em] font-sans mb-3">
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
