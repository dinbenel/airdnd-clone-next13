"use client";
import { useReview } from "@/store/ReviewStore";
import { useEffect, useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { ExitSvg } from "../svg";
import StarRating from "../Input/RatingStar";
import { ReviewInput } from "@/Models/ReviewModel";
import { createReview } from "@/services/reviewService";
import { useRouter } from "next/navigation";
import { useAppToast } from "@/context/AppToast";
import { toastMsgsMap } from "@/constants/toastMsgMap";
import Loader from "../Loader/Loader";

const ReviewForm = () => {
  const { isOpen, onClose, listingId } = useReview();
  const toast = useAppToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<ReviewInput>({
    defaultValues: {
      body: "",
      title: "",
      rating: 0,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = methods;

  if (!isOpen) return null;

  const onSubmit: SubmitHandler<ReviewInput> = async (data) => {
    setIsLoading(true);
    try {
      await createReview({ ...data, listingId });
      toast.success(toastMsgsMap.reviewSucess);
      onReset();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(toastMsgsMap.invalid);
    }
  };

  const onReset = () => {
    setTimeout(() => {
      setIsLoading(false);
      reset();
      onCloseModal();
      router.refresh();
    }, 3500);
  };

  const onCloseModal = () => {
    onClose();
  };

  return (
    <div
      className={`fixed flex bg-black/60 items-center justify-center z-40 w-full inset-0`}
    >
      <div className="shadow border-[1px] bg-white rounded-lg min-w-[40%] relative">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 flex flex-col items-center justify-start"
          >
            <ExitSvg
              className="self-start cursor-pointer"
              onClick={onCloseModal}
            />
            <div className="flex flex-col w-[70%]">
              <h2 className="self-center text-xl text-neutral-700 capitalize font-medium">
                add your review
              </h2>
              <label className="form-label text-xl" htmlFor="title">
                title
              </label>
              <input
                className="form-input p-2"
                type="text"
                {...register("title", {
                  required: "title is required",
                })}
                id="title"
              />
              {errors && <p>{errors["title"]?.message}</p>}
            </div>
            <div className="mt-2 flex flex-col w-[70%]">
              <label className="form-label text-xl" htmlFor="body">
                your review
              </label>
              <textarea
                className="form-input resize-none p-4"
                {...register("body", {
                  required: "content is required",
                })}
                id="body"
                cols={6}
                rows={8}
              />
              {errors && <p>{errors["body"]?.message}</p>}
            </div>
            <StarRating />

            <Button
              className="border-[2px] rounded-lg p-2 w-[70%] text-neutral-800 font-semibold hover:bg-slate-900 hover:border-white hover:text-neutral-100 cursor-pointer transition ease-in-out duration-300 outline-none"
              title="submit"
            />
            <Loader isLoading={isLoading} size={30} />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default ReviewForm;
