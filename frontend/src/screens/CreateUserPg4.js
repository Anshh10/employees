import React from "react";
import axios from "axios";
import {
  Row,
  Col,
  Form,
  Button,
  Card,
  ListGroup,
  Table,
} from "react-bootstrap";

const CreatevaluesPg4 = ({ prevStep, values }) => {
  async function FormSubmit(event) {
    // console.log(values);
    event.preventDefault();

    await axios({
      method: "post",
      url: "/user/create/",
      data: values,
    })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div>
      <Row>
        <h4>
          {values.first_name} {values.last_name} Details Review
        </h4>
      </Row>
      <Row>
        <h4>Login Details</h4>
      </Row>
      <Row style={{ margin: "0", padding: "0" }}>
        <Col md={2} xs={6}>
          <Form.Label>Employee Id</Form.Label>
        </Col>
        <Col md={4} xs={6}>
          <Form.Control
            disabled
            type="text"
            name="employeeId"
            value={values.employeeId}
          />
        </Col>
        <Col md={2} xs={6}>
          <Form.Label>Password</Form.Label>
        </Col>
        <Col md={4} xs={6}>
          <Form.Control
            disabled
            type="text"
            name="password"
            value={values.password}
          />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col lg={6} xs={12}>
          <Card
            className="cardShadow"
            style={{
              minHeight: "65rem",
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
                          value={values.gender}
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
                          value={values.dob}
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
                          value={values.age}
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
                          value={values.bldGrp}
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
                          value={values.marital}
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
                          value={values.mobile}
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
                          value={values.altMobile}
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
                          value={values.email}
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
                          value={values.religion}
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
                          value={values.aadhar}
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
                          value={values.panNum}
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
                          value={values.address}
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
                          value={values.fatherName}
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
                          value={values.motherName}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
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
                          value={values.spouseName}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} xs={12}>
          <Card
            className="cardShadow"
            style={{
              minHeight: "65rem",
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
                          value={values.bankName}
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
                          value={values.bankName}
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
                          value={values.bankAccName}
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
                          value={values.bankAccNum}
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
                          value={values.bankIfsc}
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
                          value={values.bankBranch}
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
                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Date of Joining</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="joinDate"
                          value={values.joinDate}
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
                          value={values.jobRole}
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
                          value={values.jobType}
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
                          value={values.shiftTime}
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
                          value={values.company}
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
                          value={values.branch}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Access</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="accessGroup"
                          value={values.accessGroup}
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
                          value={values.salary}
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
                          value={values.pfNum}
                        />
                      </Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item style={{ padding: "10px 0" }}>
                    <Row style={{ margin: "0", padding: "0" }}>
                      <Col md={4} xs={12}>
                        <Form.Label>Sign</Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          disabled
                          type="text"
                          name="signBy"
                          value={values.signBy}
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
                          if (values.edu1 !== "") {
                            return (
                              <tr>
                                <td>{values.edu1}</td>
                                <td>{values.edu1Board}</td>
                                <td>{values.edu1Marks}</td>
                                <td>{values.edu1PassYear}</td>
                                <td>{values.edu1Stream}</td>
                                <td>{values.edu1Grade}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (values.edu2 !== "") {
                            return (
                              <tr>
                                <td>{values.edu2}</td>
                                <td>{values.edu2Board}</td>
                                <td>{values.edu2Marks}</td>
                                <td>{values.edu2PassYear}</td>
                                <td>{values.edu2Stream}</td>
                                <td>{values.edu2Grade}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (values.edu3 !== "") {
                            return (
                              <tr>
                                <td>{values.edu3}</td>
                                <td>{values.edu3Board}</td>
                                <td>{values.edu3Marks}</td>
                                <td>{values.edu3PassYear}</td>
                                <td>{values.edu3Stream}</td>
                                <td>{values.edu3Grade}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (values.edu4 !== "") {
                            return (
                              <tr>
                                <td>{values.edu4}</td>
                                <td>{values.edu4Board}</td>
                                <td>{values.edu4Marks}</td>
                                <td>{values.edu4PassYear}</td>
                                <td>{values.edu4Stream}</td>
                                <td>{values.edu4Grade}</td>
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
                          if (values.exp1Employer !== "") {
                            return (
                              <tr>
                                <td>{values.exp1Employer}</td>
                                <td>{values.exp1FromDate}</td>
                                <td>{values.exp1ToDate}</td>
                                <td>{values.exp1Years}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (values.exp2Employer !== "") {
                            return (
                              <tr>
                                <td>{values.exp2Employer}</td>
                                <td>{values.exp2FromDate}</td>
                                <td>{values.exp2ToDate}</td>
                                <td>{values.exp2Years}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (values.exp3Employer !== "") {
                            return (
                              <tr>
                                <td>{values.exp3Employer}</td>
                                <td>{values.exp3FromDate}</td>
                                <td>{values.exp3ToDate}</td>
                                <td>{values.exp3Years}</td>
                              </tr>
                            );
                          }
                        })()}
                        {(() => {
                          if (values.exp4Employer !== "") {
                            return (
                              <tr>
                                <td>{values.exp4Employer}</td>
                                <td>{values.exp4FromDate}</td>
                                <td>{values.exp4ToDate}</td>
                                <td>{values.exp4Years}</td>
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

      <Row style={{ marginTop: "20px" }}>
        <Col xs={2} style={{ textAlign: "left" }}>
          <Button className="btn-outline" onClick={prevStep}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Previous
          </Button>
        </Col>
        <Col xs={2} style={{ textAlign: "left" }}>
          <Button onClick={FormSubmit} onSubmit={FormSubmit}>
            Create
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CreatevaluesPg4;
