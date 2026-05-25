"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="bundles" className="bg-[#f5f5f7] py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-[#003791] text-sm font-semibold tracking-widest uppercase mb-3">
          Stay in the Loop
        </p>
        <h2 className="text-3xl lg:text-4xl font-black text-[#1d1d1f] tracking-tight mb-4">
          Get Exclusive Deals
        </h2>
        <p className="text-gray-500 text-base mb-8 leading-relaxed">
          Be the first to hear about new game releases, console bundles, and
          member-exclusive discounts.
        </p>

        {submitted ? (
          <div className="bg-[#003791] text-white rounded-2xl py-6 px-8 font-semibold text-lg">
            You&apos;re in! Welcome to the PlayStation community.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 h-12 px-5 rounded-full border border-gray-200 bg-white text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#003791] focus:ring-2 focus:ring-[#003791]/20 transition"
            />
            <button
              type="submit"
              className="h-12 px-6 rounded-full bg-[#003791] text-white text-sm font-bold hover:bg-[#00277a] transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-gray-400 text-xs mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
