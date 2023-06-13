import { create } from "zustand";

type State = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  onOpenPicker: () => void;
  onClosePicker: () => void;
  isPickerOpen: boolean;
  adults: number;
  children: number;
  infants: number;
  setCount: (
    type: "infants" | "children" | "adults",
    action: "inc" | "dec"
  ) => void;
};

export const useOrder = create<State>((set, get) => ({
  adults: 1,
  children: 0,
  infants: 0,
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  isPickerOpen: false,
  onClosePicker: () => set({ isPickerOpen: false }),
  onOpenPicker: () => set({ isPickerOpen: true }),
  setCount: (type, action) => {
    if (action === "inc") {
      return set((state) => {
        return {
          ...state,
          [type]: state[type] + 1,
        };
      });
    }
    set((state) => {
      if (state[type] === 0) return state;
      return {
        ...state,
        [type]: state[type] - 1,
      };
    });
  },
}));
