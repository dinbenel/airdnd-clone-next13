import { ListingPreview, Loader, MainContainer } from "@/components";
import { getAllListing } from "@/services/listingService";
import { getLogedInUser } from "@/utils/getLogedInUser";
import { Suspense } from "react";

type Props = {
  searchParams: {
    category: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const logedInUserPrm = getLogedInUser();
  const listingsPrm = getAllListing(searchParams?.category || "");

  const [{ data: listings }, logedInUser] = await Promise.all([
    listingsPrm,
    logedInUserPrm,
  ]);

  return (
    <MainContainer>
      <main className="min-h-[600px]">
        <Suspense fallback={<Loader isLoading={true} size={30} />}>
          <ListingPreview listings={listings} user={logedInUser} />
          <div className="h-10"></div>
        </Suspense>
      </main>
    </MainContainer>
  );
}
