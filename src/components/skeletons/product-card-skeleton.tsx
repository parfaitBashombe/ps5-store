export default function ProductCardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square bg-white/10"></div>

      {/* Content Skeleton */}
      <div className="p-4">
        {/* Title */}
        <div className="h-5 bg-white/10 rounded mb-3 w-3/4"></div>
        
        {/* Price */}
        <div className="h-8 bg-white/10 rounded mb-3 w-1/2"></div>
        
        {/* Button */}
        <div className="h-10 bg-white/10 rounded w-full"></div>
      </div>
    </div>
  );
}
