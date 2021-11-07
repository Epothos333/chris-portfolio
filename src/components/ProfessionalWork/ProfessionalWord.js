import React, { useEffect, useRef, useState } from 'react';
import { ProfeshCard } from './ProfeshCard';
import ford from './logos/fordLogo.png';
import royal from './logos/royal.png';
import double from './logos/double.png';
import natGeo from './logos/natGeo.png';
import pearson from './logos/pearson.png';
import weather from './logos/weather.png';
import './style.css';
import { useViewPort } from '../../hooks/useViewPort';

export function ProfessionalWork() {
  const theRef = useRef(null);
  const {isMobile} = useViewPort();
  const [show, setShow] = useState(undefined);

  const handleSetShow = (id) => {
    if (id === show) {
      setShow(undefined)
    } else {
      setShow(id)
    }
  }

  return (
    <section ref={theRef} className="Profoessional-Section" id="profession-work">
      <h1 className="Profesh-Header">Professional Work</h1>
      <div className={`${isMobile ? 'Flex-Column' : 'Flex-Row'} Full-Width J-S-B Cards-Container`}>
        <ProfeshCard
          logo={ford}
          color={'rgb(26,100,209)'}
          client={'The Ford Motor Company'}
          project={'Re-Imagine the Purchasing Process'}
          need={'Retain new employees'}
          to={'ford'}
          show={show === 'ford'}
          setShow={() => handleSetShow('ford')}
        />
        <ProfeshCard
          title={'Strategic Partners'}
          color={'rgb(120, 169, 243)'}
          client={'Strategic Partners Real Estate - Tampa Water Street'}
          project={'Create a virtual assistant for visitors and locals'}
          need={'Keep users in touch with the latest happenings'}
          to={'tampa'}
          show={show === 'tampa'}
          setShow={() => handleSetShow('tampa')}
        />
        <ProfeshCard
          logo={royal}
          color={'rgb(1,161,198)'}
          client={'Royal Carribean'}
          project={'Re-Design the 3-Day cruise experience'}
          need={'Capture more and new cruise travelers'}
          to={'royal'}
          show={show === 'royal'}
          setShow={() => handleSetShow('royal')}
        />
        <ProfeshCard
          logo={double}
          color={'rgb(80,196,223)'}
          client={'Smithsonian + National Geographic'}
          project={'Creating your own American Story'}
          need={'Digital transformation, increase attendance'}
          to={'smith'}
          show={show === 'smith'}
          setShow={() => handleSetShow('smith')}
        />
        <ProfeshCard
          logo={natGeo}
          color={'rgb(206, 125,253)'}
          client={'NatGeo Science Expeditions'}
          project={'Build a digital real-time Science program'}
          need={'Digital transformation'}
          to={'natgeo'}
          show={show === 'natgeo'}
          setShow={() => handleSetShow('natgeo')}
        />
        <ProfeshCard
          logo={pearson}
          color={'rgb(161,15,255)'}
          client={'Pearson Education'}
          project={'enVisionMATH K-5 student and teacher math program'}
          need={'Reinvent the math learning experience'}
          to={'pearson'}
          show={show === 'pearson'}
          setShow={() => handleSetShow('pearson')}
        />
        <ProfeshCard
          logo={weather}
          color={'rgb(49,185,168)'}
          client={'The Source'}
          project={'Digital story about the coffee industry'}
          need={'Informative human interest story'}

          to={'weather'}
          show={show === 'weather'}
          setShow={() => handleSetShow('weather')}
        />
        <ProfeshCard
          title={'User Research Studies'}
          color={'rgb(19,139,125)'}
          client={'Various Clients'}
          project={'Website audit and redesign recommendations'}
          need={'Improve adoption rates'}
          to={'user'}
          show={show === 'user'}
          setShow={() => handleSetShow('user')}
        />
      </div>
    </section>
  )
}