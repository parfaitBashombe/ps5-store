# Skeleton Components

Loading state components for better UX during data fetching.

## Available Skeletons

### ProductCardSkeleton
For game/product card loading states in grids.

```tsx
import { ProductCardSkeleton } from '@/components/skeletons';

// Show 6 skeleton cards while loading
{loading && (
  <div className="grid grid-cols-3 gap-6">
    {[...Array(6)].map((_, i) => (
      <ProductCardSkeleton key={i} />
    ))}
  </div>
)}
```

### GameDetailSkeleton
For game detail page loading states.

```tsx
import { GameDetailSkeleton } from '@/components/skeletons';

if (loading) {
  return <GameDetailSkeleton />;
}
```

### TestimonialCardSkeleton
For review/testimonial card loading states.

```tsx
import { TestimonialCardSkeleton } from '@/components/skeletons';

// Show 3 skeleton testimonials
{loading && (
  <div className="grid gap-4">
    {[...Array(3)].map((_, i) => (
      <TestimonialCardSkeleton key={i} />
    ))}
  </div>
)}
```

## Features

- ✨ Matches actual component structure
- 🎨 Uses consistent design tokens
- ⚡ Smooth pulse animation
- 📱 Fully responsive

## Usage

All skeletons can be imported from the index:

```tsx
import { 
  ProductCardSkeleton, 
  GameDetailSkeleton, 
  TestimonialCardSkeleton 
} from '@/components/skeletons';
```
