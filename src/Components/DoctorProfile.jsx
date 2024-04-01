import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Modal from "react-bootstrap/Modal";
import Rating from "@mui/material/Rating";

function DoctorProfile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  console.log(id);

  const base_url = "https://omnicare-backend.onrender.com/doctors";
  const [Doctordetails, setDoctordetails] = useState();

  const fetchdata = async () => {
    const result = await axios.get(`${base_url}/${id}`);
    console.log(result);
    setDoctordetails(result.data);
  };

  useEffect(() => {
    fetchdata();
  }, [ ]); // eslint-disable-next-line react-hooks/exhaustive-deps

  console.log(Doctordetails);

  return (
    <div className="py-5">
      {Doctordetails ? (
        <div
          style={{ backgroundColor: "#D7F1F6", width: "100%", height: "50em" }}
        >
          <div className="container">
            <h1 className="pt-5 text-center">
              <i class="fa-solid fa-hospital fa-2x"></i>&nbsp;&nbsp;
              {Doctordetails.hospital}
            </h1>
            <h2 className="py-5 ">
              <i class="fa-solid fa-user-doctor fa-2x"></i>&nbsp;&nbsp;{" "}
              {Doctordetails.name} : {Doctordetails.specialty}
            </h2>
            <div className="row ">
              <div className="col">
                <h4 className="p-1">
                  <i class="fa-solid fa-map-location-dot fa-2x"></i>&nbsp;&nbsp;
                  {Doctordetails.address}
                </h4>
                <h5 className="p-1">
                  <i class="fa-solid fa-phone fa-2x"></i>&nbsp;&nbsp;
                  {Doctordetails.phone}
                </h5>
                <h5 className="p-1">
                  <i class="fa-solid fa-envelope fa-2x"></i>&nbsp;&nbsp;
                  {Doctordetails.email}
                </h5>
              </div>
              <div className="col">
                <h3 className="py-1">
                  <i class="fa-solid fa-calendar-days"></i>&nbsp;&nbsp;Available
                  Schedule{" "}
                </h3>
                {Doctordetails.available_days.map((day) => (
                  <h4 className="py-1">
                    {day} : {Doctordetails.available_hours}
                  </h4>
                ))}
              </div>
            </div>
            <div>
              <h3 className='py-5' variant="primary" onClick={handleShow}>
                Reviews : {Doctordetails.rating}&nbsp;<Rating
                          name="half-rating-read"
                          defaultValue={Doctordetails.rating}
                          precision={0.5}
                          readOnly
                        />
              </h3>
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title><h2>Comments</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {Doctordetails.reviews.map((item) => (
                    <div>
                      <h4>{item.patient_name}</h4>
                      <h5>{item.date}</h5>
                      <h5>
                        Rating : {item.rating}
                        <Rating
                          name="half-rating-read"
                          defaultValue={item.rating}
                          precision={0.5}
                          readOnly
                        />
                      </h5>
                      <p>{item.comments}</p>
                    </div>
                  ))}
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#D7F1F6", minHeight: "100vh" }}
        >
          <div>
            <h1>Loading......</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default DoctorProfile;
