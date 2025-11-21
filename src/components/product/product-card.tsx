import Link from 'next/link';
import type { Game } from '@/types';

interface ProductCardProps {
  product: Game;
  href?: string;
}

export default function ProductCard({ product, href = `/products/${product.id}` }: ProductCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:bg-white/10 transition-all hover:scale-105 cursor-pointer group relative">
        {/* Wishlist Icon */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // TODO: Add to wishlist functionality
            console.log('Added to wishlist:', product.title);
          }}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors"
        >
          <span className="material-symbols-outlined text-white text-xl">favorite_border</span>
        </button>

        {/* Image */}
        <div className="aspect-square overflow-hidden bg-linear-to-br from-blue-900/20 to-purple-900/20">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-white font-bold mb-2 line-clamp-2">{product.title}</h3>
          <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // TODO: Add to cart functionality
              console.log('Added to cart:', product.title);
            }}
            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">shopping_cart</span>
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
