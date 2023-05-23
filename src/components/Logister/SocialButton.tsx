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
            onClick={() => {
              setLoading(true);
              signIn(provider)
                .then(() => {
                  //TODO popup message
                  setLoading(false);
                })
                .catch(console.log)
                .finally(() => setLoading(false));
            }}
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
