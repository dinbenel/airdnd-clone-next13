import { ErrorMap } from "@/constants/errorMap";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const categories = prisma && (await prisma.category.findMany());
    if (!categories?.length) NextResponse.json({ msg: "no found" });
    return NextResponse.json(categories);
  } catch (error) {
    throw new Error(ErrorMap.notFound);
  }
}
