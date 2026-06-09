'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // If no multiple images, just show the main one
  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-square w-full bg-white rounded-3xl border border-brand-border overflow-hidden p-8 flex items-center justify-center">
        <div className="text-brand-text-secondary text-sm">No images available</div>
      </div>
    );
  }

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full bg-white rounded-3xl border border-brand-border overflow-hidden p-8 flex items-center justify-center group">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image 
              src={images[currentIndex]} 
              alt={`${productName} - View ${currentIndex + 1}`}
              fill
              className="object-contain mix-blend-multiply drop-shadow-xl"
            />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button 
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md border border-brand-border rounded-full flex items-center justify-center text-brand-text-secondary hover:text-brand-text-primary hover:scale-105 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md border border-brand-border rounded-full flex items-center justify-center text-brand-text-secondary hover:text-brand-text-primary hover:scale-105 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        <button 
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur border border-brand-border rounded-lg text-brand-text-secondary hover:text-brand-text-primary transition-colors opacity-0 group-hover:opacity-100"
        >
          <Expand className="w-4 h-4" />
        </button>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
          {images.map((img, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`relative w-20 h-20 rounded-xl bg-white border flex-shrink-0 p-2 transition-all ${
                currentIndex === idx 
                  ? 'border-brand-accent shadow-sm' 
                  : 'border-brand-border opacity-60 hover:opacity-100 hover:border-gray-300'
              }`}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-contain mix-blend-multiply"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Modal (Simplified) */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-5xl aspect-square md:aspect-video flex items-center justify-center">
              <Image 
                src={images[currentIndex]} 
                alt={productName}
                fill
                className="object-contain"
              />
              <button 
                onClick={(e) => { e.stopPropagation(); setIsFullscreen(false); }}
                className="absolute top-4 right-4 px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
