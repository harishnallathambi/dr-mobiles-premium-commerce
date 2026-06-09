'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';
import { Heart, Scale, Shield, Truck, RotateCcw, Star, PlayCircle, Box, Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';

// Using a mock params for Next.js 15 app router compatibility in client components
export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const product = products.find(p => p.id === resolvedParams.slug) || products[0];
  
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const [selectedStorage, setSelectedStorage] = useState(product.storageOptions?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [activeMedia, setActiveMedia] = useState('image'); // image, video, 360

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const boughtTogether = products.filter(p => p.category === 'Accessory').slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="text-sm text-brand-text-secondary mb-8">
            <Link href="/" className="hover:text-brand-text-primary">Home</Link> &rsaquo; 
            <Link href="/shop" className="hover:text-brand-text-primary mx-2">Shop</Link> &rsaquo; 
            <Link href={`/category/${product.category.toLowerCase()}`} className="hover:text-brand-text-primary mx-2">{product.category}</Link> &rsaquo; 
            <span className="text-brand-text-primary mx-2">{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            {/* Left: Gallery */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="relative aspect-square bg-brand-section rounded-3xl overflow-hidden flex items-center justify-center border border-brand-border p-8">
                {activeMedia === 'image' && (
                  <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply p-8" />
                )}
                {activeMedia === 'video' && (
                  <div className="flex flex-col items-center justify-center text-brand-text-secondary">
                    <PlayCircle className="w-16 h-16 mb-4 opacity-50" />
                    <p>Product Video Placeholder</p>
                  </div>
                )}
                {activeMedia === '360' && (
                  <div className="flex flex-col items-center justify-center text-brand-text-secondary">
                    <Box className="w-16 h-16 mb-4 opacity-50" />
                    <p>Interactive 360° View Placeholder</p>
                  </div>
                )}
              </div>
              
              <div className="flex gap-4 overflow-x-auto hide-scrollbar">
                <button 
                  onClick={() => setActiveMedia('image')}
                  className={`w-20 h-20 rounded-xl bg-brand-section border-2 flex items-center justify-center p-2 flex-shrink-0 ${activeMedia === 'image' ? 'border-brand-accent' : 'border-transparent'}`}
                >
                  <Image src={product.image} alt="Thumbnail" fill className="object-contain mix-blend-multiply p-1" />
                </button>
                <button 
                  onClick={() => setActiveMedia('video')}
                  className={`w-20 h-20 rounded-xl bg-brand-section border-2 flex items-center justify-center text-brand-text-secondary flex-shrink-0 ${activeMedia === 'video' ? 'border-brand-accent text-brand-accent' : 'border-transparent'}`}
                >
                  <PlayCircle className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setActiveMedia('360')}
                  className={`w-20 h-20 rounded-xl bg-brand-section border-2 flex items-center justify-center text-brand-text-secondary flex-shrink-0 ${activeMedia === '360' ? 'border-brand-accent text-brand-accent' : 'border-transparent'}`}
                >
                  <Box className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Right: Details */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <div className="mb-2 flex items-center gap-2 text-sm text-brand-text-secondary">
                <span className="bg-brand-section px-2 py-1 rounded text-brand-text-primary font-semibold">{product.brand}</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating} <span className="text-brand-text-secondary font-normal">({product.reviews} reviews)</span></span>
              </div>

              <div className="flex items-end gap-4 mb-8">
                {product.discountPrice ? (
                  <>
                    <span className="text-4xl font-bold tracking-tight">${product.discountPrice.toFixed(2)}</span>
                    <span className="text-xl text-brand-text-secondary line-through mb-1">${product.price.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-4xl font-bold tracking-tight">${product.price.toFixed(2)}</span>
                )}
              </div>

              {/* Color Selector */}
              {product.colors && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3">Color</h3>
                  <div className="flex gap-3">
                    {product.colors.map(color => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${selectedColor === color ? 'border-brand-accent scale-110' : 'border-brand-border'}`}
                      >
                        <span className="w-8 h-8 rounded-full border border-black/10" style={{ backgroundColor: color }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Storage Selector */}
              {product.storageOptions && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold mb-3">Storage</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {product.storageOptions.map(storage => (
                      <button
                        key={storage}
                        onClick={() => setSelectedStorage(storage)}
                        className={`py-3 rounded-xl border font-medium text-sm transition-colors ${
                          selectedStorage === storage 
                            ? 'border-brand-accent bg-brand-accent/5 text-brand-accent' 
                            : 'border-brand-border bg-white text-brand-text-primary hover:border-gray-400'
                        }`}
                      >
                        {storage}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center border border-brand-border rounded-xl bg-white p-1 w-32">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center hover:bg-brand-section rounded-lg">-</button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center hover:bg-brand-section rounded-lg">+</button>
                </div>
                
                <button className="flex-1 bg-brand-text-primary text-white py-4 rounded-xl font-medium hover:bg-brand-accent transition-colors">
                  Add to Cart
                </button>
                <button className="flex-1 bg-white border border-brand-border text-brand-text-primary py-4 rounded-xl font-medium hover:bg-brand-section transition-colors">
                  Buy Now
                </button>
              </div>

              <div className="flex items-center gap-6 mb-8 border-b border-brand-border pb-8">
                <button className="flex items-center gap-2 text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                  <Heart className="w-4 h-4" /> Add to Wishlist
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                  <Scale className="w-4 h-4" /> Compare
                </button>
              </div>

              {/* Delivery & Services */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Truck className="w-5 h-5 text-brand-text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold">Free Delivery</h4>
                    <p className="text-sm text-brand-text-secondary">Expected delivery by {product.deliveryEstimate}</p>
                    <div className="mt-2 flex gap-2">
                      <input type="text" placeholder="Enter Pincode" className="border border-brand-border rounded-md px-3 py-1.5 text-sm w-32 focus:ring-1 focus:ring-brand-accent focus:outline-none" />
                      <button className="text-sm font-medium text-brand-accent">Check</button>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="w-5 h-5 text-brand-text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold">1 Year Warranty</h4>
                    <p className="text-sm text-brand-text-secondary">Brand warranty on device and 6 months on accessories.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <RotateCcw className="w-5 h-5 text-brand-text-secondary mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold">14 Days Replacement</h4>
                    <p className="text-sm text-brand-text-secondary">Easy returns for defective items.</p>
                  </div>
                </div>
              </div>

              {/* Payment Options */}
              <div className="mt-8 pt-8 border-t border-brand-border">
                <h4 className="text-sm font-semibold mb-4">Secure Payment Options</h4>
                <div className="flex gap-2 flex-wrap">
                  {['EMI Available', 'UPI', 'Credit/Debit Card', 'Cash on Delivery'].map(opt => (
                    <span key={opt} className="text-xs border border-brand-border px-3 py-1.5 rounded-full flex items-center gap-1 text-brand-text-secondary">
                      <Check className="w-3 h-3 text-green-500" /> {opt}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          {/* Frequently Bought Together */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Frequently Bought Together</h2>
            <div className="bg-brand-section rounded-3xl p-6 lg:p-10">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 flex flex-wrap lg:flex-nowrap items-center gap-4 lg:gap-8 justify-center lg:justify-start">
                  
                  {/* Main Product */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm mb-3">
                      <Image src={product.image} alt={product.name} fill className="object-contain mix-blend-multiply p-2" />
                    </div>
                    <span className="text-sm font-medium text-center w-32 truncate">{product.name}</span>
                  </div>

                  <span className="text-2xl text-brand-text-secondary">+</span>

                  {/* Accessories */}
                  {boughtTogether.map((acc, index) => (
                    <div key={acc.id} className="flex items-center gap-4 lg:gap-8">
                      <div className="flex flex-col items-center">
                        <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm mb-3 relative">
                           <input type="checkbox" defaultChecked className="absolute top-2 left-2 w-4 h-4 accent-brand-accent" />
                          <Image src={acc.image} alt={acc.name} fill className="object-contain mix-blend-multiply p-2" />
                        </div>
                        <span className="text-sm font-medium text-center w-32 truncate">{acc.name}</span>
                      </div>
                      {index < boughtTogether.length - 1 && <span className="text-2xl text-brand-text-secondary">+</span>}
                    </div>
                  ))}

                </div>

                <div className="w-full lg:w-64 bg-white p-6 rounded-2xl shadow-sm text-center">
                  <p className="text-sm text-brand-text-secondary mb-1">Total Price:</p>
                  <p className="text-3xl font-bold mb-6">${(product.price + boughtTogether.reduce((a,b)=>a+b.price, 0)).toFixed(2)}</p>
                  <button className="w-full bg-brand-text-primary text-white py-3 rounded-xl font-medium hover:bg-brand-accent transition-colors text-sm">
                    Add All to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold tracking-tight mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

        </div>
      </main>
      
      {/* Sticky Mobile Buy Button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-brand-border p-4 z-40 flex gap-3 shadow-[0_-8px_20px_rgb(0,0,0,0.05)]">
        <button className="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-section text-brand-text-primary">
          <Heart className="w-5 h-5" />
        </button>
        <button className="flex-1 bg-brand-text-primary text-white rounded-xl font-medium">
          Add to Cart
        </button>
      </div>

      <Footer />
    </div>
  );
}
