import { create } from "zustand";

interface NewCollectionState {
  newCollection: string[];
  addNewCollection: (title: string) => void;
  removeNewCollection: (title: string) => void;
}

export const useNewCollectionStore = create<NewCollectionState>((set) => ({
  newCollection: [],
  addNewCollection: (title) =>
    set((state) => ({
      newCollection: [...state.newCollection, title],
    })),
  removeNewCollection: (title) =>
    set((state) => ({
      newCollection: state.newCollection.filter((t) => t !== title),
    })),
}));
