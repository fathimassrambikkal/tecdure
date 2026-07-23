"use client";

import Link from "next/link";
import { useState } from "react";

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO:
    // Call Laravel Reset Password API here
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-5 py-16">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-serif tracking-[0.35em] uppercase">
            TECDURE
          </h1>

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/60">
            Reset Password
          </p>

          <p className="mt-3 text-sm text-white/40 leading-relaxed">
            Create a new secure password for your account.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* New Password */}

          <div>
            <label className="block mb-3 text-xs uppercase tracking-[0.25em] text-white/70">
              New Password
            </label>

            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                className="w-full h-14 rounded-xl border border-white/15 bg-transparent px-5 pr-20 text-white placeholder:text-white/30 outline-none focus:border-white transition"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="block mb-3 text-xs uppercase tracking-[0.25em] text-white/70">
              Confirm Password
            </label>

            <div className="relative">

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                className="w-full h-14 rounded-xl border border-white/15 bg-transparent px-5 pr-20 text-white placeholder:text-white/30 outline-none focus:border-white transition"
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
              >
                {showConfirm ? "Hide" : "Show"}
              </button>

            </div>
          </div>

          {/* Reset Button */}

          <button
            type="submit"
            className="w-full h-14 rounded-xl bg-white text-black uppercase tracking-[0.25em] text-xs hover:bg-neutral-200 transition"
          >
            Reset Password
          </button>

        </form>

        {/* Back */}

        <div className="text-center mt-10">

          <Link
            href="/signin"
            className="text-sm text-white/50 hover:text-white transition"
          >
            ← Back to Sign In
          </Link>

        </div>

      </div>
    </main>
  );
}