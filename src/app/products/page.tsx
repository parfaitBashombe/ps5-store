'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/product/product-card';
import ProductCardSkeleton from '@/components/skeletons/product-card-skeleton';
import Pagination from '@/components/navigation/pagination';
import CategoryTabs from '@/components/navigation/category-tabs';
import SortDropdown from '@/components/ui/sort-dropdown';
import type { Product } from '@/lib/data/products-data';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Categories
  // const categories = ['All', 'Consoles', 'Games', 'Controllers', 'Headsets', 'Accessories'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        const result = await response.json();
        
        if (result.success) {
          setProducts(result.data);
        } else {
          setError('Failed to load products');
        }
      } catch (err) {
        setError('An error occurred while fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter logic
  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategory !== 'All' && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
      if (selectedCategory === 'Games' && product.category !== 'games') return false;
      if (selectedCategory === 'Consoles' && product.category !== 'consoles') return false;
      if (selectedCategory === 'Controllers' && product.category !== 'controllers') return false;
      if (selectedCategory === 'Headsets' && product.category !== 'headsets') return false;
      // Simple fallback for exact match if not handled above
      if (product.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    }

    // Price filter (simple implementation parsing string price)
    const price = parseFloat(product.price.replace('$', ''));
    if (price < priceRange[0] || price > priceRange[1]) return false;

    return true;
  });

  // Sort logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price.replace('$', ''));
    const priceB = parseFloat(b.price.replace('$', ''));

    switch (sortBy) {
      case 'price-low':
        return priceA - priceB;
      case 'price-high':
        return priceB - priceA;
      case 'newest':
        return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
      default:
        return 0; // Featured/Default
    }
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const categories = ['Consoles', 'Games', 'Controllers', 'Headsets', 'Accessories'];

  return (
    <div className="min-h-screen bg-background-dark pb-12">
      {/* Hero Banner */}
      <div className="bg-linear-to-r from-blue-900/30 to-purple-900/30 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 py-24">
          <h1 className="text-5xl font-bold text-white mb-4">
            PlayStation 5 Store
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your one-stop shop for PS5 consoles, games, controllers, and accessories. Experience the next generation of gaming.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-8 mt-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Filters</h3>
                <button 
                  onClick={() => {
                    setPriceRange([0, 1000]);
                    setSelectedCategory('All');
                  }}
                  className="text-sm text-primary hover:text-blue-400"
                >
                  Clear All
                </button>
              </div>

              {/* Price Range */}
              <div className="mb-8">
                <h4 className="text-sm font-bold text-white mb-4">Price Range</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">$</span>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 pl-6 text-white text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <span className="text-white/40">-</span>
                    <div className="relative flex-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">$</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 pl-6 text-white text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full accent-primary"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <CategoryTabs 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              <SortDropdown 
                sortBy={sortBy}
                onSortChange={setSortBy}
                options={[
                  { value: 'featured', label: 'Featured' },
                  { value: 'price-low', label: 'Price: Low to High' },
                  { value: 'price-high', label: 'Price: High to Low' },
                  { value: 'newest', label: 'Newest Arrivals' },
                ]}
              />
            </div>

            {/* Product Grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[...Array(6)].map((_, i) => (
                  <ProductCardSkeleton key={i} />
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-400 mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {paginatedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {paginatedProducts.length === 0 && (
                  <div className="text-center py-12 bg-white/5 rounded-lg border border-white/10">
                    <span className="material-symbols-outlined text-4xl text-white/20 mb-4">search_off</span>
                    <h3 className="text-xl font-bold text-white mb-2">No products found</h3>
                    <p className="text-white/60">Try adjusting your filters or search criteria</p>
                  </div>
                )}

                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


