"use client";
import { HTMLAttributes } from "react";

type Props = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  Icon?: any;
} & HTMLAttributes<HTMLButtonElement>;

function Button({ Icon, title, disabled, className, type, ...props }: Props) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={`  ${className} ${disabled ? "disabled" : ""} btn`}
    >
      {title}
      {Icon && <Icon />}
    </button>
  );
}

export default Button;
