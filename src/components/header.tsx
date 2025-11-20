"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/theme-context";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-center border-b border-solid border-white/10 bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-8">
      <div className="flex w-full max-w-7xl items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 text-white">
            <div className="size-6">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
              PS5 Store
            </h2>
          </Link>
          <nav className="hidden items-center gap-9 md:flex">
            <Link
              className={`${
                isActive("/") ? "text-white" : "text-white/80"
              } text-sm font-bold leading-normal transition-colors hover:text-white`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`${
                isActive("/about") ? "text-white" : "text-white/80"
              } text-sm font-medium leading-normal transition-colors hover:text-white`}
              href="/about"
            >
              About
            </Link>
            <Link
              className={`${
                isActive("/testimonials") ? "text-white" : "text-white/80"
              } text-sm font-medium leading-normal transition-colors hover:text-white`}
              href="/testimonials"
            >
              Testimonials
            </Link>
            <Link
              className={`${
                isActive("/contact") ? "text-white" : "text-white/80"
              } text-sm font-medium leading-normal transition-colors hover:text-white`}
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          <label className="hidden sm:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-white/50 flex border-none bg-white/10 items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined text-[20px]">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border-none bg-white/10 focus:border-none h-full placeholder:text-white/50 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                placeholder="Search"
              />
            </div>
          </label>
          <div className="flex gap-2">
            <button
              onClick={toggleTheme}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            >
              <span className="material-symbols-outlined text-[20px]">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>
            <Link
              href="/signin"
              className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <span className="material-symbols-outlined text-[20px]">
                person
              </span>
            </Link>
            <button className="relative flex max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 bg-primary text-white transition-colors hover:bg-blue-600 gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4">
              <span className="material-symbols-outlined text-[20px]">
                shopping_cart
              </span>
              <span className="hidden sm:inline">Cart</span>
              <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white ring-2 ring-background-dark">
                3
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
