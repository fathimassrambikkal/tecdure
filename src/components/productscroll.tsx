// components/sections/ProductScroll.tsx
"use client";

import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';

const ProductScroll: React.FC = () => {
  // Get only Abayas for this section
  const abayaProducts = products.filter(p => p.slug === "abaya");

  // Responsive column calculation - 2 columns for small devices, 3 for desktop
  const getColumns = (width: number) => {
    if (width < 640) return 2; // Mobile: 2 columns
    if (width < 1024) return 2; // Tablet: 2 columns
    return 3; // Desktop and above: 3 columns
  };

  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setColumns(getColumns(width));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Split products into rows based on responsive columns
  const rows = [];
  for (let i = 0; i < abayaProducts.length; i += columns) {
    rows.push(abayaProducts.slice(i, i + columns));
  }

  return (
    <section className="w-full bg-white">
      <div className="w-full">
        {/* Category Title - Responsive */}
        <div className="px-2 sm:px-4 md:px-8 py-4 sm:py-6 md:py-8 lg:py-12 ">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] text-black uppercase text-center">
            Abayas
          </h2>
        </div>

        {/* Products Grid - with white gaps between cards */}
        <div className="">
          {rows.map((row, rowIndex) => (
            <div 
              key={rowIndex} 
              className="grid gap-2 sm:gap-3 md:gap-4 lg:gap-5"
              style={{
                gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
              }}
            >
              {row.map((product, index) => (
                <div key={product.id} className="bg-white p-1 sm:p-2 md:p-3">
                  <ProductCard 
                    product={product} 
                    variant="scroll"
                    index={index}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductScroll;