interface SortOption {
  value: string;
  label: string;
}

interface SortDropdownProps {
  sortBy: string;
  onSortChange: (sortValue: string) => void;
  options: SortOption[];
}

export default function SortDropdown({ sortBy, onSortChange, options }: SortDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const selectedOption = options.find(opt => opt.value === sortBy) || options[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm hover:bg-white/10"
      >
        Sort by: {selectedOption.label}
        <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 bg-background-dark border border-white/10 rounded-lg overflow-hidden z-10 min-w-[200px]">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onSortChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                sortBy === option.value ? 'bg-primary text-white' : 'text-white/80 hover:bg-white/5'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// Add React import at the top
import React from 'react';
