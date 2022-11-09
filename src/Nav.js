import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function ColorSchemesExample() {
  return (
   
      <Navbar bg="dark" variant="dark">
        <Container>
         
          <Nav className="me-auto">
            <Nav.Link href="#home">Best Sallers</Nav.Link>
            <Nav.Link href="#features">Today's Deals</Nav.Link>
            <Nav.Link href="#pricing">Mobiles</Nav.Link>
            <Nav.Link href="#pricing">Customer Services</Nav.Link>
            <Nav.Link href="#pricing">Electonics</Nav.Link>
            <Nav.Link href="#pricing">Homw & Kiteches</Nav.Link>
            <Nav.Link href="#pricing">Fashion</Nav.Link>
          </Nav>

        </Container>
      </Navbar>
      );
    }
    