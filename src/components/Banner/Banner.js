import React from 'react';
import './style.css';

export function Banner() {
  return (
    <div className="Banner">
      <section className="Flex-Row Full-Width J-S-A A-C">
        <p>Chris | Christopher | Roy</p>
        <div className="Flex-Row Links J-S-A A-C">
          <p>WORK</p>
          <p>ABOUT</p>
          <p>CV</p>
          <p>CONTACT</p>
        </div>
      </section>
      <section className="Flex-Row J-S-A A-C Banner-List-Items">
        <div></div>
        <div>
          <p>COLLABORATOR</p>
          <p>STRATEGIST</p>
          <p>RESEARCHER</p>
          <p>CONCEPTOR</p>
          <p>BUILDER</p>
        <button className="Banner-Button">Professional Work</button>
        </div>
      </section>
    </div>
  )
}