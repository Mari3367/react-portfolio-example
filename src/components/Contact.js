import './contact.css';
import {FaTelegram} from 'react-icons/fa';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zpli22e', 'template_pp3z5zr', form.current, 'wgT6E1H-w1vMs6GqP')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset();
      };

    return(
        <div className='contact-container'>
            <h2 className='contact-header'>CONTACT ME</h2>
            <div className='contact-wrapper'>
                <div className='contact-media-icons-container'>
                    <a href='https://t.me/Mari9amM' className='media-icon' target='_blank' rel='noreferrer'><FaTelegram /></a>
                    <a href='https://www.linkedin.com/in/mariam-mirzoyan-b20a88275/' className='media-icon' target='_blank' rel='noreferrer'><FaLinkedinIn /></a>
                    <a href='https://github.com/Mari3367' className='media-icon' target='_blank' rel='noreferrer'><AiFillGithub /></a>
                </div>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your message' required></textarea>
                    <button type='submit' className='send-button'>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;