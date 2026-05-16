import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, User, Heart, Star, Clock } from 'lucide-react';

const serviceCategories = [
  {
    title: "Men's Grooming",
    icon: <User className="w-8 h-8" />,
    services: [
      { name: "Signature Haircut", price: "₹500+", desc: "Precision cut with styling consultation" },
      { name: "Beard Styling & Trim", price: "₹300+", desc: "Classic razor finish or modern trim" },
      { name: "Luxury Shave", price: "₹400+", desc: "Hot towel treatment with premium oils" },
      { name: "Men's Facial", price: "₹1200+", desc: "Deep cleansing and skin rejuvenation" },
      { name: "Hair Spa & Massage", price: "₹800+", desc: "Relaxing treatment for hair health" },
      { name: "Hair Coloring", price: "₹1000+", desc: "Global color or grey coverage" }
    ]
  },
  {
    title: "Women's Beauty",
    icon: <Heart className="w-8 h-8" />,
    services: [
      { name: "Creative Haircut", price: "₹800+", desc: "Style transformation by master stylists" },
      { name: "Hair Smoothening", price: "₹4000+", desc: "Long-lasting frizz-free treatment" },
      { name: "Global Hair Color", price: "₹2500+", desc: "Premium ammonia-free coloring" },
      { name: "Keratin Treatment", price: "₹5000+", desc: "Advanced protein hair restoration" },
      { name: "Luxury Facial", price: "₹2000+", desc: "Skin-specific premium treatments" },
      { name: "Nail Art & Extensions", price: "₹1500+", desc: "Custom designs and extensions" }
    ]
  },
  {
    title: "Bridal & Special Occasions",
    icon: <Sparkles className="w-8 h-8" />,
    services: [
      { name: "Bridal Makeup", price: "₹15000+", desc: "Complete high-definition bridal look" },
      { name: "Party Makeup", price: "₹3500+", desc: "Glamorous look for any occasion" },
      { name: "Engagement Makeup", price: "₹8000+", desc: "Elegant and radiant styling" },
      { name: "Saree Draping", price: "₹500+", desc: "Professional draping in various styles" },
      { name: "Hair Styling (Updo)", price: "₹1200+", desc: "Intricate buns or braided styles" }
    ]
  }
];

export const Services = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4"
          >
            Our Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter"
          >
            PREMIUM <span className="text-amber-500">SERVICES</span>
          </motion.h1>
        </div>

        <div className="space-y-32">
          {serviceCategories.map((category, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                <div className="text-amber-500">{category.icon}</div>
                <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, sidx) => (
                  <motion.div
                    key={sidx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: sidx * 0.1 }}
                    className="group bg-neutral-900 p-8 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors">{service.name}</h3>
                      <span className="text-amber-500 font-bold">{service.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-widest">
                      <Clock size={14} /> 45 - 90 Mins
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
