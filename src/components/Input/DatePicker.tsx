"use client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { useCalendar } from "@/store/CalendarStore";

const DatePicker = () => {
  const { range, setRange } = useCalendar();

  const onSelectRange = (rangeKey: RangeKeyDict) => {
    const startDate = rangeKey.Selection.startDate || new Date();
    const endDate = rangeKey.Selection.endDate || new Date();
    setRange(startDate, endDate);
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
