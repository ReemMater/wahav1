import React from 'react';
import '../../../App.css';
import img1 from '../../../img/gallery/1.jpeg'
import img2 from '../../../img/gallery/2.jpeg'
import img3 from '../../../img/gallery/3.jpeg'
import Slider from "react-slick";

const AlwahaNews = () => {

    const newsArray = [{
        id: 1,
        img: img1,
        texttitle: "النادي الرياضي",
        text: " يستعد النادي لاحتفالات شم النسيم و ذلك بحضور نخبه من الفنانين   "

    },
    {
        id: 2,
        img: img2,
        texttitle: "المكتبه ",
        text: "تحتفل واحة الريحان بمرور 3 اعوام علي افتتاح المكتبه "

    },
    {
        id: 3,
        img: img3,
        texttitle: "الاسعار ",
        text: "لا تفوت عرض ال 10% خصم , بادر بلحجز الان"

    }];
    const settings = {
        dots: true,
        autoplay: true,
        arrows: true,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,


    };
    return (
        <div>
            <div className="container text-center mt-5">
                <h1 className="display-3 pt-2 mb-5 pb-0 color-blue">اخبار الواحة</h1>
                <Slider {...settings} className="news">
                    {newsArray.map(item => (
                        <div className="row row-news" key={item.id}>
                            <div className="col-md-7">
                                <img src={item.img} alt="" width="100%" />
                            </div>
                            <div className="col-md-5 comments">
                                <div className="card bg-white border-0 rounded-5">
                                    <div className="card-body news-content">
                                        <h1>
                                            {item.texttitle}
                                        </h1>
                                        <h5>
                                            {item.text}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
};


export default AlwahaNews;

