"use client";
import { DBListing } from "@/Models/ListingModel";
import HeartButton from "@/components/Button/HeartButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const ListingCard = ({
  listing,
  userId,
}: {
  listing: DBListing;
  userId: string;
}) => {
  const router = useRouter();
  const likes = listing.likedBy?.reduce((acc, curr) => {
    acc.push(curr?.id);
    return acc;
  }, [] as string[]);

  const onSelectListing = () => {
    router.push(`/listing/${listing.id}`);
  };

  return (
    <article onClick={onSelectListing}>
      <section className="aspect-square w-full h-72 overflow-hidden rounded-xl relative">
        <Image
          priority
          sizes="large"
          alt="listing image"
          src={listing.imageSrc}
          fill
          className="object-cover hover:scale-110 transition ease-in-out duration-500"
        />
        <HeartButton
          listingId={listing.id!}
          listingLikedBy={likes || []}
          userId={userId}
        />
      </section>
      <section className="flex gap-2 mt-2">
        <h3 className="font-bold text-lg text-slate-700">{listing.title}</h3>
        <p className="font-bold text-lg text-slate-700">
          {listing.location?.region},
        </p>
        <p className="font-bold text-lg text-slate-700">
          {listing.location?.label}
        </p>
      </section>
      <section className="flex gap-2">
        {listing.category.map((c, idx) => (
          <p className="font-medium text-base text-slate-700/50" key={c.id}>
            {idx === listing.category.length - 1 ? c.label : `${c.label} -`}
          </p>
        ))}
      </section>
      <p className="font-bold text-lg text-slate-700">${listing.price} night</p>
    </article>
  );
};

export default ListingCard;
