import { User } from "@prisma/client";
import PaymentCard from "../PaymentCard";
import BodyDetails from "./BodyDetails";
import { DBListing } from "@/Models/ListingModel";
import AuthProvider from "@/context/AuthProvider";
import { ClientOnly } from "@/components";

type Props = {
  user: User;
  listing: DBListing;
};

const ListingBody = ({ user, listing }: Props) => {
  const {
    id,
    bathroomCount,
    description,
    guestCount,
    roomCount,
    amenities,
    price,
  } = listing;

  return (
    <section className="mt-6 flex justify-between [&>*:first-child]:me-24 relative min-h-[60vh]">
      <BodyDetails
        bath={bathroomCount}
        guest={guestCount}
        img={user.image || ""}
        lastName={user.lastName || ""}
        room={roomCount}
        userName={user.name || ""}
        desc={description}
        amenities={amenities}
      />
      <ClientOnly>
        <AuthProvider>
          <PaymentCard price={price} listingId={id!} />
        </AuthProvider>
      </ClientOnly>
    </section>
  );
};

export default ListingBody;
