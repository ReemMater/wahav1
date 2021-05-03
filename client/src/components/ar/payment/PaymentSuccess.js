import React from 'react';
import Footer from '../homepage/Footer';
import '../../../App.css';
import logo from '../../../img/garden.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'velocity-react';
import Sidemenu from '../Sidemenu';
import SearchIcon from '@material-ui/icons/SearchOutlined'


$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('.nav-sticky').addClass('black');
        $('.nav-sticky').removeClass('hide');
    }
    else {
        $('.nav-sticky').removeClass('black');
        $('.nav-sticky').addClass('hide');
    }
})


const PaymentSuccess = (props) => {


    return (

        <React.Fragment>

            <Sidemenu />
            <div className="nav1">
                <Row className="text-center mt-2">
                    <Col></Col>
                    <Col><img src={logo} alt="" width="100px" /></Col>
                    <Col className="mt-3">
                        <ul className="socialLinks1">
                            <li ><a href="" ><i><SearchIcon /></i></a></li>
                            <li ><a href="https://www.facebook.com/wahetelryhan" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/wahetelryhan" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/wahetelryhan/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UC9tVcl8o5oR1lupl4isVJdA"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="/ar/contactus"><i className="far fa-envelope"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="nav-sticky hide">
                <Row className="text-center mt-2">
                    <Col></Col>
                    <Col><img src={logo} alt="" width="100px" /></Col>
                    <Col className="mt-3">
                        <ul className="socialLinks">
                            <li ><a href="" ><i><SearchIcon /></i></a></li>
                            <li ><a href="https://www.facebook.com/wahetelryhan" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com/wahetelryhan" target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/wahetelryhan/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UC9tVcl8o5oR1lupl4isVJdA"><i className="fab fa-youtube"></i></a></li>
                            <li><a href="/ar/contactus"><i className="far fa-envelope"></i></a></li>
                        </ul>
                    </Col>
                </Row>
            </div>

            <div className="m-auto text-center payment">
                <h1 className="display-4">تمت العملية بنجاح</h1>
            </div>
            <Footer />

        </React.Fragment>
    );
};

export default PaymentSuccess;
