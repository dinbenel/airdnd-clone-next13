import { signOut } from "next-auth/react";

const UserMenuItem = () => {
  return (
    <div className="absolute shadow border-[1px] py-2 w-full top-14 left-0 z-10 bg-white rounded-lg">
      <div className="user-menu-item" onClick={() => signOut()}>
        log out
      </div>
    </div>
  );
};

export default UserMenuItem;
