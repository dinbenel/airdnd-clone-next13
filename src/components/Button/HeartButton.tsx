"use client";
import { http } from "@/services/apiService";
import { MouseEvent, useState } from "react";
import { HeartFillSvg, HeartSvg } from "../svg";

type Props = {
  listingId: string;
  listingLikedBy: string[];
  userId: string;
};

const HeartButton = ({ listingId, listingLikedBy, userId }: Props) => {
  const [isLiked, setIsLiked] = useState(listingLikedBy.includes(userId));

  const toglleFav = (ev: MouseEvent, action: "like" | "disLike") => {
    ev.stopPropagation();
    if (!userId) return;

    setIsLiked((prev) => {
      const likes = handleUserFavs(action);
      http.put("/listing/fav", { userIds: likes, listingId });
      return !prev;
    });
  };

  const handleUserFavs = (action: "like" | "disLike") => {
    const likes = [...listingLikedBy];
    if (action === "disLike") {
      const idx = likes.indexOf(userId);
      likes.splice(idx, 1);
      return likes;
    }
    likes.push(userId);
    return likes;
  };

  return (
    <div
      className="relative z-20"
      onClick={(ev) => toglleFav(ev, !isLiked ? "like" : "disLike")}
    >
      <HeartSvg className="absolute text-3xl  fill-white right-0" />
      <HeartFillSvg
        className={`absolute text-[1.4rem] right-[3px] top-[3.5px] ${
          isLiked ? "fill-rose-400" : "fill-slate-400"
        }`}
      />
    </div>
  );
};

export default HeartButton;
