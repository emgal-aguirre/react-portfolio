import React from 'react';
import Wrapper from '../components/wrapper';
import '../App.css';
import button from 'react-bootstrap/Button';

// btn not working

function Resume() {
  return (
    <Wrapper>
      <h4 className="text-center header">Resume</h4>
      <p className="text-center">
        Check out some of my relevant experience.
        <a
          href="../assets/emilyAguirreResume.pdf"
          download
          class="btn btn-primary resume-btn"
          type="button"
          style={{ background: '#0d50ff' }}
        >
          Button
        </a>
      </p>
      {/* eduction */}
      <div className="card resume-card mt-10">
        <div className="card-body">
          <h5 className="card-title p-1">
            <strong>Education</strong>
          </h5>
          <hr />
          <div className="row">
            <div className="col-4">
              <h5 className="card-date">2020-Present</h5>
              <p className="resume-discription">University of Texas </p>
              <p className="card-text">Front-End Developer Coding Bootcamp</p>
            </div>
            <div className="col-8">
              <p className="resume-discription">
                <strong>Relevant Experience</strong>
              </p>
              <p className="card-text">
                •Gained foundational knowledge of web development. Creating
                weekly projects using HTML, CSS, JavaScript, API, AJAX, and
                bootstrap.
              </p>
              <p className="resume-discription">
                <strong>Technologies</strong>
              </p>
              <p className="card-text">
                HTML, CSS, JavaScript, Bootstrap, API, Ajax, Jquery, Visual
                Studio Code, and Github.
              </p>
            </div>
          </div>
          <hr />
          {/* WT */}
          <div className="row">
            <div className="col-4">
              <h5 className="card-date">2014-2018</h5>
              <p className="resume-discription">West Texas A&M</p>
              <p className="card-text">BA Business Administration</p>
            </div>
            <div className="col-8">
              <p className="resume-discription">
                <strong>Relevant Coursework</strong>
              </p>
              <p className="card-text">
                •Management Information Systems <br></br>
                •Product and Operations Management<br></br>
                •Leadership and Teamwork <br></br>
                •Organizational Behavior <br></br>
                •Strategic Management
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* experience */}
      <div className="card resume-card mt-10">
        <div className="card-body">
          <h5 className="card-title p-1">
            <strong>Experience</strong>
          </h5>
          <hr />
          <div className="row">
            <div class="col-4">
              <h5 class="card-date">2019-2020</h5>
              <p class="resume-discription">Roberts Truck Center </p>
              <p class="card-text">Marketing Manager</p>
            </div>
            <div class="col-8">
              <p class="resume-discription">
                <strong>Relevant Experience</strong>
              </p>
              <p class="card-text">
                •Designed and maintained website<br></br>
                •Designed and maintained internal e-commerce shop <br></br>
                •Managed Google My Business <br></br>
                •Assisted sales with developing Salesforce <br></br>
                •Ensured standardization of brand and messaging <br></br>
                •Developed and executed marketing plans and programs<br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card resume-card mt-10">
        <div className="card-body">
          <h5 className="card-title p-1">
            <strong>Technical Skillset </strong>
          </h5>
          <hr />
          <div className="row">
            <div className="col-6">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>API</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Bootstrap</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Resume;
