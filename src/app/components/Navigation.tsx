import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation } from 'react-router';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out pointer-events-none ${
          scrolled ? 'w-[98%] md:w-[80%] max-w-5xl mt-2' : 'w-full max-w-7xl pt-4'
        }`}
      >
        <div
          className={`px-12 py-8 flex flex-wrap items-center justify-between transition-all duration-500 rounded-[32px] pointer-events-auto ${
            scrolled 
              ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">QUIDDITY CRAFT</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-2xl font-black transition-colors relative group ${
                  location.pathname === link.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-white text-black hover:bg-neutral-200 rounded-[16px] px-12 py-6 h-auto text-2xl font-bold items-center gap-5 transition-transform hover:scale-105 active:scale-95 shadow-xl">
            Book a Call
            <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6" />
            </div>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[#02000A]/95 backdrop-blur-2xl pt-28 px-6 pb-6 flex flex-col pointer-events-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                 <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-black text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
                  style={{ fontFamily: 'Outfit, sans-serif' }}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-white text-black hover:bg-neutral-200 rounded-[8px] px-6 py-4 flex items-center justify-center gap-2 mt-4 w-full shadow-xl">
                Book a Call
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
