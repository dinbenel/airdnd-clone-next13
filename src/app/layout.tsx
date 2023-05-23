import "./globals.css";
import { ReactNode } from "react";
import { Nunito } from "next/font/google";
import { getLogedInUser } from "@/utils/getLogedInUser";
import {
  CategoryList,
  ClientOnley,
  Header,
  ListingForm,
  Logister,
} from "@/components";

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
  const logedInUser = await getLogedInUser();

  return (
    <html lang="en">
      <body className={`${nunito.variable} font-nunito`}>
        <Header user={logedInUser} />
        <ClientOnley>
          <ListingForm user={logedInUser} />
          <Logister formVals={{ email: "", password: "", username: "" }} />
        </ClientOnley>
        {/* @ts-expect-error Async Server Component  */}
        <CategoryList />
        {children}
      </body>
    </html>
  );
}
