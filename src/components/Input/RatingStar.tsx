"use client";
import Rating from "@mui/material/Rating";
import { useFormContext } from "react-hook-form";
import { ReviewInput } from "@/Models/ReviewModel";

const StarRating = () => {
  const { setValue, watch } = useFormContext<ReviewInput>();
  const rating = watch("rating");

  return (
    <div className="">
      <Rating
        size="large"
        name="half-rating"
        defaultValue={0}
        precision={0.5}
        value={rating}
        onChange={(_, newValue) => {
          setValue("rating", newValue || 0);
        }}
        style={{ color: "#f43f5e" }}
      />
    </div>
  );
};

export default StarRating;
