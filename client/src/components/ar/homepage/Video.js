import React from 'react';
import '../../../App.css';
import { Button } from '@material-ui/core';
import video1 from '../../../img/waha.mp4'

const Video = () => {
    return (
        <div dir="rtl">

            <div className="section_video">
                <video autoPlay loop muted="muted" type="video/mp4" src={video1}>
                </video>
            </div>
            <div className="p-3 text-center">
                <h4> <Button variant="contained" >إحجز</Button> وحدتك الأن في واحة الريحان</h4>
                <p className="text-muted">بأقل مقدم واطول فتره سداد في ارقي المجتمعات السكنيه بمدينة اكتوبر</p>
            </div>

        </div>
    );
};

export default Video;
