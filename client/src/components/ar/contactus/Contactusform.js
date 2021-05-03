import React from 'react';
import '../../../App.css';
import TextField from '@material-ui/core/TextField';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';



const Contactusform = () => {
  return (


    <div className="contact-us">
      <div className="line1"></div>
      <h1 className="text-center">اترك رسالتلك</h1>
      <h5 className="text-center text-muted">وسوف نتواصل معك في اقرب وقت</h5>
      <form noValidate autoComplete="off" className="form1">
        <Row>
          <Col md={4} sm={12}>
            <TextField id="standard-basic" label="الاسم" type="text" className="TextField" required />
          </Col>
          <Col md={4} sm={12}>
            <TextField id="standard-basic" label="البريد الالكتروني" type="email" className="TextField" required />
          </Col>
          <Col md={4} sm={12}>
            <TextField id="standard-basic" label="رقم الهاتف" type="text" className="TextField" required />
          </Col>
        </Row>
        <Row>
          <Col md={9}>
            <TextField
              id="standard-multiline-flexible"
              label="اترك رسالتك"
              multiline
              rows={4}
              className="TextField"
            />
          </Col>
          <Col className="pt-5 mt-3" md={3}>
            <Button
              fullWidth
              display="block"
              size="large"
              variant="outlined"
              color="primary"


            >
              <SendIcon />&nbsp;&nbsp;ارسال&nbsp;</Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default Contactusform;

