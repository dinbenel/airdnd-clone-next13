import { User } from "@prisma/client";
import { create } from "zustand";

type State = {
  user: User | null;
  setUser: (user: User) => void;
};

export const useLogedInUser = create<State>((set) => ({
  user: null,
  setUser: async (user) => {
    set((state) => {
      return {
        ...state,
        user,
      };
    });
  },
}));
