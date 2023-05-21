import { ErrorMap } from "@/constants/errorMap";
import prisma from "../../../lib/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma?.category.findMany();
    return NextResponse.json(categories);
  } catch (error) {
    throw new Error(ErrorMap.notFound);
  }
}
