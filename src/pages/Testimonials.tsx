import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: "Rahul Sharma", role: "Entrepreneur", content: "The best grooming experience I've had in Mumbai. Armaan really knows his craft. Highly recommended for men's haircuts!", rating: 5 },
  { name: "Priya Patel", role: "Marketing Professional", content: "I got my bridal makeup done here and it was flawless. They really listen to what you want. The ambiance is so luxurious.", rating: 5 },
  { name: "Aniket Gupta", role: "Actor", content: "Professional, clean, and stylish. The skin treatments are top-notch. My go-to place for every shoot preparation.", rating: 5 },
  { name: "Sneha Kapoor", role: "Fashion Designer", content: "Excellent service! The hair spa treatment was so relaxing. My hair feels much healthier now.", rating: 5 },
  { name: "Vikram Singh", role: "Business Owner", content: "Great attention to detail. The beard styling is precise and the hot towel shave is a must-try.", rating: 4 },
  { name: "Megha Desai", role: "Doctor", content: "Clean, hygienic, and very professional. The staff is courteous and the results are always consistent.", rating: 5 }
];

export const Testimonials = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Testimonials</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">CLIENT <span className="text-amber-500">STORIES</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-neutral-900 p-10 rounded-3xl border border-white/5 relative group hover:border-amber-500/30 transition-all"
            >
              <Quote className="text-amber-500/20 absolute top-8 right-8" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(testi.rating)].map((_, i) => <Star key={i} size={16} className="fill-amber-500 text-amber-500" />)}
              </div>
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{testi.content}"</p>
              <div>
                <h4 className="font-bold text-lg">{testi.name}</h4>
                <p className="text-amber-500 text-sm uppercase tracking-widest">{testi.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
