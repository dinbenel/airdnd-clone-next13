"use client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { useState } from "react";

const DatePicker = () => {
  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const onSelectRange = (rangeKey: RangeKeyDict) => {
    setRange({
      startDate: rangeKey.Selection.startDate || new Date(),
      endDate: rangeKey.Selection.endDate || new Date(),
    });
  };

  return (
    <DateRangePicker
      className="w-full"
      minDate={new Date()}
      onChange={onSelectRange}
      rangeColors={["#f43f5e"]}
      ranges={[
        {
          key: "Selection",
          ...range,
        },
      ]}
    />
  );
};

export default DatePicker;
