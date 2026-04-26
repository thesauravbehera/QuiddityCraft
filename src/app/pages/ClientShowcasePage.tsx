import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function ClientShowcasePage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {"theme":"dark"});
    })();
  }, []);

  // REPLACE THESE URLS WITH YOUR ACTUAL IMAGE LINKS!
  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2564&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2564&auto=format&fit=crop",
  ]; 

  return (
    <main className="min-h-screen bg-[#02000A] text-white pt-48 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-white/50 text-sm font-bold uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Exclusive Preview</p>
          <h1 className="text-6xl md:text-8xl font-black capitalize tracking-tight mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>
            100pops <br/> Collection
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-xl" style={{ fontFamily: 'Outfit, sans-serif' }}>
            A curated selection of hyper-real generative visuals developed exclusively for your brand's digital footprint.
          </p>
        </motion.div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] bg-black/50"
            >
              <img src={src} alt={`Visual Concept ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <p className="text-white font-bold text-lg tracking-wider uppercase" style={{ fontFamily: 'Outfit, sans-serif' }}>Asset 0{i + 1}</p>
                 <p className="text-white/60 text-sm">Quiddity Craft AI Production</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Embedded Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[3rem] text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Ready to Scale These Visuals?</h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>Let's discuss how we can integrate these assets into a performance-driven campaign structure to dominate your market.</p>
          <Button 
            data-cal-namespace=""
            data-cal-link="quidditycraft"
            data-cal-config='{"layout":"month_view"}'
            className="flex bg-white text-black hover:bg-neutral-200 h-auto rounded-[16px] px-10 py-5 text-xl font-bold items-center gap-4 transition-transform hover:scale-105 active:scale-95 shadow-xl mx-auto"
          >
            Book Strategy Call
            <div className="rounded-full bg-black/10 flex items-center justify-center w-8 h-8">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Button>
        </motion.div>

      </div>
    </main>
  );
}
