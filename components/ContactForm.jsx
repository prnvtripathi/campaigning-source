import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
    const form = useRef();

    const createAlert = (message) => {
        const alertBox = document.querySelector('.alert');
        alertBox.innerHTML = message;
        alertBox.style.display = 'block';
        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pazplff', 'template_nez5obe', form.current, 'NkREpU3WwM0aYiRku')
            .then((result) => {
                createAlert('Message Sent Successfully!');
            }, (error) => {
                createAlert('Message Sending Failed!, Try Again Later!');
            });
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                <label>Name</label>
                <input type="text" name="user_name" placeholder='Your Name' required />
                <label>Email</label>
                <input type="email" name="user_email" placeholder='Your Email' required />
                <label>Message</label>
                <textarea name="message" placeholder='What you wanna say to us?' required />
                <button className='btn-primary'>Send</button>
            </form>
            <div className="alert"></div>
        </>

    );
};

export default ContactForm;