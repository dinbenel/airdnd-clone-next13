"use client";
import { useReview } from "@/store/ReviewStore";
import { useState } from "react";
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
import AppModal from "../AppModal/AppModal";

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
    <AppModal
      isOpen={isOpen}
      setOpen={() => {
        onClose();
      }}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-start gap-2"
        >
          {/* <ExitSvg
            className="self-start cursor-pointer"
            onClick={onCloseModal}
          /> */}
          <h2 className="self-center text-xl text-neutral-700 capitalize font-medium">
            add your review
          </h2>
          <div className="flex flex-col w-[75%]">
            <label
              className="form-label text-base text-neutral-700"
              htmlFor="title"
            >
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
          <div className="flex flex-col w-[75%]">
            <label
              className="form-label text-base text-neutral-700"
              htmlFor="body"
            >
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
            className="border-[2px] rounded-lg w-[75%] text-neutral-800 font-semibold hover:bg-slate-900 hover:border-white hover:text-neutral-100 cursor-pointer transition ease-in-out duration-300 outline-none"
            title="submit"
          />
          <Loader isLoading={isLoading} size={30} />
        </form>
      </FormProvider>
    </AppModal>
  );
};

export default ReviewForm;
