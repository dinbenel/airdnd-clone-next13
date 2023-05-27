import { ReactElement, ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactElement }) => {
  return <div className={`max-w-[85%] mx-auto`}>{children}</div>;
};

export default MainContainer;
