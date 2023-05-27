import { Review } from "@prisma/client";

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <div>
      <div></div>
      <h3>{review.title}</h3>
      <p>{review.body}</p>
    </div>
  );
};

export default ReviewCard;
