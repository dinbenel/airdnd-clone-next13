"use client";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { ListingModel } from "@/Models/ListingModel";
import { User } from "@prisma/client";
import { getImageUrl, uploadImage } from "@/lib/fireBaseClient";
import { AddPhotoSvg, ConfirmSvg, UndoSvg } from "../svg";

const ImageUpload = ({
  className,
  user,
}: {
  className?: string;
  user?: User;
}) => {
  const { setValue } = useFormContext<ListingModel<string[]>>();
  const [img, setImg] = useState<string>("");
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const uploadFile = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.files?.length) return;
    const formData = new FormData();
    formData.append("file", target.files[0]);
    setFile(target.files[0]);
    const fileReader = new FileReader();
    fileReader.onload = (ev: ProgressEvent<FileReader>) => {
      setImg(ev.target?.result as string);
    };
    fileReader.readAsDataURL(target.files[0]);
  };

  const onConfirm = async () => {
    try {
      const _ = await uploadImage(`${user?.email}/${file?.name}`, file);
      const urls = await getImageUrl(`${user?.email}/`);
      const url = urls.find((u) => u.includes(file?.name + ""));
      setValue("imageSrc", url!);
    } catch (error) {
      console.log(error);
    }
  };

  const onRetake = () => {
    setImg("");
    if (!inputRef?.current?.value) return;
    inputRef.current.value = "";
  };

  return (
    <div className={` ${className}`}>
      <section className="w-full relative flex flex-col border-[2px] border-dashed border-neutral-200 p-2 min-h-full items-center justify-center">
        {img ? (
          <div className=" w-full absolute top-0  bottom-0 left-0 right-0 h-72 aspect-auto object-contain">
            <Image
              src={img as string}
              alt=""
              fill
              className="object-cover h-full w-full"
            />
            <div className="bg-black/50 absolute bottom-0 left-0 right-0 top-150 py-2 px-3 flex justify-between">
              <button className="text-white" onClick={onRetake}>
                <UndoSvg className="text-2xl" />
              </button>
              <button className="text-white" onClick={onConfirm}>
                <ConfirmSvg className="text-2xl" />
              </button>
            </div>
          </div>
        ) : (
          <div className="h-52 flex flex-col items-center justify-center">
            <label
              htmlFor="img-upload"
              className="flex flex-col items-center cursor-pointer"
            >
              <AddPhotoSvg className="text-6xl text-neutral-700" />
              <span className="text-base font-semibold text-neutral-500">
                click to upload
              </span>
            </label>
          </div>
        )}
        <input
          type="file"
          id="img-upload"
          hidden
          onChange={uploadFile}
          ref={inputRef}
        />
      </section>
    </div>
  );
};

export default ImageUpload;
