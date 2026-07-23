// components/search/SearchOverlay.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { products, type Product } from "@/data/products";

// Icons
const SearchIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CloseIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowRightIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface SearchOverlayProps {
  onClose: () => void;
}

// Type definitions
interface Suggestion {
  id: number;
  name: string;
  category: string;
}

interface Category {
  name: string;
  count: number;
}

export default function SearchOverlay({ onClose }: SearchOverlayProps) {
  const [closing, setClosing] = useState(false);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
const inputRef = useRef<HTMLInputElement | null>(null);

  // Trending searches
  const trendingSearches = ["Abaya", "Dress", "Turbana"];

  // Filter logic
  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();

    if (query === "") {
      setFilteredProducts([]);
      setSuggestions([]);
      setCategories([]);
      return;
    }

    const results: Product[] = products.filter(
      (product: Product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.description && product.description.toLowerCase().includes(query))
    );

    setFilteredProducts(results);

    const uniqueSuggestions: Suggestion[] = [];
    const seenNames = new Set<string>();
    
    results.forEach((product: Product) => {
      if (!seenNames.has(product.name)) {
        seenNames.add(product.name);
        uniqueSuggestions.push({
          id: product.id,
          name: product.name,
          category: product.category,
        });
      }
    });
    
    setSuggestions(uniqueSuggestions.slice(0, 8));

    const uniqueCategories: string[] = [
      ...new Set(results.map((p: Product) => p.category)),
    ];
    const categoriesWithCount: Category[] = uniqueCategories.map((cat) => ({
      name: cat,
      count: results.filter((p: Product) => p.category === cat).length,
    }));
    setCategories(categoriesWithCount);
  }, [searchQuery]);

  // Auto-focus input on mount
  useEffect(() => {
    if (inputRef.current !== null) {
  setTimeout(() => {
    inputRef.current?.focus();
  }, 400);
}
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const handleTrendingClick = (term: string) => {
    setSearchQuery(term);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSuggestionClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      onClose();
    }, 700);
  };

  return (
    <motion.div
      initial={{
        y: "-100%",
        opacity: 1,
      }}
      animate={{
        y: closing ? "-100%" : 0,
        opacity: 1,
      }}
      exit={{
        y: "-100%",
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header with Close */}
        <div className="flex justify-end mb-8 sm:mb-12">
          <button
            onClick={handleClose}
            className="group flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-black/60 hover:text-black transition-colors duration-300"
          >
            <span className="font-light">Close</span>
            <CloseIcon className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
          </button>
        </div>

        {/* Search Input - Staggered animation */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="relative">
            <SearchIcon className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 text-black/30" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-6 text-2xl sm:text-3xl md:text-4xl font-light text-black placeholder:text-black/20 bg-transparent border-b border-black/10 focus:border-black/40 outline-none transition-all duration-300"
              autoFocus
            />
            <AnimatePresence>
              {searchQuery && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setSearchQuery("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-black/5 transition-colors"
                >
                  <CloseIcon className="w-5 h-5 text-black/30" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {!searchQuery ? (
            // Trending Searches
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex flex-wrap gap-3">
                {trendingSearches.map((term, index) => (
                  <motion.button
                    key={term}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.6 + index * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => handleTrendingClick(term)}
                    className="px-6 py-3 bg-black/5 hover:bg-black/10 rounded-full text-sm font-light text-black/70 hover:text-black transition-all duration-300"
                  >
                    {term}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : filteredProducts.length === 0 ? (
            // No Results
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-center py-20"
            >
              <div className="inline-block p-6 rounded-full bg-black/5 mb-6">
                <SearchIcon className="w-10 h-10 text-black/20" />
              </div>
              <h3 className="text-2xl font-light text-black/60 mb-2">
                No results found
              </h3>
              <p className="text-sm text-black/30">
                Try adjusting your search terms or browse our categories
              </p>
            </motion.div>
          ) : (
            // Results with Suggestions, Categories, and Products
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="space-y-8"
            >
              {/* Suggestions */}
              {suggestions.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 0.5,
                  }}
                >
                  <h3 className="text-xs tracking-[0.25em] uppercase text-black/30 font-medium mb-4">
                    Suggestions
                  </h3>
                  <div className="space-y-1">
                    {suggestions.map((suggestion, index) => (
                      <motion.button
                        key={suggestion.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.5 + index * 0.03,
                          duration: 0.3,
                        }}
                        onClick={() => handleSuggestionClick(suggestion.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-black/5 rounded-xl transition-colors duration-200 group"
                      >
                        <SearchIcon className="w-4 h-4 text-black/30 flex-shrink-0" />
                        <span className="text-sm sm:text-base font-light text-black/80 group-hover:text-black transition-colors">
                          {suggestion.name}
                        </span>
                        <span className="ml-auto text-xs text-black/20">
                          {suggestion.category}
                        </span>
                        <ArrowRightIcon className="w-3 h-3 text-black/20 group-hover:text-black/40 transition-colors" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Categories */}
              {categories.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-6 border-t border-black/5"
                >
                  <h3 className="text-xs tracking-[0.25em] uppercase text-black/30 font-medium mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <span
                        key={cat.name}
                        className="px-4 py-2 bg-black/5 rounded-full text-xs font-light text-black/60"
                      >
                        {cat.name} ({cat.count})
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Products Grid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-6 border-t border-black/5"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xs tracking-[0.25em] uppercase text-black/30 font-medium">
                    Products ({filteredProducts.length})
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.8 + index * 0.04,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => handleProductClick(product.id)}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden bg-[#f5f5f5] rounded-2xl aspect-[3/4]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                        
                        {/* Subtle hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                      </div>

                      <div className="mt-3 space-y-1.5">
                        <p className="uppercase tracking-[0.2em] text-[8px] text-black/30 font-medium">
                          {product.category}
                        </p>
                        <h4 className="text-sm font-light text-black/80 leading-tight group-hover:text-black transition-colors">
                          {product.name}
                        </h4>
                    
                        <p className="text-sm font-medium text-black/60">
                          QAR {product.price}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}