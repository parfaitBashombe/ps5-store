import Link from "next/link";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const navLinks = [
  { label: "PS5", href: "#consoles" },
  { label: "Games", href: "#games" },
  { label: "Accessories", href: "#accessories" },
  { label: "Products", href: "/products" },
  { label: "Support", href: "#" },
];

const Navbar = () => {
  const cartCount = 2;

  return (
    <nav className="sticky top-0 z-50 bg-[#060a14] border-b border-white/5 shadow-[0_1px_40px_rgba(0,55,145,0.15)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#003791] to-[#0ea5e9] flex items-center justify-center shadow-lg shadow-[#003791]/40 group-hover:shadow-[#003791]/60 transition-shadow">
            <span className="text-white font-black text-sm leading-none tracking-tight">PS5</span>
          </div>
          <span className="text-white font-bold text-[15px] tracking-tight hidden sm:block">
            PlayStation<span className="text-[#0ea5e9]"> Store</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-150"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <button aria-label="Search" className="p-2.5 text-white/50 hover:text-white hover:bg-white/8 rounded-lg transition-all">
            <FaSearch size={15} />
          </button>

          <button aria-label="Cart" className="relative p-2.5 text-white/50 hover:text-white hover:bg-white/8 rounded-lg transition-all">
            <FaShoppingCart size={17} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-[#0ea5e9] text-white text-[9px] font-black rounded-full w-4 h-4 flex items-center justify-center shadow-lg shadow-[#0ea5e9]/40">
                {cartCount}
              </span>
            )}
          </button>

          <button aria-label="Profile" className="p-2.5 text-white/50 hover:text-white hover:bg-white/8 rounded-lg transition-all">
            <FaUser size={15} />
          </button>

          <div className="w-px h-5 bg-white/10 mx-1" />

          <Link
            href="#"
            className="inline-flex items-center h-9 px-5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#003791] to-[#0055cc] hover:from-[#0044aa] hover:to-[#0066dd] transition-all shadow-lg shadow-[#003791]/30"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
