"use client";
import { ReactNode } from "react";
import { ExitSvg } from "../svg";
import { useOrder } from "@/store/OrderStore";
import { useClickAwayLisiner } from "@/hooks/useClickAwayLisiner";

type Props = {
  isOpen: boolean;
  children: ReactNode;
};

const PaymentModal = ({ isOpen, children }: Props) => {
  const { onClose } = useOrder();
  const modalRef = useClickAwayLisiner(onClose);

  if (!isOpen) return null;
  return (
    <div
      ref={modalRef}
      className="absolute top-[45%] p-4 z-20 bg-white w-[90%] self-center border border-neutral-200 rounded-lg flex flex-col gap-6"
    >
      {children}
      <div className="flex justify-end">
        <p
          onClick={onClose}
          className="text-lg font-bold text-neutral-700 capitalize underline cursor-pointer"
        >
          close
        </p>
      </div>
    </div>
  );
};

export default PaymentModal;
