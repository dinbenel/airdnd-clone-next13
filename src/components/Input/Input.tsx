"use client";
import { FormValues } from "@/Models/UserModel";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type Props = {
  id: "username" | "email" | "password";
  required?: boolean;
  label: string;
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
};

const Input = ({ id, required = true, label, register, errors }: Props) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        className="form-input"
        type="text"
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
