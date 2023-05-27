"use client";
import Image from "next/image";
import Select from "react-select";
import { useFormContext } from "react-hook-form";
import { useCountries } from "@/hooks/useCountries";
import { useListing } from "@/store/ListingStore";
import { ListingModel } from "@/Models/ListingModel";

type Props = {};

const CountrySelect = ({}: Props) => {
  const { setValue } = useFormContext<ListingModel<string[]>>();

  const { getAllCountries } = useCountries();
  const location = useListing((state) => state.getLocation());
  const setSelectedLatLng = useListing((state) => state.setSelectedLatLng);

  const onSelect = (val: any) => {
    setValue("location", val);
    setSelectedLatLng(val);
  };

  return (
    <div>
      <Select
        value={location}
        onChange={onSelect}
        isClearable
        placeholder="Anywhere"
        options={getAllCountries()}
        formatOptionLabel={(data) => {
          return (
            <div className="flex flex-row items-center gap-3">
              <Image
                src={data?.flag || ""}
                width={20}
                height={20}
                alt={`${data?.label} flag`}
              />
              <div>
                {data?.label},
                <span className="text-neutral-800 ml-2">{data?.region}</span>
              </div>
            </div>
          );
        }}
      />
    </div>
  );
};

export default CountrySelect;
