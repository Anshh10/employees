import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  ListGroup,
  Form,
  Button,
  Table,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function EmpInfo() {
  const userId = useSelector((state) => state.authentication.user.employeeId);
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/user/user/${userId}`);
      setUser(response.data);
    };
    fetchUser();
  }, [userId]);

  return (
    <div>
      <Row>
        <h4>
          {user.first_name} {user.last_name} Details Review
        </h4>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Card
            className="cardShadow"
            style={{
              height: "65rem",
            }}
          >
            <Card.Body>
              <Card.Title>Personal Details </Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Gender</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="gender"
                          value={user.gender}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Date of Birth</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="dob"
                          value={moment(user.dob).format("Do MMMM YYYY")}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Age</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="age"
                          value={user.age}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Blood Group</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="bldGrp"
                          value={user.bldGrp}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Marital Status</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="marital"
                          value={user.marital}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Mobile Number</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="mobile"
                          value={user.mobile}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Alternate Mobile Number</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="altMobile"
                          value={user.altMobile}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Email Id</Form.Label>
                      </Col>
                      <Col style={{ textTransform: "lowercase" }}>
                        <Form.Control
                          disabled
                          type="text"
                          name="employeeId"
                          value={user.email}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Religion</Form.Label>
                      </Col>
                      <Col style={{ textTransform: "lowercase" }}>
                        <Form.Control
                          disabled
                          type="text"
                          name="religion"
                          value={user.religion}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Aadhar Number</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="employeeId"
                          value={user.aadhar}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>PAN Number</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="panNum"
                          value={user.panNum}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Address</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          as="textarea"
                          name="employeeId"
                          rows={3}
                          value={user.address}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Father Name</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="fatherName"
                          value={user.fatherName}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={8}>
                        <Form.Label>Mother Name</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="motherName"
                          value={user.motherName}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  {(() => {
                    if (user.spouseName !== null) {
                      return (
                        <ListGroup.Item style={{ padding: "10px 0" }}>
                          <Row style={{ margin: "0", padding: "0" }}>
                            <Col md={4} xs={12}>
                              <Form.Label>Spouse Name</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                disabled
                                type="text"
                                name="spouseName"
                                value={user.spouseName}
                              />
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      );
                    }
                  })()}
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            className="cardShadow"
            style={{
              height: "65rem",
            }}
          >
            <Card.Body>
              <Card.Title>Bank Details</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text style={{ marginBottom: "0" }}>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Bank Name</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="bankName"
                          value={user.bankName}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Bank Name</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="bankName"
                          value={user.bankName}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Account Name</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="bankAccName"
                          value={user.bankAccName}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Account Number</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="bankAccNum"
                          value={user.bankAccNum}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>IFS Code</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="bankIfsc"
                          value={user.bankIfsc}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Branch</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="bankBranch"
                          value={user.bankBranch}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>

              <Card.Title>Employment Details</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ padding: "30px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Date of Joining</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="joinDate"
                          value={moment(user.joinDate).format("Do MMMM YYYY")}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Designation</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="jobRole"
                          value={user.jobRole}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Job Type</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="jobType"
                          value={user.jobType}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Shift Time</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="shiftTime"
                          value={user.shiftTime}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Company</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="company"
                          value={user.company}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Company's Branch</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="branch"
                          value={user.branch}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Salary</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="salary"
                          value={user.salary}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>PF Number</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="pfNum"
                          value={user.pfNum}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "50px" }}>
        <Col>
          <Card className="cardShadow">
            <Card.Body>
              <Card.Title>Education Details</Card.Title>
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              <Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Table striped bordered>
                      <thead className="tableHead">
                        <tr>
                          <th>Education</th>
                          <th>Board / University</th>
                          <th>Marks</th>
                          <th>Passing Year</th>
                          <th>Stream</th>
                          <th>Grade</th>
                        </tr>
                      </thead>
                      <tbody className="tableBody">
                        {(() => {
                          if (user.edu1 !== null) {
                            return (
                              <tr>
                                <td>{user.edu1}</td>
                                <td>{user.edu1Board}</td>
                                <td>{user.edu1Marks}</td>
                                <td>{user.edu1PassYear}</td>
                                <td>{user.edu1Stream}</td>
                                <td>{user.edu1Grade}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (user.edu2 !== null) {
                            return (
                              <tr>
                                <td>{user.edu2}</td>
                                <td>{user.edu2Board}</td>
                                <td>{user.edu2Marks}</td>
                                <td>{user.edu2PassYear}</td>
                                <td>{user.edu2Stream}</td>
                                <td>{user.edu2Grade}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (user.edu3 !== null) {
                            return (
                              <tr>
                                <td>{user.edu3}</td>
                                <td>{user.edu3Board}</td>
                                <td>{user.edu3Marks}</td>
                                <td>{user.edu3PassYear}</td>
                                <td>{user.edu3Stream}</td>
                                <td>{user.edu3Grade}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (user.edu4 !== null) {
                            return (
                              <tr>
                                <td>{user.edu4}</td>
                                <td>{user.edu4Board}</td>
                                <td>{user.edu4Marks}</td>
                                <td>{user.edu4PassYear}</td>
                                <td>{user.edu4Stream}</td>
                                <td>{user.edu4Grade}</td>
                              </tr>
                            );
                          }
                        })()}
                      </tbody>
                    </Table>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Title>Work Experience</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Table striped bordered>
                      <thead className="tableHead">
                        <tr>
                          <th>Employer</th>
                          <th>From</th>
                          <th>To</th>
                          <th>Exp in Years</th>
                        </tr>
                      </thead>
                      <tbody className="tableBody">
                        {(() => {
                          if (user.exp1Employer !== null) {
                            return (
                              <tr>
                                <td>{user.exp1Employer}</td>
                                <td>{user.exp1FromDate}</td>
                                <td>{user.exp1ToDate}</td>
                                <td>{user.exp1Years}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (user.exp2Employer !== null) {
                            return (
                              <tr>
                                <td>{user.exp2Employer}</td>
                                <td>{user.exp2FromDate}</td>
                                <td>{user.exp2ToDate}</td>
                                <td>{user.exp2Years}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (user.exp3Employer !== null) {
                            return (
                              <tr>
                                <td>{user.exp3Employer}</td>
                                <td>{user.exp3FromDate}</td>
                                <td>{user.exp3ToDate}</td>
                                <td>{user.exp3Years}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (user.exp4Employer !== null) {
                            return (
                              <tr>
                                <td>{user.exp4Employer}</td>
                                <td>{user.exp4FromDate}</td>
                                <td>{user.exp4ToDate}</td>
                                <td>{user.exp4Years}</td>
                              </tr>
                            );
                          }
                        })()}
                      </tbody>
                    </Table>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: "40px", textAlign: "center" }}>
        <Col>
          <Button
            style={{ width: "15rem", height: "5rem" }}
            className="btnSecondary"
            onClick={(e) => navigate("/offer-letter")}
          >
            Offer Letter
          </Button>
        </Col>
        <Col>
          <Button
            style={{ width: "15rem", height: "5rem" }}
            className="btnSecondary"
            onClick={(e) => navigate("/req-leave")}
          >
            Request Leave
          </Button>
        </Col>
        <Col>
          <Button
            style={{ width: "15rem", height: "5rem" }}
            className="btnSecondary"
            onClick={(e) => navigate("/pay-slip")}
          >
            Pay Slip
          </Button>
        </Col>
        <Col>
          <Button
            style={{ width: "15rem", height: "5rem" }}
            className="btnSecondary"
            onClick={(e) => navigate("/relieving-letter")}
          >
            Relieving Letter
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default EmpInfo;
