"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import SearchOverlay from "@/components/search/SearchOverlay";
import { AnimatePresence } from "framer-motion";
import {
  MenuIcon,
  SearchIcon,
  UserIcon,
  HeartIcon,
  CartIcon,
  CloseIcon,
  ChevronDownIcon,
} from "@/components/icons/Icons";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const { favorites } = useWishlistStore();
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const [currency, setCurrency] = useState("QAR");
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect for glass morphism intensity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setShowCurrencyDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/products", label: "SHOP" },
    { href: "/contact", label: "CONTACT" },
  ];

  const isActive = (href: string) => 
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const toggleLanguage = (lang: string) => {
    setLanguage(lang);
    setShowLangDropdown(false);
  };

  const toggleCurrency = (curr: string) => {
    setCurrency(curr);
    setShowCurrencyDropdown(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-out ${
          isHomePage
            ? scrolled
              ? "bg-white/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              : "bg-transparent backdrop-blur-sm"
            : "bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
        } border-b border-black/[0.06]`}
      >
        <div className="max-w-[1024px] mx-auto flex items-center justify-between px-6 h-[72px] relative">
          
          {/* LEFT SIDE - Mobile: Menu + Search */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => setOpen(true)} 
              className={`p-1.5 rounded-full hover:bg-white/5 transition-colors duration-300 relative group ${
                scrolled || !isHomePage ? "text-[#1a1a1a]" : "text-white"
              }`}
              aria-label="Open menu"
            >
              <MenuIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-90" />
            </button>
            
         {/* Search Icon - Mobile */}
<button
  onClick={() => setSearchOpen(true)}
  className={`p-1.5 rounded-full hover:bg-white/5 transition-colors duration-300 group ${
    scrolled || !isHomePage ? "text-[#1a1a1a]" : "text-white"
  }`}
  aria-label="Open search"
>
  <SearchIcon className="w-[17px] h-[17px] transition-transform duration-300 group-hover:scale-90" />
</button>
          </div>

          {/* LEFT SIDE - Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className="relative group"
              >
                <span className={`text-[10px] font-normal uppercase tracking-[0.3em] transition-colors duration-300 ${
                  isActive(link.href) 
                    ? "text-[#C9A96E]" 
                    : scrolled || !isHomePage
                      ? "text-[#1a1a1a]/80 hover:text-[#1a1a1a]" 
                      : "text-white hover:text-white"
                }`}>
                  {link.label}
                </span>
                
                {/* Minimal underline */}
                <span 
                  className={`absolute -bottom-1 left-0 h-[1px] bg-gradient-to-r from-[#C9A96E] to-transparent transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
                    isActive(link.href) || hoveredLink === link.href
                      ? "w-full opacity-100" 
                      : "w-0 opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* LOGO - Always Centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/" 
              className="flex-shrink-0 transition-all duration-700 hover:opacity-80 group"
            >
              <div className="relative">
                <Image
                  src="/logo-gold.png"
                  alt="TECDURE"
                  width={130}
                  height={44}
                  className="object-contain h-11 w-auto brightness-110 transition-all duration-700 group-hover:scale-[1.02] group-hover:brightness-125"
                  priority
                />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent transition-all duration-700 group-hover:w-full" />
              </div>
            </Link>
          </div>

          {/* RIGHT ICONS - Always visible on navbar */}
          <div className="flex items-center gap-5 ml-auto">
            {/* Language Toggle */}
            <div className="relative hidden md:block" ref={langRef}>
              <button
                onClick={() => setShowLangDropdown(!showLangDropdown)}
                className={`flex items-center gap-1.5 text-[10px] font-normal tracking-[0.2em] uppercase transition-colors duration-300 group ${
                  scrolled || !isHomePage ? "text-[#1a1a1a]/80 hover:text-[#C9A96E]" : "text-white hover:text-[#C9A96E]"
                }`}
              >
                <span>{language}</span>
                <ChevronDownIcon
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${
                    scrolled || !isHomePage ? "text-[#1a1a1a]/40" : "text-white/60"
                  } ${showLangDropdown ? "rotate-180" : "group-hover:rotate-180"}`}
                />
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 mt-3 min-w-[80px] bg-white/95 backdrop-blur-2xl rounded-2xl border border-[#1a1a1a]/5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {["EN", "AR"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => toggleLanguage(lang)}
                      className={`w-full px-6 py-2.5 text-[10px] font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                        language === lang 
                          ? "text-[#C9A96E] bg-[#C9A96E]/10" 
                          : "text-[#1a1a1a]/80 hover:text-[#1a1a1a] hover:bg-[#1a1a1a]/5"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Toggle */}
            <div className="relative hidden md:block" ref={currencyRef}>
              <button
                onClick={() => setShowCurrencyDropdown(!showCurrencyDropdown)}
                className={`flex items-center gap-1.5 text-[10px] font-normal tracking-[0.1em] transition-colors duration-300 group ${
                  scrolled || !isHomePage ? "text-[#1a1a1a]/80 hover:text-[#C9A96E]" : "text-white hover:text-[#C9A96E]"
                }`}
              >
                <span>{currency}</span>
                <ChevronDownIcon
                  className={`w-2.5 h-2.5 transition-transform duration-300 ${
                    scrolled || !isHomePage ? "text-[#1a1a1a]/40" : "text-white/60"
                  } ${showCurrencyDropdown ? "rotate-180" : "group-hover:rotate-180"}`}
                />
              </button>
              {showCurrencyDropdown && (
                <div className="absolute right-0 mt-3 min-w-[90px] bg-white/95 backdrop-blur-2xl rounded-2xl border border-[#1a1a1a]/5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {["QAR", "SAR", "AED", "USD"].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => toggleCurrency(curr)}
                      className={`w-full px-6 py-2.5 text-[10px] font-light tracking-[0.1em] transition-colors duration-300 ${
                        currency === curr 
                          ? "text-[#C9A96E] bg-[#C9A96E]/10" 
                          : "text-[#1a1a1a]/80 hover:text-[#1a1a1a] hover:bg-[#1a1a1a]/5"
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Divider */}
            <div className={`hidden md:block w-px h-5 ${
              scrolled || !isHomePage ? "bg-[#1a1a1a]/10" : "bg-white/10"
            }`} />

            {/* ICONS - Desktop: Show all icons */}
            {/* 1. Search - Desktop only */}
            <div className="hidden md:block">
              <button
                onClick={() => setSearchOpen(true)}
                className="relative group"
              >
                <div
                  className={`p-1.5 rounded-full transition-colors duration-300 ${
                    scrolled || !isHomePage
                      ? "hover:bg-[#1a1a1a]/5"
                      : "hover:bg-white/5"
                  }`}
                >
                  <SearchIcon
                    className={`w-[17px] h-[17px] transition-transform duration-300 group-hover:scale-110 ${
                      scrolled || !isHomePage
                        ? "text-[#1a1a1a]/80 group-hover:text-[#C9A96E]"
                        : "text-white group-hover:text-[#C9A96E]"
                    }`}
                  />
                </div>
              </button>
            </div>

            {/* 2. Login / Account - Desktop only */}
            <div className="hidden md:block">
              <IconButton
  href="/signin"
  icon="user"
  scrolled={scrolled}
  isHomePage={isHomePage}
/>
            </div>

            {/* 3. Favorites / Wishlist - Desktop & Mobile with badge */}
            <IconButton 
              href="/favorites" 
              icon="heart" 
              badge={favorites.length} 
              scrolled={scrolled}
              isHomePage={isHomePage}
            />

            {/* 4. Shopping Bag / Cart - Desktop & Mobile */}
            <Link href="/cart" className="relative group">
              <div className={`p-1.5 rounded-full transition-colors duration-300 group-hover:bg-white/5 ${
                scrolled || !isHomePage ? "hover:bg-[#1a1a1a]/5" : "hover:bg-white/5"
              }`}>
                <CartIcon
                  className={`w-[17px] h-[17px] transition-transform duration-300 group-hover:scale-110 ${
                    scrolled || !isHomePage ? "text-[#1a1a1a]/80 group-hover:text-[#C9A96E]" : "text-white group-hover:text-[#C9A96E]"
                  }`}
                />
              </div>
              {cart.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#C9A96E] text-white text-[8px] font-medium tracking-wide animate-in fade-in zoom-in duration-300">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - Overlay from left */}
      {open && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden animate-in fade-in duration-300"
            onClick={() => setOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 left-0 h-full w-[300px] bg-white/5 backdrop-blur-2xl border-r border-white/10 z-50 md:hidden animate-in slide-in-from-left duration-500 shadow-2xl">
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-white/5 transition-all duration-300 group"
                aria-label="Close menu"
              >
                <CloseIcon className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-90" />
              </button>
            </div>

            {/* Mobile Navigation Links - Clean version without mask */}
            <div className="px-8 py-4 flex flex-col gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group relative overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span 
                    className={`block text-[28px] font-light tracking-[0.15em] transition-colors duration-300 ${
                      isActive(link.href) 
                        ? "text-[#C9A96E]" 
                        : "text-white hover:text-[#C9A96E]"
                    }`}
                  >
                    {link.label}
                  </span>
                  
                  {/* Decorative line that appears on hover */}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C9A96E] to-transparent transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Language, Currency & Login */}
            <div className="absolute bottom-8 left-0 right-0 px-8">
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
                {/* Login/Account - Now in mobile menu */}
                <Link 
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 text-[13px] font-light text-white hover:text-[#C9A96E] transition-colors duration-300 py-2 group"
                >
                  <UserIcon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Login / Account</span>
                </Link>

                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-light text-white/40 uppercase tracking-[0.3em]">Language</span>
                  <div className="flex gap-3">
                    {["EN", "AR"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setOpen(false);
                        }}
                        className={`text-[11px] font-light tracking-[0.2em] uppercase transition-colors duration-300 ${
                          language === lang ? "text-[#C9A96E]" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] font-light text-white/40 uppercase tracking-[0.3em]">Currency</span>
                  <div className="flex gap-3">
                    {["QAR", "SAR", "AED", "USD"].map((curr) => (
                      <button
                        key={curr}
                        onClick={() => {
                          setCurrency(curr);
                          setOpen(false);
                        }}
                        className={`text-[11px] font-light tracking-[0.1em] transition-colors duration-300 ${
                          currency === curr ? "text-[#C9A96E]" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Spacer */}
      {pathname !== "/" && <div className="h-[72px]" />}

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <SearchOverlay
            onClose={() => setSearchOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Reusable Icon Button Component
function IconButton({ 
  href, 
  icon, 
  badge = 0,
  scrolled = false,
  isHomePage = true
}: { 
  href: string; 
  icon: "search" | "heart" | "user"; 
  badge?: number;
  scrolled?: boolean;
  isHomePage?: boolean;
}) {
  const IconComponent = icon === "search" ? SearchIcon : icon === "heart" ? HeartIcon : UserIcon;

  return (
    <Link href={href} className="relative group">
      <div className={`p-1.5 rounded-full transition-colors duration-300 ${
        scrolled || !isHomePage ? "hover:bg-[#1a1a1a]/5" : "hover:bg-white/5"
      }`}>
        <IconComponent
          className={`w-[17px] h-[17px] transition-transform duration-300 group-hover:scale-110 ${
            scrolled || !isHomePage ? "text-[#1a1a1a]/80 group-hover:text-[#C9A96E]" : "text-white group-hover:text-[#C9A96E]"
          }`}
        />
      </div>
      {badge > 0 && (
        <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-[#C9A96E] text-white text-[8px] font-medium tracking-wide animate-in fade-in zoom-in duration-300">
          {badge}
        </span>
      )}
    </Link>
  );
}