import React, { HTMLAttributes } from "react";

type Props = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
} & HTMLAttributes<HTMLButtonElement>;

function Button({ title, disabled, className, type, ...props }: Props) {
  return (
    <button
      {...props}
      type={type}
      disabled={disabled}
      className={`mt-4  ${className} ${disabled ? "disabled" : ""} btn`}
    >
      {title}
    </button>
  );
}

export default Button;
