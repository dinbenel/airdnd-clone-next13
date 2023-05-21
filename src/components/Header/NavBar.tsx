"use client";
import Logo from "./Logo";
import SearchBar from "../Search-Bar/SearchBar";
import UserMenu from "../UserMenu/UserMenu";
import UserMenuItem from "../UserMenu/UserMenuItem";
import GuestMenuItem from "../UserMenu/GuestMenuItem";
import { User } from "@prisma/client";

type Props = {
  user?: User;
};

const NavBar = ({ user }: Props) => {
  return (
    <nav className="container flex justify-between ">
      <Logo />
      <SearchBar />
      <UserMenu user={user}>
        {user ? <UserMenuItem /> : <GuestMenuItem />}
      </UserMenu>
    </nav>
  );
};

export default NavBar;
