import { create } from "zustand";

type State = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
};

export const useOrder = create<State>((set, get) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
