import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import { useCategory } from "@/store/CategoryStore";

const NotFound = () => {
  const router = useRouter();
  const { setSelected } = useCategory();
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[60vh]">
      <Heading
        mainTitle="No exact matches"
        subTitle="Try changing your filters"
        mainTitleClass="text-xl"
        subTitleClass="text-base"
      />
      <Button
        title="clear filters"
        className="capitalize border-[1px] border-slate-500 p-2 w-40 hover:bg-slate-700 hover:text-white transition ease-in-out duration-150"
        onClick={() => {
          router.push("/");
          setSelected("");
          router.refresh();
        }}
      />
    </section>
  );
};

export default NotFound;
