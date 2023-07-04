"use client";
import { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type Props = {
  children: ReactNode;
  trigEl: ReactNode;
};

const PopOverMenu = ({ children, trigEl }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{trigEl}</PopoverTrigger>
      <PopoverContent align="end" className="">
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopOverMenu;
