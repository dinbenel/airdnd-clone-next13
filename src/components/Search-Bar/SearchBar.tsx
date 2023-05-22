"use client";
// import { icons } from "@/constants/categoryMap";

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
          {/* <icons.TbSearch size={20} className="text-white" /> */}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
