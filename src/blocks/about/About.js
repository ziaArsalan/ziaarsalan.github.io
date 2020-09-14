import React from 'react';
import './About.css';
import { welcome } from '../../Profile'
import Hexagons from '../../components/hexagons/Hexagons';
import Technologies from '../technology/Technology';
import Fade from 'react-reveal/Fade';

export default function About() {
    return (
        <div id="about" className="main-wrap">
            <Fade top distance="60px" duration={1000}>
                <div className="title">about</div>
            </Fade>
            <div className="subtitle">
                <div className="para-color intro-details">{welcome.detailIntro}</div>
            </div>
            <Hexagons />
            <Technologies />
        </div>
    )
}
