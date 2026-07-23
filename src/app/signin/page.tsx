"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Header */}
<div className="text-center mb-10">
  <h1 className="text-2xl font-medium tracking-tight text-black">Sign in</h1>
  <p className="mt-2 text-black/50 text-sm font-normal tracking-wide">Enter your details to continue</p>
</div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* Email Input */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Email
            </label>
            <input
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-12 bg-transparent border-b border-black/10 px-0 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-12 bg-transparent border-b border-black/10 px-0 pr-14 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-all duration-300 text-[10px] tracking-[0.2em] uppercase font-medium"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-3.5 h-3.5 border border-black/20 rounded-sm checked:border-black checked:bg-black transition-all duration-300 cursor-pointer" />
              <span className="text-black/50 text-xs font-normal">Remember</span>
            </label>
            <Link href="/forgot-password" className="text-black/40 hover:text-black transition-all duration-300 text-xs font-medium">
              Forgot?
            </Link>
          </div>

          <button className="w-full h-12 rounded-xl bg-black text-white uppercase tracking-[0.25em] text-[10px] hover:bg-black/80 transition-all duration-300 font-medium">
            Sign In
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-black/40 text-xs font-normal">
            Don't have an account?{" "} <Link href="/register" className="text-black/70 hover:text-black font-medium transition-all duration-300">Create one</Link>
          </p>
        </div>
      </div>
    </main>
  );
}