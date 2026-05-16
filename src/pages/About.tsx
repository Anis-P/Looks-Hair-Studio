import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              CRAFTING <span className="text-amber-500">BEAUTY</span> SINCE 2021
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Founded by Armaan Salmani, Looks Hair Studio has quickly become a beacon of style and luxury in Charni Road, Mumbai. With over 3 years of hands-on experience, our studio is dedicated to the art of grooming.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              We believe that every individual deserves a personalized grooming experience. Our team of skilled professionals uses only the finest international products to ensure that your hair and skin receive the care they deserve.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-500">
                  <Award size={24} />
                  <span className="font-bold text-white uppercase tracking-widest text-xs">Expertise</span>
                </div>
                <p className="text-gray-500 text-sm">Certified master stylists with global training.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-amber-500">
                  <Users size={24} />
                  <span className="font-bold text-white uppercase tracking-widest text-xs">Community</span>
                </div>
                <p className="text-gray-500 text-sm">Serving thousands of happy clients in Mumbai.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1599351431247-f10b218163e3?auto=format&fit=crop&q=80&w=800"
                alt="Our Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-amber-500 text-black p-10 rounded-[2.5rem] shadow-2xl">
              <div className="text-5xl font-black mb-1">3+</div>
              <div className="text-xs font-bold uppercase tracking-widest">Years of Excellence</div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-neutral-900 rounded-[4rem] p-12 md:p-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">OUR CORE VALUES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision", desc: "Every cut and treatment is executed with meticulous attention to detail." },
              { title: "Luxury", desc: "A premium environment designed for your comfort and relaxation." },
              { title: "Integrity", desc: "Honest consultations and use of only genuine, high-quality products." }
            ].map((value, i) => (
              <div key={i} className="text-center space-y-6">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-amber-500 mx-auto border border-white/5">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
