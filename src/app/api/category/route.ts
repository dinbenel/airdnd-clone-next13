import { NextResponse } from "next/server";

export async function GET(req: Request) {
  return NextResponse.json("categories");
  //   try {
  //     const categories = prisma && (await prisma.category.findMany());
  //     return NextResponse.json(categories);
  //     if (!categories?.length) NextResponse.json({ msg: "no found" });
  //   } catch (error) {
  //     throw new Error(ErrorMap.notFound);
  //   }
}
