import { DBListing, ListingModel } from "@/Models/ListingModel";
import { http } from "./apiService";
import { Amenitiy, Category } from "@prisma/client";

const getAllListing = (filter: string) => {
  const params = filter?.split(",").reduce((searchParams, curr, idx) => {
    if (idx === 0) {
      searchParams += curr;
    } else {
      searchParams += `%2C${curr}`;
    }
    return searchParams;
  }, "");

  const search = filter ? `?category=${params}` : "";
  return http.get<DBListing[]>(`/listing${search}`);
};

const getListingById = (id: string) => {
  return http.get<DBListing>(`/listing?id=${id}`);
};

const createListing = (listing: Omit<ListingModel<string[]>, "user">) => {
  const listingToSend = {
    ...listing,
    category: Array.from(listing.category),
  };

  return http.post("/listing", listingToSend);
};

const updateListing = (listing: Omit<ListingModel<string[]>, "user">) => {
  return http.put(`/listing/${listing.id}`, listing);
};

const removeListing = (id: string) => {
  return http.delete(`/listing/${id}`);
};

const getAllCategories = () => {
  return http.get<Category[]>("/category");
};

const getAllAmenities = () => {
  return http.get<Amenitiy[]>("/amenity");
};

export {
  getAllListing,
  getListingById,
  createListing,
  updateListing,
  removeListing,
  getAllCategories,
  getAllAmenities,
};
