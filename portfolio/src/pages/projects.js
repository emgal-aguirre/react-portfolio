import React, { Component } from 'react';
import Wrapper from '../components/wrapper';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Projects = () => {
  const projectInfo = [
    {
      image:
        'https://500px.com/photo/1016968550/Circumambulation-by-Raimondo-Jereb/',
      title: 'Emily',
      text: 'Here is my text',
    },
    {
      image:
        'https://500px.com/photo/1016968550/Circumambulation-by-Raimondo-Jereb/',
      title: 'Carlos',
      text: 'Here is my text',
    },
    { image: '', title: 'Mackenzie', text: 'Here is my text' },
    { image: '', title: 'Nate', text: 'Here is my text' },
    { image: '', title: 'Luisa', text: 'Here is my text' },
    { image: '', title: 'Madeline', text: 'Here is my text' },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Wrapper>
      <h4 className="text-center header">Projects</h4>
      <p className="text-center">Check out some of my projects down below!</p>
      <div>{projectInfo.map(renderCard)}</div>;
    </Wrapper>
  );
};

export default Projects;
