import { ReviewBody } from "@/Models/ReviewModel";
import prisma from "../../../lib/prismaClient";
import { NextResponse } from "next/server";
import { ErrorMap } from "@/constants/errorMap";
import { getLoggedInUser } from "@/utils/getLoggedInUser";

export async function POST(req: Request) {
  try {
    const { body, listingId, rating, title } = (await req.json()) as ReviewBody;
    const user = await getLoggedInUser();

    if (!body || !listingId || !title) throw new Error(ErrorMap.invalidInput);
    const flotRating = parseFloat(Number(rating).toFixed(1));

    await prisma?.review.create({
      data: {
        body,
        title,
        rating: flotRating,
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

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("reviewId") as string;
  try {
    await prisma?.review.delete({
      where: {
        id,
      },
    });
    return NextResponse.json("review deleted successfully!");
  } catch (error) {
    console.log(error);
    throw new Error("cant delete review");
  }
}
