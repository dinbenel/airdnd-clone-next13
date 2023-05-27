import Button from "@/components/Button/Button";
import NoReviews from "@/components/NoReviews/NoReviews";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { Review, User } from "@prisma/client";

type Props = {
  reviews: Review[];
  logedInUser: User;
};

const ListingReview = ({ reviews, logedInUser }: Props) => {
  console.log(reviews);
  return (
    <section className="min-h-[400px] flex flex-col items-center justify-center">
      {reviews.length ? (
        reviews.map((review) => <ReviewCard review={review} key={review.id} />)
      ) : (
        <NoReviews />
      )}
      {logedInUser && (
        <Button
          title="add a review"
          className="border-[1px] text-neutral-800 p-2 w-[30%] rounded-lg text-lg font-semibold hover:bg-white hover:text-neutral-800 transition ease-in-out duration-300"
        />
      )}
    </section>
  );
};

export default ListingReview;
