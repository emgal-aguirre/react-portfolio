import React from 'react';
import Wrapper from '../components/wrapper';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Box from '../components/box.css';

const About = () => {
  const cardInfo = [
    {
      image: 'portfolio/src/Assets/images/recipe-square.jpg',
      title: 'Emily Aguirre',
      description: 'Front-End Developer',
      link: 'https://emgal-aguirre.github.io/Recipe-Generator/',
      github: 'https://github.com/emgal-aguirre/Recipe-Generator',
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.description}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Wrapper>
      <div className="grid">{cardInfo.map(renderCard)}</div>;
    </Wrapper>
  );
};

export default About;
