import React from 'react';
import { useViewPort } from '../../../hooks/useViewPort';
import icon from './icon.png';

export function Footer() {
  const { isMobile } = useViewPort();
  return (
    <div className="Flex-Column A-C J-C Footer-Container">
      <p className="Light-Text Phone-Number">Contact: 773-297-7062</p>
      {isMobile &&
        <p className="Light-Text">Email: croy9ch@gmail.com</p>
      }
      <a href={'https://www.linkedin.com/in/cmroy/'} target="_blank" rel="noreferrer">
        <img src={icon} alt="Linkedin-Link" className="Linkedin-Icon Cursor-Pointer" onClick={() => console.log('took')} />
      </a>
      <p className="Light-Text">Chris | Christopher | Roy</p>
    </div>
  )
}