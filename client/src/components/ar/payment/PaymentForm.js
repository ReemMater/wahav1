import React, { useState } from 'react';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextField from '@material-ui/core/TextField';
import { create } from "jss";
import rtl from "jss-rtl";
import {
    StylesProvider,
    jssPreset,
    ThemeProvider,
    createMuiTheme
} from "@material-ui/core/styles";
import { Spinner } from 'react-bootstrap';
import axios from 'axios'


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const rtlTheme = createMuiTheme({ direction: "rtl" });


const PaymentForm = () => {
    const [phone, setphone] = useState("");
    const [userName, setuserName] = useState("");
    const [amount, setamount] = useState("");
    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);
    const showPaymentPage = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post('/api/payment', formData);
        axios.get("/api/payment").then(() => {
            setTimeout(() => {
                setLoading(false);
                setuserName("");
                setphone("");
                setamount("");
            }, 1500)
        });

    }
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (e.target.name === "phone") {
            setphone(e.target.value);
        }
        else if (e.target.name === "userName") {
            setuserName(e.target.value);
        }
        if (e.target.name === "amount") {
            setamount(e.target.value);
        }
    }

    return (

        <React.Fragment>


            <div className="m-auto text-center payment-form" dir="rtl">
                <StylesProvider jss={jss}>
                    <ThemeProvider theme={rtlTheme}>
                        <h1 className="text-center">الدفع الالكتروني </h1>
                        <h5 className="text-muted mt-4">ادفع وانت في مكانك وحافظ علي صحتك وصحة اسرتك</h5>
                        <form autoComplete="off" className="form1" onSubmit={showPaymentPage} >
                            <Row>
                                <Col md={4} sm={12}>
                                    <TextField id="standard-basic" label="الاسم" type="text" className="TextField" required name="userName" value={userName} onChange={onChange} />
                                </Col>
                                <Col md={4} sm={12}>
                                    <TextField id="standard-basic amountid" label="المبلغ" type="number" className="TextField" required name="amount" value={amount} onChange={onChange} />
                                </Col>
                                <Col md={4} sm={12}>
                                    <TextField id="standard-basic phoneid" label="رقم الهاتف" type="text" className="TextField" required
                                        name="phone" value={phone} onChange={onChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="pt-5 mt-3" md={3}>
                                    <input type="submit" value="ادفع" className="btn btn-primary btn-block" />
                                    {loading ? <Spinner animation="border" size="sm" /> : null}


                                </Col>
                            </Row>
                        </form>
                    </ThemeProvider>
                </StylesProvider>
            </div>

        </React.Fragment>
    );
};

export default PaymentForm;
