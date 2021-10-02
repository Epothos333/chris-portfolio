import React from 'react';

export function ProjectInfo({ data: { title, lines, roles, logo, backgroundColor, logoWidth, link, more } }) {
  return (
    <div className={'Project-Info-Container'} style={{ backgroundColor }}>
      <div className={'Project-Info-Logo-Container'} >

        <img src={logo} alt="Logo" className={'Project-Info-Logo'} style={{ width: logoWidth + '%' }} />
      </div>
      <h2>{title}</h2>
      <span className='Light-Text'>
        {lines.map((line, index) => <p key={`${index}-line`}>{line}</p>)}
        <ul>
          {roles.map((role, index) => <li key={`${index}-list`}>{role}</li>)}
        </ul>
        {link &&
          <button className="Banner-Button Link-Button">
            <a href={link} target="_blank" rel="noreferrer" >
              Link to Project
            </a>
          </button>
        }
      </span>
      {more &&
        <>
          <h2>{more.title}</h2>
          {more.lines.map((line, index) => <p className="Light-Text" key={`${index}-line-two`}>{line}</p>)}
        </>
      }
    </div>
  )
}