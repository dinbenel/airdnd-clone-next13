import { Order } from "@prisma/client";

export type OrderInput = Omit<Order, "id" | "createdAt" | "userId">;

export interface DbOrder extends Order {}
