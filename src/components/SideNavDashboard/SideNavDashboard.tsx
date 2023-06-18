"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideNavDashboard = () => {
  const router = useRouter();

  return (
    <aside className="flex flex-col gap-2 h-full">
      <Link href={"/dashboard/profile"}>
        <p className="nav-link">profile</p>
      </Link>
      <hr />
      <Link href={"/dashboard/fav"}>
        <p className="nav-link">my favorites</p>
      </Link>
      <hr />
      <Link href={"/dashboard/list"}>
        <p className="nav-link">my listings</p>
      </Link>
      <hr />
      <Link href={"/dashboard/order"}>
        <p className="nav-link">my orders</p>
      </Link>
      <hr />
    </aside>
  );
};

export default SideNavDashboard;
