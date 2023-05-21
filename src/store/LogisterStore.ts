import { create } from "zustand";

type State = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  type: "login" | "register";
  setType: (type: "login" | "register") => void;
};

export const useLogister = create<State>((set, get) => ({
  isOpen: false,
  type: "register",
  onClose: () => {
    set({ isOpen: false });
  },
  onOpen: () => {
    set({ isOpen: true });
  },
  setType: (type) => {
    set({ type });
  },
}));
