import { User } from "@prisma/client";
import { create } from "zustand";

type State = {
  user: User | undefined;
  setUser: (user: User | undefined) => void;
};

export const useLogedInUser = create<State>((set) => ({
  user: undefined,
  setUser: async (user) => {
    set((state) => {
      return {
        ...state,
        user,
      };
    });
  },
}));
