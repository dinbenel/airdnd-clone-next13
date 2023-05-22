"use client";
import { useState } from "react";
import CategoryStep from "./CategoryStep";
import LocationStep from "./LocationStep";
import InfoStep from "./InfoStep";
import AppModal from "../../AppModal/AppModal";
import Button from "../../Button/Button";
import ImageStep from "./ImageStep";
import DescriptionStep from "./DescriptionStep";
import PriceStep from "./PriceStep";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import { useListing } from "@/store/ListingStore";
import { createListing } from "@/services/listingService";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { ListingModel } from "@/Models/ListingModel";
// import { icons } from "@/constants/categoryMap";

function ListingForm() {
  const { isOpen, onClose, resetListing } = useListing();
  const [activStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm<Omit<ListingModel<string[]>, "user">>({
    mode: "onChange",
    defaultValues: {
      bathroomCount: 1,
      category: [],
      description: "",
      guestCount: 1,
      imageSrc: "",
      location: {},
      price: 0,
      roomCount: 1,
      title: "",
    },
  });
  const {
    handleSubmit,
    trigger,
    reset,
    watch,
    formState: { isValid },
  } = methods;

  const formStep: Record<number, JSX.Element> = {
    0: <CategoryStep />,
    1: <LocationStep />,
    2: <InfoStep />,
    3: <ImageStep />,
    4: <DescriptionStep />,
    5: <PriceStep />,
  };

  const onSubmit: SubmitHandler<Omit<ListingModel<string[]>, "user">> = async (
    vals
  ) => {
    if (watch("price") <= 0) return;
    setIsLoading(true);
    try {
      const data = await createListing(vals);
      console.log(data);
      if (data) {
        onCloseModal();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onCloseModal = () => {
    onClose();
    setActiveStep(0);
    resetListing();
    reset();
    router.refresh();
  };

  const onNext = async () => {
    trigger("description");
    trigger("title");
    if (!isValid) return;
    setActiveStep((prev) => {
      if (prev < 5) return prev + 1;
      return prev;
    });
  };

  const onBack = () => {
    setActiveStep((prev) => {
      if (prev === 0) return prev;
      return prev - 1;
    });
  };

  return (
    <section>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <AppModal isOpen={isOpen}>
            <section className="flex p-5 shadow-sm items-center justify-center">
              {/* <icons.IoClose
                onClick={onCloseModal}
                size={30}
                className="cursor-pointer absolute left-1"
              /> */}
              <h2 className="capitalize text-lg font-bold">
                airDnD your home!
              </h2>
            </section>
            {formStep[activStep]}
            <section className={`p-5 w-full flex gap-2 justify-between mt-6`}>
              {activStep !== 0 && (
                <Button
                  type="button"
                  disabled={false}
                  title="back"
                  className="w-2/5 form-regular"
                  onClick={onBack}
                />
              )}

              <Button
                type={activStep < 5 ? "button" : "submit"}
                disabled={isLoading}
                title="next"
                className={`${
                  activStep !== 0 ? "w-2/5" : "w-full"
                } form-submit`}
                onClick={onNext}
              />
            </section>
            <section className="w-full flex justify-center p-4">
              <BeatLoader
                color={"#f43f5e"}
                loading={isLoading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </section>
          </AppModal>
        </form>
      </FormProvider>
    </section>
  );
}

export default ListingForm;
