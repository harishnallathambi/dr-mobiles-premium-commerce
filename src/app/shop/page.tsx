'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FilterSidebar from '@/components/product/FilterSidebar';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { SlidersHorizontal, ChevronDown, Grid, List as ListIcon } from 'lucide-react';


export default function ShopPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'All' | 'iPhone' | 'Android'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products.filter(p => {
    if (activeTab === 'All') return p.category === 'iPhone' || p.category === 'Android';
    return p.category === activeTab;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 bg-brand-section pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Tabs */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight mb-6">Shop Smartphones</h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border pb-4">
              <div className="flex space-x-6">
                {['All', 'iPhone', 'Android'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as 'All' | 'iPhone' | 'Android')}
                    className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors relative top-[17px] ${
                      activeTab === tab 
                        ? 'border-brand-accent text-brand-text-primary' 
                        : 'border-transparent text-brand-text-secondary hover:text-brand-text-primary'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="md:hidden flex items-center space-x-2 text-sm font-medium bg-white px-4 py-2 rounded-full border border-brand-border"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Filters</span>
                </button>
                
                <div className="hidden sm:flex items-center space-x-2 bg-white rounded-lg p-1 border border-brand-border">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-brand-section text-brand-text-primary' : 'text-brand-text-secondary hover:text-brand-text-primary'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-1.5 rounded-md ${viewMode === 'list' ? 'bg-brand-section text-brand-text-primary' : 'text-brand-text-secondary hover:text-brand-text-primary'}`}
                  >
                    <ListIcon className="w-4 h-4" />
                  </button>
                </div>

                <div className="relative">
                  <select className="appearance-none bg-white border border-brand-border rounded-full py-2 pl-4 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-accent">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Highest Rated</option>
                    <option>Newest Arrivals</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-brand-text-secondary pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            <FilterSidebar 
              isMobile={false} 
            />
            <FilterSidebar 
              isMobile={true} 
              isOpen={isMobileFilterOpen} 
              onClose={() => setIsMobileFilterOpen(false)} 
            />
            
            {/* Product Grid */}
            <div className="flex-1">
              <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
