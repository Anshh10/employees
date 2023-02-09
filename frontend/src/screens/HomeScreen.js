import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./HomeScreen.css";
import AdminHome from "./AdminHome";
import EmployeeHome from "./EmployeeHome";
import { useSelector } from "react-redux";
import Login from "../components/Login";

function HomeScreen() {
  const user = useSelector((state) => state.authentication.user);
  const [time, setTime] = useState({});
  const [tHours, setTHours] = useState("");
  const [tMins, setTMins] = useState("");
  const [tSeconds, setTSeconds] = useState("");
  const [tAmPm, setTAmPm] = useState("");
  const [date, setDate] = useState(null);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }

  function checkAmPm(i) {
    if (i > 12) {
      i = i - 12;
      setTAmPm("PM");
    } else if (i < 12) {
      i = i;
      setTAmPm("AM");
    } else if ((i = 12)) {
      i = i;
      setTAmPm("PM");
    }
    return i;
  }

  setInterval(() => {
    setDate(new Date().toDateString());
    setTime({
      hours: new Date().getHours(),
      min: new Date().getMinutes(),
      sec: new Date().getSeconds(),
    });
    setTHours(checkAmPm(new Date().getHours()));
    setTMins(checkTime(new Date().getMinutes()));
    setTSeconds(checkTime(new Date().getSeconds()));
  }, 1000);

  return (
    <div>
      {(() => {
        if (typeof user === "undefined") {
          return <Login />;
        }
      })()}
      {(() => {
        if (typeof user !== "undefined") {
          return (
            <>
              <Row>
                <Col xs={10}>
                  <h1>
                    Welcome {user.first_name} {user.last_name}
                  </h1>
                </Col>
                <Col
                  style={{ textAlign: "right", textTransform: "uppercase" }}
                  xs={2}
                >
                  <p style={{ margin: "0", fontSize: "24px" }}>
                    {" "}
                    {user.designation}
                  </p>
                </Col>
              </Row>

              <Row style={{ height: "40vh", marginTop: "30px" }}>
                <div className="frame">
                  <Row className="timeRow">
                    <Col className="timeCol">
                      <Row className="tTime">
                        <h3>{tHours}</h3>
                      </Row>
                    </Col>

                    <Col className="timeCol2">
                      <Row className="tTimeColon">
                        <h3>:</h3>
                      </Row>
                    </Col>

                    <Col className="timeCol">
                      <Row className="tTime">
                        <h3>{tMins}</h3>
                      </Row>
                    </Col>

                    <Col className="timeCol2">
                      <Row className="tTimeColon">
                        <h3>:</h3>
                      </Row>
                    </Col>

                    <Col className="timeCol">
                      <Row className="tTime">
                        <h3>{tSeconds}</h3>
                      </Row>
                    </Col>

                    <Col className="timeCol">
                      <Row className="tTime">
                        <h3>{tAmPm}</h3>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="date">
                    <p>{date}</p>
                  </Row>
                </div>
              </Row>
              {(() => {
                if (user.accessGroup === "admin" || user.accessGroup === "hr") {
                  return <AdminHome />;
                } else if (
                  user.accessGroup === "employee" ||
                  user.accessGroup === "intern"
                ) {
                  return <EmployeeHome />;
                }
              })()}
            </>
          );
        }
      })()}
    </div>
  );
}

export default HomeScreen;
