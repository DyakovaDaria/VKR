import reducer from "./model/UserSlice";
import UserProfile from "./ui/userProfile/UserProfile";
import UserPreview from "./ui/userPreview/UserPreview";
import UserProfileEdit from "./ui/userProfileEdit/UserProfileEdit";

export { reducer as userReducer, UserPreview, UserProfile, UserProfileEdit };

export { clearUserDetails, setNewUserCreation } from "./model/UserSlice";
export { fetchUserDetails, updateUserDetails, fetchCurrUserDetails } from "./model/UserThunks";
