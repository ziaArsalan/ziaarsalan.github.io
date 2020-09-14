import React from 'react';
import './Hexagons.css';
import { hexDetail } from '../../Profile'
import { Icon } from '@iconify/react';

import Flip from 'react-reveal/Flip';

export default function Hexagons() {
    return (
        <div className="hex-wrap">
            <div className="row">

                {hexDetail.map((item, index) => (
                    <div key={index} className="hex-col">
                        <Flip right>
                            <div className="hexagon">
                                <div className="hexagon-img">
                                    <Icon icon={item.icon} width="80px" color="#fff"/>
                                </div>
                            </div>
                            <div className="hex-text">
                                <div className="hex-heading">{item.heading}</div>
                                <p className="para-color hex-para">{item.description}</p>
                            </div>
                        </Flip>
                    </div>
                ))}

            </div>
        </div>
    )
}
