import React from 'react';
import Marquee from "react-fast-marquee";
import a1 from './companyLogos/1.svg';
import a2 from './companyLogos/2.svg';
import a3 from './companyLogos/3.svg';
import a4 from './companyLogos/4.svg';
import a5 from './companyLogos/5.png';
import a6 from './companyLogos/6.png';
import a8 from './companyLogos/8.svg';
import a9 from './companyLogos/9.png';
import a12 from './companyLogos/12.svg';
import a13 from './companyLogos/13.svg';
import a14 from './companyLogos/14.svg';
import a15 from './companyLogos/15.svg';
import a16 from './companyLogos/16.png';
import './style.css';
import { useViewPort } from '../../hooks/useViewPort';


export function CompanyLogos() {
  const {isMobile} = useViewPort();
  if (isMobile) return <span></span>
  return (
   <Marquee style={{display: 'flex', alignItems: 'center'}}>
     <img src={a1} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a2} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a3} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a4} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a5} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a6} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a8} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a9} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a12} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a13} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a14} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a15} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
     <img src={a16} alt="compant-logo" style={{flex: 1, minWidth: '100px', padding: '0px 20px'}}/>
   </Marquee>
  )
}