import { ClientOnley, ListingDetails } from "@/components";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import { getListingById } from "@/services/listingService";
import { getLogedInUser } from "@/utils/getLogedInUser";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Props) => {
  const dataPrm = getListingById(id);
  const userPrm = getLogedInUser();
  const [logedInUser, { data: listing }] = await Promise.all([
    userPrm,
    dataPrm,
  ]);

  return (
    <main className="max-w-[70%] mx-auto">
      <ListingDetails listing={listing} logedInUser={logedInUser} />
      <div className="h-10"></div>
    </main>
  );
};

export default page;
