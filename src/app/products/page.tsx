"use client";

import { useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SectionTitle from "@/components/section-title";
import ProductCard from "@/components/product-card";
import { products } from "@/lib/data/product";

type RatingFilter = "all" | "4" | "4.5" | "4.8" | "5";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [ratingFilter, setRatingFilter] = useState<RatingFilter>("all");

  const filteredProducts = useMemo(() => {
    const search = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search);

      const matchesRating =
        ratingFilter === "all"
          ? true
          : ratingFilter === "5"
            ? product.rating >= 4.9
            : product.rating >= Number(ratingFilter);

      return matchesSearch && matchesRating;
    });
  }, [query, ratingFilter]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 md:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Products"
        title="Browse the Full Collection"
        description="Search for products and filter by rating to find the right gear faster."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_0.5fr]">
        <label className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 shadow-xl shadow-blue-950/15 backdrop-blur-xl">
          <FaSearch className="text-blue-300" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-sm text-white placeholder:text-slate-400 focus:outline-none"
          />
        </label>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value as RatingFilter)}
          className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white shadow-xl shadow-blue-950/15 backdrop-blur-xl focus:outline-none"
        >
          <option value="all">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.8">4.8+ Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} variant="grid" />
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="mt-14 rounded-[1.75rem] border border-white/10 bg-white/5 p-10 text-center text-slate-300 backdrop-blur-xl">
          No products matched your search.
        </div>
      ) : null}
    </section>
  );
}
