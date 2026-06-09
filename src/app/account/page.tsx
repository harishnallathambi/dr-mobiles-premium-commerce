'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useStore } from '@/store/useStore';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Package, Heart, CreditCard, MapPin, Settings, LogOut, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function AccountPage() {
  const router = useRouter();
  const { isLoggedIn, logout, wishlist } = useStore();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null; // Prevent flash before redirect

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const sections = [
    { icon: Package, title: 'Orders', desc: 'Track, return, or buy things again', link: '/track-order' },
    { icon: Heart, title: 'Wishlist', desc: `${wishlist.length} items saved for later`, link: '/wishlist' },
    { icon: MapPin, title: 'Addresses', desc: 'Manage delivery locations', link: '#' },
    { icon: CreditCard, title: 'Payment Methods', desc: 'Manage saved cards', link: '#' },
    { icon: Settings, title: 'Account Settings', desc: 'Password, email, notifications', link: '#' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">My Account</h1>
              <p className="text-brand-text-secondary">Welcome back, John Doe</p>
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-2 text-brand-text-secondary hover:text-red-500 transition-colors w-fit px-4 py-2 rounded-xl border border-transparent hover:border-red-100 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, idx) => (
              <Link 
                key={idx} 
                href={section.link}
                className="flex items-center p-6 bg-white rounded-2xl border border-brand-border hover:border-brand-accent hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-text-secondary group-hover:bg-blue-50 group-hover:text-brand-accent transition-colors">
                  <section.icon className="w-6 h-6" />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                  <p className="text-sm text-brand-text-secondary">{section.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-brand-accent transition-colors" />
              </Link>
            ))}
          </div>
          
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
