import React from 'react';
import './Project.css';
import { projects } from '../../Profile';
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

export default function Project() {
    return (
       <div id="projects" className="main-wrap">
           <Fade top distance="60px" duration={1000}>
                <div className="title">Projects</div>
            </Fade>
           <div className="row project-row">
              {Object.values(projects).map((project)=>(
                <ProjectDetails 
                  name        = {project.name}
                  description = {project.description}
                  link        = {project.link}
                  imageUrl    = {project.imageUrl}
                />
              ))}
           </div>
       </div>
    )
}

const ProjectDetails = ({name, description, link, imageUrl}) => {
  return (
    <Zoom bottom duration={1200}>
      <div className="col-6">
        <a href={link} target="_blank" className="card-link">
          <div className="card">
              <div><img src={require('../../assets/' + imageUrl)} width="100%"/></div>
              <div className="card-body">
                <div className="card-title">{name}</div>
                <div className="description">About</div>
                <p className="para-color">{description}</p>
              </div>
          </div>
        </a>
      </div>
    </Zoom>
  )
}
