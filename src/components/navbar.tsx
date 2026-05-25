"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { label: "PS5", href: "#consoles" },
  { label: "Games", href: "#games" },
  { label: "Accessories", href: "#accessories" },
  { label: "Bundles", href: "#bundles" },
  { label: "Support", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(2);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="bg-[#003791] rounded-lg w-9 h-9 flex items-center justify-center">
            <span className="text-white font-black text-sm leading-none">PS</span>
          </div>
          <span className="text-[#003791] font-bold text-lg tracking-tight hidden sm:block">
            PlayStation Store
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-[#003791] transition-colors duration-150"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="p-2 text-gray-500 hover:text-[#003791] transition-colors"
          >
            <FaSearch size={16} />
          </button>

          <button
            aria-label="Cart"
            className="relative p-2 text-gray-500 hover:text-[#003791] transition-colors"
          >
            <FaShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#003791] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <Link
            href="#"
            className="hidden sm:inline-flex items-center h-9 px-4 rounded-full text-sm font-semibold text-white bg-[#003791] hover:bg-[#00277a] transition-colors"
          >
            Sign In
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 text-gray-500 hover:text-[#003791] transition-colors"
          >
            {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700 hover:text-[#003791] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#"
            className="inline-flex justify-center items-center h-10 rounded-full text-sm font-semibold text-white bg-[#003791]"
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
