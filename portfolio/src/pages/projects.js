import React, { Component } from 'react';
import Wrapper from '../components/wrapper';
import { Card } from 'react-bootstrap';
import Box from '../components/box.css';

const Projects = () => {
  const projectInfo = [
    {
      image: 'portfolio/src/Assets/images/recipe-square.jpg',
      title: 'Random Recipe Generator',
      descriptionTitle: 'Description',
      description:
        'A simple script generates a random recipe based on the meal type the user selected',
      technologiesTitle: 'Technologies',
      technologies:
        'HTML 5, CSS, Materialize CDN, JavaScript, JQuery, APIs Used: Edamam, Moment.Js',
      link: 'https://emgal-aguirre.github.io/Recipe-Generator/',
      github: 'https://github.com/emgal-aguirre/Recipe-Generator',
    },
    {
      image: 'portfolio/src/Assets/images/listly-square.png',
      title: 'Listly App',
      descriptionTitle: 'Description',
      description:
        'Users can keep their to do list organized by entering a project name, discription and urgency level.',
      technologiesTitle: 'Technologies',
      technologies: 'HTML 5, CSS, Bootstrap and JavaScript, SQL',
      link: 'https://listlyassistant.herokuapp.com/',
      github: 'https://github.com/destaneelg/project2',
    },
    {
      image: 'portfolio/src/Assets/images/team-management.png',
      title: 'Team Management Directory',
      descriptionTitle: 'Description',
      description:
        'This application allows you to create an organized page of your team including their Name, Title, and contact information.',
      technologiesTitle: 'Technologies',
      technologies: 'HTML 5, CSS, Bootstrap and JavaScript, Node.js',
      link:
        'https://www.youtube.com/watch?v=BYRczhnrzp0&feature=youtu.be&ab_channel=EmilyGallawayAguirre',
      github: 'https://github.com/emgal-aguirre/team-management-directory',
    },
    {
      image: 'portfolio/src/Assets/images/mock-sqaure.jpg',
      title: 'Mock Agency Website',
      descriptionTitle: 'Description',
      description:
        'This project is a simple and responsive design that may be used as a template for small agencies',
      technologiesTitle: 'Technologies',
      technologies: 'HTML 5, CSS, Bootstrap and JavaScript',
      link: 'https://emgal-aguirre.github.io/mock-website/',
      github: 'https://github.com/emgal-aguirre/mock-website',
    },
    {
      image: 'portfolio/src/Assets/images/weather-sqaure.jpg',
      title: 'Daily Weather Dashboard',
      descriptionTitle: 'Description',
      description:
        'When a user searches a city’s current weather forecast appears including Temperature, Humidity, and Wind speed.',
      technologiesTitle: 'Technologies',
      technologies:
        'HTML 5, CSS, Bootstrap and JavaScript, Moment.js and a Weather API',
      link: 'https://emgal-aguirre.github.io/weather-dashboard/',
      github: 'https://github.com/emgal-aguirre/weather-dashboard',
    },
    {
      image: 'portfolio/src/Assets/images/quiz-sqaure.jpg',
      title: 'Javascript quiz',
      descriptionTitle: 'Description',
      description:
        'A user clicks to start the quiz. Upon starting the quiz a timer starts and for each question answered incorrectly, 10 points are deducted.',
      technologiesTitle: 'Technologies',
      technologies: 'HTML 5, CSS, Bootstrap and JavaScript',
      link: 'https://emgal-aguirre.github.io/Code-Quiz/',
      github: 'https://github.com/emgal-aguirre/Code-Quiz',
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title class="card-title blue">{card.title}</Card.Title>
          <Card.Subtitle class="resume-discription left">
            {card.descriptionTitle}
          </Card.Subtitle>
          <Card.Text class="left">{card.description}</Card.Text>
          <Card.Subtitle class="resume-discription left">
            {card.technologiesTitle}
          </Card.Subtitle>
          <Card.Text class="left">{card.technologies}</Card.Text>
          <Card.Link href={card.link} target="_blank" class="card-link">
            Check it Out
          </Card.Link>
          <Card.Link href={card.github} target="_blank" class="card-link">
            Git Hub Repo
          </Card.Link>
        </Card.Body>
      </Card>
    );
  };
  return (
    <Wrapper>
      <h4 className="text-center header">Projects</h4>
      <p className="text-center">Check out some of my projects down below!</p>
      <div className="grid">{projectInfo.map(renderCard)}</div>;
    </Wrapper>
  );
};

export default Projects;
