import React from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const About1 = () => {
  return (
    <div className="about-us">
      <div className="my-3 px-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.0137426104934!2d31.07230531485578!3d29.89270463268027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458520bdc8b3909%3A0x9b6c21a14847f7e5!2sWahet%20Elryhan%20Compound!5e0!3m2!1sen!2seg!4v1616840547022!5m2!1sen!2seg" width="100%" height="450" style={{"border":"none"}} allowfullscreen="" loading="lazy"></iframe>
      </div>
        <div className="about-divs mt-5">
          <h3 className="text-center">About the Al-waha</h3>
          <ul className="text-left">
            <li>Al-Rayhan Oasis is one of the projects of the Egyptian Engineering Company for Development and Real Estate Investment.</li>
            <li>Alwaha is located in the October Gardens, near the Mall of Egypt, the cosmic village, the tourist capital, the Zamalek Club and the Police Club.</li>
            <li>The Oasis is characterized by being 3 minutes from the entrance to Sixth of October City, 11 minutes from El Remaya Square and the Grand Egyptian Museum, and 5 minutes from the Ring Road and Al Wahat Road.</li>
            <li>The project is built on an area of ​​30 acres, where buildings represent 18% of the area, and 82% of green areas and industrial lakes.</li>
          </ul>
          </div>
       
   
        <div className="about-divs">
          <h3 className="text-center">Our mission</h3>
          <ul className="text-left">
            <li>Designing and building high-end residential, commercial, administrative, sports and entertainment projects to serve all our clients.</li>
           </ul>
          </div>
       
     
        <div className="about-divs">
          <h3 className="text-center">Our vision</h3>
          <ul className="text-left">
            <li>Providing high-end residential projects with innovative designs with a constant investment of thought and creativity.</li>
           </ul>
          </div>
       
          <div className="about-divs">
          <h3 className="text-center">our valuable</h3>
          <ul className="text-left">
            <li>Honesty - craftsmanship - quality of ideas - the pursuit of excellence - after sales service</li>
           </ul>
          </div>
 
    </div>
  );
};

export default About1;

