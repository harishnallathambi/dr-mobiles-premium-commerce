import { Shield, Truck, RefreshCw, Headphones, Wrench, Lock } from 'lucide-react';

const trustFeatures = [
  { icon: Shield, title: '100% Genuine', description: 'Authentic products guaranteed' },
  { icon: Lock, title: 'Secure Payments', description: 'Safe & encrypted checkout' },
  { icon: Truck, title: 'Fast Delivery', description: 'Free shipping on orders over $50' },
  { icon: RefreshCw, title: 'Easy Returns', description: '14-day hassle-free return policy' },
  { icon: Wrench, title: 'Service Center', description: 'Authorized repair & support' },
  { icon: Headphones, title: '24/7 Support', description: 'We are here to help you' },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-brand-bg border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose DR MOBILES?</h2>
          <p className="text-brand-text-secondary max-w-2xl mx-auto">
            We deliver the ultimate premium shopping experience with guaranteed authenticity and top-tier customer service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {trustFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-section flex items-center justify-center text-brand-text-primary mb-4">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-brand-text-primary mb-2">{feature.title}</h3>
                <p className="text-xs text-brand-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
