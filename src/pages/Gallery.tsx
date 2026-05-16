import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800", title: "Salon Interior", category: "Ambiance" },
  { url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800", title: "Hair Styling", category: "Women" },
  { url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800", title: "Beard Grooming", category: "Men" },
  { url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800", title: "Makeup Session", category: "Bridal" },
  { url: "https://images.unsplash.com/photo-1595475243695-4d4895c65ac1?auto=format&fit=crop&q=80&w=800", title: "Hair Color", category: "Women" },
  { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=800", title: "Barber Skills", category: "Men" },
  { url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800", title: "Skin Care", category: "Treatment" },
  { url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=800", title: "Hair Spa", category: "Wellness" },
  { url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", title: "Bridal Glow", category: "Bridal" },
];

export const Gallery = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">THE <span className="text-amber-500">GALLERY</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                <span className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
