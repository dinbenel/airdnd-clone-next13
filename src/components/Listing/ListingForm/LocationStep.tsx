"use client";
import Map from "@/components/Map/Map";
import Heading from "../../Heading/Heading";
import CountrySelect from "../../Input/CountrySelect";
import { useListing } from "@/store/ListingStore";
import { ViewState } from "react-map-gl";
import { useState } from "react";

type Props = {};

const LocationStep = ({}: Props) => {
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
