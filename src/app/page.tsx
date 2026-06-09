import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import ServiceSection from '@/components/home/ServiceSection';
import TrustSection from '@/components/home/TrustSection';
import ProductCard from '@/components/product/ProductCard';
import { products } from '@/data/products';

export default function Home() {
  const iphones = products.filter(p => p.category === 'iPhone').slice(0, 4);
  const androids = products.filter(p => p.category === 'Android').slice(0, 4);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        
        {/* iPhone Collection */}
        <section className="py-20 bg-brand-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">iPhone Collection</h2>
                <p className="text-brand-text-secondary">Experience the power of Apple.</p>
              </div>
              <a href="/category/iphone" className="text-brand-accent hover:underline font-medium">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {iphones.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Android Collection */}
        <section className="py-20 bg-brand-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-2">Android Flagships</h2>
                <p className="text-brand-text-secondary">The best from Samsung, OnePlus, Google & more.</p>
              </div>
              <a href="/category/android" className="text-brand-accent hover:underline font-medium">View All</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {androids.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        <ServiceSection />
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
