import React, { useState, useEffect } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";
import SecurePageSection from "../SecurePageSection";

function AttendanceReport() {
  const user = useSelector((state) => state.authentication.user);
  const [attendance, setAttendance] = useState([]);
  const date = new Date();
  const [month, setMonth] = useState("");
  const [userName, setUserName] = useState("");

  let filterUrl = "";
  if (month === "") {
    filterUrl = `/api/attendance/filter/?userName=${userName}`;
  }
  if (month !== "") {
    filterUrl = `/api/attendance/filter/?userName=${userName}&month=${month}`;
  }

  useEffect(() => {
    setUserName(user.first_name + " " + user.last_name);
    const fetchAttendance = async () => {
      const response = await axios.get(filterUrl);
      setAttendance(response.data);
    };
    fetchAttendance();
  }, [month, userName]);

  return (
    <div>
      <SecurePageSection accessableUsers={"admin,employee,intern,hr"} />
      <h2>Attendance Report</h2>
      <Row style={{ margin: "20px 0" }}>
        <Col style={{ padding: "0", margin: "0" }}>
          <Form.Select
            style={{ margin: "0" }}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">All</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="1October">October</option>
            <option value="1November">November</option>
            <option value="1December">December</option>
          </Form.Select>
        </Col>
      </Row>
      <Row style={{ overflowX: "auto" }}>
        <Table striped bordered>
          <thead className="tableHead">
            <tr style={{ textAlign: "center" }}>
              <th style={{ width: "80px" }}>Date</th>
              <th>Employee</th>
              <th>Office In</th>
              <th>Office Out</th>
              <th>Lunch (hh:mm:ss)</th>
              <th>Break 1 (hh:mm:ss)</th>
              <th>Break 2 (hh:mm:ss)</th>
              <th>Break 3 (hh:mm:ss)</th>
              <th>Total</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody className="tableBody">
            {attendance
              .slice(0)
              .reverse()
              .map((res, index) => (
                <tr style={{ textAlign: "center" }}>
                  <td>{moment(res.date).format("DD-MM-YYYY")}</td>
                  <td>{res.userName}</td>
                  <td>
                    {moment(res.officeIn, "hh:mm:ss A").format("hh:mm:ss A") ===
                    "Invalid date"
                      ? ""
                      : moment(res.officeIn, "hh:mm:ss A").format(
                          "hh:mm:ss A"
                        )}{" "}
                  </td>
                  <td>
                    {moment(res.officeOut, "hh:mm:ss A").format(
                      "hh:mm:ss A"
                    ) === "Invalid date"
                      ? "Current time"
                      : moment(res.officeOut, "hh:mm:ss A").format(
                          "hh:mm:ss A"
                        )}
                  </td>
                  <td>
                    {(() => {
                      if (res.didLunch !== "false") {
                        return (
                          <>
                            {moment(res.lunchIn, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date"
                              ? ""
                              : moment(res.lunchIn, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}{" "}
                            -{" "}
                            {moment(res.lunchOut, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date"
                              ? "Current time"
                              : moment(res.lunchOut, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}
                            <br />
                            {moment
                              .utc(
                                moment(res.lunchOut, "hh:mm:ss A").diff(
                                  moment(res.lunchIn, "hh:mm:ss A")
                                )
                              )
                              .format("hh:mm:ss A") === "Invalid date"
                              ? ""
                              : moment
                                  .utc(
                                    moment(res.lunchOut, "hh:mm:ss A").diff(
                                      moment(res.lunchIn, "hh:mm:ss A")
                                    )
                                  )
                                  .format("HH:mm:ss")}{" "}
                          </>
                        );
                      } else {
                        return <p>-</p>;
                      }
                    })()}
                  </td>
                  <td>
                    {(() => {
                      if (res.didBreak1 !== "false") {
                        return (
                          <>
                            {moment(res.break1In, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date"
                              ? ""
                              : moment(res.break1In, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}{" "}
                            -{" "}
                            {moment(res.break1Out, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date"
                              ? "Current time"
                              : moment(res.break1Out, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}
                            <br />
                            {moment
                              .utc(
                                moment(res.break1Out, "hh:mm:ss A").diff(
                                  moment(res.break1In, "hh:mm:ss A")
                                )
                              )
                              .format("hh:mm:ss A") === "Invalid date"
                              ? ""
                              : moment
                                  .utc(
                                    moment(res.break1Out, "hh:mm:ss A").diff(
                                      moment(res.break1In, "hh:mm:ss A")
                                    )
                                  )
                                  .format("HH:mm:ss")}{" "}
                          </>
                        );
                      } else {
                        return <p>-</p>;
                      }
                    })()}
                  </td>
                  <td>
                    {(() => {
                      if (res.didBreak2 !== "false") {
                        return (
                          <>
                            {moment(res.break2In, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date"
                              ? ""
                              : moment(res.break2In, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}{" "}
                            -{" "}
                            {moment(res.break2Out, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date"
                              ? "Current time"
                              : moment(res.break2Out, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}
                            <br />
                            {moment
                              .utc(
                                moment(res.break2Out, "hh:mm:ss A").diff(
                                  moment(res.break2In, "hh:mm:ss A")
                                )
                              )
                              .format("hh:mm:ss A") === "Invalid date"
                              ? ""
                              : moment
                                  .utc(
                                    moment(res.break2Out, "hh:mm:ss A").diff(
                                      moment(res.break2In, "hh:mm:ss A")
                                    )
                                  )
                                  .format("HH:mm:ss")}{" "}
                          </>
                        );
                      } else {
                        return <p>-</p>;
                      }
                    })()}
                  </td>
                  <td>
                    {(() => {
                      if (res.didBreak3 !== "false") {
                        return (
                          <>
                            {moment(res.break3In, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date"
                              ? ""
                              : moment(res.break3In, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}{" "}
                            -{" "}
                            {moment(res.break3Out, "hh:mm:ss A").format(
                              "hh:mm:ss A"
                            ) === "Invalid date" && res.break3Out !== ""
                              ? "Current time"
                              : moment(res.break3Out, "hh:mm:ss A").format(
                                  "hh:mm:ss A"
                                )}
                            <br />
                            {moment
                              .utc(
                                moment(res.break3Out, "hh:mm:ss A").diff(
                                  moment(res.break3In, "hh:mm:ss A")
                                )
                              )
                              .format("hh:mm:ss A") === "Invalid date"
                              ? ""
                              : moment
                                  .utc(
                                    moment(res.break3Out, "hh:mm:ss A").diff(
                                      moment(res.break3In, "hh:mm:ss A")
                                    )
                                  )
                                  .format("HH:mm:ss")}{" "}
                          </>
                        );
                      } else {
                        return <p>-</p>;
                      }
                    })()}
                  </td>
                  <td>
                    {moment
                      .utc(
                        moment(res.officeOut, "hh:mm:ss A").diff(
                          moment(res.officeIn, "hh:mm:ss A")
                        )
                      )
                      .format("hh:mm:ss A") === "Invalid date"
                      ? ""
                      : moment
                          .utc(
                            moment(res.officeOut, "hh:mm:ss A").diff(
                              moment(res.officeIn, "hh:mm:ss A")
                            )
                          )
                          .format("HH:mm:ss")}
                  </td>
                  <td>
                    {(() => {
                      if (res.report !== null) {
                        return (
                          <Button
                            onClick={function myFunction() {
                              alert(res.report);
                            }}
                          >
                            View
                          </Button>
                        );
                      } else {
                        return <p>-</p>;
                      }
                    })()}
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </div>
  );
}

export default AttendanceReport;
