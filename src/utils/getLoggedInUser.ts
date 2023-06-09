import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";

export const getLoggedInUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user as User;
};
