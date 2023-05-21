import { Category } from "@prisma/client";
import { http } from "./apiService";

export const getAllCategories = () => {
  return http.get<Category[]>("/category");
};
