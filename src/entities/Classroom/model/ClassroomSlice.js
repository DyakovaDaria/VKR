import { createSlice } from "@reduxjs/toolkit";
import { loadClassrooms } from "./ClassroomThunks";

export const classroomSlice = createSlice({
  name: "classrooms",
  initialState: {
    list: [],
    selected: null,
    loading: false,
    error: null,
  },
  reducers: {
    setClassrooms: (state, action) => {
      state.list = action.payload;
    },
    selectClassroom: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadClassrooms.fulfilled, (state, action) => {
      state.list = action.payload;
    });
    builder.addCase(loadClassrooms.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const { selectClassroom, setClassrooms } = classroomSlice.actions;
export default classroomSlice.reducer;
