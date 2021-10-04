import React from 'react';
import { useParams } from 'react-router';
import { ProjectContent } from './components/ProjectContent';
import { ProjectInfo } from './components/ProjectInfo';
import { projectData } from './projectData';
import './style.css';

export function ProjectPage() {
  const {id} = useParams();
  const data = projectData.filter((proj) => id === proj.id)[0];
  if (!data) return <div />

  return (
    <div className={'Project-Page-Container Flex-Row'}>
      <ProjectInfo data={data.info}/>
      <ProjectContent data={data.content} border={data.info.backgroundColor}/>
    </div>
  )
}