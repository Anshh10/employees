import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import moment from "moment";
import AddHoliday from "./AddHoliday";
import axios from "axios";
import AddEvent from "./AddEvent";
import { useNavigate } from "react-router-dom";

function AdminHome() {
  const userToken = localStorage.getItem("token");
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [leaveReqs, setLeaveReqs] = useState([]);
  const [paySlipReqs, setPaySlipReqs] = useState([]);

  const date = new Date().toDateString();
  const formatDate = moment(date).format("YYYY-MM-DD");

  useEffect(() => {
    const fetchAllEmployeesData = async () => {
      const response = await axios.get(`/user/list/`);
      setEmployees(response.data);
    };
    fetchAllEmployeesData();
  }, []);
  let filterUrl = `/api/attendance/filter/?date=${formatDate}`;

  useEffect(() => {
    const fetchAttendance = async () => {
      const response = await axios.get(filterUrl);
      setAttendance(response.data);
    };
    fetchAttendance();
  }, []);

  useEffect(() => {
    const fetchPaySlipReqs = async () => {
      const response = await axios.get("/api/req-pay-slip/");
      setPaySlipReqs(response.data);
    };
    fetchPaySlipReqs();
  }, []);

  const fetchLeaves = async () => {
    const response = await axios.get(`/api/leave-request/`);
    setLeaveReqs(response.data);
  };

  useEffect(() => {
    fetchLeaves();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get(`/api/leave-request/`);
    setLeaveReqs(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  async function handleLeaveApprove(id) {
    await axios
      .put(
        `/api/leave-request/${id}`,
        {
          approval: `true`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function handleLeaveReject(id) {
    await axios
      .put(
        `/api/leave-request/${id}`,
        {
          approval: `false`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const navigate = useNavigate();

  async function handlePaySlipApprove(id) {
    await axios
      .put(
        `/api/req-pay-slip/${id}`,
        {
          created: `yes`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
        navigate("/form/pay-slip");
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  async function handlePaySlipReject(id) {
    await axios
      .put(
        `/api/req-pay-slip/${id}`,
        {
          created: `no`,
        },
        config
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>ADMIN</h2>
      <Row>
        <Col>
          <Row className="formSectionHeader">
            <h3>Today's Attendance Report</h3>
          </Row>
          <Row style={{ overflowX: "auto" }}>
            <Table
              striped
              bordered
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            >
              <thead className="tableHead">
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "40px" }}>No.</th>
                  <th>Employee</th>
                  <th>Office (hh:mm:ss)</th>
                  <th>Lunch (hh:mm:ss)</th>
                  <th>Break 1 (hh:mm:ss)</th>
                  <th>Break 2 (hh:mm:ss)</th>
                  <th>Break 3 (hh:mm:ss)</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {attendance
                  .slice(0)
                  .reverse()
                  .map((res, index) => (
                    <tr style={{ textAlign: "center" }}>
                      <td>{index + 1}</td>
                      <td>{res.userName}</td>
                      <td>
                        {moment(res.officeIn, "hh:mm:ss").format("HH:mm:ss") ===
                        "Invalid date"
                          ? ""
                          : moment(res.officeIn, "hh:mm:ss").format(
                              "HH:mm:ss"
                            )}{" "}
                        -{" "}
                        {moment(res.officeOut, "hh:mm:ss").format(
                          "HH:mm:ss"
                        ) === "Invalid date"
                          ? "Current time"
                          : moment(res.officeOut, "hh:mm:ss").format(
                              "HH:mm:ss"
                            )}
                        <br />
                        {moment
                          .utc(
                            moment(res.officeOut, "HH:mm:ss").diff(
                              moment(res.officeIn, "HH:mm:ss")
                            )
                          )
                          .format("HH:mm:ss") === "Invalid date"
                          ? ""
                          : moment
                              .utc(
                                moment(res.officeOut, "HH:mm:ss").diff(
                                  moment(res.officeIn, "HH:mm:ss")
                                )
                              )
                              .format("hh:mm:ss")}
                      </td>
                      <td>
                        {(() => {
                          if (res.didLunch !== "false") {
                            return (
                              <>
                                {moment(res.lunchIn, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date"
                                  ? ""
                                  : moment(res.lunchIn, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}{" "}
                                -{" "}
                                {moment(res.lunchOut, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date"
                                  ? "Current time"
                                  : moment(res.lunchOut, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}
                                <br />
                                {moment
                                  .utc(
                                    moment(res.lunchOut, "HH:mm:ss").diff(
                                      moment(res.lunchIn, "HH:mm:ss")
                                    )
                                  )
                                  .format("HH:mm:ss") === "Invalid date"
                                  ? ""
                                  : moment
                                      .utc(
                                        moment(res.lunchOut, "HH:mm:ss").diff(
                                          moment(res.lunchIn, "HH:mm:ss")
                                        )
                                      )
                                      .format("HH:mm:ss")}{" "}
                              </>
                            );
                          } else {
                            return <p> - </p>;
                          }
                        })()}
                      </td>
                      <td>
                        {(() => {
                          if (res.didBreak1 !== "false") {
                            return (
                              <>
                                {moment(res.break1In, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date"
                                  ? ""
                                  : moment(res.break1In, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}{" "}
                                -{" "}
                                {moment(res.break1Out, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date"
                                  ? "Current time"
                                  : moment(res.break1Out, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}
                                <br />
                                {moment
                                  .utc(
                                    moment(res.break1Out, "HH:mm:ss").diff(
                                      moment(res.break1In, "HH:mm:ss")
                                    )
                                  )
                                  .format("HH:mm:ss") === "Invalid date"
                                  ? ""
                                  : moment
                                      .utc(
                                        moment(res.break1Out, "HH:mm:ss").diff(
                                          moment(res.break1In, "HH:mm:ss")
                                        )
                                      )
                                      .format("HH:mm:ss")}{" "}
                              </>
                            );
                          } else {
                            return <p> - </p>;
                          }
                        })()}
                      </td>
                      <td>
                        {(() => {
                          if (res.didBreak2 !== "false") {
                            return (
                              <>
                                {moment(res.break2In, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date"
                                  ? ""
                                  : moment(res.break2In, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}{" "}
                                -{" "}
                                {moment(res.break2Out, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date"
                                  ? "Current time"
                                  : moment(res.break2Out, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}
                                <br />
                                {moment
                                  .utc(
                                    moment(res.break2Out, "HH:mm:ss").diff(
                                      moment(res.break2In, "HH:mm:ss")
                                    )
                                  )
                                  .format("HH:mm:ss") === "Invalid date"
                                  ? ""
                                  : moment
                                      .utc(
                                        moment(res.break2Out, "HH:mm:ss").diff(
                                          moment(res.break2In, "HH:mm:ss")
                                        )
                                      )
                                      .format("HH:mm:ss")}{" "}
                              </>
                            );
                          } else {
                            return <p> - </p>;
                          }
                        })()}
                      </td>
                      <td>
                        {(() => {
                          if (res.didBreak3 !== "false") {
                            return (
                              <>
                                {moment(res.break3In, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date"
                                  ? ""
                                  : moment(res.break3In, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}{" "}
                                -{" "}
                                {moment(res.break3Out, "hh:mm:ss").format(
                                  "HH:mm:ss"
                                ) === "Invalid date" && res.break3Out !== ""
                                  ? "Current time"
                                  : moment(res.break3Out, "hh:mm:ss").format(
                                      "HH:mm:ss"
                                    )}
                                <br />
                                {moment
                                  .utc(
                                    moment(res.break3Out, "HH:mm:ss").diff(
                                      moment(res.break3In, "HH:mm:ss")
                                    )
                                  )
                                  .format("HH:mm:ss") === "Invalid date"
                                  ? ""
                                  : moment
                                      .utc(
                                        moment(res.break3Out, "HH:mm:ss").diff(
                                          moment(res.break3In, "HH:mm:ss")
                                        )
                                      )
                                      .format("HH:mm:ss")}{" "}
                              </>
                            );
                          } else {
                            return <p> - </p>;
                          }
                        })()}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row className="formSectionHeader">
            <h3>Not Yet Logged In</h3>
          </Row>
          <Row style={{ overflowX: "auto" }}>
            <Table
              striped
              bordered
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            >
              <thead className="tableHead">
                <tr style={{ textAlign: "center" }}>
                  <th style={{ width: "40px" }}>No.</th>
                  <th>Employee</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {employees
                  .slice(0)
                  .reverse()
                  .map((res, index) =>
                    (() => {
                      if (
                        attendance.some((attendee) =>
                          employees.some(
                            (employee) => attendee.user === res.employeeId
                          )
                        )
                      ) {
                        return <></>;
                      } else
                        return (
                          <tr style={{ textAlign: "center" }}>
                            <td>{index + 1}</td>
                            <td>
                              {res.first_name} {res.last_name}
                            </td>
                          </tr>
                        );
                    })()
                  )}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row className="formSectionHeader">
            <h3>On Leave Today</h3>
          </Row>
          <Row style={{ overflowX: "auto" }}>
            <Table
              striped
              bordered
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            >
              <thead className="tableHead">
                <tr>
                  <th>S. No.</th>
                  <th>Employee</th>
                  <th>Reason</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Leave</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {leaveReqs
                  .slice(0)
                  .reverse()
                  .map((leave, index) =>
                    (() => {
                      if (
                        leave.approval === "true" &&
                        moment(date).format("DDMMYYYY") >=
                          moment(leave.stDate).format("DDMMYYYY") &&
                        moment(date).format("DDMMYYYY") <=
                          moment(leave.endDdate).format("DDMMYYYY")
                      ) {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{leave.userName}</td>
                            <td>{leave.reason}</td>
                            <td>
                              {moment(leave.stDate).format("Do MMMM YYYY")}
                            </td>
                            <td>
                              {moment(leave.endDate).format("Do MMMM YYYY")}
                            </td>
                            <td>On Leave Today</td>
                          </tr>
                        );
                      }
                    })()
                  )}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>

      <Row className="formSectionHeader">
        <h3>Pending Requests</h3>
      </Row>
      <Row>
        <Col>
          <Row className="formSectionSubHeader">
            <h4>Leave Requests</h4>
          </Row>
          <Row style={{ overflowX: "auto" }}>
            <Table
              striped
              bordered
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            >
              <thead className="tableHead">
                <tr>
                  <th>S. No.</th>
                  <th>Employee</th>
                  <th>Reason</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Approve</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {leaveReqs
                  .slice(0)
                  .reverse()
                  .map((leave, index) =>
                    (() => {
                      if (leave.approval === "" || leave.approval === null) {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{leave.userName}</td>
                            <td>{leave.reason}</td>
                            <td>
                              {moment(leave.stDate).format("Do MMMM YYYY")}
                            </td>
                            <td>
                              {moment(leave.endDate).format("Do MMMM YYYY")}
                            </td>
                            <td>
                              <Row>
                                <Col style={{ textAlign: "center" }}>
                                  <Button
                                    onClick={(e) =>
                                      handleLeaveApprove(leave.id, e)
                                    }
                                    className="btn-primary"
                                  >
                                    Approve
                                  </Button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                  <Button
                                    onClick={(e) =>
                                      handleLeaveReject(leave.id, e)
                                    }
                                    className="btn-primary"
                                  >
                                    Reject
                                  </Button>
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        );
                      }
                    })()
                  )}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col>
          <Row className="formSectionSubHeader">
            <h4>Pay Slip Requests</h4>
          </Row>
          <Row style={{ overflowX: "auto" }}>
            <Table
              striped
              bordered
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
              }}
            >
              <thead className="tableHead">
                <tr>
                  <th>S. No.</th>
                  <th>Employee</th>
                  <th>Reason</th>
                  <th>Month</th>
                  <th>Approve</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {paySlipReqs
                  .slice(0)
                  .reverse()
                  .map((req, index) =>
                    (() => {
                      if (req.created === "" || req.created === null) {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{req.userName}</td>
                            <td>{req.reason}</td>
                            <td>{req.month}</td>
                            <td>
                              <Row>
                                <Col style={{ textAlign: "center" }}>
                                  <Button
                                    onClick={(e) =>
                                      handlePaySlipApprove(req.id, e)
                                    }
                                    className="btn-primary"
                                  >
                                    Generate
                                  </Button>
                                </Col>
                                <Col style={{ textAlign: "center" }}>
                                  <Button
                                    onClick={(e) =>
                                      handlePaySlipReject(req.id, e)
                                    }
                                    className="btn-primary"
                                  >
                                    Reject
                                  </Button>
                                </Col>
                              </Row>
                            </td>
                          </tr>
                        );
                      }
                    })()
                  )}
              </tbody>
            </Table>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AdminHome;
