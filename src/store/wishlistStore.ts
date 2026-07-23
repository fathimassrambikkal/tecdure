import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistStore {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const favorites = get().favorites;

        if (favorites.includes(id)) {
          set({
            favorites: favorites.filter((item) => item !== id),
          });
        } else {
          set({
            favorites: [...favorites, id],
          });
        }
      },

      isFavorite: (id) => {
        return get().favorites.includes(id);
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);