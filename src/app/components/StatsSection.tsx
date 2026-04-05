import { motion } from 'motion/react';
import { Eye, Calendar, Award, Users } from 'lucide-react';

export function StatsSection() {
  const stats = [
    {
      icon: Eye,
      value: '100M+',
      label: 'Views Generated',
    },
    {
      icon: Calendar,
      value: '3+',
      label: 'Years Experience',
    },
    {
      icon: Award,
      value: '50+',
      label: 'Projects Completed',
    },
    {
      icon: Users,
      value: '20+',
      label: 'Happy Clients',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-black border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-4">
                    <Icon className="w-6 h-6 text-white/80" />
                  </div>
                </div>
                <div
                  className="text-white mb-2"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: 'clamp(32px, 4vw, 48px)',
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/60"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
