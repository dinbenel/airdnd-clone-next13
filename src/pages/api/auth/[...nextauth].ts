import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentioalsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { ErrorMap } from "@/constants/errorMap";
import prisma from "../../../lib/prismaClient";
import { AdapterUser } from "next-auth/adapters";
import { PrismaClient, User } from "@prisma/client";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient),
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
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error(ErrorMap.invalidCreds);
          }

          const user = await prisma?.user.findUnique({
            where: {
              email: credentials.email,
            },
            include: {
              accounts: true,
            },
          });
          //logen in withe different provider
          if (user && !user.password) {
            throw new Error(ErrorMap.emailExist);
          }

          if (user && user.password) {
            const isMatch = await compare(credentials.password, user.password);

            if (isMatch) {
              return user;
            }
            // throw new Error(ErrorMap.invalidCreds);
            return null;
          }
          return null;
        } catch (error) {
          throw new Error(ErrorMap.invalidCreds);
        }
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
          createdAt: true,
          lastName: true,
          likes: true,
          listings: true,
          orders: true,
          reviews: true,
        },
      });

      session.user = dbUser as Partial<User> | AdapterUser;
      return session;
    },
  },

  pages: {
    signIn: "/",
  },
  debug: process.env.NODE_ENV === "development",
};
export default NextAuth(authOptions);
