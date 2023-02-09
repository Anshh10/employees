import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SecurePageSection from "../SecurePageSection";

const PaySlipForm = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [panNum, setPanNum] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [pfNum, setPfNum] = useState("");
  const [location, setLocation] = useState("");
  const [bankName, setBankName] = useState("");
  const [shift, setShift] = useState("");
  const [accNum, setAccNum] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [lopDays, setLopDays] = useState("");
  const [paBasic, setPaBasic] = useState("");
  const [paHRA, setPaHRA] = useState("");
  const [paConveyance, setPaConveyance] = useState("");
  const [paTelephone, setPaTelephone] = useState("");
  const [paOtherAllowance, setPaOtherAllowance] = useState("");
  const [pdTds, setPdTds] = useState("");
  const [pdLop, setPdLop] = useState("");
  const [pdPf, setPdPf] = useState("");
  const [pdEsi, setPdEsi] = useState("");
  const [pdOtherDeductions, setPdOtherDeductions] = useState("");
  const [pTotalPaid, setPTotalPaid] = useState("");
  const [pTotalDeducted, setPTotalDeducted] = useState("");
  const [pNetEarnings, setPNetEarnings] = useState("");
  const [pStipend, setPStipend] = useState("");

  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate(`/`);
  };

  const [allEmployeesData, setAllEmployeesData] = useState([]);
  const fetchAllEmployeesData = async () => {
    const response = await axios.get(`/user/list/`);
    setAllEmployeesData(response.data);
  };

  useEffect(() => {
    fetchAllEmployeesData();
  }, []);

  const [employeeID, setEmployeeID] = useState("");
  const fetchEmployeeById = async () => {
    const response = await axios.get(`/user/user/${employeeID}`);
    setUserId(response.data.employeeId);
    setName(response.data.first_name + " " + response.data.last_name);
    setJobRole(response.data.jobRole);
  };

  useEffect(() => {
    fetchEmployeeById();
  }, [employeeID]);

  async function FormSubmit(event) {
    event.preventDefault();
    const id = `${year}${month}${userId}`;
    let formField = new FormData();
    formField.append("user", userId);
    formField.append("id", id);
    formField.append("name", name);
    formField.append("month", month);
    formField.append("panNum", panNum);
    formField.append("jobRole", jobRole);
    formField.append("pfNum", pfNum);
    formField.append("location", location);
    formField.append("bankName", bankName);
    formField.append("shift", shift);
    formField.append("accNum", accNum);
    formField.append("joinDate", joinDate);
    formField.append("lopDays", lopDays);
    formField.append("paBasic", paBasic);
    formField.append("paHRA", paHRA);
    formField.append("paConveyance", paConveyance);
    formField.append("paTelephone", paTelephone);
    formField.append("paOtherAllowance", paOtherAllowance);
    formField.append("pdTds", pdTds);
    formField.append("pdLop", pdLop);
    formField.append("pdPf", pdPf);
    formField.append("pdEsi", pdEsi);
    formField.append("pdOtherDeductions", pdOtherDeductions);
    formField.append("pTotalPaid", pTotalPaid);
    formField.append("pTotalDeducted", pTotalDeducted);
    formField.append("pNetEarnings", pNetEarnings);
    formField.append("pStipend", pStipend);

    await axios({
      method: "post",
      url: "/api/pay-slip/",
      data: formField,
    })
      .then(function (response) {
        redirectToHome();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function netEarningsCalc() {
    const add =
      paBasic * 1 +
      paHRA * 1 +
      paConveyance * 1 +
      paTelephone * 1 +
      paOtherAllowance * 1;
    const deduct =
      pdTds * 1 + pdLop * 1 + pdPf * 1 + pdEsi * 1 + pdOtherDeductions * 1;
    const netEarnings = add * 1 - deduct * 1;
    setPTotalPaid(add);
    setPTotalDeducted(deduct);
    setPNetEarnings(netEarnings);
  }

  useEffect(() => {
    netEarningsCalc();
  }, [
    paBasic,
    paHRA,
    paConveyance,
    paTelephone,
    paOtherAllowance,
    pdTds,
    pdLop,
    pdPf,
    pdEsi,
    pdOtherDeductions,
  ]);

  return (
    <div>
      <SecurePageSection accessableUsers={"admin,hr"} />
      <Form onSubmit={FormSubmit}>
        <Row>
          <Col md={12}>
            <h2>Select Employee</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Employee Name</Form.Label>
            <Form.Select
              name="selectEmployee"
              onChange={(e) => setEmployeeID(e.target.value)}
              style={{ textTransform: "capitalize" }}
            >
              <option value="">Select an employee</option>
              {allEmployeesData.map((employeeData, index) => (
                <option
                  value={employeeData.employeeId}
                  key={index}
                  style={{ textTransform: "capitalize" }}
                >
                  {employeeData.first_name} {employeeData.last_name} -{" "}
                  {employeeData.employeeId}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row>
          <h2>Employee Details</h2>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col xs={12} md={4}>
            <Form.Group controlId="form">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Month</Form.Label>
              <Form.Select
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
                <option value="November">November</option>
                <option value="December">December</option>
              </Form.Select>
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group>
              <Form.Label>Year</Form.Label>
              <Form.Select
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select Month</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col xs={12} md={6}>
            <Form.Group>
              <Form.Label>Job Role</Form.Label>
              <Form.Control
                type="text"
                name="jobRole"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="form">
              <Form.Label>Pan No.</Form.Label>
              <Form.Control
                type="text"
                name="panNum"
                value={panNum}
                onChange={(e) => setPanNum(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col xs={12} md={3}>
            <Form.Group controlId="form">
              <Form.Label>PF No.</Form.Label>
              <Form.Control
                type="text"
                name="pfNum"
                value={pfNum}
                onChange={(e) => setPfNum(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group controlId="form">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={3}>
            <Form.Group controlId="form">
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                type="text"
                name="bankName"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group controlId="form">
              <Form.Label>Acc No.</Form.Label>
              <Form.Control
                type="text"
                name="accNum"
                value={accNum}
                onChange={(e) => setAccNum(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col xs={12} md={4}>
            <Form.Group controlId="form">
              <Form.Label>Shift</Form.Label>
              <Form.Control
                type="text"
                name="shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="form">
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                type="date"
                name="joinDate"
                value={joinDate}
                onChange={(e) => setJoinDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={4}>
            <Form.Group controlId="form">
              <Form.Label>Lop Days</Form.Label>
              <Form.Control
                type="text"
                name="lopDays"
                value={lopDays}
                onChange={(e) => setLopDays(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <h3>Additions</h3>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Basic</Form.Label>
                  <Form.Control
                    type="number"
                    name="paBasic"
                    value={paBasic}
                    onChange={(e) => setPaBasic(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>HRA</Form.Label>
                  <Form.Control
                    type="number"
                    name="paHRA"
                    value={paHRA}
                    onChange={(e) => setPaHRA(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Conveyance</Form.Label>
                  <Form.Control
                    type="number"
                    name="paConveyance"
                    value={paConveyance}
                    onChange={(e) => setPaConveyance(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Telephone</Form.Label>
                  <Form.Control
                    type="number"
                    name="paTelephone"
                    value={paTelephone}
                    onChange={(e) => setPaTelephone(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Other Allowances</Form.Label>
                  <Form.Control
                    type="number"
                    name="paOtherAllowance"
                    value={paOtherAllowance}
                    onChange={(e) => setPaOtherAllowance(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Total Paid</Form.Label>
                  <Form.Control
                    type="number"
                    name="pTotalPaid"
                    value={pTotalPaid}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <h3>Deduction</h3>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>TDS</Form.Label>
                  <Form.Control
                    type="number"
                    name="pdTds"
                    value={pdTds}
                    onChange={(e) => setPdTds(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Loss Of Pay </Form.Label>
                  <Form.Control
                    type="number"
                    name="pdLop"
                    value={pdLop}
                    onChange={(e) => setPdLop(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>PF</Form.Label>
                  <Form.Control
                    type="number"
                    name="pdPf"
                    value={pdPf}
                    onChange={(e) => setPdPf(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>ESI</Form.Label>
                  <Form.Control
                    type="number"
                    name="pdEsi"
                    value={pdEsi}
                    onChange={(e) => setPdEsi(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Other Deductions</Form.Label>
                  <Form.Control
                    type="number"
                    name="pdOtherDeductions"
                    value={pdOtherDeductions}
                    onChange={(e) => setPdOtherDeductions(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {" "}
              <Col xs={12} md={12}>
                <Form.Group controlId="form">
                  <Form.Label>Total Deducted</Form.Label>
                  <Form.Control
                    type="number"
                    name="pTotalDeducted"
                    value={pTotalDeducted}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col xs={12} md={12}>
            <Form.Group controlId="form">
              <Form.Label>Net Earnings</Form.Label>
              <Form.Control
                type="number"
                name="pNetEarnings"
                value={pNetEarnings}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col xs={12} md={12}>
            <Form.Group controlId="form">
              <Form.Label>Stipend</Form.Label>
              <Form.Control
                type="number"
                name="pStipend"
                value={pStipend}
                onChange={(e) => setPStipend(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button className="btn-outline" type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PaySlipForm;
