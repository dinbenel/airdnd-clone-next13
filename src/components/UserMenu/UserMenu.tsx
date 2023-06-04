"use client";
import { useClickAwayLisiner } from "@/hooks/useClickAwayLisiner";
import { useListing } from "@/store/ListingStore";
import { useLogister } from "@/store/LogisterStore";
import { User } from "@prisma/client";
import { ReactNode, useState } from "react";
import { MenuSvg } from "../svg";
import UserAvatar from "./UserAvatar";

type Props = {
  children: ReactNode;
  user?: User;
};

const UserMenu = ({ children, user }: Props) => {
  const onOpen = useListing((state) => state.onOpen);
  const onOpenLogister = useLogister((state) => state.onOpen);
  const open = useListing((state) => state.isOpen);

  const [isOpen, setIsOpen] = useState(false);

  const handleUserMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const menuRef = useClickAwayLisiner(() => {
    setIsOpen(false);
  });

  const handleOpenListingModal = () => {
    if (user) {
      onOpen();
      return;
    }
    onOpenLogister();
  };

  return (
    <div className="flex items-center gap-6 relative">
      {open}
      <div
        className="font-semibold capitalize cursor-pointer"
        onClick={handleOpenListingModal}
      >
        airdnd your home
      </div>
      <div ref={menuRef}>
        <div
          className="serch-bar-item flex gap-2 p-[0.5rem] w-20 items-center justify-center"
          onClick={handleUserMenuOpen}
        >
          <MenuSvg className="text-gray-500" />
          <UserAvatar img={user?.image} imgClassName="" />
        </div>

        {isOpen && children}
      </div>
    </div>
  );
};

export default UserMenu;
