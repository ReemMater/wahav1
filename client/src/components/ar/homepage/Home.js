import React from 'react';
import '../../../App.css';
import Whywaha from './Whywaha';
import Aboutwaha from './Aboutwaha';
import Ourpartner from './Ourpartner';
import Video from './Video';

const Home = () => {
    return (
        <div dir="rtl">
            <Aboutwaha />
            <Whywaha />
            <Ourpartner />
            <Video />

        </div>
    );
};

export default Home;
