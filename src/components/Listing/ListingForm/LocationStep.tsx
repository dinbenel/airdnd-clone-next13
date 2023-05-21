"use client";
import Heading from "../../Heading/Heading";
import CountrySelect from "../../Input/CountrySelect";

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
    </section>
  );
};

export default LocationStep;
