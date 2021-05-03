import React from 'react';
import Footer from './en/homepage/Footer';
import Home from './en/homepage/Home';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../img/garden.png';
import firstSlide from "../img/new.jpg";
import secondSlide from "../img/new2.jpg";



const AppEn = () => {
  return (
    <div>
     <Navbar bg="white" expand="lg" sticky="top">
        <Navbar.Brand href="#home"><img src={logo} alt="" width="100px"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-left">
          <Nav className="ml-auto">
            <Nav.Link href="/en" className="mx-4 active">Home</Nav.Link>
            <Nav.Link href="/en/about" className="mx-4">About Us</Nav.Link>
            <Nav.Link href="/en/gallery" className="mx-4">Gallery</Nav.Link>
            <Nav.Link href="/en/services" className="mx-4">Services</Nav.Link>
            <Nav.Link href="/en/contact " className="mx-4">Contact Us</Nav.Link>
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
      <Home/>
      <Footer />
    </div>
  );
};

export default AppEn;
