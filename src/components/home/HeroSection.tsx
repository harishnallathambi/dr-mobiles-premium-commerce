'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const conceptColors = [
    { name: 'Black Titanium', color: '#31353A' },
    { name: 'Silver Titanium', color: '#F2F1ED' },
    { name: 'Deep Blue', color: '#1B2A47' },
    { name: 'Desert Gold', color: '#D4AF37' }
  ];

  return (
    <section className="relative overflow-hidden bg-brand-bg pt-20 pb-32">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-section/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10">
        
        {/* Concept Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-sm font-semibold mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
          The Future is Here
        </motion.div>

        {/* Text Content */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-brand-text-primary mb-6"
        >
          iPhone 17 Pro Max
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-brand-text-secondary max-w-2xl mb-12"
        >
          A glimpse into the ultimate premium experience. Now available in four breathtaking titanium finishes.
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <Link
            href="/product/iph-17-pm"
            className="px-8 py-4 bg-brand-text-primary text-white rounded-full font-medium hover:bg-brand-accent transition-colors shadow-lg shadow-black/10 hover:shadow-brand-accent/20"
          >
            Pre-order Now
          </Link>
          <Link
            href="/shop"
            className="px-8 py-4 bg-white text-brand-text-primary rounded-full font-medium border border-brand-border hover:bg-brand-section transition-colors"
          >
            Explore All Models
          </Link>
        </motion.div>

        {/* Concept Images (4 Colors Floating) */}
        <div className="relative w-full max-w-5xl h-[400px] md:h-[600px] mx-auto perspective-[1000px]">
          {/* Main front device */}
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[320px] aspect-[1/2] z-40"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-full h-full relative"
            >
              <Image 
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop" 
                alt="iPhone 17 Pro Max Black"
                fill
                className="object-contain drop-shadow-2xl mix-blend-multiply"
              />
            </motion.div>
          </motion.div>

          {/* Left device 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute left-[10%] md:left-[20%] top-1/2 -translate-y-1/2 w-[160px] md:w-[260px] aspect-[1/2] z-30 opacity-80 blur-[1px]"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
              className="w-full h-full relative rotate-[-5deg]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop" 
                alt="iPhone 17 Pro Max Silver"
                fill
                className="object-contain mix-blend-overlay brightness-150"
              />
            </motion.div>
          </motion.div>

          {/* Right device 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 w-[160px] md:w-[260px] aspect-[1/2] z-30 opacity-80 blur-[1px]"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
              className="w-full h-full relative rotate-[5deg]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop" 
                alt="iPhone 17 Pro Max Gold"
                fill
                className="object-contain mix-blend-overlay sepia-[.3] hue-rotate-[320deg] brightness-110"
              />
            </motion.div>
          </motion.div>
          
          {/* Back Right device */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:block absolute right-[5%] top-1/2 -translate-y-1/2 w-[220px] aspect-[1/2] z-20 blur-[3px]"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1.5 }}
              className="w-full h-full relative rotate-[10deg]"
            >
              <Image 
                src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop" 
                alt="iPhone 17 Pro Max Blue"
                fill
                className="object-contain mix-blend-overlay hue-rotate-[200deg] brightness-75"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Color Indicators */}
        <div className="flex gap-6 mt-8 relative z-50">
          {conceptColors.map((color, idx) => (
            <motion.div 
              key={color.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + (idx * 0.1) }}
              className="flex flex-col items-center gap-2"
            >
              <span className="w-6 h-6 rounded-full shadow-inner border border-black/10" style={{ backgroundColor: color.color }} />
              <span className="text-xs text-brand-text-secondary font-medium">{color.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
