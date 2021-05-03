import React, { useEffect } from 'react';
import Footer from './ar/homepage/Footer';
import Home from './ar/homepage/Home';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import logo from '../img/garden.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import 'velocity-react';
import Sidemenu from './ar/Sidemenu';
import Zoom from '@material-ui/core/Zoom';
import { CssBaseline } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined'
import img1 from '../img/caroslider/7.jpg';
import img2 from '../img/caroslider/2.jpg';
import img3 from '../img/caroslider/3.jpg';
import img4 from '../img/caroslider/4.jpg';
import img5 from '../img/caroslider/5.jpg';
import img6 from '../img/caroslider/6.jpg';
import img7 from '../img/caroslider/1.jpg';
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { EffectCoverflow, Navigation } from 'swiper';


// $(window).load(() => {
//   $(".header-content > .display-4").css({ 'right': '-1000px', 'left': '' }).animate({
//     'right': '0', "opacity": "1"

//   }, 1500);
//   $(".header-content > h3").css({ 'right': '-1000px', 'left': '' }).animate({
//     'right': '0', "opacity": "1"

//   }, 2000);
//   $(".header-content > p").css({ 'right': '-1000px', 'left': '' }).animate({
//     'right': '0', "opacity": "1"

//   }, 5000);
// })

// const afterChangeHandler = (e) => {
//   if (e == 1) {
//     $(".headerall1 > .header-content > .display-4").css({ 'right': '-1000px', 'left': '' });
//     $(".headerall1 > .header-content > h3").css({ 'right': '-1000px', 'left': '' });
//     $(".headerall1 > .header-content > p").css({ "opacity": "0" });

//   }
//   if (e == 0) {
//     $(".header-content > .display-4").css({ 'right': '-1000px', 'left': '' }).animate({
//       'right': '0', "opacity": "1"

//     }, 1500);
//     $(".header-content > h3").css({ 'right': '-1000px', 'left': '' }).animate({
//       'right': '0', "opacity": "1"

//     }, 2000);
//     $(".header-content > p").css({ 'right': '-1000px', 'left': '', "opacity": "0" }).animate({
//       'right': '0', "opacity": "1"

//     }, 5000);

//   }

// }

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

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });
  const handleClick = (event) => {
    console.log(event)
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) {
      console.log(anchor)
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
  return (

    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}


ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};


const AppAr = (props) => {
  let currentIndex = 0;
  let titleDisplacement = 0;
  let descriptionDisplacement = 0;
  useEffect(() => { currentIndex = 0; console.log(currentIndex) }, [])



  const imgArray = [
    {
      id: 1,
      img: img1
    },
    {
      id: 2,
      img: img2
    },
    {
      id: 3,
      img: img3
    },
    {
      id: 4,
      img: img4
    },
    {
      id: 5,
      img: img5
    },
    {
      id: 6,
      img: img6
    },
    {
      id: 7,
      img: img7
    },


  ]
  SwiperCore.use([EffectCoverflow, Navigation]);

  function showTextAnimation(direction) {
    if (titleDisplacement === 0 && direction === "prev") {
      titleDisplacement = -600;
    } else if (titleDisplacement === -600 && direction === "next") {
      titleDisplacement = 0;
    } else {
      titleDisplacement =
        direction === "next"
          ? titleDisplacement - 100
          : titleDisplacement + 100;
    }

    if (descriptionDisplacement === 0 && direction === "prev") {
      descriptionDisplacement = -360;
    }
    else if (descriptionDisplacement === -360 && direction === "next") {
      descriptionDisplacement = 0;
    }
    else {
      descriptionDisplacement =
        direction === "next"
          ? descriptionDisplacement - 60
          : descriptionDisplacement + 60;
    }

    let title = document.querySelectorAll("#title h4");
    let description = document.querySelectorAll("#description h4");

    title.forEach(title => {
      TweenMax.to(title, 1, {
        top: `${titleDisplacement}px`,
        ease: Strong.easeInOut
      });
    });

    description.forEach((description, index) => {

      TweenMax.to(description, 1, {
        top: `${descriptionDisplacement}px`,
        ease: Strong.easeInOut,

      });
    })
  }


  const onprevChange = () => {
    if (currentIndex === 0) {
      currentIndex = 6;
      $("#one").removeClass("active");
      $("#seven").addClass("active");
    }
    else {
      currentIndex--;
    }
    if (currentIndex === 1) {
      $("#three").removeClass("active");
      $("#two").addClass("active");
    }
    if (currentIndex === 2) {
      $("#four").removeClass("active");
      $("#three").addClass("active");
    }
    if (currentIndex === 3) {
      $("#five").removeClass("active");
      $("#four").addClass("active");
    }
    if (currentIndex === 4) {
      $("#six").removeClass("active");
      $("#five").addClass("active");
    }
    if (currentIndex === 5) {
      $("#seven").removeClass("active");
      $("#six").addClass("active");
    }
    if (currentIndex === 0) {
      $("#two").removeClass("active");
      $("#one").addClass("active");
    }
    showTextAnimation("prev");
  }
  const onnextChange = () => {
    if (currentIndex === 6) {
      currentIndex = 0;
      $("#one").addClass("active");
      $("#seven").removeClass("active");
    }
    else {
      currentIndex++;
    }
    if (currentIndex === 1) {
      $("#one").removeClass("active");
      $("#two").addClass("active");
    }
    if (currentIndex === 2) {
      $("#two").removeClass("active");
      $("#three").addClass("active");
    }
    if (currentIndex === 3) {
      $("#three").removeClass("active");
      $("#four").addClass("active");
    }
    if (currentIndex === 4) {
      $("#four").removeClass("active");
      $("#five").addClass("active");
    }
    if (currentIndex === 5) {
      $("#five").removeClass("active");
      $("#six").addClass("active");
    }
    if (currentIndex === 6) {
      $("#six").removeClass("active");
      $("#seven").addClass("active");
    }
    showTextAnimation("next");
  }
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    simulateTouch: false,

    // autoplay: {
    //     delay: 1500,
    //     disableOnInteraction: false,
    // },
    coverflowEffect: {
      rotate: 20,
      stretch: 20,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => <button onClick={onprevChange} className="swiper-button-prev"></button>,
    renderNextButton: () => <button onClick={onnextChange} className="swiper-button-next"></button>,
    // on: {
    //   'slideChange': () => { console.log("remo") }
    // }
  };


  return (

    <React.Fragment>
      <CssBaseline />
      <div id="back-to-top-anchor" />
      <div>
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



        <Row className="headerslider">
          <Col md={7}>
            <div className="cont1">
              <Swiper {...params}
              >
                {imgArray.map(item => (

                  <img src={item.img} key={item.id} />
                ))}


              </Swiper>

            </div >
          </Col>
          <Col md={5} className="side-line">
            <div className="side-indicator">
              <div className="line"></div>
              <div id="one" className="index one active">
                <p>1</p>
              </div>
              <div id="two" className="index two">
                <p>2</p>
              </div>
              <div id="three" className="index three">
                <p>3</p>
              </div>
              <div id="four" className="index four">
                <p>4</p>
              </div>
              <div id="five" className="index five">
                <p>5</p>
              </div>
              <div id="six" className="index six">
                <p>6</p>
              </div>
              <div id="seven" className="index seven">
                <p>7</p>
              </div>
            </div>
            <div className="content1">
              <div className="text-wrapper">
                <div className="text">
                  <div id="title">
                    <h4>واحة الريحان</h4>
                    <h4>احجز معنا</h4>
                    <h4>بادر بالحجز</h4>
                    <h4>اسكن بالواحة</h4>
                    <h4>نقدم لك</h4>
                    <h4>شاهد</h4>
                    <h4>واحة الريحان</h4>
                  </div>
                  <div id="description">
                    <h4>واحة سكنية متكاملة</h4>
                    <h4> لأنك تستحق الأفضل</h4>
                    <h4>واستمتع بالتصميم العصري في قلب الطبيعة</h4>
                    <h4>وعيش حياة الرفاهية</h4>
                    <h4>أنظمة سداد مريحة</h4>
                    <h4>صور من الواقع</h4>
                    <h4>في حدائق أكتوبر</h4>
                  </div>

                </div>
              </div>

            </div>

          </Col>
        </Row>








      </div>
      <Home />
      <Footer />
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

export default AppAr;
