import React from 'react';
import './Form.css';
import { contact, profile, loader } from '../../Profile'
import { useState } from 'react'

export default function Form() {
    const [inProcess, setProcess] = useState(false)

    async function call(event){
        event.preventDefault()
        document.getElementById('submit-btn').classList.add('loader-btn')
        setProcess(true)
    
        const name = event.target.elements.name.value
        const fromEmail = event.target.elements.email.value
        const subject = event.target.elements.subject.value
        const msg = event.target.elements.msg.value
        const toEmail = profile.contactEmail
    
        const requestOption = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({name, fromEmail, subject, toEmail, msg})
        }
    
        event.target.reset()
    
        const result = await fetch(contact.url, requestOption)
    
        const data = await result.json()
        document.getElementById('response').innerText = data.message
        setProcess(false)
    }

    return (
        <div className="form-box" onSubmit={event => call(event) }>
            <form className="contact-form">
                <input type="text" name="name" placeholder={contact.form.name} className="contact-input" required/>
                <input type="email" name="email" placeholder={contact.form.email} className="contact-input" required/>
                <input type="text" name="subject" placeholder={contact.form.subject} className="contact-input" required/>
                <textarea type="text" name="msg" placeholder={contact.form.message} className="contact-input" required></textarea>
                <button type="submit" id="submit-btn" className="main-button contact-button " >
                    { inProcess ? <img src={loader} alt="" className="loader" /> : '' }
                    <span>Submit</span>
                </button>
                <div id="response"></div>
            </form>
        </div>
    )
} 

