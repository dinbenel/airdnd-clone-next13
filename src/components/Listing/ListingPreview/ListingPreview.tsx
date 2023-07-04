"use client";
import NotFound from "../../NotFound/NotFound";
import { DBListing } from "@/Models/ListingModel";
import ListingCard from "../ListingCard/ListingCard";
import { User } from "@prisma/client";

type Props = {
  listings: DBListing[];
  user: User;
};
const ListingPreview = ({ listings, user }: Props) => {
  if (!listings?.length) return <NotFound />;

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-8 cursor-pointer">
      {(listings || []).map((listing) => {
        return (
          <ListingCard
            listing={listing}
            key={listing.id}
            userId={user?.id || ""}
          />
        );
      })}
    </section>
  );
};

export default ListingPreview;
