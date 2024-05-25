// Create a new file named Footer.js in the same directory as FoodItems.jsx
// File path: ./src/components/Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-4">
      <Container>
        <Row className="py-4">
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Phone: (123) 456-7890
              <br />
              Email: info@foodstore.com
            </p>
          </Col>
          <Col md={4}>
            <h5>Address</h5>
            <p>
              123 Food Street
              <br />
              Food City, FC 12345
            </p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <p>
              <a href="#" className="text-white">
                Facebook
              </a>
              <br />
              <a href="#" className="text-white">
                Instagram
              </a>
              <br />
              <a href="#" className="text-white">
                Twitter
              </a>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-2">
            <small>&copy; 2024 Food Store. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
