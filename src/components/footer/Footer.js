import React from 'react';
import './Footer.css';
import { footer } from '../../Profile'

export default function Footer() {
    return (
        <div className="footer-line">{footer.tagLine}</div>
    )
}
