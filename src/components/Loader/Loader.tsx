import { BeatLoader } from "react-spinners";

const Loader = ({ isLoading, size }: { isLoading: boolean; size: number }) => {
  return (
    <section className="w-full flex justify-center p-4">
      <BeatLoader
        color={"#f43f5e"}
        loading={isLoading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </section>
  );
};

export default Loader;
