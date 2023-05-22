"use client";
// import { icons } from "@/constants/categoryMap";

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
            key={provider}
            disabled={isLoading}
            className={`btn btn-social ${isLoading ? "disabled" : ""} mt-4`}
          >
            {`continue with ${provider}`}
            {/* <Icon size={20} className="absolute top-2.5" /> */}
          </button>
        );
      })}
    </>
  );
};

export default SocialButton;
