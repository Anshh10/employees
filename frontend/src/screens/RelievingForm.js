import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SecurePageSection from "../SecurePageSection";

const RelievingForm = () => {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [titles, setTitles] = useState("Mr.");
  const [branch, setBranch] = useState("");
  const [company, setCompany] = useState("");
  const [stDate, setStDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [signBy, setSignBy] = useState("");

  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate(`/`);
  };

  const [allEmployeesData, setAllEmployeesData] = useState([]);
  const fetchAllEmployeesData = async () => {
    const response = await axios.get(`/user/list/`);
    console.log(response.data);
    setAllEmployeesData(response.data);
  };

  useEffect(() => {
    fetchAllEmployeesData();
  }, []);

  const [employeeID, setEmployeeID] = useState([]);
  const fetchEmployeeById = async () => {
    const response = await axios.get(`/user/user/${employeeID}`);
    console.log(response.data);
    setUserId(response.data.employeeId);
    setName(response.data.first_name + " " + response.data.last_name);
    setJobRole(response.data.jobRole);
    setSignBy(response.data.signBy);
    setCompany(response.data.company);
    setBranch(response.data.branch);
  };

  useEffect(() => {
    fetchEmployeeById();
  }, [employeeID]);

  async function FormSubmit(event) {
    event.preventDefault();
    let formField = new FormData();
    formField.append("user", userId);
    formField.append("name", name);
    formField.append("jobRole", jobRole);
    formField.append("titles", titles);
    formField.append("branch", branch);
    formField.append("company", company);
    formField.append("stDate", stDate);
    formField.append("endDate", endDate);
    formField.append("signBy", signBy);

    await axios({
      method: "post",
      url: "/api/relieving-letter/",
      data: formField,
    })
      .then(function (response) {
        redirectToHome();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <SecurePageSection accessableUsers={"admin,hr,employee,intern"} />
      <Container>
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
                <Form.Label>Title</Form.Label>
                <Form.Select
                  name="titles"
                  value={titles}
                  onChange={(e) => setTitles(e.target.value)}
                >
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>M/s.</option>
                </Form.Select>
              </Form.Group>
            </Col>

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
                <Form.Label>Job Role</Form.Label>
                <Form.Control
                  type="text"
                  name="jobRole"
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col xs={12} md={6}>
              <Form.Group controlId="form">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="form">
                <Form.Label>Branch</Form.Label>
                <Form.Control
                  type="text"
                  name="branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Employment Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="stDate"
                  value={stDate}
                  onChange={(e) => setStDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Employment End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={4}>
              <Form.Group>
                <Form.Label>Sign By</Form.Label>
                <Form.Select
                  name="signBy"
                  value={signBy}
                  onChange={(e) => setSignBy(e.target.value)}
                >
                  <option>Priyanka</option>
                  <option>Joel</option>
                  <option>XXX</option>
                </Form.Select>
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
      </Container>
    </div>
  );
};

export default RelievingForm;
