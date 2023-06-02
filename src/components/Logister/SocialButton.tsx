"use client";

import { signIn } from "next-auth/react";
import { GithubSvg, GoogleSvg } from "../svg";
import { useAppToast } from "@/context/AppToast";

const socialBtns = [
  {
    provider: "github",
    Icon: GithubSvg,
  },
  {
    provider: "google",
    Icon: GoogleSvg,
  },
] as const;

type Props = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  onCloseModal: () => void;
};

const SocialButton = ({ isLoading, setLoading, onCloseModal }: Props) => {
  const toast = useAppToast();

  const onSignIn = async (provider: string) => {
    setLoading(true);
    try {
      const res = await signIn(provider, { redirect: false });
      if (res?.error) {
        toast.error(`${res.error}`);
        return;
      }
      toast.success(`loged in with ${provider}`);
      onCloseModal();
    } catch (error) {
      toast.error(`cant login with ${provider}`);
      console.log(error);
    }
  };

  return (
    <>
      {socialBtns.map(({ provider, Icon }) => {
        return (
          <button
            type="button"
            key={provider}
            disabled={isLoading}
            className={`btn btn-social ${
              isLoading ? "disabled" : ""
            } mt-4 relative`}
            onClick={() => onSignIn(provider)}
          >
            {`continue with ${provider}`}
            <Icon className="absolute top-2 text-xl" />
          </button>
        );
      })}
    </>
  );
};

export default SocialButton;
