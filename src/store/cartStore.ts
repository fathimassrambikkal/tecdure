// store/cartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  sizes: string[];
  colors?: string[];

  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (
    product: Omit<CartItem, "quantity">,
    size?: string,
    color?: string
  ) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product, size, color) =>
        set((state) => {
          const existing = state.cart.find(
            (item) =>
              item.id === product.id &&
              item.selectedSize === size &&
              item.selectedColor === color
          );

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === existing.id &&
                item.selectedSize === size &&
                item.selectedColor === color
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: 1,
                selectedSize: size,
                selectedColor: color,
              },
            ],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            )
            .filter((item) => item.quantity > 0),
        })),

      clearCart: () =>
        set({
          cart: [],
        }),
    }),
    {
      name: "cart-storage", 
    }
  )
);