"use client";

export default function CategoryTabs({
  categories,
  selected,
  onSelect,
}: {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}) {
  return (
    <nav className="border-b border-gold/10">
      <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-4 sm:gap-3 sm:px-8">
        {categories.map((category) => {
          const isActive = category === selected;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              aria-pressed={isActive}
              className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2 font-sans text-sm tracking-wide transition-colors duration-200 ${
                isActive
                  ? "border-gold bg-gold text-ink"
                  : "border-gold/25 text-beige/80 hover:border-gold/60 hover:text-ivory"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
