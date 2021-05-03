import React from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../../../img/new-waha.jpg";

const Home = () => {
  return (
    <div >
      <div className="home">
        <Row className="my-3">

          <Col lg={8} md={12}>
            <h1 className="text-center mt-4 mx-3">Why do you live in an Wahet Al Rayhan</h1>
            <Row className="mx-2">
              <Col md={6} sm={12}>
                <ul className="mt-5 text-left">
                  <li className="li-en"> <i className="fa fa-check-circle"></i> Fashionable design</li>
                  <li className="li-en"> <i className="fa fa-check-circle"></i> Green spaces</li>
                  <li className="li-en"> <i className="fa fa-check-circle"></i> Entertainment places</li>
                </ul>
              </Col>
              <Col md={6} sm={12} >
                <ul className="mt-5 text-left">
                  <li className="li-en"> <i className="fa fa-check-circle"></i> Security and Protection</li>
                  <li className="li-en"> <i className="fa fa-check-circle"></i> social Club</li>
                  <li className="li-en"> <i className="fa fa-check-circle"></i> Car garages</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={12} className="d-none d-lg-block" style={{ "align-self": "center" }}>
            <img src={img1} alt="" className="img-fluid align-center w-100" />
          </Col>
        </Row>

      </div>
      <div className="line"></div>

      <div className="video-sec">
                <Row className="p-5">
                    <Col style={{ "align-self": "center" }}>
                    <div className="bg-light p-3 text-left">
                    <h1>Book your unit now in Wahet Al-Rayhan</h1>
                    <p className="text-muted">The lowest down payment and the longest payment period in the most prestigious residential communities in October</p></div>
                    </Col>
                    <Col md={6} sm={12} style={{ "align-self": "center" }}>
                    <iframe className="w-100" height="400px" src="https://www.youtube.com/embed/tkY21DgN3B8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </Col>
                </Row>


            </div>
            <div className="line"></div>
    </div>
  );
};

export default Home;
