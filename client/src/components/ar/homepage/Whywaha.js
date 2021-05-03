import React from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from "../../../img/tsmem.jpeg";
import img2 from "../../../img/msahat.jpeg";
import img3 from "../../../img/amn.jpeg"
import img4 from "../../../img/nady.jpg"
import img5 from "../../../img/trfeh.jpg";


/* <svg id="svg1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="453.65px" height="290px" viewBox="0 0 83.65 550" enable-background="new 0 0 83.65 471.94">
                        <circle fill="none" stroke="#999" stroke-miterlimit="10" cx="450.825" cy="450.254" r="37.613"></circle>
                        <line fill="#FFFFFF" stroke="#999" stroke-width="4" stroke-miterlimit="10" x1="10.602" y1="-100.088" x2="450.602" y2="450.254"></line>
                        <circle fill="#333" cx="450.602" cy="450.149" r="9.602"></circle> </svg>*/

$(window).on('scroll', function () {

    var one = $('#one1');
    if (one.length) {
        var contentone = one.offset().top;
        if (window.pageYOffset > contentone - 300) {

            $('.animation-element1').addClass('in-view');
        }
    }
    var two = $('#two1');
    if (two.length) {
        var contenttwo = two.offset().top;
        if (window.pageYOffset > contenttwo - 300) {

            $('.animation-element2').addClass('in-view');
        }
    }
    var three = $('#three1');
    if (three.length) {
        var contentthree = three.offset().top;
        if (window.pageYOffset > contentthree - 300) {
            $('.animation-element3').addClass('in-view');
        }
    }
    var four = $('#four1');
    if (four.length) {
        var contentfour = four.offset().top;
        if (window.pageYOffset > contentfour - 300) {
            $('.animation-element4').addClass('in-view');
        }
    }
    var five = $('#five1');
    if (five.length) {
        var contentfive = five.offset().top;
        if (window.pageYOffset > contentfive - 300) {
            $('.animation-element5').addClass('in-view');
        }
    }
});


const Whywaha = () => {
    return (
        <div dir="rtl">
            <div className="home">
                <div className="why-title">
                    <h1 className="text-center mt-3 mx-3 color-blue">خدمات واحة الريحان</h1>
                </div>
                <Row className="my-5 py-5">
                    <Col md={6} sm={12} className="why-col odd-content"> <div id="one1" className="why-content animation-element animation-element1 slide-right"><h3 > تصميم عصري</h3></div></Col>
                    <Col md={6} sm={12} className="why-col even-img train">
                        <div className="flip-card animation-element animation-element1 slide-left">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={img1} alt="" className="why-img" />
                                </div>
                                <div className="flip-card-back">
                                    <h3>تقسيم الوحدات مـن الداخل مميز يمنحك استغلالا أكبر للمساحة ومداخل العمارات فندقية وكل منها تحوي أسانسير وجراچ</h3>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="my-5 py-5">

                    <Col md={6} sm={12} className="why-col odd-img">
                        <div id="two1" className="flip-card  animation-element animation-element2 slide-right">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={img2} alt="" className="why-img" />
                                </div>
                                <div className="flip-card-back">
                                    <h3>مصمم على ثلاثة طوابق به السوبر ماركت والمغسلة والعديد من خيارات التسوق والمطاعم وأماكن الترفيه</h3>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="why-col even-content "> <div className="why-content animation-element animation-element2 slide-left"><h3 >المول التجاري</h3></div></Col>
                </Row>
                <Row className="my-5 py-5">
                    <Col md={6} sm={12} className="why-col odd-content"> <div id="three1" className="why-content1  animation-element animation-element3 slide-right"> <h3 >مسجد الواحة</h3></div></Col>
                    <Col md={6} sm={12} className="why-col even-img">
                        <div className="flip-card animation-element  animation-element3 slide-left">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={img3} alt="" className="why-img" />
                                </div>
                                <div className="flip-card-back">
                                    <h3>على الطراز المملوكي، ملحق به مكتبة</h3>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


                <Row className="my-5 py-5">
                    <Col md={6} sm={12} className="why-col odd-img">
                        <div id="four1" className="flip-card  animation-element animation-element4 slide-right">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={img4} alt="" className="why-img" />
                                </div>
                                <div className="flip-card-back">
                                    <h3> يقع في وسط الواحة، يحتوي على ملاعب لكرة القدم والتنس وحمام سباحة وقاعة اجتماعات</h3>

                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} sm={12} className="why-col even-content"> <div className="why-content animation-element  animation-element4 slide-left"><h3>نادي اجتماعي</h3></div></Col>
                </Row>
                <Row className="my-5 py-5">
                    <Col md={6} sm={12} className="why-col odd-content">  <div id="five1" className="why-content1  animation-element animation-element5 slide-right"> <h3>اماكن ترفية</h3></div></Col>
                    <Col md={6} sm={12} className="why-col even-img">
                        <div className="flip-card animation-element  animation-element5 slide-left">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={img5} alt="" className="why-img" />
                                </div>
                                <div className="flip-card-back">
                                    <h3>بداخل الواحة حضانة ومنطقة ألعاب لتوفير الرعاية الكاملة والأمان لأطفالك</h3>

                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Whywaha;
