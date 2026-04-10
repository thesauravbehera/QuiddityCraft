import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
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
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          scrolled ? 'w-[98%] md:w-[80%] max-w-5xl mt-2' : 'w-[100%] max-w-7xl pt-4'
        }`}
      >
        <div
          className={`px-6 py-4 flex flex-wrap items-center justify-between transition-all duration-500 rounded-[16px] ${
            scrolled 
              ? 'bg-[#060608]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <span className="text-2xl font-bold text-white tracking-widest drop-shadow-md">VIBIVIDLY</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === link.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-white transition-all duration-300 ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-white text-black hover:bg-white/90 rounded-[8px] px-6 py-2 items-center gap-2 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Book A Free Meeting
            <div className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3" />
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
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-[#060608]/90 backdrop-blur-xl border border-white/10 rounded-[16px] shadow-2xl z-40 p-6 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
               <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white/70 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
                style={{ fontFamily: 'Barlow, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-white text-black hover:bg-white/90 rounded-[8px] px-6 py-4 flex items-center justify-center gap-2 mt-4 shadow-lg w-full">
              Book A Free Meeting
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}
