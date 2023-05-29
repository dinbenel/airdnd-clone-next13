import { create } from "zustand";

interface State {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  review: number;
  setReview: (review: number) => void;
  setListingId: (id: string) => void;
  listingId: string;
}

export const useReview = create<State>((set) => ({
  isOpen: false,
  review: 0,
  listingId: "",
  onClose: () => {
    set({ isOpen: false });
  },
  onOpen: () => {
    set({ isOpen: true });
  },
  setReview: (review) => {
    set({ review });
  },
  setListingId: (id) => {
    set({ listingId: id });
  },
}));
