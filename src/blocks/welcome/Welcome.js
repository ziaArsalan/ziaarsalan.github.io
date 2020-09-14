import React from 'react';
import './Welcome.css';
import { welcome } from '../../Profile';
import Pulse from 'react-reveal/Pulse';
import ButtonIcon from '../../components/button/ButtonIcon'


export default function Welcome() {
    return (
        <div className="welcome-main bg">
            <div className="welcome-head">
                <div>document.write <span className="hello-world">('</span></div>
                
                <div className="hello-world">
                    <Pulse forever>
                        <div>
                            <strong>{welcome.greet}</strong>
                        </div>
                    </Pulse>
                </div>

                <div className="hello-world">')<strong>;</strong></div>
            </div>
            <div className="subtitle">
                <div className="intro">{welcome.intro}</div>
            </div>
            <ButtonIcon text="View my work" className="welcome-button" href="#about"/>
        </div>
    )
}
