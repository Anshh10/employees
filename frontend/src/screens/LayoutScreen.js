import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <div>
        <div className="layout">
          <Container
            style={{
              minHeight: "100vh",
              paddingBottom: "2em",
              paddingTop: "10em",
            }}
          >
            <Outlet />
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
