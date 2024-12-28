import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer bg-dark text-light">
      <Container>
        <Row>
          <Col md={4} className="text-center">
            <h5>Contact Us</h5>
            <p>
              <FaEnvelope /> Email: info@istalazaret.com
            </p>
            <p>
              <FaPhone /> Phone: +212 6 12 34 56 78
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="icon" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon" />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <h5>Location</h5>
            <p>ISTA Lazaret, Oujda, Morocco</p>
          </Col>
        </Row>
        <div className="text-center mt-3">
          <p>&copy; 2024 ISTA Lazaret. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
