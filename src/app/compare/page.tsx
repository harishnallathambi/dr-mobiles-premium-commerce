'use client';


import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useStore } from '@/store/useStore';
import { Scale, X, ShoppingBag, Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { formatINR } from '@/lib/utils';

export default function ComparePage() {
  const { compare: compareItems, removeFromCompare, clearCompare, addToCart } = useStore();

  const specRows = [
    { label: 'Brand', key: 'brand' },
    { label: 'Category', key: 'category' },
    { label: 'Price', key: 'price', format: (v: number) => formatINR(v) },
    { label: 'Display', key: 'specs.display' },
    { label: 'Processor', key: 'specs.processor' },
    { label: 'Camera', key: 'specs.camera' },
    { label: 'Battery', key: 'specs.battery' },
    { label: 'Rating', key: 'rating', format: (v: number) => `${v} / 5.0` },
  ];

  // Helper to safely access nested object properties
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getNestedValue = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-brand-accent" />
              <h1 className="text-3xl font-bold tracking-tight">Compare Products</h1>
            </div>
            {compareItems.length > 0 && (
              <button onClick={clearCompare} className="text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary">
                Clear All
              </button>
            )}
          </div>

          {compareItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-brand-section rounded-3xl border border-brand-border">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
                <Scale className="w-10 h-10 text-brand-text-secondary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Nothing to compare</h2>
              <p className="text-brand-text-secondary mb-8">Add up to 4 products to compare their features side-by-side.</p>
              <Link href="/shop" className="px-8 py-4 bg-brand-text-primary text-white rounded-xl font-medium hover:bg-brand-accent transition-colors">
                Browse Products
              </Link>
            </div>
          ) : (

          <div className="overflow-x-auto pb-8 hide-scrollbar">
            <div className="min-w-[800px]">
              
              {/* Table Header (Products) */}
              <div className="grid grid-cols-4 gap-6 mb-8">
                <div className="col-span-1 pt-8">
                  <h3 className="font-semibold text-xl mb-2">Find the perfect device.</h3>
                  <p className="text-sm text-brand-text-secondary">Compare features, specifications, and prices side-by-side.</p>
                </div>
                
                {compareItems.map((product) => (
                  <div key={product.id} className="col-span-1 relative bg-brand-card p-6 rounded-3xl border border-brand-border flex flex-col items-center text-center group">
                    <button 
                      onClick={() => removeFromCompare(product.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-brand-section/50 text-brand-text-secondary hover:text-red-500 hover:bg-white transition-all z-10"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    
                    <div className="w-32 h-32 mb-6">
                      <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 p-2" />
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-xl font-bold mb-4">{formatINR(product.price)}</p>
                    
                    <button 
                      onClick={() => addToCart({ product, quantity: 1 })}
                      className="w-full mt-auto bg-brand-text-primary text-white py-3 rounded-xl font-medium hover:bg-brand-accent transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>
                ))}

                {compareItems.length < 3 && (
                  <div className="col-span-1 bg-brand-section rounded-3xl border border-brand-border border-dashed flex flex-col items-center justify-center min-h-[300px]">
                    <Link href="/shop" className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-text-secondary hover:text-brand-accent hover:shadow-md transition-all mb-4">
                      <Plus className="w-8 h-8" />
                    </Link>
                    <span className="font-medium text-brand-text-secondary">Add Product</span>
                  </div>
                )}
              </div>

              {/* Table Body (Specs) */}
              <div className="bg-white rounded-3xl border border-brand-border overflow-hidden">
                {specRows.map((row, index) => (
                  <div key={row.key} className={`grid grid-cols-4 gap-6 p-6 ${index % 2 === 0 ? 'bg-brand-section/30' : 'bg-white'} border-b border-brand-border last:border-b-0`}>
                    <div className="col-span-1 font-semibold text-brand-text-primary flex items-center">
                      {row.label}
                    </div>
                    {compareItems.map(product => {
                      const value = getNestedValue(product, row.key);
                      const displayValue = value ? (row.format ? row.format(value) : value) : '--';
                      
                      return (
                        <div key={`${product.id}-${row.key}`} className="col-span-1 text-sm text-brand-text-secondary flex items-center justify-center text-center">
                          {displayValue}
                        </div>
                      );
                    })}
                    {compareItems.length < 3 && <div className="col-span-1"></div>}
                  </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
