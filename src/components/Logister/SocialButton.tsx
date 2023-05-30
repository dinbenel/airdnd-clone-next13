"use client";

import { signIn } from "next-auth/react";
import { GithubSvg, GoogleSvg } from "../svg";
import { ReactNode } from "react";

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
};

const SocialButton = ({ isLoading, setLoading }: Props) => {
  const onSignIn = async (provider: string) => {
    setLoading(true);
    try {
      const res = await signIn(provider);
      if (res?.error) {
        //TODO toast
        return;
      }
    } catch (error) {
      //TODO toast
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
