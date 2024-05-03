import { CreateRequestForm } from "../../entities/ClassRequest";
import StudentNavbar from "../../widgets/studentNavbar/StudentNavbar";

const CreateClassRequestPage = () => {
  return (
    <div>
      <StudentNavbar></StudentNavbar>
      <CreateRequestForm></CreateRequestForm>
    </div>
  );
};

export default CreateClassRequestPage;
