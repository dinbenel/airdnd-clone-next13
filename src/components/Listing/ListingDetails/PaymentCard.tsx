"use client";
import AppModal from "@/components/AppModal/AppModal";
import Button from "@/components/Button/Button";
import PaymentModal from "@/components/PaymentModal/PaymentModal";
import { useOrder } from "@/store/OrderStore";
import ListingCounter from "../ListingForm/ListingCounter";

type Props = {
  price: number;
};

const PaymentCard = ({ price }: Props) => {
  const serviceFee = 500;
  const { onOpen, isOpen } = useOrder();

  const onOpenModal = () => {
    onOpen();
  };

  return (
    <section className="relative w-1/4 flex flex-col">
      <section className="shadow-xl sticky top-14 p-4 w-full rounded-lg border-[1px]">
        <section className="flex justify-between">
          <p className="font-semibold text-xl text-neutral-700">
            {price}$
            <span className="ms-1 font-normal text-lg text-neutral-500">
              night
            </span>
          </p>
          {/* <p>15 review</p> */}
        </section>
        <section className="flex flex-col items-center mt-4">
          <section className="w-full h-32 border-neutral-700 border rounded-lg flex flex-col justify-center">
            <div className="relative flex h-[50%] justify-between items-center before:content-[''] before:absolute before:top-0 before:right-[50%] before:h-[100%] before:w-[1px] before:bg-neutral-700">
              <p className="cursor-pointer p-2 w-full">checkin</p>
              <p className="cursor-pointer p-2 w-full">checkout</p>
            </div>
            <div
              className="relative flex items-center border-t-neutral-700 border-t p-2 h-[50%] cursor-pointer"
              onClick={onOpenModal}
            >
              <p>guests</p>
            </div>
            <PaymentModal isOpen={isOpen}>
              <ListingCounter
                main="adults"
                secondary="age 13+"
                type="guestCount"
                value={0}
                onClick={() => {}}
              />
              <ListingCounter
                main="children"
                secondary={`ages 2–12`}
                type="guestCount"
                value={0}
                onClick={() => {}}
              />
              <ListingCounter
                main="infants"
                secondary="under 2"
                type="guestCount"
                value={0}
                onClick={() => {}}
              />
            </PaymentModal>
          </section>
          <Button
            title="reserve"
            className="bg-gradient-to-r from-rose-500 via-rose-700 to-rose-900 text-white w-full text-xl mb-2"
          />
          <p>{`You won't be charged yet`}</p>
          <section className="flex justify-between w-full mt-4 items-center">
            <p>459 * 5 nights</p>
            <p>4794</p>
          </section>
          <section className="flex justify-between w-full mt-2 items-center">
            <p>Airdnd service fee</p>
            <p>{serviceFee}</p>
          </section>
        </section>
        <hr className="mt-2" />
        <section className="flex justify-between w-full mt-4 items-center">
          <p>Total</p>
          <p>5471</p>
        </section>
      </section>
    </section>
  );
};

export default PaymentCard;
