'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Smartphone, Battery, Camera, Droplets, MapPin, Calendar, Clock, Wrench, Truck } from 'lucide-react';

export default function ServicePage() {
  const [selectedService, setSelectedService] = useState('');
  const [deliveryType, setDeliveryType] = useState('store');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const services = [
    { id: 'display', title: 'Display Repair', icon: Smartphone, desc: 'Screen replacement & glass repair' },
    { id: 'battery', title: 'Battery Replacement', icon: Battery, desc: 'Original battery installation' },
    { id: 'camera', title: 'Camera Repair', icon: Camera, desc: 'Lens & module replacement' },
    { id: 'liquid', title: 'Liquid Damage', icon: Droplets, desc: 'Water damage restoration' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Book a Repair Service</h1>
            <p className="text-brand-text-secondary max-w-xl mx-auto">
              Certified technicians, genuine parts, and guaranteed satisfaction. Get your device fixed fast.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-brand-card rounded-3xl p-10 border border-brand-border text-center max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-brand-text-secondary mb-8">
                Your service appointment has been successfully scheduled. We have sent a confirmation email and SMS with your reference number.
              </p>
              <button onClick={() => setIsSuccess(false)} className="px-8 py-4 bg-brand-text-primary text-white rounded-xl font-medium hover:bg-brand-accent transition-colors">
                Book Another Service
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Select Service */}
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-text-primary text-white flex items-center justify-center text-sm">1</span>
                Select Service Type
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <label 
                      key={service.id}
                      className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedService === service.id 
                          ? 'border-brand-accent bg-brand-accent/5' 
                          : 'border-brand-border hover:border-gray-400 bg-white'
                      }`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <input type="radio" name="service" className="mt-1 accent-brand-accent" checked={selectedService === service.id} onChange={() => setSelectedService(service.id)} />
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Icon className={`w-5 h-5 ${selectedService === service.id ? 'text-brand-accent' : 'text-brand-text-primary'}`} />
                          <h3 className="font-semibold">{service.title}</h3>
                        </div>
                        <p className="text-sm text-brand-text-secondary">{service.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* Step 2: Device Details */}
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-text-primary text-white flex items-center justify-center text-sm">2</span>
                Device Details
              </h2>
              <div className="bg-brand-card rounded-2xl p-6 border border-brand-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Device Brand</label>
                    <select className="w-full bg-white border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none">
                      <option>Select Brand</option>
                      <option>Apple</option>
                      <option>Samsung</option>
                      <option>Google</option>
                      <option>OnePlus</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Device Model</label>
                    <select className="w-full bg-white border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none">
                      <option>Select Model</option>
                      <option>iPhone 15 Pro Max</option>
                      <option>iPhone 15 Pro</option>
                      <option>Galaxy S24 Ultra</option>
                      <option>Pixel 8 Pro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Describe the Problem</label>
                  <textarea 
                    rows={4}
                    placeholder="Please provide details about the issue..."
                    className="w-full bg-white border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none resize-none"
                  ></textarea>
                </div>
              </div>
            </section>

            {/* Step 3: Appointment Details */}
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-text-primary text-white flex items-center justify-center text-sm">3</span>
                Appointment & Delivery
              </h2>
              <div className="bg-brand-card rounded-2xl p-6 border border-brand-border/50">
                
                <div className="flex gap-4 mb-8">
                  <label className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${deliveryType === 'store' ? 'border-brand-accent bg-brand-accent/5' : 'border-brand-border bg-white'}`} onClick={() => setDeliveryType('store')}>
                    <MapPin className={`w-6 h-6 mb-2 ${deliveryType === 'store' ? 'text-brand-accent' : 'text-brand-text-secondary'}`} />
                    <span className="font-medium text-sm">Store Drop-off</span>
                  </label>
                  <label className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${deliveryType === 'pickup' ? 'border-brand-accent bg-brand-accent/5' : 'border-brand-border bg-white'}`} onClick={() => setDeliveryType('pickup')}>
                    <Truck className={`w-6 h-6 mb-2 ${deliveryType === 'pickup' ? 'text-brand-accent' : 'text-brand-text-secondary'}`} />
                    <span className="font-medium text-sm">Home Pick-up</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Calendar className="w-4 h-4" /> Preferred Date</label>
                    <input type="date" className="w-full bg-white border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2"><Clock className="w-4 h-4" /> Preferred Time</label>
                    <select className="w-full bg-white border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none">
                      <option>10:00 AM - 12:00 PM</option>
                      <option>12:00 PM - 02:00 PM</option>
                      <option>02:00 PM - 04:00 PM</option>
                      <option>04:00 PM - 06:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>
            </section>

            {/* Step 4: Customer Details */}
            <section>
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-brand-text-primary text-white flex items-center justify-center text-sm">4</span>
                Your Details
              </h2>
              <div className="bg-brand-card rounded-2xl p-6 border border-brand-border/50 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none sm:col-span-2" />
                <input required type="email" placeholder="Email Address" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                <input required type="tel" placeholder="Phone Number" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none" />
                {deliveryType === 'pickup' && (
                  <input required type="text" placeholder="Complete Address for Pickup" className="w-full border border-brand-border rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-accent focus:outline-none sm:col-span-2" />
                )}
              </div>
            </section>

            <div className="pt-6 border-t border-brand-border">
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-text-primary text-white py-4 rounded-xl font-medium hover:bg-brand-accent transition-colors">
                <Wrench className="w-5 h-5" /> Book Service Appointment
              </button>
              <p className="text-center text-xs text-brand-text-secondary mt-4">
                You will receive a confirmation email and SMS shortly after booking. No payment required until service is complete.
              </p>
            </div>

          </form>
          )}
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
