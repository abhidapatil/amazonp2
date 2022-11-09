import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container fluid>
        <Navbar.Brand>
        <img
              src="data:image/png;base64,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"
              width="100"
              height="50"
              className="d-inline-block align-top"/>
           </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Select Address</Nav.Link>
            <NavDropdown title="English" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Marathi</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Hindi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Kanada
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#">
              Return & orders
            </Nav.Link>
            <Nav.Link href="#action2">Cart</Nav.Link>
            <Nav.Link href="#action2">My Account</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



