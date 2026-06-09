'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, X, SlidersHorizontal } from 'lucide-react';

interface FilterProps {
  onFilterChange?: (filters: Record<string, string[]>) => void;
  isMobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export default function FilterSidebar({ isMobile, isOpen, onClose }: FilterProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    brand: true,
    price: true,
    ram: false,
    storage: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const filterSections = [
    {
      id: 'brand',
      title: 'Brand',
      options: ['Apple', 'Samsung', 'Google', 'OnePlus', 'Vivo', 'Oppo', 'Xiaomi', 'Nothing']
    },
    {
      id: 'price',
      title: 'Price Range',
      options: ['Under $500', '$500 - $800', '$800 - $1000', 'Over $1000']
    },
    {
      id: 'storage',
      title: 'Storage',
      options: ['128GB', '256GB', '512GB', '1TB']
    },
    {
      id: 'features',
      title: 'Features',
      options: ['Fast Delivery', 'In Stock', 'EMI Available']
    }
  ];

  const content = (
    <div className="flex flex-col h-full bg-brand-bg md:bg-transparent">
      {isMobile && (
        <div className="flex justify-between items-center p-4 border-b border-brand-border bg-brand-section sticky top-0 z-10">
          <div className="flex items-center space-x-2">
            <SlidersHorizontal className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-brand-bg rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
      
      <div className="flex-1 overflow-y-auto p-4 md:p-0">
        {filterSections.map((section) => (
          <div key={section.id} className="mb-6 border-b border-brand-border pb-6 last:border-0">
            <button 
              onClick={() => toggleSection(section.id)}
              className="flex justify-between items-center w-full text-left font-medium text-brand-text-primary mb-3 hover:text-brand-accent transition-colors"
            >
              {section.title}
              {expandedSections[section.id] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            
            <AnimatePresence>
              {expandedSections[section.id] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden space-y-2"
                >
                  {section.options.map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-brand-border rounded-[4px] flex items-center justify-center group-hover:border-brand-accent transition-colors">
                        {/* Selected state can be added here later */}
                      </div>
                      <span className="text-sm text-brand-text-secondary group-hover:text-brand-text-primary transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="p-4 border-t border-brand-border bg-brand-section sticky bottom-0 z-10 flex gap-4">
          <button className="flex-1 py-3 bg-white border border-brand-border rounded-xl font-medium text-brand-text-primary hover:bg-gray-50 transition-colors">
            Clear All
          </button>
          <button onClick={onClose} className="flex-1 py-3 bg-brand-text-primary text-white rounded-xl font-medium hover:bg-brand-accent transition-colors">
            Apply Filters
          </button>
        </div>
      )}
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/40 z-50 md:hidden backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-x-0 bottom-0 h-[85vh] bg-brand-bg rounded-t-3xl z-50 overflow-hidden md:hidden shadow-[0_-8px_30px_rgb(0,0,0,0.12)]"
            >
              {content}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className="hidden md:block w-64 flex-shrink-0">
      <div className="sticky top-24">
        <div className="flex items-center space-x-2 mb-6">
          <SlidersHorizontal className="w-5 h-5" />
          <h2 className="text-lg font-semibold">Filters</h2>
        </div>
        {content}
      </div>
    </div>
  );
}
