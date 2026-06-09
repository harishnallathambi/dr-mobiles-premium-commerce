import Link from 'next/link';
import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 z-10">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Authorized Support</span>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Expert Repairs. <br />
              Guaranteed Quality.
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Screen replacements, battery upgrades, and complex repairs performed by certified technicians. Genuine parts only.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold mb-1">Display Repair</h4>
                <p className="text-sm text-gray-400">Same day service</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <h4 className="font-semibold mb-1">Battery Replace</h4>
                <p className="text-sm text-gray-400">100% capacity restored</p>
              </div>
            </div>

            <Link href="/service" className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Book a Repair Session
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative">
            {/* Dark premium image style */}
            <div className="relative aspect-square md:aspect-auto md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?q=80&w=1000&auto=format&fit=crop" 
                alt="Mobile Repair Service" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
