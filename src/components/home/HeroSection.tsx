import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-brand-text-primary mb-6">
            Experience the <br />
            <span className="text-brand-accent">Future</span> of <br />
            Smartphones
          </h1>
          <p className="text-lg lg:text-xl text-brand-text-secondary max-w-lg mb-10 leading-relaxed">
            Shop premium iPhones, Android phones, accessories, wearables, and trusted mobile service at DR MOBILES.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/category/iphone"
              className="px-8 py-4 bg-brand-text-primary text-white rounded-full font-medium hover:bg-brand-accent transition-colors"
            >
              Shop iPhone
            </Link>
            <Link
              href="/category/android"
              className="px-8 py-4 bg-white text-brand-text-primary rounded-full font-medium border border-brand-border hover:bg-brand-section transition-colors"
            >
              Shop Android
            </Link>
            <Link
              href="/service"
              className="px-8 py-4 text-brand-text-primary font-medium hover:text-brand-accent transition-colors flex items-center"
            >
              Book Service &rarr;
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 relative">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <Image 
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop" 
              alt="Latest Smartphone"
              fill
              className="object-contain drop-shadow-2xl mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
