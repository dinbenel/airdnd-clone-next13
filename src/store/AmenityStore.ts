import { create } from "zustand";
import { Amenitiy } from "@prisma/client";
import { getAllAmenities } from "@/services/listingService";

type AmenityStore = {
  amenities: Amenitiy[];
  selected: Set<string>;
  setSelected: (amtId: string) => void;
  setAmenities: () => void;
};

export const useAmenity = create<AmenityStore>((set, get) => ({
  amenities: [],
  selected: new Set(),
  setSelected(amtId) {
    set((state) => {
      if (state.selected.has(amtId)) {
        state.selected.delete(amtId);
        return { ...state };
      }
      state.selected.add(amtId);
      return { ...state };
    });
  },
  async setAmenities() {
    if (get().amenities.length > 0) return;

    try {
      const { data } = await getAllAmenities();
      if (data) {
        set({ amenities: data });
      }
    } catch (error) {
      console.log(error);
    }
  },
}));
