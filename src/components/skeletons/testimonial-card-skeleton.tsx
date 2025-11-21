export default function TestimonialCardSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 animate-pulse">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/10"></div>
          <div>
            <div className="h-5 bg-white/10 rounded w-24 mb-2"></div>
            <div className="h-4 bg-white/10 rounded w-32"></div>
          </div>
        </div>
        <div className="h-6 bg-white/10 rounded w-20"></div>
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-5 h-5 bg-white/10 rounded"></div>
        ))}
      </div>

      {/* Title */}
      <div className="h-6 bg-white/10 rounded mb-3 w-2/3"></div>

      {/* Text */}
      <div className="space-y-2">
        <div className="h-4 bg-white/10 rounded w-full"></div>
        <div className="h-4 bg-white/10 rounded w-full"></div>
        <div className="h-4 bg-white/10 rounded w-3/4"></div>
      </div>
    </div>
  );
}
