export interface ReviewInput {
  title: string;
  body: string;
  rating: number;
}

export interface ReviewBody extends ReviewInput {
  listingId: string;
}
