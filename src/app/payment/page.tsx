// app/payment/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore } from "@/store/checkoutStore";
import { ArrowRightIcon, ArrowLeftIcon, CheckIcon } from "@/components/icons/Icons";

export default function PaymentPage() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const shipping = useCheckoutStore((state) => state.shipping);
  const clearShipping = useCheckoutStore((state) => state.clearShipping);

  const [isProcessing, setIsProcessing] = useState(false);
  const [card, setCard] = useState({ cardNumber: "", expiry: "", cvv: "", nameOnCard: "" });

  const subtotal = cart.reduce((sum, item) => {
    let priceValue = item.price;
    if (typeof priceValue === 'string') {
      priceValue = parseFloat(priceValue.replace(/[^0-9.]/g, "")) || 0;
    } else if (typeof priceValue === 'number') {
      priceValue = priceValue;
    } else {
      priceValue = 0;
    }
    return sum + priceValue * item.quantity;
  }, 0);
  const shippingCost = cart.length > 0 ? 25 : 0;
  const total = subtotal + shippingCost;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderId = `ORD-${Date.now().toString().slice(-8)}`;
      sessionStorage.setItem(
        "lastOrder",
        JSON.stringify({ orderId, total, shipping })
      );
      setIsProcessing(false);
      clearCart();
      clearShipping();
      router.push("/order-confirmation");
    }, 1500);
  };

  const formatPrice = (price: string | number) => {
    if (typeof price === 'number') {
      return `QAR ${price.toFixed(2)}`;
    }
    const num = parseFloat(price.replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 'QAR 0.00' : `QAR ${num.toFixed(2)}`;
  };

  if (cart.length === 0) {
    return (
      <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-md mx-auto text-center">
            <div className="relative mb-8 sm:mb-10">
             
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-light tracking-[0.15em] uppercase text-black">
                Your cart is empty
              </h2>
              <p className="text-black/40 text-sm sm:text-base font-light leading-relaxed max-w-xs mx-auto">
                Add items to your cart before proceeding to payment
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 border border-black/20 text-black/60 hover:text-black px-10 sm:px-12 py-3.5 sm:py-4 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-light hover:border-black hover:bg-black hover:text-white"
              >
                <span>Explore Collection</span>
                <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!shipping.email) {
    return (
      <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-md mx-auto text-center">
            <div className="relative mb-8 sm:mb-10">
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-black/[0.03] flex items-center justify-center">
                <span className="text-4xl text-black/20">📦</span>
              </div>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-xl sm:text-2xl font-light tracking-[0.15em] uppercase text-black">
                Shipping Details Required
              </h2>
              <p className="text-black/40 text-sm sm:text-base font-light leading-relaxed max-w-xs mx-auto">
                Please complete your shipping information first
              </p>
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href="/checkout"
                className="inline-flex items-center gap-2.5 border border-black/20 hover:border-black text-black/60 hover:text-black px-10 sm:px-12 py-3.5 sm:py-4 uppercase tracking-[0.2em] text-[11px] sm:text-xs font-light hover:bg-black hover:text-white"
              >
                <span>Go to Checkout</span>
                <ArrowRightIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] uppercase text-center text-black">
            Payment
          </h1>
          <div className="flex items-center justify-center gap-4 mt-3">
            <p className="text-black/40 text-xs sm:text-sm tracking-[0.15em] uppercase">
              Step 2 of 2 — Payment
            </p>
            <span className="w-px h-4 bg-black/20" />
            <span className="text-black/20 text-[10px] sm:text-xs tracking-[0.15em] uppercase">
              Secure Payment
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          <div className="lg:col-span-2 space-y-8 sm:space-y-10">
            {/* Shipping Address */}
            <div className="bg-black/[0.02] border border-black/10 rounded-2xl p-6 sm:p-8">
              <h2 className="font-light uppercase tracking-[0.2em] text-base sm:text-lg mb-4 text-black">
                Shipping To
              </h2>
              <div className="text-sm text-black/60 leading-relaxed">
                <p className="text-black font-medium">{shipping.fullName}</p>
                <p>{shipping.address}</p>
                <p>
                  {shipping.city}, {shipping.state} {shipping.zip}
                </p>
                <p>{shipping.country}</p>
                <p className="mt-2 text-black/40">{shipping.email}</p>
                <p className="text-black/40">{shipping.phone}</p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-black/[0.02] border border-black/10 rounded-2xl p-6 sm:p-8">
              <h2 className="font-light uppercase tracking-[0.2em] text-base sm:text-lg mb-4 text-black">
                Payment Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  required
                  name="nameOnCard"
                  value={card.nameOnCard}
                  onChange={handleChange}
                  placeholder="Name on Card"
                  className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60 sm:col-span-2"
                />
                <input
                  required
                  name="cardNumber"
                  value={card.cardNumber}
                  onChange={handleChange}
                  placeholder="Card Number"
                  maxLength={19}
                  className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60 sm:col-span-2"
                />
                <input
                  required
                  name="expiry"
                  value={card.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  maxLength={5}
                  className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                />
                <input
                  required
                  name="cvv"
                  value={card.cvv}
                  onChange={handleChange}
                  placeholder="CVV"
                  maxLength={4}
                  className="w-full bg-white border border-black/20 rounded-xl px-4 py-3.5 text-sm text-black placeholder:text-black/30 focus:outline-none focus:border-black/60"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/checkout"
                className="flex items-center justify-center gap-2 text-black/40 hover:text-black text-[10px] sm:text-xs uppercase tracking-[0.2em] px-4"
              >
                <ArrowLeftIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                Return to Checkout
              </Link>
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

              <button
                type="submit"
                disabled={isProcessing}
                className="mt-6 w-full bg-black text-white py-4 px-6 uppercase tracking-[0.15em] text-[11px] sm:text-xs font-light rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Place Order"}
              </button>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-black/10">
                <div className="flex flex-wrap items-center justify-center gap-4 text-black/30 text-[8px] sm:text-[10px] uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    Secure Payment
                  </span>
                  <span className="w-px h-4 bg-black/10" />
                
                  <span className="w-px h-4 bg-black/10" />
                  <span className="flex items-center gap-1.5">
                    <CheckIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    Refund Policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}