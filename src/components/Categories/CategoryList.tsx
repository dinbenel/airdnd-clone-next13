import CategoryCard from "./CategoryCard";
import { categoryMap } from "../../constants/categoryMap";
import { getAllCategories } from "@/services/categoryService";

const CategoryList = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <section className="flex overflow-x-auto justify-between gap-2 container mb-4">
      {categories?.map(({ label, id, icon }) => {
        return <CategoryCard key={id} label={label} icon={icon} />;
      })}
    </section>
  );
};

export default CategoryList;
