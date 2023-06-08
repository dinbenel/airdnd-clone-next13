import { OrderInput } from "@/Models/OrderModel";
import { http } from "./apiService";

export const createOrder = (order: OrderInput) => {
  return http.post("/order", order);
};
