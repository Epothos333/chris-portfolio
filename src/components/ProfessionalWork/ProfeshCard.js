import React from 'react';
import { Link } from 'react-router-dom';

export function ProfeshCard({ color, client, project, need, logo, title, to }) {
  return (
    <Link to={`/project/${to}`} className="Card-Container Cursor-Pointer" style={{ backgroundColor: color }}>
      {/* <p>Frost Science</p> */}
      {logo &&
        <img src={logo} className={'Profesh-Logo'} alt={'Logo'} />
      }
      {title &&
        <p>{title}</p>
      }
      <section className="Bullets">
        <p className="Light-Text">Client: {client}</p>
        <p className="Light-Text">Project: {project}</p>
        <p className="Light-Text">Business need: {need}</p>
      </section>
    </Link>
  )
}