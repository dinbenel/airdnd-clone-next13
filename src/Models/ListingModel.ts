import { Category, User } from "@prisma/client";
import { Country } from "../hooks/useCountries";

export interface ListingModel<T> {
  id?: string;
  category: T;
  location: ICountry | undefined;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  imageSrc: string;
  price: number;
  title: string;
  description: string;
  user?: User;
}

interface ICountry extends Country {
  id?: string;
}

export interface DBListing extends Omit<ListingModel<string[]>, "category"> {
  category: Category[];
  likedBy?: User[];
}
