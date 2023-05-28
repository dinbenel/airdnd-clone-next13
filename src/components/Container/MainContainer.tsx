import { ReactElement, ReactNode } from "react";

const MainContainer = ({ children }: { children: ReactElement }) => {
  return <div className={`max-w-[85%] mx-auto relative`}>{children}</div>;
};

export default MainContainer;
