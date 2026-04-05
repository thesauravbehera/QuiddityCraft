import { Outlet } from 'react-router';
import { Preloader } from '../components/Preloader';
import { Navigation } from '../components/Navigation';
import { AmbientBackground } from '../components/AmbientBackground';
import { ScrollToTop } from '../components/ScrollToTop';

export function Layout() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#060608]">
      <Preloader />
      <AmbientBackground />
      {/* Route Content Area */}
      <main className="w-full relative z-10 flex flex-col min-h-screen">
        <Outlet />
      </main>
      
      <Navigation />
      
      <ScrollToTop />
    </div>
  );
}
