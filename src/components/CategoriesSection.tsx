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
      // Find first image for this category
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
      
      {/* Cards grid - full width, no gaps */}
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-3 gap-0 w-screen relative left-1/2 -translate-x-1/2"
      >
        {categoryCards.map((category, index) => (
          <div
            key={category.slug}
            className="relative group"
          >
            <Link
              href={`/categories/${category.slug}`}
              className="block relative overflow-hidden h-[90vh] rounded-none bg-[#f5f5f5]"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent group-hover:from-black/80 group-hover:via-black/20 transition-all duration-700" />

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/5 to-transparent transform -skew-x-12" />
              </div>

              {/* Category Name - Centered */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-center">
                  {category.name}
                </h3>
              </div>

              {/* Arrow at bottom right */}
              <div className="absolute bottom-8 right-8 transition-all duration-700 group-hover:translate-x-1 group-hover:-translate-y-1">
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10 group-hover:bg-black/20 transition-all duration-500">
               <ArrowUpRightIcon className="w-[18px] h-[18px] text-white transition-all duration-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}