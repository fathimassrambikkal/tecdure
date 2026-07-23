"use client";

import { useState } from "react";
import { notFound } from "next/navigation";
import { getProductById } from "@/data/products";

import SizeChartModal from "../SizeChartModal";
import MeasurementsModal from "../MeasurementsModal";
import ProductInfo from "../ProductInfo";
import ProductButton from "../ProductButton";

interface ProductDetailProps {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: ProductDetailProps) {
  const { id } = params;
  const product = getProductById(Number(id));

  const [showSizeChart, setShowSizeChart] = useState(false);
  const [showMeasurements, setShowMeasurements] = useState(false);

  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-white">
      {/* Modals */}
      <SizeChartModal 
        isOpen={showSizeChart} 
        onClose={() => setShowSizeChart(false)} 
      />
      
      <MeasurementsModal 
        isOpen={showMeasurements} 
        onClose={() => setShowMeasurements(false)} 
      />

      <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-16 2xl:px-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {/* Images Section - Left Side */}
          <ProductInfo product={product} />

          {/* Details Section - Right Side */}
          <ProductButton 
            product={product}
            onSizeGuideClick={() => setShowSizeChart(true)}
            onMeasurementsClick={() => setShowMeasurements(true)}
          />
        </div>
      </div>
    </div>
  );
}