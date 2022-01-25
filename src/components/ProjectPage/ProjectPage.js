import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useViewPort } from '../../hooks/useViewPort';
import { ProjectContent } from './components/ProjectContent';
import { ProjectInfo } from './components/ProjectInfo';
import { projectData } from './projectData';
import BeatLoader from "react-spinners/BeatLoader";
import './style.css';

export function ProjectPage({ url }) {
  const [visible, setVisible] = useState(false)
  let { id } = useParams();
  if (url) {
    id = url;
  }
  const data = projectData.filter((proj) => id === proj.id)[0];
  const { isMobile } = useViewPort();

  useEffect(() => {
    setTimeout(() => setVisible(true), 5000)
  }, [])

  if (!data) return <div />

  return (
    <>
      {!visible &&
        <div className='Flex-Column A-C J-C Loader-Container '>
          <BeatLoader color={'blue'} size={30} />
          <p style={{color: '#2f2f38'}}>Loading project. One moment please ...</p>
        </div>
      }
      <div className={`Project-Page-Container ${isMobile ? 'Flex-Column' : 'Flex-Row'}`} style={{ visibility: visible ? 'visible' : 'hidden' }}>

        <ProjectInfo data={data.info} />
        <ProjectContent data={data.content} border={data.info.backgroundColor} setVisible={() => setVisible(true)} />
      </div>
    </>
  )
}