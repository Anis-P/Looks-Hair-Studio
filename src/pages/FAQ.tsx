import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const faqs = [
  { q: "Do I need to book an appointment?", a: "While we accept walk-ins based on availability, we highly recommend booking in advance to ensure your preferred stylist and time slot are secured. You can book via our website, WhatsApp, or by calling us directly." },
  { q: "What products do you use?", a: "We use only premium, international brands like L'Oréal Professional, Schwarzkopf, and specialized skin care lines to ensure the best results for our clients. We never compromise on product quality." },
  { q: "Where are you located exactly?", a: "We are located at Shop no. 11, ground floor, Govardhandas Building, plot -116, Jagannath Shankar Seth Rd, Charni Road East, Ambewadi, Girgaon, Mumbai, Maharashtra 400004." },
  { q: "Do you offer bridal packages?", a: "Yes, we have comprehensive bridal and pre-bridal packages that include makeup, hair styling, skin treatments, and more. Contact us for a personalized consultation and trial session." },
  { q: "What are your working hours?", a: "We are open every day from 10:00 AM to 09:00 PM, including weekends." },
  { q: "Do you have parking facilities?", a: "Street parking is available near the building. However, since it's a busy area in Mumbai, we recommend arriving a few minutes early." },
  { q: "Is the salon unisex?", a: "Yes, Looks Hair Studio is a fully equipped unisex salon with dedicated areas and experts for both men's grooming and women's beauty services." },
  { q: "What is your cancellation policy?", a: "We request a minimum of 4 hours notice for any cancellations or rescheduling. This allows us to offer the slot to other clients." }
];

export const FAQ = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Questions?</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">FREQUENTLY ASKED <span className="text-amber-500">QUESTIONS</span></h1>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden"
            >
              <summary className="list-none p-8 cursor-pointer flex justify-between items-center font-bold text-lg select-none">
                {faq.q}
                <span className="text-amber-500 group-open:rotate-180 transition-transform">
                  <ChevronRight />
                </span>
              </summary>
              <div className="px-8 pb-8 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </div>
  );
};
