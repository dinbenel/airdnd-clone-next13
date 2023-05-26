import { DBListing } from "@/Models/ListingModel";
import Heading from "@/components/Heading/Heading";
import Image from "next/image";

type Props = {
  title: string;
  location: DBListing["location"];
  img: string;
};

const ListingHead = ({ title, location, img }: Props) => {
  return (
    <section className="">
      <Heading
        mainTitle={title}
        subTitle={`${location?.region}, ${location?.label}`}
        containerClass="flex flex-col items-start"
        mainTitleClass="text-4xl"
        subTitleClass=""
      />
      <section className="relative w-full h-[35rem]">
        <Image
          alt=""
          src={img}
          fill
          className="object-cover top-0 bottom-0 rounded-lg"
        />
      </section>
    </section>
  );
};

export default ListingHead;
