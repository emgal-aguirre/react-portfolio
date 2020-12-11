import React from 'react';
import Wrapper from '../components/wrapper';

function Resume() {
  return (
    <Wrapper>
      <h4 className="text-center header">Resume</h4>
      <p className="text-center">Check out some of my relevant experience! </p>
      <div className="card resume-card mt-10">
        <div className="card-body">
          <h5 className="card-title p-1">Education</h5>
        </div>
      </div>
    </Wrapper>
  );
}

export default Resume;
