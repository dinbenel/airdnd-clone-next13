import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";
import { ErrorMap } from "@/constants/errorMap";
import { IReq } from "@/Models/HttpModel";
import { getLogedInUser } from "@/utils/getLogedInUser";
import { ListingModel } from "@/Models/ListingModel";

export async function POST(req: IReq) {
  const body: ListingModel<string[]> = await req.json();
  try {
    if (!body.location) return;
    const { flag, label, latlng, region, value } = body.location;
    const session = await getLogedInUser();

    if (!session?.id) throw new Error(ErrorMap.notAuth);

    const res = await prisma?.listing.create({
      data: {
        likedBy: { connect: [] },
        user: {
          connect: {
            id: session.id,
          },
        },
        bathroomCount: body.bathroomCount,
        description: body.description,
        guestCount: body.guestCount,
        imageSrc: body.imageSrc,
        price: +Number(body.price).toFixed(2),
        roomCount: body.roomCount,
        title: body.title,
        location: {
          create: {
            flag,
            label,
            region,
            value,
            latlng: `${latlng}`,
          },
        },
        category: {
          connect: body.category.map((ctgId) => {
            return {
              id: ctgId,
            };
          }),
        },
      },
    });

    return NextResponse.json(`listing ${res!.id} created successfully`);
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.notFound);
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  try {
    if (id) {
      const listing = await prisma?.listing.findUnique({
        where: {
          id,
        },
        include: {
          category: true,
          location: true,
          likedBy: true,
          amenities: true,
          reviews: true,
          user: {
            select: {
              email: true,
              id: true,
              name: true,
              image: true,
              role: true,
              createdAt: true,
            },
          },
        },
      });
      return NextResponse.json(listing);
    }

    const obj = Object.fromEntries(searchParams.entries());
    const filterBy = obj?.category?.split(",");
    const where = filterBy
      ? {
          category: {
            every: {
              label: {
                in: filterBy,
              },
            },
          },
        }
      : {};
    const listings = await prisma?.listing.findMany({
      where,
      include: {
        category: true,
        location: true,
        likedBy: true,
      },
    });
    return NextResponse.json(listings);
  } catch (error) {
    throw new Error(ErrorMap.notFound);
  }
}

export async function DELETE(req: IReq) {
  try {
    const body: { id: string } = await req.json();

    const sessionPrm = getLogedInUser();
    const listingPrm = prisma?.listing.findFirst({ where: { id: body.id } });

    const [session, listing] = await Promise.all([sessionPrm, listingPrm]);

    if (!session?.id) throw new Error(ErrorMap.notAuth);
    if (!listing) throw new Error(ErrorMap.invalidCreds);

    if (listing.userId !== session.id) {
      throw new Error(ErrorMap.notAuth);
    }

    await prisma?.listing.delete({
      where: {
        id: body.id,
      },
    });
    return NextResponse.json(`listing ${body.id} was deleted successfully`);
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.invalidInput);
  }
}

export async function PUT(req: IReq) {
  try {
    const data: ListingModel<string[]> = await req.json();
    const session = await getLogedInUser();
    if (!session.id) throw new Error(ErrorMap.notAuth);

    await prisma?.listing.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
        user: {
          connect: {
            id: session.id,
          },
        },
        category: {
          connect: data.category.map((ctgId) => {
            return {
              id: ctgId,
            };
          }),
        },
        location: {
          connectOrCreate: {
            where: {
              id: data.location?.id,
            },
            create: {
              flag: data.location?.flag!,
              label: data.location?.label!,
              latlng: ``,
              region: data.location?.region!,
              value: data.location?.value!,
            },
          },
        },
      },
    });
    return NextResponse.json(`listing ${data.id} updated successfully`);
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.invalidInput);
  }
}
