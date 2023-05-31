import { Review, User } from "@prisma/client";

export interface ReviewInput {
  title: string;
  body: string;
  rating: number;
}

export interface ReviewBody extends ReviewInput {
  listingId: string;
}

export interface DbReview extends Review {
  user: User;
}
