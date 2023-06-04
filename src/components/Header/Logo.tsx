"use client";
import { useRouter } from "next/navigation";
import { useCategory } from "@/store/CategoryStore";

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
      <h1 className="nunito font-extrabold text-2xl">airDnD</h1>
    </section>
  );
};

export default Logo;
