import React from 'react';
import ford from '../../ProfessionalWork/logos/fordLogo.png';

export function ProjectInfo({ data: { title, lines, roles } }) {
  return (
    <div className={'Project-Info-Container'}>
      <img src={ford} alt="Logo" className={'Project-Info-Logo'} />
      <h2>{title}</h2>
      <span className='Light-Text'>
        {lines.map((line, index) => <p key={`${index}-line`}>{line}</p>)}
        <ul>
          {roles.map((role, index) => <li key={`${index}-list`}>{role}</li>)}
        </ul>
      </span>
    </div>
  )
}