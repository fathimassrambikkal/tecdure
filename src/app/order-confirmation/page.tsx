// app/order-confirmation/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckIcon, ArrowRightIcon } from "@/components/icons/Icons";

interface OrderData {
  orderId: string;
  total: number;
  shipping: { fullName: string; email: string; address: string; city: string };
}

export default function OrderConfirmationPage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem("lastOrder");
    if (raw) setOrder(JSON.parse(raw));
  }, []);

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex items-center">
      <div className="max-w-2xl mx-auto w-full">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-black/5 flex items-center justify-center">
            <CheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-green-500/60" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] uppercase text-black mb-3">
            Order Confirmed
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-px bg-black/10" />
            <span className="text-black/40 text-[10px] sm:text-xs tracking-[0.15em] uppercase">
              Thank You
            </span>
            <span className="w-12 h-px bg-black/10" />
          </div>
        </div>

        {order ? (
          <>
            <div className="bg-black/[0.02] border border-black/10 rounded-2xl p-6 sm:p-8 mb-8">
              <div className="text-center mb-6">
                <p className="text-black/60 text-sm sm:text-base font-light">
                  Thank you, <span className="text-black font-medium">{order.shipping.fullName}</span>. 
                  Your order has been placed successfully.
                </p>
                <p className="text-black/40 text-xs sm:text-sm mt-2">
                  Order ID: <span className="text-black font-medium tracking-wider">{order.orderId}</span>
                </p>
              </div>

              <div className="border-t border-black/10 pt-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-black/40 mb-4">
                  Shipping Details
                </h3>
                <div className="space-y-1 text-sm text-black/60">
                  <p className="text-black/80">{order.shipping.fullName}</p>
                  <p>{order.shipping.address}</p>
                  <p>{order.shipping.city}</p>
                  <p className="text-black/40 text-xs">{order.shipping.email}</p>
                </div>
              </div>

              <div className="border-t border-black/10 mt-6 pt-6 flex justify-between items-center">
                <span className="text-xs uppercase tracking-[0.2em] text-black/40">
                  Total Paid
                </span>
                <span className="text-xl sm:text-2xl font-light text-black">
                  QAR {order.total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 sm:px-12 py-3.5 sm:py-4 uppercase tracking-[0.15em] text-[11px] sm:text-xs font-light rounded-full w-full sm:w-auto"
              >
                <span>Continue Shopping</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              
              <Link
                href="/orders"
                className="inline-flex items-center justify-center gap-2 text-black/40 hover:text-black text-[10px] sm:text-xs uppercase tracking-[0.2em] w-full sm:w-auto"
              >
                View Order History
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 pt-6 border-t border-black/10">
              <div className="flex flex-wrap items-center justify-center gap-4 text-black/30 text-[8px] sm:text-[10px] uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1.5">
                  <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Order Confirmed
                </span>
                <span className="w-px h-4 bg-black/10" />
                <span className="flex items-center gap-1.5">
                  <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Email Sent
                </span>
                <span className="w-px h-4 bg-black/10" />
                <span className="flex items-center gap-1.5">
                  <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  Processing
                </span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="bg-black/[0.02] border border-black/10 rounded-2xl p-8 sm:p-12 mb-8">
              <p className="text-black/40 text-sm sm:text-base font-light">
                No recent order found.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-10 sm:px-12 py-3.5 sm:py-4 uppercase tracking-[0.15em] text-[11px] sm:text-xs font-light rounded-full"
            >
              <span>Browse Products</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}