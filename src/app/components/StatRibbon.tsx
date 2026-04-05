import { motion } from 'motion/react';

export function StatRibbon() {
  return (
    <div className="w-full flex justify-center mt-[-30px] relative z-40">
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-white/10 blur-xl rounded-full" />
        <div className="relative px-8 py-3 bg-[#e6e6e6] rounded-[40px] shadow-[0_4px_30px_rgba(0,0,0,0.5)] border border-white/20 flex items-center justify-center">
          <span 
            className="text-black font-semibold text-sm sm:text-base tracking-wide flex items-center gap-3"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="text-xl">🎬</span>
            National TVC • Times Square • 100M+ Views
          </span>
        </div>
      </motion.div>
    </div>
  );
}
