import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useViewPort } from '../../hooks/useViewPort';
import { ProjectPage } from '../ProjectPage/ProjectPage';

export function ProfeshCard({ color, client, project, need, logo, title, to, show, setShow }) {
  // const [show, setShow] = useState(false);
  const { isMobile } = useViewPort();
  const history = useHistory();
  
  const handleClick = () => {
    if (isMobile) {
      setShow(!show);
    } else {
      history.push(`/project/${to}`)
    }
  }
  return (
    <>
      <div onClick={handleClick} className="Card-Container Cursor-Pointer" style={{ backgroundColor: color }}>
        {logo &&
          <img src={logo} className={'Profesh-Logo'} alt={'Logo'} />
        }
        {title &&
          <p>{title}</p>
        }
        {!isMobile &&
          <>
            <section className="Bullets">
              <p className="Light-Text">Client: {client}</p>
              <p className="Light-Text">Project: {project}</p>
              <p className="Light-Text">Business need: {need}</p>
            </section>
          </>
        }
      </div>
      {show &&
        <ProjectPage url={to} />
      }
    </>
  )
}

