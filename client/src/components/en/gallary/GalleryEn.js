import React from 'react';
import Footer from '../homepage/Footer';
import '../../../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../img/garden.png';
import Gallery from "./Gallery"



const GalleryEn = () => {
  return (
    <div>
     <Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Brand href="#home"><img src={logo} alt="" width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-left">
          <Nav className="ml-auto">
            <Nav.Link href="/en" className="mx-4">Home</Nav.Link>
            <Nav.Link href="/en/about" className="mx-4">About Us</Nav.Link>
            <Nav.Link href="/en/gallery" className="mx-4 active">Gallery</Nav.Link>
            <Nav.Link href="/en/services" className="mx-4">Services</Nav.Link>
            <Nav.Link href="/en/contact " className="mx-4">Contact Us</Nav.Link>
            <Nav.Link href="/ar" className="mx-4">AR</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
<Gallery/>
<div className="line"></div>
    
      <Footer />
    </div>
  );
};

export default GalleryEn;
