import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const CreateUserPg1 = ({ nextStep, handleFormData, values }) => {
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
          <Col xs={12}>
            <h2>Create User</h2>
          </Col>
        </Row>
        <Row className="formSectionHeader">
          <h3>Personal Details</h3>
        </Row>
        <Row className="mb-3">
          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="first_name"
                defaultValue={values.first_name}
                type="text"
                onChange={handleFormData("first_name")}
              />
            </Form.Group>
          </Col>

          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="last_name"
                defaultValue={values.last_name}
                type="text"
                onChange={handleFormData("last_name")}
              />
            </Form.Group>
          </Col>

          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                name="gender"
                defaultValue={values.gender}
                type="text"
                onChange={handleFormData("gender")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={3} xs={12}>
            <Form.Group>
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control
                name="dob"
                defaultValue={values.dob}
                type="date"
                onChange={handleFormData("dob")}
              />
            </Form.Group>
          </Col>

          <Col lg={3} xs={12}>
            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control
                name="age"
                defaultValue={values.age}
                type="number"
                onChange={handleFormData("age")}
              />
            </Form.Group>
          </Col>

          <Col lg={3} xs={12}>
            <Form.Group>
              <Form.Label>Blood Group</Form.Label>
              <Form.Control
                name="bldGrp"
                defaultValue={values.bldGrp}
                type="text"
                onChange={handleFormData("bldGrp")}
              />
            </Form.Group>
          </Col>

          <Col lg={3} xs={12}>
            <Form.Group>
              <Form.Label>Marital Status</Form.Label>
              <Form.Control
                name="marital"
                defaultValue={values.marital}
                type="text"
                onChange={handleFormData("marital")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Email Id</Form.Label>
              <Form.Control
                name="email"
                defaultValue={values.email}
                type="text"
                onChange={handleFormData("email")}
              />
            </Form.Group>
          </Col>

          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                name="mobile"
                defaultValue={values.mobile}
                type="text"
                onChange={handleFormData("mobile")}
              />
            </Form.Group>
          </Col>

          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Alternate Mobile Number</Form.Label>
              <Form.Control
                name="altMobile"
                defaultValue={values.altMobile}
                type="text"
                onChange={handleFormData("altMobile")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={6} xs={12}>
            <Form.Group>
              <Form.Label>Religion</Form.Label>
              <Form.Control
                name="religion"
                defaultValue={values.religion}
                type="text"
                onChange={handleFormData("religion")}
              />
            </Form.Group>
          </Col>

          <Col lg={6} xs={12}>
            <Form.Group>
              <Form.Label>Aadhar Number</Form.Label>
              <Form.Control
                name="aadhar"
                defaultValue={values.aadhar}
                type="text"
                onChange={handleFormData("aadhar")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={12} xs={12}>
            <Form.Group>
              <Form.Label>Permanant Address</Form.Label>
              <Form.Control
                name="address"
                defaultValue={values.address}
                type="text"
                as="textarea"
                onChange={handleFormData("address")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Father's Name</Form.Label>
              <Form.Control
                name="fatherName"
                defaultValue={values.fatherName}
                type="text"
                onChange={handleFormData("fatherName")}
              />
            </Form.Group>
          </Col>
          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Mother's Name</Form.Label>
              <Form.Control
                name="motherName"
                defaultValue={values.motherName}
                type="text"
                onChange={handleFormData("motherName")}
              />
            </Form.Group>
          </Col>
          <Col lg={4} xs={12}>
            <Form.Group>
              <Form.Label>Husband/Wife's Name</Form.Label>
              <Form.Control
                name="spouseName"
                defaultValue={values.spouseName}
                type="text"
                onChange={handleFormData("spouseName")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button className="btn-outline" type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default CreateUserPg1;
