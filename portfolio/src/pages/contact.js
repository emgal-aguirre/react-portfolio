import React from 'react';
import Wrapper from '../components/wrapper';

function Contact() {
  return (
    <Wrapper>
      <h4 className="text-center header">Contact Me</h4>
      <p className="text-center">Want to work with me? Reach out.</p>
      <br></br>
      <div className="card contact-card mt-10">
        <div className="card-body">
          <h5 className="card-title p-1">
            <strong>Let's Chat!</strong>
          </h5>
          <p>
            I'd love to work with you. The best way to reach me is via email,
            send me an introductory email and I will reach out to you within the
            week.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <i className="fa p-3"></i>
            emgal.aguirre@gmail.com
          </li>
          <li className="list-group-item">
            <i className="fa p-3"></i>
            806-290-8715
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}

export default Contact;
