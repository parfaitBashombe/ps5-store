import React from "react";
import Link from "next/link";

export default function SigninPage() {
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

      {/* Login Card */}
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
          <h1 className="text-3xl font-bold text-white">Sign In</h1>
        </div>

        <form className="space-y-6">
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
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-white/80">
                Password
              </label>
              <Link
                href="#"
                className="text-sm font-medium text-primary hover:text-blue-400"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
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
            Sign In
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-transparent px-2 text-white/40 backdrop-blur-md">
              OR
            </span>
          </div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-white/10 bg-white/5 py-3 font-medium text-white transition-colors hover:bg-white/10"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>

        <div className="mt-8 text-center text-sm text-white/60">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-medium text-primary hover:text-blue-400">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="absolute bottom-4 text-xs text-white/40">
        Terms of Service • Privacy Policy
      </div>
    </div>
  );
}
