"use client";
import AppToast from "@/context/AppToast";
import { ReactNode, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const ClientOnly = ({ children }: { children: ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {children}
      <AppToast />
    </>
  );
};

export default ClientOnly;
