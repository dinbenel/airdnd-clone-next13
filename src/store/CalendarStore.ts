import { create } from "zustand";

type CalendarStore = {
  range: {
    startDate: Date;
    endDate: Date;
  };
  setRange: (startDate: Date, endDate: Date) => void;
};

export const useCalendar = create<CalendarStore>((set, get) => ({
  range: {
    startDate: new Date(),
    endDate: new Date(),
  },
  setRange: (startDate, endDate) => set({ range: { startDate, endDate } }),
}));
