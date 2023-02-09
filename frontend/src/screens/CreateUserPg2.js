import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

// creating functional component ans getting props from app.js and destucturing them
const CreateUserPg2 = ({ nextStep, handleFormData, prevStep, values }) => {
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
          <h3>Education Details</h3>
        </Row>

        <Row>
          <h4>Education 1</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Education 1</Form.Label>
              <Form.Control
                name="edu1"
                defaultValue={values.edu1}
                type="text"
                placeholder="Education 1 Name"
                onChange={handleFormData("edu1")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Board/ University</Form.Label>
              <Form.Control
                name="edu1Board"
                defaultValue={values.edu1Board}
                type="text"
                placeholder="Education 1 Board/ University"
                onChange={handleFormData("edu1Board")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Stream</Form.Label>
              <Form.Control
                name="edu1Stream"
                defaultValue={values.edu1Stream}
                type="text"
                placeholder="Education 1 Stream"
                onChange={handleFormData("edu1Stream")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Marks</Form.Label>
              <Form.Control
                name="edu1Marks"
                defaultValue={values.edu1Marks}
                type="text"
                placeholder="Education 1 Marks"
                onChange={handleFormData("edu1Marks")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Passing Year</Form.Label>
              <Form.Control
                name="edu1PassYear"
                defaultValue={values.edu1PassYear}
                type="text"
                placeholder="Education 1 Passing Year"
                onChange={handleFormData("edu1PassYear")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Grade</Form.Label>
              <Form.Control
                name="edu1Grade"
                defaultValue={values.edu1Grade}
                type="text"
                placeholder="Education 1 Grade"
                onChange={handleFormData("edu1Grade")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h4>Education 2</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Education 2</Form.Label>
              <Form.Control
                name="edu2"
                defaultValue={values.edu2}
                type="text"
                placeholder="Education 2 Name"
                onChange={handleFormData("edu2")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Board/ University</Form.Label>
              <Form.Control
                name="edu2Board"
                defaultValue={values.edu2Board}
                type="text"
                placeholder="Education 2 Board/ University"
                onChange={handleFormData("edu2Board")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Stream</Form.Label>
              <Form.Control
                name="edu2Stream"
                defaultValue={values.edu2Stream}
                type="text"
                placeholder="Education 2 Stream"
                onChange={handleFormData("edu2Stream")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Marks</Form.Label>
              <Form.Control
                name="edu2Marks"
                defaultValue={values.edu2Marks}
                type="text"
                placeholder="Education 2 Marks"
                onChange={handleFormData("edu2Marks")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Passing Year</Form.Label>
              <Form.Control
                name="edu2PassYear"
                defaultValue={values.edu2PassYear}
                type="text"
                placeholder="Education 2 Passing Year"
                onChange={handleFormData("edu2PassYear")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Grade</Form.Label>
              <Form.Control
                name="edu2Grade"
                defaultValue={values.edu2Grade}
                type="text"
                placeholder="Education 2 Grade"
                onChange={handleFormData("edu2Grade")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h4>Education 3</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Education 3</Form.Label>
              <Form.Control
                name="edu3"
                defaultValue={values.edu3}
                type="text"
                placeholder="Education 3 Name"
                onChange={handleFormData("edu3")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Board/ University</Form.Label>
              <Form.Control
                name="edu3Board"
                defaultValue={values.edu3Board}
                type="text"
                placeholder="Education 3 Board/ University"
                onChange={handleFormData("edu3Board")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Stream</Form.Label>
              <Form.Control
                name="edu3Stream"
                defaultValue={values.edu3Stream}
                type="text"
                placeholder="Education 3 Stream"
                onChange={handleFormData("edu3Stream")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Marks</Form.Label>
              <Form.Control
                name="edu3Marks"
                defaultValue={values.edu3Marks}
                type="text"
                placeholder="Education 3 Marks"
                onChange={handleFormData("edu3Marks")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Passing Year</Form.Label>
              <Form.Control
                name="edu3PassYear"
                defaultValue={values.edu3PassYear}
                type="text"
                placeholder="Education 3 Passing Year"
                onChange={handleFormData("edu3PassYear")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Grade</Form.Label>
              <Form.Control
                name="edu3Grade"
                defaultValue={values.edu3Grade}
                type="text"
                placeholder="Education 3 Grade"
                onChange={handleFormData("edu3Grade")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h4>Education 4</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Education 4</Form.Label>
              <Form.Control
                name="edu4"
                defaultValue={values.edu4}
                type="text"
                placeholder="Education 4 Name"
                onChange={handleFormData("edu4")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Board/ University</Form.Label>
              <Form.Control
                name="edu4Board"
                defaultValue={values.edu4Board}
                type="text"
                placeholder="Education 4 Board/ University"
                onChange={handleFormData("edu4Board")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Stream</Form.Label>
              <Form.Control
                name="edu4Stream"
                defaultValue={values.edu4Stream}
                type="text"
                placeholder="Education 4 Stream"
                onChange={handleFormData("edu4Stream")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col lg={4}>
            <Form.Group>
              <Form.Label>Marks</Form.Label>
              <Form.Control
                name="edu4Marks"
                defaultValue={values.edu4Marks}
                type="text"
                placeholder="Education 4 Marks"
                onChange={handleFormData("edu4Marks")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Passing Year</Form.Label>
              <Form.Control
                name="edu4PassYear"
                defaultValue={values.edu4PassYear}
                type="text"
                placeholder="Education 4 Passing Year"
                onChange={handleFormData("edu4PassYear")}
              />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <Form.Group>
              <Form.Label>Grade</Form.Label>
              <Form.Control
                name="edu4Grade"
                defaultValue={values.edu4Grade}
                type="text"
                placeholder="Education 4 Grade"
                onChange={handleFormData("edu4Grade")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="formSectionHeader">
          <h3>Work Experience</h3>
        </Row>

        <Row>
          <h4>Experience 1</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                name="exp1Employer"
                defaultValue={values.exp1Employer}
                type="text"
                placeholder="Employer 1 Name"
                onChange={handleFormData("exp1Employer")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Control
                name="exp1FromDate"
                defaultValue={values.exp1FromDate}
                type="date"
                placeholder="Experience 1 From Date"
                onChange={handleFormData("exp1FromDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>To</Form.Label>
              <Form.Control
                name="exp1ToDate"
                defaultValue={values.exp1ToDate}
                type="date"
                placeholder="Experience 1 To Date"
                onChange={handleFormData("exp1ToDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                name="exp1Years"
                defaultValue={values.exp1Years}
                type="text"
                placeholder="Experience 1 Years"
                onChange={handleFormData("exp1Years")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h4>Experience 2</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                name="exp2Employer"
                defaultValue={values.exp2Employer}
                type="text"
                placeholder="Employer 2 Name"
                onChange={handleFormData("exp2Employer")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Control
                name="exp2FromDate"
                defaultValue={values.exp2FromDate}
                type="date"
                placeholder="Experience 2 From Date"
                onChange={handleFormData("exp2FromDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>To</Form.Label>
              <Form.Control
                name="exp2ToDate"
                defaultValue={values.exp2ToDate}
                type="date"
                placeholder="Experience 2 To Date"
                onChange={handleFormData("exp2ToDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                name="exp2Years"
                defaultValue={values.exp2Years}
                type="text"
                placeholder="Experience 2 Years"
                onChange={handleFormData("exp2Years")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h4>Experience 3</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                name="exp3Employer"
                defaultValue={values.exp3Employer}
                type="text"
                placeholder="Employer 3 Name"
                onChange={handleFormData("exp3Employer")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Control
                name="exp3FromDate"
                defaultValue={values.exp3FromDate}
                type="date"
                placeholder="Experience 3 From Date"
                onChange={handleFormData("exp3FromDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>To</Form.Label>
              <Form.Control
                name="exp3ToDate"
                defaultValue={values.exp3ToDate}
                type="date"
                placeholder="Experience 3 To Date"
                onChange={handleFormData("exp3ToDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                name="exp3Years"
                defaultValue={values.exp3Years}
                type="text"
                placeholder="Experience 3 Years"
                onChange={handleFormData("exp3Years")}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <h4>Experience 4</h4>
        </Row>

        <Row className="mb-3">
          <Col lg={3}>
            <Form.Group>
              <Form.Label>Employer</Form.Label>
              <Form.Control
                name="exp4Employer"
                defaultValue={values.exp4Employer}
                type="text"
                placeholder="Employer 4 Name"
                onChange={handleFormData("exp4Employer")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Control
                name="exp4FromDate"
                defaultValue={values.exp4FromDate}
                type="date"
                placeholder="Experience 4 From Date"
                onChange={handleFormData("exp4FromDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>To</Form.Label>
              <Form.Control
                name="exp4ToDate"
                defaultValue={values.exp4ToDate}
                type="date"
                placeholder="Experience 4 To Date"
                onChange={handleFormData("exp4ToDate")}
              />
            </Form.Group>
          </Col>

          <Col lg={3}>
            <Form.Group>
              <Form.Label>Years of Experience</Form.Label>
              <Form.Control
                name="exp4Years"
                defaultValue={values.exp4Years}
                type="text"
                placeholder="Experience 4 Years"
                onChange={handleFormData("exp4Years")}
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

export default CreateUserPg2;
