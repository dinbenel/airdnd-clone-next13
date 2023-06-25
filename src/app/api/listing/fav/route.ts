import { IReq } from "@/Models/HttpModel";
import { ErrorMap } from "@/constants/errorMap";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { getLoggedInUser } from "@/utils/getLoggedInUser";

export async function PUT(req: IReq) {
  try {
    const body: { userIds: string[]; listingId: string } = await req.json();
    const session = await getLoggedInUser();
    if (!session.id) throw new Error(ErrorMap.notAuth);
    const list = await prisma?.listing.findFirst({
      where: { id: body.listingId },
    });

    await prisma?.listing.update({
      where: {
        id: body.listingId,
      },
      data: {
        likedBy: {
          set: body.userIds.map((uId) => ({ id: uId })),
        },
      },
    });

    return NextResponse.json(`listing ${body.listingId} updated successfully`);
  } catch (error) {
    throw new Error(ErrorMap.notFound);
  }
}
