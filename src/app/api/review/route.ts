import { ReviewBody } from "@/Models/ReviewModel";
import prisma from "../../../lib/prismaClient";
import { NextResponse } from "next/server";
import { ErrorMap } from "@/constants/errorMap";
import { getLogedInUser } from "@/utils/getLogedInUser";

export async function POST(req: Request) {
  try {
    const { body, listingId, rating, title } = (await req.json()) as ReviewBody;
    const user = await getLogedInUser();

    if (!body || !listingId || !title) throw new Error(ErrorMap.invalidInput);

    await prisma?.review.create({
      data: {
        body,
        title,
        rating,
        listing: {
          connect: {
            id: listingId,
          },
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json("review created successfully!");
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.invalidInput);
  }
}
