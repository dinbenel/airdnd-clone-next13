"use client";
import Image from "next/image";
import { UserAvatarSvg } from "../svg";

type Props = {
  img: string | null | undefined;
  imgClassName: string;
  width?: number;
  height?: number;
  avatarClassName?: string;
};

const UserAvatar = ({
  img,
  imgClassName,
  height = 25,
  width = 25,
  avatarClassName = "text-gray-500 text-3xl",
}: Props) => {
  return (
    <>
      {img ? (
        <Image
          src={img}
          alt="current users image"
          width={width}
          height={height}
          className={`rounded-full ${imgClassName}`}
        />
      ) : (
        <UserAvatarSvg className={avatarClassName} />
      )}
    </>
  );
};

export default UserAvatar;
