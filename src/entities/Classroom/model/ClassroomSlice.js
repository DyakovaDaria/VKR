import { createSlice } from "@reduxjs/toolkit";
import {
  deleteClassroom,
  loadClassrooms,
  addClassroom,
  updateClassroomStatus,
} from "./ClassroomThunks";

export const classroomSlice = createSlice({
  name: "classrooms",
  initialState: {
    list: [
      {
        id: 200,
        name: "Зал 200",
        timeSlots: [
          {
            date: new Date(Date.now()).toISOString().split("T")[0],
            startTime: "20:55",
            endTime: "21:55",
            status: "busy",
          },
          {
            date: new Date(Date.now()).toISOString().split("T")[0],
            startTime: "11:00",
            endTime: "12:00",
            status: "busy",
          },
        ],
      },
      {
        id: 201,
        name: "Зал 201",
        timeSlots: [
          {
            date: new Date(Date.now()).toISOString().split("T")[0],
            startTime: "20:55",
            endTime: "21:55",
            status: "partly",
          },
        ],
      },
      {
        id: 202,
        name: "Зал 202",
        timeSlots: [],
      },
      {
        id: 203,
        name: "Зал 203",
        timeSlots: [],
      },
      {
        id: 204,
        name: "Зал 204",
        timeSlots: [],
      },
    ],
    selected: null,
    classroomCreationMode: false,
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
    toggleClassroomCreationModal: (state, action) => {
      state.classroomCreationMode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadClassrooms.fulfilled, (state, action) => {
      // state.list = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(loadClassrooms.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(loadClassrooms.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(deleteClassroom.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(deleteClassroom.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteClassroom.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(addClassroom.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(addClassroom.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addClassroom.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(updateClassroomStatus.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    });
    builder.addCase(updateClassroomStatus.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateClassroomStatus.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { selectClassroom, setClassrooms, toggleClassroomCreationModal } =
  classroomSlice.actions;
export default classroomSlice.reducer;
