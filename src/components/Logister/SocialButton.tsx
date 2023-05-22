"use client";

import { signIn } from "next-auth/react";

const socialBtns = [
  {
    provider: "github",
    // Icon: icons.BsGithub,
  },
  {
    provider: "google",
    // Icon: icons.BsGoogle,
  },
] as const;

type Props = {
  isLoading: boolean;
};

const SocialButton = ({ isLoading }: Props) => {
  return (
    <>
      {socialBtns.map(({ provider }) => {
        return (
          <button
            type="button"
            key={provider}
            disabled={isLoading}
            className={`btn btn-social ${isLoading ? "disabled" : ""} mt-4`}
            onClick={() => signIn(provider)}
          >
            {`continue with ${provider}`}
          </button>
        );
      })}
    </>
  );
};

export default SocialButton;
