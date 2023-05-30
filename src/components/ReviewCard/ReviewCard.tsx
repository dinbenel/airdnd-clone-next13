import { Review, User } from "@prisma/client";
import UserAvatar from "../UserMenu/UserAvatar";

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div>
      <UserAvatar img={""} imgClassName="" />
      <h3>{review.title}</h3>
      <p>{review.body}</p>
    </div>
  );
};

export default ReviewCard;
