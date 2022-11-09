import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/61aURrton0L._SX3000_.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/I/61fM2VzU9RL._SX3000_.jpg"/>
       </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/I/61VuJdpjvaL._SX3000_.jpg"/> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/I/71cp9PVuTfL._SX3000_.jpg"/> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://m.media-amazon.com/images/I/714mZ1peBIL._SX3000_.jpg"/> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://m.media-amazon.com/images/I/61-MMbp+W4L._SX3000_.jpg"/> 
      </Carousel.Item>
    </Carousel>
  );
}


