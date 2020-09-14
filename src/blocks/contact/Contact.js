import React from 'react';
import './Contact.css';
import { contact, profile } from '../../Profile'
import Social from '../../components/social/Social'
import Form from '../../components/form/Form'
// import Icon from '@iconify/react';
// import emailEditOutline from '@iconify/icons-mdi/email-edit-outline';
// import cardAccountPhoneOutline from '@iconify/icons-mdi/card-account-phone-outline';

export default function Contact() {
    return (
       <div id="contact" className="main-wrap">
            <div className="title">Contact</div>
        	<div className="subtitle contact-subtitle para-color">{contact.tagLine}</div>
            <Form />
            <Social />
            {/* <div className="contact-detail para-color">
                <div className="contact-email">
                    <Icon icon={emailEditOutline} className="contact-icon" />
                    {profile.email}
                </div>
                <div className="contact-phone">
                    <Icon icon={cardAccountPhoneOutline} className="contact-icon" />
                    {profile.phone}
                </div>
            </div> */}
       </div>
    )
} 