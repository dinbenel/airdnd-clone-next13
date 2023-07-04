"use client";
import { FormValues } from "@/Models/UserModel";
import { HTMLInputTypeAttribute } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  id: "username" | "email" | "password";
  required?: boolean;
  label: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  type?: HTMLInputTypeAttribute;
};

const Input = ({
  id,
  required = true,
  label,
  register,
  errors,
  type = "text",
}: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        id={id}
        {...register(id, {
          required: {
            message: `${id} is required`,
            value: required,
          },
        })}
      />
      {Object.entries(errors).map(([key, value]) => {
        return key === id && <p className="text-red-600">{value.message}</p>;
      })}
    </div>
  );
};

export default Input;
