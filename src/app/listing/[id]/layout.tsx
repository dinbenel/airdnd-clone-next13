import AppToast from "@/context/AppToast";
import { ReactNode } from "react";

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
export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="">
      {children}
      <AppToast />
    </section>
  );
}
