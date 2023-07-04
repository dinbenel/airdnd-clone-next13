"use client";
import { ReactNode } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

type Props = {
  children: ReactNode;
  trigEl: ReactNode;
  align?: "center" | "start" | "end";
  alignOffset?: number;
  className?: string;
};

const PopOverMenu = ({
  children,
  trigEl,
  align = "end",
  alignOffset,
  className,
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{trigEl}</PopoverTrigger>
      <PopoverContent
        align={align}
        alignOffset={alignOffset}
        className={className}
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default PopOverMenu;
