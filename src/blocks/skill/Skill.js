import React from 'react';
import './Skill.css';
import { skills } from '../../Profile';
import Fade from 'react-reveal/Fade'

export default function Skill() {
    return (
       <div id="skills" className="main-wrap">
           <Fade top distance="60px" duration={1000}>
                <div className="title">Skills</div>
            </Fade>
           <div className="row skill-row">
               <Fade left>
                    <div className="col-6">
                        <div className="skill-tagLine">{skills.tagLine}</div>
                        {skills.points.map((point, index) => (<div key={index} className="skill-points para-color" >{point}</div>))}
                    </div>
               </Fade>
               <Fade right>
                    <div className="col-6">
                        <img src={require("../../assets/img/full-stack.png")} width="90%" />
                    </div>
               </Fade>
           </div>
       </div>
    )
}
