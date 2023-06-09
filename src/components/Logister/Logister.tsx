"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Input from "../Input/Input";
import SocialButton from "./SocialButton";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";
import AppModal from "../AppModal/AppModal";
import { IUserForm } from "@/Models/UserModel";
import { useLogister } from "@/store/LogisterStore";
import { registerUser } from "@/services/userService";
import Loader from "../Loader/Loader";
import { ExitSvg } from "../svg";
import { useAppToast } from "@/context/AppToast";
import { toastMsgsMap } from "@/constants/toastMsgMap";

type Props = {
  formVals: IUserForm;
};

const Logister = ({ formVals }: Props) => {
  const { isOpen, type, onClose, setType } = useLogister();
  const toast = useAppToast();
  const [subTitle] = useState(
    type === "login" ? "log in with your acount" : "create an acount"
  );
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserForm>({
    defaultValues: formVals,
  });

  const submitHandler: SubmitHandler<IUserForm> = async (formInput) => {
    setIsLoading(true);
    try {
      if (type === "register") {
        await registerUser(formInput);
      }
      signInHandler({ email: formInput.email, password: formInput.password });
    } catch (error) {
      toast.error("ivalid credentials");
      console.log(error);
      setIsLoading(false);
    }
  };

  const signInHandler = async (formData: IUserForm) => {
    try {
      const res = await signIn("credentials", { ...formData, redirect: false });

      if (res?.error) {
        toast.error(res.error);
        setIsLoading(false);
        return;
      }
      toast.success(`${formData.email} is now loged in`);
      onCloseModal();
    } catch (error) {
      console.log(error);
      toast.error(toastMsgsMap.ivalidCreds);
    }
  };

  const onCloseModal = () => {
    setTimeout(() => {
      setIsLoading(false);
      reset();
      onClose();
      router.refresh();
    }, 3500);
  };

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  const moveToLoginOrSignup = () => {
    type === "login" ? setType("register") : setType("login");
  };

  return (
    <AppModal
      isOpen={isOpen}
      setOpen={() => {
        reset();
        onClose();
      }}
    >
      <div className="relative flex flex-col w-full items-center justify-center rounded-lg">
        {/* <ExitSvg
          className="absolute top-2 left-2 cursor-pointer"
          onClick={onClose}
        /> */}
        <form
          onSubmit={handleSubmit(submitHandler)}
          className="flex flex-col w-full p-2 gap-2"
        >
          <h2 className="mt-2 self-center capitalize font-bold text-xl">
            welcome to airdnd
          </h2>
          <h3 className="mb-4 self-center capitalize text-gray-500/80 text-[0.9rem]">
            {subTitle}
          </h3>

          {type === "register" && (
            <Input
              id="username"
              label="username"
              register={register}
              required
              errors={errors}
            />
          )}
          <Input
            id="email"
            label="email"
            register={register}
            required
            errors={errors}
          />
          <Input
            id="password"
            label="password"
            register={register}
            required
            errors={errors}
          />

          <Button
            disabled={isLoading}
            title="continue"
            className="form-submit mt-2"
          />
          <div className="flex items-center justify-between">
            <div className="bg-slate-200/50 h-[2px] w-[44%]"></div>
            <span className="text-base text-gray-400">or</span>
            <div className=" bg-slate-200/50 h-[2px] w-[47%]"></div>
          </div>
          <SocialButton
            isLoading={isLoading}
            setLoading={setLoading}
            onCloseModal={onCloseModal}
          />
          <Loader isLoading={isLoading} size={15} />
        </form>
        <div className="flex gap-2">
          <p className="first-letter:capitalize text-zinc-500 font-light text-sm">{`${
            type === "login" ? "dont" : "already"
          } have an acount?`}</p>
          <button
            onClick={moveToLoginOrSignup}
            className="text-zinc-500 font-medium text-sm"
          >
            {type === "login" ? "sign-up" : "log-in"}
          </button>
        </div>
      </div>
    </AppModal>
  );
};

export default Logister;
