import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import { Adapter } from "next-auth/adapters";

export const customPrismaAdapter = (prisma: PrismaClient): Adapter => {
  const adapter = PrismaAdapter(prisma);

  return {
    ...adapter,
    async createUser(user) {
      const dbUser = await adapter.getUserByEmail(user.email);
      if (!dbUser) {
        const createdUser = await adapter.createUser(user);
        return createdUser;
      }

      return dbUser;
    },
  };
};
