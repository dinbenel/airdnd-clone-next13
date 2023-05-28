// import "./globals.css";
import { ReactNode } from "react";
import { Nunito } from "next/font/google";
import { ClientOnley } from "@/components";
import ReviewForm from "@/components/ReviewForm/ReviewForm";

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
  return (
    // <html lang="en">
    //   <body className={`${nunito.variable} font-nunito`}>
    <>
      {/* <ClientOnley>
        </ClientOnley> */}

      {/* <ReviewForm /> */}
      {children}
    </>
    //   </body>
    // </html>
  );
}
