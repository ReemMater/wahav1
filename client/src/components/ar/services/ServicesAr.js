import React from 'react';
import Footer from '../homepage/Footer';
import '../../../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../img/garden.png';
import Services from './Services';

const ServicesAr = () => {
    return (
      <div>
   
        <Navbar bg="white" expand="lg" sticky="top" dir="rtl">
          <Navbar.Brand href="#home"><img src={logo} alt="" width="100px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="text-right">
            <Nav className="mr-auto">
            <Nav.Link href="/" className="mx-4">الرئيسية</Nav.Link>
            <Nav.Link href="/ar/about" className="mx-4">عن الشركة</Nav.Link>
            <Nav.Link href="/ar/gallery" className="mx-4 ">صور</Nav.Link>
            <Nav.Link href="/ar/services" className="mx-4 active">خدماتنا</Nav.Link>
            <Nav.Link href="/ar/contact" className="mx-4">تواصل معنا</Nav.Link>
            <Nav.Link href="/en" className="mx-4">EN</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <Services/>
  <div className="line"></div>
      
        <Footer />
      </div>
    );
  };
  
  export default ServicesAr;
  
