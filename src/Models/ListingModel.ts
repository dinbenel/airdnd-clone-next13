import { Amenitiy, Category, Review, User } from "@prisma/client";
import { Country } from "../hooks/useCountries";
import { DbReview } from "./ReviewModel";

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
  amenities: string[];
}

interface ICountry extends Country {
  id?: string;
}

export interface DBListing
  extends Omit<ListingModel<string[]>, "category" | "amenities"> {
  category: Category[];
  likedBy?: User[];
  reviews: DbReview[];
  amenities: Amenitiy[];
}
