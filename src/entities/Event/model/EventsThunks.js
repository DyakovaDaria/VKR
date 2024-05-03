import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEvents = createAsyncThunk(
  "events/fetchEvents",
  async ({ getState, rejectWithValue }) => {
    try {
      const events = getState().events.events;
      return events;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id, { getState, rejectWithValue }) => {
    try {
      const events = getState().events.events;

      return events.filter((event) => event.id !== id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addNewEvent = createAsyncThunk(
  "events/addEvent",
  async (
    { newEvent },
    { getState, rejectWithValue }
  ) => {
    try {
      const events = getState().events.events;
      return [
        ...events,
        {
          id: newEvent.id,
          name: newEvent.title,
          description: newEvent.description,
          date: newEvent.date,
          startTime: newEvent.startTime,
          endTime: newEvent.endTime,
        },
      ];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
