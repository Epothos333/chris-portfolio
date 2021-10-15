import React from 'react';

const BOLD_TEXT = ['Project Overview', 'Business Need', 'My role included']

export function ProjectInfo({ data: { title, lines, roles, logo, backgroundColor, logoWidth, link, more } }) {
  return (
    <div className={'Project-Info-Container'} style={{ backgroundColor }}>
      <div className={'Project-Info-Logo-Container'} >

        <img src={logo} alt="Logo" className={'Project-Info-Logo'} style={{ width: logoWidth + '%' }} />
      </div>
      <h2>{title}</h2>
      <span className='Light-Text'>
        {lines.map((line, index) =>
          <p key={`${index}-line`} className={`${BOLD_TEXT.indexOf(line) !== -1 && 'Bold-Text'}`}>{line}</p>
        )}
        <ul style={{ textAlign: 'left' }}>
          {roles.map((role, index) => <li key={`${index}-list`}>{role}</li>)}
        </ul>
        {link &&
          <span className="Flex-Column J-C A-C">
            <button className="Banner-Button Link-Button">
              <a href={link} target="_blank" rel="noreferrer" >
                Link to Project
              </a>
            </button>
          </span>
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