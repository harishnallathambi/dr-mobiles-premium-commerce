'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, MapPin, Package, Truck, CheckCircle2, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) setIsTracking(true);
  };

  const timelineSteps = [
    { label: 'Order Placed', date: 'Oct 24, 10:00 AM', icon: Package, completed: true },
    { label: 'Packed', date: 'Oct 24, 02:30 PM', icon: Package, completed: true },
    { label: 'Shipped', date: 'Oct 25, 09:15 AM', icon: Truck, completed: true },
    { label: 'Out for Delivery', date: 'Oct 26, 08:00 AM', icon: MapPin, completed: false, current: true },
    { label: 'Delivered', date: 'Expected Oct 26', icon: CheckCircle2, completed: false },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Track Your Order</h1>
            <p className="text-brand-text-secondary max-w-xl mx-auto">
              Enter your Order ID or tracking number to see real-time updates on your delivery status.
            </p>
          </div>

          <div className="bg-brand-card rounded-3xl p-6 md:p-8 border border-brand-border/50 shadow-sm mb-12">
            <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-4 w-5 h-5 text-brand-text-secondary" />
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter Order ID (e.g., DRM-12345)"
                  className="w-full bg-white border border-brand-border rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-accent focus:outline-none"
                  required
                />
              </div>
              <button type="submit" className="px-8 py-4 bg-brand-text-primary text-white rounded-xl font-medium hover:bg-brand-accent transition-colors">
                Track
              </button>
            </form>
          </div>

          {isTracking && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-card rounded-3xl p-6 md:p-10 border border-brand-border/50 shadow-sm"
            >
              <div className="flex justify-between items-start mb-10 pb-6 border-b border-brand-border">
                <div>
                  <h2 className="text-xl font-bold mb-1">Order #{orderId}</h2>
                  <p className="text-sm text-brand-text-secondary">Expected Delivery: Oct 26, 2023</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-blue-50 text-brand-accent text-sm font-semibold rounded-full">
                    In Transit
                  </span>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative py-4">
                <div className="absolute left-8 md:left-[50%] top-0 bottom-0 w-0.5 bg-brand-border hidden md:block"></div>
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-border md:hidden"></div>

                <div className="space-y-12">
                  {timelineSteps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label} className={`relative flex items-center md:justify-center ${step.completed || step.current ? 'text-brand-text-primary' : 'text-brand-text-secondary'}`}>
                        
                        {/* Desktop Left side */}
                        <div className="hidden md:block w-1/2 pr-12 text-right">
                          {index % 2 === 0 && (
                            <>
                              <h3 className={`font-semibold ${step.current ? 'text-brand-accent' : ''}`}>{step.label}</h3>
                              <p className="text-sm">{step.date}</p>
                            </>
                          )}
                        </div>

                        {/* Icon Node */}
                        <div className="absolute left-8 md:relative md:left-auto z-10 flex items-center justify-center -translate-x-1/2 md:translate-x-0">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-brand-bg ${
                            step.completed ? 'bg-green-500 text-white' : 
                            step.current ? 'bg-brand-accent text-white' : 'bg-brand-section text-brand-text-secondary'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Desktop Right side */}
                        <div className="hidden md:block w-1/2 pl-12 text-left">
                          {index % 2 !== 0 && (
                            <>
                              <h3 className={`font-semibold ${step.current ? 'text-brand-accent' : ''}`}>{step.label}</h3>
                              <p className="text-sm">{step.date}</p>
                            </>
                          )}
                        </div>

                        {/* Mobile Text (Right of icon) */}
                        <div className="md:hidden ml-16 w-full">
                          <h3 className={`font-semibold ${step.current ? 'text-brand-accent' : ''}`}>{step.label}</h3>
                          <p className="text-sm">{step.date}</p>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* Support Info */}
          <div className="mt-12 bg-white rounded-3xl p-8 border border-brand-border text-center">
            <h3 className="text-lg font-bold mb-4">Need help with your order?</h3>
            <p className="text-brand-text-secondary mb-6">Our support team is available 24/7 to assist you.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+18001234567" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-section rounded-xl font-medium hover:bg-gray-100 transition-colors">
                <Phone className="w-4 h-4" /> 1-800-DR-MOBILES
              </a>
              <a href="mailto:support@drmobiles.com" className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-section rounded-xl font-medium hover:bg-gray-100 transition-colors">
                <Mail className="w-4 h-4" /> support@drmobiles.com
              </a>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
