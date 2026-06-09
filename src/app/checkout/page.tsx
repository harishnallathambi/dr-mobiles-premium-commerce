'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { products } from '@/data/products';
import { CreditCard, Wallet, Banknote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [isSuccess, setIsSuccess] = useState(false);

  // Mock cart
  const cartItems = [
    { product: products[0], quantity: 1 },
  ];
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.discountPrice || item.product.price) * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col bg-brand-bg">
        <Navbar />
        <main className="flex-1 flex items-center justify-center p-4">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-md w-full bg-white rounded-3xl p-8 md:p-12 text-center border border-brand-border shadow-lg"
          >
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-brand-text-secondary mb-8">
              Thank you for your purchase. Your order #DRM-83492 has been placed successfully and is being processed.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/track-order" className="w-full bg-brand-text-primary text-white py-4 rounded-xl font-medium hover:bg-brand-accent transition-colors">
                Track Order
              </Link>
              <Link href="/" className="w-full bg-brand-section text-brand-text-primary py-4 rounded-xl font-medium border border-brand-border hover:bg-gray-100 transition-colors">
                Return to Home
              </Link>
            </div>
          </motion.div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h1 className="text-3xl font-bold tracking-tight mb-10">Checkout</h1>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Form Details */}
            <div className="flex-1 space-y-10">
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-10">
                {/* Shipping Address */}
                <section>
                  <h2 className="text-xl font-semibold mb-6">1. Shipping Address</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required type="text" placeholder="First Name" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                    <input required type="text" placeholder="Last Name" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                    <input required type="email" placeholder="Email Address" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none md:col-span-2" />
                    <input required type="text" placeholder="Street Address" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none md:col-span-2" />
                    <input required type="text" placeholder="City" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                    <input required type="text" placeholder="Postal Code" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                    <input required type="tel" placeholder="Phone Number" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none md:col-span-2" />
                  </div>
                </section>

                {/* Delivery Options */}
                <section>
                  <h2 className="text-xl font-semibold mb-6">2. Delivery Method</h2>
                  <div className="space-y-3">
                    <label className="flex items-center justify-between p-4 border border-brand-accent bg-brand-accent/5 rounded-xl cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="delivery" defaultChecked className="w-4 h-4 accent-brand-accent" />
                        <div>
                          <p className="font-medium">Standard Delivery</p>
                          <p className="text-sm text-brand-text-secondary">Arrives in 2-3 business days</p>
                        </div>
                      </div>
                      <span className="font-semibold text-green-600">Free</span>
                    </label>
                    <label className="flex items-center justify-between p-4 border border-brand-border rounded-xl cursor-pointer hover:border-gray-400">
                      <div className="flex items-center gap-3">
                        <input type="radio" name="delivery" className="w-4 h-4 accent-brand-accent" />
                        <div>
                          <p className="font-medium">Express Delivery</p>
                          <p className="text-sm text-brand-text-secondary">Arrives Tomorrow</p>
                        </div>
                      </div>
                      <span className="font-semibold">$15.00</span>
                    </label>
                  </div>
                </section>

                {/* Payment Method */}
                <section>
                  <h2 className="text-xl font-semibold mb-6">3. Payment Method</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <button 
                      type="button"
                      onClick={() => setSelectedPayment('card')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${selectedPayment === 'card' ? 'border-brand-accent bg-brand-accent/5 text-brand-accent' : 'border-brand-border hover:border-gray-400'}`}
                    >
                      <CreditCard className="w-6 h-6 mb-2" />
                      <span className="font-medium text-sm text-brand-text-primary">Card</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSelectedPayment('upi')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${selectedPayment === 'upi' ? 'border-brand-accent bg-brand-accent/5 text-brand-accent' : 'border-brand-border hover:border-gray-400'}`}
                    >
                      <Wallet className="w-6 h-6 mb-2" />
                      <span className="font-medium text-sm text-brand-text-primary">UPI / Wallet</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSelectedPayment('cod')}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${selectedPayment === 'cod' ? 'border-brand-accent bg-brand-accent/5 text-brand-accent' : 'border-brand-border hover:border-gray-400'}`}
                    >
                      <Banknote className="w-6 h-6 mb-2" />
                      <span className="font-medium text-sm text-brand-text-primary">Cash</span>
                    </button>
                  </div>
                  
                  {/* Payment Details Form based on selection */}
                  <AnimatePresence mode="wait">
                    {selectedPayment === 'card' && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                        <div className="space-y-4 p-6 bg-brand-section rounded-2xl border border-brand-border">
                          <input required type="text" placeholder="Card Number" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                          <div className="grid grid-cols-2 gap-4">
                            <input required type="text" placeholder="MM/YY" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                            <input required type="text" placeholder="CVC" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                          </div>
                          <input required type="text" placeholder="Cardholder Name" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-96">
              <div className="bg-brand-card rounded-2xl p-6 md:p-8 border border-brand-border/50 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 pb-6 border-b border-brand-border">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex gap-4">
                      <div className="w-16 h-16 bg-white rounded-lg border border-brand-border flex items-center justify-center p-2 flex-shrink-0">
                         <Image src={item.product.image} alt={item.product.name} fill className="object-contain mix-blend-multiply p-2" />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <p className="text-sm font-semibold leading-tight line-clamp-1">{item.product.name}</p>
                        <p className="text-xs text-brand-text-secondary mt-1">Qty: {item.quantity}</p>
                      </div>
                      <div className="font-medium text-sm flex items-center">
                        ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-sm mb-6 pb-6 border-b border-brand-border">
                  <div className="flex justify-between">
                    <span className="text-brand-text-secondary">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-text-secondary">Delivery</span>
                    <span className="font-medium text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-text-secondary">Tax (8%)</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-end mb-8">
                  <span className="font-bold text-lg">Total</span>
                  <span className="font-bold text-3xl">${total.toFixed(2)}</span>
                </div>
                
                <button 
                  type="submit" 
                  form="checkout-form"
                  className="w-full flex items-center justify-center gap-2 bg-brand-accent text-white py-4 rounded-xl font-medium hover:bg-blue-600 transition-colors mb-4"
                >
                  <ShieldCheck className="w-5 h-5" /> Place Order
                </button>

                <p className="text-xs text-center text-brand-text-secondary leading-relaxed">
                  By placing your order, you agree to our Terms of Service and Privacy Policy. Secure encrypted transaction.
                </p>
              </div>
            </div>

          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
