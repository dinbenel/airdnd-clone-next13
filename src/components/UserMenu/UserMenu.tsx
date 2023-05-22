"use client";
import { useClickAwayLisiner } from "@/hooks/useClickAwayLisiner";
import { useListing } from "@/store/ListingStore";
import { useLogister } from "@/store/LogisterStore";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
// import { icons } from "@/constants/categoryMap";

type Props = {
  children: ReactNode;
  user?: User;
};

const UserMenu = ({ children, user }: Props) => {
  const onOpen = useListing((state) => state.onOpen);
  const onOpenLogister = useLogister((state) => state.onOpen);
  const open = useListing((state) => state.isOpen);
  const router = useRouter();
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
        <div className="serch-bar-item flex gap-4" onClick={handleUserMenuOpen}>
          {/* <icons.TbMenu2 size={17} /> */}
          {/* <icons.TbUserCircle size={28} className="text-gray-500" /> */}
        </div>

        {isOpen && children}
      </div>
    </div>
  );
};

export default UserMenu;
