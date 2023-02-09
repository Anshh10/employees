import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import "./Response.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToWords } from "to-words";
import SecurePageSection from "../SecurePageSection";

function PaySlip() {
  const userId = useSelector((state) => state.authentication.user.employeeId);
  const user = useSelector((state) => state.authentication.user);
  const [paySlip, setPaySlip] = useState([]);
  const [month, setMonth] = useState("January");
  const [reason, setReason] = useState("");
  const [year, setYear] = useState("2023");
  const [netInWords, setNetInWords] = useState("");
  const [err, SetErr] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [requested, setRequested] = useState(false);

  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: true,
      doNotAddOnly: false,
      currencyOptions: {
        // can be used to override defaults for the selected locale
        name: "Rupee",
        plural: "Rupees",
        symbol: "₹",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paise",
          symbol: "",
        },
      },
    },
  });

  const fetchPaySlip = async () => {
    const response = await axios
      .get(`/api/pay-slip/${year}${month}${userId}`)
      .then(function (response) {
        setPaySlip(response.data);
        setNetInWords(toWords.convert(response.data.pNetEarnings));
        SetErr("");
      })
      .catch(function (error) {
        console.log(error);
        SetErr(error.message);
      });
  };

  useEffect(() => {
    fetchPaySlip();
    setRequested(false);
  }, [month, year]);

  async function FormSubmit(event) {
    event.preventDefault();
    const userName = user.first_name + " " + user.last_name;
    let formField = new FormData();
    formField.append("user", userId);
    formField.append("userName", userName);
    formField.append("reason", reason);
    formField.append("month", month);
    formField.append("year", year);

    await axios({
      method: "post",
      url: "/api/req-pay-slip/",
      data: formField,
    })
      .then(function (response) {
        console.log(response);
        // setModalShow(false);
        setRequested(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <SecurePageSection accessableUsers={"admin,hr,employee,intern"} />
      <div className="responsePage">
        <Row style={{ marginBottom: "0.8em", marginTop: "1em" }}>
          <Col>
            <Form.Group>
              <Form.Select
                style={{ width: "300px" }}
                name="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Select Month</option>
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
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select
                style={{ width: "300px" }}
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select Year</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row style={{ marginBottom: "1em" }}>
          <Button className="btnSecondary" style={{ width: "300px" }}>
            Download Pay Slip
          </Button>
        </Row>
        {(() => {
          if (err === "") {
            return (
              <div id="letter" className="letter">
                <div
                  className="fResponseBody"
                  style={{
                    background: `url(/images/letterHead.jpg)`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="letterBody">
                    <div>
                      <Row>
                        <Col
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "1px 1px 0px 1px",
                          }}
                        >
                          <h3
                            style={{
                              textAlign: "center",
                              fontSize: "20px",
                              margin: "0",
                              marginTop: "10px",
                            }}
                          >
                            Payslip - {month} 2023
                          </h3>
                          <h4
                            style={{
                              textAlign: "center",
                              fontSize: "18px",
                              margin: "0px",
                              marginTop: "5px",
                              marginBottom: "10px",
                            }}
                          >
                            {paySlip.name}
                          </h4>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "1px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Employee ID</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "1px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{userId}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "1px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">Pan No</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "1px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.panNum}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Employee Designation</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.jobRole}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">PF. No</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.pfNum}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Location</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.location}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">Bank name</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.bankName}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Shift</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.shift}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">Bank Account No</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.accNum}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Date of Joining</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.joinDate}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">LOP Days</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.lopDays}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                            backgroundColor: "yellow",
                          }}
                        >
                          <p className="Tsingle-enter">Earnings</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                            backgroundColor: "yellow",
                          }}
                        >
                          <p className="Tsingle-enter">Amount</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                            backgroundColor: "yellow",
                          }}
                        >
                          <p className="Tsingle-enter">Deductions</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            fontWeight: "600",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                            backgroundColor: "yellow",
                          }}
                        >
                          <p className="Tsingle-enter">Amount</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Basic</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.paBasic}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">TDS for salaries</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.pdTds}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">HRA</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.paHRA}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">Loss OF Pay</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.pdLop}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Conveyance</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">
                            {paySlip.paConveyance}
                          </p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">PF</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.pdPf}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Telephone</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.paTelephone}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">ESI</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.pdEsi}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Other Allowances</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">
                            {paySlip.paOtherAllowance}
                          </p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">Other Deductions</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">
                            {paySlip.pdOtherDeductions}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Total Amount Paid</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">{paySlip.pTotalPaid}</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">Total Deductions</p>
                        </Col>
                        <Col
                          xs={3}
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">
                            {paySlip.pTotalDeducted}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">Net Earnings</p>
                        </Col>
                        <Col
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 0px",
                          }}
                        >
                          <p className="Tsingle-enter">
                            Rs. {paySlip.pNetEarnings}
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          style={{
                            textAlign: "center",
                            borderColor: "#000",
                            borderStyle: "solid",
                            borderWidth: "0px 1px 1px 1px",
                          }}
                        >
                          <p className="Tsingle-enter">
                            Amount in words : {netInWords}
                          </p>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })()}
        {(() => {
          if (err !== "") {
            return (
              <>
                <h3>Error Occured (No Pay Slip Found) </h3>
                <h4>Try Changing the month</h4>
                <Button
                  className="btnSecondary"
                  onClick={() => setModalShow(true)}
                >
                  Request Pay Slip
                </Button>

                <Modal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Request Pay Slip
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    {(() => {
                      if (requested === false) {
                        return (
                          <Form onSubmit={FormSubmit}>
                            <Row
                              style={{
                                marginBottom: "0.8em",
                                marginTop: "1em",
                              }}
                            >
                              <Col>
                                <Form.Group>
                                  <Form.Select
                                    style={{ width: "300px" }}
                                    name="month"
                                    value={month}
                                    onChange={(e) => setMonth(e.target.value)}
                                  >
                                    <option value="">Select Month</option>
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
                                </Form.Group>
                              </Col>
                              <Col>
                                <Form.Group>
                                  <Form.Select
                                    style={{ width: "300px" }}
                                    name="year"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                  >
                                    <option value="">Select Year</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Form.Group controlId="form">
                                <Form.Label>Reason</Form.Label>
                                <Form.Control
                                  type="text"
                                  name="reason"
                                  value={reason}
                                  onChange={(e) => setReason(e.target.value)}
                                />
                              </Form.Group>
                            </Row>
                            <Button className="btnSecondary" type="submit">
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              Submit
                            </Button>
                          </Form>
                        );
                      } else if (requested === true) {
                        return <p>Request Successfully Submitted</p>;
                      }
                    })()}
                  </Modal.Body>
                </Modal>
              </>
            );
          }
        })()}
      </div>
    </div>
  );
}

export default PaySlip;
