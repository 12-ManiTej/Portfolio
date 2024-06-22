import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Contact.css';
import ShapeDivider from "./ShapeDivider";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    const formData = new FormData(formRef.current);
    const fullName = formData.get('firstName') + ' ' + formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const mailtoLink = `mailto:manitejjilla2@gmail.com?subject=Contact%20Form%20Submission&body=Name:%20${fullName}%0D%0AEmail:%20${email}%0D%0APhone:%20${phone}%0D%0AMessage:%20${message}`;

    window.location.href = mailtoLink;

    formRef.current.reset();
  };

  return (
    <div className="contact" id="contact">
      <ShapeDivider/>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h1>Get In Touch<span className='dot'>.</span></h1>
                  <form ref={formRef} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="First Name" name="firstName" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Last Name" name="lastName" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email Address" name="email" required />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" placeholder="Phone No." name="phone" required />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="message" required></textarea>
                        <a href="#" class onClick={handleSubmit} className="myButton">Send Message</a>
                      </Col>
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;