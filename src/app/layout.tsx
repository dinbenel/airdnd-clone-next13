import "./globals.css";
import { ReactNode } from "react";
import { Nunito } from "next/font/google";
import { getLoggedInUser } from "@/utils/getLoggedInUser";
import {
  CategoryList,
  ClientOnly,
  Header,
  ListingForm,
  Logister,
  MainContainer,
  ReviewForm,
} from "@/components";
import AuthProvider from "@/context/AuthProvider";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export const metadata = {
  title: "airDnD",
  description: "airbnb clone using nextjs 13",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const loggedInUser = await getLoggedInUser();

  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito`}>
        <Header user={loggedInUser} />
        <MainContainer>
          {/* @ts-expect-error Async Server Component  */}
          <CategoryList />
        </MainContainer>
        <ClientOnly>
          <AuthProvider>
            <ReviewForm />
            <ListingForm user={loggedInUser} />
            <Logister formVals={{ email: "", password: "", username: "" }} />
          </AuthProvider>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
