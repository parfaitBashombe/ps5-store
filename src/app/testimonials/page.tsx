'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Testimonial } from '@/types';

const TestimonialsPage = () => {
  const [reviews, setReviews] = useState<Testimonial[]>([]);
  const [filteredReviews, setFilteredReviews] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Filter and sort states
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'rating'>('recent');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        const result = await response.json();
        
        if (result.success) {
          setReviews(result.data);
          setFilteredReviews(result.data);
        } else {
          setError(result.error || 'Failed to load reviews');
        }
      } catch (err) {
        setError('Failed to load reviews');
        console.error('Error fetching reviews:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    let filtered = [...reviews];

    // Filter by tag
    if (selectedTag !== 'all') {
      filtered = filtered.filter(review => review.tag === selectedTag);
    }

    // Sort
    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else {
      // Most recent first (new reviews appear first)
      // Since we don't have dates, we keep the original order
    }

    setFilteredReviews(filtered);
  }, [reviews, selectedTag, sortBy]);

  // Get unique tags
  const uniqueTags = ['all', ...Array.from(new Set(reviews.map(r => r.tag)))];

  return (
    <div className="flex flex-col min-h-screen bg-background-dark pt-24 pb-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8">
        <div className="mb-12">
          <h1 className="text-white text-4xl font-bold mb-4">
            See What Our Players Are Saying
          </h1>
          <p className="text-white/60 max-w-2xl">
            Real reviews from real gamers. Discover why the PS5 experience is
            unparalleled.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          {/* Filter by Product */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowFilterMenu(!showFilterMenu);
                setShowSortMenu(false);
              }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Filter by Product
              <span className="material-symbols-outlined text-[16px]">
                arrow_drop_down
              </span>
            </button>
            
            {showFilterMenu && (
              <div className="absolute top-full mt-2 bg-background-dark border border-white/10 rounded-lg overflow-hidden z-10 min-w-[200px]">
                {uniqueTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setSelectedTag(tag);
                      setShowFilterMenu(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      selectedTag === tag 
                        ? 'bg-primary text-white' 
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    {tag === 'all' ? 'All Products' : tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort by */}
          <div className="relative">
            <button 
              onClick={() => {
                setShowSortMenu(!showSortMenu);
                setShowFilterMenu(false);
              }}
              className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Sort by: {sortBy === 'recent' ? 'Most Recent' : 'Highest Rating'}
              <span className="material-symbols-outlined text-[16px]">
                arrow_drop_down
              </span>
            </button>

            {showSortMenu && (
              <div className="absolute top-full mt-2 bg-background-dark border border-white/10 rounded-lg overflow-hidden z-10 min-w-[200px]">
                <button
                  onClick={() => {
                    setSortBy('recent');
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    sortBy === 'recent' 
                      ? 'bg-primary text-white' 
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  Most Recent
                </button>
                <button
                  onClick={() => {
                    setSortBy('rating');
                    setShowSortMenu(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    sortBy === 'rating' 
                      ? 'bg-primary text-white' 
                      : 'text-white/80 hover:bg-white/5'
                  }`}
                >
                  Highest Rating
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="text-white/60 mt-4">Loading reviews...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8">
            <p className="text-red-400 text-center">{error}</p>
          </div>
        )}

        {/* Reviews Grid */}
        {!loading && !error && (
          <>
            {filteredReviews.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white/60">No reviews found for the selected filter.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {filteredReviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={review.img}
                            alt={review.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-sm">
                            {review.name}
                          </h3>
                          <p className="text-white/40 text-xs">{review.location}</p>
                        </div>
                      </div>
                      <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">
                        {review.tag}
                      </span>
                    </div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`material-symbols-outlined text-[18px] ${
                            i < review.rating ? "text-yellow-500" : "text-white/20"
                          }`}
                          style={{
                            fontVariationSettings: "'FILL' 1",
                          }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                    <h4 className="text-white font-bold mb-2">{review.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* CTA Section */}
        {!loading && !error && (
          <div className="text-center">
            <h2 className="text-white text-3xl font-bold mb-4">
              Find Your Next Adventure
            </h2>
            <p className="text-white/60 mb-8">
              Inspired by what you&apos;ve read? Explore our collection of best-selling
              games and accessories.
            </p>
            <button className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Shop Best Sellers
            </button>
          </div>
        )}
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50 group">
        <Link href="/testimonials/create">
          <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors text-white relative">
            <span className="material-symbols-outlined">edit</span>
            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black/80 text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              Create
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TestimonialsPage;
