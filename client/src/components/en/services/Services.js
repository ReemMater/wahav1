import React from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../../img/services.jpg';
import img2 from '../../../img/img2.PNG'

const Services = () => {
    return (
      <div className="services">
  <Row>
     
      <Col lg={8} xm={12}>
      <div className="services-divs">
          <h3 className="text-center">Al-waha features</h3>
          <ul className="text-left">
            <li>– Security guard 24 hours.</li>
            <li>– Landscapes and artificial lakes.</li>
            <li>– Sports and social club, including football and tennis courts, a swimming pool and a meeting room.</li>
            <li>– Administrative and commercial mall, at a high level.</li>
            <li>– An old-style mosque with a library attached.</li>
            <li>– A nursery to provide full care for young children.</li>
            <li>– A modern medical center with an emergency health unit, a hospital for day-to-day operations and a group of basic clinics for various specialties.</li>
          </ul>
          </div>
      </Col>
      <Col lg={4} xm={12}>
      <img src={img1} alt="" width="100%" height="48%" className="my-2"/>
      <img src={img2} alt="" width="100%" height="48%" className="my-2"/>
      </Col>
  </Row>
      </div>
    );
  };
  
  export default Services;
  
