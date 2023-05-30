"use client";
import { ToastContainer, toast } from "react-toastify";

const AppToast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default AppToast;

export const useAppToast = () => {
  return toast;
};
