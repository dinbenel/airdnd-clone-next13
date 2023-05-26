import { DBListing } from "@/Models/ListingModel";
import ListingHead from "./ListingHead";
import ListingBody from "./ListingBody/ListingBody";
import ListingReview from "./ListingReview";
import Map from "@/components/Map/Map";
import Image from "next/image";
import Heading from "@/components/Heading/Heading";

type Props = {
  listing: DBListing;
  //   user: User;
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
      <ListingReview />
      <hr className="my-4" />

      <section className=" ">
        <h3 className="font-semibold mb-4 text-2xl">Where you’ll be</h3>
        <div className="relative h-96">
          <Map viewportVal={latLng.map((v) => Number(v)) as [number, number]} />
        </div>
        <p className="mt-2 text-lg font-medium">{`${listing.location?.region}, ${listing.location?.label}`}</p>
      </section>
      <hr className="my-4" />
      <section>
        <div className="flex w-full gap-4 items-center">
          <div>
            <Image
              alt=""
              src={listing.user?.image || ""}
              width={70}
              height={70}
              className="rounded-full"
            />
          </div>
          <Heading
            mainTitle={`hosted by ${listing.user?.name} ${
              listing.user?.lastName || ""
            }`}
            subTitle={`joined in ${new Date(created)
              .toUTCString()
              .slice(4, 17)
              .trim()}`}
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
