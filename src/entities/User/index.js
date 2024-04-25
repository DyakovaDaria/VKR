import reducer from "./model/UserSlice";
import UserProfile from "./ui/userProfile/UserProfile";
import UserPreview from "./ui/userPreview/UserPreview";

export { reducer as userReducer, UserPreview, UserProfile };

export { clearUserDetails } from "./model/UserSlice";
export { fetchUserDetails, updateUserDetails } from "./model/UserThunks";
