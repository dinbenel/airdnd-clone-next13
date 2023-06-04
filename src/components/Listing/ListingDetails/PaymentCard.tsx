"use client";
import Button from "@/components/Button/Button";

const PaymentCard = () => {
  return (
    <section className="relative w-1/3">
      <section className="shadow-xl sticky top-14 p-4 w-full rounded-lg border-[1px]">
        <section className="flex justify-between">
          <p>459 night</p>
          <p>15 review</p>
        </section>
        <section className="flex flex-col items-center mt-4">
          <section className="w-full h-20 border-black border rounded-lg"></section>
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
            <p>677</p>
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
