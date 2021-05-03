import React from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../../img/gallery/1.jpeg';
import img2 from '../../../img/gallery/2.jpeg';
import img3 from '../../../img/gallery/3.jpeg';
import img4 from '../../../img/gallery/4.jpeg';
import img5 from '../../../img/gallery/5.jpeg';
import img6 from '../../../img/gallery/6.jpeg';
import img7 from '../../../img/gallery/7.jpeg';
import img8 from '../../../img/gallery/8.jpeg';
import img9 from '../../../img/gallery/9.jpeg';
import img10 from '../../../img/gallery/10.jpeg';
import img11 from '../../../img/gallery/11.jpeg';
import img12 from '../../../img/gallery/12.jpeg';
import img13 from '../../../img/gallery/13.jpeg';
import img14 from '../../../img/gallery/14.jpeg';
import img15 from '../../../img/gallery/15.jpeg';
import img16 from '../../../img/gallery/16.jpeg';
import img17 from '../../../img/gallery/17.jpeg';
import img18 from '../../../img/gallery/18.jpeg';
import img19 from '../../../img/gallery/19.jpeg';
import img20 from '../../../img/gallery/20.jpeg';
import img21 from '../../../img/gallery/21.jpeg';
import img22 from '../../../img/gallery/22.jpeg';
import img23 from '../../../img/gallery/23.jpeg';
import img24 from '../../../img/gallery/24.jpeg';
import Swiper from "react-id-swiper";
import 'swiper/swiper-bundle.min.css';
import SwiperCore, { EffectCoverflow } from 'swiper';
const Gallery = () => {
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
        {
            id: 8,
            img: img8
        },
        {
            id: 9,
            img: img9
        },
        {
            id: 10,
            img: img10
        },
        {
            id: 11,
            img: img11
        },
        {
            id: 12,
            img: img12
        },
        {
            id: 13,
            img: img13
        },
        {
            id: 14,
            img: img14
        },
        {
            id: 15,
            img: img15
        },
        {
            id: 16,
            img: img16
        },
        {
            id: 17,
            img: img17
        },
        {
            id: 18,
            img: img18
        },
        {
            id: 19,
            img: img19
        },
        {
            id: 20,
            img: img20
        },
        {
            id: 21,
            img: img21
        },
        {
            id: 22,
            img: img22
        },
        {
            id: 23,
            img: img23
        },
        {
            id: 24,
            img: img24
        },

    ]
    SwiperCore.use([EffectCoverflow]);
    const params = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        coverflowEffect: {
            rotate: 20,
            stretch: 10,
            depth: 300,
            modifier: 1,
            slideShadows: true,
        },
    };
    return (
        <div className="cont">
            <Swiper {...params}>
                {imgArray.map(item => (
                    <a href={item.img} data-lightbox="true">
                        <img src={item.img} width="300px" height="300px" key={item.id} />
                    </a>))}


            </Swiper>

        </div >
    );
};

export default Gallery;

