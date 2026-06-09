'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';
import Image from 'next/image';

export default function OffersPage() {
  const discountedProducts = products.filter(p => p.discountPrice);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 py-10 bg-brand-section border-b border-brand-border rounded-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Premium Offers & Deals</h1>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">Limited-time mobile, accessory, and service deals.</p>
          </div>

          {/* Premium Banner */}
          <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 bg-brand-text-primary text-white flex items-center">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-text-primary to-transparent z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1200&auto=format&fit=crop" 
              alt="Premium Offers"
              fill
              className="object-cover opacity-50"
            />
            <div className="relative z-20 px-8 md:px-16 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">The Festival of Tech</h2>
              <p className="text-lg text-gray-300 mb-8">Save up to 30% on premium smartphones, tablets, and accessories. Limited time only.</p>
              <button className="px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-blue-600 transition-colors">
                Shop the Sale
              </button>
            </div>
          </div>

          {/* Deals Grid */}
          <h2 className="text-2xl font-bold tracking-tight mb-8">Featured Deals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
