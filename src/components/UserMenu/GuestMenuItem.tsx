"use client";
import { useLogister } from "@/store/LogisterStore";

const GuestMenuItem = () => {
  const { onOpen, setType } = useLogister();

  const onOpenModal = (type: "login" | "register") => {
    setType(type);
    onOpen();
  };

  return (
    <section className="absolute shadow border-[1px] py-2 w-full top-14 left-0 z-10 bg-white rounded-lg">
      <div onClick={() => onOpenModal("login")} className="user-menu-item">
        log in
      </div>
      <div onClick={() => onOpenModal("register")} className="user-menu-item">
        sign up
      </div>
    </section>
  );
};

export default GuestMenuItem;
