import reducer from "./model/ClassSlice";
import ClassPreview from "./ui/classPreview/ClassPreview";
import ClassInfo from "./ui/classInfo/ClassInfo";
import EditClass from "./ui/editClass/EditClass";

export { reducer as classReducer, ClassPreview, ClassInfo, EditClass };

export {
  setLessonType,
  setLessonDetails,
  setGroup,
  setStudent,
  toggleNewLessonCreation,
} from "./model/ClassSlice";
