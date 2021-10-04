import React from 'react';
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
  const {isMobile} = useViewPort();
  return (
    <section className="Profoessional-Section" id="profession-work">
      <h1 className="Profesh-Header">Professional Work</h1>
      <div className={`${isMobile ? 'Flex-Column' : 'Flex-Row'} Full-Width J-S-B Cards-Container`}>
        <ProfeshCard
          logo={ford}
          color={'rgb(26,100,209)'}
          client={'The Ford Motor Company'}
          project={'Re-Imagine the Purchasing Process'}
          need={'Retain new employees'}
          to={'ford'}
        />
        <ProfeshCard
          title={'Strategic Partners'}
          color={'rgb(120, 169, 243)'}
          client={'Strategic Partners Real Estate - Tampa Water Street'}
          project={'Create a virtual assistant for visitors and locals'}
          need={'Keep users in touch with the latest happenings'}
          to={'tampa'}
        />
        <ProfeshCard
          logo={royal}
          color={'rgb(1,161,198)'}
          client={'Royal Carribean'}
          project={'Re-Design the 3-Day cruise experience'}
          need={'Capture more and new cruise travelers'}
          to={'royal'}
        />
        <ProfeshCard
          logo={double}
          color={'rgb(80,196,223)'}
          client={'Smithsonian + National Geographic'}
          project={'Creating your own American Story'}
          need={'Digital transformation, increase attendance'}
          to={'smith'}
        />
        <ProfeshCard
          logo={natGeo}
          color={'rgb(206, 125,253)'}
          client={'NatGeo Science Expeditions'}
          project={'Build a digital real-time Science program'}
          need={'Digital transformation'}
          to={'natgeo'}
        />
        <ProfeshCard
          logo={pearson}
          color={'rgb(161,15,255)'}
          client={'Pearson Education'}
          project={'enVisionMATH K-5 studen and teacher math program'}
          need={'Reinvent the math learning experience'}
          to={'pearson'}
        />
        <ProfeshCard
          logo={weather}
          color={'rgb(49,185,168)'}
          client={'The Source'}
          project={'Digital story about the coffee industry'}
          need={'Informative human interest story'}

          to={'weather'}
        />
        {/* <ProfeshCard
          title={'Frost Science'}
          color={'rgb(19,139,125)'}
          client={'The Frost Science Musuem'}
          project={'Musuem opening'}
          need={'Inform the public of the attractions available'}

        /> */}
        <ProfeshCard
          title={'Queso: Heuristic Research'}
          color={'rgb(119, 192, 73)'}
          client={'The University of Miami'}
          project={'Website audit and redesign'}
          need={'Improve adoption rates'}
          to={'user'}
        />
        {/* <div className="Card-Container Cursor-Pointer Monster-Card" style={{ backgroundColor: 'rgb(168,219,95)' }}>
        </div> */}
      </div>
    </section>
  )
}