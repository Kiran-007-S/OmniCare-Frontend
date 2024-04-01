import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
} from "mdb-react-ui-kit";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {Col , Button} from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function DoctorSection() {
  const base_url = "https://omnicare-backend.onrender.com/doctors";

  const [doctors, setdoctors] = useState([]);

  const fetchData = async () => {
    const result = await axios.get(base_url);
    console.log(result.data);
    setdoctors(result.data);
  };

  console.log(doctors);
  useEffect(() => {
    fetchData();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div id="Doctors">
      <div style={{
        padding:'100px 20px 100px 20px', backgroundColor: "#D7F1F6"
      }} >
      <h2 className="text-center">Available Doctors</h2>
      <h1 className="text-center">Vist Professional Specialists</h1>
    <Slider {...settings}>
    {doctors.map((item) => (
        <Col>
          <MDBCard style={{
        margin:'20px',
        boxShadow: '0 8px 8px rgba(0, 0, 0, 0.3)', 
      }}>
          <MDBCardHeader><h2>{item.hospital}</h2></MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle><h3>{item.name}</h3></MDBCardTitle>
            <MDBCardText><h4>{item.specialty}</h4></MDBCardText>
            <span>Phone No : {`${item.phone}`}</span>
            <Box style={{ display: "flex" , margin : '1rem'}} >
              <Box>Rating : </Box>
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
            </Box>
            <Link to={`/doctor/${item.id}`} className="btn btn-primary">View Details</Link>
          </MDBCardBody>
        </MDBCard>
        </Col>
      ))}
    </Slider>
      </div>
      <div style={{ backgroundColor: 'black', padding: '50px 0' }}>
      <div className="container d-flex pt-5 pb-2">
        <div className="col w-75">
          <h1 className="pb-5" style={{ color: 'white' }}>
            Let Consult Your Health with our Doctors
          </h1>
          <h4 className="pt-5" style={{ color: 'white' }}>
            We will provide you the best Professionals
          </h4>
        </div>
        <div className="col w-25 d-flex flex-column justify-content-end align-items-end pb-2">
          <Button variant="primary" style={{ color: 'white', textTransform: 'capitalize', fontSize: '20px' }}>
            Connect Us
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DoctorSection;
