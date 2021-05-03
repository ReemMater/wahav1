import React from 'react';
import '../../../App.css';
import {FilledInput, FormControl, InputAdornment, InputLabel, IconButton } from '@material-ui/core';
import LaunchIcon from '@material-ui/icons/Launch'

const Subscribe = () => {

    return (
        <div className="subscribe text-center">
            <h2 className="text-white py-2">استقبل اخر اخبار الواحة علي بريدك الالكتروني</h2>
            <h5 className="text-muted">واكب التطورات والاحداث الجديده اول باول</h5>

            <FormControl variant="filled" className="TextField1">
                <InputLabel htmlFor="الايميل الالكتروني"> البريد الاكتروني</InputLabel>

                <FilledInput
                    type="text"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                /* onClick={}
                                 onMouseDown={}*/
                                edge="end"

                            >
                                <LaunchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <p className="text-muted pb-5"> بالتسجيل في هذا البريد ، فإنك توافق على الأخبار والعروض والمعلومات من واحة الريحان</p>
        </div>

    );
};

export default Subscribe;

