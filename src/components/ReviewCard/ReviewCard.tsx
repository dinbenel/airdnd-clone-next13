"use client";
import Rating from "@mui/material/Rating";
import UserAvatar from "../UserMenu/UserAvatar";
import { DbReview } from "@/Models/ReviewModel";
import { useSession } from "next-auth/react";
import Button from "../Button/Button";
import { DeleteSvg, EditSvg } from "../svg";
import { User } from "@prisma/client";
import { deleteReview } from "@/services/reviewService";
import { useRouter } from "next/navigation";
import { useAppToast } from "@/context/AppToast";

type Props = {
  review: DbReview;
};

const ReviewCard = ({ review }: Props) => {
  const { data } = useSession();
  const router = useRouter();
  const toast = useAppToast();
  const currUser = data?.user as User;
  const isUserOwn = currUser?.id === review.user.id;

  const onRemoveReview = async () => {
    try {
      const { data } = await deleteReview(review.id);

      toast.success(data);
      setTimeout(() => {
        router.refresh();
      }, 3500);
    } catch (error) {
      console.log(error);
    }
  };

  const onEditRview = () => {};

  return (
    <div className="flex gap-2 items-start justify-between p-2 w-full">
      <UserAvatar img={review.user.image || ""} imgClassName="h-16 w-16" />
      <div className="flex flex-col flex-1">
        <h3 className="ms-1 text-xl font-semibold text-neutral-800">
          {review.title}
        </h3>
        <p className="ms-1 text-lg font-medium text-neutral-600 w-3/4">
          {review.body}
        </p>
        <Rating
          size="medium"
          name="half-rating"
          readOnly
          value={review.rating}
          style={{ color: "#f43f5e" }}
        />
      </div>
      {isUserOwn && (
        <div className="flex gap-2">
          <Button
            Icon={EditSvg}
            className="p-0 text-lg"
            onClick={onEditRview}
          />
          <Button Icon={DeleteSvg} className="p-0" onClick={onRemoveReview} />
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
