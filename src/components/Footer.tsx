import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <Scissors className="text-black w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">
              LOOKS <span className="text-amber-500">STUDIO</span>
            </span>
          </Link>
          <p className="text-gray-400 leading-relaxed">
            Experience the pinnacle of grooming and beauty at Looks Hair Studio. Our expert stylists bring 3+ years of excellence to Mumbai's elite.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing Plan</Link></li>
            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Our Blog</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest">Services</h4>
          <ul className="space-y-4">
            <li><Link to="/services/men" className="text-gray-400 hover:text-white transition-colors">Men's Grooming</Link></li>
            <li><Link to="/services/women" className="text-gray-400 hover:text-white transition-colors">Women's Beauty</Link></li>
            <li><Link to="/services/hair" className="text-gray-400 hover:text-white transition-colors">Hair Styling</Link></li>
            <li><Link to="/services/skin" className="text-gray-400 hover:text-white transition-colors">Skin Care</Link></li>
            <li><Link to="/services/bridal" className="text-gray-400 hover:text-white transition-colors">Bridal Makeup</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-amber-500 uppercase tracking-widest">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-amber-500 shrink-0" size={20} />
              <span className="text-gray-400">Shop no. 11, Govardhandas Bldg, Charni Road East, Mumbai - 400004</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-amber-500 shrink-0" size={20} />
              <span className="text-gray-400">+91 97187 60279</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-amber-500 shrink-0" size={20} />
              <span className="text-gray-400">info@lookshair-studio.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Looks Hair Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};
