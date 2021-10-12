import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {AiOutlineClose} from 'react-icons/ai'
import './style.css';

export const MobileMenu = ({handleClick}) => {
  return (
    <section className="Mobile-Menu-Container">
          <div className="Flex-Column A-C Mobile-Menu-Top J-S-A">
            <AiOutlineClose onClick={handleClick} className={'Menu-Close'}/>
            <AnchorLink className="Nav-Link-Mobile" href="#profession-work" onClick={handleClick}>WORK</AnchorLink>
            <AnchorLink className="Nav-Link-Mobile" href="#about" onClick={handleClick}>ABOUT</AnchorLink>
            <AnchorLink className="Nav-Link-Mobile" href="#cv" onClick={handleClick}>CV</AnchorLink>
            {/* <AnchorLink className="Nav-Link" href="#contact" onClick={handleClick}>CONTACT</AnchorLink> */}
          </div>
          <div className="Mobile-Menu-Bottom"/>
    </section>
  )
}