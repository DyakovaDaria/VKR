import ClassRequestsView from "./ui/ClassRequestsView";
import reducer from "./model/ClassRequestsSlice";

export { ClassRequestsView, reducer as requestsListReducer };

export {
  cancelCLassRequest,
  acceptClassRequest,
  fetchTeacherRequests,
} from "./model/ClassRequestsThunks";
