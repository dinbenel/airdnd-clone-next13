import { IReq } from "@/Models/HttpModel";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { ErrorMap } from "@/constants/errorMap";
import { Order } from "@prisma/client";
import { OrderInput } from "@/Models/OrderModel";
import { getLogedInUser } from "@/utils/getLogedInUser";

export async function POST(req: IReq) {
  const body: OrderInput = await req.json();
  const user = await getLogedInUser();
  console.log(body);
  console.log(user);
  try {
    // await prisma?.order.create({
    //     data:{

    //     }
    // })
    return NextResponse.json("order created succesfully");
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.invalidInput);
  }
}
