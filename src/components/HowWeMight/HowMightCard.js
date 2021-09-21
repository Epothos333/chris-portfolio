import React from 'react';

export function HowMightCard({src, caption, text, dex}) {
  return (
    <div className="Flex-Column A-F-S J-S-B How-Might-Card">
      <div className={`HSM-IMG Dex-${dex}`}></div>
      {/* <img src={src} alt="Demo" className="HWM-Img"/> */}
      <p className="HWM-Caption Light-Text">{caption}</p>
      <p className="HMW-Text"><span className="Bold Highlight">How Might We...</span> <span className="Light-Text">{text}</span></p>
    </div>
  )
}