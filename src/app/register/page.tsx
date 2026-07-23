"use client";

import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-medium tracking-tight text-black">
            Create account
          </h1>
          <p className="mt-2 text-black/50 text-sm font-normal tracking-wide">
            Enter your details to get started
          </p>
        </div>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          {/* First Name */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full h-12 bg-transparent border-b border-black/10 px-0 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full h-12 bg-transparent border-b border-black/10 px-0 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full h-12 bg-transparent border-b border-black/10 px-0 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+974 XXXXXXXX"
              className="w-full h-12 bg-transparent border-b border-black/10 px-0 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
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

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-[10px] tracking-[0.3em] uppercase text-black/60 font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full h-12 bg-transparent border-b border-black/10 px-0 pr-14 text-black placeholder:text-black/25 outline-none transition-all duration-300 focus:border-black/40 text-sm font-normal"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-black/40 hover:text-black transition-all duration-300 text-[10px] tracking-[0.2em] uppercase font-medium"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              className="w-3.5 h-3.5 border border-black/20 rounded-sm checked:border-black checked:bg-black transition-all duration-300 cursor-pointer"
            />
            <span className="text-black/50 text-xs font-normal">
              I agree to the{" "}
              <Link
                href="/terms"
                className="text-black/70 hover:text-black font-medium transition-all duration-300"
              >
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-black/70 hover:text-black font-medium transition-all duration-300"
              >
                Privacy Policy
              </Link>
            </span>
          </div>

          {/* Button */}
          <button className="w-full h-12 rounded-xl bg-black text-white uppercase tracking-[0.25em] text-[10px] hover:bg-black/80 transition-all duration-300 font-medium">
            Create Account
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

        {/* Sign In Link */}
        <div className="text-center">
          <p className="text-black/40 text-xs font-normal">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-black/70 hover:text-black font-medium transition-all duration-300"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}