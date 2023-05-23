"use client";
import { SearchSvg } from "../svg";

const SearchBar = () => {
  return (
    <div className="serch-bar-item">
      <div className="text-center  px-6 font-semibold capitalize">any week</div>
      <div className="text-center border-x-[1px] px-6 font-semibold capitalize">
        anywhere
      </div>
      <div className="text-center pl-6 font-semibold capitalize flex items-center justify-between gap-2">
        <span>guests</span>
        <div className="bg-rose-500 rounded-full p-[0.25rem] ">
          <SearchSvg className="text-white text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
