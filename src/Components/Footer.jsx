import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import { Button, InputGroup, Form } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <MDBFooter className="text-black text-center text-md-start">
        <MDBContainer className="p-4">
          <MDBRow className="container">
            <MDBCol lg="4" md="12" className="mb-4 mb-md-0">
              <h5 className="text-uppercase mt-4">Omini Care</h5>
              <p className="mb-5">
                Our hospital tries to answer the challenges in the community's
                need for quality dental health services but still affordable by
                a wide audience.
              </p>
              <div className="mt-5">
                <a href="www.facebook.com" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="www.twitter.com" className="me-4 text-reset">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="www.google.com" className="me-4 text-reset">
                  <MDBIcon fab icon="google" />
                </a>
                <a href="www.instagram.com" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="www.linkedin.com" className="me-4 text-reset">
                  <MDBIcon fab icon="linkedin" />
                </a>
              </div>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4 mb-md-0 d-flex justify-content-center">
              <ul className="list-unstyled text-black text-center">
                <li className="my-4">
                  <a href="#About" className="text-black text-decoration-none">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#Home" className="text-black text-decoration-none">
                    Home
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#Services" className="text-black text-decoration-none">
                    Services
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#Doctors" className="text-black text-decoration-none">
                    Doctors
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="6" className="mb-4 mb-md-0 d-flex justify-content-center">
              <div>
                <h5 className="text-uppercase my-4 font-weight-bold">
                  Get medical checkup Vouchers
                </h5>
                <ul className="list-unstyled">
                  <li className="mb-4">
                    <InputGroup>
                      <Form.Control
                        placeholder="Enter Your Email"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        className="bg-dark p-4"
                        style={{ width: "100%" }}
                      />
                    </InputGroup>
                  </li>
                  <li className="mb-4">
                    <Button
                      variant="primary"
                      style={{
                        color: "white",
                        textTransform: "capitalize",
                        fontSize: "15px",
                      }}
                    >
                      Subscribe Us
                    </Button>
                  </li>
                </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="text-center p-3">
          © 2024 Copyright:
          <a className="text-black text-decoration-none" href="w">
            omnicare.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
