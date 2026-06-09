import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-brand-section pt-16 pb-8 border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold tracking-tight mb-4">DR MOBILES</h3>
            <p className="text-sm text-brand-text-secondary mb-6">
              Experience the Future of Smartphones. Premium electronics and trusted service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-brand-text-secondary">
              <li><Link href="/category/iphone" className="hover:text-brand-text-primary transition-colors">iPhone</Link></li>
              <li><Link href="/category/android" className="hover:text-brand-text-primary transition-colors">Android Phones</Link></li>
              <li><Link href="/category/accessories" className="hover:text-brand-text-primary transition-colors">Accessories</Link></li>
              <li><Link href="/category/watches" className="hover:text-brand-text-primary transition-colors">Smart Watches</Link></li>
              <li><Link href="/offers" className="hover:text-brand-text-primary transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-brand-text-secondary">
              <li><Link href="/service" className="hover:text-brand-text-primary transition-colors">Book a Repair</Link></li>
              <li><Link href="/track" className="hover:text-brand-text-primary transition-colors">Track Order</Link></li>
              <li><Link href="/warranty" className="hover:text-brand-text-primary transition-colors">Warranty Info</Link></li>
              <li><Link href="/exchange" className="hover:text-brand-text-primary transition-colors">Trade-in Program</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-brand-text-secondary">
              <li><Link href="/contact" className="hover:text-brand-text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-brand-text-primary transition-colors">FAQs</Link></li>
              <li><Link href="/returns" className="hover:text-brand-text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/shipping" className="hover:text-brand-text-primary transition-colors">Shipping Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-text-secondary">
          <p>&copy; {new Date().getFullYear()} DR MOBILES. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-brand-text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
