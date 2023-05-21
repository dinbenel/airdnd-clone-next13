import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { ErrorMap } from "@/constants/errorMap";
import { uploadImage } from "@/lib/cloudinaryClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const user = await getServerSession();

    const imgUrl = await uploadImage(body.img, user?.user?.email || "");
    return NextResponse.json(imgUrl);
  } catch (error) {
    throw new Error(ErrorMap.uploadImg);
  }
}
