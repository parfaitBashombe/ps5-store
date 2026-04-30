/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaShoppingCart, FaGamepad } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full transition-all duration-300"
      style={{
        borderBottom: scrolled
          ? "1px solid rgba(0,212,255,0.12)"
          : "1px solid transparent",
        background: scrolled ? "rgba(5,8,22,0.92)" : "rgba(5,8,22,0.6)",
        backdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* ── Logo ─────────────────────────────────────── */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div
            className="flex items-center justify-center rounded-xl p-2"
            style={{ background: "rgba(0,102,255,0.15)" }}
          >
            <FaGamepad style={{ color: "var(--accent)", fontSize: 14 }} />
          </div>
          <span
            className="font-display text-lg font-bold tracking-wide"
            style={{ color: "var(--foreground)" }}
          >
            PS5{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--primary), var(--accent))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Store
            </span>
          </span>
        </Link>

        {/* ── Desktop Nav ──────────────────────────────── */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200"
                style={{
                  color: active
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                  background: active ? "rgba(0,102,255,0.12)" : "transparent",
                }}
              >
                {link.label}

                {/* Active indicator dot */}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 4,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--accent)",
                      boxShadow: "0 0 8px var(--accent)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* ── Actions ──────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <button
            aria-label="Shopping cart"
            className="relative rounded-xl p-2.5 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              border: "1px solid var(--card-border)",
              background: "rgba(255,255,255,0.04)",
              color: "var(--foreground)",
            }}
          >
            <FaShoppingCart size={14} />
            <span
              className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full px-1 font-display text-[9px] font-bold text-white"
              style={{ background: "var(--primary)" }}
            >
              2
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-xl p-2.5 transition-all duration-200 md:hidden"
            style={{
              border: "1px solid var(--card-border)",
              background: open
                ? "rgba(0,102,255,0.15)"
                : "rgba(255,255,255,0.04)",
              color: open ? "var(--accent)" : "var(--foreground)",
            }}
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={14} /> : <FaBars size={14} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ──────────────────────────────── */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out md:hidden"
        style={{
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
          borderTop: open
            ? "1px solid var(--card-border)"
            : "1px solid transparent",
        }}
      >
        <div
          className="px-4 py-4 backdrop-blur-xl"
          style={{ background: "rgba(5,8,22,0.96)" }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200"
                  style={{
                    background: active ? "rgba(0,102,255,0.12)" : "transparent",
                    color: active ? "var(--accent)" : "var(--muted-foreground)",
                    borderLeft: active
                      ? "2px solid var(--accent)"
                      : "2px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
