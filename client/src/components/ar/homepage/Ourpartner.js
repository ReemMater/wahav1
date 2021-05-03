import React, { Component } from 'react';
import '../../../App.css';
import img1 from '../../../img/ourpartner1.png'
import img2 from '../../../img/ourpartner2.png'
import img3 from '../../../img/ourpartner3.png'
import Slider from "react-slick";



export default class Ourpartner extends Component {

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            arrows: true,
            autoplay: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            lazyLoad: true,
            pauseOnHover: true
        };
        return (
            <div className="ourpartner-caro">
                <h1 className="text-center text-white pt-4">شركائنا</h1>
                <Slider {...settings} className="slider-partner">
                    <div className="partner-caroucel"><img src={img1} alt="" /></div>
                    <div className="partner-caroucel"><img src={img2} alt="" /></div>
                    <div className="partner-caroucel"><img src={img3} alt="" /></div>
                </Slider>
            </div >
        );
    }
}