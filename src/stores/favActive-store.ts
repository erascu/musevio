import { create } from "zustand";

interface isActive {
  favKeys: { id: number; section: string }[];
  toggleFavKey: (id: number, section: string) => void;
  isActive: (id: number, section: string) => boolean;
}

export const useFavActiveStore = create<isActive>()((set, get) => ({
  favKeys: [],
  toggleFavKey: (id, section) => {
    const keyExists = get().favKeys.some(
      (k) => k.id === id && k.section === section
    );
    set((state) => ({
      favKeys: keyExists
        ? state.favKeys.filter((k) => !(k.id === id && k.section === section))
        : [...state.favKeys, { id, section }],
    }));
  },
  isActive: (id, section) =>
    get().favKeys.some((k) => k.id === id && k.section === section),
}));
