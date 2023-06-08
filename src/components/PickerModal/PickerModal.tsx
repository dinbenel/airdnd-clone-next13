"use client";
import { useClickAwayLisiner } from "@/hooks/useClickAwayLisiner";
import { useOrder } from "@/store/OrderStore";
import { ReactNode } from "react";

const PickerModal = ({ children }: { children: ReactNode }) => {
  const { isPickerOpen, onClosePicker } = useOrder();
  const modalRef = useClickAwayLisiner(onClosePicker);
  if (!isPickerOpen) return null;
  return (
    <div
      ref={modalRef}
      className="absolute top-[100%] mt-1 -right-1 p-4 z-20 bg-white self-center border border-neutral-200 rounded-lg flex flex-col gap-6"
    >
      {children}
      <div className="flex justify-end">
        <p
          onClick={onClosePicker}
          className="text-lg font-bold text-neutral-700 capitalize underline cursor-pointer"
        >
          close
        </p>
      </div>
    </div>
  );
};

export default PickerModal;
