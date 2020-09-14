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
              <Zoom bottom duration={1200}>
                <div className="col-6">
                  <a href={projects.walletly.link} target="_blank" className="card-link">
                    <div className="card">
                        <div><img src={require('../../assets/' + projects.walletly.imageUrl)} width="100%"/></div>
                        <div className="card-body">
                          <div className="card-title">{projects.walletly.name}</div>
                          <div className="description">About</div>
                          <p className="para-color">{projects.walletly.description}</p>
                        </div>
                    </div>
                  </a>
                </div>
              </Zoom>
              <Zoom bottom duration={1200}>
              <div className="col-6">
                <a href={projects.walletscan.link} target="_blank" className="card-link">
                  <div className="card">
                      <div><img src={require('../../assets/' + projects.walletscan.imageUrl)} width="100%"/></div>
                      <div className="card-body">
                        <div className="card-title">{projects.walletscan.name}</div>
                        <div className="description">About</div>
                        <p className="para-color">{projects.walletscan.description}</p>
                      </div>
                  </div>
                </a>
              </div>
              </Zoom>
              <Zoom bottom duration={1200}>
                <div className="col-6">
                  <a href={projects.minti.link} target="_blank" className="card-link">
                    <div className="card">
                        <div><img src={require('../../assets/' + projects.minti.imageUrl)} width="100%"/></div>
                        <div className="card-body">
                          <div className="card-title">{projects.minti.name}</div>
                          <div className="description">About</div>
                          <p className="para-color">{projects.minti.description}</p>
                        </div>
                    </div>
                  </a>
                </div>
              </Zoom>
              <Zoom bottom duration={1200}>
                <div className="col-6">
                  <a href={projects.monsterhub.link} target="_blank" className="card-link">
                    <div className="card">
                        <div><img src={require('../../assets/' + projects.monsterhub.imageUrl)} width="100%"/></div>
                        <div className="card-body">
                          <div className="card-title">{projects.monsterhub.name}</div>
                          <div className="description">About</div>
                          <p className="para-color">{projects.monsterhub.description}</p>
                        </div>
                    </div>
                  </a>
                </div>
              </Zoom>
           </div>
       </div>
    )
}
