"use client";
import { Heading, Map, CountrySelect } from "@/components";

const LocationStep = () => {
  return (
    <section className="p-5">
      <Heading
        mainTitle="where is your place located?"
        subTitle="help guests find you"
        subTitleClass="p-0"
        containerClass="mb-6"
      />
      <CountrySelect />
      <section className="max-w-full relative h-60 mt-2 rounded-md">
        <Map zoomLevel={5} />
      </section>
    </section>
  );
};

export default LocationStep;
