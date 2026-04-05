import { motion } from 'motion/react';
import { TvMinimal, MapPin, Eye, Award } from 'lucide-react';

export function TVCAchievements() {
  const achievements = [
    {
      icon: TvMinimal,
      value: 'USA Broadcast',
      label: 'National Television',
    },
    {
      icon: MapPin,
      value: 'Times Square',
      label: 'NYC Billboard',
    },
    {
      icon: Eye,
      value: '100M+',
      label: 'Total Views',
    },
    {
      icon: Award,
      value: 'AI-Powered',
      label: 'Production',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div
                  className="text-white mb-1"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: 'clamp(18px, 2vw, 24px)',
                    fontWeight: 700,
                  }}
                >
                  {achievement.value}
                </div>
                <div
                  className="text-white/60"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  {achievement.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
