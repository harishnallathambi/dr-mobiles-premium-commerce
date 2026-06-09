import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'iPhone', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=400&auto=format&fit=crop', href: '/shop' },
  { name: 'Android Phones', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=400&auto=format&fit=crop', href: '/shop' },
  { name: 'iPad & Tablets', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=400&auto=format&fit=crop', href: '/shop' },
  { name: 'Smart Watches', image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=400&auto=format&fit=crop', href: '/shop' },
  { name: 'Accessories', image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=400&auto=format&fit=crop', href: '/shop' },
  { name: 'Service & Repair', image: 'https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=400&auto=format&fit=crop', href: '/service' },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight mb-10">Shop by Category</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href}
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square rounded-2xl bg-brand-section overflow-hidden mb-4 relative">
                <Image 
                  src={category.image} 
                  alt={category.name}
                  fill
                  className="object-contain mix-blend-multiply p-4 transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="text-sm font-medium text-brand-text-primary group-hover:text-brand-accent transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
