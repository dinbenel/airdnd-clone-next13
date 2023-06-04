"use client";
import Logo from "./Logo";
import SearchBar from "../Search-Bar/SearchBar";
import UserMenu from "../UserMenu/UserMenu";
import UserMenuItem from "../UserMenu/UserMenuItem";
import GuestMenuItem from "../UserMenu/GuestMenuItem";
import { User } from "@prisma/client";
import MainContainer from "../Container/MainContainer";
import { usePathname } from "next/navigation";
import SecondaryContainer from "../Container/SecondaryContainer";
import { useEffect } from "react";

type Props = {
  user?: User;
};

const NavBar = ({ user }: Props) => {
  const path = usePathname();

  useEffect(() => {}, [path]);

  let content;
  if (path === "/") {
    content = (
      <MainContainer>
        <nav className="flex justify-between ">
          <Logo />
          <SearchBar />
          <UserMenu user={user}>
            {user ? <UserMenuItem /> : <GuestMenuItem />}
          </UserMenu>
        </nav>
      </MainContainer>
    );
  } else {
    content = (
      <SecondaryContainer>
        <nav className="flex justify-between ">
          <Logo />
          <SearchBar />
          <UserMenu user={user}>
            {user ? <UserMenuItem /> : <GuestMenuItem />}
          </UserMenu>
        </nav>
      </SecondaryContainer>
    );
  }
  return content;
};

export default NavBar;
