import CategoryCard from "./CategoryCard";
import { categoryMap } from "../../constants/categoryMap";
import prisma from "../../lib/prismaClient";
import { getAllCategories } from "@/services/categoryService";

const CategoryList = async () => {
  const categories = await prisma?.category.findMany();

  return (
    <section className="flex overflow-x-auto justify-between gap-2 container mb-4">
      {categories?.map(({ label, id, icon }) => {
        return <CategoryCard key={id} label={label} icon={icon} />;
      })}
    </section>
  );
};

export default CategoryList;
