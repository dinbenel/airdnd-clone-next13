"use client";
import { ListingModel } from "@/Models/ListingModel";
import Heading from "../../Heading/Heading";
import { useFormContext } from "react-hook-form";

const PriceStep = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext<ListingModel<string[]>>();

  return (
    <div className="p-4">
      <Heading
        subTitle="how much do you to charge per night?"
        mainTitle="set your price"
      />

      <div className="flex flex-col mt-4">
        <label htmlFor="price" className="form-label">
          price
        </label>
        <input
          className="form-input"
          type="text"
          {...register("price", {
            required: {
              message: `price is required`,
              value: true,
            },
          })}
        />
        {errors["price"] && (
          <p className="text-red-600">{errors["price"].message}</p>
        )}
      </div>
    </div>
  );
};

export default PriceStep;
