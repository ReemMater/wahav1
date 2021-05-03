import React from 'react';
import '../../../App.css';
import Ourbranches from '../contactus/Ourbranches'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LockIcon from '@material-ui/icons/Lock'
import GavelIcon from '@material-ui/icons/Gavel'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer'





const tab1click = () => {
  $('#one').addClass("hide-about");
  $('#two-content').addClass("hide-about");
  $('#one-content').removeClass("hide-about");
  $('#two').removeClass("hide-about");
  $('#one-content').addClass("active-about");
  $('#two-content').removeClass("active-about");
  $('#list1').addClass("active-about");
  $('#list2').removeClass("active-about");
};
const tab2click = () => {
  $('#one-content').addClass("hide-about");
  $('#two-content').removeClass("hide-about");
  $('#two').addClass("hide-about");
  $('#one').removeClass("hide-about");
  $('#one-content').removeClass("active-about");
  $('#two-content').addClass("active-about");
  $('#list1').removeClass("active-about");
  $('#list2').addClass("active-about");
};

const About1 = () => {
  return (
    <div className="about-us pt-5" dir="rtl">
      <div className="container-about content">

        <div className="company-statements tabs-initialized">
          <div id="one-content" className="statement__content active-about">
            <h2 className="secondary-heading">رؤيتنا</h2>
            <p >
              تقديم مشاريع سكنية بتصميمات مبتكرة راقية مع استثمار دائم للفكر والإبداع.</p>
          </div>



          <div id="two-content" className="statement__content">
            <h2 className="secondary-heading" >
              مهمتنا</h2>
            <p >
              تصميم وبناء مشاريع سكنية وتجارية وإدارية ورياضية وترفيهية راقية، لخدمة جميع عملائنا.</p>
          </div>
        </div>
        <ul className="statement__navigation">
          <li id="list1" className="active-about"><a id="tab1" onClick={tab1click}><span id="one" className="hide-about">رؤيتنا </span><span
            className="navigation__circle"></span></a></li>
          <li id="list2" ><a id="tab2" onClick={tab2click}><span className="navigation__circle"></span><span id="two" > مهمتنا</span></a></li>
        </ul>
      </div>


      <div className="content">
        <h3 className="text-center secondary-heading">قيمنا</h3>
        <Row className="text-center m-auto">
          <Col md={2} sm={4} className="about-value-col mb-5">
            <LockIcon className="about-icon" />
            <p>الأمانة</p>
          </Col>
          <Col md={2} sm={4} className="about-value-col mb-5">
            <GavelIcon className="about-icon" />
            <p>الحرفية</p>
          </Col>
          <Col md={2} sm={4} className="about-value-col mb-5">
            <ThumbUpIcon className="about-icon" />
            <p>جودة الأفكار</p>
          </Col>
          <Col md={2} sm={4} className="about-value-col mb-5">
            <QuestionAnswerIcon className="about-icon" />
            <p>خدمة ما بعد البيع</p>
          </Col>
        </Row>
      </div>
      <Ourbranches />
    </div>
  );
};

export default About1;

