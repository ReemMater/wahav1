import React from 'react';
import Footer from '../homepage/Footer';
import '../../../App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../../img/garden.png';
import PaymentForm from './PaymentForm';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import 'velocity-react';
import Sidemenu from '../Sidemenu';
import Zoom from '@material-ui/core/Zoom';
import { CssBaseline } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/SearchOutlined'

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


const OnlinePayment = (props) => {


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
                <div className="headerall  text-right" dir="rtl">
                    <div className="headerall-content">
                        <h1 className="text-muted1">استكشف</h1>
                        <h1 className="text-lg" >____ الدفع الالكتروني</h1></div>
                </div>
            </div>
            <PaymentForm />
            <Footer />
            <ScrollTop {...props}>
                <Fab color="primary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
};

export default OnlinePayment;
