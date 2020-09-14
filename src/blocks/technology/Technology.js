import React from 'react';
import './Technology.css';
import { technologies } from '../../Profile'
import Fade from 'react-reveal/Fade';
import { Icon } from '@iconify/react';

export default function Technologies() {
    return (
       <div>
            <div className="row skill-row reverse">
                <Fade left>
                    <div className="col-6">
                        <img src={require("../../assets/img/cloud-devops.png")} width="90%" />
                    </div>
               </Fade>
               <Fade right>
                    <div className="col-6">
                        <div className="skill-tagLine">{technologies.tagLine}</div>

                        <div className="technology-type para-color">{technologies.forntend.heading}</div>
                        <div className="technologiex-flex">
                            {technologies.forntend.technologies.map((technology, index) => (
                                  <div key={index} className="technologies para-color">
                                  <Icon icon={technology.icon} />
                                  <div className="technology-name">{technology.name}</div>
                              </div>
                            ))}
                        </div>
                        
                        <div className="backend-database-flex">
                            <div className="backend-database-col">
                                <div className="technology-type para-color">{technologies.backend.heading}</div>
                                <div className="technologiex-flex">
                                    {technologies.backend.technologies.map((technology, index) => (
                                        <div key={index} className="technologies para-color">
                                        <Icon icon={technology.icon} />
                                        <div className="technology-name">{technology.name}</div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            <div className="backend-database-col">
                                <div className="technology-type para-color">{technologies.database.heading}</div>
                                <div className="technologiex-flex">
                                    {technologies.database.technologies.map((technology, index) => (
                                        <div key={index} className="technologies para-color">
                                        <Icon icon={technology.icon} />
                                        <div className="technology-name">{technology.name}</div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="technology-type para-color">{technologies.server.heading}</div>
                        <div className="technologiex-flex">
                            {technologies.server.technologies.map((technology, index) => (
                                  <div key={index} className="technologies para-color">
                                  <Icon icon={technology.icon} />
                                  <div className="technology-name">{technology.name}</div>
                              </div>
                            ))}
                        </div>

                        <div className="technology-type para-color">{technologies.other.heading}</div>
                        <div className="technologiex-flex">
                            {technologies.other.technologies.map((technology, index) => (
                                  <div key={index} className="technologies para-color">
                                  <Icon icon={technology.icon} />
                                  <div className="technology-name">{technology.name}</div>
                              </div>
                            ))}
                        </div>
                    </div>
               </Fade>
           </div>
       </div>
    )
}
