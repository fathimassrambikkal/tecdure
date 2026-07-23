// app/category/[slug]/page.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import ProductCard from "@/components/ui/ProductCard";
import { products, getCategoryProducts, getUniqueSizes, getUniqueColors } from "@/data/products";

// Get unique categories
const categories = Array.from(new Set(products.map(p => p.slug))).map(slug => ({
  name: products.find(p => p.slug === slug)?.category || slug,
  slug: slug
}));

const sizeOptions = getUniqueSizes();
const colorOptions = getUniqueColors();

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const category = categories.find((c) => c.slug === slug);
  const categoryProducts = getCategoryProducts(slug);

  // Filter states
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showInStock, setShowInStock] = useState(false);
  const [sortBy, setSortBy] = useState("newest");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter products
  const filteredProducts = categoryProducts.filter((product) => {
    if (selectedSizes.length > 0) {
      if (!product.sizes.some(s => selectedSizes.includes(s))) return false;
    }
    if (selectedColors.length > 0) {
      if (!product.colors.some(c => selectedColors.includes(c))) return false;
    }
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (showInStock && !product.inStock) return false;
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const clearFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setPriceRange([0, 2000]);
    setShowInStock(false);
    setSortBy("newest");
  };

  const hasActiveFilters = selectedSizes.length > 0 || selectedColors.length > 0 || showInStock || priceRange[0] > 0 || priceRange[1] < 2000;

  // Mobile filter sidebar - No overlay
  const MobileFilterOverlay = () => (
    <div className="fixed inset-0 z-50 md:hidden pointer-events-none">
      {/* Filter Panel - slides in from right */}
      <div className={`absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out pointer-events-auto ${
        isFilterOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-black/5">
          <h3 className="text-sm font-semibold tracking-[0.15em] uppercase">Filters</h3>
          <button
            onClick={() => setIsFilterOpen(false)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Filter Content */}
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100%-64px)]">
          {/* Size Filter */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-3">
              Size
            </h4>
            <div className="flex flex-wrap gap-2">
              {sizeOptions.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wider rounded-full border transition-all duration-300 ${
                    selectedSizes.includes(size)
                      ? "border-black bg-black text-white"
                      : "border-black/15 text-black/60 hover:border-black/40 hover:text-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-3">
              Color
            </h4>
            <div className="flex flex-wrap gap-2">
              {colorOptions.map((color) => (
                <button
                  key={color}
                  onClick={() => toggleColor(color)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wider rounded-full border transition-all duration-300 ${
                    selectedColors.includes(color)
                      ? "border-black bg-black text-white"
                      : "border-black/15 text-black/60 hover:border-black/40 hover:text-black"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-3">
              Price Range
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-black/60">
                <span>QAR {priceRange[0]}</span>
                <span>QAR {priceRange[1]}</span>
              </div>
              <input
                type="range"
                min="0"
                max="2000"
                step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="w-full h-0.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
              />
            </div>
          </div>

          {/* Stock Filter */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowInStock(!showInStock)}
              className={`w-4 h-4 rounded border transition-all duration-300 flex items-center justify-center ${
                showInStock ? "border-black bg-black" : "border-black/20 bg-transparent"
              }`}
            >
              {showInStock && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-black/60">
              In Stock Only
            </span>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={() => setIsFilterOpen(false)}
            className="w-full py-3 bg-black text-white text-xs font-medium tracking-[0.15em] uppercase rounded-full hover:bg-black/90 transition-colors"
          >
            Apply Filters
          </button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <button
              onClick={() => {
                clearFilters();
                setIsFilterOpen(false);
              }}
              className="w-full text-center text-xs text-black/40 hover:text-black transition-colors"
            >
              Clear All Filters
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="min-h-screen bg-white">
        {/* Category Header */}
        <div className="border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-black text-left uppercase">
              {category?.name}
            </h1>
          </div>
        </div>

        {/* Filter & Sort Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-black/5">
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsFilterOpen(true)}
                  className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-black/70 hover:text-black transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                  <span className="hidden sm:inline">Filters</span>
                  {hasActiveFilters && (
                    <span className="w-1.5 h-1.5 rounded-full bg-black" />
                  )}
                </button>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-[10px] font-medium tracking-[0.15em] uppercase text-black/40 hover:text-black transition-colors hidden sm:inline"
                  >
                    Clear All
                  </button>
                )}

                {/* Active filters chips */}
                <div className="flex gap-1 overflow-x-auto hide-scrollbar">
                  {selectedSizes.map(size => (
                    <span key={size} className="px-2 py-0.5 bg-black/5 text-[10px] font-medium rounded-full whitespace-nowrap">
                      {size}
                    </span>
                  ))}
                  {selectedColors.map(color => (
                    <span key={color} className="px-2 py-0.5 bg-black/5 text-[10px] font-medium rounded-full whitespace-nowrap">
                      {color}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-4 flex-1 justify-end">
                <span className="text-[10px] sm:text-xs text-black/40 font-light tracking-wider whitespace-nowrap">
                  {sortedProducts.length} items
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase bg-transparent border-none text-black/70 focus:outline-none cursor-pointer max-w-[140px] sm:max-w-none"
                >
                  <option value="newest">Sort: Newest</option>
                  <option value="price-low">Price: Low → High</option>
                  <option value="price-high">Price: High → Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
          <div className="flex gap-8">
            {/* Desktop Filter Sidebar */}
            <div 
              className={`hidden md:block flex-shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${
                isFilterOpen ? 'w-[280px] opacity-100' : 'w-0 opacity-0'
              }`}
            >
              <div className="w-[280px] pr-4 space-y-8">
                {/* Size Filter */}
                <div>
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-4">
                    Size
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-4 py-2 text-xs font-medium tracking-wider rounded-full border transition-all duration-300 ${
                          selectedSizes.includes(size)
                            ? "border-black bg-black text-white"
                            : "border-black/15 text-black/60 hover:border-black/40 hover:text-black"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-4">
                    Color
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        onClick={() => toggleColor(color)}
                        className={`px-4 py-2 text-xs font-medium tracking-wider rounded-full border transition-all duration-300 ${
                          selectedColors.includes(color)
                            ? "border-black bg-black text-white"
                            : "border-black/15 text-black/60 hover:border-black/40 hover:text-black"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-black/40 mb-4">
                    Price Range
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-black/60">
                      <span>QAR {priceRange[0]}</span>
                      <span>QAR {priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-0.5 bg-black/10 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>
                </div>

                {/* Stock Filter */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowInStock(!showInStock)}
                    className={`w-4 h-4 rounded border transition-all duration-300 flex items-center justify-center ${
                      showInStock ? "border-black bg-black" : "border-black/20 bg-transparent"
                    }`}
                  >
                    {showInStock && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-black/60">
                    In Stock Only
                  </span>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {sortedProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant="default"
                    index={index}
                  />
                ))}
              </div>

              {/* Empty State */}
              {sortedProducts.length === 0 && (
                <div className="text-center py-12 sm:py-20">
                  <div className="inline-block p-6 sm:p-8 bg-[#f5f5f5] rounded-full mb-6">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-black/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-light text-black/60 mb-2">No products found</h3>
                  <p className="text-xs sm:text-sm text-black/30">Try adjusting your filters</p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 px-4 sm:px-6 py-2 border border-black/20 text-xs font-medium tracking-[0.15em] uppercase text-black/60 hover:border-black hover:text-black transition-all duration-300"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Minimal Decorative Line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
      </section>

      {/* Mobile Filter Overlay - No backdrop */}
      <MobileFilterOverlay />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}