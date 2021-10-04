import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useViewPort } from '../../hooks/useViewPort';
import { IoMenu } from "react-icons/io5";
import './style.css';
import { MobileMenu } from '../MobileMenu/MobileMenu';

export function Banner() {
  const [open, setOpen] = useState(false);
  const { isMobile } = useViewPort();
  // console.log(isMobile)
  return (
    <div className="Banner Flex-Column">
      <section className="Flex-Row Full-Width J-S-A A-C">
        <p>Chris | Christopher | Roy</p>
        {isMobile ? <IoMenu size={40} color={'white'} onClick={() => setOpen(true)} /> : (
          <div className="Flex-Row Links J-S-A A-C">
            <AnchorLink className="Nav-Link" href="#profession-work">WORK</AnchorLink>
            <AnchorLink className="Nav-Link" href="#about">ABOUT</AnchorLink>
            <AnchorLink className="Nav-Link" href="#cv">CV</AnchorLink>
            <AnchorLink className="Nav-Link" href="#contact">CONTACT</AnchorLink>
          </div>
        )}
      </section>
      <section className={`Flex-Row A-C Banner-List-Items ${isMobile ? 'J-F-S' : 'J-F-E'}`}>
        <div className="Flex-Column List-Paras J-S-B">
          <div className="Hover-Container">
            <p className="Banner-Hover">COLLABORATOR</p>
            <p className="Banner-Hover">STRATEGIST</p>
            <p className="Banner-Hover">RESEARCHER</p>
            <p className="Banner-Hover">CONCEPTOR</p>
            <p className="Banner-Hover">BUILDER</p>
          </div>
          {!isMobile &&
          <AnchorLink href="#profession-work">
            <button className="Banner-Button Cursor-Pointer">Professional Work</button>
          </AnchorLink>
          }
        </div>
      </section>
      {isMobile &&
        <AnchorLink href="#profession-work" className="A-S-C">
          <button className="Banner-Button">Professional Work</button>
        </AnchorLink>
      }
      {open &&
        <MobileMenu handleClick={() => setOpen(false)} />
      }
    </div>
  )
}