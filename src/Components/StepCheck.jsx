import React from "react";
import { Row, Col } from 'react-bootstrap'; // Import Row and Col components
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

function StepCheck() {
  return (
    <div style={{ backgroundColor: "#D7F1F6" }} id="Services">
      <div className="container p-5">
        <h3 className="text-center mt-5">
          <b>Our Services</b>
        </h3>
        <h2 className="text-center mb-5">
          <b>
            4 step easy we care your <br /> health
          </b>
        </h2>
        <Row className="justify-content-between my-5 pt-5">
          <Col xs={12} sm={12} lg={4} className="d-flex justify-content-center mb-4">
            <img src={require("./Images/choose date.png")} alt="Date" className="img-fluid" />
          </Col>
          <Col xs={12} sm={12} lg={4} className="d-flex justify-content-center mb-4">
            <img src={require("./Images/choose poli.png")} alt="Poli" className="img-fluid" />
          </Col>
          <Col xs={12} sm={12} lg={4} className="d-flex justify-content-center">
            <img src={require("./Images/choose doctor.png")} alt="Doctor" className="img-fluid" />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default StepCheck;
