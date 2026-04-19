export function SectionSpacer() {
  return (
    <div className="w-full py-32 flex items-center justify-center relative bg-transparent z-20 overflow-hidden">
      {/* Decorative Gradient Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40 pointer-events-none" />
      
      {/* Cool horizontal divider line */}
      <div className="w-full overflow-hidden flex items-center gap-8 px-6 relative z-10 opacity-50">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        <span 
          className="text-white text-xs sm:text-sm tracking-[0.6em] lowercase whitespace-nowrap" 
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Visual Engineering
        </span>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white to-transparent shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
      </div>
    </div>
  );
}
