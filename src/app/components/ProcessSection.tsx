import { motion } from 'motion/react';

export function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Define Your Vision',
      description: 'We align on goals, audience, and creative direction.',
    },
    {
      number: '02',
      title: 'Submit Your Request',
      description: 'You share your brief — I map and execute the creative flow.',
    },
    {
      number: '03',
      title: 'Project Delivered',
      description: 'You receive polished, performance-ready content — on time and on brand.',
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
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: 'Instrument Serif, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: '1.3',
            }}
          >
            How It Works
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            A simple, streamlined process from concept to completion
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
              className="group flex items-start gap-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div
                className="text-white/20 group-hover:text-white/40 transition-colors"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: 'clamp(48px, 5vw, 72px)',
                  fontWeight: 700,
                  lineHeight: '1',
                }}
              >
                {step.number}
              </div>
              <div className="flex-1 pt-4">
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '24px',
                    fontWeight: 600,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '18px',
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
