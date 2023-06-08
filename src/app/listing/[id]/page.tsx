import { ListingDetails } from "@/components";
import { getAllListing, getListingById } from "@/services/listingService";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Props) => {
  const dataPrm = getListingById(id);

  const [{ data: listing }] = await Promise.all([dataPrm]);

  return (
    <main className="max-w-[70%] mx-auto">
      <ListingDetails listing={listing} />
      <div className="h-10"></div>
    </main>
  );
};

export default page;

// export async function generateStaticParams() {
//   const { data: listings } = await getAllListing("");
//   return listings.map((lis) => ({ id: lis.id }));
// }
