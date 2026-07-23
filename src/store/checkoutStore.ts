// store/checkoutStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

interface CheckoutStore {
  shipping: ShippingInfo;
  setShipping: (info: ShippingInfo) => void;
  clearShipping: () => void;
}

const emptyShipping: ShippingInfo = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
};

// Convert any price format to number
export const getPriceNumber = (price: number | string): number => {
  if (typeof price === "number") return price;
  return parseFloat(price.replace(/[^0-9.]/g, "")) || 0;
};

// Display price
export const formatPrice = (price: number | string): string => {
  return `QAR ${getPriceNumber(price).toFixed(2)}`;
};

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (set) => ({
      shipping: emptyShipping,

      setShipping: (info) =>
        set({
          shipping: info,
        }),

      clearShipping: () =>
        set({
          shipping: emptyShipping,
        }),
    }),
    {
      name: "checkout-storage",
    }
  )
);