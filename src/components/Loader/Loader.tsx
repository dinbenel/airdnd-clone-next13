import { BeatLoader } from "react-spinners";

const Loader = ({ isLoading, size }: { isLoading: boolean; size: number }) => {
  return (
    <section className={isLoading ? "w-full flex justify-center" : ""}>
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
