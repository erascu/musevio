import { FavItem } from "../lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavItemsState {
  favItems: FavItem[];
  addFavItem: (item: FavItem) => void;
  removeFavItem: (id: number) => void;

  toggleFavItem: (item: FavItem) => void;
  isActive: (id: number, section: string) => boolean;

  moveToCollection: (id: number, newCollectionSect: string) => void;
}

export const useFavItemsStore = create<FavItemsState>()(
  persist(
    (set, get) => ({
      favItems: [],
      addFavItem: (item) =>
        set((state) => {
          const exists = state.favItems.some(
            (i) => i.id === item.id && i.section === item.section
          );
          if (exists) return state;
          return { favItems: [...state.favItems, item] };
        }),
      removeFavItem: (id) =>
        set((state) => ({
          favItems: state.favItems.filter((item) => item.id !== id),
        })),
      toggleFavItem: (item) => {
        const exists = get().favItems.some(
          (i) => i.id === item.id && i.section === item.section
        );
        if (exists) {
          get().removeFavItem(item.id);
        } else {
          get().addFavItem(item);
        }
      },
      isActive: (id, section) =>
        get().favItems.some(
          (item) => item.id === id && item.section === section
        ),

      moveToCollection: (id, newCollectionSect) =>
        set((state) => ({
          favItems: state.favItems.map((item) =>
            item.id === id ? { ...item, newCollectionSect } : item
          ),
        })),
    }),
    {
      name: "fav-items-storage",
    }
  )
);
