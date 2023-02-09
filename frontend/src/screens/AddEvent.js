import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import SecurePageSection from "../SecurePageSection";

function AddEvent() {
  const userID = useSelector((state) => state.authentication.user.user_id);
  const userToken = localStorage.getItem("token");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [meetForhr, setMeetForHr] = useState(false);
  const [meetForIT, setMeetForIT] = useState(false);
  const [meetForSales, setMeetForSales] = useState(false);
  const [meetForAccFin, setMeetForAccFin] = useState(false);
  const [meetForBusiness, setMeetForBusiness] = useState(false);

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
        "/api/upcoming-event/",
        {
          user: `${userID}`,
          date: `${date}`,
          title: `${title}`,
          body: `${body}`,
          meetForhr: `${meetForhr}`,
          meetForIT: `${meetForIT}`,
          meetForSales: `${meetForSales}`,
          meetForAccFin: `${meetForAccFin}`,
          meetForBusiness: `${meetForBusiness}`,
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
              <h2>Add Upcoming Events</h2>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={4} xs={12}>
              <Form.Group controlId="form">
                <Form.Label>Event Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={4} xs={12}>
              <Form.Group controlId="form">
                <Form.Label>Event Time</Form.Label>
                <Form.Control
                  type="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={4} xs={12}>
              <Form.Group controlId="form">
                <Form.Label>Event Title</Form.Label>
                <Form.Control
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12} xs={12}>
              <Form.Group controlId="form">
                <Form.Label>Event Body</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={12} xs={12}>
              <Form.Group controlId="form">
                <Form.Label>Event For</Form.Label>
                {["checkbox"].map((type) => (
                  <div key={`{type}`} className="mb-3">
                    <Row>
                      <Col md={12} xs={12}>
                        <Form.Check
                          label="HR"
                          name="Human Resource"
                          type={type}
                          id={`{type}-1`}
                          onChange={(e) => setMeetForHr(e.target.name)}
                        />
                      </Col>
                      <Col md={12} xs={12}>
                        <Form.Check
                          label="IT"
                          name="IT"
                          type={type}
                          id={`{type}-2`}
                          onChange={(e) => setMeetForIT(e.target.name)}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12} xs={12}>
                        <Form.Check
                          label="Sales"
                          name="Sales"
                          type={type}
                          id={`{type}-3`}
                          onChange={(e) => setMeetForSales(e.target.name)}
                        />
                      </Col>
                      <Col md={12} xs={12}>
                        <Form.Check
                          label="Accounting & Finance"
                          name="Accounting & Finance"
                          type={type}
                          id={`{type}-4`}
                          onChange={(e) => setMeetForAccFin(e.target.name)}
                        />
                      </Col>
                    </Row>
                    <Form.Check
                      label="Business Developers"
                      name="Business Developers"
                      type={type}
                      id={`{type}-5`}
                      onChange={(e) => setMeetForBusiness(e.target.name)}
                    />
                  </div>
                ))}
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

export default AddEvent;
