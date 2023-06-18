import CategoryCard from "./CategoryCard";
import prisma from "../../lib/prismaClient";

const CategoryList = async () => {
  const categories = await prisma?.category.findMany();

  return (
    <section className="flex overflow-x-auto justify-between my-4">
      {categories?.map(({ label, id, icon }) => {
        return <CategoryCard key={id} label={label} icon={icon} />;
      })}
    </section>
  );
};

export default CategoryList;
