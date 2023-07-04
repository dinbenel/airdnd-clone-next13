"use client";
import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type Props = {
  children: ReactNode;
  isOpen?: boolean;
  setOpen: (open: boolean) => void;
};

const AppModal = ({ isOpen, children, setOpen }: Props) => {
  if (!isOpen) return null;
  const handleModalOpen = () => {
    setOpen(false);
  };
  return (
    <Dialog open={isOpen} onOpenChange={handleModalOpen}>
      <DialogContent className="bg-white">
        {/* <DialogHeader className="flex flex-col items-center justify-center">
          <div>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription className="text-base">
              {subTitle}
            </DialogDescription>
          </div>
        </DialogHeader> */}
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default AppModal;
