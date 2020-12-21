import React from 'react';
import Wrapper from '../components/wrapper';
import '../App.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Box from '../components/box.css';
import headshot from '../Assets/images/Headshot_EGA.png';

function About() {
  return (
    <Wrapper>
      <br></br>
      <br></br>
      <Card></Card>
      <div className="card resume-card">
        <div className="card-body">
          <Card.Body>
            <img
              className="headshot center"
              src={headshot}
              style={{ borderradius: 50, maxWidth: 250 }}
            ></img>
            <Card.Title class="name headshot-name">
              Emily <br></br>Aguirre
            </Card.Title>

            <p className="center">
              Hello, I'm Emily, a Front-end Developer <br></br>and designer
              based in Austin, Texas.
              <br />
              <br />I enjoy developing beautiful and functional websites.
            </p>
            <hr className="solid-blue" />

            <Card.Subtitle className="mb-2 text-muted title">
              FRONT END DEVELOPER
            </Card.Subtitle>
          </Card.Body>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
