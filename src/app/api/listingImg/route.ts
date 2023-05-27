import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { ErrorMap } from "@/constants/errorMap";
import { uploadImage } from "@/lib/fireBaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.formData();
    const user = await getServerSession();
    const file = body.get("file") as File;

    const imgUrl = await uploadImage(`${user?.user?.email}/ggg`, file);

    return NextResponse.json("imgUrl");
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.uploadImg);
  }
}
