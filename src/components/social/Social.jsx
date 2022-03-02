import React from 'react';
import './Social.css';
import { social } from '../../data';
import { Icon } from '@iconify/react';

export default function About() {
    return (
        <div className="social-wrap">
            {social.map((platform, index) => (
                <a key={index} href={platform.link} target="_blank">
                    <div className="social-icon">
                        <Icon icon={platform.icon} />
                    </div>
                </a>
            ))}
        </div>
    )
}
