import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Button,
  Tab,
  Tabs,
  Table,
  Modal,
  Form,
} from "react-bootstrap";
import "./HomeScreen.css";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AdminEmpAttendanceReport from "./AdminEmpAttendanceReport";

function EmployeeHome() {
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const userToken = localStorage.getItem("token");
  const timeData = useSelector((state) => state.timeReducer);
  const [location, setLocation] = useState(null);
  const [attendance, setAttendance] = useState("");
  const [report, setReport] = useState("");
  const [events, setEvents] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [holidays, setHolidays] = useState([]);
  const [date, setDate] = useState(null);

  const [key, setKey] = useState("tEvent");
  const [attUpdate, setAttUpdate] = useState("");

  setInterval(() => {
    setDate(new Date().toDateString());
  }, 1000);

  const fetchLocation = async () => {
    const response = await axios.get(
      `https://ipgeolocation.abstractapi.com/v1/?api_key=92df08172ee34ce8a6f1beb8319139b9`
    );
    setLocation(response.data.postal_code);
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchEvents = async () => {
    const response = await axios.get(`/api/upcoming-event/`);
    setEvents(response.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchLeaves = async () => {
    const response = await axios.get(`/api/${user.user_id}/leave-request/`);
    setLeaves(response.data);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchHolidays = async () => {
    const response = await axios.get(`/api/holiday/`);
    setHolidays(response.data);
  };

  useEffect(() => {
    fetchHolidays();
  }, []);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const attendanceCreate = async () => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;

    await axios
      .post(
        "/api/attendance/",
        {
          user: `${user.employeeId}`,
          id: `${id}`,
          userName: `${user.first_name + " " + user.last_name}`,
          month: `${moment(date).format("MMMM")}`,
          date: `${date}`,
          inOffice: `false`,
          inLunch: "false",
          inBreak1: "false",
          inBreak2: "false",
          inBreak3: "false",
          didOffice: "false",
          didLunch: "false",
          didBreak1: "false",
          didBreak2: "false",
          didBreak3: "false",
        },
        config
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    attendanceCreate();
    console.log("response");
  }, []);

  const officeInHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          officeIn: `${date.toLocaleTimeString()}`,
          locationPin: `${location}`,
          inOffice: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(officeIn(date.toLocaleTimeString(), location));
  };

  const officeOutHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          officeOut: `${date.toLocaleTimeString()}`,
          inOffice: `false`,
          didOffice: `true`,
          report: `${report}`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setModalShow(false);

    // dispatch(officeOut(date.toLocaleTimeString()));
  };

  const lunchInHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          lunchIn: `${date.toLocaleTimeString()}`,
          inLunch: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(lunchIn(date.toLocaleTimeString()));
  };

  const lunchOutHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          lunchOut: `${date.toLocaleTimeString()}`,
          inLunch: `false`,
          didLunch: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(lunchOut(date.toLocaleTimeString()));
  };

  const break1InHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          break1In: `${date.toLocaleTimeString()}`,
          inBreak1: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(break1In(date.toLocaleTimeString()));
  };

  const break1OutHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          break1Out: `${date.toLocaleTimeString()}`,
          inBreak1: `false`,
          didBreak1: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(break1Out(date.toLocaleTimeString()));
  };

  const break2InHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          break2In: `${date.toLocaleTimeString()}`,
          inBreak2: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(break2In(date.toLocaleTimeString()));
  };

  const break2OutHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          break2Out: `${date.toLocaleTimeString()}`,
          inBreak2: `false`,
          didBreak2: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(break2Out(date.toLocaleTimeString()));
  };

  const break3InHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          break3In: `${date.toLocaleTimeString()}`,
          inBreak3: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(break3In(date.toLocaleTimeString()));
  };

  const break3OutHandler = async (event) => {
    const date = new Date();
    const id = `${moment(date).format("DDMMYYYY") + user.employeeId}`;
    event.preventDefault();
    await axios
      .put(
        `/api/attendance/${id}`,
        {
          date: `${date}`,
          id: `${moment(date).format("DDMMYYYY") + user.employeeId}`,
          break3Out: `${date.toLocaleTimeString()}`,
          inBreak3: `false`,
          didBreak3: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        setAttUpdate(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    // dispatch(break3Out(date.toLocaleTimeString()));
  };

  const fetchTodayAttendance = async () => {
    const date = new Date();
    const response = await axios.get(
      `/api/attendance/${moment(date).format("DDMMYYYY") + user.employeeId}`
    );
    console.log(response.data);
    setAttendance(response.data);
  };

  useEffect(() => {
    fetchTodayAttendance();
  }, [attUpdate]);

  return (
    <div>
      <Row>
        {(() => {
          if (
            attendance.didOffice === "false" ||
            attendance.didOffice === null
          ) {
            return (
              <Col>
                <Row style={{ padding: "0 10px" }}>
                  {(() => {
                    if (attendance.inOffice === "false") {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => officeInHandler(e)}
                          >
                            Office In
                          </Button>
                        </>
                      );
                    } else {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => setModalShow(true)}
                          >
                            Office Out
                          </Button>
                        </>
                      );
                    }
                  })()}
                </Row>
              </Col>
            );
          }
        })()}
        <Modal show={modalShow} size="lg" centered>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Today's Report
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group hasValidation className="mb-3">
                <Form.Label>Submit Today's Report</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={report}
                  onChange={(e) => setReport(e.target.value)}
                  required
                  maxlength="300"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(false)}>Go Back</Button>
            <Button onClick={officeOutHandler}>Office Out</Button>
          </Modal.Footer>
        </Modal>
        {(() => {
          if (attendance.didOffice === "true") {
            return <h4>You have already logged out today</h4>;
          }
        })()}
        {(() => {
          if (attendance.didLunch === "false") {
            return (
              <Col>
                <Row style={{ padding: "0 10px" }}>
                  {(() => {
                    if (
                      attendance.inOffice === "true" &&
                      attendance.inLunch === "false"
                    ) {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => lunchInHandler(e)}
                          >
                            Lunch In
                          </Button>
                        </>
                      );
                    }
                    if (
                      attendance.inOffice === "true" &&
                      attendance.inLunch === "true"
                    ) {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => lunchOutHandler(e)}
                          >
                            Lunch Out
                          </Button>
                        </>
                      );
                    }
                  })()}
                </Row>
              </Col>
            );
          }
        })()}
        {(() => {
          if (attendance.didBreak1 === "false") {
            return (
              <Col>
                <Row style={{ padding: "0 10px" }}>
                  {(() => {
                    if (
                      attendance.inOffice === "true" &&
                      attendance.inBreak1 === "false"
                    ) {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => break1InHandler(e)}
                          >
                            Break 1 In
                          </Button>
                        </>
                      );
                    }
                    if (attendance.inOffice === "true") {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => break1OutHandler(e)}
                          >
                            Break 1 Out
                          </Button>
                        </>
                      );
                    }
                  })()}
                </Row>
              </Col>
            );
          }
        })()}
        {(() => {
          if (
            attendance.didBreak2 === "false" &&
            attendance.didBreak1 === "true"
          ) {
            return (
              <Col>
                <Row style={{ padding: "0 10px" }}>
                  {(() => {
                    if (
                      attendance.inOffice === "true" &&
                      attendance.inBreak2 === "false"
                    ) {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => break2InHandler(e)}
                          >
                            Break 2 In
                          </Button>
                        </>
                      );
                    }
                    if (attendance.inOffice === "true") {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => break2OutHandler(e)}
                          >
                            Break 2 Out
                          </Button>
                        </>
                      );
                    }
                  })()}
                </Row>
              </Col>
            );
          }
        })()}
        {(() => {
          if (
            attendance.didBreak3 === "false" &&
            attendance.didBreak1 === "true" &&
            attendance.didBreak2 === "true"
          ) {
            return (
              <Col>
                <Row style={{ padding: "0 10px" }}>
                  {(() => {
                    if (
                      attendance.inOffice === "true" &&
                      attendance.inBreak3 === "false"
                    ) {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => break3InHandler(e)}
                          >
                            Break 3 In
                          </Button>
                        </>
                      );
                    }
                    if (attendance.inOffice === "true") {
                      return (
                        <>
                          <Button
                            className="btnSecondaryLarge"
                            onClick={(e) => break3OutHandler(e)}
                          >
                            Break 3 Out
                          </Button>
                        </>
                      );
                    }
                  })()}
                </Row>
              </Col>
            );
          }
        })()}
      </Row>

      {/* DAILY LOG */}

      <Row className="tableRow" style={{ height: "50vh" }}>
        <Col xs={12}>
          <Row
            className="formSectionHeader"
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <h3 className="homeHeader">Daily Log ({date})</h3>
          </Row>
          <Row className="tableRow" style={{ overflowX: "auto" }}>
            <Table striped bordered>
              <thead className="tableHead">
                <tr style={{ textAlign: "center" }}>
                  <th>Office In (hh:mm:ss)</th>
                  <th>Office Out (hh:mm:ss)</th>
                  <th>Lunch (hh:mm:ss)</th>
                  <th>Break 1 (hh:mm:ss)</th>
                  <th>Break 2 (hh:mm:ss)</th>
                  <th>Break 3 (hh:mm:ss)</th>
                  <th>Total Working Hours</th>
                  <th style={{ width: "40px" }}>Report</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                <tr style={{ textAlign: "center" }}>
                  <td>
                    <p>
                      {moment(attendance.officeIn, "hh:mm:ss A").format(
                        "hh:mm:ss A"
                      ) === "Invalid date"
                        ? ""
                        : moment(attendance.officeIn, "hh:mm:ss A").format(
                            "hh:mm:ss A"
                          )}
                    </p>
                  </td>
                  <td>
                    <p>
                      {moment(attendance.officeOut, "hh:mm:ss A").format(
                        "hh:mm:ss A"
                      ) === "Invalid date"
                        ? "Current time"
                        : moment(attendance.officeOut, "hh:mm:ss A").format(
                            "hh:mm:ss A"
                          )}
                    </p>
                  </td>
                  <td>
                    <p>
                      {(() => {
                        if (attendance.inLunch === "true") {
                          return (
                            <>
                              {moment(attendance.lunchIn, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.lunchIn,
                                    "hh:mm:ss A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(attendance.lunchOut, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? "Current time"
                                : moment(
                                    attendance.lunchOut,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.lunchOut,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.lunchIn, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.lunchOut,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(attendance.lunchIn, "hh:mm:ss A")
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else if (attendance.didLunch !== "false") {
                          return (
                            <>
                              {moment(attendance.lunchIn, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.lunchIn,
                                    "hh:mm:ss A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(attendance.lunchOut, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? "Current time"
                                : moment(
                                    attendance.lunchOut,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.lunchOut,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.lunchIn, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.lunchOut,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(attendance.lunchIn, "hh:mm:ss A")
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else {
                          return <p>-</p>;
                        }
                      })()}
                    </p>
                  </td>
                  <td>
                    <p>
                      {(() => {
                        if (attendance.inBreak1 === "true") {
                          return (
                            <>
                              {moment(attendance.break1In, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.break1In,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(
                                attendance.break1Out,
                                "hh:mm:ss A"
                              ).format("hh:mm:ss A") === "Invalid date"
                                ? "Current time"
                                : moment(
                                    attendance.break1Out,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.break1Out,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.break1In, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.break1Out,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(
                                          attendance.break1In,
                                          "hh:mm:ss A"
                                        )
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else if (attendance.didBreak1 !== "false") {
                          return (
                            <>
                              {moment(attendance.break1In, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.break1In,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(
                                attendance.break1Out,
                                "hh:mm:ss A"
                              ).format("hh:mm:ss A") === "Invalid date"
                                ? "Current time"
                                : moment(
                                    attendance.break1Out,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.break1Out,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.break1In, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.break1Out,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(
                                          attendance.break1In,
                                          "hh:mm:ss A"
                                        )
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else {
                          return <p>-</p>;
                        }
                      })()}
                    </p>
                  </td>
                  <td>
                    <p>
                      {(() => {
                        if (attendance.inBreak2 === "true") {
                          return (
                            <>
                              {moment(attendance.break2In, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.break2In,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(
                                attendance.break2Out,
                                "hh:mm:ss A"
                              ).format("hh:mm:ss A") === "Invalid date"
                                ? "Current time"
                                : moment(
                                    attendance.break2Out,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.break2Out,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.break2In, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.break2Out,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(
                                          attendance.break2In,
                                          "hh:mm:ss A"
                                        )
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else if (attendance.didBreak2 !== "false") {
                          return (
                            <>
                              {moment(attendance.break2In, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.break2In,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(
                                attendance.break2Out,
                                "hh:mm:ss A"
                              ).format("hh:mm:ss A") === "Invalid date"
                                ? "Current time"
                                : moment(
                                    attendance.break2Out,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.break2Out,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.break2In, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.break2Out,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(
                                          attendance.break2In,
                                          "hh:mm:ss A"
                                        )
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else {
                          return <p>-</p>;
                        }
                      })()}
                    </p>
                  </td>
                  <td>
                    <p>
                      {(() => {
                        if (attendance.inBreak3 === "true") {
                          return (
                            <>
                              {moment(attendance.break3In, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.break3In,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(
                                attendance.break3Out,
                                "hh:mm:ss A"
                              ).format("hh:mm:ss A") === "Invalid date" &&
                              attendance.break3Out !== ""
                                ? "Current time"
                                : moment(
                                    attendance.break3Out,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.break3Out,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.break3In, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.break3Out,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(
                                          attendance.break3In,
                                          "hh:mm:ss A"
                                        )
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else if (attendance.didBreak3 !== "false") {
                          return (
                            <>
                              {moment(attendance.break3In, "hh:mm:ss A").format(
                                "hh:mm:ss A"
                              ) === "Invalid date"
                                ? ""
                                : moment(
                                    attendance.break3In,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}{" "}
                              -{" "}
                              {moment(
                                attendance.break3Out,
                                "hh:mm:ss A"
                              ).format("hh:mm:ss A") === "Invalid date" &&
                              attendance.break3Out !== ""
                                ? "Current time"
                                : moment(
                                    attendance.break3Out,
                                    "hh:mm:As A"
                                  ).format("hh:mm:ss A")}
                              <br />
                              {moment
                                .utc(
                                  moment(
                                    attendance.break3Out,
                                    "hh:mm:ss A"
                                  ).diff(
                                    moment(attendance.break3In, "hh:mm:ss A")
                                  )
                                )
                                .format("hh:mm:ss A") === "Invalid date"
                                ? ""
                                : moment
                                    .utc(
                                      moment(
                                        attendance.break3Out,
                                        "hh:mm:ss A"
                                      ).diff(
                                        moment(
                                          attendance.break3In,
                                          "hh:mm:ss A"
                                        )
                                      )
                                    )
                                    .format("HH:mm:ss")}{" "}
                            </>
                          );
                        } else {
                          return <p>-</p>;
                        }
                      })()}
                    </p>
                  </td>
                  <td>
                    <p>
                      {moment
                        .utc(
                          moment(attendance.officeOut, "hh:mm:ss A").diff(
                            moment(attendance.officeIn, "hh:mm:ss A")
                          )
                        )
                        .format("hh:mm:ss A") === "Invalid date"
                        ? ""
                        : moment
                            .utc(
                              moment(attendance.officeOut, "hh:mm:ss A").diff(
                                moment(attendance.officeIn, "hh:mm:ss A")
                              )
                            )
                            .format("HH:mm:ss")}
                    </p>
                  </td>
                  <td>
                    {(() => {
                      if (attendance.report !== null) {
                        return (
                          <Button onClick={() => setModal2Show(true)}>
                            View
                          </Button>
                        );
                      } else {
                        return <p>-</p>;
                      }
                    })()}
                    <Modal show={modal2Show} size="lg" centered>
                      <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                          Today's Report
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>{attendance.report}</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={() => setModal2Show(false)}>
                          Go Back
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
      <div style={{ height: "300px", margin: "30px 0" }}>
        <Row>
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
            justify
          >
            <Tab eventKey="tEvent" title="Todays Events">
              <h4>Todays Events</h4>
              {events.map((event, index) =>
                (() => {
                  if (
                    (moment(event.date).format("DD-MM-YYYY") ===
                      moment(date).format("DD-MM-YYYY") &&
                      user.jobRole === event.meetForhr) ||
                    user.jobRole === event.meetForWeb ||
                    user.jobRole === event.meetForSales ||
                    user.jobRole === event.meetForBusiness ||
                    user.jobRole === event.meetForAccFin
                  ) {
                    return (
                      <>
                        <h5 key={index}>{event.title}</h5>
                        <p>{event.body}</p>
                        <p>{event.time}</p>
                      </>
                    );
                  }
                })()
              )}
            </Tab>
            <Tab eventKey="uEvent" title="Upcoming Events">
              <h4>Upcoming Events</h4>
              {events.map((event, index) =>
                (() => {
                  if (
                    (moment(event.date).format("DDMMYYYY") -
                      moment(date).format("DDMMYYYY") >
                      0 &&
                      user.jobRole === event.meetForhr) ||
                    user.jobRole === event.meetForWeb ||
                    user.jobRole === event.meetForSales ||
                    user.jobRole === event.meetForBusiness ||
                    user.jobRole === event.meetForAccFin
                  ) {
                    return (
                      <>
                        <h5 key={index}>{event.title}</h5>
                        <p>{event.date}</p>
                        <p>{event.body}</p>
                        <p>{event.time}</p>
                      </>
                    );
                  }
                })()
              )}
            </Tab>
            <Tab eventKey="holidays" title="Upcoming Holidays">
              <h4>Upcoming Holidays</h4>
              <Row style={{ overflowX: "auto" }}>
                <Table striped bordered>
                  <thead className="tableHead">
                    <tr>
                      <th>S. No.</th>
                      <th>Reason</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody className="tableBody">
                    {holidays
                      .slice(0)
                      .reverse()
                      .map((leave, index) =>
                        (() => {
                          if (
                            moment(leave.date).format("DDMMYYYY") -
                              moment(date).format("DDMMYYYY") >=
                              0 &&
                            moment(leave.date).format("MM") ===
                              moment(date).format("MM")
                          ) {
                            return (
                              <tr>
                                <td>
                                  <p>{index + 1}</p>
                                </td>
                                <td>
                                  <p>{leave.reason}</p>
                                </td>
                                <td>
                                  <p>
                                    {moment(leave.date).format("Do MMMM YYYY")}
                                  </p>
                                </td>
                              </tr>
                            );
                          }
                        })()
                      )}
                  </tbody>
                </Table>
              </Row>
            </Tab>
          </Tabs>
        </Row>
      </div>

      <Row>
        <Col>
          <Row className="formSectionHeader">
            <h3>Leave Requests</h3>
          </Row>
          <Row style={{ overflowX: "auto" }}>
            <Table striped bordered>
              <thead className="tableHead">
                <tr>
                  <th>Reason</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Approval</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {leaves
                  .slice(0)
                  .reverse()
                  .map((leave, index) => (
                    <tr>
                      <td>
                        <p>{leave.reason}</p>
                      </td>
                      <td>
                        <p>{moment(leave.stDate).format("Do MMMM YYYY")}</p>
                      </td>
                      <td>
                        <p>{moment(leave.endDate).format("Do MMMM YYYY")}</p>
                      </td>
                      <td>
                        <p>
                          {(() => {
                            if (
                              leave.approval === "" ||
                              leave.approval === null
                            ) {
                              return <p>Approval Pending</p>;
                            }
                          })()}
                          {(() => {
                            if (
                              leave.approval === "true" ||
                              leave.approval === true
                            ) {
                              return <p>Leave Approved</p>;
                            }
                          })()}
                          {(() => {
                            if (
                              leave.approval === "false" ||
                              leave.approval === false
                            ) {
                              return <p>Leave Rejected</p>;
                            }
                          })()}
                        </p>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeHome;
