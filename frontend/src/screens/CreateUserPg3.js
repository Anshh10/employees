import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const CreateUserPg3 = ({ nextStep, handleFormData, prevStep, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Row>
          <Col>
            <h2>Create User</h2>
          </Col>
        </Row>
        <Row className="formSectionHeader">
          <h3>Bank Details</h3>
        </Row>

        <Row className="mb-3">
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                name="bankName"
                defaultValue={values.bankName}
                type="text"
                onChange={handleFormData("bankName")}
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group>
              <Form.Label>Account Name</Form.Label>
              <Form.Control
                name="bankAccName"
                defaultValue={values.bankAccName}
                type="text"
                onChange={handleFormData("bankAccName")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                name="bankAccNum"
                defaultValue={values.bankAccNum}
                type="text"
                onChange={handleFormData("bankAccNum")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>IFS Code</Form.Label>
              <Form.Control
                name="bankIfsc"
                defaultValue={values.bankIfsc}
                type="text"
                onChange={handleFormData("bankIfsc")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Branch Name</Form.Label>
              <Form.Control
                name="bankBranch"
                defaultValue={values.bankBranch}
                type="text"
                onChange={handleFormData("bankBranch")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="formSectionHeader">
          <h3>Office Details</h3>
        </Row>

        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group>
              <Form.Label>Date of Joining</Form.Label>
              <Form.Control
                name="joinDate"
                defaultValue={values.joinDate}
                type="date"
                onChange={handleFormData("joinDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Designation</Form.Label>
              <Form.Control
                name="jobRole"
                defaultValue={values.jobRole}
                type="text"
                onChange={handleFormData("jobRole")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Job Type</Form.Label>
              <Form.Control
                name="jobType"
                defaultValue={values.jobType}
                type="text"
                onChange={handleFormData("jobType")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Working Hours</Form.Label>
              <Form.Control
                name="shiftTime"
                defaultValue={values.shiftTime}
                type="text"
                onChange={handleFormData("shiftTime")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group>
              <Form.Label>Employee ID</Form.Label>
              <Form.Control
                name="employeeId"
                defaultValue={values.employeeId}
                type="text"
                onChange={handleFormData("employeeId")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                defaultValue={values.password}
                type="text"
                onChange={handleFormData("password")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control
                name="company"
                defaultValue={values.company}
                type="text"
                onChange={handleFormData("company")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Branch</Form.Label>
              <Form.Control
                name="branch"
                defaultValue={values.branch}
                type="text"
                onChange={handleFormData("branch")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={6}>
            <Form.Group>
              <Form.Label>Access</Form.Label>
              <Form.Control
                name="accessGroup"
                defaultValue={values.accessGroup}
                type="text"
                onChange={handleFormData("accessGroup")}
              />
            </Form.Group>
          </Col>

          <Col lg={6}>
            <Form.Group>
              <Form.Label>Salary</Form.Label>
              <Form.Control
                name="salary"
                defaultValue={values.salary}
                type="text"
                onChange={handleFormData("salary")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>PF No.</Form.Label>
              <Form.Control
                name="pfNum"
                defaultValue={values.pfNum}
                type="text"
                onChange={handleFormData("pfNum")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>PAN No.</Form.Label>
              <Form.Control
                name="panNum"
                defaultValue={values.panNum}
                type="text"
                onChange={handleFormData("panNum")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Sign By</Form.Label>
              <Form.Control
                name="signBy"
                defaultValue={values.signBy}
                type="text"
                onChange={handleFormData("signBy")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button className="btn--outline" onClick={prevStep}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Previous
            </Button>
          </Col>
          <Col>
            <Button className="btn-outline" type="submit">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Next
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CreateUserPg3;
