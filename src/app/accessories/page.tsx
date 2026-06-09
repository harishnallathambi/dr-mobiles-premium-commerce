'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function AccessoriesPage() {
  const categoryProducts = products.filter(p => p.category === 'Accessory');
  const [sortBy, setSortBy] = useState('featured');

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0; // featured
  });

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-brand-section py-20 border-b border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Premium Accessories</h1>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
              Chargers, cases, power banks, cables, screen protectors, and MagSafe essentials.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-brand-text-secondary" />
              <span className="font-medium">Filter</span>
              <div className="flex gap-2 ml-4">
                <span className="px-4 py-1.5 bg-brand-accent/10 text-brand-accent rounded-full text-sm font-medium cursor-pointer">All</span>
                <span className="px-4 py-1.5 border border-brand-border rounded-full text-sm font-medium cursor-pointer hover:bg-brand-section">Cases</span>
              </div>
            </div>

            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-brand-border rounded-lg pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-brand-accent text-sm font-medium cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-brand-text-secondary pointer-events-none" />
            </div>
          </div>

          {/* Product Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl border border-brand-border">
              <h3 className="text-xl font-semibold mb-2">No Accessories found</h3>
              <p className="text-brand-text-secondary">We couldn&apos;t find any products in this category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
