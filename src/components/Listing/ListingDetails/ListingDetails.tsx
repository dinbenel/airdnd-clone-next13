import { DBListing } from "@/Models/ListingModel";
import ListingHead from "./ListingHead";
import ListingBody from "./ListingBody/ListingBody";
import ListingReview from "./ListingReview";
import Map from "@/components/Map/Map";
import Heading from "@/components/Heading/Heading";
import UserAvatar from "@/components/UserMenu/UserAvatar";
import AuthProvider from "@/context/AuthProvider";
import { format } from "date-fns";
import ClientOnley from "@/components/ClientOnley/ClientOnley";

type Props = {
  listing: DBListing;
};

const ListingDetails = ({ listing }: Props) => {
  const locationStr = String(listing.location?.latlng);
  const latLng = locationStr.split(",");
  const created = listing.user?.createdAt!;

  return (
    <section className="">
      <ListingHead
        img={listing.imageSrc}
        location={listing.location}
        title={listing.title}
      />

      <ListingBody user={listing.user!} listing={listing} />
      <hr className="mt-4" />
      <ClientOnley>
        <AuthProvider>
          <ListingReview reviews={listing.reviews} listingId={listing.id!} />
        </AuthProvider>

        <hr className="my-4" />

        <section className=" ">
          <h3 className="font-semibold mb-4 text-2xl">Where you’ll be</h3>
          <div className="relative h-96">
            <Map
              viewportVal={latLng.map((v) => Number(v)) as [number, number]}
            />
          </div>
          <p className="mt-2 text-lg font-medium">{`${listing.location?.region}, ${listing.location?.label}`}</p>
        </section>
      </ClientOnley>
      <hr className="my-4" />
      <section>
        <div className="flex w-full gap-4 items-center">
          <div>
            <UserAvatar
              imgClassName=""
              img={listing.user?.image}
              width={70}
              height={70}
              avatarClassName="text-5xl text-neutral-600"
            />
          </div>
          <Heading
            mainTitle={`hosted by ${listing.user?.name} ${
              listing.user?.lastName || ""
            }`}
            subTitle={`joined in ${format(new Date(created), "MMM")} ${format(
              new Date(created),
              "yyyy"
            )}`}
            containerClass="flex flex-col items-start"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <p>40 reviews</p>
          <p>Identity verified</p>
        </div>
      </section>
    </section>
  );
};

export default ListingDetails;
