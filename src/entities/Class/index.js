import reducer from "./model/ClassSlice";
import ClassPreview from "./ui/classPreview/ClassPreview";

export { reducer as classReducer, ClassPreview };

export {
  setLessonType,
  setLessonDetails,
  setGroup,
  setStudent,
} from "./model/ClassSlice";
