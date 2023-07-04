"use client";
import Button from "@/components/Button/Button";
import { useOrder } from "@/store/OrderStore";
import ListingCounter from "../ListingForm/ListingCounter";
import { currencyFormat } from "@/utils/formattCurrency";
import DatePicker from "@/components/Input/DatePicker";
import { useCalendar } from "@/store/CalendarStore";
import { differenceInDays, format } from "date-fns";
import { createOrder } from "@/services/orderService";
import { OrderInput } from "@/Models/OrderModel";
import { useSession } from "next-auth/react";
import { useAppToast } from "@/context/AppToast";
import { toastMsgsMap } from "@/constants/toastMsgMap";
import PopOverMenu from "@/components/AppPopMenu/PopOverMenu";

type Props = {
  price: number;
  listingId: string;
};

const PaymentCard = ({ price, listingId }: Props) => {
  const { data } = useSession();
  const toast = useAppToast();
  const serviceFee = 500;
  const { adults, children, infants, setCount, extraGuestsFee } = useOrder();
  const { range } = useCalendar();
  const dayDiff = differenceInDays(range.endDate, range.startDate) || 1;
  const total = price * dayDiff;
  const extra = total * extraGuestsFee();

  const handleOrder = async () => {
    if (!data?.user) {
      toast.warning("please log-in to reserve this trip");
      return;
    }
    const orderToCreate: OrderInput = {
      endDate: range.endDate,
      listingId,
      startDate: range.startDate,
      totalPrice: total + serviceFee + extra,
    };
    try {
      await createOrder(orderToCreate);
      toast.success(toastMsgsMap.orderSucess);
    } catch (error) {
      toast.error(toastMsgsMap.invalid);
      console.log(error);
    }
  };

  return (
    <section className="w-1/4 flex flex-col">
      <section className="shadow-xl sticky p-4 w-full rounded-lg border-[1px] flex flex-col">
        <section className="flex justify-between mb-2">
          <p className="font-semibold text-xl text-neutral-700">
            {currencyFormat(price + extra)}
            <span className="ms-1 font-normal text-lg text-neutral-500">
              night
            </span>
          </p>
        </section>
        <section className="flex flex-col items-center gap-4">
          <section className="w-full h-32 border-neutral-700 border rounded-lg flex flex-col justify-center">
            <PopOverMenu
              className="w-full"
              trigEl={
                <div className="relative flex before:content-[''] before:absolute before:-top-1 before:bottom-0 before:right-[50%] before:w-[1px] before:bg-neutral-700">
                  <p className="cursor-pointer p-2 w-full flex flex-col text-sm">
                    checkin
                    <span>{format(range.startDate, "dd/LL/yyyy")}</span>
                  </p>
                  <p className="cursor-pointer p-2 w-full flex flex-col text-sm">
                    checkout
                    <span>{format(range.endDate, "dd/LL/yyyy")}</span>
                  </p>
                </div>
              }
            >
              <DatePicker />
            </PopOverMenu>
            <PopOverMenu
              align="center"
              trigEl={
                <div className="flex flex-col items-start border-t-neutral-700 border-t p-2 cursor-pointer">
                  <p className="text-sm">guests</p>
                  <p className="">
                    {`${adults + children} guests`}
                    {infants > 0 && `, ${infants} infants`}
                  </p>
                </div>
              }
            >
              <section className="bg-white flex flex-col gap-4 p-4">
                <ListingCounter
                  main="adults"
                  secondary="age 13+"
                  type="guestCount"
                  value={adults}
                  onClick={(action) => setCount("adults", action)}
                />
                <ListingCounter
                  main="children"
                  secondary={`ages 2–12`}
                  type="guestCount"
                  value={children}
                  onClick={(action) => setCount("children", action)}
                />
                <ListingCounter
                  main="infants"
                  secondary="under 2"
                  type="guestCount"
                  value={infants}
                  onClick={(action) => setCount("infants", action)}
                />
              </section>
            </PopOverMenu>
          </section>
          <Button
            title="reserve"
            className="bg-gradient-to-r from-rose-500 via-rose-700 to-rose-900 text-white w-full text-xl"
            onClick={handleOrder}
          />
          <p>{`You won't be charged yet`}</p>
          <div className="flex flex-col gap-2 w-full items-center">
            <section className="flex justify-between w-full items-center">
              <p>{`${price} * ${dayDiff} nights`}</p>
              <p>{currencyFormat(total)}</p>
            </section>
            <section className="flex justify-between w-full items-center">
              <p>Extra Guest Fee</p>
              <p>{currencyFormat(extra)}</p>
            </section>
            <section className="flex justify-between w-full items-center">
              <p>Airdnd service fee</p>
              <p>{currencyFormat(serviceFee)}</p>
            </section>
          </div>
        </section>
        <hr className="my-2" />
        <section className="flex justify-between w-full items-center">
          <p>Total</p>
          <p>{currencyFormat(total + serviceFee + extra)}</p>
        </section>
      </section>
    </section>
  );
};

export default PaymentCard;
