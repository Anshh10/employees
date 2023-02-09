import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LayoutScreen from "./screens/LayoutScreen";
import HomeScreen from "./screens/HomeScreen";
import Login from "./components/Login";
import AddEvent from "./screens/AddEvent";
import OfferLetter from "./screens/OfferLetter";
import InternLetter from "./screens/InternLetter";
import InternCompleteLetter from "./screens/InternCompleteLetter";
import AddHoliday from "./screens/AddHoliday";
import ReqLeave from "./screens/ReqLeave";
import InternCompleteForm from "./screens/InternCompleteForm";
import PaySlip from "./screens/PaySlip";
import AdminEmpAttendanceReport from "./screens/AdminEmpAttendanceReport";
import PaySlipForm from "./screens/PaySlipForm";
import RelievingLetter from "./screens/RelievingLetter";
import RelievingForm from "./screens/RelievingForm";
import EmpInfo from "./screens/EmpInfo";
import AttendanceReport from "./screens/AttendanceReport";
import CreateUser from "./screens/CreateUser";
import NoAccess from "./screens/NoAccess";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LayoutScreen />} exact>
            <Route path="" element={<HomeScreen />} />
            <Route path="not-allowed" element={<NoAccess />} />
            <Route path="login" element={<Login />} />
            <Route path="emp-info" element={<EmpInfo />} />
            <Route path="req-leave" element={<ReqLeave />} />
            <Route path="pay-slip" element={<PaySlip />} />

            <Route
              path="admin/emp-attendance-report"
              element={<AdminEmpAttendanceReport />}
            />
            <Route
              path="form/intern-complete"
              element={<InternCompleteForm />}
            />
            <Route path="form/create-user" element={<CreateUser />} />
            <Route path="form/relieving-letter" element={<RelievingForm />} />
            <Route path="form/pay-slip" element={<PaySlipForm />} />
            <Route path="add-holiday" element={<AddHoliday />} />

            <Route path="attendance-report" element={<AttendanceReport />} />
            <Route path="add-event" element={<AddEvent />} />
            <Route path="offer-letter" element={<OfferLetter />} />
            <Route path="relieving-letter" element={<RelievingLetter />} />

            <Route path="intern-letter" element={<InternLetter />} />
            <Route path="intern-complete" element={<InternCompleteLetter />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
