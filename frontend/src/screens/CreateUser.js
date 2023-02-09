import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import CreateUserPg1 from "./CreateUserPg1";
import CreateUserPg2 from "./CreateUserPg2";
import CreateUserPg3 from "./CreateUserPg3";
import CreateUserPg4 from "./CreateUserPg4";
import SecurePageSection from "../SecurePageSection";
// import Confirm from "./Confirm";

function CreateUser() {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    employeeId: "",
    crtDate: "",
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    age: "",
    bldGrp: "",
    marital: "",
    email: "",
    mobile: "",
    altMobile: "",
    religion: "",
    aadhar: "",
    address: "",
    fatherName: "",
    motherName: "",
    spouseName: "",
    edu1: "",
    edu1Board: "",
    edu1Marks: "",
    edu1PassYear: "",
    edu1Stream: "",
    edu1Grade: "",
    edu2: "",
    edu2Board: "",
    edu2Marks: "",
    edu2PassYear: "",
    edu2Stream: "",
    edu2Grade: "",
    edu3: "",
    edu3Board: "",
    edu3Marks: "",
    edu3PassYear: "",
    edu3Stream: "",
    edu3Grade: "",
    edu4: "",
    edu4Board: "",
    edu4Marks: "",
    edu4PassYear: "",
    edu4Stream: "",
    edu4Grade: "",
    exp1Employer: "",
    exp1FromDate: "",
    exp1ToDate: "",
    exp1Years: "",
    exp2Employer: "",
    exp2FromDate: "",
    exp2ToDate: "",
    exp2Years: "",
    exp3Employer: "",
    exp3FromDate: "",
    exp3ToDate: "",
    exp3Years: "",
    exp4Employer: "",
    exp4FromDate: "",
    exp4ToDate: "",
    exp4Years: "",
    bankName: "",
    bankAccName: "",
    bankAccNum: "",
    bankIfsc: "",
    bankBranch: "",
    joinDate: "",
    jobRole: "",
    jobType: "",
    shiftTime: "",
    company: "",
    branch: "",
    accessGroup: "",
    salary: "",
    pfNum: "",
    panNum: "",
    password: "",
    signBy: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
    window.scrollTo(0, 0);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
    window.scrollTo(0, 0);
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handlePassword = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  // javascript switch case to show different form in each step
  switch (step) {
    // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 1:
      return (
        <div>
          <SecurePageSection accessableUsers={"admin,hr"} />
          <CreateUserPg1
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div>
          <SecurePageSection accessableUsers={"admin,hr"} />
          <CreateUserPg2
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );

    case 3:
      return (
        <div>
          <SecurePageSection accessableUsers={"admin,hr"} />
          <CreateUserPg3
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    // case 4 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 4:
      return (
        <div>
          <SecurePageSection accessableUsers={"admin,hr"} />
          <CreateUserPg4 prevStep={prevStep} values={formData} />
        </div>
      );
    // Only formData is passed as prop to show the final value at form submit
    default:
      return <div></div>;
  }
}

export default CreateUser;
