import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  return (
    <div className="hero-section" id="Home">
      <Container className='mt-5'>
        <Row className="justify-content-center align-items-center p-3">
          <Col sm={6}>
            <h1 className="mb-4">We Care About Your Health</h1>
            <p className="mb-4">
              Check now your health with our professional doctors and modern facilities services.
            </p>
            <button className="btn btn-primary">Check Now</button>
          </Col>
          <Col sm={6} className="text-center">
            <img src={require('./Images/Image Hero.png')} alt="Omini_care" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
