import { createSlice } from "@reduxjs/toolkit";
import { addNewEvent, deleteEvent, fetchEvents } from "./EventsThunks";

const EventsListSlice = createSlice({
  name: "events",
  initialState: {
    events: [
      {
        id: 1,
        name: "Dance Workshop",
        description: "",
        date: "2024-04-25",
        startTime: "20:30",
        endTime: "21:45",
      },
      {
        id: 2,
        name: "Tango Night",
        description: "",
        date: "2024-05-05",
        startTime: "20:30",
        endTime: "22:45",
      },
      {
        id: 3,
        name: "Salsa Party",
        description: "",
        date: "2024-06-15",
        startTime: "21:30",
        endTime: "22:30",
      },
    ],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewEvent.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(addNewEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default EventsListSlice.reducer;
