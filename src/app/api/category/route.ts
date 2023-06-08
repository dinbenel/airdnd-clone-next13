import { ErrorMap } from "@/constants/errorMap";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismaClient";

export async function GET(_: Request) {
  try {
    const categories = await prisma?.category.findMany();
    if (!categories?.length) NextResponse.json({ msg: "no found" });
    return NextResponse.json(categories);
  } catch (error) {
    throw new Error(ErrorMap.notFound);
  }
}
