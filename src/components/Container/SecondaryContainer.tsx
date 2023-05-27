import { ReactElement } from "react";

const SecondaryContainer = ({ children }: { children: ReactElement }) => {
  return <div className={`max-w-[70%] mx-auto`}>{children}</div>;
};

export default SecondaryContainer;
