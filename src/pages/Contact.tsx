import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">BOOK AN <span className="text-amber-500">APPOINTMENT</span></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Location</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Shop no. 11, ground floor, Govardhandas Building, plot -116, Jagannath Shankar Seth Rd, Charni Road East, Ambewadi, Girgaon, Mumbai, Maharashtra 400004
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Phone Number</h4>
                  <p className="text-gray-400 text-lg">+91 97187 60279</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Email Address</h4>
                  <p className="text-gray-400">info@lookshair-studio.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Working Hours</h4>
                  <p className="text-gray-400">Mon - Sun: 10:00 AM - 09:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-80 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.882193563919!2d72.8183!3d18.9515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce1800000001%3A0x0!2zMTjCsDU3JzA1LjQiTiA3MsKwNDknMDUuOCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-900 p-10 rounded-[2.5rem] border border-white/5"
          >
            <form action="https://formspree.io/f/your-id" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-amber-500 outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-amber-500 outline-none transition-colors"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-amber-500 outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Select Service</label>
                <select
                  name="service"
                  className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-amber-500 outline-none transition-colors appearance-none"
                >
                  <option>Haircut & Styling</option>
                  <option>Hair Coloring</option>
                  <option>Beard Grooming</option>
                  <option>Skin Treatment</option>
                  <option>Bridal Makeup</option>
                  <option>Party Makeup</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full bg-black border border-white/10 rounded-xl px-6 py-4 focus:border-amber-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 text-black font-bold uppercase tracking-[0.2em] py-5 rounded-xl hover:bg-amber-400 transition-all flex items-center justify-center gap-3 group"
              >
                Send Request <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
