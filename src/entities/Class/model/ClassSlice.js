import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lesson: {
    type: null,
    id: null,
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    classroom: '',
    teacher: '',
    group: null,
    student: null,
  }
};

const ClassSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    setLessonType(state, action) {
      state.lesson.type = action.payload;
    },
    setLessonDetails(state, action) {
      const { id, title, description, startTime, endTime, classroom, teacher } = action.payload;
      state.lesson.id = id;
      state.lesson.title = title;
      state.lesson.description = description;
      state.lesson.startTime = startTime;
      state.lesson.endTime = endTime;
      state.lesson.classroom = classroom;
      state.lesson.teacher = teacher;
    },
    setGroup(state, action) {
      state.lesson.group = action.payload;
    },
    setStudent(state, action) {
      state.lesson.student = action.payload;
    },
  }
});

export const { setLessonType, setLessonDetails, setGroup, setStudent } = ClassSlice.actions;

export default ClassSlice.reducer;
