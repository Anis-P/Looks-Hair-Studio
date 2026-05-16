import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 px-4 py-4',
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Scissors className="text-black w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white">
            LOOKS <span className="text-amber-500">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest transition-colors hover:text-amber-500',
                location.pathname === link.path ? 'text-amber-500' : 'text-gray-300'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-amber-500 text-black px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-amber-400 transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold uppercase tracking-widest text-white hover:text-amber-500"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="bg-amber-500 text-black px-10 py-4 rounded-full font-bold uppercase text-sm tracking-widest"
        >
          Book Appointment
        </Link>
      </div>
    </nav>
  );
};
