import Link from "next/link";

const categories = [
  { label: "All", href: "/products" },
  { label: "Consoles", href: "/products/consoles" },
  { label: "Games", href: "/products/games" },
  { label: "Controllers", href: "/products/controllers" },
  { label: "Accessories", href: "/products/accessories" },
];

const CategoryNav = () => {
  return (
    <div className="bg-[#060a14] border-b border-white/5 p-4 sticky top-[70px] z-100">
      <div className="max-w-7xl mx-auto flex items-center gap-3 flex-wrap">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            href={cat.href}
            className="px-4 py-2 rounded-full text-xs font-bold tracking-wide border border-white/10 text-white/50 hover:text-white hover:border-ps-blue hover:bg-ps-blue/20  transition-all duration-200"
          >
            {cat.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;