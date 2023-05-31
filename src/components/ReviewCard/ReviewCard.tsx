import Rating from "@mui/material/Rating";
import UserAvatar from "../UserMenu/UserAvatar";
import { DbReview } from "@/Models/ReviewModel";

type Props = {
  review: DbReview;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div className="flex gap-2 items-start">
      <UserAvatar img={review.user.image || ""} imgClassName="h-16 w-16" />
      <div className="flex flex-col">
        <h3 className="ms-1 text-xl font-semibold text-neutral-800">
          {review.title}
        </h3>
        <p className="ms-1 text-lg font-medium text-neutral-600">
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
    </div>
  );
};

export default ReviewCard;
