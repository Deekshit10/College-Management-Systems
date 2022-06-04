import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React from "react";
import { useGlobalContext } from "./context";

const Navigate = () => {
  const { studVal } = useGlobalContext();
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/api/students">
              StudentList{" "}
              <span style={{ background: "purple" }}>{studVal.length}</span>
            </Nav.Link>
            <Nav.Link href="/add">Addstudent</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigate;
