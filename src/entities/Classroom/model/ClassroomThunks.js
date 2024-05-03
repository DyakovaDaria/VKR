import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const loadClassrooms = createAsyncThunk(
  "classrooms/load",
  async (_, { rejectWithValue }) => {
    try {
      const list = useSelector((state) => state.classroom.list);
      return list;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const addClassroom = createAsyncThunk(
  "classrooms/add",
  async ({ newClassroomName, id }, { getState, rejectWithValue }) => {
    try {
      const list = getState().classroom.list;
      // const response = await api.post("/classrooms", classroom);
      // return response.data;
      return [...list, { name: newClassroomName, id: id }];
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteClassroom = createAsyncThunk(
  "classrooms/delete",
  async (id, { getState, rejectWithValue }) => {
    try {
      const list = getState().classroom.list;
      // const response = await api.delete(`/classrooms/${id}`);
      // return id;
      return list.filter((classroom) => classroom.id !== id);
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateClassroomStatus = createAsyncThunk(
  "classrooms/updateStatus",
  async (
    { id, status, date, startTime, finishTime },
    { getState, rejectWithValue }
  ) => {
    try {
      const list = getState().classroom.list;
      const updatedList = list.map((classroom) => {
        if (classroom.id === id) {
          const newTimeSlots = classroom.timeSlots.map((slot) => {
            if (
              slot.startTime === startTime &&
              slot.endTime === finishTime &&
              slot.date === date
            ) {
              return { ...slot, status: status };
            }
            return slot;
          });
          const slotExists = newTimeSlots.some(
            (slot) =>
              slot.startTime === startTime &&
              slot.endTime === finishTime &&
              slot.date === date
          );
          if (!slotExists) {
            newTimeSlots.push({
              date: date,
              startTime: startTime,
              endTime: finishTime,
              status: status,
            });
          }
          return { ...classroom, timeSlots: newTimeSlots }; 
        }
        return classroom;
      });
      return updatedList;
      // const response = await api.patch(`/classrooms/${id}`, { status });
      // return { id, status: response.data.status };
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
