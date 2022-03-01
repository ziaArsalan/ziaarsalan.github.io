import React from 'react';
import './Technology.css';
import { technologies } from '../../data'
import { Icon } from '@iconify/react';

export default function Technologies() {
    return (
       <div className='pl'>
            <h3 className="pl-title tech-title">I Keep My Hands Dirty With These Technologies</h3>
            <div className='tech-row'>
                <h4 className='tech-cat'>Frontend</h4>
                <div>
                    {technologies.forntend.map(icon=><div>
                        <Icon icon={icon.icon} className="tech-icon" />
                        <p className='a-desc tech-desc'>{icon.name}</p>
                    </div>)}

                </div>
            </div>
            <div className='tech-row'>
                <h4 className='tech-cat'>Backend</h4>
                <div>
                    {technologies.backend.map(icon=><div>
                        <Icon icon={icon.icon} className="tech-icon" />
                        <p className='a-desc tech-desc'>{icon.name}</p>
                    </div>)}

                </div>
            </div>
            <div className='tech-row'>
                <h4 className='tech-cat'>Database</h4>
                <div>
                    {technologies.database.map(icon=><div>
                        <Icon icon={icon.icon} className="tech-icon" />
                        <p className='a-desc tech-desc'>{icon.name}</p>
                    </div>)}

                </div>
            </div>
            <div className='tech-row'>
                <h4 className='tech-cat'>Server/Cloud Computing</h4>
                <div>
                    {technologies.server.map(icon=><div>
                        <Icon icon={icon.icon} className="tech-icon" />
                        <p className='a-desc tech-desc'>{icon.name}</p>
                    </div>)}

                </div>
            </div>
            <div className='tech-row'>
                <h4 className='tech-cat'>Others</h4>
                <div>
                    {technologies.other.map(icon=><div>
                        <Icon icon={icon.icon} className="tech-icon" />
                        <p className='a-desc tech-desc'>{icon.name}</p>
                    </div>)}

                </div>
            </div>
       </div>
    )
}
