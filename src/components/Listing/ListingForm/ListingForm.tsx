"use client";
import { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";
import { ListingModel } from "@/Models/ListingModel";
import Loader from "@/components/Loader/Loader";
import { useAppToast } from "@/context/AppToast";
import { toastMsgsMap } from "@/constants/toastMsgMap";
import AmenityStep from "./AmenityStep";
import { useAmenity } from "@/store/AmenityStore";

function ListingForm() {
  const { isOpen, onClose, resetListing } = useListing();
  const { setAmenities } = useAmenity();
  const [activStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useAppToast();
  const router = useRouter();

  useEffect(() => {
    setAmenities();
  }, []);

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
      amenities: [],
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
    2: <AmenityStep />,
    3: <InfoStep />,
    4: <ImageStep />,
    5: <DescriptionStep />,
    6: <PriceStep />,
  };

  const onSubmit: SubmitHandler<Omit<ListingModel<string[]>, "user">> = async (
    vals
  ) => {
    if (watch("price") <= 0) return;

    setIsLoading(true);
    try {
      const data = await createListing(vals);

      if (data) {
        toast.success(toastMsgsMap.listingSuccess);
        onCloseModal();
      }
    } catch (error) {
      toast.error(toastMsgsMap.invalid);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onCloseModal = () => {
    setTimeout(() => {
      onClose();
      setActiveStep(0);
      resetListing();
      reset();
      router.refresh();
    }, 3500);
  };

  const onNext = async () => {
    trigger("description");
    trigger("title");
    if (!isValid) return;
    setActiveStep((prev) => {
      if (prev < 6) return prev + 1;
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
          <AppModal
            isOpen={isOpen}
            setOpen={() => {
              onClose();
              setActiveStep(0);
              resetListing();
              reset();
            }}
          >
            <section className="flex shadow-sm items-center justify-center p-2">
              <h2 className="capitalize text-lg font-bold">
                airDnD your home!
              </h2>
            </section>
            {formStep[activStep]}
            <section className={` w-full flex gap-2 justify-between`}>
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
                type={activStep < 6 ? "button" : "submit"}
                disabled={isLoading}
                title="next"
                className={`${
                  activStep !== 0 ? "w-2/5" : "w-full"
                } form-submit`}
                onClick={onNext}
              />
            </section>
            <Loader isLoading={isLoading} size={20} />
          </AppModal>
        </form>
      </FormProvider>
    </section>
  );
}

export default ListingForm;
