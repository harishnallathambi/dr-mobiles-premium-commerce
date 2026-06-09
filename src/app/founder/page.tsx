'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { User, Phone, MapPin, Mail, Clock, Map, MessageCircle, ShieldCheck, HeartHandshake, Wrench, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FounderPage() {
  const [imageError, setImageError] = useState(false);

  const values = [
    { icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />, title: "Genuine Products", desc: "100% authentic devices and accessories." },
    { icon: <HeartHandshake className="w-8 h-8 text-brand-accent" />, title: "Customer Trust", desc: "Building long-term relationships based on honesty." },
    { icon: <Wrench className="w-8 h-8 text-brand-accent" />, title: "Premium Service", desc: "Expert repairs with top-quality parts." },
    { icon: <Zap className="w-8 h-8 text-brand-accent" />, title: "Fast Support", desc: "Quick resolutions to get you back on track." }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Meet the Founder
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-text-secondary max-w-2xl mx-auto"
          >
            The vision behind DR MOBILES — building a trusted premium mobile and service experience.
          </motion.p>
        </section>

        {/* Founder Profile Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden bg-brand-section shadow-2xl flex items-center justify-center border border-brand-border/50">
                {imageError ? (
                  <User className="w-32 h-32 text-brand-text-secondary opacity-50" />
                ) : (
                  <Image 
                    src="/images/founder.jpg" 
                    alt="Founder, DR MOBILES" 
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <div className="inline-block px-4 py-1.5 bg-brand-section rounded-full text-sm font-semibold mb-6 self-start text-brand-text-primary">
                Founder, DR MOBILES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                [ADD FOUNDER NAME HERE]
              </h2>
              <p className="text-xl leading-relaxed text-brand-text-secondary mb-8">
                “Focused on delivering genuine smartphones, reliable accessories, and trusted mobile service with a premium customer-first experience.”
              </p>
              
              <div className="bg-brand-card p-8 rounded-3xl border border-brand-border/50 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Our Story</h3>
                <p className="text-brand-text-secondary leading-relaxed">
                  DR MOBILES was built with one simple vision: to make mobile shopping and service more trustworthy, premium, and customer-friendly. From iPhones and Android flagships to accessories and repair support, our goal is to give every customer a smooth, transparent, and reliable experience.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-brand-section border-y border-brand-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-brand-border/50 hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-brand-bg rounded-2xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-brand-text-secondary">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
            <p className="text-brand-text-secondary">We&apos;re always here to help you with your mobile needs.</p>
          </div>

          <div className="bg-brand-card rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-brand-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-brand-section flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-brand-text-secondary leading-relaxed">[ADD SHOP ADDRESS HERE]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-brand-section flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Working Hours</h4>
                    <p className="text-brand-text-secondary leading-relaxed">[ADD WORKING HOURS HERE]</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-brand-section flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Contact</h4>
                    <p className="text-brand-text-secondary">[ADD CONTACT NUMBER HERE]</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 w-12 h-12 rounded-full bg-brand-section flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-brand-text-secondary">[ADD EMAIL ADDRESS HERE]</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-brand-border/50 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="flex items-center justify-center gap-2 py-4 rounded-xl font-medium bg-brand-text-primary text-white hover:bg-brand-accent transition-colors"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a 
                href="https://wa.me/91XXXXXXXXXX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-xl font-medium bg-[#25D366] text-white hover:bg-[#1DA851] transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a 
                href="[ADD GOOGLE MAPS LINK HERE]" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 rounded-xl font-medium border border-brand-border/50 bg-white hover:bg-brand-section transition-colors text-brand-text-primary"
              >
                <Map className="w-4 h-4" /> Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
