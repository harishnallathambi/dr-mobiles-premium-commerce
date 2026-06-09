import Link from 'next/link';
import Image from 'next/image';
import { Heart, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-brand-card rounded-2xl overflow-hidden hover:shadow-sm transition-all duration-300 border border-brand-border/50">
      <div className="relative aspect-square p-6 bg-brand-bg flex items-center justify-center">
        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 rounded-full bg-brand-section/50 text-brand-text-secondary hover:text-brand-accent hover:bg-white transition-all z-10">
          <Heart className="w-5 h-5" />
        </button>

        {/* Product Image Placeholder (Using standard Next Image with unoptimized for dummy data) */}
        <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-6 mix-blend-multiply"
          />
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Badges */}
        <div className="flex gap-2 mb-3">
          {product.brand === 'Apple' ? (
             <span className="text-xs font-semibold px-2 py-1 bg-black text-white rounded-md">Apple</span>
          ) : (
             <span className="text-xs font-semibold px-2 py-1 bg-brand-section text-brand-text-primary rounded-md">{product.brand}</span>
          )}
          {product.discountPrice && (
            <span className="text-xs font-semibold px-2 py-1 bg-red-50 text-red-600 rounded-md">Sale</span>
          )}
        </div>

        {/* Title */}
        <Link href={`/product/${product.id}`} className="hover:text-brand-accent transition-colors">
          <h3 className="text-lg font-semibold leading-tight mb-1">{product.name}</h3>
        </Link>
        <p className="text-sm text-brand-text-secondary mb-4">{product.category}</p>

        {/* Price & Action */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            {product.discountPrice ? (
              <div className="flex flex-col">
                <span className="text-lg font-bold">${product.discountPrice.toFixed(2)}</span>
                <span className="text-sm text-brand-text-secondary line-through">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <button className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-text-primary text-white hover:bg-brand-accent transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
