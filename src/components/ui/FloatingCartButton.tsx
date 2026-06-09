'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function FloatingCartButton() {
  return (
    <Link 
      href="/cart"
      className="md:hidden fixed bottom-20 right-4 z-50 w-14 h-14 bg-brand-text-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <div className="relative">
        <ShoppingBag className="w-6 h-6" />
        <span className="absolute -top-2 -right-2 bg-brand-accent text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-brand-text-primary">
          2
        </span>
      </div>
    </Link>
  );
}
