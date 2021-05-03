import React from 'react';
import '../../../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const Contact = () => {
    return (
        <div className="contact">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.5537131245246!2d31.198682485140818!3d30.04965892528171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584136637803cd%3A0x6ea1f7dfd768a543!2z2YXYrNmF2YjYudipINi02LHZg9in2Kog2KfZhNmF2LXYsdmK2Kkg2KfZhNmH2YbYr9iz2YrYqQ!5e0!3m2!1sar!2seg!4v1616762114525!5m2!1sar!2seg" className="contact-map" allowfullscreen="" loading="lazy"></iframe>
            <div className="line"></div>
            <div className="contact-us">
                <h1 className="text-center">Contact Us</h1>
                <Form className="form1">
                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">

                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">

                        <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">

                        <Form.Control as="textarea" rows={5} placeholder="Your Message" />
                    </Form.Group>

                    <Button type="submit" variant="outline-secondary" size="lg" block className="contact-button">Send</Button>
                </Form>
            </div>
            <div className="line"></div>
            <div className="text-center">
            <h5>info@wahetelryhan.com</h5>
            <h6>19474</h6></div>

        </div>
    );
};

export default Contact;

