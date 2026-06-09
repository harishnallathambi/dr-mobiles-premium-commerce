'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Get in touch</h1>
            <p className="text-lg text-brand-text-secondary">
              At DR MOBILES, we don&apos;t just sell devices—we deliver an experience. From finding the perfect phone to comprehensive after-sales support, we are your trusted technology partner.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-accent shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <p className="text-brand-text-secondary mb-1">Mon-Fri from 8am to 5pm.</p>
                  <p className="font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <p className="mb-8">
                    Prefer speaking with a human? Call us at <a href="tel:+18001234567" className="text-brand-accent font-semibold hover:underline">1-800-DR-MOBILES</a>. Our customer service representatives are available 24/7.
                    Or visit one of our premium service centers for an in-person consultation and repair. We&apos;d love to see you!
                  </p>
                  <p className="font-medium">support@drmobiles.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-brand-border shadow-sm">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Office</h3>
                  <p className="text-brand-text-secondary mb-1">Come say hello at our headquarters.</p>
                  <p className="font-medium">123 Tech Park, Cyber City<br />Bangalore, KA 560001</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl border border-brand-border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              {isSuccess ? (
                <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-2xl text-center">
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p>We&apos;ll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2 bg-white rounded-full border shadow-sm font-medium hover:bg-gray-50"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-brand-text-primary mb-2">First name</label>
                      <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-brand-text-primary mb-2">Last name</label>
                      <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-primary mb-2">Email</label>
                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text-primary mb-2">Message</label>
                    <textarea id="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-brand-border focus:ring-1 focus:ring-brand-accent focus:border-brand-accent outline-none resize-none"></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-text-primary text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-brand-accent transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
