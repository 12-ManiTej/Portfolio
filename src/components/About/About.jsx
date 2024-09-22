import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import arcadeGameImage from '../assets/images/mani_photo (1).jpg';

function About() {
  return (
    <div id="about">
      <div className="about-section">
        <div className="custom-shape-divider-top-1718619451">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <Container className="about-container">
          <h1>About<span className='dot'>.</span></h1>
          <br></br>
          <Row>
            <Col md={6} className="about-image">
              <img src={arcadeGameImage} alt="About" />
            </Col>
            <Col md={6} className="about-content">
              <p>
                I am a fourth-year Information Technology undergraduate at Chaitanya Bharathi Institute of Technology. My passion lies in developing applications that create meaningful impact in the real world.
              </p>
              <p>
                I am a highly motivated and detail-oriented individual with a robust foundation in programming languages such as C, Java, and Python. Proficient in software development methodologies like Agile, I also have hands-on experience in frontend developmental tools. My expertise lies in MERN stack development, along with proficiency in Django.
              </p>
              <p>
                In addition to my programming skills, I excel in machine learning and deep learning, utilizing frameworks like scikit-learn and TensorFlow. With expertise in natural language processing, I craft intelligent solutions adept at understanding human language patterns. Moreover, I am proficient in cloud computing, boasting hands-on experience with Amazon Web Services (AWS). Furthermore, I possess a strong understanding of different types of networks, enhancing my ability to tackle diverse challenges efficiently.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
