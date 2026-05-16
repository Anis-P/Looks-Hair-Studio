import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Star, Clock, MapPin, Phone, CheckCircle2, ChevronRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Men's Grooming",
    desc: "Precision haircuts, beard styling, and luxury facials designed for the modern man.",
    image: "/src/assets/images/men-grooming.jpg",
    link: "/services/men"
  },
  {
    title: "Women's Beauty",
    desc: "Expert hair styling, coloring, and premium skin treatments for a radiant look.",
    image: "/src/assets/images/women-beauty.jpg",
    link: "/services/women"
  },
  {
    title: "Bridal & Party",
    desc: "Transformative makeup and hair styling for your most special occasions.",
    image: "https://images.unsplash.com/photo-1620932900622-68c47ba2cd9a?auto=format&fit=crop&q=80&w=800",
    link: "/services/bridal"
  }
];

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Happy Clients', value: '5000+' },
  { label: 'Expert Stylists', value: '10+' },
  { label: 'Service Types', value: '50+' },
];

export const Home = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero-bg.jpg"
            alt="Luxury Salon"
            className="w-full h-full object-cover opacity-60 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
              Premium Unisex Salon in Mumbai
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
              REDEFINE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">LUXURY STYLE</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
              Experience the art of grooming with Looks Hair Studio. Where tradition meets modern aesthetics in the heart of Mumbai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-amber-500 text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-amber-400 transition-all hover:scale-105"
              >
                Book Appointment
              </Link>
              <Link
                to="/services"
                className="border border-white/30 backdrop-blur-sm px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-black/50 border border-white/5"
              >
                <div className="text-4xl md:text-5xl font-black text-amber-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">PREMIUM SERVICES</h2>
            </div>
            <Link to="/services" className="text-amber-500 flex items-center gap-2 font-bold uppercase tracking-widest hover:gap-4 transition-all">
              View All Services <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-3xl aspect-[3/4]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.desc}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center justify-center w-12 h-12 bg-amber-500 rounded-full text-black -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <ChevronRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-neutral-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Why Looks Studio</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                WHERE STYLE MEETS <br />
                <span className="text-amber-500 italic">PERFECTION</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                At Looks Hair Studio, we believe that your hair is your crown. Our team of expert stylists, led by Armaan Salmani, is dedicated to providing a personalized experience that leaves you feeling confident and revitalized.
              </p>
              
              <div className="space-y-6">
                {[
                  'Expert Stylists with 3+ Years Experience',
                  'Premium International Hair & Skin Products',
                  'Hygienic & Luxurious Environment',
                  'Personalized Grooming Consultations',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000"
                  alt="Salon Experience"
                  className="w-full"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Transformations</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">THE MAGIC TOUCH</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-[2rem] aspect-video border border-white/10">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full relative border-r-2 border-amber-500/50">
                    <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" alt="Before" />
                    <div className="absolute top-4 left-4 bg-black/80 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Before</div>
                  </div>
                  <div className="w-1/2 h-full relative">
                    <img src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="After" />
                    <div className="absolute top-4 right-4 bg-amber-500 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">After</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold">Premium Hair Coloring</h4>
                <p className="text-gray-500 text-sm">Global Highlight & Deep Conditioning</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative group overflow-hidden rounded-[2rem] aspect-video border border-white/10">
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 h-full relative border-r-2 border-amber-500/50">
                    <img src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale" alt="Before" />
                    <div className="absolute top-4 left-4 bg-black/80 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Before</div>
                  </div>
                  <div className="w-1/2 h-full relative">
                    <img src="/src/assets/images/beard-styling.jpg" className="w-full h-full object-cover" alt="After" />
                    <div className="absolute top-4 right-4 bg-amber-500 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">After</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold">Beard Sculpting</h4>
                <p className="text-gray-500 text-sm">Precision Trim & Hot Towel Finish</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-20">CLIENT VOICES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Entrepreneur",
                content: "The best grooming experience I've had in Mumbai. Armaan really knows his craft. Highly recommended for men's haircuts!",
              },
              {
                name: "Priya Patel",
                role: "Marketing Professional",
                content: "I got my bridal makeup done here and it was flawless. They really listen to what you want. The ambiance is so luxurious.",
              },
              {
                name: "Aniket Gupta",
                role: "Actor",
                content: "Professional, clean, and stylish. The skin treatments are top-notch. My go-to place for every shoot preparation.",
              }
            ].map((testi, i) => (
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
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-500 text-amber-500" />)}
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
      </section>

      {/* Pricing Preview */}
      <section className="py-32 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4 block">Our Pricing</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">FAIR & TRANSPARENT</h2>
            </div>
            <Link to="/pricing" className="text-amber-500 flex items-center gap-2 font-bold uppercase tracking-widest hover:gap-4 transition-all">
              Full Price List <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8">
            {[
              { name: "Men's Haircut", price: "₹500" },
              { name: "Beard Styling", price: "₹300" },
              { name: "Women's Styling", price: "₹800" },
              { name: "Global Hair Color", price: "₹2500" },
              { name: "Luxury Hair Spa", price: "₹1200" },
              { name: "Bridal Makeup", price: "₹15000" },
              { name: "Keratin Treatment", price: "₹4000" },
              { name: "Premium Facial", price: "₹2000" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-white/10 pb-4 group">
                <span className="text-lg font-medium group-hover:text-amber-500 transition-colors">{item.name}</span>
                <div className="flex-grow mx-4 border-b border-dotted border-white/20"></div>
                <span className="text-amber-500 font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">FAQ</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">COMMON QUESTIONS</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "Do I need to book an appointment?", a: "While we accept walk-ins based on availability, we highly recommend booking in advance to ensure your preferred stylist and time slot are secured." },
              { q: "What products do you use?", a: "We use only premium, international brands like L'Oréal Professional, Schwarzkopf, and specialized skin care lines to ensure the best results for our clients." },
              { q: "Where are you located exactly?", a: "We are located at Shop no. 11, Govardhandas Building, Charni Road East, Mumbai. You can find our exact location on the Google Map in our contact section." },
              { q: "Do you offer bridal packages?", a: "Yes, we have comprehensive bridal and pre-bridal packages that include makeup, hair styling, skin treatments, and more. Contact us for a personalized consultation." }
            ].map((faq, i) => (
              <details key={i} className="group bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden">
                <summary className="list-none p-8 cursor-pointer flex justify-between items-center font-bold text-lg select-none">
                  {faq.q}
                  <span className="text-amber-500 group-open:rotate-180 transition-transform">
                    <ChevronRight />
                  </span>
                </summary>
                <div className="px-8 pb-8 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-[3rem] p-12 md:p-20 text-black text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 relative z-10">READY FOR A <br />TRANSFORMATION?</h2>
            <p className="text-black/80 text-lg mb-10 max-w-xl mx-auto font-medium relative z-10">
              Book your slot today and experience the premium luxury of Looks Hair Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="https://wa.me/919718760279"
                className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all"
              >
                Chat on WhatsApp
              </a>
              <Link
                to="/contact"
                className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
