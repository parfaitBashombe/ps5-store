interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  showCount?: boolean;
  reviewCount?: number;
}

export default function RatingStars({ 
  rating, 
  maxRating = 5, 
  size = 'md',
  showCount = false,
  reviewCount = 0
}: RatingStarsProps) {
  const sizeClasses = {
    sm: 'text-[16px]',
    md: 'text-[20px]',
    lg: 'text-[24px]'
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(maxRating)].map((_, i) => (
          <span
            key={i}
            className={`material-symbols-outlined ${sizeClasses[size]} ${
              i < Math.floor(rating) ? 'text-yellow-400' : 'text-white/20'
            }`}
            style={{ fontVariationSettings: i < Math.floor(rating) ? "'FILL' 1" : "'FILL' 0" }}
          >
            star
          </span>
        ))}
      </div>
      {showCount && reviewCount > 0 && (
        <span className="text-white/60 text-sm">({reviewCount})</span>
      )}
    </div>
  );
}
