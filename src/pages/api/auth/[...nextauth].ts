import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentioalsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { AdapterUser } from "next-auth/adapters";
import { User } from "@prisma/client";
import { ErrorMap } from "@/constants/errorMap";
import prisma from "../../../lib/prismaClient";

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentioalsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error(ErrorMap.invalidCreds);
        }

        const user = await prisma?.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user, token }) {
      const dbUser = await prisma?.user.findUnique({
        where: {
          email: token.email as string,
        },
        select: {
          email: true,
          id: true,
          accounts: true,
          name: true,
          image: true,
          role: true,
        },
      });

      session.user = dbUser as Partial<User> | AdapterUser;
      return session;
    },
  },
  adapter: PrismaAdapter(prisma as any),

  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
};
export default NextAuth(authOptions);
