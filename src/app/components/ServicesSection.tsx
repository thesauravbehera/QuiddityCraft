import { motion } from 'motion/react';
import { Brain, Sparkles, Film, Camera, Palette } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: 'Content Planning & Strategy',
      description:
        'Performance-driven content frameworks rooted in storytelling, psychology, and brand voice.',
    },
    {
      icon: Sparkles,
      title: 'AI Imagery & AI Videos',
      description:
        'Hyper-real visuals, AI commercials, and next-gen creatives powered by expert prompt engineering.',
    },
    {
      icon: Film,
      title: 'Video Editing',
      description:
        'High-impact edits with cinematic pacing, sound design, motion graphics, and retention-focused structure.',
    },
    {
      icon: Camera,
      title: 'Cinematography & Photo Editing',
      description:
        'From shoot to grade — premium visuals built for emotion, clarity, and conversion.',
    },
    {
      icon: Palette,
      title: 'Branding',
      description:
        'Visual identity, creative direction, and brand storytelling for the digital era.',
    },
  ];

  return (
    <section id="services" className="py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
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
            What I Do
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            Full-spectrum creative services powered by AI and human expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="mb-6">
                  <Icon className="w-10 h-10 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <h3
                  className="text-white mb-3"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '20px',
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-white/70"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                    lineHeight: '1.6',
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
