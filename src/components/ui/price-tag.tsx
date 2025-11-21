interface PriceTagProps {
  price: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function PriceTag({ price, size = 'md', className = '' }: PriceTagProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <p className={`font-bold text-primary ${sizeClasses[size]} ${className}`}>
      {price}
    </p>
  );
}
