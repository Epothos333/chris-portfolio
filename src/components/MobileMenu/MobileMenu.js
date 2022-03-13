import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { AiOutlineClose } from 'react-icons/ai'
import logo from './logo.png';
import './style.css';

export const MobileMenu = ({ handleClick }) => {
  return (
    <section className="Mobile-Menu-Container">
      <div className="Flex-Column A-C Mobile-Menu-Top J-S-A">
        <div className="Flex-Column A-C J-C Full-Width" style={{height: '100px'}}>
          <AiOutlineClose onClick={handleClick} className={'Menu-Close'} />
          <img src={logo} className={'Nav-Logo'} alt={'Chris Christopher Consulting Logo'} />
        </div>
        <AnchorLink className="Nav-Link-Mobile" href="#profession-work" onClick={handleClick}>WORK</AnchorLink>
        <AnchorLink className="Nav-Link-Mobile" href="#about" onClick={handleClick}>ABOUT</AnchorLink>
        <AnchorLink className="Nav-Link-Mobile" href="#cv" onClick={handleClick}>CV</AnchorLink>
        {/* <AnchorLink className="Nav-Link" href="#contact" onClick={handleClick}>CONTACT</AnchorLink> */}
      </div>
      <div className="Mobile-Menu-Bottom" />
    </section>
  )
}