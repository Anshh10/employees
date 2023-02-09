import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function NoAccess() {
  return (
    <div>
      <Row className="justify-content-center">
        <Col style={{ textAlign: "center" }} className="col-md-auto">
          <h2>Sorry! you do not have access to this page</h2>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ marginTop: "1em" }}>
        <Col className="col-md-auto">
          <Link to="/">
            <Button className="btn--three">Home</Button>
          </Link>
        </Col>
        <Col className="col-md-auto">
          <Link to="/login">
            <Button className="btn--three">Sign In</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default NoAccess;
