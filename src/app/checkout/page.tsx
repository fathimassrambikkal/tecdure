// app/checkout/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore, getPriceNumber, formatPrice } from "@/store/checkoutStore";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
ShoppingBagIcon,
} from "@/components/icons/Icons";

export default function CheckoutPage() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const setShipping = useCheckoutStore((state) => state.setShipping);
  const shipping = useCheckoutStore((state) => state.shipping);

  const [form, setForm] = useState(shipping);

  const subtotal = cart.reduce((sum, item) => {
    return sum + getPriceNumber(item.price) * item.quantity;
  }, 0);
  const shippingCost = cart.length > 0 ? 25 : 0;
  const total = subtotal + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShipping(form);
    router.push("/payment");
  };

  if (cart.length === 0) {
    return (
      <>
        
        <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-md mx-auto text-center">
              <div className="relative mb-8 sm:mb-10">
              
                   <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-black/[0.03] flex items-center justify-center">
                  <ShoppingBagIcon className="w-10 h-10 sm:w-12 sm:h-12 text-black/20" />
              
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-xl sm:text-2xl font-light tracking-[0.15em] uppercase text-black">
                  Your cart is empty
                </h2>
                <p className="text-black/40 text-sm sm:text-base font-light leading-relaxed max-w-xs mx-auto">
                  Add items to your cart before proceeding to checkout
                </p>
              </div>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 border border-black/20 text-black/60 hover:text-black px-10 sm:px-12 py-3.5 sm:py-4 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-light hover:border-black hover:bg-black "
                >
                  <span>Explore Collection</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
   
      </>
    );
  }

  return (
    <>
   
      <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase text-center text-black">
              Checkout
            </h1>
            <div className="flex items-center justify-center gap-4 mt-3">
              <p className="text-black/40 text-xs sm:text-sm tracking-[0.15em] uppercase">
                Step 1 of 2 — Shipping
              </p>
              <span className="w-px h-4 bg-black/20" />
              <span className="text-black/20 text-[10px] sm:text-xs tracking-[0.15em] uppercase">
                Secure Checkout
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Shipping Form */}
            <div className="lg:col-span-2">
              <div className="bg-black/[0.02] border border-black/10 rounded-2xl p-6 sm:p-8">
                <h2 className="font-light uppercase tracking-[0.2em] text-base sm:text-lg mb-6 text-black">
                  Shipping Address
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <input
                      required
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                  <div>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <input
                      required
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="Street Address"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                  <div>
                    <input
                      required
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                  <div>
                    <input
                      required
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                      placeholder="State / Province"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                  <div>
                    <input
                      required
                      name="zip"
                      value={form.zip}
                      onChange={handleChange}
                      placeholder="ZIP / Postal Code"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                  <div>
                    <input
                      required
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-4 px-6 uppercase tracking-[0.15em] text-[11px] sm:text-xs font-light rounded-full"
                  >
                    <span>Continue to Payment</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                  
                  <Link
                    href="/cart"
                    className="flex items-center justify-center gap-2 text-black/40 hover:text-black text-[10px] sm:text-xs uppercase tracking-[0.2em] px-4"
                  >
                    <ArrowLeftIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    Return to Cart
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-black/[0.02] border border-black/10 rounded-2xl p-6 sm:p-8 sticky top-8">
                <h2 className="font-light uppercase tracking-[0.2em] text-base sm:text-lg mb-6 text-black">
                  Order Summary
                </h2>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                      className="flex justify-between text-sm text-black/60 py-2 border-b border-black/5 last:border-0"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-black/80 text-xs uppercase tracking-wide">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-black/40 mt-0.5">
                          × {item.quantity}
                          {item.selectedSize && ` • ${item.selectedSize}`}
                          {item.selectedColor && (
                            <span className="inline-flex items-center ml-1">
                              <span 
                                className="inline-block w-2 h-2 rounded-full border border-black/10 ml-1"
                                style={{ backgroundColor: item.selectedColor.toLowerCase() }}
                              />
                            </span>
                          )}
                        </span>
                      </div>
                      <span className="font-light text-black/80">
                        {formatPrice(item.price)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/10 mt-4 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between py-1 text-black/60">
                    <span className="tracking-wide">Subtotal</span>
                    <span className="font-light">QAR {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between py-1 text-black/60">
                    <span className="tracking-wide">Shipping</span>
                    <span className="font-light">
                      {shippingCost > 0 ? `QAR ${shippingCost.toFixed(2)}` : 'Free'}
                    </span>
                  </div>
                </div>

                <div className="border-t border-black/10 mt-4 pt-4 flex justify-between text-black text-base sm:text-lg">
                  <span className="font-light tracking-wide">Total</span>
                  <span className="font-medium">QAR {total.toFixed(2)}</span>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 pt-6 border-t border-black/10">
                  <div className="flex flex-wrap items-center justify-center gap-4 text-black/30 text-[8px] sm:text-[10px] uppercase tracking-[0.2em]">
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      Secure Checkout
                    </span>
                    <span className="w-px h-4 bg-black/10" />
                    <span className="flex items-center gap-1.5">
                      <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                      Free Returns
                    </span>
               
                 
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
 
    </>
  );
}