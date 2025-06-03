import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NewCollectionState {
  newCollection: string[];
  addNewCollection: (title: string) => void;
  removeNewCollection: (title: string) => void;
}

export const useNewCollectionStore = create<NewCollectionState>()(
  persist(
    (set) => ({
      newCollection: [],
      addNewCollection: (title) =>
        set((state) => ({
          newCollection: [...state.newCollection, title],
        })),
      removeNewCollection: (title) =>
        set((state) => ({
          newCollection: state.newCollection.filter((t) => t !== title),
        })),
    }),
    {
      name: "new-collection-storage", // unique name
    }
  )
);
