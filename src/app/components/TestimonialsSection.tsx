import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Sahil's ability to blend AI with creative storytelling is unmatched. He delivered a campaign that not only looked stunning but drove real results.",
      author: 'Marketing Director',
      company: 'BetterAlt',
    },
    {
      quote:
        'Working with Sahil was a game-changer for our brand. His understanding of visual narrative and attention to detail brought our vision to life.',
      author: 'Creative Lead',
      company: 'AKIKI',
    },
    {
      quote:
        'The level of professionalism and creativity Sahil brings is rare. Every frame is crafted with purpose and every edit drives engagement.',
      author: 'Brand Manager',
      company: 'Lavie World',
    },
  ];

  return (
    <section id="testimonial" className="py-32 bg-transparent border-t border-white/5">
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
              textShadow: '0 0 40px rgba(255,255,255,0.2)'
            }}
          >
            Commendations from the Fleet
          </h2>
          <p
            className="text-white/60 max-w-2xl mx-auto"
            style={{
              fontFamily: 'Barlow, sans-serif',
              fontSize: '18px',
            }}
          >
            Incoming Transmissions from our allies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-white/20 mb-6" />
              <p
                className="text-white/80 mb-6"
                style={{
                  fontFamily: 'Barlow, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.8',
                  fontStyle: 'italic',
                }}
              >
                "{testimonial.quote}"
              </p>
              <div>
                <p
                  className="text-white font-medium"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '16px',
                  }}
                >
                  {testimonial.author}
                </p>
                <p
                  className="text-white/60"
                  style={{
                    fontFamily: 'Barlow, sans-serif',
                    fontSize: '14px',
                  }}
                >
                  {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
