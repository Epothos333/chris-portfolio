import React from 'react';
import { HowMightCard } from './HowMightCard';
import hwm1 from '../../assets/hmw1.jpeg';
import hwm2 from '../../assets/hmw2.JPG';
import hwm3 from '../../assets/hmw3.jpeg';
import './style.css';
import { useViewPort } from '../../hooks/useViewPort';

export function HowWeMight() {
  const { isMobile } = useViewPort();
  return (
    <section className="Flex-Column HWM-Container">
      <h2 className={'Highlight HMW-Section-Titile'}>How Might We ...</h2>
      <section className={`${isMobile ? 'Flex-Column' : 'Flex-Row'}`}>
        <HowMightCard
          src={hwm1}
          dex={1}
          caption={'Unconnect discovery sprint with FCA clients'}
          text={'Discover innovation through Discovery Sprints to define the Why, What, and Who our users are resonding and the pain points occurring in the current state.'}
        />
        <HowMightCard
          src={hwm2}
          dex={2}
          caption={'Ford Credit planning user flow and micro interactions'}
          text={'Begin planning as a team considering requirements and developing user stories, interviewing users and stakeholders, developing personas, and defining an MVP.'}
        />
        <HowMightCard
          src={hwm3}
          dex={3}
          caption={'Facilitating a team design thinking innovation activity'}
          text={'Explore and Ideate multiple solutions for the MVP considering the competition, market need, and customer feedback from various sources.'}
        />
      </section>
    </section>
  )
}

