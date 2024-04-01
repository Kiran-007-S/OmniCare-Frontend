import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
  } from 'mdb-react-ui-kit';


function Navbar() {
    const [openBasic, setOpenBasic] = useState(false);

    return (
      <MDBNavbar expand='lg' bgColor='light' className="fixed-top">
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <i class="fa-solid fa-house-medical"></i>&nbsp;&nbsp;
           <b>OmniCare</b>
          </MDBNavbarBrand>
  
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
  
          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav className='d-flex justify-content-center mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink href='/#Home'className='mx-3 fs-4 fw-bold'>Home</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/#About' className='mx-3 fs-4 fw-bold'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/#Services' className='mx-3 fs-4 fw-bold'>Services</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='/#Doctors' className='mx-3 fs-4 fw-bold'>Doctors</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
  
            <form className=' input-group w-auto'>
              <MDBBtn style={{backgroundColor:'white' , color:'#0099FF',borderBlockColor:'#0099FF'}}>Login</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
}

export default Navbar