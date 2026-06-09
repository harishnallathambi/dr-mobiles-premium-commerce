'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'iPhone', href: '/category/iphone' },
    { name: 'Android', href: '/category/android' },
    { name: 'Accessories', href: '/category/accessories' },
    { name: 'Watches', href: '/category/watches' },
    { name: 'Audio', href: '/category/audio' },
    { name: 'Service', href: '/service' },
    { name: 'Offers', href: '/offers' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight">
              DR MOBILES
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-text-primary hover:text-brand-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6 text-brand-text-primary">
            <button className="hover:text-brand-accent transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link href="/wishlist" className="hover:text-brand-accent transition-colors">
              <Heart className="w-5 h-5" />
            </Link>
            <Link href="/cart" className="relative hover:text-brand-accent transition-colors">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>
            <Link href="/account" className="hover:text-brand-accent transition-colors">
              <User className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link href="/cart" className="relative text-brand-text-primary">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-2 bg-brand-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                2
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-text-primary"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-b border-brand-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <div className="relative mb-4 mt-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-brand-section text-brand-text-primary border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-brand-accent focus:outline-none text-sm"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-brand-text-secondary" />
              </div>
              
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-section hover:text-brand-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
