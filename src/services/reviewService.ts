import { http } from "./apiService";
import { ReviewBody } from "@/Models/ReviewModel";

const createReview = (review: ReviewBody) => {
  return http.post("/review", review);
};

export { createReview };
