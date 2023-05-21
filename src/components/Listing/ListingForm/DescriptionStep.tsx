"use client";
import { ListingModel } from "@/Models/ListingModel";
import Heading from "../../Heading/Heading";
import { useFormContext } from "react-hook-form";

const DescriptionStep = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext<ListingModel<string[]>>();

  return (
    <div className="p-4 grid">
      <Heading
        mainTitle="how would you describe your place?"
        subTitle="short and sweet works best"
      />
      <div className="flex flex-col mt-2">
        <label htmlFor="title" className="form-label">
          title
        </label>
        <input
          className="form-input"
          {...register("title", {
            required: {
              message: `title is required`,
              value: true,
            },
          })}
        />
        {errors["title"] && (
          <p className="text-red-600">{errors["title"].message}</p>
        )}
      </div>
      <div className="flex flex-col mt-2">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <textarea
          className="form-input resize-none"
          {...register("description", {
            required: {
              message: `description is required`,
              value: true,
            },
          })}
        />
        {errors["description"] && (
          <p className="text-red-600">{errors["description"].message}</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionStep;
