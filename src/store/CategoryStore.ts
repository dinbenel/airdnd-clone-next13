import { create } from "zustand";
import { Category } from "@prisma/client";
import { getAllCategories } from "@/services/categoryService";

type CategoryStore = {
  categories: Category[];
  selected: Set<string>;
  setSelected: (ctg: string) => void;
  setCategories: () => void;
};

export const useCategory = create<CategoryStore>((set, get) => ({
  categories: [],
  selected: new Set(),
  setSelected: (ctg) => {
    set((state) => {
      if (!ctg) {
        return {
          ...state,
          selected: new Set<string>(),
        };
      }

      if (state.selected.has(ctg)) {
        state.selected.delete(ctg);
        return {
          ...state,
        };
      }

      state.selected.add(ctg);
      return {
        ...state,
      };
    });
  },
  setCategories: async () => {
    if (get().categories.length > 0) return;
    console.log("first");
    try {
      const { data } = await getAllCategories();
      if (data) {
        set({ categories: data });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
