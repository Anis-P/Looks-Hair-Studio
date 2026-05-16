import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: "Summer Hair Care Tips for Mumbai Humidity",
    excerpt: "Learn how to protect your hair from the intense Mumbai humidity with these expert tips from Armaan Salmani.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800",
    date: "May 15, 2024",
    author: "Looks Editorial"
  },
  {
    title: "The Ultimate Guide to Beard Maintenance",
    excerpt: "Everything you need to know about keeping your beard sharp, clean, and healthy between salon visits.",
    image: "/src/assets/images/beard-styling.jpg",
    date: "June 02, 2024",
    author: "Armaan Salmani"
  },
  {
    title: "Bridal Trends: 2024 Makeup & Hair Looks",
    excerpt: "Discover the most sought-after bridal looks for the upcoming wedding season in India.",
    image: "/src/assets/images/bridal-makeup-2.jpg",
    date: "June 10, 2024",
    author: "Looks Editorial"
  }
];

export const Blog = () => {
  return (
    <div className="bg-black text-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-amber-500 font-bold tracking-widest uppercase text-sm block mb-4">Our Blog</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">STYLE <span className="text-amber-500">INSIGHTS</span></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-500 transition-colors">{post.title}</h3>
                <p className="text-gray-400 mb-8 line-clamp-3">{post.excerpt}</p>
                <Link to="#" className="inline-flex items-center gap-2 text-amber-500 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
                  Read More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
