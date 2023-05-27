"use client";
import { categoryMap } from "@/constants/categoryMap";
import { useCategory } from "@/store/CategoryStore";
import { CategoryIcon } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  label: string;
  icon: CategoryIcon;
};

const CategoryCard = ({ label, icon }: Props) => {
  const setSelected = useCategory((state) => state.setSelected);
  const selected = useCategory((state) => state.selected);
  const router = useRouter();
  const pathName = usePathname();

  const onSelect = (label: string) => {
    setSelected(label);
    const searchQuery = Array.from(selected).join(",");

    const urlParams = new URLSearchParams();
    urlParams.append("category", searchQuery);
    const searchParams =
      searchQuery.length === 0 ? "" : `?${urlParams.toString()}`;

    router.replace(`/${searchParams}`);
    router.refresh();
  };

  if (pathName !== "/") return null;
  const Icon = categoryMap[icon];
  return (
    <div
      className={`flex flex-col items-center hover:text-gray-300 cursor-pointer transition ${
        selected.has(label) ? "text-gray-300" : "text-gray-600"
      }`}
      onClick={() => onSelect(label)}
    >
      {Icon && <Icon className="text-3xl" />}
      <p className="capitalize font-nunito font-bold text-sm mt-[1px]">
        {label}
      </p>
    </div>
  );
};

export default CategoryCard;
