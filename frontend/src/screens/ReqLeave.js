import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import SecurePageSection from "../SecurePageSection";

function ReqLeave() {
  const userData = useSelector((state) => state.authentication.user);
  const userToken = localStorage.getItem("token");
  const userName = userData.first_name + " " + userData.last_name;
  const [stDate, setStDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [approval, setApproval] = useState("");

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  async function FormSubmit(event) {
    event.preventDefault();
    console.log(userName);

    await axios
      .post(
        "/api/leave-request/",
        {
          user: `${userData.user_id}`,
          userName: `${userName}`,
          stDate: `${stDate}`,
          endDate: `${endDate}`,
          reason: `${reason}`,
          approval: `${approval}`,
        },
        config
      )
      .then(function (response) {})
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
            <Col md={8}>
              <h2>Request Leave</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="form">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  name="stDate"
                  value={stDate}
                  onChange={(e) => setStDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="form">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col>
              <Form.Group controlId="form">
                <Form.Label>Reason For Leave</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
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
      </Container>
    </div>
  );
}

export default ReqLeave;
