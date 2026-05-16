import React from 'react';
import { motion } from 'framer-motion';
import { Check, Scissors, Sparkles, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingPlans = [
  {
    name: "Classic Grooming",
    price: "999",
    target: "Perfect for routine maintenance",
    icon: <User className="w-8 h-8" />,
    features: ["Haircut & Styling", "Classic Beard Trim", "Refreshing Hair Wash", "Professional Consultation"],
    button: "Book Classic",
    highlight: false
  },
  {
    name: "Luxury Experience",
    price: "2499",
    target: "Our most popular premium package",
    icon: <Scissors className="w-8 h-8" />,
    features: ["Signature Haircut", "Luxury Hot Towel Shave", "Premium Hair Spa", "Deep Cleansing Facial", "Head Massage (15 mins)"],
    button: "Book Luxury",
    highlight: true
  },
  {
    name: "Royal Transformation",
    price: "4999",
    target: "The ultimate salon experience",
    icon: <Sparkles className="w-8 h-8" />,
    features: ["Creative Styling", "Advanced Skin Treatment", "Hair Strengthening Spa", "De-tan & Glow Pack", "Hand & Foot Massage"],
    button: "Book Royal",
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Pricing Plans</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">CHOOSE YOUR <span className="text-amber-500">STYLE</span></h1>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Experience premium luxury at competitive prices. We offer a range of packages tailored to your specific grooming and beauty needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${
                plan.highlight 
                ? 'bg-gradient-to-b from-amber-500/10 to-amber-500/5 border-amber-500 shadow-[0_0_50px_rgba(245,158,11,0.1)]' 
                : 'bg-neutral-900 border-white/5 hover:border-white/20'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-black px-6 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="text-amber-500 mb-6">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm mb-8">{plan.target}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black">₹{plan.price}</span>
                <span className="text-gray-500 text-sm">/ session</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-amber-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center py-4 rounded-2xl font-bold uppercase tracking-widest transition-all ${
                  plan.highlight
                  ? 'bg-amber-500 text-black hover:bg-amber-400'
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {plan.button}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-neutral-900 rounded-[3rem] p-12 text-center border border-white/5">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
          <p className="text-gray-400 mb-8">We offer specialized packages for weddings, groups, and corporate events.</p>
          <Link to="/contact" className="text-amber-500 font-bold uppercase tracking-widest border-b-2 border-amber-500 pb-1 hover:text-amber-400 hover:border-amber-400 transition-all">
            Inquire Now
          </Link>
        </div>
      </div>
    </div>
  );
};
