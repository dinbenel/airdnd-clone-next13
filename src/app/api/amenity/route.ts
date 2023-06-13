import { ErrorMap } from "@/constants/errorMap";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";

export async function GET(_: Request) {
  try {
    const amenities = await prisma?.amenitiy.findMany();
    if (!amenities?.length) NextResponse.json({ msg: "no found" });
    return NextResponse.json(amenities);
  } catch (error) {
    throw new Error(ErrorMap.notFound);
  }
}
