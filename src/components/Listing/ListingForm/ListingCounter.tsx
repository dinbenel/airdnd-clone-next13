"use client";
import { ListingModel } from "@/Models/ListingModel";
import { MinusSvg, PlusSvg } from "@/components/svg";

type Props = {
  main: string;
  secondary: string;
  value: number;
  onClick: (
    action: "inc" | "dec",
    type: keyof Pick<
      ListingModel<string[]>,
      "bathroomCount" | "guestCount" | "roomCount"
    >
  ) => void;
  type: keyof Pick<
    ListingModel<string[]>,
    "bathroomCount" | "guestCount" | "roomCount"
  >;
};

const ListingCounter = ({ main, secondary, onClick, value, type }: Props) => {
  const onAdd = () => {
    onClick("inc", type);
  };

  const onSubtract = () => {
    onClick("dec", type);
  };

  return (
    <section className="flex justify-between w-full gap-2 items-center">
      <section>
        <p className="text-base font-semibold text-neutral-700 capitalize">
          {main}
        </p>
        <p className="text-sm font-normal text-neutral-500">{secondary}</p>
      </section>
      <section className="flex items-center gap-3">
        <button onClick={onAdd} className="border-[2px] rounded-full p-2">
          <PlusSvg className="text-lg" />
        </button>
        <div>{value}</div>
        <button onClick={onSubtract} className="border-[2px] rounded-full p-2">
          <MinusSvg />
        </button>
      </section>
    </section>
  );
};

export default ListingCounter;
