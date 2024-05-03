import { createSlice } from "@reduxjs/toolkit";

const EventsListSlice = createSlice({
  name: "eventsList",
  initialState: {
    newEventCreationMode: false,
  },
  reducers: {
    toggleNewEventCreationMode: (state, action) => {
      state.newEventCreationMode = action.payload;
    },
  },
});

export const { toggleNewEventCreationMode } = EventsListSlice.actions;
export default EventsListSlice.reducer;