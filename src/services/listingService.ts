import { DBListing, ListingModel } from "@/Models/ListingModel";
import { http } from "./apiService";

const getAllListing = () => {
  return http.get<DBListing[]>("/listing");
};

const getListingById = (id: string) => {
  return http.get<DBListing>(`/listing/${id}`);
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

export {
  getAllListing,
  getListingById,
  createListing,
  updateListing,
  removeListing,
};
