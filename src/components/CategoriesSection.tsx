"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { products } from "@/data/products";
import { ArrowUpRightIcon } from "@/components/icons/Icons";

// Get unique categories from products
const getCategoryData = () => {
  const categoryMap = new Map();
  
  products.forEach(product => {
    if (!categoryMap.has(product.slug)) {
      const categoryProducts = products.filter(p => p.slug === product.slug);
      categoryMap.set(product.slug, {
        name: product.category,
        slug: product.slug,
        image: categoryProducts[0]?.image || "/images/placeholder.jpg",
        count: categoryProducts.length
      });
    }
  });
  
  return Array.from(categoryMap.values());
};

const categoryCards = getCategoryData();

export default function CategoriesSection() {
  const ref = useRef(null);

  return (
    <section className="bg-white overflow-hidden relative z-20">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-2xl md:text-4xl font-light tracking-[0.25em] text-black uppercase text-center">
            Collections
          </h2>
        </div>
      </div>
      
      {/* Cards grid */}
      <div
        ref={ref}
        className="w-screen relative left-1/2 -translate-x-1/2 px-4 md:px-8"
      >
        {/* Mobile Layout (<768px): 2 rows - first row 1 col, second row 2 cols */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {/* First category (ABAYAS) - full width */}
          {categoryCards.slice(0, 1).map((category) => (
            <div key={category.slug} className="relative group">
              <Link
                href={`/categories/${category.slug}`}
                className="block relative overflow-hidden bg-[#f5f5f5]"
              >
                <div className="h-[50vh] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 group-hover:via-black/20 transition-all duration-700" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/5 to-transparent transform -skew-x-12" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl font-light tracking-[0.15em] uppercase text-center px-4">
                      {category.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-6 right-6 transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:bg-black/20 transition-all duration-500">
                      <ArrowUpRightIcon className="w-[18px] h-[18px] text-white transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          
          {/* Remaining categories (TURBANAS, DRESSES) - 2 columns */}
          <div className="grid grid-cols-2 gap-4">
            {categoryCards.slice(1).map((category) => (
              <div key={category.slug} className="relative group">
                <Link
                  href={`/categories/${category.slug}`}
                  className="block relative overflow-hidden bg-[#f5f5f5]"
                >
                  <div className="h-[40vh] relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                      sizes="50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 group-hover:via-black/20 transition-all duration-700" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/5 to-transparent transform -skew-x-12" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-base sm:text-lg font-light tracking-[0.15em] uppercase text-center px-2">
                        {category.name}
                      </h3>
                    </div>
                    <div className="absolute bottom-4 right-4 transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:bg-black/20 transition-all duration-500">
                        <ArrowUpRightIcon className="w-[14px] h-[14px] text-white transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet/Desktop Layout (≥768px): 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
          {categoryCards.map((category, index) => (
            <div key={category.slug} className="relative group">
              <Link
                href={`/categories/${category.slug}`}
                className="block relative overflow-hidden bg-[#f5f5f5]"
              >
                <div className="h-[80vh] lg:h-[90vh] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 group-hover:via-black/20 transition-all duration-700" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/5 to-transparent transform -skew-x-12" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-center px-4">
                      {category.name}
                    </h3>
                  </div>
                  <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:bg-black/20 transition-all duration-500">
                      <ArrowUpRightIcon className="w-[18px] h-[18px] text-white transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}