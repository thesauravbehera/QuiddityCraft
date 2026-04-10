import { motion } from 'motion/react';
import { Button } from './ui/button';

export function CTASection() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column: Typography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[#E0E7FF] text-sm uppercase tracking-widest font-bold mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Contact Us
            </p>
            <h2
              className="text-white text-6xl md:text-7xl lg:text-[5.5rem] font-black uppercase leading-[0.85] tracking-tighter"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Bring Us<br/>
              <span className="bg-gradient-to-r from-[#E0E7FF] via-[#E1534E] to-[#99222B] bg-clip-text text-transparent break-words">
                The Problem,
              </span>
              <br/>
              <span className="ml-[10%] md:ml-[20%]">We'll Bring</span><br/>
              <span className="ml-[10%] md:ml-[20%] bg-gradient-to-r from-[#E0E7FF] via-[#E1534E] to-[#99222B] bg-clip-text text-transparent break-words">
                The Clarity.
              </span>
            </h2>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0 bg-[#161616] p-8 md:p-12 border-t border-white/5 shadow-2xl"
          >
            <form className="flex flex-col space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-sm font-medium" style={{ fontFamily: 'Barlow, sans-serif' }}>Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[#A855F7] transition-colors rounded-none"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                />
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-white/60 text-sm font-medium" style={{ fontFamily: 'Barlow, sans-serif' }}>Phone</label>
                <input 
                  type="tel" 
                  placeholder="+91 0000000000" 
                  className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[#A855F7] transition-colors rounded-none"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                />
              </div>

              <div className="flex flex-col space-y-2 pb-6">
                <label className="text-white/60 text-sm font-medium" style={{ fontFamily: 'Barlow, sans-serif' }}>Tell us about your project</label>
                <textarea 
                  placeholder="Write here" 
                  rows={3}
                  className="bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/20 focus:outline-none focus:border-[#A855F7] transition-colors resize-none rounded-none"
                  style={{ fontFamily: 'Barlow, sans-serif' }}
                />
              </div>

              <Button
                type="submit"
                className="bg-[#A855F7] text-white hover:bg-[#7E22CE] rounded-none w-max px-10 py-6 text-sm font-bold tracking-widest uppercase transition-all"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                Send Your Brief
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center"
        >
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: 'Barlow, sans-serif' }}
          >
            © 2026 Vibividly. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm text-center" style={{ fontFamily: 'Barlow, sans-serif' }}>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
