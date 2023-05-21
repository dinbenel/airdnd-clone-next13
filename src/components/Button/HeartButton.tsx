"use client";

import { http } from "@/services/apiService";
import { useState } from "react";
import { icons } from "@/constants/categoryMap";

type Props = {
  listingId: string;
  listingLikedBy: string[];
  userId: string;
};

const HeartButton = ({ listingId, listingLikedBy, userId }: Props) => {
  const [isLiked, setIsLiked] = useState(listingLikedBy.includes(userId));

  const toglleFav = (action: "like" | "disLike") => {
    if (!userId) return;
    setIsLiked((prev) => {
      const likes = handleUserFavs(action);
      console.log(likes);
      http
        .put("/listing/fav", { userIds: likes, listingId })
        .then((res) => console.log("RES", res));
      return !prev;
    });
  };

  const handleUserFavs = (action: "like" | "disLike") => {
    const likes = [...listingLikedBy];
    console.log(action);
    if (action === "disLike") {
      const idx = likes.indexOf(userId);
      likes.splice(idx, 1);
      return likes;
    }
    likes.push(userId);
    return likes;
  };

  return (
    <div className="absolute -top-[5px] right-[5px]">
      <button
        onClick={() => toglleFav(!isLiked ? "like" : "disLike")}
        className="relative"
      >
        <icons.TbHeart
          size={29}
          color="white"
          className=" absolute top-0 right-0"
        />
        <icons.TbHeartFilled
          size={20}
          color={isLiked ? "#f43f5e" : "#4b5563"}
          className={`absolute top-[2.5px] right-[4.4px]       
          `}
        />
      </button>
    </div>
  );
};

export default HeartButton;
