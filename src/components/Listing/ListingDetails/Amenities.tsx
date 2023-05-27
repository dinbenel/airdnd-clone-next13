"use client";

import { amenityMap } from "@/constants/amenityMap";
import { Amenitiy } from "@prisma/client";

const Amenities = ({ amenities }: { amenities: Amenitiy[] }) => {
  return (
    <section className="grid grid-cols-2 my-2 gap-y-4">
      {amenities.map((am) => {
        return (
          <div key={am.id} className="flex items-center gap-2">
            <p className="text-3xl">{amenityMap[am.id]()}</p>
            <p className="text-xl text-neutral-700 capitalize">{am.label}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Amenities;
