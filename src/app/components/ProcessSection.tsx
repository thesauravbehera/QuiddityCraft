import { motion } from 'motion/react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Define the Essence',
      description: "We align on your brand's core identity, aesthetic goals, and unique beauty.",
    },
    {
      number: '02',
      title: 'Artisan Crafting',
      description: 'We sculpt and refine your visual narrative, bringing your concepts to vibrant life.',
    },
    {
      number: '03',
      title: 'Radiant Delivery',
      description: 'You receive flawless, breathtaking assets that captivate and resonate.',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="w-12 h-px bg-white/20" />
             <span className="text-xs tracking-[0.2em] text-white/50 uppercase font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>
               Process
             </span>
             <div className="w-12 h-px bg-white/20" />
          </div>
          
          <h2
            className="text-white mb-4 capitalize drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(36px, 8vw, 84px)',
              lineHeight: '1.0',
            }}
          >
            Aesthetic Workflow
          </h2>
          <p
            className="text-white/80 max-w-2xl mx-auto font-medium"
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '22px',
            }}
          >
            A meticulous progression cultivating your core essence.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 hover:border-white/30 hover:bg-white/5 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Ambient Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div
                className="text-white/20 group-hover:text-white/60 transition-colors drop-shadow-lg"
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(48px, 10vw, 96px)',
                  fontWeight: 900,
                  lineHeight: '1',
                }}
              >
                {step.number}
              </div>
              <div className="flex-1 md:pt-4">
                <h3
                  className="text-white mb-2 md:mb-3 capitalize font-black text-2xl md:text-5xl tracking-tight group-hover:text-white transition-colors"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/70 font-medium text-base md:text-lg max-w-xl group-hover:text-white/90 transition-colors"
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    lineHeight: '1.6',
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
