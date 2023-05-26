import { getListingById } from "@/services/listingService";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Props) => {
  const { data: listing } = await getListingById(id);
  return <div>{JSON.stringify(listing, null, 2)}</div>;
};

export default page;
