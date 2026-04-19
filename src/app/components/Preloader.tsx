import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import '../../styles/loader.css';

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide the loader after standard wait time for the video/canvas to load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#060608]"
        >
          {/* Z4drus Orbit Loader matches the Space Theme perfectly */}
          <div className="loader">
            <div className="loader__inner"></div>
            <div className="loader__orbit">
              <div className="loader__dot"></div>
              <div className="loader__dot"></div>
              <div className="loader__dot"></div>
              <div className="loader__dot"></div>
            </div>
          </div>
          
          <div className="absolute bottom-20 text-white/50 tracking-[0.3em] lowercase text-xs animate-pulse" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Initiating Space...
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
