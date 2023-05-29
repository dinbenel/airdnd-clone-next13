import { Category } from "@prisma/client";
import { http } from "./apiService";

const getAllCategories = () => {
  return http.get<Category[]>("/category");
};

export { getAllCategories };
