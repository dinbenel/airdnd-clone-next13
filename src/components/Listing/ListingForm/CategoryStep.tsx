"use client";
import { useCategory } from "@/store/CategoryStore";
import Heading from "../../Heading/Heading";
import { useFormContext } from "react-hook-form";
import { useListing } from "@/store/ListingStore";
import { categoryMap } from "../../../constants/categoryMap";
import { ListingModel } from "@/Models/ListingModel";
import { useEffect } from "react";
type Props = {};

function CategoryStep({}: Props) {
  const { setValue } = useFormContext<ListingModel<string[]>>();
  const setCategories = useCategory((state) => state.setCategories);
  const categories = useCategory((state) => state.categories);
  const categorySet = useListing((state) => state.getCtgSet());
  const setCategpry = useListing((state) => state.setCategory);

  useEffect(() => {
    setCategories();
  }, []);

  const onSelectCategory = (id: string) => {
    setCategpry(id);
    setValue("category", Array.from(categorySet));
  };

  return (
    <>
      <Heading
        subTitle="which of these describes your place?"
        subTitleClass="mt-4"
      />
      <section className="grid grid-cols-1 p-5 md:grid-cols-2 lg:grid-cols-3 cursor-pointer overflow-x-auto gap-2 ">
        {categories?.map((ctg, idx) => {
          const Icon = categoryMap[ctg.icon] || null;
          return (
            <section
              key={`${ctg.id}-${idx + Date.now()}`}
              className={`flex p-3 rounded-xl items-center gap-2 hover:bg-neutral-100 transition duration-300 ease-in-out 
              ${categorySet.has(ctg.id) ? "border" : ""}`}
              onClick={() => onSelectCategory(ctg.id)}
            >
              <Icon />
              <span>{ctg.label}</span>
            </section>
          );
        })}
      </section>
    </>
  );
}

export default CategoryStep;
