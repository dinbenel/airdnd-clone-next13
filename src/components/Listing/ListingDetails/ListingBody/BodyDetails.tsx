import Heading from "@/components/Heading/Heading";
import DatePicker from "@/components/Input/DatePicker";
import Image from "next/image";
import ListingReview from "../ListingReview";
import { Review } from "@prisma/client";

type Props = {
  lastName: string;
  userName: string;
  img: string;
  room: number;
  bath: number;
  guest: number;
  desc: string;
  reviews: Review[];
};

const BodyDetails = ({
  bath,
  guest,
  img,
  lastName,
  room,
  userName,
  desc,
  reviews,
}: Props) => {
  return (
    <div className="flex-1">
      <section className="flex justify-between items-center">
        <div className="">
          <Heading
            mainTitle={`entire rental unit hosted by ${userName} ${
              lastName || ""
            }`}
            subTitle={`${guest} guests - ${room} bedroom - ${bath} bath`}
            containerClass="flex flex-col items-start"
            mainTitleClass="text-2xl font-bold"
          />
        </div>
        <div>
          <Image
            alt=""
            src={img || ""}
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>
      </section>
      <hr className="mt-6" />
      <section className="mt-6">
        <Heading
          mainTitle="airdnd plus"
          subTitle="Every Plus home is reviewed for quality"
          containerClass="flex flex-col items-start"
          mainTitleClass="text-xl font-semibold"
        />
        <Heading
          mainTitle="Free cancellation for 48 hours"
          containerClass="flex flex-col items-start"
          mainTitleClass="text-xl font-semibold"
        />
      </section>
      <hr className="mt-6" />
      <section>{desc}</section>
      <hr className="mt-6" />
      <section>
        <DatePicker />
      </section>
    </div>
  );
};

export default BodyDetails;
