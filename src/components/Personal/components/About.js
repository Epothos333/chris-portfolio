import React from 'react';
import ChrisRoyResume from './ChrisRoyResume.pdf';

export function About() {
  return (
    <section className="Flex-Column About-Section" id="about">
      <h1 className="About-Header">About</h1>
      <p className="Light-Text">
        I am passionate about true innovation and inspiring teams, which is best described as the art of discovering and creating change that adds value to any business.
      </p>
      <p className="Light-Text">
        Getting underneath what customers want, uncovering their frustrations and unfulfilled needs through discovery interviews, and bringing them along in the development process is what I love about my work. Ensuring the product or brand has a clearly articulated, unique purpose in the marketplace and simple guiding principles that anyone in a company can use to help them look at customer problems differently.  I call this customer design thinking arguably one of the essential tools a team possesses.
      </p>
      <a href={ChrisRoyResume} download>
        <button id="cv" className="Banner-Button" style={{ marginTop: '50px' }}>Download CV</button>
      </a>
    </section>
  )
}