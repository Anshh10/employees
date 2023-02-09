import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import SecurePageSection from "../SecurePageSection";

function AddHoliday() {
  const userID = useSelector((state) => state.authentication.user.user_id);
  const userToken = localStorage.getItem("token");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  async function FormSubmit(event) {
    event.preventDefault();

    await axios
      .post(
        "/api/holiday/",
        {
          user: `${userID}`,
          date: `${date}`,
          reason: `${reason}`,
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
      <SecurePageSection accessableUsers={"admin"} />
      <Container>
        <Form onSubmit={FormSubmit}>
          <Row>
            <Col md={12}>
              <h2>Add Holidays</h2>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6} xs={12}>
              <Form.Group controlId="form">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={6} xs={12}>
              <Form.Group controlId="form">
                <Form.Label>Reason</Form.Label>
                <Form.Control
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

export default AddHoliday;
