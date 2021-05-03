import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import '../../../App.css';
import PhoneIcon from '@material-ui/icons/PhoneInTalk'
import MailIcon from '@material-ui/icons/MailOutlineOutlined'


const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center pb-2 pt-4">
        <Row>
          <Col md={6} className="py-2  footer-content">
            <h6><MailIcon className="footer-icon" />info@wahetelryhan.com</h6></Col>
          <Col md={6} className="py-2 footer-content">
            <h6><PhoneIcon className="footer-icon" />19474</h6></Col>
          <Col className="py-2  text-center footer-content1">
            <h5>تابعنا</h5>
            <ul className="socialLinks-footer">
              <li ><a href="https://www.facebook.com/wahetelryhan" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/wahetelryhan" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/wahetelryhan/" target="_blank"><i className="fab fa-instagram"></i></a></li>
              <li><a href="https://www.youtube.com/channel/UC9tVcl8o5oR1lupl4isVJdA"><i className="fab fa-youtube"></i></a></li>
            </ul>
          </Col>
        </Row>
        <p className="text-muted text-center text-footer">كل الحقوق محفوظه وتابعه ل شركة واحة الريحان &copy;</p>

      </div>


    </div>
  );
};

export default Footer;
