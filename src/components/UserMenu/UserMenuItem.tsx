"use client";
import { useListing } from "@/store/ListingStore";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import MenuItem from "../MenuItem/MenuItem";

const UserMenuItem = () => {
  const { onOpen } = useListing();
  const router = useRouter();

  return (
    <div className="absolute shadow border-[1px] py-2 w-full top-14 left-0 z-40 bg-white rounded-lg">
      <MenuItem onClick={() => router.push("/dashboard")} title="dashboard" />
      <MenuItem onClick={onOpen} title="airdnd your home" />
      <hr className="bg-neutral-200 mt-4" />
      <MenuItem onClick={signOut} title="log out" />
    </div>
  );
};

export default UserMenuItem;
