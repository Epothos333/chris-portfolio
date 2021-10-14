import React from 'react';
import { useParams } from 'react-router';
import { useViewPort } from '../../hooks/useViewPort';
import { ProjectContent } from './components/ProjectContent';
import { ProjectInfo } from './components/ProjectInfo';
import { projectData } from './projectData';
import './style.css';

export function ProjectPage({url}) {
  let {id} = useParams();
  if (url) {
    id = url;
  }
  const data = projectData.filter((proj) => id === proj.id)[0];
  const {isMobile} = useViewPort();
  if (!data) return <div />

  return (
    <div className={`Project-Page-Container ${isMobile ? 'Flex-Column' : 'Flex-Row'}`}>
      <ProjectInfo data={data.info}/>
      <ProjectContent data={data.content} border={data.info.backgroundColor}/>
    </div>
  )
}