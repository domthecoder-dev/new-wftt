import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavProps {
  scrollTo: (id: string) => void;
  active: string;
}

export default function Nav({ scrollTo, active }: NavProps) {
  const [open, setOpen] = useState(false);
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'signup', label: 'Sign Up' },
    { id: 'packages', label: 'Packages' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-beige-50/95 backdrop-blur-sm z-50 border-b border-olive-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 text-olive-700 hover:opacity-80 transition-opacity"
            aria-label="Go to homepage"
          >
            <img
              src="/assets/wildandfree-rec.svg"   // ← Your logo file
              alt="Loading"
              className="
              h-[90px]
              w-auto"
              loading="lazy"
            />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {items.map((i) => (
              <button
                key={i.id}
                onClick={() => scrollTo(i.id)}
                className={`capitalize transition-colors hover:text-maroon-600 ${active === i.id ? 'text-maroon-600' : 'text-olive-700'
                  }`}
              >
                {i.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-olive-700"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-beige-50 border-t border-olive-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((i) => (
              <button
                key={i.id}
                onClick={() => {
                  scrollTo(i.id);
                  setOpen(false);
                }}
                className="block w-full text-left px-3 py-2 capitalize text-olive-700 hover:text-maroon-600 hover:bg-olive-100 rounded-md"
              >
                {i.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}