import Amenities from "../Amenities";
import { Amenitiy } from "@prisma/client";
import { Heading, UserAvatar, DatePicker } from "@/components";

type Props = {
  lastName: string;
  userName: string;
  img: string;
  room: number;
  bath: number;
  guest: number;
  desc: string;
  amenities: Amenitiy[];
};

const BodyDetails = ({
  bath,
  guest,
  img,
  lastName,
  room,
  userName,
  desc,
  amenities,
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
          <UserAvatar
            imgClassName=""
            img={img}
            width={50}
            height={50}
            avatarClassName="text-5xl text-neutral-600"
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
      <section className="min-h-[100px] flex  items-center">
        <p>{desc}</p>
      </section>
      <hr className="mt-6" />
      <section className="min-h-[100px]">
        <h2 className="text-neutral-700 text-2xl font-medium mt-2">
          What this place offers
        </h2>
        <Amenities amenities={amenities} />
      </section>
      <hr className="mt-6" />
      <section className="mt-2">
        <DatePicker />
      </section>
    </div>
  );
};

export default BodyDetails;
