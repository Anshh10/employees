import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userActions } from "../_actions";
import { useDispatch } from "react-redux";
import jwt from "jwt-decode";

function Login() {
  const dispatch = useDispatch();
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleEmployeeIdChange = (e) => {
    const { name, value } = e.target;
    setEmployeeId(value);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSubmitted(true);
    if (employeeId && password) {
      login(employeeId, password);
    }
  };

  async function login(employeeId, password) {
    let formField = new FormData();

    formField.append("employeeId", employeeId);
    formField.append("password", password);

    await axios({
      method: "post",
      url: "/user/login/jwt-token/",
      data: formField,
    })
      .then((res) => {
        const user = jwt(res.data.access);
        const token = res.data.access;
        sessionStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        dispatch(userActions.login(user));
        navigate("/");
      })
      .catch((err) => {
        console.log("LoginError", err);
        setErrorMsg("Invalid User Name and Password");
        alert(errorMsg);
      });
  }
  return (
    <div>
      <div className="login-box">
        <Container>
          <Row>
            <Col>
              <h2>Sign In</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className={
                    "user-box" + (submitted && !employeeId ? " has-error" : "")
                  }
                  controlId="formBasicEmail"
                >
                  <Form.Label className="customLabel">User name</Form.Label>
                  <Form.Control
                    type="text"
                    name="employeeId"
                    className="customInput"
                    placeholder="employeeId"
                    value={employeeId}
                    onChange={handleEmployeeIdChange}
                  />
                  {submitted && !employeeId && (
                    <div className="help-block">Username is required</div>
                  )}
                </Form.Group>

                <Form.Group
                  className={
                    "user-box" + (submitted && !password ? " has-error" : "")
                  }
                  controlId="formBasicPassword"
                >
                  <Form.Label className="customLabel">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    className="customInput"
                    placeholder="Enter your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {submitted && !password && (
                    <div className="help-block">Password is required</div>
                  )}
                </Form.Group>

                <Button className="btn--outline" type="submit">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </Button>
                <div className="has-error">
                  <div className="help-block">{errorMsg}</div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Login;
