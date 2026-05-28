"use client";

import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaShieldAlt, FaGamepad } from "react-icons/fa";

const perks = [
  "Exclusive launch day deals",
  "Early access to new titles",
  "PS Plus member discounts",
];

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="bundles" className="bg-[#060a14] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/5">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#003791]/50 via-[#060a14] to-[#0ea5e9]/20" />
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#003791]/20 blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-[#0ea5e9]/10 blur-[80px]" />

          <div className="relative px-8 py-14 lg:px-16 lg:py-20">
            <div className="max-w-2xl mx-auto text-center flex flex-col gap-8">

              {/* Icon */}
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-[#003791] to-[#0ea5e9] flex items-center justify-center shadow-xl shadow-[#003791]/40">
                <FaEnvelope size={22} className="text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="text-[#0ea5e9] text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Stay in the Loop
                </p>
                <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
                  Get Exclusive Deals
                </h2>
                <p className="text-white/40 text-base leading-relaxed">
                  Be the first to hear about new releases, console bundles,
                  and member-exclusive discounts delivered to your inbox.
                </p>
              </div>

              {/* Perks */}
              <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/50">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                    {p}
                  </li>
                ))}
              </ul>

              {/* Form */}
              {submitted ? (
                <div className="rounded-2xl border border-[#0ea5e9]/20 bg-[#0ea5e9]/8 px-8 py-6 flex flex-col items-center gap-2">
                  <FaGamepad size={28} className="text-[#0ea5e9]" />
                  <p className="text-white font-bold text-lg">You&apos;re in!</p>
                  <p className="text-white/40 text-sm">Welcome to the PlayStation community.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 h-13 px-5 rounded-xl border border-white/10 bg-white/5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-[#0ea5e9]/50 focus:bg-white/8 transition-all backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 h-13 px-7 rounded-xl bg-gradient-to-r from-[#003791] to-[#0055cc] text-white text-sm font-bold hover:from-[#0044aa] hover:to-[#0066dd] transition-all shadow-lg shadow-[#003791]/30 shrink-0 group"
                  >
                    Subscribe
                    <FaArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}

              {/* Privacy note */}
              <p className="flex items-center justify-center gap-1.5 text-white/20 text-xs">
                <FaShieldAlt size={10} />
                No spam. Your data is protected. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
