"use client";
import { User } from "@prisma/client";
import { UserAvatar } from "@/components";
import { format } from "date-fns";
import { useState } from "react";

type Props = {
  user: User;
};
const Profile = ({ user }: Props) => {
  const [isUpdate, setIsUpdate] = useState(false);

  const onUpdateProfile = () => {
    setIsUpdate(true);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-2xl font-bold text-neutral-600 capitalize ">
          welcome back!
        </h3>
        <UserAvatar
          img={user.image}
          imgClassName="w-28"
          avatarClassName="w-28 h-28"
        />
        <p>{user.name}</p>
        {user.lastName && <p>{user.lastName}</p>}
        <p>{user.email}</p>
        <p>joined in {format(new Date(user.createdAt), "dd/LL/yyyy")}</p>
      </div>
      <button
        onClick={onUpdateProfile}
        className="p-2 border-slate-700 border rounded-lg text-slate-700 hover:bg-slate-700 hover:text-slate-50 capitalize transition ease-in-out duration-300"
      >
        update profile
      </button>
    </>
  );
};

export default Profile;
