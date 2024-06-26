import { createSlice } from "@reduxjs/toolkit";

const WeekCalendarSlice = createSlice({
  name: "schedule",
  initialState: {
    selectedDate: new Date(),
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = new Date(action.payload);
    },
  },
});

export const { setSelectedDate } = WeekCalendarSlice.actions;
export default WeekCalendarSlice.reducer;