import { User } from "@prisma/client";
import PaymentCard from "../PaymentCard";
import BodyDetails from "./BodyDetails";
import { DBListing } from "@/Models/ListingModel";

type Props = {
  user: User;
  listing: DBListing;
};

const ListingBody = ({ user, listing }: Props) => {
  const { bathroomCount, description, guestCount, roomCount, amenities } =
    listing;
  return (
    <section className="mt-6 flex justify-between gap-20 relative min-h-[60vh]">
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
      <PaymentCard />
    </section>
  );
};

export default ListingBody;
