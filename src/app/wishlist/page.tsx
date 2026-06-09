'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import { Heart, Trash2, ShoppingBag, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { formatINR } from '@/lib/utils';

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    products[2], // iPhone 15
    products[5], // Galaxy S24 Ultra
  ]);

  const removeItem = (id: string) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-10">
            <Heart className="w-8 h-8 text-brand-accent fill-current" />
            <h1 className="text-3xl font-bold tracking-tight">Your Wishlist</h1>
            <span className="bg-brand-section text-brand-text-primary text-sm font-semibold px-3 py-1 rounded-full ml-2">
              {wishlistItems.length} Items
            </span>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-brand-section rounded-3xl border border-brand-border">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-brand-text-secondary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your wishlist is empty</h2>
              <p className="text-brand-text-secondary mb-8">Save items you love to view them later.</p>
              <Link href="/shop" className="px-8 py-4 bg-brand-text-primary text-white rounded-xl font-medium hover:bg-brand-accent transition-colors">
                Discover Products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((product) => (
                <div key={product.id} className="flex flex-col bg-brand-card rounded-2xl overflow-hidden border border-brand-border/50 group">
                  <div className="relative aspect-square p-6 bg-brand-bg flex items-center justify-center">
                    <button 
                      onClick={() => removeItem(product.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-brand-section/50 text-brand-text-secondary hover:text-red-500 hover:bg-white transition-all z-10"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                    
                    {product.discountPrice && (
                      <div className="absolute top-4 left-4 bg-red-50 text-red-600 text-xs font-semibold px-2 py-1 rounded flex items-center gap-1 z-10">
                        <ArrowDown className="w-3 h-3" /> Price Drop
                      </div>
                    )}

                    <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                      <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply p-6 group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <Link href={`/product/${product.id}`} className="hover:text-brand-accent transition-colors">
                        <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
                      </Link>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className="text-sm text-brand-text-secondary">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div>
                        {product.discountPrice ? (
                          <div className="flex flex-col">
                            <span className="text-lg font-bold">{formatINR(product.discountPrice)}</span>
                            <span className="text-sm text-brand-text-secondary line-through">{formatINR(product.price)}</span>
                          </div>
                        ) : (
                          <span className="text-lg font-bold">{formatINR(product.price)}</span>
                        )}
                      </div>
                      
                      <button 
                        disabled={!product.inStock}
                        className={`flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors ${
                          product.inStock 
                            ? 'bg-brand-text-primary text-white hover:bg-brand-accent' 
                            : 'bg-brand-section text-brand-text-secondary cursor-not-allowed'
                        }`}
                      >
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Move to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
