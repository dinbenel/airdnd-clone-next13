"use client";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isOpen?: boolean;
};

const AppModal = ({ isOpen, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="absolute flex inset-0 bg-black/60 items-center justify-center z-40">
      <div className="shadow border-[1px] bg-white rounded-lg min-w-[35%] relative">
        {children}
      </div>
    </div>
  );
};

export default AppModal;
