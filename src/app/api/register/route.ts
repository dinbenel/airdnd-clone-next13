import { IUserForm } from "@/Models/UserModel";
import { ErrorMap } from "@/constants/errorMap";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClient";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as IUserForm;
    const hasPassword = await hash(body.password, 12);

    const user = await prisma?.user.create({
      data: {
        email: body.email,
        name: body.username,
        password: hasPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    throw new Error(ErrorMap.invalidCreds);
  }
}

export const dynamic = "force-dynamic";
