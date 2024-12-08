import React, { useState } from "react";
import TiltCard from "./TiltCard"; // Import the TiltCard component
import { Container, Row, Col, Button } from "react-bootstrap"; // Import necessary components from React Bootstrap
import "./Projects.css"; // Import your CSS file for styling
import ShapeDivider from "./ShapeDivider";
import spaceship from '../assets/images/spaceship.png';
import resource from '../assets/images/pexels-pixabay-416405.jpg';
import netflix from '../assets/images/netflix (1).png';
import autoguide from '../assets/images/pexels-pixabay-248747.jpg';
import propredict from '../assets/images/pexels-towfiqu-barbhuiya-3440682-8732777.jpg';
import portfolio from '../assets/images/pexels-goumbik-574070.jpg';
import tictactoe from '../assets/images/tic-tac-toe.png';
import drumkit from '../assets/images/pexels-joshsorenson-995301.jpg';
import spam from '../assets/images/spam (1).png';
import water from '../assets/images/pexels-pixabay-40784.jpg';
import dehaze from '../assets/images/pexels-yunustug-7957992.jpg';
import gemini from '../assets/images/chatbot.png';
import IT from '../assets/images/pexels-divinetechygirl-1181673.jpg';

const projects = [
  {
    id: 1,
    title: "Spaceship Game",
    description: "The 'pygame' Spaceship game is a 2D arcade adventure where players pilot a spacecraft through space, avoiding obstacles and battling enemies. It demonstrates Python programming skills with animated graphics, sound effects, and interactive gameplay.",
    imageUrl: spaceship,
    category: "basic",
    link:"https://github.com/12-ManiTej/Spaceship_Game"
  },
  {
    id: 2,
    title: "Resource Management",
    description: "Implemented in C, this system addresses classroom challenges caused by projector malfunctions. It maintains a database of operational projectors to ensure faculty can efficiently check room availability, optimizing the learning environment.",
    imageUrl: resource,
    category: "basic",
    link:"https://github.com/12-ManiTej/Resource-Management"
  },
  {
    id: 3,
    title: "Netflix Clone",
    description: "A Netflix Clone was developed using HTML, CSS, and JavaScript. This project emulates Netflix's user interface, featuring dynamic content loading, category filtering, and trailer popups. It demonstrates proficiency in front-end web development and UI design.",
    imageUrl: netflix,
    category: "web",
    link:"https://github.com/12-ManiTej/Netflix-Clone"
  },
  {
    id: 4,
    title: "AutoGuide",
    description: "A Django web app for vehicle education with secure authentication, an intuitive frontend, and a visually appealing interface. It offers user-friendly features for an engaging experience, supported by a secure backend to manage vehicle data and user accounts effectively.",
    imageUrl: autoguide,
    category: "web",
    link:"https://github.com/12-ManiTej/Autoguide"
  },
  {
    id: 5,
    title: "Propredict",
    description: "Created a house listing platform with accurate price calculations using Random Forest Regression for reliable predictions. Integrated real-time market news to provide current insights and improve user experience.",
    imageUrl: propredict,
    category: "web",
    link:"https://github.com/12-ManiTej/Propredict/tree/master"
  },
  {
    id: 6,
    title: "Portfolio",
    description: "Explore this React portfolio showcasing skills, projects, and professional journey. Discover diverse technologies and frameworks through practical project examples. Feel free to reach out for more information or collaborations.",
    imageUrl: portfolio,
    category: "web",
    link:"https://github.com/12-ManiTej/Portfolio"
  },
  {
    id: 7,
    title: "Tic Tac Toe",
    description: "This Python program implements a Tic Tac Toe game for two players ('X' and 'O') in a 3x3 grid. It validates inputs, checks win conditions, and ends when there's a winner or a draw, running entirely in the terminal with basic Python features.",
    imageUrl: tictactoe,
    category: "basic",
    link:"https://github.com/12-ManiTej/Tic-Tac-Toe"
  },
  {
    id: 8,
    title: "Drum Kit",
    description: "This project is a virtual drum kit created using HTML, CSS, and JavaScript. It allows users to play drum sounds by clicking on pads or pressing keys on their keyboard. The design resembles a traditional drum kit layout and provides interactive drumming experience directly in the browser.",
    imageUrl: drumkit,
    category: "web",
    link:"https://github.com/12-ManiTej/Drum-Kit"
  },
  {
    id: 9,
    title: "Propredict",
    description: "Created a house listing platform with accurate price calculations using Random Forest Regression for reliable predictions. Integrated real-time market news to provide current insights and improve user experience.",
    imageUrl: propredict,
    category: "ML",
    link:"https://github.com/12-ManiTej/Propredict/tree/master"
  },
  {
    id: 10,
    title: "Spam Mail Detection",
    description: "This project uses Logistic Regression to classify emails as spam or not spam based on word frequency and keywords. Trained on labeled data, it enhances email security by identifying spam patterns effectively.",
    imageUrl: spam,
    category: "ML",
    link:"https://github.com/12-ManiTej/Spam-Mail-Detection"
  },
  {
    id: 11,
    title: "Water Probability Detection",
    description: "This project uses Support Vector Classification (SVC) to predict water probability. It analyzes various features and data points to determine the likelihood of water presence in a given area. The model is trained on historical data to accurately identify patterns and make predictions.",
    imageUrl: water,
    category: "ML",
    link:"https://github.com/12-ManiTej/Water-Probability-Prediction"
  },
  {
    id: 12,
    title: "Image Dehazing",
    description: "This project utilizes Convolutional Neural Networks (CNN) to effectively remove haze from images, significantly improving visibility and image quality with advanced deep learning techniques. It demonstrates the application of CNNs in real-time image enhancement tasks.",
    imageUrl: dehaze,
    category: "AI",
    link:"https://github.com/12-ManiTej/Image-Dehazing"
  },
  {
    id: 13,
    title: "GeminiVerse",
    description: "GeminiVerse is a versatile platform featuring a chatbot, image captioning, editing, generation, health app functionalities, and image dehazing using LangChain. It integrates these tools for enhanced communication, image processing, and health monitoring.",
    imageUrl: gemini,
    category: "AI",
    link:"https://github.com/12-ManiTej/GeminiVerse"
  },
  {
    id: 14,
    title: "IT Department portal",
    description: "I led the development of the IT department website, focusing on college programs and notification alerts. The interface is user-friendly with responsive design for better accessibility and engagement. I also improved maintenance procedures for continuous support.",
    imageUrl: IT,
    category: "web",
    link:"https://github.com/12-ManiTej/IT-web"
  },
  {
    id: 15,
    title: "HealthCare",
    description: "Developed a healthcare mobile app using React Native, MongoDB, and Amazon Lex, featuring video consultations, an AI-powered chatbot for health assistance, appointment booking, and user activity tracking for personalized insights. The app leverages Generative AI for intelligent responses and seamless interaction. Designed to enhance accessibility, it provides a comprehensive solution for modern healthcare needs.",
    imageUrl: IT,
    category: "AI",
    link:"https://github.com/12-ManiTej/Eureka-Mental-Health-Care-App"
  }
  // Add more projects as needed
];

function Projects() {
  const [filter, setFilter] = useState("all"); 

  // Function to filter projects based on category
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div id="projects">
      <ShapeDivider />
      <center>
        <h1 className="projects__heading">Projects<span className='dot'>.</span></h1>
      </center>
      <br></br>
      <Container>
        {/* Filter buttons */}
        <div className="text-center mb-4">
          <Button
            variant="outline-light"
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant="outline-light"
            className={`filter-button ${
              filter === "basic" ? "active" : ""
            }`}
            onClick={() => setFilter("basic")}
          >
            Basic
          </Button>
          <Button
            variant="outline-light"
            className={`filter-button ${
              filter === "web" ? "active" : ""
            }`}
            onClick={() => setFilter("web")}
          >
            Web
          </Button>
          <Button
            variant="outline-light"
            className={`filter-button ${
              filter === "ML" ? "active" : ""
            }`}
            onClick={() => setFilter("ML")}
          >
            ML
          </Button>
          <Button
            variant="outline-light"
            className={`filter-button ${
              filter === "AI" ? "active" : ""
            }`}
            onClick={() => setFilter("AI")}
          >
           AI
          </Button>
          {/* Add more filter buttons as needed */}
        </div>

        {/* Display projects based on current filter */}
        <Row className="justify-content-center">
          {filteredProjects.map((project) => (
            <Col key={project.id} xs={12} md={6} className="d-flex justify-content-center mb-4">
              <div className="project-card">
              <TiltCard
  title={project.title}
  description={project.description}
  imageUrl={project.imageUrl}
  category={project.category}
  link={project.link} // Make sure each project object has a 'link' property
/>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
