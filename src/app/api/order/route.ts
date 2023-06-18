import { IReq } from "@/Models/HttpModel";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { ErrorMap } from "@/constants/errorMap";
import { OrderInput } from "@/Models/OrderModel";
import { getLogedInUser } from "@/utils/getLogedInUser";

export async function POST(req: IReq) {
  const body: OrderInput = await req.json();
  const user = await getLogedInUser();

  try {
    await prisma?.order.create({
      data: {
        startDate: body.startDate,
        endDate: body.endDate,
        totalPrice: body.totalPrice,
        listing: {
          connect: {
            id: body.listingId,
          },
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return NextResponse.json("order created succesfully");
  } catch (error) {
    throw new Error(ErrorMap.invalidInput);
  }
}
