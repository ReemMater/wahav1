import React from 'react';
import '../../../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../../../img/garden.png';
import firstSlide from "../../../img/new.jpg";
import secondSlide from "../../../img/new2.jpg";


const Hero = () => {
  return (
    <div className="hero">

      <Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Brand href="#home"><img src={logo} alt="" className="mt-1"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-left">
          <Nav className="ml-auto">
            <Nav.Link href="/en" className="mx-4">Home</Nav.Link>
            <Nav.Link href="/aboutEn" className="mx-4">About Us</Nav.Link>
            <Nav.Link href="/gallaryEn" className="mx-4">Gallary</Nav.Link>
            <Nav.Link href="/servicesEn" className="mx-4">Services</Nav.Link>
            <Nav.Link href="/contactEn " className="mx-4">Contact Us</Nav.Link>
            <Nav.Link href="/ar" className="mx-4">AR</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Carousel fade className="caro">
  <Carousel.Item>
    <img
      className="d-block caro-img"
      src={firstSlide}
      alt="First slide"
    />
  <Carousel.Caption>
   <div className="caro-caption">
      <h1>Wahet Al Rayhan</h1>
      <h3>An integrated residential oasis</h3>
      <p>In October Gardens</p>
   </div></Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block caro-img"
      src={secondSlide}
      alt="Second slide"
    />
     <Carousel.Caption>
   <div className="caro-caption">
      <h1>Wahet Al Rayhan</h1>
      <h3>An integrated residential oasis</h3>
      <p>In October Gardens</p>
   </div></Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="line"></div>
    </div>

  );
};

export default Hero;
