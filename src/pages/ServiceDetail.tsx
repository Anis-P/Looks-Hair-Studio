import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Scissors, CheckCircle2, ChevronRight, Clock, Star } from 'lucide-react';

const serviceData: Record<string, any> = {
  'men': {
    title: "Men's Grooming",
    hero: "/src/assets/images/men-grooming.jpg",
    desc: "Luxury grooming services tailored for the modern gentleman. From precision haircuts to traditional hot towel shaves.",
    features: ["Precision Haircuts", "Beard Sculpting", "Luxury Shaves", "Men's Facials", "Scalp Massage"],
    pricing: [
      { name: "Executive Haircut", price: "₹500" },
      { name: "Beard Trim & Shape", price: "₹300" },
      { name: "Royal Shave", price: "₹450" },
      { name: "Head Massage (20 min)", price: "₹400" },
      { name: "Men's Glow Facial", price: "₹1500" }
    ]
  },
  'women': {
    title: "Women's Beauty",
    hero: "/src/assets/images/women-beauty.jpg",
    desc: "Experience the ultimate in beauty and relaxation. Our expert stylists create looks that reflect your personality.",
    features: ["Creative Hair Styling", "Advanced Coloring", "Smoothing Treatments", "Premium Facials", "Nail Art"],
    pricing: [
      { name: "Style Transformation", price: "₹800+" },
      { name: "Global Hair Color", price: "₹2500+" },
      { name: "Keratin Treatment", price: "₹4500+" },
      { name: "Hydra Facial", price: "₹3500" },
      { name: "Bridal Consultation", price: "Free" }
    ]
  },
  'hair': {
    title: "Hair Styling",
    hero: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200",
    desc: "Masterful hair styling for every occasion. Whether it's a casual look or a red-carpet event, we've got you covered.",
    features: ["Blow Dry & Volume", "Occasion Styling", "Updos & Buns", "Braiding", "Hair Extensions"],
    pricing: [
      { name: "Blow Dry Classic", price: "₹400" },
      { name: "Party Hairdo", price: "₹1200" },
      { name: "Bridal Bun", price: "₹2500" },
      { name: "Ironing/Curling", price: "₹600" }
    ]
  },
  'beard': {
    title: "Beard Styling",
    hero: "/src/assets/images/beard-styling.jpg",
    desc: "Your beard is your pride. Our experts provide the precision and care needed to keep it looking sharp and healthy.",
    features: ["Line-up & Fade", "Beard Conditioning", "Hot Towel Finish", "Mustache Grooming", "Beard Color"],
    pricing: [
      { name: "Beard Line-up", price: "₹200" },
      { name: "Full Beard Sculpting", price: "₹350" },
      { name: "Beard Spa Treatment", price: "₹600" },
      { name: "Grey Coverage", price: "₹400" }
    ]
  },
  'skin': {
    title: "Skin Care",
    hero: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200",
    desc: "Revitalize your skin with our premium treatments designed to cleanse, hydrate, and restore your natural glow.",
    features: ["Deep Cleansing", "Anti-Aging Facials", "De-tan Treatments", "Skin Brightening", "Acne Care"],
    pricing: [
      { name: "Clean Up", price: "₹800" },
      { name: "Premium Gold Facial", price: "₹2500" },
      { name: "O3+ Treatment", price: "₹3500" },
      { name: "Under Eye Treatment", price: "₹1200" }
    ]
  },
  'bridal': {
    title: "Bridal Makeup",
    hero: "/src/assets/images/bridal-makeup-2.jpg",
    desc: "Walk down the aisle with confidence. Our bridal specialists create timeless looks that make you feel like royalty.",
    features: ["HD Makeup", "Airbrush Makeup", "Saree/Dupatta Draping", "Hair Ornamentation", "Trial Session"],
    pricing: [
      { name: "Bridal HD Makeup", price: "₹15000" },
      { name: "Engagement Look", price: "₹8000" },
      { name: "Sangeet/Reception", price: "₹10000" },
      { name: "Bridesmaid Makeup", price: "₹3500" }
    ]
  }
};

export const ServiceDetail = () => {
  const { category } = useParams();
  const data = serviceData[category || 'men'] || serviceData['men'];

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.hero} alt={data.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4"
          >
            {data.title.split(' ')[0]} <span className="text-amber-500">{data.title.split(' ').slice(1).join(' ')}</span>
          </motion.h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">{data.desc}</p>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Scissors className="text-amber-500" /> Key Highlights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {data.features.map((f: string, i: number) => (
                <div key={i} className="flex items-center gap-4 bg-neutral-900 p-6 rounded-2xl border border-white/5">
                  <CheckCircle2 className="text-amber-500 shrink-0" size={20} />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-amber-500 rounded-3xl text-black">
              <h3 className="text-2xl font-bold mb-4">Book Your Slot</h3>
              <p className="mb-8 font-medium">Experience the best {data.title.toLowerCase()} in Mumbai. Our experts are ready for you.</p>
              <Link to="/contact" className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all">
                Book Now
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Service Menu</h2>
            <div className="space-y-6">
              {data.pricing.map((item: any, i: number) => (
                <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-lg font-medium">{item.name}</span>
                  </div>
                  <span className="text-amber-500 font-bold">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex items-center gap-6 p-6 border border-white/10 rounded-2xl">
              <Clock className="text-amber-500" size={32} />
              <div>
                <h4 className="font-bold">Average Duration</h4>
                <p className="text-gray-400 text-sm">Most sessions take between 45 to 90 minutes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
