import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ImageBreaker from './components/ImageBreaker';
import About from './components/About';
import SignUp from './components/SignUp';
import Packages from './components/Packages';
import RequiredApps from './components/RequiredApps';
import Contact from './components/Contact.jsx';

export default function App() {
  const [active, setActive] = useState('home');

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Highlight active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'signup', 'packages', 'contact'];
    const handler = () => {
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(sec);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <Nav scrollTo={scrollTo} active={active} />
      <Hero scrollTo={scrollTo} />
      <ImageBreaker />
      <main>
        <section className="py-20 bg-beige-50 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="mt-6 text-lg text-olive-700 leading-relaxed">
              While our focus is <span className="font-bold text-maroon-600">SAFETY</span>, we cannot guarantee
              protection. We provide trusted location sharing so someone always knows where to look if needed.
            </p>
            <p className="mt-6 text-lg text-olive-700 leading-relaxed">
              We rely on the information you share. We are not a security company—we don’t track or spy. We’re
              your neutral check-in point for peace of mind.
            </p>
          </div>
        </section>

        <About />
        <SignUp />
        <Packages />
        <RequiredApps />
        <Contact />
      </main>

      <footer className="bg-olive-800 text-beige-100 py-[5px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* LOGOS ROW – no extra margin */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Wild & Free Logo – Left (unchanged) */}
            <img
              src="/assets/wildandfree-rec.svg"
              alt="Wild & Free Travel Tribe Logo"
              className="
          h-[1050px] w-[1050px]
          md:h-[175px] md:w-[275px]
          sm:h-[120px] sm:w-[120px]
          xs:h-[100px] xs:w-[100px]
          object-contain
        "
              loading="lazy"
            />

            {/* TTSSP Logo – Right (unchanged) */}
            <img
              src="/assets/TTSSP.svg"
              alt="TTSSP Logo"
              className="
          h-[1050px] w-[1050px]
          md:h-[175px] md:w-[175px]
          sm:h-[120px] sm:w-[120px]
          xs:h-[100px] xs:w-[100px]
          object-contain
        "
              loading="lazy"
            />
          </div>

          {/* TEXT BELOW – tight spacing */}
          <div className="text-center text-xs mt-2">
            <p>© 2025 Wild and Free Travel Tribe</p>
            <p className="opacity-80">Created by D E Innovative Solutions</p>
          </div>

        </div>
      </footer>
    </>
  );
}