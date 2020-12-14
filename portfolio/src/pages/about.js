import React from 'react';
import Wrapper from '../components/wrapper';
import '../App.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Box from '../components/box.css';

function About() {
  return (
    <Wrapper>
      <container class="about">
        <div className="row about-row">
          <div className="col-6">
            left
            <Card class="bio-card" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title class="name headshot-name">
                  Emily <br></br>Aguirre
                </Card.Title>
                <hr class="solid-blue" />
                <Card.Subtitle class="mb-2 text-muted title">
                  FRONT END DEVELOPER
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
          <div className="col-6">
            right
            <h1 class="about-text">Hello</h1>
            <Button class="btn btn-primary resume-btn">RESUME</Button>
            <Button class="btn btn-outline-dark project-btn">PROJECTS</Button>
            <p>
              Hello, I'm Emily, a Front-end Developer and designer based in
              Austin, Texas.
              <br />
              <br />I enjoy developing beautiful and functional websites.
            </p>
          </div>
        </div>
      </container>
    </Wrapper>
  );
}

export default About;
