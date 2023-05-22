"use client";
import { useRouter } from "next/navigation";
import { useCategory } from "@/store/CategoryStore";
// import { icons } from "@/constants/categoryMap";

const Logo = () => {
  const setSelected = useCategory((state) => state.setSelected);
  const router = useRouter();

  const goHome = () => {
    setSelected("");
    router.push("/");
  };

  return (
    <section
      onClick={goHome}
      className="flex items-center gap-1 text-rose-500 font-bold cursor-pointer"
    >
      {/* <icons.FaHotel className="text-rose-500" size={35} /> */}
      <h1 className="nunito font-extrabold text-2xl">airDnD</h1>
    </section>
  );
};

export default Logo;
