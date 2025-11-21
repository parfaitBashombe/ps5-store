interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryTabsProps) {
  return (
    <div className="flex gap-2 mb-6 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
            selectedCategory === cat
              ? 'bg-primary text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
