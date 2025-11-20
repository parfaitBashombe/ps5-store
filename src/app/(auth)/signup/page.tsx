import React from "react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background-dark">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDfM5REoKP41HM9ZczhKOMJbvelf25df4-l8YUjXZ2f1qngk5V2csBNOLUNK_EKe6fzZtdLM3uLAMXs6CyW-Ve6QukGeHJ2ASd0IJbiT_nOrc-yVRvRTBe5-lvnrJlFuBEowWzN_QSKxy6E9oMe8wwOKViu3b-5bD_3kjZ_QCYB-vWGVimaVG71McLDZy6fayJN_n2bcH3z8FwTLLjKEhX2XAAIYnjO8Su1o2irhbpp9LT-t3s0n9EHh6wiO9nPRqsyOF9hezBZpw')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Back to Home Link */}
      <Link
        href="/"
        className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        <span className="font-medium">Back to Home</span>
      </Link>

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-black/40 p-8 backdrop-blur-md border border-white/10 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                clipRule="evenodd"
                d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                fill="currentColor"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
              >
                <span className="material-symbols-outlined text-[20px]">
                  visibility
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary py-3 font-bold text-white transition-colors hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-white/60">
          Already have an account?{" "}
          <Link href="/signin" className="font-medium text-primary hover:text-blue-400">
            Sign In
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 text-xs text-white/40">
        Terms of Service • Privacy Policy
      </div>
    </div>
  );
}
