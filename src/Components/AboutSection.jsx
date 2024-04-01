import React from 'react';
import { Row, Col } from 'react-bootstrap'; // Import Row and Col components
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutSection() {
  return (
    <div id='About'>
        <div className="Container my-5">
            <Row>
                <Col sm={6} className='p-5'>
                    <img src={require('./Images/About_us.png')} alt="About" className="img-fluid"/>
                </Col>
                <Col sm={6} className="my-auto p-5">
                    <h3>About Us</h3>
                    <h1>We Help Your Health</h1>
                    <p>This profile describes the activities of health services and medical support as well as the facilities 
                      and conditions of the General Hospital which is reflected in the general public served from all groups, religions 
                      and beliefs, ethnicity and the level and frequency of bed occupancy which continues to increase significantly.</p>
                    <button className="btn" style={{backgroundColor:'#0099FF' , color:'white'}}>More About Us</button>  
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default AboutSection;
