import React from 'react';
import '../../../App.css';
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Contactusform from './Contactusform';
import Ourbranches from './Ourbranches';
import Subscribe from './Subscribe';


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const rtlTheme = createMuiTheme({ direction: "rtl" });


const Contact = () => {

  return (

    <div className="contact" dir="rtl">
      <StylesProvider jss={jss}>
        <ThemeProvider theme={rtlTheme}>
          <Contactusform />
          <Ourbranches />
          <Subscribe />
        </ThemeProvider>
      </StylesProvider>
    </div>
  );
};

export default Contact;

