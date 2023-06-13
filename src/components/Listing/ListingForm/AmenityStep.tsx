"use client";
import { ListingModel } from "@/Models/ListingModel";
import Heading from "@/components/Heading/Heading";
import { amenityMap } from "@/constants/amenityMap";
import { useAmenity } from "@/store/AmenityStore";
import { useFormContext } from "react-hook-form";

const AmenityStep = () => {
  const { setValue } = useFormContext<ListingModel<string[]>>();
  const { amenities, selected, setSelected } = useAmenity();

  const onSelectAmenity = (id: string) => {
    setSelected(id);
    setValue("amenities", Array.from(selected));
  };

  return (
    <>
      <Heading
        subTitle="which of these services your place provides?"
        subTitleClass="mt-4"
      />
      <section className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 cursor-pointer overflow-x-auto gap-2 ">
        {amenities?.map((amt, idx) => {
          const Icon = amenityMap[amt.id] || null;
          return (
            <section
              key={`${amt.id}-${idx + Date.now()}`}
              className={`flex p-3 rounded-xl items-center gap-2 hover:bg-neutral-100 transition duration-300 ease-in-out 
            ${selected.has(amt.id) ? "border" : ""}`}
              onClick={() => onSelectAmenity(amt.id)}
            >
              <Icon />
              <span>{amt.label}</span>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default AmenityStep;
