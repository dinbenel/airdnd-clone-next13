import { ListingPreview } from "@/components";
import { getAllCategories } from "@/services/categoryService";
import { getAllListing } from "@/services/listingService";
import { getLogedInUser } from "@/utils/getLogedInUser";
import { Suspense } from "react";

export default async function Home() {
  const logedInUserPrm = getLogedInUser();
  const listingsPrm = getAllListing();

  const [{ data: listings }, logedInUser] = await Promise.all([
    listingsPrm,
    logedInUserPrm,
  ]);

  return (
    <main className="container">
      <Suspense fallback={<>Loading</>}>
        <ListingPreview listings={listings} user={logedInUser} />
      </Suspense>
    </main>
  );
}
