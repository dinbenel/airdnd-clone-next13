import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <BeatLoader
        className=" self-center mt-4"
        color={"#f43f5e"}
        loading={true}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
