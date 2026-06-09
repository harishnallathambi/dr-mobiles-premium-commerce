'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import { Trash2, ShieldCheck, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import { formatINR } from '@/lib/utils';

export default function CartPage() {
  // Mock cart state with two items
  const [cartItems, setCartItems] = useState([
    { product: products[0], quantity: 1 },
    { product: products[10], quantity: 2 },
  ]);

  const updateQuantity = (index: number, newQty: number) => {
    if (newQty < 1) return;
    const newItems = [...cartItems];
    newItems[index].quantity = newQty;
    setCartItems(newItems);
  };

  const removeItem = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.discountPrice || item.product.price) * item.quantity, 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl font-bold tracking-tight mb-2">Your Cart</h1>

          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-brand-section rounded-3xl border border-brand-border">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-brand-text-secondary" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-brand-text-secondary mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
              <Link href="/shop" className="px-8 py-4 bg-brand-text-primary text-white rounded-xl font-medium hover:bg-brand-accent transition-colors">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-12">
              
              {/* Cart Items List */}
              <div className="flex-1 space-y-6">
                {cartItems.map((item, index) => (
                  <div key={item.product.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-brand-card rounded-2xl border border-brand-border/50">
                    <div className="w-full sm:w-32 h-32 bg-white rounded-xl p-3 flex-shrink-0 flex items-center justify-center border border-brand-border relative">
                      <Image src={item.product.image} alt={item.product.name} fill className="object-contain mix-blend-multiply" />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{item.product.name}</h3>
                          <p className="text-sm text-brand-text-secondary">{item.product.brand} • {item.product.category}</p>
                        </div>
                        <button onClick={() => removeItem(index)} className="p-2 text-brand-text-secondary hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-brand-border rounded-lg bg-white p-1">
                          <button onClick={() => updateQuantity(index, item.quantity - 1)} className="w-8 h-8 flex items-center justify-center hover:bg-brand-section rounded-md">-</button>
                          <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                          <button onClick={() => updateQuantity(index, item.quantity + 1)} className="w-8 h-8 flex items-center justify-center hover:bg-brand-section rounded-md">+</button>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold">
                            {formatINR((item.product.discountPrice || item.product.price) * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="w-full lg:w-96">
                <div className="bg-brand-card rounded-2xl p-6 md:p-8 border border-brand-border/50 sticky top-24">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 text-sm mb-6 pb-6 border-b border-brand-border">
                    <div className="flex justify-between">
                      <span className="text-brand-text-secondary">Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                      <span className="font-medium">{formatINR(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text-secondary">Estimated Delivery</span>
                      <span className="font-medium text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-brand-text-secondary">Estimated Tax (8%)</span>
                      <span className="font-medium">{formatINR(tax)}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end mb-8">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-3xl">{formatINR(total)}</span>
                  </div>

                  {/* Coupon */}
                  <div className="flex gap-2 mb-8">
                    <input 
                      type="text" 
                      placeholder="Enter coupon code" 
                      className="flex-1 border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none"
                    />
                    <button className="px-6 bg-brand-section text-brand-text-primary rounded-xl font-medium text-sm border border-brand-border hover:bg-gray-100 transition-colors">
                      Apply
                    </button>
                  </div>
                  
                  <Link href="/checkout" className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors mb-4">
                    <ShieldCheck className="w-5 h-5" /> Secure Checkout
                  </Link>

                  <p className="text-xs text-center text-brand-text-secondary">
                    Prices include VAT where applicable.
                  </p>
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
