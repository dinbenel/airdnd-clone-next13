"use client";
import Button from "@/components/Button/Button";
import NoReviews from "@/components/NoReviews/NoReviews";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { useReview } from "@/store/ReviewStore";
import { Review } from "@prisma/client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

type Props = {
  reviews: Review[];
  listingId: string;
};

const ListingReview = ({ reviews, listingId }: Props) => {
  const { onOpen, setListingId } = useReview();
  const { data } = useSession();

  useEffect(() => {
    setListingId(listingId);
  }, []);

  return (
    <section className="min-h-[400px] flex flex-col items-center justify-center relative">
      {reviews.length ? (
        reviews.map((review) => <ReviewCard review={review} key={review.id} />)
      ) : (
        <NoReviews />
      )}
      {data?.user && (
        <Button
          onClick={onOpen}
          title="add a review"
          className="border-[1px] text-neutral-800 p-2 w-[30%] rounded-lg text-lg font-semibold hover:bg-white hover:text-neutral-800 transition ease-in-out duration-300"
        />
      )}
    </section>
  );
};

export default ListingReview;
