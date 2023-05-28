import { create } from "zustand";

interface State {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export const useReview = create<State>((set) => ({
  isOpen: false,
  onClose: () => {
    set({ isOpen: false });
  },
  onOpen: () => {
    set({ isOpen: true });
  },
}));
