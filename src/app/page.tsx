import { ListingPreview } from "@/components";
import { getAllListing } from "@/services/listingService";
import { getLogedInUser } from "@/utils/getLogedInUser";

export default async function Home() {
  const logedInUserPrm = getLogedInUser();
  const listingsPrm = getAllListing();
  const [{ data: listings }, logedInUser] = await Promise.all([
    listingsPrm,
    logedInUserPrm,
  ]);

  return (
    <main className="container">
      <ListingPreview listings={listings} user={logedInUser} />
    </main>
  );
}
