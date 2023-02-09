import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../_actions";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  const [images, setImages] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication.user);
  const signoutSession = () => {
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    dispatch(userActions.login({}));
  };

  const fetchEvents = async () => {
    const response = await axios.get(`/api/images/`);
    setImages(response.data);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Navbar fixed="top" collapseOnSelect className="navbarBg" expand="sg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt="Windzard Technologies Private Limited"
                src="/images/logo.png"
                height="95"
                className="d-inline-block align-top brandImage"
              />{" "}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Offcanvas
            scroll={true}
            backdrop={true}
            id={`offcanvasNavbar-expand-sg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sg`}
          >
            <Offcanvas.Body>
              <Nav navbarScroll className="ms-auto">
                <Offcanvas.Header closeButton closeVariant="white">
                  <Navbar.Brand>
                    <img
                      alt="Windzard Technologies Private Limited"
                      src="/images/logo.png"
                      height="65"
                      className="d-inline-block align-top brandImage"
                    />
                  </Navbar.Brand>
                </Offcanvas.Header>
                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>
                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined"
                  ) {
                    return (
                      <LinkContainer to="/">
                        <Nav.Link onClick={signoutSession}>Sign Out</Nav.Link>
                      </LinkContainer>
                    );
                  } else
                    return (
                      <LinkContainer to="/login">
                        <Nav.Link>Sign In</Nav.Link>
                      </LinkContainer>
                    );
                })()}
                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "admin"
                  ) {
                    return (
                      <Offcanvas.Header>
                        <Offcanvas.Title>Admin</Offcanvas.Title>
                      </Offcanvas.Header>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "hr"
                  ) {
                    return (
                      <Offcanvas.Header>
                        <Offcanvas.Title>Human Resource</Offcanvas.Title>
                      </Offcanvas.Header>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "admin"
                  ) {
                    return (
                      <LinkContainer to="/add-event">
                        <Nav.Link>Add Event</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "admin"
                  ) {
                    return (
                      <LinkContainer to="/add-holiday">
                        <Nav.Link>Add Holidays</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "admin"
                  ) {
                    return (
                      <LinkContainer to="/form/create-user">
                        <Nav.Link>Create User</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "admin" || user.accessGroup === "hr")
                  ) {
                    return (
                      <LinkContainer to="/admin/emp-attendance-report">
                        <Nav.Link>Employee Attendance Report</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "admin" || user.accessGroup === "hr")
                  ) {
                    return (
                      <LinkContainer to="/form/relieving-letter">
                        <Nav.Link>Generate Relieving Letter </Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "admin" || user.accessGroup === "hr")
                  ) {
                    return (
                      <LinkContainer to="/form/intern-complete">
                        <Nav.Link>Generate Internship Complete </Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "admin" || user.accessGroup === "hr")
                  ) {
                    return (
                      <LinkContainer to="/form/pay-slip">
                        <Nav.Link>Generate Pay Slip</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "employee"
                  ) {
                    return (
                      <Offcanvas.Header>
                        <Offcanvas.Title>Employee</Offcanvas.Title>
                      </Offcanvas.Header>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "intern"
                  ) {
                    return (
                      <Offcanvas.Header>
                        <Offcanvas.Title>Intern</Offcanvas.Title>
                      </Offcanvas.Header>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "employee" ||
                      user.accessGroup === "intern")
                  ) {
                    return (
                      <LinkContainer to="/emp-info">
                        <Nav.Link>Employee profile</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "employee" ||
                      user.accessGroup === "intern")
                  ) {
                    return (
                      <LinkContainer to="/attendance-report">
                        <Nav.Link>My Attendance Report</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "employee" ||
                      user.accessGroup === "intern")
                  ) {
                    return (
                      <LinkContainer to="/req-leave">
                        <Nav.Link>Request Leave</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    (user.accessGroup === "employee" ||
                      user.accessGroup === "intern")
                  ) {
                    return (
                      <LinkContainer to="/pay-slip">
                        <Nav.Link>Pay Slip</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "employee"
                  ) {
                    return (
                      <LinkContainer to="/offer-letter">
                        <Nav.Link>Offer letter</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "intern"
                  ) {
                    return (
                      <LinkContainer to="/intern-letter">
                        <Nav.Link>Internship Offer Letter</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "intern"
                  ) {
                    return (
                      <LinkContainer to="/intern-complete">
                        <Nav.Link>Internship Compelete Letter</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}

                {(() => {
                  if (
                    typeof user !== "undefined" &&
                    typeof user.employeeId !== "undefined" &&
                    user.accessGroup === "employee"
                  ) {
                    return (
                      <LinkContainer to="/relieving-letter">
                        <Nav.Link>Relieving Letter</Nav.Link>
                      </LinkContainer>
                    );
                  }
                })()}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
