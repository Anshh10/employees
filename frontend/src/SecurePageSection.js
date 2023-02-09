import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SecurePageSection = (accessableUsers) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authentication.user);
  if (typeof user !== "undefined" && typeof user.employeeId !== "undefined") {
    let accessableUserList = accessableUsers["accessableUsers"].split(",");
    if (typeof user.accessGroup !== "undefined") {
      if (accessableUserList.indexOf(user.accessGroup) === -1) {
        navigate("/not-allowed");
      }
    } else {
      navigate("/not-allowed");
    }
  } else {
    navigate("/not-allowed");
  }

  return <></>;
};

export default SecurePageSection;
