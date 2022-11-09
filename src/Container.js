import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Container() {
  return (
    <Container>
      
      <Row>
        <Col>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_03_high._SY232_CB605507208_.jpg" />
        </Col>
        <Col>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_04_high._SY232_CB605507208_.jpg"/>
        </Col>
        <Col>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Furniture/furniture_node_1/372_232_02_high._SY232_CB605507208_.jpg"/>
        </Col>
      </Row>
    </Container>
  );
}

