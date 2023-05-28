"use client";
import { useReview } from "@/store/ReviewStore";
import { useEffect } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { ExitSvg } from "../svg";

const ReviewForm = () => {
  const { isOpen, onClose } = useReview();
  const {
    register,
    formState: { errors },
    reset,
  } = useForm<{ title: string; body: string }>({
    defaultValues: {
      body: "",
      title: "",
    },
  });

  useEffect(() => {
    const handleScroll = (event: Event) => {
      //   event.preventDefault();
      //   onClose();
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!isOpen) return null;

  return (
    <div
      className={`absolute flex top-[-300px] bg-black/60 items-center justify-center z-40 h-[100vh] w-[100vw]`}
    >
      <div className="shadow border-[1px] bg-white rounded-lg min-w-[40%] relative">
        <form className="p-4 flex flex-col items-center justify-start">
          <ExitSvg className="self-start cursor-pointer" onClick={onClose} />
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

          <Button
            className="border-[2px] rounded-lg p-2 w-[70%] text-neutral-800 font-semibold hover:bg-slate-900 hover:border-white hover:text-neutral-100 cursor-pointer transition ease-in-out duration-300 outline-none"
            title="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
