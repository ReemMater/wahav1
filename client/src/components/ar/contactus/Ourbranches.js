import React from 'react';
import '../../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Modal } from '@material-ui/core';
import Map from '@material-ui/icons/Map';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #04019ebd',
        boxShadow: theme.shadows[10],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};


const Ourbranches = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };
    return (

        <div>
            <div className="contact-us1">
                <div className="line1"></div>
                <h1 className="text-center">فروعنا</h1>
                <Row className="text-center py-5 mt-5">

                    <Col md={6} sm={12} className="pb-5">
                        <h4 className="map-header">الفرع الرئيسي</h4>
                        <p className="map-text">مجموعة شركات المصرية الهندسية - 24 شارع دجله ناصيه ، شارع شهاب</p>
                        <a className="map-link text-muted" onClick={handleOpen}>
                            <Map /> مشاهدة الخريطة</a>
                    </Col>
                    <Col md={6} sm={12} className="pb-5">
                        <h4 className="map-header">عنوان الواحة</h4>
                        <p className="map-text">كمبوند واحة الريحان - الجيزة ، شارع الريحان</p>
                        <a className="map-link text-muted" onClick={handleOpen1}>
                            <Map /> مشاهدة الخريطة </a>
                    </Col>
                </Row>
            </div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5537131245246!2d31.198682485140818!3d30.04965892528171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584136637803cd%3A0x6ea1f7dfd768a543!2z2YXYrNmF2YjYudipINi02LHZg9in2Kog2KfZhNmF2LXYsdmK2Kkg2KfZhNmH2YbYr9iz2YrYqQ!5e0!3m2!1sar!2seg!4v1616762114525!5m2!1sar!2seg" className="contact-map" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </Fade>
            </Modal>

            <Modal
                className={classes.modal}
                open={open1}
                onClose={handleClose1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open1}>
                    <div className={classes.paper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3459.0137426104934!2d31.07230531485578!3d29.89270463268027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458520bdc8b3909%3A0x9b6c21a14847f7e5!2sWahet%20Elryhan%20Compound!5e0!3m2!1sen!2seg!4v1616840547022!5m2!1sen!2seg" className="contact-map" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </Fade>
            </Modal>

        </div>

    );
};

export default Ourbranches;

