"use client";

import { User } from "@prisma/client";
import Heading from "../../Heading/Heading";
import ImageUpload from "../../Input/ImageUpload";

const ImageStep = ({ user }: { user?: User }) => {
  return (
    <div className="h-[20rem] p-4">
      <Heading
        mainTitle="add photos of your place"
        subTitle="show guests how your place looks like"
      />
      <section className="">
        <ImageUpload className="h-10 w-full" user={user} />
        {/* <ImageUpload className="grid-listing-img1" />
        <ImageUpload className="grid-listing-img2" />
        <ImageUpload className=" grid-listing-img3" />
        <ImageUpload className="grid-listing-img4" /> */}
      </section>
    </div>
  );
};

export default ImageStep;
