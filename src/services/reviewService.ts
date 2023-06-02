import { http } from "./apiService";
import { ReviewBody } from "@/Models/ReviewModel";

const createReview = (review: ReviewBody) => {
  return http.post("/review", review);
};
const deleteReview = (reviewId: string) => {
  return http.delete(`/review/?reviewId=${reviewId}`);
};
const editReview = (review: ReviewBody) => {
  return http.put("/review", review);
};

export { createReview, deleteReview, editReview };
