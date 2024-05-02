import reducer from '../../entities/Classroom/model/ClassroomSlice';
import { loadClassrooms } from '../../entities/Classroom/model/ClassroomThunks';
import ClassroomsSettings from './ui/ClassroomsSettings';

export {
  reducer as classroomReducer,
  ClassroomsSettings,
};

export { selectClassroom, setClassrooms } from '../../entities/Classroom/model/ClassroomSlice';
export { loadClassrooms } from '../../entities/Classroom/model/ClassroomThunks';