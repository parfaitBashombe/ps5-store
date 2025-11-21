export default function GameDetailSkeleton() {
  return (
    <div className="min-h-screen bg-background-dark pt-24 pb-12 animate-pulse">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Breadcrumbs Skeleton */}
        <div className="flex items-center gap-2 mb-6">
          <div className="h-4 bg-white/10 rounded w-32"></div>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery Skeleton */}
          <div>
            <div className="aspect-square bg-white/10 rounded-lg mb-4"></div>
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-square bg-white/10 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div>
            <div className="h-10 bg-white/10 rounded mb-4 w-3/4"></div>
            <div className="h-20 bg-white/10 rounded mb-6"></div>
            <div className="h-6 bg-white/10 rounded mb-6 w-1/2"></div>
            <div className="h-12 bg-white/10 rounded mb-6 w-1/3"></div>
            <div className="h-16 bg-white/10 rounded mb-6"></div>
            <div className="h-12 bg-white/10 rounded mb-8"></div>
            
            {/* Info badges */}
            <div className="space-y-3">
              <div className="h-6 bg-white/10 rounded w-2/3"></div>
              <div className="h-6 bg-white/10 rounded w-2/3"></div>
              <div className="h-6 bg-white/10 rounded w-2/3"></div>
            </div>
          </div>
        </div>

        {/* Tabs Skeleton */}
        <div className="mb-16">
          <div className="flex gap-1 border-b border-white/10 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-10 bg-white/10 rounded w-32 mb-2"></div>
            ))}
          </div>
          <div className="h-64 bg-white/10 rounded-lg"></div>
        </div>

        {/* Related Products Skeleton */}
        <div>
          <div className="h-8 bg-white/10 rounded mb-6 w-48"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <div className="aspect-square bg-white/10 rounded-lg mb-4"></div>
                <div className="h-5 bg-white/10 rounded mb-2 w-3/4"></div>
                <div className="h-6 bg-white/10 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
