import { ListingPreview } from "@/components";
import Map from "@/components/Map/Map";
import { getAllCategories } from "@/services/categoryService";
import { getAllListing } from "@/services/listingService";
import { getLogedInUser } from "@/utils/getLogedInUser";
import { Suspense } from "react";
import { seedAmenities } from "../../prisma/seed";

export default async function Home() {
  const logedInUserPrm = getLogedInUser();
  const listingsPrm = getAllListing();

  const [{ data: listings }, logedInUser] = await Promise.all([
    listingsPrm,
    logedInUserPrm,
  ]);

  return (
    <main className="container h-[600px]">
      <Suspense fallback={<>Loading</>}>
        <ListingPreview listings={listings} user={logedInUser} />
      </Suspense>
    </main>
  );
}
