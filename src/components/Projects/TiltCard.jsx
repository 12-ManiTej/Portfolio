import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import Card from 'react-bootstrap/Card';
import './TiltCard.css';

const TiltCard = ({ title, description, imageUrl, link }) => {
  const tiltRef = useRef();

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });

    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className="tilt-root">
      <Card className="tilt-card">
        <Card.Img variant="top" src={imageUrl} style={{ height: '250px', objectFit: 'cover' }} alt="Project" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <a href={link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TiltCard;
