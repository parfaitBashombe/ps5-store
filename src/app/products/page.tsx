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
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Products"
        title="Browse the Full Collection"
        description="Search products and filter by rating."
      />

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.4fr]">
        <label className="flex items-center gap-3 rounded-full border border-card-border bg-card px-5 py-3 backdrop-blur-xl">
          <FaSearch className="text-primary" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
        </label>

        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value as RatingFilter)}
          className="rounded-full border border-card-border bg-card px-5 py-3 text-sm text-foreground backdrop-blur-xl focus:outline-none"
        >
          <option value="all">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="4.5">4.5+ Stars</option>
          <option value="4.8">4.8+ Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} variant="grid" />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-14 rounded-3xl border border-card-border bg-card p-8 text-center text-muted-foreground backdrop-blur-xl">
          No products matched your search.
        </div>
      )}
    </section>
  );
}
