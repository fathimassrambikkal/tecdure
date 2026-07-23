"use client";

import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Call Laravel Forgot Password API here
    console.log(email);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-medium tracking-tight text-black">
            Forgot password
          </h1>
          <p className="mt-2 text-black/50 text-sm font-normal tracking-wide">
            Enter your email to receive a reset link
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-12 bg-transparent border-b border-black/10 px-0 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-black text-white uppercase tracking-[0.25em] text-[10px] hover:bg-black/80 transition-all duration-300 font-medium"
          >
            Send Reset Link
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-px bg-black/5" />
          <span className="text-black/20 text-[10px] tracking-[0.3em] font-medium">
            OR
          </span>
          <div className="flex-1 h-px bg-black/5" />
        </div>

        {/* Back to Sign In */}
        <div className="text-center">
          <Link
            href="/signin"
            className="text-black/40 hover:text-black transition-all duration-300 text-xs font-medium"
          >
            ← Back to Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}