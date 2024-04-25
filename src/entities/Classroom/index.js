import reducer from "./model/ClassroomSlice";

export { reducer as classroomReducer };

export { selectClassroom, setClassrooms } from "./model/ClassroomSlice";

export { loadClassrooms } from "./model/ClassroomThunks";
