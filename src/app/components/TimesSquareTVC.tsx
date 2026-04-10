import { motion } from 'motion/react';

export function TimesSquareTVC() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#060608] flex items-center justify-center border-t border-b border-white/10">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/Kaboom 14th Sept(Time Square).webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        />
        {/* Darkness Overlay mapped against the neon Times Square lights */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/80 via-transparent to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="inline-block"
        >
          {/* Eyebrow Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/30" />
            <p className="text-white/80 text-xs sm:text-sm uppercase tracking-[0.4em] font-medium" style={{ fontFamily: 'Barlow, sans-serif' }}>
              Global Milestone
            </p>
            <div className="w-12 h-[1px] bg-white/30" />
          </div>

          {/* Core Typography */}
          <h2 
            className="text-white leading-[0.9] tracking-tighter"
            style={{ 
              fontSize: 'clamp(50px, 8vw, 130px)', 
              fontFamily: 'Instrument Serif, serif',
              textShadow: '0 0 40px rgba(255,255,255,0.4), 0 0 80px rgba(100,150,255,0.2)'
            }}
          >
            Featured On <br />
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white/70">
              Times Square
            </span>
          </h2>

          {/* Subtext */}
          <p 
            className="mt-8 text-white/60 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl font-light"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            The Kaboom showcase took over the heart of New York City, demonstrating the unprecedented scale of artificial intelligence in mass broadcast advertising.
          </p>

        </motion.div>
      </div>

      {/* Decorative corner brackets or borders to make it feel premium */}
      <div className="absolute top-12 left-12 w-[10px] h-[10px] border-t-2 border-l-2 border-white/40" />
      <div className="absolute top-12 right-12 w-[10px] h-[10px] border-t-2 border-r-2 border-white/40" />
      <div className="absolute bottom-12 left-12 w-[10px] h-[10px] border-b-2 border-l-2 border-white/40" />
      <div className="absolute bottom-12 right-12 w-[10px] h-[10px] border-b-2 border-r-2 border-white/40" />

    </section>
  );
}
