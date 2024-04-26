import reducer from "./model/ClassSlice";
import ClassPreview from "./ui/classPreview/ClassPreview";
import ClassInfo from "./ui/classInfo/ClassInfo";

export { reducer as classReducer, ClassPreview, ClassInfo };

export {
  setLessonType,
  setLessonDetails,
  setGroup,
  setStudent,
} from "./model/ClassSlice";
