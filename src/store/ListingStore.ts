import { create } from "zustand";
import { Country } from "../hooks/useCountries";
import { ListingModel } from "@/Models/ListingModel";

type State = {
  onOpen: () => void;
  onClose: () => void;
  isOpen: boolean;
  isSubmit: boolean;
  listing: ListingModel<Set<string>>;
  getCtgSet: () => ListingModel<Set<string>>["category"];
  getLocation: () => ListingModel<Set<string>>["location"];
  setCategory: (id: string) => void;
  setLocation: (location: Country) => void;
  setCount: (
    type: keyof Pick<
      ListingModel<Set<string>>,
      "bathroomCount" | "guestCount" | "roomCount"
    >,
    action: "inc" | "dec"
  ) => void;
  addImgSrc: (img: string) => void;
  resetListing: () => void;
  setTitle: (title: string) => void;
  setDescription: (desc: string) => void;
  setPrice: (price: number) => void;
  setIsSubmit: (submit: boolean) => void;
};

const setInitialState = () => {
  return {
    category: new Set<string>(),
    bathroomCount: 1,
    description: "",
    guestCount: 1,
    imageSrc: "",
    location: undefined,
    price: 0,
    roomCount: 1,
    title: "",
  };
};

export const useListing = create<State>((set, get) => ({
  isOpen: false,
  onClose: () => {
    set({ isOpen: false });
  },
  onOpen: () => {
    set({ isOpen: true });
  },
  listing: setInitialState(),

  isSubmit: false,
  setLocation: (location) => {
    set((state) => ({
      ...state,
      listing: {
        ...state.listing,
        location,
      },
    }));
  },
  getLocation: () => get().listing.location,
  getCtgSet: () => get().listing.category,
  setCategory: (id) => {
    set((state) => {
      if (state.listing.category.has(id)) {
        state.listing.category.delete(id);
        return { ...state };
      }
      state.listing.category.add(id);
      return {
        ...state,
      };
    });
  },
  setCount: (type, action) => {
    if (action === "dec") {
      set((state) => {
        if (state.listing[type] < 2) return state;
        return {
          ...state,
          listing: {
            ...state.listing,
            [type]: state.listing[type] - 1,
          },
        };
      });
    } else {
      set((state) => {
        return {
          ...state,
          listing: {
            ...state.listing,
            [type]: state.listing[type] + 1,
          },
        };
      });
    }
  },
  addImgSrc: (img) => {
    set((state) => {
      return {
        ...state,
        listing: {
          ...state.listing,
          imageSrc: img,
        },
      };
    });
  },
  resetListing: () => {
    set((prev) => {
      return {
        ...prev,
        listing: setInitialState(),
      };
    });
  },
  setTitle: (title) => {
    set((state) => {
      return {
        ...state,
        listing: {
          ...state.listing,
          title,
        },
      };
    });
  },
  setDescription: (description) => {
    set((state) => {
      return {
        ...state,
        listing: {
          ...state.listing,
          description,
        },
      };
    });
  },
  setPrice: (price) => {
    set((state) => {
      return {
        ...state,
        listing: {
          ...state.listing,
          price: parseInt(price.toFixed(2)),
        },
      };
    });
  },
  setIsSubmit: (submit) => {
    set((state) => {
      return {
        ...state,
        isSubmit: submit,
      };
    });
  },
}));
